// VibeEdu Application Controller

class VibeEduApp {
  constructor() {
    this.lessons = window.lessonsData || [];
    this.progress = this.loadProgress();
    this.currentLesson = null;
    
    this.initElements();
    this.bindEvents();
    this.showView('dashboard');
    this.updateGlobalProgress();
    this.renderDashboard();
  }

  initElements() {
    // Views
    this.dashboardView = document.getElementById('dashboard-view');
    this.lessonView = document.getElementById('lesson-view');
    
    // Global Elements
    this.progressFill = document.getElementById('progress-fill');
    this.progressText = document.getElementById('progress-text');
    this.navProgressContainer = document.getElementById('nav-progress-container');
    
    // Dashboard Elements
    this.coursesGrid = document.getElementById('courses-grid');
    
    // Lesson View Elements
    this.btnBackToDashboard = document.getElementById('btn-back-dashboard');
    this.lessonPath = document.getElementById('lesson-path');
    this.lessonTitle = document.getElementById('lesson-title');
    this.theoryContent = document.getElementById('theory-content');
    
    // Quiz Panel
    this.quizQuestion = document.getElementById('quiz-question');
    this.quizOptions = document.getElementById('quiz-options');
    this.quizSubmit = document.getElementById('quiz-submit');
    this.quizFeedback = document.getElementById('quiz-feedback');
    
    // Interactive Panel
    this.playgroundTitle = document.getElementById('playground-title');
    this.interactivePlayground = document.getElementById('interactive-playground');
    
    // Congrats Modal
    this.congratsOverlay = document.getElementById('congrats-overlay');
    this.congratsTitle = document.getElementById('congrats-title');
    this.congratsText = document.getElementById('congrats-text');
    this.congratsBtn = document.getElementById('congrats-btn');
    this.congratsCanvas = document.getElementById('congrats-canvas');
    
    // Navigation Footer
    this.btnPrevLesson = document.getElementById('btn-prev-lesson');
    this.btnNextLesson = document.getElementById('btn-next-lesson');
  }

  bindEvents() {
    this.btnBackToDashboard.addEventListener('click', () => {
      this.stopCurrentLessonCanvas();
      this.showView('dashboard');
      this.renderDashboard();
      this.updateGlobalProgress();
    });
    
    this.congratsBtn.addEventListener('click', () => {
      this.hideCongrats();
      this.goToNextLesson();
    });

    // Make sure resizing window updates canvas sizing
    window.addEventListener('resize', () => {
      if (this.currentLesson && this.currentLesson.widgetType === 'canvas') {
        const canvas = document.getElementById('canvas-preview');
        if (canvas) {
          // Keep internal width 400x300, styled with CSS for scale
        }
      }
    });
  }

  // Progress Management
  loadProgress() {
    try {
      const saved = localStorage.getItem('vibe_edu_progress');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Lỗi đọc tiến độ học tập:", e);
      return {};
    }
  }

  saveProgress() {
    try {
      localStorage.setItem('vibe_edu_progress', JSON.stringify(this.progress));
    } catch (e) {
      console.error("Lỗi ghi tiến độ học tập:", e);
    }
  }

  updateGlobalProgress() {
    if (!this.lessons.length) return;
    const completedCount = this.lessons.filter(l => this.progress[l.id]).length;
    const percentage = Math.round((completedCount / this.lessons.length) * 100);
    this.progressFill.style.width = `${percentage}%`;
    this.progressText.textContent = `${percentage}%`;
  }

  // View Routing
  showView(viewName) {
    if (viewName === 'dashboard') {
      this.dashboardView.style.display = 'block';
      this.lessonView.style.display = 'none';
      this.navProgressContainer.style.display = 'flex';
    } else {
      this.dashboardView.style.display = 'none';
      this.lessonView.style.display = 'grid';
      this.navProgressContainer.style.display = 'flex';
    }
  }

