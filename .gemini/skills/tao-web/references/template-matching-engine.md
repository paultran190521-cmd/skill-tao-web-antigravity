# THUẬT TOÁN ĐỐI CHIẾU & CỐ VẤN KHỚP MẪU WEBSITE (TEMPLATE MATCHING ENGINE)

> **Mục tiêu**: Giúp người dùng không cần phải mò mẫm hay phân vân giữa hàng chục mẫu web. Chỉ cần đưa ra một đề bài ngắn gọn (hoặc tài liệu thô), hệ thống sẽ tự động phân tích "ADN Đề bài", đối chiếu với 10 mẫu web cao cấp có sẵn và đề xuất phương án chuyển đổi tối ưu nhất (CRO Match).

---

## 1. MA TRẬN ĐỐI CHIẾU 10 MẪU WEBSITE THEO "ADN ĐỀ BÀI"

| Mã mẫu | Tên phong cách | ADN Nhận diện cốt lõi (Vibe & Mục tiêu) | Ngành nghề & Bài toán phù hợp nhất | Điểm độc bản (Signature Component) |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **OpenPro** | Dark Slate, Hiện đại, Khởi nghiệp công nghệ, Đa tính năng | SaaS, DevTools, Phần mềm mã nguồn mở, Nền tảng B2B | Video Hero Modal + Bento Features Grid + FAQ đa tầng |
| **02** | **Simple Light** | Nền trắng tinh khiết, Tối giản, Trí thức, Không mỏi mắt | Notion-like apps, Quản lý tài liệu, EdTech học thuật, Agency thiết kế | Khoảng thở rộng + Typography sắc nét + Thẻ giá nền sáng |
| **03** | **Stellar** | Dark Deep Space, Ánh tím huyền ảo, Mạng lưới tính toán | Trí tuệ nhân tạo (AI Platform), Web3, Cloud, Hạ tầng GPU | Particle Canvas + Vệt sáng vũ trụ + Bằng chứng công nghệ cao |
| **04** | **Neon Agent** | Cyberpunk đen tuyền, Xanh neon, Terminal dòng lệnh | AI Agents tự hành, Công cụ DevOps, An ninh mạng, Tự động hóa | Khung Terminal gõ lệnh thực tế + Hiệu ứng quét viền Neon |
| **05** | **Linear** | Đen sâu chuẩn mực, Viền hairline 1px siêu nét, Kỹ sư tinh hoa | Phần mềm quản lý dự án, Issue Tracker, SaaS năng suất cao | Phím tắt bàn phím tương tác (`Kbd`) + Tab tính năng vi mô |
| **06** | **Raycast** | Đen huyền ánh đỏ cam, Command Palette, Ứng dụng Desktop | Launcher, Trợ lý ảo AI trên máy tính, Kho Extensions/Plugins | Khung tìm kiếm tương tác gõ thử + Kho ứng dụng mở rộng |
| **07** | **Resend** | Đen trắng tối thượng (Monochrome), Dev-First, Tốc độ cao | API Platform, Dịch vụ Email/SMS giao dịch, SDK lập trình | Hộp code đa ngôn ngữ (Node/Python/Go) + Nút Copy code 1-click |
| **08** | **Dub.co** | Xanh công nghệ, Sáng sủa/Tối kết hợp, Dữ liệu tăng trưởng | Marketing Tool, Rút gọn link, Analytics, SEO, Affiliate | Biểu đồ Click tương tác + Bảng so sánh tính năng đối thủ |
| **09** | **Supabase** | Đen ngọc lục bảo (Emerald), Mã nguồn mở cấp doanh nghiệp | Cơ sở dữ liệu đám mây, BaaS, Nền tảng bảo mật cao, Backend | 5 Module kiến trúc (Auth, DB, Storage, Realtime, Edge) |
| **10** | **Cal.com** | Đen trắng tối giản, Lịch tương tác trực quan, Đặt hẹn 1-click | Đặt lịch tư vấn chuyên gia, Bác sĩ/Luật sư, Coaching 1:1, Demo | Widget chọn ngày giờ họp tương tác + Tích hợp múi giờ |
| **11** | **EdTech Landing** | Đen tím cao cấp, Phễu chuyển đổi phụ huynh/học viên | Khóa học trực tuyến, Đào tạo kỹ năng, Bán sản phẩm số | Timeline lộ trình 8 buổi + Thẻ giảng viên + Cam kết 24h |

---

## 2. QUY TRÌNH 4 BƯỚC: TỪ ĐỀ BÀI ĐẾN TRANG WEB HOÀN CHỈNH

```
   [Đề bài của bạn]
          │
          ▼
┌───────────────────────────────┐
│ Bước 1: Trích xuất ADN Đề bài │ ──▶ (Sản phẩm? Khách hàng? CTA chính? Vibe?)
└───────────────────────────────┘
          │
          ▼
┌─────────────────────────────────┐
│ Bước 2: Báo cáo Khớp Mẫu (CRO)  │ ──▶ Đề xuất 1 Mẫu số 1 + 1 Mẫu dự phòng + Bản đồ rót nội dung
└─────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────┐
│ Bước 3: Rót nội dung & Thay thế │ ──▶ Biến nội dung thô thành copy chuẩn tối giản (Zero-Fluff)
└─────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────┐
│ Bước 4: Kiểm định QA 100/100    │ ──▶ Chạy npm run audit qua web_qa_inspector trước khi bàn giao
└─────────────────────────────────┘
```

