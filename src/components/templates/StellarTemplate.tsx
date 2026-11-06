"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Network, 
  Database, 
  ShieldAlert, 
  Activity, 
  Globe 
} from "lucide-react";

export function StellarTemplate() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500 selection:text-white relative overflow-hidden">
      {/* Starry space ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-purple-600/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/70 border-b border-purple-900/30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-lg flex items-center justify-center">
                <Network className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-purple-100 to-cyan-200 bg-clip-text text-transparent">
              StellarNet
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <a href="#mang-luoi" className="hover:text-cyan-300 transition-colors">Mạng lưới</a>
            <a href="#dien-toan" className="hover:text-cyan-300 transition-colors">Điện toán</a>
            <a href="#he-sinh-thai" className="hover:text-cyan-300 transition-colors">Hệ sinh thái</a>
            <a href="#bao-mat" className="hover:text-cyan-300 transition-colors">Bảo mật</a>
          </nav>

          <a 
            href="#ket-noi"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs font-semibold text-white transition-all shadow-lg shadow-purple-900/40"
          >
            Kết nối Node
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 mb-6 backdrop-blur-md">
            <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            Mạng lưới phi tập trung toàn cầu đạt 10.000+ Nodes
          </div>

          {/* Main Title - ALL CAPS according to Vietnamese rule */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
            HẠ TẦNG ĐIỆN TOÁN AI{" "}
            <span className="bg-gradient-to-r from-purple-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              KHÔNG BIÊN GIỚI
            </span>
          </h1>

          {/* Subheading - Sentence case */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Khai phá sức mạnh xử lý song song với kiến trúc phân tán siêu chịu tải, giảm 70% chi phí điện toán đám mây cho các mô hình AI lớn.
          </p>

          <div className="mt-8 flex items-center gap-4 flex-wrap justify-center">
            <a 
              href="#khoi-chay"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 text-sm font-semibold text-white transition-all shadow-xl shadow-purple-600/30"
            >
              Khởi chạy mô hình
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#tai-lieu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-sm font-semibold text-slate-300 transition-colors"
            >
              Đọc Whitepaper
            </a>
          </div>

          {/* Metrics bar */}
          <div className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            <div className="p-4 rounded-xl border border-purple-900/30 bg-slate-900/50 backdrop-blur-sm">
              <span className="text-xs text-slate-400">Độ trễ toàn cầu</span>
              <p className="text-2xl font-bold text-cyan-400 mt-1">&lt; 8ms</p>
            </div>
            <div className="p-4 rounded-xl border border-purple-900/30 bg-slate-900/50 backdrop-blur-sm">
              <span className="text-xs text-slate-400">Node hoạt động</span>
              <p className="text-2xl font-bold text-purple-400 mt-1">12.450+</p>
            </div>
            <div className="p-4 rounded-xl border border-purple-900/30 bg-slate-900/50 backdrop-blur-sm">
              <span className="text-xs text-slate-400">Khả năng sẵn sàng</span>
              <p className="text-2xl font-bold text-emerald-400 mt-1">99.99%</p>
            </div>
            <div className="p-4 rounded-xl border border-purple-900/30 bg-slate-900/50 backdrop-blur-sm">
              <span className="text-xs text-slate-400">Tốc độ xử lý TFLOPS</span>
              <p className="text-2xl font-bold text-cyan-400 mt-1">45.2 PFLOPS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-900/30 text-center text-xs text-slate-500">
        <p>© 2026 StellarNet. Mạng lưới hạ tầng điện toán đám mây phi tập trung.</p>
      </footer>
    </div>
  );
}
