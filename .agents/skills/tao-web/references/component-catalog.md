# Từ điển Component & Hiệu ứng Giao diện Đa Thư viện (`component-catalog.md`)

Tài liệu này tổng hợp các hiệu ứng đặc sắc nhất từ **9 thư viện chủ lực** trên `hieu-ung-web.vercel.app` (cùng các thư viện mở rộng đã kết nối trong `components.json`), phân loại theo **vị trí trên trang web** và kèm **mô tả tiếng Việt dễ hiểu** để trình bày trong Bảng Đề xuất cho người dùng.

---

## Tổng quan 9 Kho Thư viện Đã Kết nối Sẵn

| Thư viện | Namespace / Lệnh cài đặt | Thế mạnh đặc trưng |
| :--- | :--- | :--- |
| **1. Aceternity UI** | `shadcn add @aceternity/<name>` | Hiệu ứng 3D, Spotlight, Beams, Aurora, Bento Grid cao cấp |
| **2. shadcn/ui** | `shadcn add <name>` | Bộ khung chuẩn mực cho Form, Dialog, Table, Accordion, Tabs |
| **3. Spectrum UI** | `shadcn add @spectrumui/<name>` | Khối giao diện sáng tạo, AI Chat Card, Animated Card, Alert động |
| **4. Eldora UI** | `shadcn add @eldoraui/<name>` | Khung giả lập thiết bị (MacBook, iPhone 17 Pro, Safari), Bento, Video Dialog |
| **5. Motion Primitives** | `shadcn add @motion-primitives/<name>` | Vật lý hút nam châm (`magnetic`), biến hình (`morphing-dialog`), chữ động tinh tế |
| **6. Kokonut UI** | `shadcn add @kokonutui/<name>` | Lật trang sách 3D (`page-flip`), Nút trượt xác nhận (`slide-to-confirm`), AI Prompt |
| **7. LightsWind UI** | `lightswind add <name>` (Có MCP riêng) | 28+ hiệu ứng 3D (`3d-marquee`, `3d-carousel`, `3d-image-ring`), mặt kính & ánh sáng |
| **8. Animata** | Tải từ `animata.design` / GitHub `codse/animata` | Hơn 60+ micro-interactions, widget thẻ, typing text, hover nút tinh tế |
| **9. Lukacho UI** | Tải từ `ui.lukacho.com` | Biểu đồ động (`animated-chart`), nền lưới (`animated-grid-background`), bảng giá Neo-Brutalist |
| *(Mở rộng)* **Magic UI / React Bits / Cult UI / Prompt-Kit / Watermelon** | `@magicui/*`, `@react-bits/*`, `@cult-ui/*`, `@prompt-kit/*`, `@watermelon/*` | Đã kết nối sẵn trong `components.json` để gọi bất cứ lúc nào |

---

## 1. Hiệu ứng Nền (Backgrounds & Hero Backdrops)
*Dùng cho phần đầu trang (Hero Section) hoặc phần kêu gọi hành động cuối trang (Footer CTA). Mỗi khu vực chỉ chọn 1 hiệu ứng nền.*