  // Render Dashboard
  renderDashboard() {
    this.coursesGrid.innerHTML = '';
    
    // Group lessons by Course Title
    const coursesMap = {};
    this.lessons.forEach((lesson, index) => {
      if (!coursesMap[lesson.courseTitle]) {
        coursesMap[lesson.courseTitle] = [];
      }
      coursesMap[lesson.courseTitle].push({ lesson, index });
    });

    Object.keys(coursesMap).forEach(courseTitle => {
      const lessonsList = coursesMap[courseTitle];
      const card = document.createElement('div');
      card.className = 'course-card';
      
      const badge = document.createElement('div');
      badge.className = 'course-badge';
      badge.textContent = `Chương Trình`;
      
      const title = document.createElement('h3');
      title.className = 'course-title';
      title.textContent = courseTitle;
      
      const desc = document.createElement('p');
      desc.className = 'course-desc';
      desc.textContent = `Khoá học khám phá thế giới ${courseTitle} trực quan sinh động.`;
      
      const list = document.createElement('ul');
      list.className = 'lesson-list';
      
      lessonsList.forEach(({ lesson, index }) => {
        const isCompleted = !!this.progress[lesson.id];
        const item = document.createElement('a');
        item.href = '#';
        item.className = `lesson-item ${isCompleted ? 'completed' : ''}`;
        item.innerHTML = `
          <div class="lesson-item-left">
            <div class="lesson-status-icon"></div>
            <span class="lesson-name">${lesson.title}</span>
          </div>
          <span class="lesson-action-btn">${isCompleted ? 'Học lại' : 'Bắt đầu'} →</span>
        `;
        
        item.addEventListener('click', (e) => {
          e.preventDefault();
          this.startLesson(lesson.id);
        });
        
        list.appendChild(item);
      });
      
      card.appendChild(badge);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(list);
      
      this.coursesGrid.appendChild(card);
    });
  }

  // Start Lesson
  startLesson(lessonId) {
    const lesson = this.lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    this.currentLesson = lesson;
    this.showView('lesson');
    
    // Set text
    this.lessonPath.textContent = `${lesson.courseTitle} / ${lesson.title}`;
    this.lessonTitle.textContent = lesson.title;
    this.theoryContent.innerHTML = lesson.theory;
    
    // Reset quiz feedback
    this.quizFeedback.style.display = 'none';
    this.quizFeedback.className = 'quiz-feedback';
    
    // Render Quiz and interactive controls
    this.renderQuiz(lesson);
    this.renderWidget(lesson);
    
    // Set up Footer navigation
    this.updateNavigationButtons();
  }

  updateNavigationButtons() {
    const idx = this.lessons.findIndex(l => l.id === this.currentLesson.id);
    
    // Prev button
    if (idx > 0) {
      this.btnPrevLesson.classList.remove('disabled');
      // Remove old listeners
      const newPrev = this.btnPrevLesson.cloneNode(true);
      this.btnPrevLesson.parentNode.replaceChild(newPrev, this.btnPrevLesson);
      this.btnPrevLesson = newPrev;
      this.btnPrevLesson.addEventListener('click', () => {
        this.stopCurrentLessonCanvas();
        this.startLesson(this.lessons[idx - 1].id);
      });
    } else {
      this.btnPrevLesson.classList.add('disabled');
    }
    
    // Next button
    if (idx < this.lessons.length - 1) {
      this.btnNextLesson.classList.remove('disabled');
      const newNext = this.btnNextLesson.cloneNode(true);
      this.btnNextLesson.parentNode.replaceChild(newNext, this.btnNextLesson);
      this.btnNextLesson = newNext;
      this.btnNextLesson.addEventListener('click', () => {
        this.stopCurrentLessonCanvas();
        this.startLesson(this.lessons[idx + 1].id);
      });
    } else {
      this.btnNextLesson.classList.add('disabled');
    }
  }

  goToNextLesson() {
    const idx = this.lessons.findIndex(l => l.id === this.currentLesson.id);
    if (idx < this.lessons.length - 1) {
      this.startLesson(this.lessons[idx + 1].id);
    } else {
      this.showView('dashboard');
      this.renderDashboard();
      this.updateGlobalProgress();
    }
  }

