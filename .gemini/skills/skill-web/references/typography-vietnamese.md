# Cẩm Nang Typography Web Hiện Đại Chuẩn Tiếng Việt (`typography-vietnamese.md`)

> **NGUYÊN TẮC VÀNG VỀ TYPOGRAPHY TIẾNG VIỆT**:
> 1. **Tuyệt đối không dùng font không có subset `vietnamese`**: Khi thiếu subset tiếng Việt, các chữ có dấu thanh hoặc dấu kép (VD: `ế`, `ề`, `ễ`, `ệ`, `ắ`, `ằ`, `ẵ`, `ặ`, `ố`, `ồ`, `ỗ`, `ộ`, `ứ`, `ừ`, `ữ`, `ự`) sẽ bị "nhảy font" (fallback về Arial hoặc Times New Roman) làm chữ bị lệch hàng, dày mỏng bất thường, dấu đè lên mũ chữ rất xấu và thiếu chuyên nghiệp.
> 2. **Cặp đôi tương phản (Font Pairing)**: Thường phối **1 Font Cá tính/Hình học cho Tiêu đề (Heading)** + **1 Font Dễ đọc, thoáng đãng cho Nội dung (Body text)**.
> 3. **Cấu hình Next.js**: Luôn khai báo `subsets: ["vietnamese", "latin"]` và `display: "swap"` trong `next/font/google`.
> 4. **QUY TẮC VIẾT HOA (CAPITALIZATION RULES - BẮT BUỘC 100%)**:
>    - **Tiêu đề chính (Main Title / H1 / Hero Heading / Tên mục lớn)**: **VIẾT HOA TOÀN BỘ (UPPERCASE / ALL CAPS)** nhưng phải ngắn gọn (tối đa 5–8 từ/dòng), không viết cả câu văn dài. Ví dụ: `QUẢN LÝ DANH SÁCH & TẠO TÀI KHOẢN CHO MARKETER`, `CẨM NANG THIẾT LẬP AFFILIATE ĐẶT LỊCH HẸN`.
>    - **Tiêu đề phụ, thẻ card, đề mục con, nút bấm, nhãn, mô tả (Subheadings, Cards, Buttons, Labels, Body)**: **CHỈ VIẾT HOA CHỮ CÁI ĐẦU TIÊN (Sentence case)**. Tuyệt đối **KHÔNG viết hoa chữ cái đầu từng từ (Title Case kiểu tiếng Anh) và KHÔNG viết hoa ALL CAPS cho thẻ con**. Ví dụ đúng: *"Cấu hình hoa hồng & lấy SDK"*, *"Nhúng mã 2 landing page"*, *"Xem hướng dẫn bước 1"*, *"Đăng ký ngay"*.

---

## I. 2 FONT ƯU TIÊN HÀNG ĐẦU CHO WEBSITE TIẾNG VIỆT

### 1. 🥇 Be Vietnam Pro (Bản địa hóa hoàn hảo nhất)
* **Tác giả:** TypeType & Vietanh Nguyen.
* **Phong cách:** Geometric Sans-serif tối giản, hiện đại, cân đối tuyệt đối.
* **Đặc tính tiếng Việt:** Đây là font duy nhất được thiết kế riêng biệt từ gốc để tôn vinh và xử lý hoàn hảo mọi dấu thanh phức tạp của Tiếng Việt. Dấu hỏi, ngã, mũ được vẽ tỉ mỉ không bao giờ bị dính hay đè nhau.
* **Vị trí khuyên dùng:** Làm **Font mặc định toàn trang (Body text & Heading)** cho mọi loại website hiện đại, SaaS, Landing Page, Thương mại điện tử, Ứng dụng di động.
* **Lớp Tailwind:** `font-sans` hoặc `font-be-vietnam`