| Tên Component & Kho | Vị trí khuyên dùng | Mô tả hiệu ứng hoạt động thế nào (Dành cho người dùng) | Phong cách phù hợp |
| :--- | :--- | :--- | :--- |
| `@aceternity/aurora-background` | Nền Hero đầu trang | Các dải ánh sáng cực quang mềm mại chuyển màu uyển chuyển phía sau tiêu đề, tạo cảm giác sang trọng và dịu mắt. | SaaS, AI, Khóa học, Doanh nghiệp hiện đại |
| `@aceternity/background-beams` | Nền Hero hoặc Nền Form đăng ký | Các tia sáng mảnh chạy dọc theo những đường mạch cong trên nền tối, giống như dòng dữ liệu công nghệ đang truyền tải. | AI, Phần mềm, Công nghệ, Tự động hóa (Nền Tối) |
| `@aceternity/spotlight` | Nền Hero đầu trang | Một luồng đèn sân khấu (Spotlight) chiếu chéo từ góc trên xuống tiêu đề chính khi trang vừa tải xong, làm bừng sáng nội dung. | Ra mắt sản phẩm mới, Sự kiện, SaaS cao cấp, Bất động sản |
| `lightswind: wave-background` | Nền Hero hoặc Section điểm nhấn | Các lớp sóng ánh sáng 3D phát sáng chuyển động nhịp nhàng mang đậm chất công nghệ tương lai. | Công nghệ, AI, Landing page hiện đại |
| `lukacho: animated-grid-background` | Nền Hero & Bảng giá | Lưới kỹ thuật mảnh mai có các tia sáng chạy dọc đường kẻ ô vuông tinh tế, không gây rối chữ. | Tài chính, Marketing, SaaS, Bảng giá |
| `@aceternity/sparkles` | Nền tiêu đề hoặc Nền khu vực Điểm nhấn | Hàng trăm hạt bụi sao nhỏ lấp lánh trôi nhẹ nhàng xung quanh chữ hoặc biểu tượng. | Làm đẹp, Mỹ phẩm, Sản phẩm cao cấp, AI Magic |

---

## 2. Hiệu ứng Nút Kêu gọi Hành động & Viền Thẻ (CTA Buttons & Card Borders)

| Tên Component & Kho | Vị trí khuyên dùng | Mô tả hiệu ứng hoạt động thế nào (Dành cho người dùng) | Phong cách phù hợp |
| :--- | :--- | :--- | :--- |
| `@motion-primitives/magnetic` | Nút bấm chính (Primary CTA) | Hiệu ứng vật lý nam châm: khi khách đưa chuột lại gần nút bấm, nút tự động bị "hút" nhẹ về phía đầu con trỏ chuột cực kỳ sống động. | Mọi trang web muốn nút CTA có cảm giác tương tác cao cấp |
| `@aceternity/moving-border` | Nút bấm chính hoặc Thẻ nổi bật | Một tia sáng neon chạy đuổi vòng quanh đường viền của nút bấm liên tục, thu hút sự chú ý ngay lập tức. | Nút "Đăng ký ngay", "Nhận tư vấn", "Mua khóa học" |
| `@kokonutui/slide-to-confirm` | Nút Chốt đơn / Xác nhận quan trọng | Nút trượt ngang giống thao tác mở khóa iPhone — khách kéo nhẹ thanh trượt sang phải để xác nhận đăng ký/nhận ưu đãi. | Chốt đơn khóa học, Nhận quà tặng độc quyền, Đặt lịch VIP |
| `@aceternity/card-spotlight` | Thẻ tính năng hoặc Bảng giá | Khi người dùng di chuột đến đâu trên thẻ, một vùng sáng mờ và đường viền phát sáng sẽ rọi theo đúng vị trí đầu chuột. | Bảng giá (Pricing Card), Thẻ dịch vụ cao cấp |
| `@aceternity/background-gradient` | Viền Khung Sản phẩm Chủ lực / Gói VIP | Bao bọc quanh thẻ một lớp viền hào quang đa sắc tỏa sáng nhẹ, giúp thẻ đó nổi bật hẳn so với các thẻ thường bên cạnh. | Gói "Khuyên dùng / VIP" trong bảng giá, Sản phẩm bán chạy nhất |

---

## 3. Thẻ 3D, Lật Trang & Khung Trưng bày Sản phẩm (3D Cards, Mockups & Showcases)