  // Render Quiz
  renderQuiz(lesson) {
    this.quizQuestion.textContent = lesson.quiz.question;
    this.quizOptions.innerHTML = '';
    
    let selectedAnswerIdx = null;
    
    lesson.quiz.options.forEach((option, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.innerHTML = `
        <span class="quiz-option-letter">${String.fromCharCode(65 + idx)}</span>
        <span class="quiz-option-text">${option}</span>
      `;
      
      btn.addEventListener('click', () => {
        // Clear selection
        document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
        btn.classList.add('selected');
        selectedAnswerIdx = idx;
      });
      
      this.quizOptions.appendChild(btn);
    });
    
    // Rebind submit action
    const newSubmit = this.quizSubmit.cloneNode(true);
    this.quizSubmit.parentNode.replaceChild(newSubmit, this.quizSubmit);
    this.quizSubmit = newSubmit;
    
    this.quizSubmit.addEventListener('click', () => {
      if (selectedAnswerIdx === null) {
        this.showQuizFeedback(false, "Vui lòng chọn một phương án trả lời!");
        return;
      }
      
      const isCorrect = selectedAnswerIdx === lesson.quiz.correctAnswer;
      if (isCorrect) {
        this.showQuizFeedback(true, lesson.quiz.explanation);
        this.markLessonCompleted(lesson.id);
        
        // Disable option interactions after correct answer
        document.querySelectorAll('.quiz-option').forEach((el, index) => {
          el.style.pointerEvents = 'none';
          if (index === lesson.quiz.correctAnswer) {
            el.className = 'quiz-option correct';
          }
        });
        
        setTimeout(() => {
          this.triggerCelebration();
        }, 800);
      } else {
        this.showQuizFeedback(false, "Câu trả lời chưa chính xác. Hãy đọc kỹ phần lý thuyết và thử lại nhé!");
        // Highlight incorrect option
        document.querySelectorAll('.quiz-option').forEach((el, index) => {
          if (index === selectedAnswerIdx) {
            el.className = 'quiz-option incorrect';
          }
        });
      }
    });
  }

  showQuizFeedback(isSuccess, text) {
    this.quizFeedback.style.display = 'block';
    this.quizFeedback.className = `quiz-feedback ${isSuccess ? 'success' : 'error'}`;
    this.quizFeedback.textContent = text;
  }

  markLessonCompleted(lessonId) {
    this.progress[lessonId] = true;
    this.saveProgress();
    this.updateGlobalProgress();
  }

  // Stop Canvas Animation loops
  stopCurrentLessonCanvas() {
    if (window.canvasAnimId) {
      cancelAnimationFrame(window.canvasAnimId);
      window.canvasAnimId = null;
    }
  }

  // Render Interactive Widget Zone
  renderWidget(lesson) {
    this.interactivePlayground.innerHTML = '';
    this.playgroundTitle.textContent = `Không gian tương tác: ${lesson.widgetType === 'canvas' ? 'JavaScript Sandbox' : 'CSS Preview'}`;
    
    if (lesson.widgetType === 'flexbox' || lesson.widgetType === 'grid') {
      this.renderLayoutWidget(lesson);
    } else if (lesson.widgetType === 'canvas') {
      this.renderCanvasWidget(lesson);
    }
  }