### 2. 🥈 Montserrat (Ông hoàng Tiêu đề & Nút bấm)
* **Tác giả:** Julieta Ulanovsky.
* **Phong cách:** Geometric Sans lấy cảm hứng từ các biển hiệu cổ điển của khu phố Montserrat (Buenos Aires).
* **Đặc tính tiếng Việt:** Hỗ trợ đầy đủ bộ ký tự tiếng Việt với các góc cạnh mở rộng, chữ cái tròn trịa, đậm nét và cực kỳ nổi bật.
* **Vị trí khuyên dùng:** **Tiêu đề lớn đầu trang (Hero Title)**, **Nút bấm kêu gọi hành động (CTA Button)**, **Thanh điều hướng Menu (Navbar)**, **Khẩu hiệu (Slogan)**.
* **Lớp Tailwind:** `font-heading` hoặc `font-montserrat`

---

## II. 10 FONT QUỐC TẾ HIỆN ĐẠI HỖ TRỢ TIẾNG VIỆT 100% NATIVE

| STT | Tên Font | Phân loại & Tác giả | Đặc trưng thị giác & Lợi thế tiếng Việt | Lĩnh vực & Vị trí phù hợp nhất | Lớp Tailwind |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **1** | **Inter** | Neo-grotesque UI<br>*(Rasmus Andersson)* | **Tiêu chuẩn vàng số 1 của thế giới UI/UX** (GitHub, Figma, Linear, Vercel). Tối ưu vi điểm cực tốt, dấu tiếng Việt thanh mảnh không bị lem ở cỡ chữ nhỏ (12px–14px). | Ứng dụng Web, Dashboard quản trị, SaaS, E-commerce, Tài liệu kỹ thuật | `font-inter` |
| **2** | **Plus Jakarta Sans** | Modern Grotesk<br>*(Gumpita Rahayu)* | **Xu hướng Web 2024–2026:** Nét bo tròn nhẹ nhàng, khoảng hở rộng thoáng, vừa mang tính công nghệ vừa tạo cảm giác thân thiện, dễ chịu. | Tech Startup, FinTech, Ngân hàng số, Web3, Nền tảng Giáo dục (EdTech) | `font-jakarta` |
| **3** | **Manrope** | Semi-geometric<br>*(Mikhail Sharanda)* | Chiều cao chữ thường (x-height) cực lớn, tỉ lệ cân đối hình học. Dấu tiếng Việt có khoảng cách "thở" hoàn hảo, đọc trên điện thoại rất êm mắt. | Ứng dụng di động, Bất động sản, Y tế & Sức khỏe cao cấp, Landing Page CRO | `font-manrope` |
| **4** | **Space Grotesk** | Tech Brutalism<br>*(Florian Karsten)* | Nét chữ đậm chất tương lai, có chút phá cách góc cạnh của monospace nhưng tỉ lệ co giãn mượt mà. | Trí tuệ nhân tạo (AI), Blockchain, Developer Tools, Cyber Security, Web3 | `font-space-grotesk` |
| **5** | **Lexend** | Ergonomic Typography<br>*(Thomas Jockin)* | Thiết kế dựa trên nghiên cứu khoa học thị giác giúp mắt đọc nhanh hơn 20%, giảm mỏi mắt khi nhìn màn hình thời gian dài. | Báo chí, Blog kiến thức, Khóa học trực tuyến, Tài liệu hướng dẫn (Docs) | `font-lexend` |
| **6** | **Epilogue** | Display Editorial<br>*(Tyler Finck)* | Cá tính mạnh mẽ, độ tương phản nét chữ rõ rệt từ Thin (100) đến Black (900). Tạo ấn tượng thị giác sâu sắc ngay giây đầu tiên. | Creative Agency, Thời trang đường phố (Streetwear), Sự kiện âm nhạc, Portfolio | `font-epilogue` |
| **7** | **Archivo** | Bold News Grotesk<br>*(Omnibus-Type)* | Dáng chữ vững chãi, vuông vức, nam tính, tạo cảm giác tin cậy, nghiêm túc và có kỷ luật cao. | Báo cáo tài chính, Logistics & Vận tải, Cổng thông tin tin tức, Doanh nghiệp B2B | `font-archivo` |
| **8** | **Work Sans** | Elegant Grotesque<br>*(Wei Huang)* | Dấu hỏi, ngã, nặng tiếng Việt được gọt giũa rất gọn gàng, không bị chạm vào mũ của chữ ô, ơ, ê. Rất lịch sự và trang nhã. | Trang công ty doanh nghiệp (Corporate), Tư vấn pháp lý, Kiểm toán, B2B SaaS | `font-work-sans` |
| **9** | **Mulish** | Minimalist Sans<br>*(Vernon Adams)* | Nét chữ thanh mảnh, trang nhã, không gây phân tâm, giúp người đọc tập trung 100% vào hình ảnh sản phẩm. | Phong cách tối giản Bắc Âu (Minimalist), Nội thất, Mỹ phẩm Organic, Đồ gia dụng | `font-mulish` |
| **10**| **Lora** | Contemporary Serif<br>*(Olga Karpushina)* | **Font Serif chân chữ tiếng Việt đẹp nhất:** Nét bút lông mềm mại, khác biệt hoàn toàn với các font Serif cổ điển hay bị gãy dấu. Quý phái, sang trọng. | Thẩm mỹ viện / Spa, Khách sạn & Resort, Mỹ phẩm cao cấp, Trang sức, Fine Dining | `font-lora` |
| *Plus* | **Playfair Display** | Luxury Serif<br>*(Claus Eggers)* | Phong cách tạp chí thời trang Vogue/Elle, độ tương phản thanh đậm cực cao, cực kỳ sang trọng cho các tiêu đề lớn. | Thời trang Haute Couture, Đồng hồ xa xỉ, Bất động sản nghỉ dưỡng triệu đô | `font-playfair` |

