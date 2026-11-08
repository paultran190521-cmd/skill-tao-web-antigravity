# CẨM NANG KỶ LUẬT PHỐI MÀU & PHÂN TẦNG MÀU CHỮ WEB CAO CẤP (`color-palette-system.md`)

> **NGUYÊN TẮC CỐT LÕI**: 
> "Sự sang trọng và cao cấp của một website không đến từ việc có nhiều màu rực rỡ, mà đến từ **kỷ luật hạn chế màu sắc** và **độ tương phản phân tầng chuẩn xác** giữa nền, viền và chữ."

---

## I. TỶ LỆ PHỐI MÀU VÀNG 60 — 30 — 10 TRONG THIẾT KẾ WEB HIỆN ĐẠI

Mọi website tạo ra phải tuân thủ nghiêm ngặt tỷ lệ phân bổ diện tích thị giác:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 60% MÀU NỀN CHỦ ĐẠO (DOMINANT BACKGROUND)                              │
│ • Dark Mode: Nền tối sâu neutral-950 (#0a0a0a), #08090a, #050505       │
│ • Light Mode: Nền trắng tinh khôi #ffffff hoặc zinc-50 (#fafafa)       │
│ • Mục đích: Tạo không gian nghỉ ngơi cho mắt, làm phông nền tĩnh.     │
├────────────────────────────────────────────────────────────────────────┤
│ 30% MÀU CẤU TRÚC & NỀN PHỤ (STRUCTURAL / SECONDARY)                    │
│ • Viền thẻ mảnh 1px (Hairline): border-neutral-800 hoặc border-white/10│
│ • Nền thẻ Card phân lớp: neutral-900/60 kèm backdrop-blur-md          │
│ • Màu chữ nội dung dễ đọc: neutral-400 / zinc-400                      │
│ • Mục đích: Định hình khối hộp, tạo chiều sâu thị giác tách lớp.       │
├────────────────────────────────────────────────────────────────────────┤
│ 10% MÀU ĐIỂM NHẤN THƯƠNG HIỆU (BRAND ACCENT - DUY NHẤT 1 TÔNG MÀU)     │
│ • Chỉ dành riêng cho: Nút bấm Primary CTA, huy hiệu VIP, vệt sáng chính│
│ • Màu chủ đạo ví dụ: Indigo-600, Emerald-500, Blue-600, Rose-500       │
│ • CẤM KỴ: Tuyệt đối không dùng 3-4 màu neon khác nhau cạnh tranh CTA!  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## II. HỆ THỐNG PHÂN TẦNG MÀU CHỮ 4 CẤP BẬC (TYPOGRAPHIC COLOR HIERARCHY)

Một trong những lỗi nặng nhất của các trang web kém chất lượng là dùng màu chữ lộn xộn (chỗ xanh, chỗ đỏ, chỗ vàng). Web cao cấp chỉ dùng đúng **4 cấp bậc màu chữ chuẩn khoa học thị giác**:

| Cấp Bậc | Vai Trò | Mã Màu (Dark Mode) | Mã Màu (Light Mode) | Vị Trí Khuyên Dùng |
| :---: | :--- | :--- | :--- | :--- |
| **Cấp 1** | **Chữ Chính (Primary Text)** | `text-white` (`#ffffff`) | `text-zinc-950` (`#09090b`) | Tiêu đề H1, H2, Con số chỉ số lớn, Tên gói giá |
| **Cấp 2** | **Chữ Nội Dung (Body Text)** | `text-neutral-400` / `text-zinc-400` | `text-zinc-600` (`#52525b`) | Đoạn văn mô tả, Subtitle, Lời giải thích thẻ Card |
| **Cấp 3** | **Chữ Thứ Cấp (Muted Text)** | `text-neutral-500` / `text-zinc-500` | `text-zinc-400` (`#a1a1aa`) | Phím tắt (`⌘K`), Ngày tháng, Bản quyền Footer, Nhãn phụ |
| **Cấp 4** | **Chữ Điểm Nhấn (Accent Text)** | Tông Accent (Vd: `text-indigo-400`) | Tông Accent đậm (`text-blue-600`) | Cụm từ khóa quan trọng trong H1, Nhãn giá trị cốt lõi |

> ⚠️ **Quy tắc Gradient Chữ**: Nếu dùng chữ đổi màu Gradient cho tiêu đề chính, **chỉ phối tối đa 2 đến 3 tông màu liền kề nhau** (Ví dụ: `from-indigo-400 via-purple-300 to-indigo-200` hoặc `from-white via-neutral-200 to-neutral-400`). **TUYỆT ĐỐI CẤM** dùng gradient cầu vồng 5-7 màu gây chói lóa và rẻ tiền.

---

## III. QUY TẮC VIỀN MẢNH 1PX & ÁNH SÁNG TẢN MỜ (HAIRLINE BORDERS & AMBIENT GLOW)

1. **Viền Hairline 1px Siêu Tinh Tế**:
   - Trong Dark Mode, dùng `border border-neutral-800/80` hoặc `border border-white/[0.08]`.
   - Trong Light Mode, dùng `border border-zinc-200` hoặc `border border-zinc-100`.
   - Tuyệt đối không dùng viền 2px-3px thô kệch.
2. **Ánh Sáng Nền Tản Rộng (Ambient Blur)**:
   - Thay vì đổ bóng đen đặc (`drop-shadow`), hãy dùng quầng sáng tản mờ đặt ngầm phía sau Hero hoặc Form đăng ký:
   ```tsx
   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/10 blur-[130px] pointer-events-none -z-10" />
   ```
   - Quầng sáng này giúp nội dung nổi bật lên nhẹ nhàng như đang tỏa sáng trong không gian 3D.

---

## IV. QUY TẮC MÀU CHỨC NĂNG (SEMANTIC STATUS COLORS)

Màu xanh lá (Thành công), Màu vàng/cam (Cảnh báo/Đánh giá sao), Màu đỏ (Lỗi) **chỉ được xuất hiện dưới dạng chấm tròn vi mô (Status Dot 6px) hoặc icon nhỏ (14–16px)**:
- ✅ **Đúng**: Chấm xanh nhấp nháy `w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse` bên cạnh dòng chữ xám `Mạng lưới hoạt động bình thường`.
- ❌ **Sai**: Đổ nguyên một dải nền thẻ card màu đỏ hoặc vàng chói lóa làm vỡ bảng màu tổng thể.

---

## V. BẢNG MÃ MÀU CHUẨN CỦA 10 TEMPLATE ĐỈNH CAO TRONG REPO

| STT | Mẫu Template | 60% Nền Chủ Đạo | 30% Cấu Trúc & Thẻ | 10% Accent CTA | Cảm Xúc Thị Giác |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **01** | **Open PRO** | `neutral-950` (`#0a0a0a`) | `neutral-800` viền, `neutral-900/60` thẻ | `indigo-600` (`#4f46e5`) | Mã nguồn mở, Uy tín, Trí tuệ |
| **02** | **Simple Light** | Pure White (`#ffffff`) | `zinc-200` viền, `zinc-50` nền phụ | `blue-600` (`#2563eb`) | Tinh khôi, Sạch sẽ, Dễ đọc |
| **03** | **Stellar** | Space Slate (`#020617`) | `purple-900/30` viền, `slate-900/50` | `cyan-400` / `purple-500` | Vũ trụ, AI Đám mây, Web3 |
| **04** | **Neon Agent** | Obsidian (`#050505`) | `emerald-500/20` viền, Lưới ngầm | `emerald-400` (`#34d399`) | Cyberpunk, Tác tử tự động |
| **05** | **Linear Style** | Dark Charcoal (`#08090a`)| `white/[0.08]` hairline viền | `white` / `indigo-500` | Kỹ sư cấp cao, Tối giản Silicon |
| **06** | **Raycast Style** | Deep Night (`#070709`) | `zinc-800/80` viền, `zinc-900` | `rose-500` & `orange-400` | Tốc độ phím bấm, Năng động |
| **07** | **Resend Style** | True Black (`#000000`) | `neutral-900` viền, Đen trắng | `white` tương phản tuyệt đối | Đen trắng thanh lịch, Thuần Dev |
| **08** | **Dub.co Style** | Modern Neutral-950 | `neutral-800` viền, `neutral-900` | `blue-600` (`#2563eb`) | Tiếp thị số, Chuyển đổi cao |
| **09** | **Supabase** | Deep Charcoal (`#0e0f12`)| `neutral-800` viền, Bảng dữ liệu | `emerald-400` (`#3ecf8e`) | Cơ sở dữ liệu Postgres, Vững chãi |
| **10** | **Cal.com** | Minimal Neutral-950 | `neutral-800` viền, `neutral-900/90` | `white` nút bấm tương phản | Đặt lịch hẹn, Thân thiện |
