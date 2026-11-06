"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Terminal, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Layers,
  Copy,
  Check
} from "lucide-react";

export function OpenProTemplate() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx create-dev-stack@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-900/20 via-purple-900/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/80">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight">OpenDev</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
            <a href="#tinh-nang" className="hover:text-white transition-colors">Tính năng</a>
            <a href="#kien-truc" className="hover:text-white transition-colors">Kiến trúc</a>
            <a href="#tai-lieu" className="hover:text-white transition-colors">Tài liệu</a>
            <a href="#cong-dong" className="hover:text-white transition-colors">Cộng đồng</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900/80 text-xs font-medium text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>4.8k stars</span>
            </a>
            <a 
              href="#cai-dat"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-lg shadow-indigo-600/20"
            >
              Bắt đầu ngay
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-xs text-indigo-300 mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Phiên bản 2.0 đã chính thức phát hành
          </div>

          {/* Main Title - ALL CAPS according to Vietnamese rule */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
            NỀN TẢNG NGUỒN MỞ CHO{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
              NHÀ PHÁT TRIỂN HIỆN ĐẠI
            </span>
          </h1>

          {/* Subheading - Sentence case */}
          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Bộ công cụ phát triển phần mềm toàn diện với tốc độ xử lý tức thì, bảo mật mặc định và tối ưu trải nghiệm lập trình viên.
          </p>

          {/* Quick Install command bar */}
          <div className="mt-8 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900/90 font-mono text-xs sm:text-sm text-neutral-300 shadow-xl">
            <span className="text-indigo-400">$</span>
            <span>npx create-dev-stack@latest</span>
            <button 
              onClick={handleCopy}
              className="ml-2 p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              title="Sao chép lệnh"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex items-center gap-4">
            <a 
              href="#cai-dat"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-all shadow-xl shadow-indigo-600/30"
            >
              Cài đặt miễn phí
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-sm font-semibold text-neutral-300 transition-colors"
            >
              <Play className="w-3.5 h-3.5 text-indigo-400" />
              Xem demo video
            </a>
          </div>

          {/* Code preview window */}
          <div className="mt-14 w-full rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 shadow-2xl backdrop-blur-sm text-left">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-neutral-500">app/api/pipeline/route.ts</span>
              </div>
              <span className="text-xs text-neutral-500 font-mono">TypeScript</span>
            </div>
            <pre className="mt-4 font-mono text-xs sm:text-sm text-neutral-300 overflow-x-auto leading-relaxed">
              <code>{`import { createPipeline } from "@opendev/core";

export const pipeline = createPipeline({
  runtime: "edge",
  telemetry: true,
  concurrency: 128,
  async handler({ request, context }) {
    // Tự động phân luồng dữ liệu & caching đa vùng
    return await context.execute(request);
  }
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="tinh-nang" className="py-20 border-t border-neutral-800/80 bg-neutral-950/60">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              TÍNH NĂNG CỐT LÕI VƯỢT TRỘI
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400">
              Được thiết kế tối ưu cho hiệu năng cao và khả năng mở rộng không giới hạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Tốc độ xử lý mili-giây</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Khởi chạy tại vùng biên (Edge Network) với độ trễ phản hồi dưới 15ms trên toàn cầu.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Bảo mật chuẩn cấp doanh nghiệp</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Mã hóa đầu cuối, xác thực token tự động và tuân thủ chứng chỉ SOC2 loại II.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Khả năng tương thích tuyệt đối</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Tích hợp liền mạch với Next.js, Node.js, Bun, Docker và các dịch vụ đám mây phổ biến.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-800 text-center text-xs text-neutral-500">
        <p>© 2026 OpenDev. Giấy phép mã nguồn mở MIT. Tối ưu cho AI Agentic Workflows.</p>
      </footer>
    </div>
  );
}
