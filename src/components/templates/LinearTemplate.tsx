"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Command, 
  Sparkles, 
  GitPullRequest, 
  Layers, 
  Sliders, 
  CornerDownLeft,
  ChevronRight
} from "lucide-react";

export function LinearTemplate() {
  const [selectedIssue, setSelectedIssue] = useState(1);

  const issues = [
    { id: "LIN-102", title: "Tối ưu hóa pipeline biên dịch Turbo trên Next.js 16", status: "Đang xử lý", priority: "Cao" },
    { id: "LIN-103", title: "Tự động phân luồng tác tử AI khi có pull request mới", status: "Đã duyệt", priority: "Khẩn cấp" },
    { id: "LIN-104", title: "Đồng bộ hóa trạng thái sprint với GitHub Issues", status: "Chờ xử lý", priority: "Trung bình" },
  ];

  return (
    <div className="min-h-screen bg-[#08090a] text-neutral-200 selection:bg-indigo-500 selection:text-white font-sans relative">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/10 blur-[130px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08090a]/80 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-md bg-white flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#08090a]" />
            </div>
            <span className="font-semibold text-sm tracking-tight text-white">FocusLinear</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-400">
            <a href="#tinh-nang" className="hover:text-white transition-colors">Phương pháp</a>
            <a href="#quy-trinh" className="hover:text-white transition-colors">Quy trình</a>
            <a href="#tich-hop" className="hover:text-white transition-colors">Tích hợp</a>
            <a href="#khach-hang" className="hover:text-white transition-colors">Khách hàng</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.03] text-[11px] text-neutral-400">
              <Command className="w-3 h-3" />
              <span>K</span>
            </div>
            <a 
              href="#dang-ky"
              className="inline-flex items-center px-3.5 py-1.5 rounded-md bg-white text-[#08090a] text-xs font-semibold hover:bg-neutral-200 transition-colors"
            >
              Dùng thử ngay
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-neutral-300 mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Phiên bản Linear 2026: Tinh chỉnh cho đội ngũ phần mềm tinh hoa
            <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />
          </div>

          {/* Main Title - ALL CAPS according to Vietnamese rule */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight max-w-3xl">
            QUẢN LÝ DỰ ÁN CHO{" "}
            <span className="text-neutral-400">
              KỸ SƯ TINH HOA
            </span>
          </h1>

          {/* Subheading - Sentence case */}
          <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
            Thiết kế tối giản, tốc độ phản hồi 50ms và phím tắt thông minh giúp loại bỏ hoàn toàn ma sát trong quy trình phát triển sản phẩm.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a 
              href="#bat-dau"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#08090a] text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-lg"
            >
              Bắt đầu miễn phí
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#tinh-nang"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-xs sm:text-sm font-medium text-neutral-300 transition-colors"
            >
              Xem tài liệu kỹ thuật
            </a>
          </div>

          {/* Interactive Issue List Preview */}
          <div className="mt-14 w-full max-w-3xl rounded-xl border border-white/[0.08] bg-[#0c0d0e] p-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs text-neutral-400">
              <span className="font-semibold text-white">Sprint 42 • Chu kỳ 2 tuần</span>
              <span>3 nhiệm vụ trọng tâm</span>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {issues.map((issue, idx) => (
                <div 
                  key={issue.id} 
                  onClick={() => setSelectedIssue(idx)}
                  className={`py-3 px-2 flex items-center justify-between text-xs cursor-pointer rounded transition-colors ${
                    selectedIssue === idx ? "bg-white/[0.04] text-white" : "text-neutral-400 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Circle className="w-3.5 h-3.5 text-neutral-500" />
                    <span className="font-mono text-neutral-500">{issue.id}</span>
                    <span className="font-medium">{issue.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] bg-indigo-950/60 text-indigo-300 border border-indigo-500/30">
                      {issue.priority}
                    </span>
                    <span className="text-neutral-500 text-[11px]">{issue.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-white/[0.08] text-center text-xs text-neutral-500">
        <p>© 2026 FocusLinear. Tối giản • Chuẩn xác • Không gián đoạn.</p>
      </footer>
    </div>
  );
}
