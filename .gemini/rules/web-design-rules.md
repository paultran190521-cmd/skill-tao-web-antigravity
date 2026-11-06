# WORKSPACE RULES: HỆ THỐNG THIẾT KẾ WEB & TỐI ƯU CHUYỂN ĐỔI (CRO)

## 1. QUY TẮC VIẾT HOA CHỮ TIẾNG VIỆT (BẮT BUỘC 100%)
- **Tiêu đề chính (Main Title / H1 / Hero Heading / Section Heading lớn)**:
  - BẮT BUỘC VIẾT HOA TOÀN BỘ (UPPERCASE / ALL CAPS) nhưng phải tinh gọn (tối đa 5–8 từ mỗi dòng), không ép cả đoạn văn dài vào ALL CAPS.
  - Ví dụ: `KHÓA HỌC AI CHO HỌC SINH CẤP 2`, `LỘ TRÌNH 8 BUỔI HỌC THỰC CHIẾN`.
- **Tiêu đề phụ, thẻ card con, đề mục con, nút bấm, nhãn, mô tả (Subheadings, Cards, Labels, Buttons, Body)**:
  - BẮT BUỘC chỉ viết hoa chữ cái đầu tiên (Sentence case).
  - TUYỆT ĐỐI KHÔNG viết hoa toàn bộ chữ cái đầu mỗi từ (Title Case kiểu tiếng Anh) và KHÔNG viết hoa ALL CAPS cho thẻ con.
  - Ví dụ: `Buổi 1: Khám phá thế giới AI & an toàn số`, `Đăng ký ngay`, `Gói tiêu chuẩn`.

## 2. BỘ 6 TIÊU CHUẨN VÀNG TRÁNH LỖI GIAO DIỆN & TỐI ƯU CRO
1. **Độ dài Menu & Nhãn điều hướng (1–2 từ tối đa)**:
   - Menu chỉ dùng: *"Lợi ích"*, *"Lộ trình"*, *"Phương pháp"*, *"Giảng viên"*, *"Học phí"*, *"FAQ"*. Nút CTA: *"Đăng ký ngay"*.
2. **Tiêu đề ALL CAPS tinh gọn & Khoảng đệm an toàn**:
   - Khi có fixed header + countdown banner, luôn đệm `pt-36` đến `pt-44` ở phần Hero để không bị che chữ.
   - Cỡ chữ H1: `text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.2]`.
3. **Kỷ luật Phối màu 60-30-10**:
   - 60% Nền tối/sáng (`neutral-950`).
   - 30% Cấu trúc (`neutral-800` viền, `neutral-300` chữ, `neutral-900` card).
   - 10% Accent duy nhất (`indigo-600` cho CTA chính). Không biến trang thành bảng đèn neon nhiều màu.
4. **Một điểm nhấn chuyển động duy nhất trong 1 khung nhìn (One Hero Motion)**:
   - Nút CTA chính luôn là vật thể có độ tương phản và nổi bật cao nhất. Không để các hiệu ứng nền cạnh tranh ánh nhìn.
5. **Cấu trúc Nội dung quét nhanh "Bite - Snack - Meal"**:
   - Bite (Chip 3-5 từ) -> Snack (1 câu cốt lõi) -> Meal (Kết quả/đầu ra đo lường được). Chống tường chữ đặc quánh.
6. **Khai báo sẵn Keyframe CSS cho Tailwind CSS v4**:
   - Luôn đảm bảo `@keyframes scroll` và `.animate-scroll` được khai báo trong `globals.css` để component `InfiniteMovingCards` hoạt động 100%.

## 3. QUY TRÌNH 6 BƯỚC CỦA /skill-web
1. Nhận diện lĩnh vực & Cố vấn đánh giá web cũ/tài liệu gốc.
2. Đề xuất Template & Chốt danh sách Sections qua vòng lặp hỏi duyệt.
3. Lập Bảng đề xuất hiệu ứng theo từng khu vực (Hero, Card, Viền tĩnh, Viền động, CTA).
4. Thi công & Chủ động cố vấn phân tích 2 mặt: Điểm phù hợp & Điểm bất phù hợp thị giác/trải nghiệm.
5. Báo cáo giá trị gia tăng sau mỗi cập nhật (3 khía cạnh: Thị giác, Tâm lý khách hàng, CRO).
6. Đồng hành tinh chỉnh liên tục cho đến khi hoàn thiện 100%.