  renderLayoutWidget(lesson) {
    const isGrid = lesson.widgetType === 'grid';
    
    const container = document.createElement('div');
    container.className = 'layout-widget-container';
    
    // Preview screen
    const previewZone = document.createElement('div');
    previewZone.className = 'widget-preview-zone';
    
    const interactiveBox = document.createElement('div');
    interactiveBox.className = 'interactive-container';
    
    // Set flex/grid display mode
    interactiveBox.style.display = isGrid ? 'grid' : 'flex';
    
    // Populate items inside interactive box
    for (let i = 1; i <= lesson.widgetConfig.itemsCount; i++) {
      const item = document.createElement('div');
      item.className = 'interactive-item';
      item.textContent = i;
      interactiveBox.appendChild(item);
    }
    
    previewZone.appendChild(interactiveBox);
    
    // Control options
    const controlsZone = document.createElement('div');
    controlsZone.className = 'widget-controls-zone';
    
    // Setup state object for current property selections
    const layoutState = {};
    lesson.widgetConfig.controls.forEach(ctrl => {
      layoutState[ctrl.property] = ctrl.default;
      interactiveBox.style[ctrl.property] = ctrl.default;
    });
    
    // CSS Code Preview
    const codePreview = document.createElement('div');
    codePreview.className = 'widget-code-preview';
    
    const updateCodeDisplay = () => {
      let codeText = `.container {\n  display: ${isGrid ? 'grid' : 'flex'};\n`;
      Object.keys(layoutState).forEach(prop => {
        codeText += `  ${prop}: ${layoutState[prop]};\n`;
      });
      codeText += `}`;
      codePreview.innerHTML = `<pre>${codeText.replace(/ /g, '&nbsp;')}</pre>`;
    };
    
    updateCodeDisplay();

    // Generate controls GUI
    lesson.widgetConfig.controls.forEach(ctrl => {
      const group = document.createElement('div');
      group.className = 'control-group';
      
      const label = document.createElement('span');
      label.className = 'control-label';
      label.textContent = ctrl.label;
      
      const btnContainer = document.createElement('div');
      btnContainer.className = 'control-buttons';
      
      ctrl.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = `control-btn ${opt === ctrl.default ? 'active' : ''}`;
        btn.textContent = opt;
        
        btn.addEventListener('click', () => {
          // Update DOM button active status
          btnContainer.querySelectorAll('.control-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          // Update layout and states
          layoutState[ctrl.property] = opt;
          interactiveBox.style[ctrl.property] = opt;
          
          // Re-update code block
          updateCodeDisplay();
        });
        
        btnContainer.appendChild(btn);
      });
      
      group.appendChild(label);
      group.appendChild(btnContainer);
      controlsZone.appendChild(group);
    });
    
    controlsZone.appendChild(codePreview);
    
