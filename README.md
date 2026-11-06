# Skill Tạo Web Antigravity & Hệ Thống Landing Page Tối Ưu Chuyển Đổi (CRO)

> **Dự án mẫu cao cấp đóng gói toàn diện cho chế độ làm việc từ xa (Remote Project) trên Google Antigravity, Claude Code, GitHub Codespaces, Cursor và VS Code.**

Tích hợp sẵn:
- 🚀 **Khung công nghệ**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion (Framer Motion).
- 🎨 **Bộ 9 thư viện hiệu ứng UI đỉnh cao**: Aceternity UI, LightsWind, Motion Primitives, Kokonut, Eldora, Spectrum, Animata, Lukacho, Shadcn UI.
- 🔤 **Bộ 12 font chữ chuẩn tiếng Việt không lỗi**: Be Vietnam Pro, Montserrat, Inter, Plus Jakarta Sans, Manrope, Space Grotesk, Lexend, Epilogue, Archivo, Work Sans, Mulish, Lora.
- 🤖 **Bộ kỹ năng AI tích hợp sẵn trong repo**: `.gemini/skills/skill-web/` (Antigravity) & `.agents/skills/skill-web/` (Claude Code / Cursor / Codex).
- 🔌 **Cấu hình 7 MCP Servers**: Shadcn, LightsWind, Better Icons, Aria Icons, Universal Icons, Iconify, Lucide.

---

## 🌟 Tính Năng & Điểm Nhấn Kiến Trúc

1. **Chuẩn hóa tỷ lệ thị giác & chống lỗi hiển thị**:
   - Khoảng đệm an toàn (`pt-36` đến `pt-44`) chống che khuất chữ khi có fixed header + countdown banner.
   - Tiêu đề chính viết hoa toàn bộ (ALL CAPS) ngắn gọn, súc tích (5–8 từ/dòng), cỡ chữ tỷ lệ vàng `text-3xl sm:text-4xl lg:text-5xl font-black`.
   - Tiêu đề phụ, thẻ card, nhãn, nút bấm tuân thủ 100% **Sentence case**.

2. **Kỷ luật phối màu 60-30-10 & Điểm nhấn chuyển đổi**:
   - 60% Nền Dark Neutral sang trọng (`#0a0a0a` / `neutral-950`).
   - 30% Cấu trúc viền mảnh tinh tế (`neutral-800`), thẻ tối (`neutral-900/80`), chữ xám nhạt (`neutral-300`).
   - 10% Điểm nhấn thương hiệu chủ lực (`Indigo-600`) cho nút kêu gọi hành động (Primary CTA) với độ tương phản cao nhất.

3. **Khối cảm nhận học viên chuyển động vô tận (Infinite Marquee)**:
   - Tích hợp sẵn `@keyframes scroll` và `.animate-scroll` tương thích 100% với Tailwind CSS v4, tự dừng lại khi rê chuột vào đọc.

4. **14 Section hoàn chỉnh chuẩn phễu CRO**:
   - `Navbar`: Menu điều hướng tối giản 1–2 từ, hotline, nút CTA nhanh.
   - `HeroSection`: Nền cực quang Aurora, chữ lật FlipWords, nút CTA nam châm Magnetic.
   - `PainPointsSection`: Nỗi đau phụ huynh & áp lực con theo mô hình Bite-Snack-Meal.
   - `BenefitsSection`: 4 trụ cột đào tạo dạng Bento Grid với hiệu ứng rọi sáng Card Spotlight.
   - `LearningLoopSection`: Sơ đồ chu trình học tập khép kín.
   - `CurriculumSection`: Lộ trình 8 buổi chi tiết với thanh thời gian Timeline trực quan.
   - `InstructorsSection`: Thẻ giảng viên 3D Card tương tác nghiêng đa chiều.
   - `PricingSection`: Bảng học phí 2 gói với viền phát sáng Background Gradient cho gói VIP.
   - `GuaranteeSection`: Cam kết hoàn tiền 100% rủi ro bằng 0.
   - `TestimonialsSection`: Băng chuyền đánh giá phụ huynh & học sinh tự trôi vô tận.
   - `FaqSection`: Bộ câu hỏi thường gặp Accordion đóng mở mượt mà.
   - `FinalCtaSection`: Form đăng ký nhận ưu đãi 45% kiểm tra số điện thoại Việt Nam tự động + Background Beams.
   - `Footer`: Chân trang chuẩn nhận diện thương hiệu.
   - `MobileBottomBar`: Thanh chuyển đổi dính đáy màn hình điện thoại.

