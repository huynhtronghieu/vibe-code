const lessonsData = [
  {
    id: "css-flexbox",
    courseTitle: "Làm chủ CSS Layout",
    title: "Bài 1: Sức mạnh của Flexbox",
    description: "Khám phá cách sắp xếp các phần tử cực kỳ linh hoạt và dễ dàng bằng CSS Flexbox.",
    theory: `
      <h3>CSS Flexbox là gì?</h3>
      <p>Flexbox (Flexible Box Layout) là một mô hình bố cục một chiều giúp phân phối không gian và căn chỉnh các phần tử con trong một container một cách hiệu quả, ngay cả khi kích thước của chúng chưa biết hoặc thay đổi động.</p>
      
      <h3>Các thuộc tính quan trọng:</h3>
      <ul>
        <li><strong>flex-direction:</strong> Xác định trục chính (trục ngang hoặc dọc) để sắp xếp các phần tử con. Các giá trị: <code>row</code>, <code>row-reverse</code>, <code>column</code>, <code>column-reverse</code>.</li>
        <li><strong>justify-content:</strong> Căn chỉnh phần tử con dọc theo <strong>trục chính (main axis)</strong>. Các giá trị: <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code>.</li>
        <li><strong>align-items:</strong> Căn chỉnh các phần tử con dọc theo <strong>trục chéo (cross axis)</strong>. Các giá trị: <code>stretch</code>, <code>flex-start</code>, <code>center</code>, <code>flex-end</code>.</li>
      </ul>
      <p>Hãy thử tương tác với bảng điều khiển bên phải để xem các phần tử phản ứng thế nào!</p>
    `,
    widgetType: "flexbox",
    widgetConfig: {
      itemsCount: 3,
      controls: [
        {
          property: "flex-direction",
          label: "flex-direction",
          options: ["row", "row-reverse", "column", "column-reverse"],
          default: "row"
        },
        {
          property: "justify-content",
          label: "justify-content",
          options: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"],
          default: "flex-start"
        },
        {
          property: "align-items",
          label: "align-items",
          options: ["stretch", "flex-start", "center", "flex-end"],
          default: "stretch"
        }
      ]
    },
    quiz: {
      question: "Thuộc tính nào của Flexbox dùng để căn chỉnh các phần tử theo trục chéo (cross axis)?",
      options: [
        "justify-content",
        "align-items",
        "flex-direction",
        "align-content"
      ],
      correctAnswer: 1, // align-items
      explanation: "Chính xác! 'justify-content' dùng để căn chỉnh theo trục chính (main axis), còn 'align-items' dùng để căn chỉnh theo trục chéo (cross axis)."
    }
  },
  {
    id: "css-grid",
    courseTitle: "Làm chủ CSS Layout",
    title: "Bài 2: Thiết kế lưới với CSS Grid",
    description: "Học cách thiết kế bố cục 2 chiều (hàng và cột) chuyên nghiệp với CSS Grid.",
    theory: `
      <h3>CSS Grid là gì?</h3>
      <p>Khác với Flexbox hoạt động một chiều, CSS Grid Layout là một hệ thống bố cục hai chiều cực kỳ mạnh mẽ, quản lý cả hàng (rows) và cột (columns) cùng một lúc.</p>
      
      <h3>Các thuộc tính cốt lõi:</h3>
      <ul>
        <li><strong>grid-template-columns:</strong> Xác định số lượng cột và độ rộng của mỗi cột. Ví dụ: <code>repeat(3, 1fr)</code> tạo ra 3 cột bằng nhau.</li>
        <li><strong>gap:</strong> Xác định khoảng cách (khoảng đệm) giữa các hàng và cột.</li>
        <li><strong>align-items & justify-items:</strong> Định vị nội dung bên trong mỗi ô lưới.</li>
      </ul>
      <p>Hãy thử thay đổi cấu trúc lưới bên phải để xem các khối phần tử sắp xếp lại vị trí của chúng.</p>
    `,
    widgetType: "grid",
    widgetConfig: {
      itemsCount: 6,
      controls: [
        {
          property: "grid-template-columns",
          label: "grid-template-columns",
          options: ["repeat(2, 1fr)", "repeat(3, 1fr)", "1fr 2fr", "2fr 1fr 1fr"],
          default: "repeat(3, 1fr)"
        },
        {
          property: "gap",
          label: "gap (khoảng cách)",
          options: ["5px", "15px", "25px", "0px"],
          default: "15px"
        },
        {
          property: "justify-items",
          label: "justify-items",
          options: ["stretch", "start", "center", "end"],
          default: "stretch"
        }
      ]
    },
    quiz: {
      question: "Giá trị 'repeat(3, 1fr)' nghĩa là gì?",
      options: [
        "Lặp lại 1 cột 3 lần với chiều rộng cố định",
        "Tạo ra 3 cột có chiều rộng bằng nhau và tự động chia đều không gian",
        "Tạo ra 3 hàng bằng nhau",
        "Tự động co giãn theo nội dung lớn nhất"
      ],
      correctAnswer: 1,
      explanation: "Chính xác! 'repeat(3, 1fr)' là cú pháp viết tắt để định nghĩa 3 cột có độ rộng bằng nhau bằng cách sử dụng đơn vị phân số 'fr' (fractional unit)."
    }
  },
  {
    id: "canvas-drawing",
    courseTitle: "Sáng tạo với HTML5 Canvas",
    title: "Bài 1: Làm quen với HTML5 Canvas",
    description: "Vẽ các đường nét và hình học cơ bản bằng mã JavaScript và ngữ cảnh 2D.",
    theory: `
      <h3>HTML5 Canvas là gì?</h3>
      <p>Thành phần <code>&lt;canvas&gt;</code> được sử dụng để vẽ đồ họa trực tiếp trên trang web thông qua kịch bản JavaScript.</p>
      
      <h3>Các phương thức vẽ cơ bản:</h3>
      <ul>
        <li><code>ctx.fillStyle = color;</code> đặt màu tô cho hình.</li>
        <li><code>ctx.fillRect(x, y, width, height);</code> vẽ một hình chữ nhật đặc.</li>
        <li><code>ctx.strokeStyle = color;</code> đặt màu viền nét vẽ.</li>
        <li><code>ctx.strokeRect(x, y, width, height);</code> vẽ đường viền hình chữ nhật.</li>
        <li><code>ctx.beginPath();</code> bắt đầu một đường vẽ mới (thường dùng cho vẽ hình tròn/arc).</li>
        <li><code>ctx.arc(x, y, r, startAngle, endAngle);</code> tạo cung tròn/hình tròn.</li>
      </ul>
      <p>Hãy thử chỉnh sửa code JavaScript trong ô soạn thảo bên phải để vẽ tác phẩm của riêng bạn!</p>
    `,
    widgetType: "canvas",
    widgetConfig: {
      initialCode: `// Viết code JavaScript vẽ lên Canvas tại đây!
// Hệ tọa độ: x (ngang, 0-400), y (dọc, 0-300)

// Xóa sạch canvas trước khi vẽ
ctx.clearRect(0, 0, 400, 300);

// Vẽ nền bầu trời đêm
ctx.fillStyle = '#0f172a';
ctx.fillRect(0, 0, 400, 300);

// Vẽ mặt trăng khuyết màu vàng
ctx.beginPath();
ctx.arc(300, 80, 40, 0, Math.PI * 2);
ctx.fillStyle = '#fef08a';
ctx.fill();

// Che bớt mặt trăng để tạo hình trăng khuyết
ctx.beginPath();
ctx.arc(285, 70, 38, 0, Math.PI * 2);
ctx.fillStyle = '#0f172a';
ctx.fill();

// Vẽ ngôi sao lấp lánh (vẽ hình chữ nhật nhỏ)
ctx.fillStyle = '#ffffff';
ctx.fillRect(100, 60, 4, 4);
ctx.fillRect(150, 100, 3, 3);
ctx.fillRect(80, 140, 5, 5);
ctx.fillRect(250, 160, 4, 4);

// Vẽ ngọn núi đơn giản
ctx.beginPath();
ctx.moveTo(0, 300);
ctx.lineTo(150, 120);
ctx.lineTo(280, 300);
ctx.closePath();
ctx.fillStyle = '#1e293b';
ctx.fill();

ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(260, 150);
ctx.lineTo(400, 300);
ctx.closePath();
ctx.fillStyle = '#334155';
ctx.fill();

// Vẽ ngôi nhà nhỏ của bạn
ctx.fillStyle = '#00ffc8';
ctx.fillRect(70, 240, 50, 40); // thân nhà

ctx.beginPath();
ctx.moveTo(60, 240);
ctx.lineTo(95, 200);
ctx.lineTo(130, 240);
ctx.closePath();
ctx.fillStyle = '#ff00aa';
ctx.fill(); // mái nhà
`
    },
    quiz: {
      question: "Câu lệnh nào dùng để vẽ một hình chữ nhật tô đặc?",
      options: [
        "ctx.strokeRect(x, y, w, h)",
        "ctx.drawRect(x, y, w, h)",
        "ctx.fillRect(x, y, w, h)",
        "ctx.addRect(x, y, w, h)"
      ],
      correctAnswer: 2,
      explanation: "Chính xác! 'fillRect' sẽ tô màu đặc cho hình chữ nhật bằng màu trong 'fillStyle', còn 'strokeRect' chỉ vẽ đường viền."
    }
  },
  {
    id: "canvas-physics",
    courseTitle: "Sáng tạo với HTML5 Canvas",
    title: "Bài 2: Chuyển động vật lý với Animation Loop",
    description: "Tạo chuyển động mượt mà bằng cách sử dụng vòng lặp requestAnimationFrame.",
    theory: `
      <h3>Tạo chuyển động như thế nào?</h3>
      <p>Chuyển động trên màn hình thực chất là chuỗi các bức ảnh tĩnh được vẽ liên tiếp với tốc độ nhanh (thường là 60 khung hình/giây).</p>
      
      <h3>Cơ chế Vòng lặp Vẽ (Render Loop):</h3>
      <ol>
        <li>Xóa sạch canvas (<code>ctx.clearRect</code>).</li>
        <li>Cập nhật trạng thái (vị trí, vận tốc vật thể).</li>
        <li>Vẽ lại vật thể ở tọa độ mới.</li>
        <li>Yêu cầu trình duyệt gọi lại hàm vẽ ở khung hình tiếp theo bằng <code>requestAnimationFrame(draw)</code>.</li>
      </ol>
      <p>Hãy xem code bên phải để hiểu cách thiết lập trọng lực và va chạm của quả bóng!</p>
    `,
    widgetType: "canvas",
    widgetConfig: {
      initialCode: `// Mô phỏng quả bóng nảy vật lý có tương tác trọng lực và giảm chấn
let x = 200;
let y = 100;
let vx = 3;      // vận tốc ngang
let vy = 2;      // vận tốc dọc
const radius = 20;
const gravity = 0.5; // gia tốc trọng lực
const bounce = 0.8;  // hệ số đàn hồi (nảy lên được 80% độ cao cũ)

function updateAndDraw() {
  ctx.clearRect(0, 0, 400, 300);
  
  // Vẽ nền gradient
  let grad = ctx.createLinearGradient(0, 0, 0, 300);
  grad.addColorStop(0, '#090d16');
  grad.addColorStop(1, '#1e1b4b');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 400, 300);
  
  // Áp dụng trọng lực vào vận tốc dọc
  vy += gravity;
  
  // Cập nhật vị trí bóng
  x += vx;
  y += vy;
  
  // Xử lý va chạm biên dưới (sàn nhà)
  if (y + radius > 300) {
    y = 300 - radius;
    vy = -vy * bounce; // đảo chiều vận tốc dọc và giảm chấn
    
    // Nếu vận tốc quá nhỏ thì dừng nảy để tránh rung lắc
    if (Math.abs(vy) < 1.5) vy = 0;
  }
  
  // Xử lý va chạm biên trái/phải
  if (x - radius < 0) {
    x = radius;
    vx = -vx * bounce;
  } else if (x + radius > 400) {
    x = 400 - radius;
    vx = -vx * bounce;
  }
  
  // Vẽ bóng phát sáng (Cyber Glow Ball)
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#00ffc8';
  ctx.shadowColor = '#00ffc8';
  ctx.shadowBlur = 20;
  ctx.fill();
  
  // Reset shadow để các nét vẽ sau không bị nhòe
  ctx.shadowBlur = 0;
  
  // Tiếp tục vòng lặp vẽ
  window.canvasAnimId = requestAnimationFrame(updateAndDraw);
}

// Nếu đã có vòng lặp trước đó thì dừng lại trước khi chạy mới
if (window.canvasAnimId) {
  cancelAnimationFrame(window.canvasAnimId);
}
updateAndDraw();
`
    },
    quiz: {
      question: "Hàm nào của trình duyệt tối ưu nhất để tạo vòng lặp vẽ chuyển động mượt mà 60 FPS?",
      options: [
        "setInterval()",
        "setTimeout()",
        "requestAnimationFrame()",
        "requestNextFrame()"
      ],
      correctAnswer: 2,
      explanation: "Chính xác! 'requestAnimationFrame' đồng bộ hóa việc vẽ với chu kỳ quét màn hình của trình duyệt, giúp hiệu năng mượt mà hơn và tiết kiệm pin so với setInterval/setTimeout."
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lessonsData;
} else {
  window.lessonsData = lessonsData;
}
