// Simplified Service Worker for Shopee Copier & Auto-Filler

// Convert blob to base64 using Uint8Array chunking to avoid call stack size limits
async function blobToBase64(blob) {
  const buffer = await blob.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return "data:" + blob.type + ";base64," + btoa(binary);
}

// Fetch image as base64 to avoid CORS issues in content scripts
async function fetchImageAsBase64(imageUrl) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const blob = await response.blob();
    return await blobToBase64(blob);
  } catch (e) {
    console.error("Error fetching image:", imageUrl, e);
    return null;
  }
}

// Main message listener (only handles image downloads for CORS bypass)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  (async () => {
    try {
      if (message.action === "downloadImages") {
        const imageUrls = message.urls || [];
        const base64Images = [];
        
        for (const url of imageUrls) {
          const base64 = await fetchImageAsBase64(url);
          base64Images.push({ url, base64 });
        }
        
        sendResponse({ success: true, images: base64Images });
      }
    } catch (error) {
      console.error("Service Worker Error:", error);
      sendResponse({ success: false, error: error.message });
    }
  })();
  
  return true; // Keep message channel open for async response
});
