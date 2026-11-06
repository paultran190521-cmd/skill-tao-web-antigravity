# HƯỚNG DẪN DỰ ÁN CHO ANTIGRAVITY & AI CODING AGENTS

Dự án này là hệ thống Web Landing Page tối ưu chuyển đổi (CRO) xây dựng trên nền tảng **Next.js 15 (App Router)**, **Tailwind CSS v4**, **Framer Motion / Motion React**, tích hợp sẵn **9 Thư viện Hiệu ứng** và **10 Kho Template Website**.

## 1. LỆNH CHẠY & THAO TÁC CƠ BẢN
- Chạy môi trường phát triển: `npm run dev` (mặc định mở tại port 3000 hoặc 3001)
- Xây dựng bản production: `npm run build`
- Khởi động bản build: `npm run start`
- Kiểm tra lỗi cú pháp: `npm run lint`

## 2. KHO KỸ NĂNG TÍCH HỢP TRONG DỰ ÁN (PROJECT SKILLS)
Dự án được đóng gói kèm các kỹ năng tự động hóa nằm tại:
- `.gemini/skills/skill-web/` (Dành cho Antigravity)
- `.agents/skills/skill-web/` (Dành cho Claude Code, Cursor, Codex)

Bất kỳ AI Agent nào khi mở dự án từ xa đều có thể kích hoạt skill `/skill-web` để cố vấn thiết kế, chọn component hiệu ứng và tối ưu CRO theo quy trình 6 bước.

## 3. CÁC NGUYÊN TẮC THIẾT KẾ BẮT BUỘC
1. **Viết hoa Tiếng Việt**: Tiêu đề chính H1/Hero BẮT BUỘC viết hoa toàn bộ (UPPERCASE) nhưng tinh gọn (tối đa 5–8 từ/dòng). Toàn bộ tiêu đề phụ, thẻ card con, nút bấm, nhãn chỉ viết hoa chữ cái đầu tiên (Sentence case). Tuyệt đối không dùng Title Case tiếng Anh.
2. **Menu 1–2 từ**: Nhãn điều hướng ngắn gọn, rõ ràng (Lợi ích, Lộ trình, Học phí, FAQ...).
3. **Màu sắc 60-30-10**: Giữ bảng màu thanh lịch, tập trung vào 1 màu nhấn (Accent) duy nhất cho nút CTA chính.
4. **Không xung đột hiệu ứng**: Trong 1 màn hình chỉ có 1 điểm nhấn chuyển động chính.
5. **Nội dung quét nhanh**: Trình bày theo mô hình Bite - Snack - Meal, loại bỏ các khối văn bản dài đặc quánh.