| Tên Component & Kho | Vị trí khuyên dùng | Mô tả hiệu ứng hoạt động thế nào (Dành cho người dùng) | Phong cách phù hợp |
| :--- | :--- | :--- | :--- |
| `@aceternity/3d-card` | Thẻ Sản phẩm / Khóa học / Hình ảnh Hero | Khi đưa chuột vào thẻ, toàn bộ thẻ nghiêng theo góc 3D thực tế; đồng thời ảnh, tiêu đề và nút bấm tách lớp nhô cao lên khỏi mặt thẻ. | Trưng bày khóa học, Ebook, Sản phẩm vật lý, Thẻ thành viên |
| `@kokonutui/page-flip` *(hoặc `lightswind: 3d-image-pageflip`)* | Thẻ Giới thiệu Sách / Khóa học / Hồ sơ | Hiệu ứng lật trang sách 3D: khi khách đưa chuột vào, bìa trước của thẻ mở lật sang một bên như cuốn sách thật để lộ nội dung chi tiết bên trong. | Bán sách, Ebook, Khóa học, Thiệp mời, Portfolio |
| `lightswind: 3d-marquee` *(hoặc `@aceternity/3d-marquee`)* | Khung trưng bày Bộ sưu tập / Giao diện mẫu | Hàng chục hình ảnh sản phẩm/giao diện xếp thành một mặt phẳng nghiêng trong không gian 3 chiều và tự động trôi ngược chiều nhau. | Trưng bày kho giao diện, Kết quả học viên, Bộ sưu tập dự án |
| `lightswind: 3d-carousel` / `3d-image-ring` | Vòng xoay Sản phẩm 3D | Các hình ảnh sản phẩm xếp thành một vòng tròn không gian 3D xoay quanh tâm, khách có thể kéo xoay để ngắm từng góc. | Trưng bày sản phẩm, Bộ sưu tập nổi bật, Thư viện ảnh |
| `@eldoraui/macbook-pro` / `iphone-17-pro` / `safari-browser` | Khung hiển thị Ảnh/Video sản phẩm | Đặt hình ảnh hoặc video demo của bạn nằm gọn bên trong khung máy tính MacBook Pro, iPhone 17 Pro hoặc trình duyệt Safari sang trọng. | Giới thiệu phần mềm, Web app, Nền tảng học online, Ứng dụng di động |
| `@aceternity/container-scroll-animation` | Khung Trưng bày Giao diện / Dashboard | Một màn hình máy tính bảng/laptop lớn đang nằm nghiêng 3D; khi khách cuộn chuột xuống, màn hình từ từ dựng thẳng đứng lên trước mắt người xem. | Giới thiệu giao diện phần mềm, Nền tảng học trực tuyến |

---

## 4. Lưới Tính năng & Khối Nội dung Sáng tạo (Bento Grids & Creative Blocks)

| Tên Component & Kho | Vị trí khuyên dùng | Mô tả hiệu ứng hoạt động thế nào (Dành cho người dùng) | Phong cách phù hợp |
| :--- | :--- | :--- | :--- |
| `@aceternity/bento-grid` *(hoặc `@eldoraui/bento-grid`, `animata: bento-grid`)* | Khu vực Tính năng / Lợi ích chính | Bố cục lưới các ô vuông & chữ nhật bất đối xứng (phong cách Apple). Khi di chuột vào từng ô, nội dung và hình minh họa chuyển động mượt mà. | Giới thiệu tính năng phần mềm, Lợi ích khóa học, Điểm mạnh doanh nghiệp |
| `@spectrumui/animated-card` / `ai-chat-card` | Khối minh họa Tính năng thông minh | Các thẻ giao diện mô phỏng cuộc hội thoại AI hoặc trạng thái hoạt động trực tiếp với chuyển động vi mô sắc nét. | Web AI, Chatbot, Dịch vụ tự động hóa |
| `@motion-primitives/morphing-dialog` | Xem chi tiết Tính năng / Sản phẩm | Khi bấm vào một thẻ nhỏ trên trang, chính chiếc thẻ đó tự động biến hình (morph) và nở rộng mượt mà thành cửa sổ chi tiết lớn ở giữa màn hình. | Chi tiết khóa học, Xem sâu tính năng, Case study |
| `lukacho: animated-chart` | Khối Số liệu Tăng trưởng / Cam kết | Biểu đồ đường/cột tự động vẽ và chuyển động mượt mà khi người dùng cuộn tới hoặc đưa chuột vào từng mốc số liệu. | Tài chính, Marketing Agency, Báo cáo hiệu quả, B2B |

---