---

## 🚀 Hướng Dẫn Bắt Đầu Nhanh (Quick Start)

### 1. Cài đặt & Khởi động
```bash
# Clone dự án từ GitHub
git clone https://github.com/paultran190521-cmd/skill-tao-web-antigravity.git
cd skill-tao-web-antigravity

# Cài đặt thư viện phụ thuộc
npm install

# Chạy môi trường phát triển (Dev Server)
npm run dev
```
Mở trình duyệt tại [http://localhost:3000](http://localhost:3000) hoặc [http://localhost:3001](http://localhost:3001) để xem giao diện trực tiếp.

### 2. Các lệnh thông dụng
- `npm run build`: Đóng gói ứng dụng cho môi trường Production
- `npm run start`: Chạy bản build Production
- `npm run lint`: Kiểm tra chất lượng mã nguồn TypeScript/ESLint

---

## 🤖 Sử Dụng Trong Chế Độ Làm Việc Từ Xa (Remote Project Mode)

Dự án này đã được cấu hình sẵn để bất kỳ AI Agent nào (Google Antigravity, Claude Code, Cursor, Codex) cũng có thể tự động nhận diện và làm việc ngay lập tức:

### 1. Dành cho Google Antigravity
Khi mở repo này trong Antigravity, agent sẽ tự động nạp cấu hình tại:
- `.gemini/rules/web-design-rules.md`: Quy tắc thiết kế và viết hoa tiếng Việt.
- `.gemini/skills/skill-web/`: Toàn bộ công cụ cố vấn CRO và thư viện component.
- `GEMINI.md`: Hướng dẫn tổng quan cho agent.

Để thiết kế hoặc làm mới một trang web, bạn chỉ cần gõ:
```
/skill-web
```
Agent sẽ tự động chạy **Quy trình 6 bước** tư vấn template, lập bảng hiệu ứng và báo cáo tác động thị giác/tâm lý/CRO.

### 2. Dành cho Claude Code
Repo đã có sẵn `CLAUDE.md` và `.agents/skills/skill-web/`. Khi bạn khởi động Claude Code trong thư mục dự án:
```bash
claude
```
Claude Code sẽ tự động tuân thủ quy tắc typography tiếng Việt và quy chuẩn thiết kế.

### 3. Cấu hình MCP Tools cho Cursor & VS Code
File `.mcp.json` và `.cursor/mcp.json` đã cấu hình sẵn 7 MCP server để cài thêm icon hoặc component mới qua lệnh:
```bash
npx shadcn@latest add <component-name>
```

---

## 📁 Cấu Trúc Thư Mục Dự Án

```
├── .agents/                    # Kỹ năng AI chuẩn mở (Claude Code, Cursor, Codex)
│   └── skills/skill-web/       # Cố vấn kiến trúc web & kho từ điển component
├── .gemini/                    # Kỹ năng & quy tắc chuẩn Antigravity
│   ├── rules/                  # Quy tắc thiết kế web & viết hoa tiếng Việt
│   └── skills/skill-web/       # Skill Web cho Antigravity
├── .cursor/                    # Cấu hình MCP cho Cursor
├── .vscode/                    # Cấu hình MCP cho VS Code
├── src/
│   ├── app/                    # Next.js 15 App Router (page.tsx, globals.css, layout.tsx)
│   ├── components/
│   │   ├── landing/            # 14 Section của trang Landing Page
│   │   └── ui/                 # 15+ UI Effect Components từ 9 thư viện đỉnh cao
│   └── lib/                    # utils.ts & fonts.ts (12 font tiếng Việt Google Fonts)
├── .gitignore                  # Bỏ qua node_modules, .next, .env
├── .mcp.json                   # Cấu hình MCP Servers (Shadcn, Icons, LightsWind)
├── AGENTS.md                   # Hướng dẫn tác vụ cho Agent AI
├── CLAUDE.md                   # Hướng dẫn tác vụ cho Claude Code
├── GEMINI.md                   # Hướng dẫn tác vụ cho Google Antigravity
└── package.json                # Danh sách dependencies & scripts
```

---

## 📄 Bản Quyền & Giấy Phép
Dự án được phát triển và tối ưu hóa cho hệ sinh thái **Google Antigravity & AI Agentic Workflows**. Giấy phép MIT.
