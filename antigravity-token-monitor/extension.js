const vscode = require('vscode');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Protobuf decoding utility functions
function parseVarint(buffer, pos) {
    let result = 0n;
    let shift = 0n;
    while (true) {
        if (pos >= buffer.length) {
            return { val: null, pos };
        }
        const b = buffer[pos];
        pos++;
        result |= BigInt(b & 0x7f) << shift;
        if (!(b & 0x80)) {
            break;
        }
        shift += 7n;
    }
    return { val: result, pos };
}

function decodeProtobuf(buffer) {
    let pos = 0;
    const fields = {};
    while (pos < buffer.length) {
        const keyResult = parseVarint(buffer, pos);
        const key = keyResult.val;
        pos = keyResult.pos;
        if (key === null) {
            break;
        }
        const wireType = Number(key & 7n);
        const fieldNum = Number(key >> 3n);

        if (wireType === 0) { // Varint
            const valResult = parseVarint(buffer, pos);
            const val = valResult.val;
            pos = valResult.pos;
            if (val === null) break;
            if (!fields[fieldNum]) fields[fieldNum] = [];
            fields[fieldNum].push({ type: 'varint', val: Number(val) });
        } else if (wireType === 1) { // 64-bit
            if (pos + 8 > buffer.length) break;
            const val = buffer.readBigInt64LE ? buffer.readBigInt64LE(pos) : 0n;
            pos += 8;
            if (!fields[fieldNum]) fields[fieldNum] = [];
            fields[fieldNum].push({ type: '64bit', val });
        } else if (wireType === 2) { // Length-delimited
            const lenResult = parseVarint(buffer, pos);
            const len = Number(lenResult.val);
            pos = lenResult.pos;
            if (len === null || pos + len > buffer.length) break;
            const val = buffer.subarray(pos, pos + len);
            pos += len;
            
            const nested = decodeProtobuf(val);
            if (Object.keys(nested).length > 0) {
                if (!fields[fieldNum]) fields[fieldNum] = [];
                fields[fieldNum].push({ type: 'nested', val: nested });
            } else {
                try {
                    const strVal = val.toString('utf-8');
                    let isPrintable = true;
                    for (let i = 0; i < strVal.length; i++) {
                        const code = strVal.charCodeAt(i);
                        if (code < 32 && code !== 10 && code !== 13 && code !== 9) {
                            isPrintable = false;
                            break;
                        }
                    }
                    if (isPrintable && strVal.length > 0) {
                        if (!fields[fieldNum]) fields[fieldNum] = [];
                        fields[fieldNum].push({ type: 'string', val: strVal });
                    } else {
                        if (!fields[fieldNum]) fields[fieldNum] = [];
                        fields[fieldNum].push({ type: 'bytes', val: val.toString('hex') });
                    }
                } catch(e) {
                    if (!fields[fieldNum]) fields[fieldNum] = [];
                    fields[fieldNum].push({ type: 'bytes', val: val.toString('hex') });
                }
            }
        } else if (wireType === 5) { // 32-bit
            if (pos + 4 > buffer.length) break;
            const val = buffer.readInt32LE ? buffer.readInt32LE(pos) : 0;
            pos += 4;
            if (!fields[fieldNum]) fields[fieldNum] = [];
            fields[fieldNum].push({ type: '32bit', val });
        } else {
            break;
        }
    }
    return fields;
}

