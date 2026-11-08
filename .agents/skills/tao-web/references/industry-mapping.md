# Bản đồ Phối Hiệu ứng theo Loại hình Website (`industry-mapping.md`)

Tài liệu này cung cấp các **Công thức phối hiệu ứng chuẩn (Preset Combos)** dựa trên tâm lý học hành vi khách hàng của từng ngành nghề. Khi người dùng mô tả dự án hoặc trả lời bộ câu hỏi khám phá, hãy dùng công thức tương ứng dưới đây để lập **Bảng Đề xuất Hiệu ứng**.

---

## Nhóm 1: Landing Page Bán Khóa học / Sản phẩm Số / Coaching (EdTech & Info-Product)
* **Mục tiêu cốt lõi**: Tạo sự hào hứng, chứng minh lộ trình rõ ràng, xây dựng lòng tin qua kết quả học viên và thúc đẩy đăng ký ngay.
* **Tông màu khuyên dùng**: Nền tối sang trọng (Slate/Indigo) hoặc Nền sáng hiện đại kết hợp điểm nhấn màu Cam/Tím/Xanh.
* **Bộ Hiệu ứng Phối Chuẩn**:
  1. **Nền đầu trang (Hero Background)**: `@aceternity/aurora-background` hoặc `@aceternity/spotlight` — Tạo ánh sáng tập trung vào tiêu đề khóa học.
  2. **Tiêu đề chính (Headline)**: `@aceternity/flip-words` — Lật từ khóa kết quả đạt được (ví dụ: *"Làm chủ AI để [Tự động hóa] / [X3 Hiệu suất] / [Tăng thu nhập]"*).
  3. **Khung giới thiệu Khóa học / Quà tặng**: `@aceternity/3d-card` — Hiển thị mockup hộp khóa học/tài liệu nổi 3D khi di chuột.
  4. **Lộ trình học tập (Curriculum / Modules)**: `@aceternity/timeline` — Đường tia sáng chạy dọc theo từng buổi học/chương học khi khách cuộn chuột xuống.
  5. **Đánh giá học viên (Social Proof)**: `@aceternity/infinite-moving-cards` (dải feedback chạy ngang) + `@aceternity/focus-cards` (hồ sơ giảng viên).
  6. **Nút Đăng ký (CTA) & Gói Học phí**: `@aceternity/moving-border` (viền sáng chạy quanh nút Đăng ký) + `@aceternity/background-gradient` (viền tỏa sáng quanh gói học VIP).
  7. **Giải đáp thắc mắc & Form**: `shadcn/accordion` (FAQ) + `shadcn/card`, `shadcn/input`, `shadcn/button` (Form đăng ký).

---

## Nhóm 2: Phần mềm AI / SaaS / Công cụ Công nghệ (Tech & AI Startup)
* **Mục tiêu cốt lõi**: Thể hiện sức mạnh công nghệ hiện đại, giao diện trực quan của phần mềm và tính năng vượt trội.
* **Tông màu khuyên dùng**: Dark Mode (Đen/Xám đậm `neutral-950`) với điểm nhấn ánh sáng Emerald, Cyan hoặc Violet.
* **Bộ Hiệu ứng Phối Chuẩn**:
  1. **Nền đầu trang (Hero Background)**: `@aceternity/background-beams` — Các tia mạch dữ liệu phát sáng chạy ngầm phía sau.
  2. **Trưng bày Giao diện Phần mềm (App Preview)**: `@aceternity/container-scroll-animation` — Màn hình Dashboard phần mềm nghiêng 3D và tự dựng thẳng lên khi người dùng cuộn trang.
  3. **Lưới Tính năng cốt lõi (Features)**: `@aceternity/bento-grid` — Bố cục lưới Bento kiểu Apple trình bày 4–6 tính năng thông minh.
  4. **Bảng giá (Pricing Tiers)**: `shadcn/tabs` (Chuyển đổi trả theo Tháng / Năm) + `@aceternity/card-spotlight` (hiệu ứng đèn rọi theo chuột trên từng gói cước).
  5. **Nút Dùng thử (Primary CTA)**: `@aceternity/hover-border-gradient` hoặc `@aceternity/moving-border`.

---

## Nhóm 3: Thương mại Điện tử / Sản phẩm Cao cấp / Thẩm mỹ / Nội thất (E-Commerce & Service Showcase)
* **Mục tiêu cốt lõi**: Tôn vinh vẻ đẹp sản phẩm, chứng minh hiệu quả thực tế (Trước/Sau) và trải nghiệm mua hàng mượt mà.
* **Bộ Hiệu ứng Phối Chuẩn**:
  1. **Thanh điều hướng (Navbar)**: `@aceternity/floating-navbar` — Tự ẩn khi khách đang ngắm ảnh sản phẩm, hiện ngay khi cuộn nhẹ lên.
  2. **Nền điểm nhấn**: `@aceternity/sparkles` (hạt lấp lánh sang trọng) hoặc nền sáng tối giản tinh tế.
  3. **Trưng bày Sản phẩm chủ lực**: `@aceternity/3d-card` (nghiêng 3D đa lớp) hoặc `@aceternity/focus-cards` (làm mờ xung quanh khi ngắm 1 sản phẩm).
  4. **So sánh Hiệu quả Thực tế**: `@aceternity/compare` — Thanh trượt kéo qua lại xem hình ảnh Trước & Sau (cực hợp cho Nội thất, Mỹ phẩm, Nha khoa, Spa, Thiết kế).
  5. **Cảm nhận Khách hàng**: `@aceternity/animated-testimonials` — Ảnh khách hàng xếp lớp 3D kèm câu chuyện trải nghiệm.
  6. **Giỏ hàng / Đặt lịch nhanh**: `shadcn/sheet` (ngăn trượt từ cạnh phải) + `shadcn/dialog`.