---

## III. 5 CÔNG THỨC PHỐI FONT (FONT PAIRING) KINH ĐIỂN CHO WEBSITE

```
1. Phong cách SaaS / Công nghệ Hiện đại (Hiện đại, Đẳng cấp, Rõ nét):
   - Tiêu đề (Heading): Montserrat (Bold 700 / ExtraBold 800)
   - Nội dung (Body): Be Vietnam Pro (Regular 400 / Medium 500)

2. Phong cách Fintech / AI / Tech Startup (Thời thượng, Trẻ trung, Tin cậy):
   - Tiêu đề (Heading): Plus Jakarta Sans (SemiBold 600 / Bold 700)
   - Nội dung (Body): Inter (Regular 400)

3. Phong cách Bất động sản / Doanh nghiệp Lớn (Vững chãi, Cao cấp):
   - Tiêu đề (Heading): Montserrat hoặc Archivo
   - Nội dung (Body): Manrope hoặc Work Sans

4. Phong cách Thẩm mỹ / Spa / Khách sạn / Mỹ phẩm Cao cấp (Sang trọng, Tinh tế):
   - Tiêu đề (Heading): Lora hoặc Playfair Display (Medium / SemiBold)
   - Nội dung (Body): Be Vietnam Pro hoặc Mulish

5. Phong cách Web3 / Cyber Security / Developer (Đột phá, Tương lai):
   - Tiêu đề (Heading): Space Grotesk (Bold 700)
   - Nội dung (Body): Inter (Regular 400)
```

---

## IV. CÁCH SỬ DỤNG TRONG CODE REACT / NEXT.JS

Toàn bộ các font trên đã được khai báo sẵn tại file `@/lib/fonts.ts`. Bạn chỉ cần sử dụng class Tailwind tương ứng:

```tsx
// Ví dụ Tiêu đề Montserrat + Nội dung Be Vietnam Pro
<div className="font-be-vietnam">
  <h1 className="font-montserrat font-black text-4xl">
    GIẢI PHÁP VẬN HÀNH TỰ ĐỘNG HÓA
  </h1>
  <p className="font-sans text-muted-foreground text-base mt-2">
    Hệ thống giúp tối ưu hóa chi phí và gia tăng tỷ lệ chuyển đổi cho doanh nghiệp của bạn.
  </p>
</div>
```
