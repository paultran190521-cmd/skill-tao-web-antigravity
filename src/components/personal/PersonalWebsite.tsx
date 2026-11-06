"use client";

import React, { useState } from "react";
import { 
  Copy, 
  Check, 
  ArrowRight, 
  Terminal, 
  HeartHandshake, 
  Compass, 
  Cpu, 
  Workflow, 
  Sparkles, 
  BookOpen, 
  Building2, 
  Users, 
  Coffee, 
  Calendar, 
  ExternalLink,
  ChevronRight
} from "lucide-react";

export function PersonalWebsite() {
  const [activeTab, setActiveTab] = useState<"system" | "empathy" | "mindful">("system");
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const consoleSnippets = {
    system: `// 1. BÁN CẦU HỆ THỐNG: KIẾN TRÚC SƯ TỰ ĐỘNG HÓA & AI
export const systemArchitect = {
  role: "Kỹ sư hệ thống & Master Agent Developer",
  coreStack: ["React 19", "Next.js 15", "Tailwind v4", "MCP Protocol"],
  operationalLoop: {
    dataIngestion: "Cào dữ liệu & chuẩn hóa tự động",
    aiAgentEngine: "Lập luận đa tác tử xử lý báo cáo chuyên sâu",
    metricDashboard: "Đo lường thời gian thực giải phóng sức lao động"
  },
  status: "Đang vận hành luồng chuyển đổi số tự động"
};`,
    empathy: `/* 2. BÁN CẦU TÂM THỨC: THẤU CẢM VÀ KHOA HỌC NÃO BỘ */
{
  "triet_ly_tiep_can": "Khoa học não bộ kết hợp lý thuyết Dòng chảy (Flow)",
  "nguyen_tac_tham_van": "Lắng nghe sâu không phán xét, tháo gỡ điểm mù",
  "bo_cong_cu_thuc_hanh": [
    "Gọi tên chính xác các trạng thái cảm xúc hỗn độn",
    "Tái định hình nhận thức qua dữ liệu hành vi thực tế",
    "Đóng gói bài học kỹ năng sống thành bài tập tự phản tỉnh"
  ],
  "muc_tieu": "Nâng đỡ tinh thần bằng giải pháp khoa học thực chứng"
}`,
    mindful: `# 3. ĐIỂM HỢP NHẤT: VẬN HÀNH TỈNH THỨC (MINDFUL-OPS)
dinh_vi: "Cầu nối giữa thế giới nội tâm và sức mạnh công nghệ"
phuong_trinh_can_bang:
  ve_hieu_suat: "Kỷ luật tự thân + Tự động hóa tác vụ lặp lại"
  ve_tam_thuc: "Bình an nội tâm + Kết nối sâu với chính mình"
  ket_qua_dau_ra:
    - "Loại bỏ hoàn toàn sự kiệt sức do tác vụ thừa thãi"
    - "Tạo không gian tĩnh lặng cho công việc sáng tạo sâu"
    - "Xây dựng hệ sinh thái công nghệ nhân văn vì con người"`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(consoleSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans relative antialiased">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-neutral-800/30 via-neutral-900/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* 1. Header Điều Hướng */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-white/10 bg-neutral-900 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white leading-none">Mindful-Ops</span>
              <span className="text-[10px] text-neutral-500 font-mono mt-0.5">Song não • Công nghệ vị nhân sinh</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-400">
            <a href="#song-nao" className="hover:text-white transition-colors">Song não</a>
            <a href="#triet-ly" className="hover:text-white transition-colors">Triết lý</a>
            <a href="#giai-phap" className="hover:text-white transition-colors">Giải pháp</a>
            <a href="#du-an" className="hover:text-white transition-colors">Dự án</a>
          </nav>

          <a 
            href="#ket-noi"
            className="px-3.5 py-1.5 rounded-md bg-white text-black hover:bg-neutral-200 text-xs font-semibold transition-colors"
          >
            Đặt lịch 1:1
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-neutral-950 text-xs text-neutral-300 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Kỹ sư hệ thống & Nhà tham vấn tâm lý
          </div>

          {/* Main Title - ALL CAPS 7 words */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight max-w-3xl">
            KIẾN TẠO CÔNG NGHỆ VỊ NHÂN SINH
          </h1>

          {/* Subheading - Sentence case */}
          <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
            Cầu nối vững chắc giữa thế giới nội tâm con người và sức mạnh tính toán vô hạn của hệ thống tự động hóa.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a 
              href="#ket-noi"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-black text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-lg"
            >
              Đặt lịch đàm đạo 1:1
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#song-nao"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/10 bg-neutral-950 hover:bg-neutral-900 text-xs sm:text-sm font-medium text-neutral-300 transition-colors"
            >
              Khám phá tư duy song não
            </a>
          </div>

          {/* 3. Phần Trưng Bày Tương Tác Song Não (Dual-Brain Console) */}
          <div id="song-nao" className="mt-14 w-full max-w-3xl rounded-xl border border-white/10 bg-neutral-950 p-4 sm:p-6 text-left shadow-2xl relative">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-900 text-xs">
              <div className="flex items-center gap-1 sm:gap-2">
                <button 
                  onClick={() => setActiveTab("system")}
                  className={`px-3 py-1.5 rounded-md text-xs transition-colors flex items-center gap-1.5 ${
                    activeTab === "system" 
                      ? "bg-neutral-800 text-white font-medium border border-white/10" 
                      : "text-neutral-500 hover:text-white"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  Kỹ sư hệ thống
                </button>
                <button 
                  onClick={() => setActiveTab("empathy")}
                  className={`px-3 py-1.5 rounded-md text-xs transition-colors flex items-center gap-1.5 ${
                    activeTab === "empathy" 
                      ? "bg-neutral-800 text-white font-medium border border-white/10" 
                      : "text-neutral-500 hover:text-white"
                  }`}
                >
                  <HeartHandshake className="w-3.5 h-3.5" />
                  Tham vấn tâm thức
                </button>
                <button 
                  onClick={() => setActiveTab("mindful")}
                  className={`px-3 py-1.5 rounded-md text-xs transition-colors flex items-center gap-1.5 ${
                    activeTab === "mindful" 
                      ? "bg-neutral-800 text-white font-medium border border-white/10" 
                      : "text-neutral-500 hover:text-white"
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  Vận hành tỉnh thức
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
                  {activeTab === "system" ? "typescript" : activeTab === "empathy" ? "json" : "yaml"}
                </span>
                <button 
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors flex items-center gap-1.5"
                  title="Sao chép nội dung"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400 font-medium">Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Sao chép</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <pre className="mt-4 font-mono text-xs sm:text-sm text-neutral-300 overflow-x-auto leading-relaxed p-2">
              <code>{consoleSnippets[activeTab]}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* 4. Lưới Bento Triết Lý "Mindful-Ops" */}
      <section id="triet-ly" className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Triết lý cốt lõi</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 tracking-tight">
              KỶ LUẬT THỰC THI VÀ TĨNH LẶNG NỘI TÂM
            </h2>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
              Tối ưu hóa không phải là cuộc đua kiệt sức. Khi hệ thống được xây dựng trên khoa học não bộ, nó giải phóng con người để quay về với chính mình.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="p-6 rounded-xl border border-white/10 bg-neutral-950/60 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg border border-white/10 bg-neutral-900 flex items-center justify-center mb-4 text-white">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Hệ thống hóa cái vô hình</h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Bắt mạch cảm xúc, thói quen và nỗi đau tâm lý, đóng gói thành quy trình và công cụ web đo lường được.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-500">
                Playbook • Đo lường được
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-xl border border-white/10 bg-neutral-950/60 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg border border-white/10 bg-neutral-900 flex items-center justify-center mb-4 text-white">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Tinh thần kiến tạo kiên bỉ</h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Không đợi sẵn công cụ. Tự ráp dàn PC, mày mò giao thức MCP, kỹ thuật cào dữ liệu và thiết lập Master Agent.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-500">
                Builder mindset • Tự học
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-xl border border-white/10 bg-neutral-950/60 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg border border-white/10 bg-neutral-900 flex items-center justify-center mb-4 text-white">
                  <Coffee className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Kỷ luật và tỉ mỉ sắc bén</h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Thể hiện từ chiết xuất chuẩn một ly espresso 24g basket, soạn từng lời sẻ chia, đến bộ lọc tự kiểm tra cho AI.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-500">
                Chi tiết vi mô • Chuẩn xác
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-xl border border-white/10 bg-neutral-950/60 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg border border-white/10 bg-neutral-900 flex items-center justify-center mb-4 text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Cân bằng hiệu suất và tâm thức</h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Công nghệ vị nhân sinh: Tự động hóa giải phóng thời gian để con người kết nối lại với chính mình và chữa lành.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-500">
                Bình an • Chữa lành
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3 Bình Diện Giải Quyết Vấn Đề (Problem Solving Matrix) */}
      <section id="giai-phap" className="py-20 px-4 border-t border-neutral-900 bg-neutral-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Giá trị thực tiễn</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 tracking-tight">
              GIẢI PHÁP TRÊN 3 BÌNH DIỆN
            </h2>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
              Tác động cụ thể mang lại cho thân chủ cá nhân, tổ chức vận hành và cộng đồng học tập.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bình diện 1: Cá nhân */}
            <div className="p-8 rounded-xl border border-white/10 bg-black flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors pointer-events-none" />
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-500 font-mono">Bình diện 01</span>
                    <h3 className="text-base font-bold text-white">Thân chủ cá nhân 1:1</h3>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-neutral-400 leading-relaxed">
                  <div className="p-3.5 rounded-lg border border-white/5 bg-neutral-950">
                    <span className="font-semibold text-white block mb-1">Tháo gỡ điểm mù tâm lý</span>
                    Giúp gọi tên những cảm xúc hỗn độn, nhìn nhận lại mối quan hệ và cung cấp công cụ tự phản tỉnh.
                  </div>
                  <div className="p-3.5 rounded-lg border border-white/5 bg-neutral-950">
                    <span className="font-semibold text-white block mb-1">Cơ sở khoa học rõ ràng</span>
                    Dựa trên khoa học não bộ và lý thuyết Dòng chảy (Flow), mang lại sự nâng đỡ thực chất thay vì lời khuyên sáo rỗng.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-900">
                <a href="#ket-noi" className="text-xs text-white inline-flex items-center gap-1.5 hover:underline font-medium">
                  Đặt lịch tham vấn cá nhân
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Bình diện 2: Tổ chức */}
            <div className="p-8 rounded-xl border border-white/10 bg-black flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors pointer-events-none" />
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-500 font-mono">Bình diện 02</span>
                    <h3 className="text-base font-bold text-white">Doanh nghiệp & tổ chức</h3>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-neutral-400 leading-relaxed">
                  <div className="p-3.5 rounded-lg border border-white/5 bg-neutral-950">
                    <span className="font-semibold text-white block mb-1">Đồng hành cùng đối tác lớn</span>
                    Hỗ trợ chuyển đổi số và quản trị hiệu suất cho SUNNYCARE, METTASOUL, ROA.
                  </div>
                  <div className="p-3.5 rounded-lg border border-white/5 bg-neutral-950">
                    <span className="font-semibold text-white block mb-1">Xóa bỏ nút thắt vận hành</span>
                    Xây dựng AI Agent và Dashboard tự động hóa, giải phóng chuyên gia khỏi giấy tờ để tập trung chuyên môn sâu.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-900">
                <a href="#ket-noi" className="text-xs text-white inline-flex items-center gap-1.5 hover:underline font-medium">
                  Tư vấn tự động hóa vận hành
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Bình diện 3: Cộng đồng */}
            <div className="p-8 rounded-xl border border-white/10 bg-black flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors pointer-events-none" />
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-500 font-mono">Bình diện 03</span>
                    <h3 className="text-base font-bold text-white">Cộng đồng học tập</h3>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-neutral-400 leading-relaxed">
                  <div className="p-3.5 rounded-lg border border-white/5 bg-neutral-950">
                    <span className="font-semibold text-white block mb-1">Kênh tri thức thực chứng</span>
                    Phát triển nội dung trên kênh Thay Đổi Tâm Thức và Kỷ Luật Tự Thân.
                  </div>
                  <div className="p-3.5 rounded-lg border border-white/5 bg-neutral-950">
                    <span className="font-semibold text-white block mb-1">Dịch thuật tri thức hàn lâm</span>
                    Nhào nặn lý thuyết tâm lý học và khoa học não bộ phức tạp thành video, bài viết trực quan dễ áp dụng mỗi ngày.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-900">
                <a href="#du-an" className="text-xs text-white inline-flex items-center gap-1.5 hover:underline font-medium">
                  Xem các bài học cộng đồng
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dự Án & Playbook Tiêu Biểu */}
      <section id="du-an" className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Hệ sinh thái kiến tạo</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 tracking-tight">
                CÔNG CỤ VÀ DỰ ÁN NỔI BẬT
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-mono">
              Next.js 15 • AI Agents • MCP Protocols
            </p>
          </div>

          <div className="space-y-3">
            {/* Project 1 */}
            <div className="p-5 rounded-lg border border-white/10 bg-neutral-950 hover:bg-neutral-900/60 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Workflow className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Hệ thống Master AI Agent & Tự động hóa lịch dạy</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Tự động đồng bộ và tổng hợp lịch giảng dạy, loại bỏ 100% khâu nhập liệu thủ công cho tổ chức giáo dục.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 shrink-0">
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5">SUNNYCARE</span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5">Node / AI</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-5 rounded-lg border border-white/10 bg-neutral-950 hover:bg-neutral-900/60 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Dashboard xử lý kết quả trắc nghiệm tâm lý</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Bắt mạch dữ liệu phản hồi, tạo báo cáo phân tích tâm thức tự động với giao diện trực quan cho chuyên gia.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 shrink-0">
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5">METTASOUL</span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5">React / Analytics</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-5 rounded-lg border border-white/10 bg-neutral-950 hover:bg-neutral-900/60 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Chuỗi nội dung "Thay Đổi Tâm Thức" & "Kỷ Luật Tự Thân"</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Hơn 100+ bài phân tích chuyên sâu dịch thuật tâm lý học hàn lâm thành cẩm nang hành động thực tiễn.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 shrink-0">
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5">Cộng đồng</span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5">Mindful-Ops</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Chân Trang & Khối Đặt Lịch Hẹn 1:1 (Cal.com Style) */}
      <section id="ket-noi" className="py-24 px-4 border-t border-neutral-900 bg-neutral-950 text-center relative">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-xl border border-white/10 bg-neutral-900 mx-auto flex items-center justify-center text-white mb-6">
            <Calendar className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            KẾT NỐI VÀ ĐÀM ĐẠO TRỰC TIẾP
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Dành 30 phút trò chuyện về chuyển đổi số vận hành, xây dựng AI Agent, hoặc đồng hành tháo gỡ điểm mù tâm lý.
          </p>

          <div className="mt-10 p-6 rounded-xl border border-white/10 bg-black text-left max-w-xl mx-auto shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-900">
              <div>
                <span className="text-xs font-bold text-white block">Phiên đàm đạo trực tuyến 1:1</span>
                <span className="text-[11px] text-neutral-500">Thời lượng 30 phút • Google Meet</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                Đang mở lịch
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 text-xs">
              <div className="p-2.5 rounded border border-white/10 bg-neutral-950 text-center hover:border-white/30 cursor-pointer transition-colors">
                <span className="text-neutral-500 block text-[10px]">Thứ 2</span>
                <span className="font-semibold text-white">09:00 - 09:30</span>
              </div>
              <div className="p-2.5 rounded border border-white/10 bg-neutral-950 text-center hover:border-white/30 cursor-pointer transition-colors">
                <span className="text-neutral-500 block text-[10px]">Thứ 3</span>
                <span className="font-semibold text-white">14:00 - 14:30</span>
              </div>
              <div className="p-2.5 rounded border border-white/10 bg-neutral-950 text-center hover:border-white/30 cursor-pointer transition-colors">
                <span className="text-neutral-500 block text-[10px]">Thứ 5</span>
                <span className="font-semibold text-white">16:00 - 16:30</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a 
                href="mailto:contact@mindfulops.dev"
                className="w-full sm:flex-1 py-2.5 rounded-md bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors text-center"
              >
                Xác nhận đặt lịch ngay
              </a>
              <a 
                href="https://zalo.me"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-md border border-white/10 bg-neutral-900 text-neutral-300 text-xs font-medium hover:bg-neutral-800 transition-colors text-center"
              >
                Nhắn tin nhanh
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Đơn Sắc Resend */}
      <footer className="py-8 border-t border-neutral-900 text-center text-xs text-neutral-500 font-mono">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Mindful-Ops Architect. Công nghệ vị nhân sinh.</p>
          <div className="flex items-center gap-6">
            <a href="#song-nao" className="hover:text-white transition-colors">Song não</a>
            <a href="#triet-ly" className="hover:text-white transition-colors">Triết lý</a>
            <a href="#giai-phap" className="hover:text-white transition-colors">Giải pháp</a>
            <a href="#ket-noi" className="hover:text-white transition-colors">Đặt lịch</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
