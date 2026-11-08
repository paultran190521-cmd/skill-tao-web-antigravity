# AGENT KIỂM ĐỊNH CHẤT LƯỢNG TIÊU CHUẨN WEB (WEB QA INSPECTOR)

> **Mục tiêu**: Đóng vai trò là "Cổng kiểm soát chất lượng độc lập" (Quality Gatekeeper). Mọi website, landing page, hoặc component trước khi bàn giao cho người dùng BẮT BUỘC phải vượt qua 5 cổng kiểm định với điểm số tuyệt đối 100/100.

---

## 1. HỒ SƠ AGENT KIỂM ĐỊNH (`web_qa_inspector`)
- **Tên Agent**: `web_qa_inspector` (Web Quality Assurance Inspector)
- **Vai trò**: Giám sát viên độc lập, kiểm tra tuân thủ các quy tắc: Tiếng Việt tối giản, Typography chuẩn mực, Kỷ luật màu sắc 60-30-10, Viền 1px hairline, Không hư từ (Zero-Fluff), và Sạch lỗi biên dịch TypeScript.
- **Lệnh thực thi tự động**: `npm run audit` (Chạy bộ kiểm tra tự động tại `scripts/audit-web.ts`).

---

## 2. MA TRẬN 5 CỔNG KIỂM ĐỊNH CHẤT LƯỢNG (100 ĐIỂM)

| Cổng kiểm định | Tiêu chí đánh giá | Trọng số | Điều kiện ĐẠT |
| :--- | :--- | :---: | :--- |
| **Cổng 1: Lọc bỏ Hư từ (Zero-Fluff Filter)** | Quét toàn bộ mã nguồn `src/` tìm các từ đệm sáo rỗng (*chúng tôi, quý khách, nhằm mục đích, có thể giúp bạn, một cách tốt nhất, một cách hiệu quả, tự hào mang đến...*) | **20 điểm** | Không có bất kỳ hư từ nào xuất hiện trong giao diện. Thay bằng số liệu hoặc câu hành động ngắn gọn. |
| **Cổng 2: Viết hoa Tiếng Việt & Ngân sách từ H1** | H1 Hero viết hoa toàn bộ (ALL CAPS) dứt khoát, tối đa 5–8 từ/dòng (giới hạn cứng 10–12 từ). Toàn bộ Subtitle, Card, Label, Button CTA dùng Sentence case. Cấm tuyệt đối Title Case kiểu tiếng Anh. | **20 điểm** | 100% thẻ `<h1>` viết hoa ALL CAPS, không quá ngân sách từ; các thẻ con chỉ viết hoa chữ cái đầu. |
| **Cổng 3: Phối màu 60-30-10 & Viền Hairline 1px** | 60% Nền trung tính (`neutral-950` hoặc `#fff`), 30% cấu trúc phụ trợ viền siêu mỏng 1px (`border-neutral-800`, `border-white/10`). CẤM viền thô dày `border-2`, `border-4`. Duy nhất 10% Accent cho CTA. CẤM gradient cầu vồng lòe loẹt. | **20 điểm** | Không có `border-2`/`border-4`, không có gradient 4-5 màu đối nghịch, 1 màu Accent duy nhất cho CTA. |
| **Cổng 4: Tương thích Tailwind CSS v4 Keyframes** | Kiểm tra `src/app/globals.css` đã khai báo đầy đủ `@keyframes scroll` và `.animate-scroll` để đảm bảo thẻ trôi (Marquee/InfiniteMovingCards) không bị đóng băng trên Tailwind v4. | **20 điểm** | Tệp `globals.css` có đầy đủ keyframes và class animation vận hành mượt mà 60fps. |
| **Cổng 5: TypeScript & Build Health** | Kiểm tra toàn bộ dự án với trình biên dịch TypeScript (`tsc --noEmit`). | **20 điểm** | Không phát sinh lỗi cú pháp hay gõ sai kiểu (0 TypeScript errors). |

---

## 3. NGUYÊN TẮC BÀN GIAO BẮT BUỘC (MANDATORY GATEWAY RULE)

> [!IMPORTANT]
> **QUY TẮC CỨNG DÀNH CHO TẤT CẢ CÁC AI CODING AGENTS (ANTIGRAVITY, CLAUDE, CURSOR):**
> 1. Sau khi viết hoặc chỉnh sửa bất kỳ component hay trang web nào, AI Agent **PHẢI** chạy lệnh `npm run audit` trong terminal (hoặc gọi subagent `web_qa_inspector`).
> 2. Nếu điểm số < 100 điểm:
>    - **TUYỆT ĐỐI KHÔNG BÀN GIAO** cho người dùng.
>    - Phải đọc danh sách các vi phạm được chỉ ra trong báo cáo audit, thực hiện sửa đổi triệt để các file vi phạm.
>    - Chạy lại `npm run audit` cho tới khi nhận được thông báo:
>      `🎉 KẾT QUẢ: ĐẠT TIÊU CHUẨN CHUẨN MỰC 100%! SẴN SÀNG BÀN GIAO CHO NGƯỜI DÙNG.`
> 3. Trong tin nhắn phản hồi cuối cùng gửi người dùng, phải đính kèm Bảng điểm Scorecard tóm tắt để người dùng an tâm về chất lượng.

---

## 4. HƯỚNG DẪN KHẮC PHỤC NHANH KHI AUDIT BÁO LỖI

### Lỗi 1: Chứa hư từ (Ví dụ: "chúng tôi", "nhằm mục đích")
- ❌ Sai: `Chúng tôi mang đến giải pháp tối ưu chi phí nhằm mục đích giúp doanh nghiệp phát triển.`
- ✅ Sửa: `Cắt giảm 50% chi phí vận hành với quy trình tự động hóa.`

### Lỗi 2: Tiêu đề H1 chưa viết hoa toàn bộ hoặc vượt quá số từ
- ❌ Sai: `Hệ thống quản lý công việc và dự án hàng đầu cho các kỹ sư công nghệ` (14 từ, chữ thường)
- ✅ Sửa: `QUẢN LÝ DỰ ÁN CHO KỸ SƯ TINH HOA` (7 từ, ALL CAPS)

### Lỗi 3: Viền dày thô (border-2, border-4)
- ❌ Sai: `className="border-2 border-indigo-500 rounded-xl"`
- ✅ Sửa: `className="border border-white/10 hover:border-indigo-500/50 rounded-xl"`

### Lỗi 4: Thiếu Keyframe CSS Tailwind v4
- Thêm vào cuối `src/app/globals.css`:
```css
@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

.animate-scroll {
  animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
}
```