    container.appendChild(previewZone);
    container.appendChild(controlsZone);
    this.interactivePlayground.appendChild(container);
  }

  renderCanvasWidget(lesson) {
    const container = document.createElement('div');
    container.className = 'canvas-widget-container';
    
    // Canvas Preview screen
    const previewZone = document.createElement('div');
    previewZone.className = 'canvas-preview-zone';
    
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas-preview';
    canvas.className = 'canvas-element';
    canvas.width = 400;
    canvas.height = 300;
    
    previewZone.appendChild(canvas);
    
    // Editor screen
    const editorZone = document.createElement('div');
    editorZone.className = 'canvas-editor-zone';
    
    const header = document.createElement('div');
    header.className = 'editor-header';
    header.innerHTML = `
      <span style="font-size:12px; font-weight:600; color:var(--text-muted);">CODE EDITOR</span>
      <div class="editor-actions">
        <button id="btn-reset" class="btn-reset-code">Khôi phục</button>
        <button id="btn-run" class="btn-run-code">Chạy Code</button>
      </div>
    `;
    
    const textarea = document.createElement('textarea');
    textarea.className = 'code-textarea';
    textarea.value = lesson.widgetConfig.initialCode;
    textarea.spellcheck = false;
    
    const consoleLog = document.createElement('div');
    consoleLog.className = 'editor-console';
    consoleLog.id = 'editor-console';
    consoleLog.textContent = '> Sandbox initialized. Sẵn sàng chạy vẽ.';
    
    editorZone.appendChild(header);
    editorZone.appendChild(textarea);
    editorZone.appendChild(consoleLog);
    
    container.appendChild(previewZone);
    container.appendChild(editorZone);
    
    this.interactivePlayground.appendChild(container);
    
    // Execution engine
    const runCode = () => {
      this.stopCurrentLessonCanvas();
      
      const ctx = canvas.getContext('2d');
      const code = textarea.value;
      
      consoleLog.className = 'editor-console';
      consoleLog.textContent = '> Đang chạy code...';
      
      try {
        // Create isolated script runner function
        const runner = new Function('ctx', code);
        runner(ctx);
        
        // If there's no animation loop running, show completion log
        setTimeout(() => {
          if (!window.canvasAnimId) {
            consoleLog.textContent = '> Vẽ hoàn tất thành công!';
          } else {
            consoleLog.textContent = '> Vòng lặp chuyển động đang chạy...';
          }
        }, 100);
      } catch (err) {
        consoleLog.className = 'editor-console error';
        consoleLog.textContent = `❌ Lỗi: ${err.message}`;
      }
    };
    
    // Bind buttons
    header.querySelector('#btn-run').addEventListener('click', runCode);
    header.querySelector('#btn-reset').addEventListener('click', () => {
      textarea.value = lesson.widgetConfig.initialCode;
      runCode();
    });
    
    // Run code automatically for initial render
    setTimeout(runCode, 200);
  }

  // Celebrations & Fireworks Modal
  triggerCelebration() {
    this.congratsOverlay.classList.add('show');
    
    // Choose appropriate congrats text
    const idx = this.lessons.findIndex(l => l.id === this.currentLesson.id);
    if (idx === this.lessons.length - 1) {
      this.congratsTitle.textContent = "Chúc Mừng Tốt Nghiệp!";
      this.congratsText.textContent = "Bạn đã hoàn thành xuất sắc tất cả các bài học trong VibeEdu. Tuyệt vời!";
      this.congratsBtn.textContent = "Xem lại Dashboard";
    } else {
      this.congratsTitle.textContent = "Chính Xác!";
      this.congratsText.textContent = `Bạn đã vượt qua câu hỏi trắc nghiệm của bài học: "${this.currentLesson.title}".`;
      this.congratsBtn.textContent = "Bài Tiếp Theo →";
    }

    // Launch beautiful canvas fireworks
    this.launchFireworks();
  }

  hideCongrats() {
    this.congratsOverlay.classList.remove('show');
    if (this.fireworkAnimId) {
      cancelAnimationFrame(this.fireworkAnimId);
      this.fireworkAnimId = null;
    }
  }

  launchFireworks() {
    const canvas = this.congratsCanvas;
    const ctx = canvas.getContext('2d');
    
    // Set size to full window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles system
    const particles = [];
    const colors = ['#00ffc8', '#7c3aed', '#ff00aa', '#00a8ff', '#ffff00'];
    
    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * 3 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = Math.random() * 6 + 2;
        this.vx = Math.cos(this.angle) * this.velocity;
        this.vy = Math.sin(this.angle) * this.velocity;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.01;
        this.gravity = 0.08;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
      }
    }

    class Rocket {
      constructor(targetX, targetY) {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.targetX = targetX;
        this.targetY = targetY;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = 12;
        this.angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.exploded = false;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Check distance to target
        const dist = Math.hypot(this.targetX - this.x, this.targetY - this.y);
        if (dist < 15 || this.vy >= 0) {
          this.exploded = true;
          this.explode();
        }
      }

      explode() {
        const pCount = 50 + Math.floor(Math.random() * 40);
        for (let i = 0; i < pCount; i++) {
          particles.push(new Particle(this.x, this.y, this.color));
        }
      }
    }

    const rockets = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Auto launch rockets randomly
      if (Math.random() < 0.05 && rockets.length < 5) {
        rockets.push(new Rocket(
          Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
          Math.random() * canvas.height * 0.5 + canvas.height * 0.1
        ));
      }

      // Update rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        rockets[i].draw();
        rockets[i].update();
        if (rockets[i].exploded) {
          rockets.splice(i, 1);
        }
      }

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].draw();
        particles[i].update();
        if (particles[i].alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      this.fireworkAnimId = requestAnimationFrame(animate);
    };

    // Trigger initial burst
    rockets.push(new Rocket(canvas.width / 2, canvas.height / 3));
    rockets.push(new Rocket(canvas.width / 3, canvas.height / 2.5));
    rockets.push(new Rocket(canvas.width * 2 / 3, canvas.height / 2.5));
    
    animate();
  }
}

// Instantiate App on load
document.addEventListener('DOMContentLoaded', () => {
  window.vibeEduApp = new VibeEduApp();
});
