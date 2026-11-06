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
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  ChevronRight,
  Activity,
  Code2,
  BrainCircuit,
  Clock
} from "lucide-react";

export function PersonalWebsite() {
  const [activeTab, setActiveTab] = useState<"system" | "empathy" | "mindful">("system");
  const [copied, setCopied] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<number>(0);

  const snippets = {
    system: `import { MasterAgent } from "@mindful/engine";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Khởi tạo tác tử tự động hóa luồng vận hành
  const agent = new MasterAgent({
    stack: ["React 19", "Next.js 15", "MCP Protocol"],
    mode: "autonomous-pipeline"
  });

  const { task } = await req.json();
  const result = await agent.execute({
    task,
    selfCheckFilter: true, // Kiểm tra chéo nghiêm ngặt
    speedLimitMs: 25
  });

  return NextResponse.json({
    status: "Hoàn tất giải phóng tác vụ thủ công",
    latency: "23ms",
    data: result
  });
}`,
    empathy: `/* KHUNG THAM VẤN TÂM THỨC & KHOA HỌC NÃO BỘ */
{
  "triet_ly": "Thấu cảm để tháo gỡ điểm mù",
  "co_so_khoa_hoc": "Lý thuyết Dòng chảy (Flow) & Tâm lý học thực chứng",
  "quy_trinh_3_buoc": {
    "buoc_1": "Lắng nghe sâu, gọi tên các cảm xúc hỗn độn",
    "buoc_2": "Đối chiếu dữ liệu hành vi thực tế, nhận diện điểm mù",
    "buoc_3": "Đóng gói bài tập tự phản tỉnh đo lường được"
  },
  "ket_qua": "Chuyển hóa nhận thức, tìm lại sự bình an nội tâm"
}`,
    mindful: `# PHƯƠNG TRÌNH VẬN HÀNH TỈNH THỨC (MINDFUL-OPS)
dinh_vi: "Cầu nối giữa chiều sâu nội tâm và sức mạnh tính toán"

phuong_trinh_can_bang:
  hieu_suat_thuc_thi:
    nguyen_tac: "Kỷ luật tự thân + Tự động hóa triệt để"
    hanh_dong: "Xóa bỏ 100% tác vụ giấy tờ lặp lại"
  tinh_lang_noi_tam:
    nguyen_tac: "Thấu hiểu bản thân + Tĩnh tại"
    hanh_dong: "Dành không gian tinh thần cho việc sáng tạo sâu"

dau_ra: "Hiệu suất tối đa nhưng không bào mòn thể chất và tâm trí"`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans relative antialiased overflow-x-hidden">
      {/* 1. Resend Iconic Grid Floor & Perspective Light Beam */}
      <div 
        className="absolute top-0 left-0 right-0 h-[650px] pointer-events-none -z-10 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)"
        }}
      />
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.12), transparent 70%)"
        }}
      />

      {/* 2. Resend Exact Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/75 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
              <span className="text-black font-black text-xs">M</span>
            </div>
            <span className="font-semibold text-sm tracking-tight text-white">MindfulOps</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-400">
            <a href="#console" className="hover:text-white transition-colors">Bảng điều khiển</a>
            <a href="#triet-ly" className="hover:text-white transition-colors">Triết lý</a>
            <a href="#giai-phap" className="hover:text-white transition-colors">Giải pháp</a>
            <a href="#du-an" className="hover:text-white transition-colors">Dự án</a>
            <a href="#doi-tac" className="hover:text-white transition-colors">Đối tác</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="#ket-noi" 
              className="hidden sm:inline-block text-xs text-neutral-400 hover:text-white transition-colors"
            >
              Liên hệ
            </a>
            <a 
              href="#ket-noi"
              className="h-8 px-3 rounded-md bg-white text-black hover:bg-neutral-200 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              Đặt lịch 1:1
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* 3. Hero Section (Y chang kiến trúc typography & badge của Resend) */}
      <section className="pt-20 pb-16 px-4 text-center relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Resend Style Announcement Pill */}
          <a 
            href="#console"
            className="group inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950/80 hover:border-neutral-700 text-xs text-neutral-300 mb-8 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Kỹ sư hệ thống & Nhà tham vấn tâm lý</span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
          </a>

          {/* Headline - ALL CAPS, 7 words, Line 2 metallic silver gradient */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] max-w-4xl">
            KIẾN TẠO CÔNG NGHỆ{" "}
            <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent block sm:inline">
              VỊ NHÂN SINH
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed font-normal">
            Cầu nối vững chắc giữa thế giới nội tâm con người và sức mạnh tính toán vô hạn của hệ thống tự động hóa.
          </p>

          {/* Resend Twin Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a 
              href="#ket-noi"
              className="h-10 px-5 rounded-md bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-[0_0_24px_rgba(255,255,255,0.18)]"
            >
              Đặt lịch đàm đạo 1:1
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#console"
              className="h-10 px-5 rounded-md border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900 text-sm font-medium text-neutral-300 transition-colors flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-neutral-400" />
              Khám phá tư duy song não
            </a>
          </div>

          {/* 4. Resend Signature 2-Column Split: Code Editor <---> Live Interactive Preview */}
          <div id="console" className="mt-14 w-full max-w-5xl rounded-xl border border-neutral-800 bg-[#09090b] text-left shadow-2xl overflow-hidden">
            {/* Editor Top Bar with Tabs */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-850 bg-neutral-950 text-xs">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="flex gap-1.5 mr-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                </span>

                <button 
                  onClick={() => setActiveTab("system")}
                  className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                    activeTab === "system" 
                      ? "bg-neutral-850 text-white font-medium border border-neutral-750" 
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  Kỹ sư hệ thống
                </button>
                <button 
                  onClick={() => setActiveTab("empathy")}
                  className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                    activeTab === "empathy" 
                      ? "bg-neutral-850 text-white font-medium border border-neutral-750" 
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  <HeartHandshake className="w-3.5 h-3.5" />
                  Tham vấn tâm thức
                </button>
                <button 
                  onClick={() => setActiveTab("mindful")}
                  className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                    activeTab === "mindful" 
                      ? "bg-neutral-850 text-white font-medium border border-neutral-750" 
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  Vận hành tỉnh thức
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Đã chép</span>
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

            {/* Split Content: Code on Left, Live Output on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
              {/* Left Column: Code View with Line Numbers */}
              <div className="lg:col-span-7 p-4 sm:p-5 font-mono text-xs sm:text-[13px] text-neutral-300 leading-relaxed overflow-x-auto border-b lg:border-b-0 lg:border-r border-neutral-850 bg-black">
                <pre><code>{snippets[activeTab]}</code></pre>
              </div>

              {/* Right Column: Live Output / Preview Card */}
              <div className="lg:col-span-5 p-5 bg-neutral-950 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-850">
                    <span className="text-neutral-500 font-mono">Trực quan hóa kết quả</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Độ trễ 23ms
                    </span>
                  </div>

                  {activeTab === "system" && (
                    <div className="mt-4 space-y-3">
                      <div className="p-3.5 rounded-lg border border-neutral-800 bg-black">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="text-neutral-400">Trạng thái luồng tự động</span>
                          <span className="text-white font-mono font-medium">Hoàn thành 100%</span>
                        </div>
                        <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-white h-full w-full" />
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg border border-neutral-800 bg-black space-y-2 text-xs">
                        <div className="flex justify-between text-neutral-400">
                          <span>Nhiệm vụ:</span>
                          <span className="text-white font-mono">Tự động tổng hợp lịch</span>
                        </div>
                        <div className="flex justify-between text-neutral-400">
                          <span>Bộ lọc kiểm tra chéo:</span>
                          <span className="text-emerald-400 font-mono">Sạch 0 lỗi</span>
                        </div>
                        <div className="flex justify-between text-neutral-400">
                          <span>Giải phóng sức lao động:</span>
                          <span className="text-white font-mono">15 giờ / tuần</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "empathy" && (
                    <div className="mt-4 space-y-3">
                      <div className="p-3.5 rounded-lg border border-neutral-800 bg-black">
                        <span className="text-xs text-neutral-500 font-mono block mb-1">Mô hình Dòng chảy</span>
                        <div className="text-xs font-semibold text-white">Cân bằng Thách thức & Kỹ năng</div>
                        <p className="text-xs text-neutral-400 mt-1">Đưa thân chủ từ lo âu/chán nản vào trạng thái nhập tâm sâu.</p>
                      </div>

                      <div className="p-3.5 rounded-lg border border-neutral-800 bg-black text-xs space-y-2">
                        <div className="text-white font-medium">Bộ công cụ tự phản tỉnh:</div>
                        <ul className="text-neutral-400 space-y-1.5 list-disc list-inside">
                          <li>Nhận diện điểm mù tư duy</li>
                          <li>Tách rời bản thể khỏi cảm xúc tiêu cực</li>
                          <li>Xây dựng thói quen vi mô bền vững</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "mindful" && (
                    <div className="mt-4 space-y-3">
                      <div className="p-3.5 rounded-lg border border-neutral-800 bg-black">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-neutral-400">Tự động hóa tác vụ lặp lại:</span>
                          <span className="text-white font-mono">80%</span>
                        </div>
                        <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-white h-full w-[80%]" />
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg border border-neutral-800 bg-black">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-neutral-400">Không gian tĩnh tại sáng tạo:</span>
                          <span className="text-emerald-400 font-mono">100% trọn vẹn</span>
                        </div>
                        <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-emerald-400 h-full w-full" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-neutral-850 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>Hệ sinh thái vị nhân sinh</span>
                  <a href="#ket-noi" className="text-white hover:underline flex items-center gap-1">
                    Trải nghiệm
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Logo Strip (Kẻ sọc ngang và chia cột dọc bằng viền hairline kiểu Resend) */}
      <section id="doi-tac" className="border-y border-neutral-850 bg-black py-8">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-xs font-mono text-neutral-500 mb-6 uppercase tracking-wider">
            Tổ chức, đối tác và cộng đồng đồng hành
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-850 border border-neutral-850 rounded-lg overflow-hidden bg-neutral-950">
            <div className="p-4 text-center">
              <span className="font-bold text-sm tracking-tight text-neutral-300">SUNNYCARE</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold text-sm tracking-tight text-neutral-300">METTASOUL</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold text-sm tracking-tight text-neutral-300">ROA GROUP</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold text-sm tracking-tight text-neutral-300">TÂM THỨC</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold text-sm tracking-tight text-neutral-300">KỶ LUẬT</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold text-sm tracking-tight text-neutral-300">NEXT.JS 15</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Feature Matrix 3x3 (Bắt chước y hệt khối "Reach humans, not spam folders" của Resend) */}
      <section id="triet-ly" className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Nền tảng năng lực</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
              KỶ LUẬT THỰC THI VÀ TĨNH LẶNG NỘI TÂM
            </h2>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
              Tối ưu hóa không phải là cuộc đua kiệt sức. Khi hệ thống được xây dựng trên khoa học não bộ, nó giải phóng con người để quay về với chính mình.
            </p>
          </div>

          {/* 3x3 Hairline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-850">
            {/* Box 1 */}
            <div className="p-6 border-r border-b border-neutral-850 bg-neutral-950/40 hover:bg-neutral-950 transition-colors">
              <div className="w-8 h-8 rounded border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white mb-4">
                <BrainCircuit className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Tư duy song não</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Rành mạch của kỹ sư hệ thống kết hợp góc nhìn thấu cảm nhân văn của nhà tham vấn tâm lý.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 border-r border-b border-neutral-850 bg-neutral-950/40 hover:bg-neutral-950 transition-colors">
              <div className="w-8 h-8 rounded border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white mb-4">
                <Workflow className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Hệ thống hóa cái vô hình</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Bắt mạch cảm xúc, thói quen và nỗi đau tâm lý, đóng gói thành quy trình và công cụ web đo lường được.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 border-r border-b border-neutral-850 bg-neutral-950/40 hover:bg-neutral-950 transition-colors">
              <div className="w-8 h-8 rounded border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white mb-4">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Builder mindset tự học</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Tự ráp dàn PC, mày mò giao thức MCP, kỹ thuật cào dữ liệu và thiết lập Master AI Agent.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-6 border-r border-b border-neutral-850 bg-neutral-950/40 hover:bg-neutral-950 transition-colors">
              <div className="w-8 h-8 rounded border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white mb-4">
                <Coffee className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Tỉ mỉ sắc bén</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Thể hiện từ chiết xuất chuẩn một ly espresso 24g basket đến bộ lọc tự kiểm tra chéo cho AI.
              </p>
            </div>

            {/* Box 5 */}
            <div className="p-6 border-r border-b border-neutral-850 bg-neutral-950/40 hover:bg-neutral-950 transition-colors">
              <div className="w-8 h-8 rounded border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white mb-4">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Lý thuyết dòng chảy</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Ứng dụng khoa học não bộ và khái niệm Flow để tối ưu hóa hiệu suất làm việc không kiệt sức.
              </p>
            </div>

            {/* Box 6 */}
            <div className="p-6 border-r border-b border-neutral-850 bg-neutral-950/40 hover:bg-neutral-950 transition-colors">
              <div className="w-8 h-8 rounded border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white mb-4">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Công nghệ vị nhân sinh</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Tự động hóa giải phóng sức lao động để con người kết nối lại với chính mình và chữa lành.
              </p>
            </div>

            {/* Box 7 */}
            <div className="p-6 border-r border-b border-neutral-850 bg-neutral-950/40 hover:bg-neutral-950 transition-colors">
              <div className="w-8 h-8 rounded border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white mb-4">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Tháo gỡ điểm mù</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Lắng nghe sâu không phán xét, đưa ra giải pháp thực tế có cơ sở khoa học thay vì lời khuyên sáo rỗng.
              </p>
            </div>

            {/* Box 8 */}
            <div className="p-6 border-r border-b border-neutral-850 bg-neutral-950/40 hover:bg-neutral-950 transition-colors">
              <div className="w-8 h-8 rounded border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white mb-4">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Xóa nghẽn vận hành</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Đồng hành cùng SUNNYCARE, METTASOUL, ROA tạo dashboard và luồng tự động hóa giải phóng chuyên gia.
              </p>
            </div>

            {/* Box 9 */}
            <div className="p-6 border-r border-b border-neutral-850 bg-neutral-950/40 hover:bg-neutral-950 transition-colors">
              <div className="w-8 h-8 rounded border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white mb-4">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Dịch thuật tri thức hàn lâm</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Nhào nặn lý thuyết phức tạp thành video, bài viết trực quan trên kênh Thay Đổi Tâm Thức và Kỷ Luật Tự Thân.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Spotlight Quote (Bắt chước khối trích dẫn đối tác nổi tiếng của Resend) */}
      <section className="py-20 px-4 border-t border-neutral-850 bg-neutral-950">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-lg sm:text-xl text-neutral-200 font-normal leading-relaxed italic">
            "Chiếc cầu nối vững chắc giữa thế giới nội tâm mỏng manh của con người và sức mạnh tính toán vô hạn của công nghệ."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold text-white">
              MO
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">Mindful-Ops Architect</div>
              <div className="text-[11px] text-neutral-500 font-mono">Kỹ sư hệ thống & Tham vấn tâm lý</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Resend Final Call To Action & Booking Section */}
      <section id="ket-noi" className="py-24 px-4 border-t border-neutral-850 bg-black text-center relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            KẾT NỐI VÀ ĐÀM ĐẠO TRỰC TIẾP
          </h2>
          <p className="mt-4 text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Dành 30 phút trò chuyện về chuyển đổi số vận hành, xây dựng AI Agent, hoặc đồng hành tháo gỡ điểm mù tâm lý.
          </p>

          <div className="mt-10 p-6 rounded-xl border border-neutral-800 bg-[#09090b] text-left max-w-xl mx-auto shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-850">
              <div>
                <span className="text-xs font-bold text-white block">Phiên đàm đạo trực tuyến 1:1</span>
                <span className="text-xs text-neutral-500 font-mono">30 phút • Google Meet</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Đang mở lịch
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 text-xs font-mono">
              {[
                { day: "Thứ 2", time: "09:00 - 09:30" },
                { day: "Thứ 3", time: "14:00 - 14:30" },
                { day: "Thứ 5", time: "16:00 - 16:30" },
              ].map((slot, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedSlot(idx)}
                  className={`p-2.5 rounded border text-center cursor-pointer transition-all ${
                    selectedSlot === idx 
                      ? "border-white bg-neutral-850 text-white shadow-sm" 
                      : "border-neutral-800 bg-black text-neutral-400 hover:border-neutral-700"
                  }`}
                >
                  <span className="text-neutral-500 block text-[10px]">{slot.day}</span>
                  <span className="font-semibold text-xs text-white">{slot.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a 
                href="mailto:contact@mindfulops.dev"
                className="w-full sm:flex-1 py-2.5 rounded-md bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors text-center shadow"
              >
                Xác nhận đặt lịch ngay
              </a>
              <a 
                href="https://zalo.me"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-md border border-neutral-800 bg-neutral-900 text-neutral-300 text-xs font-medium hover:bg-neutral-800 transition-colors text-center"
              >
                Nhắn tin nhanh
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Resend Exact Multi-Column Footer with System Status */}
      <footer className="py-12 border-t border-neutral-850 bg-black text-xs text-neutral-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-white flex items-center justify-center">
                  <span className="text-black font-black text-[10px]">M</span>
                </div>
                <span className="font-bold text-white text-sm">MindfulOps</span>
              </div>
              <p className="text-neutral-500 text-xs max-w-xs leading-relaxed">
                Hệ sinh thái công nghệ vị nhân sinh. Cầu nối giữa thế giới nội tâm và sức mạnh tính toán vô hạn.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Tất cả hệ thống đang hoạt động
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-white block mb-3 font-mono">Bản sắc</span>
              <ul className="space-y-2 text-neutral-500">
                <li><a href="#console" className="hover:text-white transition-colors">Tư duy song não</a></li>
                <li><a href="#triet-ly" className="hover:text-white transition-colors">Vận hành tỉnh thức</a></li>
                <li><a href="#triet-ly" className="hover:text-white transition-colors">Kỷ luật tự thân</a></li>
                <li><a href="#console" className="hover:text-white transition-colors">Dòng chảy (Flow)</a></li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold text-white block mb-3 font-mono">Giải pháp</span>
              <ul className="space-y-2 text-neutral-500">
                <li><a href="#giai-phap" className="hover:text-white transition-colors">Thân chủ cá nhân 1:1</a></li>
                <li><a href="#giai-phap" className="hover:text-white transition-colors">Tổ chức doanh nghiệp</a></li>
                <li><a href="#giai-phap" className="hover:text-white transition-colors">Cộng đồng học tập</a></li>
                <li><a href="#du-an" className="hover:text-white transition-colors">Master AI Agents</a></li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold text-white block mb-3 font-mono">Kết nối</span>
              <ul className="space-y-2 text-neutral-500">
                <li><a href="#ket-noi" className="hover:text-white transition-colors">Đặt lịch đàm đạo</a></li>
                <li><a href="mailto:contact@mindfulops.dev" className="hover:text-white transition-colors">Email liên hệ</a></li>
                <li><a href="https://github.com" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://zalo.me" className="hover:text-white transition-colors">Zalo cá nhân</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-600 font-mono text-[11px]">
            <p>© 2026 Mindful-Ops Architect. Công nghệ vị nhân sinh.</p>
            <div className="flex gap-4">
              <span>Bảo mật dữ liệu</span>
              <span>•</span>
              <span>Tiêu chuẩn chuẩn mực</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
