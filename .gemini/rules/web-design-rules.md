# WORKSPACE RULES: HỆ THỐNG THIẾT KẾ WEB, TYPOGRAPHY & TỐI ƯU CHUYỂN ĐỔI (CRO)

## 1. QUY TẮC VIẾT HOA CHỮ TIẾNG VIỆT (BẮT BUỘC 100%)
- **Tiêu đề chính (Main Title / H1 / Hero Heading / Section Heading lớn)**:
  - BẮT BUỘC VIẾT HOA TOÀN BỘ (UPPERCASE / ALL CAPS) nhưng phải tinh gọn (tối đa 5–8 từ mỗi dòng), không ép cả đoạn văn dài vào ALL CAPS.
  - Ví dụ: `KHÓA HỌC AI CHO HỌC SINH CẤP 2`, `LỘ TRÌNH 8 BUỔI HỌC THỰC CHIẾN`.
- **Tiêu đề phụ, thẻ card con, đề mục con, nút bấm, nhãn, mô tả (Subheadings, Cards, Labels, Buttons, Body)**:
  - BẮT BUỘC chỉ viết hoa chữ cái đầu tiên (Sentence case).
  - TUYỆT ĐỐI KHÔNG viết hoa toàn bộ chữ cái đầu mỗi từ (Title Case kiểu tiếng Anh) và KHÔNG viết hoa ALL CAPS cho thẻ con.
  - Ví dụ: `Buổi 1: Khám phá thế giới AI & an toàn số`, `Đăng ký ngay`, `Gói tiêu chuẩn`.

## 2. QUY CHUẨN VIẾT NỘI DUNG TỐI GIẢN TRỌNG TÂM TIẾNG VIỆT (MINIMALIST COPYWRITING - PHONG CÁCH LINEAR / RAYCAST / RESEND)

Để trang web tiếng Việt đạt độ thoáng đãng, sắc sảo và hiện đại như các sản phẩm công nghệ hàng đầu thế giới, BẮT BUỘC tuân thủ 5 nguyên lý sau:

1. **Ngân sách từ ngữ cứng (Strict Word Budget)**:
   - **Menu điều hướng**: Tối đa 1–2 từ (*"Tính năng"*, *"Lộ trình"*, *"Bảng giá"*, *"Tài liệu"*, *"FAQ"*).
   - **Nhãn huy hiệu (Badge / Chip)**: Tối đa 2–4 từ (`Phiên bản 2.0`, `Độ trễ 15ms`, `SOC2 bảo mật`).
   - **Tiêu đề chính Hero (H1)**: Tối đa 5–8 từ/dòng (ALL CAPS dứt khoát).
   - **Tiêu đề phụ Hero (Subtitle)**: Tối đa 12–20 từ (đúng 1 câu duy nhất truyền tải: Sản phẩm là gì + Giải quyết cho ai + Lợi ích đo lường được).
   - **Tiêu đề thẻ Card con**: Tối đa 3–5 từ (Sentence case, tập trung vào điểm khác biệt).
   - **Mô tả thẻ Card con**: Tối đa 10–15 từ (tối đa 2 dòng hiển thị trên màn hình).
   - **Nút kêu gọi hành động (Primary CTA)**: Tối đa 2–3 từ (*"Bắt đầu ngay"*, *"Dùng thử miễn phí"*, *"Đặt lịch tư vấn"*).

2. **Bộ lọc cắt bỏ 100% "Hư từ & Từ đệm" (Zero-Fluff Filter)**:
   - Tuyệt đối loại bỏ các từ đệm rườm rà không tải lượng thông tin: *"của chúng tôi"*, *"những"*, *"các"*, *"nhằm mục đích"*, *"có thể giúp bạn"*, *"một cách hiệu quả"*, *"tự hào mang đến"*.
   - Viết dứt khoát:
     - ❌ Dài dòng: *"Công cụ của chúng tôi tự hào mang đến giải pháp giúp bạn tối ưu chi phí một cách tốt nhất."*
     - ✅ Tối giản: *"Cắt giảm 50% chi phí vận hành với quy trình tự động hóa."*

3. **Công thức "Động từ hành động mạnh + Kết quả đo lường được"**:
   - `[Động từ hành động]` + `[Đối tượng]` + `[Số liệu chứng minh]`.
   - Ví dụ: *"Tự động đồng bộ dữ liệu • Độ trễ dưới 15ms toàn cầu"*.

4. **Nguyên lý "Show, Don't Tell" (Thay chữ bằng tương tác trực quan)**:
   - Không dùng 3 đoạn văn dài để kể lể cách tính năng hoạt động.
   - Thay thế bằng: 1 tab mã nguồn có nút copy (Resend), 1 mockup thanh tìm kiếm gõ thử (Raycast), 1 bảng số liệu biểu đồ (Dub), hoặc 1 widget chọn giờ đặt hẹn (Cal.com).

5. **Cấu trúc đọc quét 3 tầng "Bite - Snack - Meal"**:
   - **Bite**: Chip 2-3 từ định vị chủ đề.
   - **Snack**: Tiêu đề in đậm 3-5 từ nêu lợi ích cốt lõi.
   - **Meal**: 1 câu thông số thực tế đo lường được.

## 3. BỘ TIÊU CHUẨN THIẾT KẾ & TỐI ƯU CRO
1. **Khoảng đệm an toàn**: Khi có fixed header + countdown banner, luôn đệm `pt-36` đến `pt-44` ở Hero.
2. **Kỷ luật màu sắc 60-30-10**: 60% Nền tối/sáng (`neutral-950`), 30% Cấu trúc (`neutral-800` viền, `neutral-300` chữ), 10% Accent duy nhất cho CTA chính.
3. **Một điểm nhấn chuyển động duy nhất trong 1 tầm nhìn (One Hero Motion)**: Nút CTA chính luôn có độ tương phản và nổi bật cao nhất.
4. **Keyframe Tailwind CSS v4**: Luôn kiểm tra khai báo `@keyframes` và class phụ trợ trong `globals.css`.

## 4. QUY TRÌNH 6 BƯỚC CỦA /skill-web
1. Nhận diện lĩnh vực & Cố vấn đánh giá web cũ/tài liệu gốc.
2. Đề xuất Template (trong 10 mẫu tích hợp sẵn) & Chốt danh sách Sections qua vòng lặp hỏi duyệt.
3. Lập Bảng đề xuất hiệu ứng theo từng khu vực (Hero, Card, Viền tĩnh, Viền động, CTA).
4. Thi công, gọt giũa câu chữ tiếng Việt theo chuẩn tối giản & Cố vấn phân tích 2 mặt.
5. Báo cáo giá trị gia tăng sau mỗi cập nhật (Thị giác, Tâm lý khách hàng, CRO).
6. Đồng hành tinh chỉnh liên tục cho đến khi hoàn thiện 100%.
