# Antigravity Token Monitor ⏱️

**Antigravity Token Monitor** là một VS Code Extension được thiết kế chuyên biệt để theo dõi mức độ tiêu thụ token, chi phí ước tính (VNĐ) và thời gian xử lý thực tế của AI khi bạn thực hiện chat trong **Antigravity IDE / VS Code**.

Giao diện Sidebar được thiết kế mang phong cách Cyberpunk độc đáo với hiệu ứng đèn Neon phát sáng và đồ họa mượt mà, hỗ trợ tối đa việc quay video demo hoặc theo dõi chi phí lập trình hàng ngày.

---

## ✨ Tính năng nổi bật

1. **📊 Theo dõi Token thời gian thực (Session Burn):**
   * Hiển thị tổng số token tích lũy trong phiên chat hiện tại.
   * Số liệu lăn tự động tăng tiến sinh động (Rolling Numbers).
2. **💰 Tính chi phí ước tính bằng VNĐ (Session Cost):**
   * Tự động quy đổi giá trị token sang tiền Việt Nam Đồng (tỉ giá mặc định: `25.400đ/$`).
   * **Cơ chế tính giá thông minh (Context Window Pricing):** Tự động nhận diện mô hình (Gemini Flash, Gemini Pro, Claude, GPT-4o-mini) và **nhân đôi đơn giá** khi ngữ cảnh chat vượt quá `128.000` tokens theo đúng bảng giá High-Context của GitHub Copilot / API gốc.
3. **⏱️ Đồng hồ mili-giây thông minh (Smart Activity Timer):**
   * Đếm thời gian hoạt động thực tế của AI dạng `Phút:Giây.MiliGiây` (`MM:SS.mmm`) cập nhật ở tần số quét màn hình siêu nhanh qua `requestAnimationFrame`.
   * **Tự động bắt đầu / tạm dừng:** Đồng hồ chỉ chạy từ lúc bạn nhấn Enter gửi Prompt cho tới khi AI hiển thị câu trả lời hoàn chỉnh thì dừng lại. Đồng hồ không đếm thời gian bạn đang suy nghĩ hoặc gõ chữ.
   * **Lưu trữ phiên bền bỉ:** Lưu mốc thời gian chạy vào bộ nhớ workspace, không bị reset về 0 hoặc kẹt giờ ngay cả khi bạn Reload Window.
4. **💬 Lịch sử cuộc hội thoại (Conversation Steps):**
   * Hiển thị danh sách các bước chat dưới dạng thẻ gọn gàng.
   * Mỗi thẻ hiển thị rõ: Số thứ tự bước, Mô hình AI sử dụng, Chi phí VNĐ của bước đó, và Chi tiết thông số Token (`Đầu vào / Bộ đệm / Đầu ra`).
   * Sử dụng hiệu ứng Trượt xuống (Slide Down) mượt mà bằng Pure CSS khi có bước mới xuất hiện ở đầu danh sách.
5. **🔥 Thanh trạng thái (Status Bar Item):**
   * Ghim một icon lửa kèm tổng số token ở góc dưới bên phải IDE để theo dõi nhanh mà không cần mở Sidebar.

---

## 🛠️ Hướng dẫn Cài đặt

Vì extension được đóng gói dưới dạng tệp tin cục bộ `.vsix`, bạn có thể cài đặt theo các bước sau:

### Cách 1: Sử dụng tập lệnh tự động (Khuyên dùng)
Nếu bạn có mã nguồn gốc của extension trong thư mục dự án:
1. Mở terminal tại thư mục `antigravity-token-monitor`.
2. Chạy lệnh để tự động biên dịch và cài đặt trực tiếp vào Antigravity IDE:
   ```bash
   npm run build && npm run install-ext
   ```
3. Sau khi cài đặt thành công, mở Command Palette (`Cmd+Shift+P` hoặc `Ctrl+Shift+P`) và chạy lệnh **`Developer: Reload Window`** để kích hoạt extension.

### Cách 2: Cài đặt thủ công tệp tin VSIX
1. Chạy lệnh đóng gói extension thành file `.vsix`:
   ```bash
   npx @vscode/vsce package
   ```
2. Mở Antigravity IDE, vào mục **Extensions** (phím tắt `Cmd+Shift+X` hoặc `Ctrl+Shift+X`).
3. Click vào dấu ba chấm `...` ở góc trên bên phải bảng Extensions, chọn **Install from VSIX...**.
4. Tìm và chọn tệp `antigravity-token-monitor-1.0.0.vsix` vừa được tạo ra.
5. Reload IDE để áp dụng thay đổi.

---

## 🚀 Hướng dẫn Sử dụng

1. **Mở giao diện Monitor:**
   * Cách 1: Click vào biểu tượng ngọn lửa lửa kèm số lượng token ở góc bên phải thanh trạng thái (Status Bar).
   * Cách 2: Click vào tab biểu tượng **Token Monitor** ở thanh bên (Sidebar) của IDE.
2. **Bắt đầu hoạt động:**
   * Trò chuyện với AI trợ lý trong khung chat như bình thường.
   * Giao diện Monitor sẽ tự động bắt đầu cập nhật dữ liệu và đếm giây chạy số liệu thời gian thực sau mỗi lần bạn gửi Prompt.
3. **Reset dữ liệu:**
   * Nhấn nút **Reset Session Stats** trên giao diện để làm sạch toàn bộ bộ đếm token, chi phí và đưa đồng hồ đếm giờ về `00:00.000` cho phiên làm việc mới.
