"use client";

import React, { useState } from "react";
import { 
  Search, 
  Command, 
  Sparkles, 
  ArrowRight, 
  Flame, 
  Laptop, 
  Terminal, 
  Zap, 
  ChevronRight, 
  CornerDownLeft 
} from "lucide-react";

export function RaycastTemplate() {
  const [query, setQuery] = useState("");

  const commands = [
    { name: "Dịch nhanh văn bản sang tiếng Anh", tag: "AI Tool", shortcut: "↵" },
    { name: "Tóm tắt nội dung cuộc họp Meet gần nhất", tag: "Workspace", shortcut: "↵" },
    { name: "Tạo liên kết thanh toán nhanh Stripe", tag: "Extension", shortcut: "↵" },
    { name: "Tìm kiếm tệp trong Google Drive", tag: "Cloud", shortcut: "↵" },
  ];

  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-rose-500 selection:text-white font-sans relative overflow-hidden">
      {/* Raycast signature ambient rose/orange glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-rose-600/15 via-orange-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070709]/80 border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-rose-500 to-orange-400 flex items-center justify-center text-white shadow-md shadow-rose-500/20">
              <Flame className="w-4 h-4 fill-white text-transparent" />
            </div>
            <span className="font-bold text-base tracking-tight">RayLauncher</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-400">
            <a href="#tinh-nang" className="hover:text-white transition-colors">Tiện ích mở rộng</a>
            <a href="#ai" className="hover:text-white transition-colors">Trợ lý AI</a>
            <a href="#toc-do" className="hover:text-white transition-colors">Tốc độ</a>
            <a href="#tai-ve" className="hover:text-white transition-colors">Tải ứng dụng</a>
          </nav>

          <a 
            href="#download"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-semibold text-white transition-all shadow-lg shadow-rose-600/30"
          >
            Tải cho macOS & Windows
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-950/30 text-xs text-rose-300 mb-8 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-orange-400" />
            Mở rộng năng suất với 1.000+ tiện ích cộng đồng
          </div>

          {/* Main Title - ALL CAPS according to Vietnamese rule */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
            TRUNG TÂM ĐIỀU KHIỂN CÔNG VIỆC{" "}
            <span className="bg-gradient-to-r from-rose-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
              TRONG MỘT PHÍM BẤM
            </span>
          </h1>

          {/* Subheading - Sentence case */}
          <p className="mt-6 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            Thay thế thanh tìm kiếm mặc định bằng công cụ siêu tốc: gọi lệnh AI, thao tác ứng dụng và truy xuất tài liệu ngay lập tức.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a 
              href="#tai-ve"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-orange-600 hover:opacity-90 text-sm font-semibold text-white transition-all shadow-xl shadow-rose-600/20"
            >
              Tải miễn phí
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Command Palette Mockup */}
          <div className="mt-14 w-full max-w-2xl rounded-2xl border border-zinc-700/60 bg-[#121316] p-4 shadow-2xl backdrop-blur-xl text-left">
            <div className="flex items-center gap-3 pb-3 border-b border-zinc-800 text-sm text-zinc-300">
              <Search className="w-4 h-4 text-rose-400" />
              <input 
                type="text"
                placeholder="Nhập lệnh hoặc yêu cầu AI làm bất cứ điều gì..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-white placeholder-zinc-500 text-xs sm:text-sm font-sans"
              />
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px] font-mono">ESC</span>
            </div>

            <div className="mt-3 space-y-1">
              {commands.map((cmd, idx) => (
                <div 
                  key={idx}
                  className="px-3 py-2 rounded-lg flex items-center justify-between text-xs text-zinc-300 hover:bg-zinc-800/80 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>{cmd.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-zinc-500">{cmd.tag}</span>
                    <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px] font-mono">{cmd.shortcut}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-zinc-800/80 text-center text-xs text-zinc-500">
        <p>© 2026 RayLauncher. Tối ưu cho tốc độ và trải nghiệm phím bấm.</p>
      </footer>
    </div>
  );
}
