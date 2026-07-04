# Shopee Product Copier & Auto-Filler 🛍️

**Shopee Product Copier & Auto-Filler** là một Chrome Extension (Manifest V3) giúp bạn sao chép toàn bộ thông tin sản phẩm từ trang chi tiết sản phẩm Shopee và tự động điền (autofill) các trường thông tin cũng như tự động tải lên hình ảnh sản phẩm vào trang thêm mới của **Kênh Người Bán Shopee (Shopee Seller Center)** chỉ với 1 cú click chuột.

---

## ✨ Tính năng nổi bật

1. **🛍️ Sao chép thông tin sản phẩm nhanh chóng (Product Scraper):**
   * Quét và lưu trữ toàn bộ dữ liệu sản phẩm bao gồm: Tên sản phẩm, Mô tả sản phẩm, Danh mục ngành hàng, Giá bán, Tồn kho, Phân loại hàng (màu sắc, kích cỡ).
   * Thu thập tất cả các liên kết hình ảnh gốc của sản phẩm với chất lượng cao nhất.
2. **⚡ Tự động điền dữ liệu & Tải ảnh lên (Autofill & Image Uploader):**
   * Tự động điền tiêu đề, mô tả và cấu hình giá/phân loại hàng vào các form của trang đăng bán mới trên Shopee Seller Center.
   * Chuyển đổi các URL hình ảnh sản phẩm đã sao chép và tự động thực hiện tiến trình upload ảnh trực tiếp lên server Shopee mà không cần bạn phải tải ảnh về máy tính rồi upload lên lại thủ công.
3. **💾 Đồng bộ dữ liệu qua bộ nhớ trình duyệt (Chrome Storage Sync):**
   * Lưu trữ dữ liệu tạm thời an toàn trong Chrome Local Storage, hỗ trợ truyền tải thông tin mượt mà giữa tab sản phẩm nguồn và tab Kênh Người Bán đích.

---

## 🛠️ Hướng dẫn Cài đặt (Dành cho nhà phát triển)

Do extension chưa được xuất bản công khai trên Chrome Web Store, bạn cần cài đặt thủ công dưới chế độ phát triển (Developer Mode):

1. **Tải mã nguồn:**
   * Tải thư mục chứa dự án `shopee-copy-paste-extension` về máy tính của bạn.
2. **Mở quản lý Extension của Chrome:**
   * Mở trình duyệt Google Chrome.
   * Truy cập vào đường dẫn: `chrome://extensions/` (hoặc vào menu Cài đặt -> Tiện ích mở rộng).
3. **Kích hoạt chế độ nhà phát triển (Developer Mode):**
   * Bật công tắc **Chế độ dành cho nhà phát triển (Developer Mode)** ở góc trên bên phải màn hình.
4. **Tải Extension lên trình duyệt:**
   * Nhấp chọn nút **Tải tiện ích đã giải nén (Load unpacked)** ở góc trên bên trái.
   * Tìm và chọn thư mục `shopee-copy-paste-extension` trên máy tính của bạn.
   * Trình duyệt sẽ nhận diện và biểu tượng của **Shopee Copier** sẽ xuất hiện trên thanh công cụ của bạn.

---

## 🚀 Hướng dẫn Sử dụng

1. **Sao chép sản phẩm mẫu:**
   * Truy cập trang Shopee.vn bất kỳ và vào trang chi tiết sản phẩm bạn muốn sao chép thông tin.
   * Click vào biểu tượng Extension **Shopee Copier** trên thanh công cụ hoặc click vào nút "Copy Product" (nếu có trên giao diện) để thu thập dữ liệu.
   * Hệ thống sẽ hiển thị thông báo "Sao chép thành công!".
2. **Đăng bán tự động:**
   * Truy cập vào Kênh Người Bán Shopee (`banhang.shopee.vn` hoặc `seller.shopee.vn`) và đi tới trang **Thêm sản phẩm mới**.
   * Click vào biểu tượng Extension **Shopee Copier** trên thanh công cụ, chọn **Autofill & Upload**.
   * Toàn bộ biểu mẫu đăng bán sẽ được điền tự động và các hình ảnh sản phẩm sẽ tự động được tải lên hệ thống.
3. **Kiểm tra và xuất bản:**
   * Rà soát lại các thông tin đã điền và nhấn nút **Lưu và Hiển thị** trên Shopee để hoàn tất đăng bán!
