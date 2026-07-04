// VibeEdu Course Landing Page Controller

class VibeEduApp {
  constructor() {
    this.courses = window.coursesData || [];
    this.currentCategory = 'all';
    
    this.initElements();
    this.bindEvents();
    this.renderCourses();
  }

  initElements() {
    // Navigation
    this.navLinks = document.querySelectorAll('.nav-link, .footer-nav-link');
    
    // Smooth scroll elements
    this.btnExplore = document.getElementById('btn-explore');
    this.coursesSection = document.getElementById('courses-section');
    this.instructorSection = document.getElementById('instructor-section');
    
    // Filters
    this.filterTabs = document.querySelectorAll('.filter-tab');
    this.coursesGrid = document.getElementById('courses-grid');
    
    // Modals
    this.syllabusModal = document.getElementById('syllabus-modal');
    this.registerModal = document.getElementById('register-modal');
    this.modalCloses = document.querySelectorAll('.modal-close');
    
    // Syllabus Modal specifics
    this.syllabusTitle = document.getElementById('syllabus-modal-title');
    this.syllabusTimeline = document.getElementById('syllabus-timeline');
    
    // Register Form Modal specifics
    this.registerForm = document.getElementById('register-form');
    this.registerCourseSelect = document.getElementById('register-course-select');
    this.registerSuccessScreen = document.getElementById('register-success-screen');
    this.successStudentName = document.getElementById('success-student-name');
    this.successCourseTitle = document.getElementById('success-course-title');
    
    // Toast
    this.toastNotification = document.getElementById('toast-notification');
    this.toastBody = document.getElementById('toast-body');
  }