## 5. Thanh Điều hướng, Hiệu ứng Chữ & Bằng chứng Xã hội (Navbar, Text & Social Proof)

| Tên Component & Kho | Vị trí khuyên dùng | Mô tả hiệu ứng hoạt động thế nào (Dành cho người dùng) | Phong cách phù hợp |
| :--- | :--- | :--- | :--- |
| `@aceternity/floating-dock` *(hoặc `@spectrumui`)* | Thanh Menu góc dưới màn hình | Thanh biểu tượng nổi ở cạnh dưới màn hình; khi đưa chuột lướt qua, các icon phóng to mềm mại giống hệt thanh Dock trên máy tính MacBook. | Portfolio cá nhân, Web ứng dụng AI, Trang sáng tạo |
| `@aceternity/floating-navbar` *(hoặc `lukacho`)* | Thanh Menu đầu trang | Thanh menu bo tròn lơ lửng; khi cuộn chuột xuống để đọc bài thì tự động ẩn đi cho thoáng, khi cuộn nhẹ lên thì lập tức trượt xuống xuất hiện lại. | Landing Page dài, Blog, Trang bán hàng |
| `@aceternity/flip-words` / `@motion-primitives/text-effect` | Tiêu đề chính (Headline) | Từ khóa quan trọng trong câu tiêu đề tự động lật đổi hoặc trượt biến hóa mượt mà theo hiệu ứng vật lý. | Mọi Landing Page muốn nhấn mạnh nhiều lợi ích trong 1 câu ngắn |
| `lightswind: aurora-text-effect` | Cụm từ Điểm nhấn trong Tiêu đề | Chữ phát sáng chuyển màu cực quang lung linh ngay bên trong nét chữ. | Điểm nhấn thương hiệu, Slogan công nghệ |
| `@aceternity/infinite-moving-cards` *(hoặc `@magicui/marquee`)* | Đánh giá Khách hàng / Logo Đối tác | Các thẻ nhận xét của khách hàng (hoặc logo đối tác) tự động chạy ngang nối đuôi nhau vô tận; tự dừng lại khi khách di chuột vào đọc. | Mọi trang web cần tăng uy tín (Review học viên, Feedback khách hàng) |
| `@aceternity/timeline` | Lộ trình học / Quy trình làm việc | Khi người dùng cuộn trang từ trên xuống, một đường tia sáng dọc sẽ tự động chảy dài xuống theo tốc độ cuộn để nối các mốc giai đoạn. | Lộ trình khóa học, Quy trình triển khai dịch vụ |
| `@aceternity/compare` | Khung So sánh Trước & Sau (Before / After) | Khung chứa 2 hình ảnh (Trước và Sau) với thanh trượt ở giữa; kéo thanh trượt đến đâu sẽ lộ ra sự khác biệt đến đó. | Thẩm mỹ/Làm đẹp, Nội thất, Chỉnh sửa ảnh, Tối ưu hóa |

---

## 6. Biểu mẫu & Tương tác Nền tảng (`shadcn/ui`)
*Luôn kết hợp các component từ `shadcn` cho phần nhập liệu và điều khiển để trang web vừa đẹp vừa chuẩn mực:*
* **Form & Input**: `input`, `textarea`, `select`, `checkbox`, `radio-group`, `button`, `form`.
* **FAQ & Tabs**: `accordion` (hỏi đáp trượt mở), `tabs` (chuyển tab bảng giá/nội dung), `dialog`, `sheet`.


---

## 7. 10 Kho Website Templates & Full-Page Section Blocks (Lắp ghép Nguyên Trang)

Khi cần dựng nhanh **bố cục nguyên trang (Full-Page Layout)** hoặc **các Section lớn (Hero, Pricing, Features, Testimonials, Dashboard, Footer)** trước khi điểm xuyết hiệu ứng 3D, hãy gọi trực tiếp từ 10 kho Template đã kết nối sẵn trong `components.json` dưới đây:

| STT | Kho Template / Block | Namespace (`shadcn add ...`) | Thế mạnh & Khi nào nên chọn |
| :--- | :--- | :--- | :--- |
| **1** | **Shadcn Studio** | `@shadcn-studio/<name>` | **999+ Blocks & Page Presets:** Có sẵn nguyên trang SaaS MVP, Startup, AI Landing Page và Admin Dashboard đồng bộ. |
| **2** | **SpaceUI / Shadcn Space** | `@spaceui/<name>` | **1.149+ Full Layouts:** Bố cục trang hoàn chỉnh có ngôn ngữ thiết kế xuyên suốt từ Header đến Footer. |
| **3** | **WeInc Blocks** | `@weinc/<name>` | **746 Blocks (100% Free MIT):** Cực mạnh cho Landing Page Doanh nghiệp (SMB), Dịch vụ tư vấn, Khóa học, B2B. |
| **4** | **Shadcn UI Blocks** | `@shadcnui-blocks/<name>` | **542+ Marketing Sections:** Hàng chục biến thể Hero, Bảng giá (gạt Tháng/Năm), Testimonial, FAQ để ghép trang kiểu Lego. |
| **5** | **Watermelon UI** | `@watermelon/<name>` | **1.178 Items (Free):** Mẫu trang giới thiệu App, Tài chính (Fintech), Đặt lịch hẹn, Y tế, Giáo dục với các Widget động. |
| **6** | **Hirael Templates** | `@hirael/<name>` | **308 Page Templates:** Mẫu trang web tốc độ cao, hỗ trợ sẵn cả Light Mode & Dark Mode chuẩn chỉnh. |
| **7** | **AICanvas** | `@aicanvas/<name>` | **205+ Templates & Design Systems:** Mỗi trang mẫu kèm sẵn bộ quy chuẩn thiết kế giúp AI tự sinh thêm các trang con đồng bộ 100%. |
| **8** | **ReUI & Minidev** | `@reui/<name>`, `@minidev/<name>` | **630+ App & Portal Blocks:** Chuyên trị trang Đăng nhập, Quản lý tài khoản học viên, Thanh toán (Billing), Khung Chat AI. |
| **9** | **Dashboard Blocks & Tailwind Admin** | `@dashboardblocks/<name>`, `@tailwind-admin/<name>` | **453+ Dashboard Templates:** Nguyên trang Quản trị nội bộ, Báo cáo KPI, Biểu đồ doanh thu, Phễu khách hàng. |
| **10** | **Cnippet Blocks & Facade UI** | `@cnippet-blocks/<name>`, `@facade/<name>` | **246+ CRO Marketing Sections:** Các khối Hero (`@cnippet-blocks/hero-1`..`hero-4`), Pricing, FAQ tối ưu tỷ lệ chuyển đổi bán hàng. |


---

## 8. Hệ thống Sơ đồ Quy trình, Flowchart, Swimlane & Node-Graph (`diagram-design` + 10 Kho Sơ đồ)

> **QUY TẮC VÀNG CHO PHẦN QUY TRÌNH / INFOGRAPHIC**:
> Khi trang web có phần **Quy trình vận hành, Các bước triển khai, Luồng dữ liệu đa vai trò (như Quản trị viên $\rightarrow$ Kỹ thuật $\rightarrow$ Marketer $\rightarrow$ Khách hàng $\rightarrow$ Hệ thống), hoặc Kiến trúc hệ thống**, **TUYỆT ĐỐI KHÔNG** chỉ xếp các hộp Card rời rạc thành lưới 3x2 đơn điệu!
> Hãy chủ động đề xuất các **Sơ đồ Quy trình Trực quan Có Đường Dẫn Luồng (Connected Flow Diagrams)** từ 11 nguồn đã cài đặt dưới đây:

| STT | Công cụ / Kho Sơ đồ | Lệnh / Cách gọi | Điểm mạnh & Hiệu ứng hoạt động thế nào (Dành cho người dùng) |
| :--- | :--- | :--- | :--- |
| **0** | **Diagram Design Skill (`cathrynlavery/diagram-design`)** | Kích hoạt skill `diagram-design` (`~/.gemini/config/skills/diagram-design`) | **45 loại sơ đồ chuẩn Editorial (64.5k⭐ GitHub):** Vẽ sơ đồ SVG/HTML sắc nét không bóng mờ rườm rà, tự lấy đúng màu thương hiệu của web: *Swimlane (Phân làn theo vai trò Quản trị/Kỹ thuật/Khách hàng)*, *Process (Quy trình đa tác nhân)*, *Data Flow*, *Architecture*, *Sequence*, *Loop/Flywheel*, *Sankey*, *Service Blueprint*, *Exploded 3D Axonometric* (tách lớp 3D). Có hỗ trợ chế độ chuyển động (`reveal`, `step`, `loop`). |
| **1** | **React Flow UI (`@xyflow`)** | `shadcn add @xyflow/<name>` + `@xyflow/react` | **Sơ đồ Node nối dây tương tác số 1 thế giới:** Các bước quy trình là các Node có thể kéo thả, phóng to/thu nhỏ, nối với nhau bằng các đường cáp có hạt dữ liệu phát sáng chạy dọc theo nhánh rẽ (`AnimatedSVGEdge`, `BaseNode`, `DataEdge`). |
| **2** | **Magic UI / Aceternity Animated Beam** | `shadcn add @magicui/animated-beam` hoặc `@aceternity/animated-beam-path-illustration` | **Tia sáng dẫn truyền giữa các bước:** Tự động vẽ đường mạch cong nối giữa các ô bước (01 $\rightarrow$ 02 $\rightarrow$ 03...) hoặc từ nhiều nguồn gom về 1 trung tâm, với các vệt sáng neon chạy liên tục theo chiều mũi tên. |
| **3** | **Creance Workflows & Handoffs (`@creance`)** | `shadcn add @creance/<name>` | **Chuyên trị Quy trình Bàn giao & Phê duyệt (112 mục):** Hiển thị rõ luồng chuyển giao công việc giữa các vai trò (Handoffs), trạng thái *"Chờ duyệt $\rightarrow$ Đã duyệt"*, và thanh thời gian thực thi (Run Timelines). |
| **4** | **Approvals-UI (`@approvals-ui`)** | `shadcn add @approvals-ui/<name>` | **Sơ đồ Cổng Kiểm duyệt & Phân quyền trên React Flow:** Vẽ trực quan các cổng điều kiện (Gates), hạn mức tiền thưởng/hoa hồng, và bước người thật bấm duyệt (Human-in-the-loop). |
| **5** | **PanelUI Flow Diagrams & Lane Board (`@panelui`)** | `shadcn add @panelui/<name>` | **Sơ đồ Luồng & Bảng Phân Làn (Swimlane Board):** Chia quy trình thành từng làn ngang/dọc theo bộ phận phụ trách kèm mũi tên chỉ hướng rõ ràng. |
| **6** | **Ilinxa Flow Canvas & Gantt (`@ilinxa`)** | `shadcn add @ilinxa/<name>` | **187 mục Sơ đồ Tổ hợp:** Có sẵn *Flow Canvas* (bảng vẽ luồng quy trình), *Gantt Chart* (sơ đồ tiến độ theo thời gian) và *Kanban*. |
| **7** | **Chartory SVG Sankey & Gantt (`@chartory`)** | `shadcn add @chartory/<name>` | **100 loại Sơ đồ Dòng chảy SVG thuần:** Nổi bật với **Sơ đồ Sankey** (minh họa dòng tiền, dòng khách hàng phân bổ từ nguồn quảng cáo $\rightarrow$ đăng ký $\rightarrow$ chốt đơn $\rightarrow$ chia hoa hồng) cực kỳ trực quan. |
| **8** | **Francozeta Stepper (`@stepper`)** | `shadcn add @stepper/<name>` | **Thanh Quy trình Từng Bước Tương tác:** Người xem bấm vào Bước 1, Bước 2, Bước 3... để xem hướng dẫn chi tiết từng bước kèm thanh nối tiến độ. |
| **9** | **Agent UI Kit Timelines (`@agent-ui-kit`)** | `shadcn add @agent-ui-kit/<name>` | **Sơ đồ Luồng Tự động hóa & Trạng thái:** Hiển thị từng bước hệ thống tự động chạy ngầm (Cookie $\rightarrow$ Khớp đơn $\rightarrow$ Đẩy hàng đợi $\rightarrow$ Duyệt chi trả) theo thời gian thực. |
| **10** | **EvilCharts & PlotCN (`@evilcharts`, `@plotcn`)** | `shadcn add @evilcharts/<name>`, `@plotcn/<name>` | **350+ Biểu đồ D3.js & Recharts:** Kết hợp vào sơ đồ quy trình để hiển thị con số thống kê, tỷ lệ chuyển đổi ở đầu ra của quy trình. |


