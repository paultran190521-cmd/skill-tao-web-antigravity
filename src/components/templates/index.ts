export * from "./OpenProTemplate";
export * from "./SimpleLightTemplate";
export * from "./StellarTemplate";
export * from "./NeonTemplate";
export * from "./LinearTemplate";
export * from "./RaycastTemplate";
export * from "./ResendTemplate";
export * from "./DubTemplate";
export * from "./SupabaseTemplate";
export * from "./CalTemplate";

export interface TemplateMetadata {
  id: string;
  name: string;
  category: string;
  description: string;
  style: "dark" | "light" | "cyberpunk" | "minimal" | "modern";
  accentColor: string;
  componentName: string;
}

export const TEMPLATES_REGISTRY: Record<string, TemplateMetadata> = {
  "open-pro": {
    id: "01-open-pro",
    name: "Open PRO",
    category: "Open Source & Dev Tools",
    description: "Phong cách Cruip Open PRO dành cho công cụ lập trình viên, mã nguồn mở, Dark Mode với ánh sáng gradient tím/indigo dịu mắt.",
    style: "dark",
    accentColor: "indigo-600",
    componentName: "OpenProTemplate",
  },
  "simple-light": {
    id: "02-simple-light",
    name: "Simple Light",
    category: "Clean Light Minimal",
    description: "Phong cách Cruip Simple Light nền trắng sáng tinh khôi, viền xám nhẹ, các tab tính năng mượt mà cho tài liệu và SaaS.",
    style: "light",
    accentColor: "blue-600",
    componentName: "SimpleLightTemplate",
  },
  "stellar": {
    id: "03-stellar",
    name: "Stellar",
    category: "AI / Web3 / Cloud",
    description: "Phong cách vũ trụ với nền đen hạt sao, dải hào quang tím và cyan neon, dành cho hạ tầng AI đám mây và mạng lưới phân tán.",
    style: "dark",
    accentColor: "purple-500",
    componentName: "StellarTemplate",
  },
  "neon": {
    id: "04-neon",
    name: "Neon Agent",
    category: "Cyberpunk / AI Tech",
    description: "Phong cách Cyberpunk Hacker-Chic: Nền đen obsidian, lưới kỹ thuật, viền phát sáng xanh ngọc neon, luồng lệnh terminal sống động.",
    style: "cyberpunk",
    accentColor: "emerald-400",
    componentName: "NeonTemplate",
  },
  "linear": {
    id: "05-linear",
    name: "Linear Style",
    category: "Quản lý dự án phần mềm",
    description: "Tiêu chuẩn vàng thiết kế Dark Mode Thung lũng Silicon: Viền mảnh 1px hairline, phím tắt ⌘K, danh sách issue tương tác sắc nét.",
    style: "minimal",
    accentColor: "indigo-400",
    componentName: "LinearTemplate",
  },
  "raycast": {
    id: "06-raycast",
    name: "Raycast Style",
    category: "Mac Launcher & AI Tools",
    description: "Trung tâm điều khiển công việc phím bấm: Mockup thanh tìm kiếm lệnh Command Palette, ánh sáng rọi đỏ cam ấm áp.",
    style: "dark",
    accentColor: "rose-500",
    componentName: "RaycastTemplate",
  },
  "resend": {
    id: "07-resend",
    name: "Resend Style",
    category: "Nền tảng Email cho Dev",
    description: "Thiết kế tối giản đen trắng cực phẩm: Bộ chuyển tab code đa ngôn ngữ (Node.js, Python, cURL) và độ tin cậy giao dịch.",
    style: "minimal",
    accentColor: "white",
    componentName: "ResendTemplate",
  },
  "dub": {
    id: "08-dub",
    name: "Dub.co Style",
    category: "Rút gọn link & Phân tích",
    description: "Công cụ rút gọn link trực quan ngay tại Hero, thẻ số liệu tăng trưởng thời gian thực và biểu đồ chuyển đổi.",
    style: "modern",
    accentColor: "blue-500",
    componentName: "DubTemplate",
  },
  "supabase": {
    id: "09-supabase",
    name: "Supabase Style",
    category: "Cơ sở dữ liệu đám mây",
    description: "Tông màu xanh ngọc lục bảo đặc trưng, trình duyệt bảng dữ liệu Postgres và bảng soạn thảo truy vấn SQL tương tác.",
    style: "dark",
    accentColor: "emerald-400",
    componentName: "SupabaseTemplate",
  },
  "cal": {
    id: "10-cal",
    name: "Cal.com Style",
    category: "Nền tảng Đặt lịch hẹn",
    description: "Giao diện chọn khung giờ và đặt lịch tư vấn 1:1 không ma sát ngay tại màn hình chính, tối ưu chuyển đổi tối đa.",
    style: "minimal",
    accentColor: "white",
    componentName: "CalTemplate",
  },
};