### Bước 1: Trích xuất 4 Tham số "ADN Đề bài"
Mỗi khi bạn đưa ra một đề bài, AI sẽ tự động phân tích 4 câu hỏi:
1. **Loại sản phẩm/dịch vụ**: Khóa học, Phần mềm, Dịch vụ tư vấn, Công cụ Dev, hay Sản phẩm vật lý?
2. **Khách hàng mục tiêu (Target Persona)**: Lập trình viên (cần code/tốc độ), Doanh nhân B2B (cần tin cậy/bảo mật), Học viên/Phụ huynh (cần lộ trình/cam kết), hay Người dùng đại trà?
3. **Mục tiêu chuyển đổi số 1 (Primary CTA)**:
   - Cần họ *Đặt lịch hẹn ngay* $\rightarrow$ **Chọn Mẫu 10 (Cal.com)**.
   - Cần họ *Copy mã SDK/API* $\rightarrow$ **Chọn Mẫu 07 (Resend)**.
   - Cần họ *Xem lộ trình & Mua khóa học* $\rightarrow$ **Chọn Mẫu 11 (EdTech)**.
   - Cần họ *Xem phần mềm vận hành trực quan* $\rightarrow$ **Chọn Mẫu 05 (Linear) hoặc 06 (Raycast)**.
   - Cần họ *Xem số liệu tăng trưởng & So sánh* $\rightarrow$ **Chọn Mẫu 08 (Dub.co)**.
4. **Gu thẩm mỹ & Vibe**: Nền tối chiều sâu công nghệ (Dark) hay Nền sáng tinh tế trí thức (Light)?

### Bước 2: Báo cáo Đề xuất & Khớp Mẫu (Template Match Proposal)
AI sẽ gửi lại một bảng cố vấn ngắn gọn gồm:
- **Mẫu khuyên dùng số 1 (Best Match)**: Tên mẫu, lý do chọn dựa trên tâm lý khách hàng và tỷ lệ chuyển đổi.
- **Mẫu dự phòng số 2 (Alternative Match)**: Đổi vibe (ví dụ nếu khách thích nền sáng thay vì nền tối).
- **Bản đồ Rót nội dung (Content Injection Map)**: Đề bài của bạn sẽ được ánh xạ vào đâu trên trang (Hero, Features, Social Proof, CTA).

### Bước 3: Rót Nội dung & Gọt Giũa Tối Giản (Content Injection)
Sau khi bạn chọn hoặc duyệt mẫu:
- AI tự động đưa toàn bộ nội dung của bạn vào template.
- Áp dụng triệt để quy tắc **Minimalist Copywriting**: Tiêu đề H1 ALL CAPS 5–8 từ, cắt sạch 100% hư từ (*"chúng tôi"*, *"nhằm mục đích"*...), các thẻ con dùng Sentence case.
- Giữ vững kỷ luật màu sắc 60-30-10 của mẫu.

### Bước 4: Kiểm định Chất lượng Tự động (QA Audit Gatekeeper)
- Kích hoạt lệnh `npm run audit`.
- Subagent `web_qa_inspector` kiểm tra 5 cổng: Lọc hư từ, Viết hoa, Bảng màu, Tailwind v4 và TypeScript.
- Đảm bảo đạt **100/100 ĐIỂM** tuyệt đối rồi mới xuất bàn giao!

---

## 3. CÁC TÌNH HUỐNG THỰC TẾ (CASE STUDIES)

### Tình huống A: "Tôi muốn làm web giới thiệu công cụ AI tự động viết bài SEO"
- **Phân tích ADN**: Sản phẩm SaaS công nghệ cao, khách hàng là Marketer/Creator, cần xem trước kết quả trực quan và bảng giá.
- **Mẫu số 1 khuyên dùng**: **Mẫu 08 (Dub.co Style)** hoặc **Mẫu 03 (Stellar Style)**.
- **Lý do**: Có biểu đồ tăng trưởng SEO trực quan, bảng so sánh tính năng và hiệu ứng hào quang công nghệ.

### Tình huống B: "Tôi muốn làm web đặt lịch tư vấn luật doanh nghiệp & tài chính"
- **Phân tích ADN**: Dịch vụ cao cấp (High-ticket), khách hàng là chủ doanh nghiệp, cần sự tin cậy cao độ và hành động chính là chọn giờ hẹn.
- **Mẫu số 1 khuyên dùng**: **Mẫu 10 (Cal.com Style)** hoặc **Mẫu 02 (Simple Light)**.
- **Lý do**: Mockup chọn ngày giờ họp trực tiếp loại bỏ mọi ma sát đăng ký, giao diện tinh tế không rườm rà.

### Tình huống C: "Tôi muốn bán khóa học lập trình Python cho người mới bắt đầu"
- **Phân tích ADN**: Giáo dục số, học viên cần thấy rõ học xong làm được gì, từng tuần học bài gì, ai dạy, bảo hành học phí thế nào.
- **Mẫu số 1 khuyên dùng**: **Mẫu 11 (EdTech Course Landing)**.
- **Lý do**: Đã có sẵn Timeline lộ trình học 8 tuần, hồ sơ giảng viên, đánh giá trôi tự động và cam kết bảo chứng 24h.