  bindEvents() {
    // Nav links scrolling
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        
        // Remove active class
        this.navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        if (targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (targetId === 'courses') {
          this.coursesSection.scrollIntoView({ behavior: 'smooth' });
        } else if (targetId === 'instructor') {
          this.instructorSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // CTA Button in Hero
    if (this.btnExplore) {
      this.btnExplore.addEventListener('click', () => {
        this.coursesSection.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Filter clicks
    this.filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentCategory = tab.getAttribute('data-category');
        this.renderCourses();
      });
    });

    // Close Modals
    this.modalCloses.forEach(btn => {
      btn.addEventListener('click', () => {
        this.closeAllModals();
      });
    });

    // Clicking outside modal closes it
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        this.closeAllModals();
      }
    });

    // Form submit
    if (this.registerForm) {
      this.registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit();
      });
    }
  }

  // Close modals
  closeAllModals() {
    this.syllabusModal.classList.remove('active');
    this.registerModal.classList.remove('active');
    
    // Reset form states after close
    setTimeout(() => {
      if (this.registerForm) {
        this.registerForm.style.display = 'block';
        this.registerForm.reset();
      }
      if (this.registerSuccessScreen) {
        this.registerSuccessScreen.style.display = 'none';
      }
    }, 300);
  }

  // Show Toast
  showToast(message) {
    this.toastBody.textContent = message;
    this.toastNotification.classList.add('active');
    
    setTimeout(() => {
      this.toastNotification.classList.remove('active');
    }, 4000);
  }

  // Populate Register select dropdown dynamically
  populateCourseSelect(selectedId = '') {
    this.registerCourseSelect.innerHTML = '';
    this.courses.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.title;
      if (c.id === selectedId) {
        opt.selected = true;
      }
      this.registerCourseSelect.appendChild(opt);
    });
  }

  // Render Courses Cards
  renderCourses() {
    this.coursesGrid.innerHTML = '';
    
    const filtered = this.currentCategory === 'all' 
      ? this.courses 
      : this.courses.filter(c => c.category === this.currentCategory);
      
    if (filtered.length === 0) {
      this.coursesGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Không tìm thấy khoá học nào thuộc nhóm này.</div>';
      return;
    }

    filtered.forEach(course => {
      const card = document.createElement('div');
      card.className = 'catalog-card';
      
      // Star helper
      const starsHTML = '★'.repeat(Math.floor(course.rating)) + (course.rating % 1 !== 0 ? '½' : '');
      
      card.innerHTML = `
        <div class="catalog-header">
          <div class="catalog-category">${course.categoryLabel}</div>
          <h3 class="catalog-title">${course.title}</h3>
          <p class="catalog-tagline">${course.tagline}</p>
          <div class="catalog-meta">
            <span class="rating-stars">${starsHTML} ${course.rating}</span>
            <span>(${course.reviewsCount} học viên)</span>
          </div>
        </div>
        
        <p class="catalog-description">${course.description}</p>
        
        <div class="catalog-details-list">
          <div class="detail-item">
            <span class="detail-label">Thời lượng</span>
            <span class="detail-value">${course.duration}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Cấp độ</span>
            <span class="detail-value">${course.level}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Số bài giảng</span>
            <span class="detail-value">${course.lessonsCount} bài</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Giảng viên</span>
            <span class="detail-value">${course.instructor}</span>
          </div>
        </div>
        
        <div class="catalog-pricing">
          <span class="price-now">${course.price}</span>
          <span class="price-was">${course.originalPrice}</span>
        </div>
        
        <div class="catalog-actions">
          <button class="btn-card-secondary btn-view-syllabus" data-id="${course.id}">Xem lộ trình</button>
          <button class="btn-card-primary btn-enroll" data-id="${course.id}">Đăng ký học</button>
        </div>
      `;
      
      // Syllabus button action
      card.querySelector('.btn-view-syllabus').addEventListener('click', () => {
        this.openSyllabusModal(course.id);
      });
      
      // Register button action
      card.querySelector('.btn-enroll').addEventListener('click', () => {
        this.openRegisterModal(course.id);
      });
      
      this.coursesGrid.appendChild(card);
    });
  }

  // Syllabus Modal open and populate
  openSyllabusModal(courseId) {
    const course = this.courses.find(c => c.id === courseId);
    if (!course) return;
    
    this.syllabusTitle.textContent = `Lộ trình: ${course.title}`;
    this.syllabusTimeline.innerHTML = '';
    
    course.syllabus.forEach((item, index) => {
      const chapter = document.createElement('div');
      chapter.className = 'timeline-chapter';
      chapter.innerHTML = `
        <div class="chapter-number">${index + 1}</div>
        <h4 class="chapter-title">${item.chapter}</h4>
        <p class="chapter-details">${item.details}</p>
      `;
      this.syllabusTimeline.appendChild(chapter);
    });
    
    this.syllabusModal.classList.add('active');
  }

  // Register Modal open and auto-populate
  openRegisterModal(courseId = '') {
    this.populateCourseSelect(courseId);
    this.registerModal.classList.add('active');
  }

  // Handle Form Submission with Custom Validation
  handleFormSubmit() {
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const phoneInput = document.getElementById('form-phone');
    
    // Custom phone validation (digits, 9-11 chars)
    const phoneRegex = /^[0-9]{9,11}$/;
    
    // Reset borders
    nameInput.style.borderColor = '';
    emailInput.style.borderColor = '';
    phoneInput.style.borderColor = '';

    let isValid = true;
    
    if (!nameInput.value.trim()) {
      nameInput.style.borderColor = 'var(--accent-pink)';
      isValid = false;
    }
    
    if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
      emailInput.style.borderColor = 'var(--accent-pink)';
      isValid = false;
    }
    
    if (!phoneRegex.test(phoneInput.value.trim())) {
      phoneInput.style.borderColor = 'var(--accent-pink)';
      this.showToast("Số điện thoại không hợp lệ (cần nhập 9 - 11 chữ số)!");
      isValid = false;
    }

    if (!isValid) return;

    // Get selected course details
    const selectedCourseId = this.registerCourseSelect.value;
    const course = this.courses.find(c => c.id === selectedCourseId);
    const courseTitle = course ? course.title : "Khoá học lập trình";

    // Show Success screen inside modal
    this.successStudentName.textContent = nameInput.value;
    this.successCourseTitle.textContent = courseTitle;
    
    this.registerForm.style.display = 'none';
    this.registerSuccessScreen.style.display = 'flex';
    
    this.showToast(`Đăng ký thành công khóa học: ${courseTitle}!`);
  }
}

// Instantiate App
document.addEventListener('DOMContentLoaded', () => {
  window.vibeEduApp = new VibeEduApp();
});