---

## 9. Hệ thống Icon Đơn Sắc & Vector SVG Kết Nối MCP (5 Nguồn MCP Chủ Lực)

> **QUY TẮC CHỌN ICON ĐƠN SẮC TRONG THIẾT KẾ WEB HIỆN ĐẠI**:
> - Icon đơn sắc (Monochrome: Outline hoặc Solid 1 màu, đổi màu tự động theo `currentColor` hoặc Tailwind `text-*`) là tiêu chuẩn vàng của thiết kế UI/UX tối giản, hiện đại (Apple, Vercel, Linear, Stripe, Airbnb).
> - Tránh dùng icon nhiều màu sặc sỡ kiểu clip-art gây rối mắt và phá vỡ cấu trúc màu sắc nhận diện thương hiệu.
> - Khi trợ lý AI cần tìm, đề xuất hoặc chèn icon vào code, có thể dùng trực tiếp 5 công cụ MCP dưới đây để tra cứu và chèn mã SVG/JSX chuẩn xác:

| STT | Tên Thư viện & MCP Server | Công cụ MCP / Lệnh CLI | Điểm mạnh & Cách hoạt động cho người dùng & AI |
| :--- | :--- | :--- | :--- |
| **1** | **Better Icons (`better-icons`)** | `npx -y better-icons` (MCP Server & CLI) | **Hơn 200.000+ Icon từ 150+ bộ sưu tập:** Cho phép tìm kiếm icon bằng ngôn ngữ tự nhiên (`better-icons search <query>`), tự động đồng bộ mã SVG/TSX vào trực tiếp file code của dự án mà không cần dán thô vào chat. Tự học và ưu tiên các bộ icon người dùng hay dùng. |
| **2** | **Aria Icons (`aria-icons`)** | `npx -y aria-icons mcp` (hoặc Remote: `https://icons.leularia.com/api/mcp`) | **Cố vấn & Quản lý Icon Toàn diện:** Có tính năng `doctor` kiểm tra xung đột thư viện icon, `suggest` đề xuất icon phù hợp nhất với phong cách hiện tại của website, và `add` để tải trực tiếp file icon vào source code (tiết kiệm dung lượng gói bundle). Hỗ trợ cả Antigravity, Cursor, Claude. |
| **3** | **Universal SVG Icons (`mcp-universal-icons`)** | `npx -y mcp-universal-icons` | **60.000+ Icon với tính năng Bơm Tailwind CSS:** Tìm kiếm và trích xuất SVG từ Material Symbols, Lucide, Heroicons, Phosphor, Tabler. Hỗ trợ truyền thẳng class Tailwind vào (`classes: "w-5 h-5 text-sky-400"`) và xuất dưới dạng SVG, JSX hoặc Data-URI. |
| **4** | **Iconify MCP Server (`iconify-mcp`)** | `npx -y iconify-mcp-server` | **Kho Icon Vector Mở lớn nhất thế giới:** Hỗ trợ đầy đủ bộ công cụ MCP chuẩn: duyệt toàn bộ danh mục (`get_all_icon_sets`), kiểm tra chi tiết bộ icon (`get_icon_set`), tìm kiếm icon theo ngữ nghĩa (`search_icons`), và lấy dữ liệu SVG (`get_icon_data`). |
| **5** | **Lucide Icons MCP (`lucide-icons-mcp`)** | `npx -y lucide-icons-mcp` | **Chuẩn mực của Shadcn UI & Thiết kế Tối giản:** Hơn 1.500+ icon vector đơn sắc góc bo tinh tế, chuẩn 24x24px, 2px stroke. MCP Server giúp AI tra cứu chính xác tên icon của Lucide theo ngữ cảnh (arrows, dashboard, security, shopping...) mà không bao giờ bị sai tên component. |

