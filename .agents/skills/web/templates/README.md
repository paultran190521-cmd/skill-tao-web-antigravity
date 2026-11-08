# BỘ 10 MẪU LANDING PAGE CAO CẤP TUYỂN CHỌN (`skill-web/templates`)

Kho mẫu này được đóng gói sẵn trực tiếp trong Git repository để phục vụ quy trình tạo web tự động của `/skill-web`. Bất kỳ AI Agent nào (Google Antigravity, Claude Code, Cursor, Codex) khi mở dự án đều có thể đọc mã nguồn tại `src/components/templates/` và áp dụng ngay lập tức cho người dùng.

---

## Danh Sách 10 Mẫu Đã Đóng Gói

| Mã Mẫu | Tên Mẫu | Phong cách / Lĩnh vực | File Thành Phần | Bảng màu Chủ đạo |
| :--- | :--- | :--- | :--- | :--- |
| `01-open-pro` | **Open PRO** | Open Source & Dev Tools | `OpenProTemplate.tsx` | Nền Dark Neutral-950, Ánh sáng tím/indigo `indigo-600` |
| `02-simple-light` | **Simple Light** | Clean Light Minimal | `SimpleLightTemplate.tsx` | Nền trắng sáng tinh khôi, Điểm nhấn xanh dương `blue-600` |
| `03-stellar` | **Stellar** | AI / Web3 / Cloud Infrastructure | `StellarTemplate.tsx` | Nền vũ trụ hạt sao, Ánh sáng Neon tím & Cyan `cyan-400` |
| `04-neon` | **Neon Agent** | Cyberpunk / AI Tech / Automation | `NeonTemplate.tsx` | Nền Obsidian `#050505`, Viền Neon xanh ngọc `emerald-400` |
| `05-linear` | **Linear Style** | Quản lý dự án phần mềm / Engineering | `LinearTemplate.tsx` | Viền mảnh 1px, Nền `#08090a`, Phím tắt `Command + K` |
| `06-raycast` | **Raycast Style** | Mac Launcher & AI Tools | `RaycastTemplate.tsx` | Thanh lệnh Command Palette, Ánh sáng đỏ cam `rose-500` |
| `07-resend` | **Resend Style** | Nền tảng Email cho Dev / API | `ResendTemplate.tsx` | Tối giản đen trắng tuyệt đối, Tab code đa ngôn ngữ |
| `08-dub` | **Dub.co Style** | Rút gọn link & Phân tích chuyển đổi | `DubTemplate.tsx` | Rút gọn link trực tiếp ở Hero, Thẻ số liệu thời gian thực |
| `09-supabase` | **Supabase Style** | Cơ sở dữ liệu đám mây / BaaS | `SupabaseTemplate.tsx` | Nền đen sâu, Xanh ngọc lục bảo `#3ecf8e`, Trình duyệt bảng Postgres |
| `10-cal` | **Cal.com Style** | Nền tảng Đặt lịch hẹn / Coaching | `CalTemplate.tsx` | Widget đặt lịch hẹn & chọn khung giờ không ma sát ngay tại Hero |

---

## Cách Kích Hoạt Trong Skill Web

Khi người dùng yêu cầu làm web mới hoặc nâng cấp giao diện bằng lệnh `/skill-web`, bạn có thể đề xuất 1 trong 10 mẫu trên:
- Ví dụ: *"Dựa vào lĩnh vực của bạn là công cụ phân tích dữ liệu, tôi đề xuất áp dụng bố cục **Mẫu 08: Dub.co Style** hoặc **Mẫu 05: Linear Style**..."*
- Khi người dùng chốt mẫu, AI Agent chỉ cần import component tương ứng từ `@/components/templates` hoặc sao chép cấu trúc layout vào `src/app/page.tsx` và tùy biến nội dung theo đúng yêu cầu đề bài.

## Quy Chuẩn Bắt Buộc Khi Sử Dụng Mẫu
1. **Viết hoa Tiếng Việt**: Tiêu đề chính H1/Hero BẮT BUỘC viết hoa toàn bộ (ALL CAPS, 5–8 từ/dòng). Toàn bộ thẻ phụ, card con, nút bấm, nhãn BẮT BUỘC dùng Sentence case (chỉ viết hoa chữ cái đầu).
2. **Kỷ luật màu 60-30-10**: Giữ đúng 1 màu Accent chủ lực cho Primary CTA.
3. **One Hero Motion**: Không để hiệu ứng nền cạnh tranh ánh nhìn với nút bấm kêu gọi hành động chính.
