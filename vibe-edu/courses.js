const coursesData = [
  {
    id: "frontend-master",
    category: "frontend",
    categoryLabel: "Web Frontend",
    title: "Lập Trình Web Frontend Master",
    tagline: "Học thiết kế giao diện web hiện đại chuẩn UI/UX",
    rating: 4.9,
    reviewsCount: 128,
    duration: "12 tuần (36 buổi)",
    level: "Mới bắt đầu",
    lessonsCount: 24,
    price: "4.500.000đ",
    originalPrice: "6.000.000đ",
    instructor: "HieuHT & AI Co-pilot",
    description: "Khóa học dẫn dắt bạn từ người chưa biết gì về lập trình đến việc làm chủ hoàn toàn HTML5, CSS3 nâng cao (Flexbox, Grid, CSS Variables) và JavaScript ES6. Bạn sẽ tự tay xây dựng được các website responsive, tương tác mượt mà và tối ưu hóa hiệu năng.",
    syllabus: [
      {
        chapter: "Chương 1: Nền tảng Web & HTML5 chuyên sâu",
        details: "Lịch sử web, cơ chế hoạt động của trình duyệt. Sử dụng HTML5 ngữ nghĩa (Semantic HTML) chuẩn SEO và tối ưu hóa cấu trúc cây DOM."
      },
      {
        chapter: "Chương 2: Thiết kế giao diện đỉnh cao với CSS3",
        details: "Làm chủ Flexbox và CSS Grid Layout. Sử dụng CSS Custom Properties (Variables), Container Queries, và các thuộc tính CSS hiện đại để thiết kế giao diện thích ứng mọi thiết bị."
      },
      {
        chapter: "Chương 3: Lập trình JavaScript tương tác",
        details: "Cú pháp ES6+, điều hướng DOM, bắt sự kiện chuột/bàn phím. Lập trình bất đồng bộ (Promise, Async/Await), gọi API lấy dữ liệu thực tế và lưu trữ dữ liệu cục bộ với LocalStorage."
      },
      {
        chapter: "Chương 4: Đồ án tốt nghiệp: Responsive Web & PWA",
        details: "Tối ưu hóa chỉ số Core Web Vitals (LCP, CLS). Xây dựng một ứng dụng web đầy đủ tính năng, cài đặt được trên điện thoại và hoạt động offline."
      }
    ]
  },
  {
    id: "creative-canvas",
    category: "creative",
    categoryLabel: "Mỹ Thuật Đồ Họa & Canvas",
    title: "Thiết Kế Đồ Họa & Chuyển Động Canvas",
    tagline: "Sáng tạo nghệ thuật số và chuyển động vật lý bằng code",
    rating: 4.8,
    reviewsCount: 84,
    duration: "8 tuần (24 buổi)",
    level: "Trung cấp",
    lessonsCount: 16,
    price: "3.200.000đ",
    originalPrice: "4.500.000đ",
    instructor: "HieuHT (Creative Developer)",
    description: "Tìm hiểu cách kết hợp toán học, vật lý và mã JavaScript để vẽ hình nghệ thuật, tạo hiệu ứng chuyển động hạt lấp lánh (particle system) và mô phỏng trọng lực trên thẻ HTML5 Canvas.",
    syllabus: [
      {
        chapter: "Chương 1: Tọa độ 2D & Thuật toán vẽ hình cơ bản",
        details: "Bắt đầu với Canvas 2D Context. Vẽ các đa giác, đường cong Bézier, vòng tròn, xử lý đổ màu gradient và vẽ hình ảnh bitmap."
      },
      {
        chapter: "Chương 2: Động học & Vòng lặp Render (Animation Loop)",
        details: "Sử dụng requestAnimationFrame để dựng hoạt hình 60 FPS mượt mà. Lập trình vector toán học, điều khiển vận tốc, gia tốc cho vật thể."
      },
      {
        chapter: "Chương 3: Mô phỏng vật lý nâng cao",
        details: "Lập trình trọng lực thế giới ảo, lực cản không khí và giảm chấn va chạm biên. Tạo hệ thống các hạt lấp lánh (particles) tương tác theo toạ độ con trỏ chuột."
      },
      {
        chapter: "Chương 4: Đồ án tốt nghiệp: Web Game 2D Hoàn chỉnh",
        details: "Xây dựng cấu trúc một game hoàn chỉnh bao gồm: Vòng lặp game (Game Loop), phát hiện va chạm giữa các vật thể, hệ thống điểm số và màn hình chúc mừng."
      }
    ]
  },
  {
    id: "ai-vibe-coding",
    category: "ai",
    categoryLabel: "Kỹ Nghệ AI & Vibe Coding",
    title: "Ứng Dụng AI Trong Vibe Coding",
    tagline: "Xây dựng ứng dụng thần tốc, tăng gấp 10 lần hiệu suất lập trình",
    rating: 5.0,
    reviewsCount: 92,
    duration: "6 tuần (18 buổi)",
    level: "Mọi cấp độ",
    lessonsCount: 12,
    price: "2.800.000đ",
    originalPrice: "4.000.000đ",
    instructor: "HieuHT (Vibe Coding Specialist)",
    description: "Một khóa học đột phá giúp bạn hợp tác cùng các mô hình AI ngôn ngữ lớn (Gemini, Claude) và các công cụ lập trình tự động (AI Agents) để phát triển phần mềm mà không cần gõ từng dòng code thủ công.",
    syllabus: [
      {
        chapter: "Chương 1: Bản chất của Vibe Coding",
        details: "Tìm hiểu xu hướng phát triển phần mềm mới. Kỹ nghệ viết prompt (Prompt Engineering) tạo cấu trúc thư mục, code giao diện và logic thuật toán."
      },
      {
        chapter: "Chương 2: Làm chủ IDE AI Extensions",
        details: "Cách sử dụng Antigravity IDE, Cursor hoặc VS Code Copilot để phân tích lỗi, đọc hiểu mã nguồn dự án lớn và tối ưu hóa hiệu suất code tự động."
      },
      {
        chapter: "Chương 3: Quy trình Debug & Kiểm thử phối hợp",
        details: "Hướng dẫn AI chẩn đoán lỗi logic, viết test case tự động. Quy trình lặp lại nhanh: Viết code -> Chạy thử trình duyệt -> Phản hồi AI chỉnh sửa."
      },
      {
        chapter: "Chương 4: Đồ án tốt nghiệp: Phát triển Web App Full-stack với AI",
        details: "Trong vòng 48h, sử dụng sự trợ giúp của AI để hoàn thiện một dự án web thực tế từ ý tưởng ban đầu, triển khai máy chủ và đưa lên môi trường trực tuyến."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = coursesData;
} else {
  window.coursesData = coursesData;
}