---

## Nhóm 4: Portfolio Cá nhân / Creative Agency / Freelancer
* **Mục tiêu cốt lõi**: Gây ấn tượng cá tính mạnh, thể hiện gu thẩm mỹ khác biệt và trưng bày dự án đã làm (Case Studies).
* **Bộ Hiệu ứng Phối Chuẩn**:
  1. **Menu điều hướng đặc biệt**: `@aceternity/floating-dock` — Thanh công cụ nổi ở cạnh dưới màn hình phóng to icon kiểu MacOS.
  2. **Nền mở đầu**: `@aceternity/wavy-background` (sóng lụa chuyển động) hoặc `@aceternity/background-gradient-animation`.
  3. **Lời chào mở đầu**: `@aceternity/text-generate-effect` — Chữ xuất hiện tuần tự đầy cảm xúc.
  4. **Danh mục Kỹ năng / Dịch vụ**: `@aceternity/card-hover-effect` — Nền trượt mượt mà đuổi theo chuột qua từng ô kỹ năng.
  5. **Hành trình Kinh nghiệm & Dự án**: `@aceternity/timeline` + `@aceternity/expandable-card` (bấm vào dự án để mở rộng xem chi tiết ngay trên trang).

---

## Nhóm 5: Doanh nghiệp B2B / Bất động sản / Tài chính / Tư vấn (Corporate & High-Ticket)
* **Mục tiêu cốt lõi**: Sự chỉn chu, tin cậy tuyệt đối, rõ ràng về quy trình và số liệu, không làm rối mắt khách hàng lớn tuổi/doanh nhân.
* **Bộ Hiệu ứng Phối Chuẩn**:
  1. **Thanh Menu**: `@aceternity/navbar-menu` — Menu đa cấp sang trọng hoặc Header cố định chuẩn mực.
  2. **Nền trang**: `@aceternity/grid-and-dot-backgrounds` kết hợp `@aceternity/spotlight` nhẹ nhàng.
  3. **Điểm mạnh & Dịch vụ**: `@aceternity/card-hover-effect` hoặc `@aceternity/bento-grid` gọn gàng.
  4. **Quy trình Hợp tác**: `@aceternity/timeline` — Thể hiện rõ các bước làm việc minh bạch.
  5. **Logo Đối tác & Khách hàng**: `@aceternity/infinite-moving-cards` — Dải logo đối tác trôi nhẹ liên tục.
  6. **Biểu mẫu Nhận báo giá / Tư vấn**: Tổ hợp `shadcn` (`card`, `input`, `select`, `textarea`, `button`).

---

## Nhóm 6: Bản đồ Ánh xạ 10 Mẫu Landing Page Cao Cấp Đã Đóng Gói Sẵn Trong Repo

Khi người dùng cần giải pháp nhanh hoặc muốn phong cách chuẩn từ các công ty công nghệ lớn, hãy dùng trực tiếp 10 mẫu đã dựng sẵn trong `@/components/templates`:

| Nhu cầu & Lĩnh vực của Người dùng | Mẫu Đề xuất Khuyên Dùng | File Template |
| :--- | :--- | :--- |
| Open Source, Thư viện code, Công cụ Dev, GitHub repo | **01: Open PRO Style** | `OpenProTemplate` |
| Quản lý tài liệu, Notion-like, SaaS tối giản nền sáng | **02: Simple Light Style** | `SimpleLightTemplate` |
| Trí tuệ nhân tạo, Web3, Mạng lưới đám mây, GPU/Node | **03: Stellar Style** | `StellarTemplate` |
| Tác tử tự động (AI Agents), Cyberpunk, DevOps, CLI | **04: Neon Agent Style** | `NeonTemplate` |
| Quản lý dự án, Issue Tracker, Phần mềm kỹ sư cấp cao | **05: Linear Style** | `LinearTemplate` |
| Ứng dụng Desktop, Launcher tiện ích, Phím tắt AI | **06: Raycast Style** | `RaycastTemplate` |
| Nền tảng API, Email giao dịch, SDK lập trình viên | **07: Resend Style** | `ResendTemplate` |
| Rút gọn link, Phân tích dữ liệu click, Marketing | **08: Dub.co Style** | `DubTemplate` |
| Cơ sở dữ liệu đám mây, Postgres, Backend BaaS | **09: Supabase Style** | `SupabaseTemplate` |
| Đặt lịch hẹn chuyên gia, Coaching 1:1, Demo doanh nghiệp | **10: Cal.com Style** | `CalTemplate` |