*(Sẵn có trong dự án Next.js Starter: `lucide-react`, `@tabler/icons-react`, `@heroicons/react`, `@phosphor-icons/react`, `simple-icons`)*


---

## 11. Bộ 10 Mẫu Landing Page Cao Cấp Đã Đóng Gói Sẵn Trong Repo (`src/components/templates/`)

Repo đã đóng gói sẵn 10 mẫu Landing Page hoàn chỉnh, tuân thủ 100% quy tắc viết hoa tiếng Việt và kỷ luật màu sắc 60-30-10:

| Mã Mẫu | Tên Mẫu | Lĩnh vực phù hợp | Component Tương ứng | Phong cách & Điểm nhấn thị giác |
| :--- | :--- | :--- | :--- | :--- |
| `01-open-pro` | **Open PRO** | Open Source, Công cụ lập trình viên, Developer SaaS | `OpenProTemplate` | Nền Dark Neutral-950, Ánh sáng tím/indigo `indigo-600`, Video demo trigger |
| `02-simple-light` | **Simple Light** | Clean Light Minimal, Quản lý tài liệu, Notion-like | `SimpleLightTemplate` | Nền trắng sáng tinh tế, Điểm nhấn xanh dương `blue-600`, Tab tính năng mượt mà |
| `03-stellar` | **Stellar** | AI, Web3, Điện toán đám mây phi tập trung | `StellarTemplate` | Nền hạt sao vũ trụ, Viền Neon Cyan `cyan-400` & Tím `purple-500`, Metric cards |
| `04-neon` | **Neon Agent** | Cyberpunk, AI Tác tử tự động, Hacker-Chic | `NeonTemplate` | Nền Obsidian `#050505`, Viền Neon xanh ngọc `emerald-400`, Luồng lệnh Terminal |
| `05-linear` | **Linear Style** | Quản lý dự án phần mềm, Agile, Engineering | `LinearTemplate` | Viền mảnh 1px hairline, Nền `#08090a`, Phím tắt `Command + K`, Issue preview |
| `06-raycast` | **Raycast Style** | Ứng dụng Desktop, Launcher tiện ích, AI Tools | `RaycastTemplate` | Thanh Command Palette tìm kiếm lệnh nhanh, Ánh sáng rọi đỏ cam `rose-500` |
| `07-resend` | **Resend Style** | Nền tảng API, Email giao dịch, Hạ tầng Dev | `ResendTemplate` | Tối giản đen trắng tuyệt đối, Tab code đa ngôn ngữ (Node.js/Python/cURL) |
| `08-dub` | **Dub.co Style** | Rút gọn link, Phân tích chuyển đổi Marketing | `DubTemplate` | Khung rút gọn link tương tác trực tiếp ở Hero, Thẻ số liệu chuyển đổi real-time |
| `09-supabase` | **Supabase Style** | Cơ sở dữ liệu đám mây, BaaS, Postgres | `SupabaseTemplate` | Nền đen sâu, Xanh ngọc lục bảo `#3ecf8e`, Trình duyệt bảng Postgres & SQL editor |
| `10-cal` | **Cal.com Style** | Đặt lịch hẹn trực tuyến, Tư vấn 1:1, Coaching | `CalTemplate` | Widget chọn khung giờ và đặt lịch hẹn không ma sát ngay tại màn hình chính |

Khi tư vấn ở **Bước 2** của `/skill-web`, bạn có thể chủ động đề xuất 1 trong 10 mẫu này cho người dùng duyệt. Khi người dùng đồng ý, chỉ cần gọi component tương ứng từ `@/components/templates`.