function extractStats(fields) {
    const stats = {};
    if (fields[1]) {
        for (const item of fields[1]) {
            if (item.type === 'nested') {
                const f1 = item.val;
                if (f1[3]) {
                    for (const item2 of f1[3]) {
                        if (item2.type === 'varint') {
                            stats.f1_3 = item2.val;
                        }
                    }
                }
                if (f1[4]) {
                    for (const item2 of f1[4]) {
                        if (item2.type === 'nested') {
                            const f4 = item2.val;
                            for (const fn of Object.keys(f4)) {
                                const vals = f4[fn];
                                for (const v of vals) {
                                    if (v.type === 'varint' || v.type === 'string') {
                                        stats[`f1_4_${fn}`] = v.val;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return stats;
}

function getCost(model, input, cached, output) {
    const m = (model || '').toLowerCase();
    
    // Default prices (Gemini Flash)
    let inputPrice = 0.075 / 1e6;
    let cachedPrice = 0.01875 / 1e6;
    let outputPrice = 0.30 / 1e6;

    if (m.includes('claude-3-5') || m.includes('claude')) {
        inputPrice = 3.0 / 1e6;
        cachedPrice = 0.75 / 1e6;
        outputPrice = 15.0 / 1e6;
    } else if (m.includes('gpt-4o-mini')) {
        inputPrice = 0.15 / 1e6;
        cachedPrice = 0.075 / 1e6;
        outputPrice = 0.60 / 1e6;
    } else if (m.includes('gpt-4o') || m.includes('gpt-4')) {
        inputPrice = 2.50 / 1e6;
        cachedPrice = 1.25 / 1e6;
        outputPrice = 10.00 / 1e6;
    } else if (m.includes('pro') || m.includes('gemini-1.5-pro')) {
        const isLongContext = (input + cached) > 128000;
        inputPrice = (isLongContext ? 2.50 : 1.25) / 1e6;
        cachedPrice = (isLongContext ? 0.625 : 0.3125) / 1e6;
        outputPrice = (isLongContext ? 10.00 : 5.00) / 1e6;
    } else {
        const isLongContext = (input + cached) > 128000;
        inputPrice = (isLongContext ? 0.15 : 0.075) / 1e6;
        cachedPrice = (isLongContext ? 0.0375 : 0.01875) / 1e6;
        outputPrice = (isLongContext ? 0.60 : 0.30) / 1e6;
    }

    return (input * inputPrice) + (cached * cachedPrice) + (output * outputPrice);
}

// Extension state
let extensionContext = null;
let activeDbPath = null;
let lastMtime = 0;
let statusBarItem = null;
let activePanel = null;
let sessionStats = {
    totalPrompt: 0,
    totalCached: 0,
    totalResponse: 0,
    totalTokens: 0,
    totalCost: 0,
    steps: []
};
let rawSessionStats = {
    totalPrompt: 0,
    totalCached: 0,
    totalResponse: 0,
    totalTokens: 0,
    totalCost: 0,
    steps: []
};
let resetOffset = {
    prompt: 0,
    cached: 0,
    response: 0,
    cost: 0,
    stepsCount: 0,
    resetTimestamp: Date.now()
};

// Find active database
function getActiveDbPath() {
    const convoDir = path.join(os.homedir(), '.gemini', 'antigravity-ide', 'conversations');
    if (!fs.existsSync(convoDir)) return null;
    try {
        const files = fs.readdirSync(convoDir)
            .filter(f => f.endsWith('.db'))
            .map(f => {
                const filepath = path.join(convoDir, f);
                try {
                    let mtime = fs.statSync(filepath).mtimeMs;
                    const walPath = `${filepath}-wal`;
                    if (fs.existsSync(walPath)) {
                        mtime = Math.max(mtime, fs.statSync(walPath).mtimeMs);
                    }
                    return { path: filepath, mtime };
                } catch(e) {
                    return { path: filepath, mtime: 0 };
                }
            })
            .sort((a, b) => b.mtime - a.mtime);

        return files.length > 0 ? files[0].path : null;
    } catch(e) {
        console.error("Error finding DB path:", e);
        return null;
    }
}

// Query and parse database
function updateStats(force = false) {
    const currentDbPath = getActiveDbPath();
    if (!currentDbPath) return;

    let mtime = 0;
    try {
        mtime = fs.statSync(currentDbPath).mtimeMs;
        const walPath = `${currentDbPath}-wal`;
        if (fs.existsSync(walPath)) {
            const walMtime = fs.statSync(walPath).mtimeMs;
            mtime = Math.max(mtime, walMtime);
        }
    } catch(e) {
        return;
    }

    if (currentDbPath !== activeDbPath) {
        activeDbPath = currentDbPath;
        lastMtime = mtime;
        
        // Restore offsets from workspaceState
        if (extensionContext) {
            const dbKey = path.basename(activeDbPath);
            resetOffset = extensionContext.workspaceState.get(`resetOffset_${dbKey}`) || {
                prompt: 0,
                cached: 0,
                response: 0,
                cost: 0,
                stepsCount: 0,
                resetTimestamp: Date.now()
            };
        } else {
            resetOffset = {
                prompt: 0,
                cached: 0,
                response: 0,
                cost: 0,
                stepsCount: 0,
                resetTimestamp: Date.now()
            };
        }

        sessionStats = {
            totalPrompt: 0,
            totalCached: 0,
            totalResponse: 0,
            totalTokens: 0,
            totalCost: 0,
            steps: []
        };
        rawSessionStats = {
            totalPrompt: 0,
            totalCached: 0,
            totalResponse: 0,
            totalTokens: 0,
            totalCost: 0,
            steps: []
        };
        force = true;
    } else if (mtime === lastMtime && !force) {
        return; // nothing changed
    }

    lastMtime = mtime;

    // Fetch all metadata records to compute running sums
    exec(`sqlite3 "${activeDbPath}" "SELECT idx, hex(data) FROM gen_metadata ORDER BY idx ASC;"`, { maxBuffer: 25 * 1024 * 1024 }, (err, stdout, stderr) => {
        if (err) {
            console.error("sqlite3 query error:", err);
            return;
        }

        const lines = stdout.trim().split('\n');
        const steps = [];
        let totalPrompt = 0;
        let totalCached = 0;
        let totalResponse = 0;
        let totalCost = 0;

        lines.forEach(line => {
            const parts = line.split('|');
            if (parts.length < 2) return;
            const idx = parseInt(parts[0]);
            const hex = parts[1];
            if (!hex) return;

            try {
                const buf = Buffer.from(hex, 'hex');
                const fields = decodeProtobuf(buf);
                const stats = extractStats(fields);

                let modelName = 'Gemini 3.5 Flash';
                if (fields[21] && fields[21][0]) modelName = fields[21][0].val;
                else if (fields[19] && fields[19][0]) modelName = fields[19][0].val;

                const input = stats.f1_4_2 || 0;
                const cached = stats.f1_4_5 || 0;
                const output = stats.f1_4_3 || 0;
                const stepCostUSD = getCost(modelName, input, cached, output);
                const stepCostVND = stepCostUSD * 25400;

                totalPrompt += input;
                totalCached += cached;
                totalResponse += output;
                totalCost += stepCostVND;

                steps.push({
                    idx,
                    model: modelName,
                    input,
                    cached,
                    output,
                    total: input + cached + output,
                    cost: stepCostVND
                });
            } catch(e) {
                console.error("Error decoding protobuf:", e);
            }
        });

        rawSessionStats = {
            totalPrompt,
            totalCached,
            totalResponse,
            totalTokens: totalPrompt + totalCached + totalResponse,
            totalCost,
            steps
        };

        const activePrompt = Math.max(0, totalPrompt - resetOffset.prompt);
        const activeCached = Math.max(0, totalCached - resetOffset.cached);
        const activeResponse = Math.max(0, totalResponse - resetOffset.response);
        const activeCost = Math.max(0, totalCost - resetOffset.cost);
        const activeSteps = steps.slice(resetOffset.stepsCount);

        sessionStats = {
            totalPrompt: activePrompt,
            totalCached: activeCached,
            totalResponse: activeResponse,
            totalTokens: activePrompt + activeCached + activeResponse,
            totalCost: activeCost,
            steps: activeSteps,
            resetTimestamp: resetOffset.resetTimestamp || Date.now()
        };

        updateUI();
    });
}

function updateUI() {
    // 1. Update Status Bar
    if (statusBarItem) {
        const tokensFormatted = formatTokens(sessionStats.totalTokens);
        statusBarItem.text = `$(fire) ${tokensFormatted}`;
        statusBarItem.tooltip = `Antigravity Token Monitor\nTotal Tokens: ${sessionStats.totalTokens.toLocaleString()}\nPrompt (Uncached): ${sessionStats.totalPrompt.toLocaleString()}\nCache Read: ${sessionStats.totalCached.toLocaleString()}\nResponse: ${sessionStats.totalResponse.toLocaleString()}\nEst. Cost: ${Math.round(sessionStats.totalCost).toLocaleString()} ₫`;
        statusBarItem.show();
    }

    // 2. Notify webview
    if (activePanel) {
        activePanel.webview.postMessage({
            command: 'update',
            stats: sessionStats
        });
    }
}

function formatTokens(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
}

// Sidebar View Provider
class TokenDashboardProvider {
    resolveWebviewView(webviewView, context, token) {
        activePanel = webviewView;
        webviewView.webview.options = {
            enableScripts: true
        };

        const htmlPath = path.join(__dirname, 'dashboard.html');
        let htmlContent = fs.readFileSync(htmlPath, 'utf8');
        webviewView.webview.html = htmlContent;

        webviewView.onDidChangeVisibility(() => {
            if (webviewView.visible) {
                updateStats(true);
            }
        });

        // Listen for messages from webview
        webviewView.webview.onDidReceiveMessage(message => {
            if (message.command === 'refresh') {
                updateStats(true);
            } else if (message.command === 'reset') {
                resetOffset.prompt = rawSessionStats.totalPrompt;
                resetOffset.cached = rawSessionStats.totalCached;
                resetOffset.response = rawSessionStats.totalResponse;
                resetOffset.cost = rawSessionStats.totalCost;
                resetOffset.stepsCount = rawSessionStats.steps.length;
                resetOffset.resetTimestamp = Date.now();

                if (extensionContext && activeDbPath) {
                    const dbKey = path.basename(activeDbPath);
                    extensionContext.workspaceState.update(`resetOffset_${dbKey}`, resetOffset);
                }

                sessionStats = {
                    totalPrompt: 0,
                    totalCached: 0,
                    totalResponse: 0,
                    totalTokens: 0,
                    totalCost: 0,
                    steps: [],
                    resetTimestamp: resetOffset.resetTimestamp
                };
                updateUI();
            }
        });

        // Send initial state
        setTimeout(() => {
            updateUI();
        }, 500);

        webviewView.onDidDispose(() => {
            activePanel = null;
        });
    }
}

function activate(context) {
    extensionContext = context;
    console.log('Antigravity Token Monitor activated.');

    // Create Status Bar Item
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 99);
    statusBarItem.command = 'antigravity-token-monitor.openDashboard';
    context.subscriptions.push(statusBarItem);

    // Register Webview View Provider
    const provider = new TokenDashboardProvider();
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider('antigravity-token-monitor-sidebar', provider)
    );

    // Register Commands
    context.subscriptions.push(
        vscode.commands.registerCommand('antigravity-token-monitor.openDashboard', () => {
            vscode.commands.executeCommand('workbench.view.extension.antigravity-token-monitor-container');
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('antigravity-token-monitor.resetSession', () => {
            resetOffset.prompt = rawSessionStats.totalPrompt;
            resetOffset.cached = rawSessionStats.totalCached;
            resetOffset.response = rawSessionStats.totalResponse;
            resetOffset.cost = rawSessionStats.totalCost;
            resetOffset.stepsCount = rawSessionStats.steps.length;
            resetOffset.resetTimestamp = Date.now();

            if (extensionContext && activeDbPath) {
                const dbKey = path.basename(activeDbPath);
                extensionContext.workspaceState.update(`resetOffset_${dbKey}`, resetOffset);
            }

            sessionStats = {
                totalPrompt: 0,
                totalCached: 0,
                totalResponse: 0,
                totalTokens: 0,
                totalCost: 0,
                steps: [],
                resetTimestamp: resetOffset.resetTimestamp
            };
            updateUI();
            vscode.window.showInformationMessage('Session token statistics reset.');
        })
    );

    // Start DB Polling loop
    updateStats(true);
    const interval = setInterval(() => {
        updateStats();
    }, 300);

    context.subscriptions.push({
        dispose: () => clearInterval(interval)
    });
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
