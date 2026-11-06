"use client";

import React, { useState } from "react";
import { 
  Link2, 
  BarChart3, 
  ArrowRight, 
  Copy, 
  Check, 
  TrendingUp, 
  Globe, 
  MousePointerClick, 
  Sparkles 
} from "lucide-react";

export function DubTemplate() {
  const [url, setUrl] = useState("https://myapp.com/summer-campaign-2026");
  const [shortened, setShortened] = useState("dub.sh/summer26");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${shortened}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-blue-500 selection:text-white font-sans relative overflow-hidden">
      {/* Subtle blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/80">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Link2 className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight">DubLink</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-400">
            <a href="#tinh-nang" className="hover:text-white transition-colors">Tính năng</a>
            <a href="#phan-tich" className="hover:text-white transition-colors">Phân tích</a>
            <a href="#khach-hang" className="hover:text-white transition-colors">Khách hàng</a>
            <a href="#bang-gia" className="hover:text-white transition-colors">Bảng giá</a>
          </nav>

          <a 
            href="#bat-dau"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all shadow-md shadow-blue-600/20"
          >
            Tạo liên kết miễn phí
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs text-blue-300 mb-8 backdrop-blur-md">
            <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
            Nền tảng đo lường chuyển đổi hơn 100 triệu lượt click mỗi tháng
          </div>

          {/* Main Title - ALL CAPS according to Vietnamese rule */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
            RÚT GỌN LIÊN KẾT & ĐO LƯỜNG{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              CHUYỂN ĐỔI THỜI GIAN THỰC
            </span>
          </h1>

          {/* Subheading - Sentence case */}
          <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
            Công cụ rút gọn link hiện đại nhất cho đội ngũ Marketing: Gắn tên miền riêng, phân tích nguồn truy cập chi tiết và tối ưu tỷ lệ nhấp.
          </p>

          {/* Interactive Link Shortener Input */}
          <div className="mt-10 w-full max-w-2xl p-2 rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center gap-3 px-3 py-2 bg-neutral-950 rounded-xl border border-neutral-800/80">
              <Link2 className="w-4 h-4 text-neutral-500 shrink-0" />
              <input 
                type="text" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Dán đường link dài của bạn vào đây..."
                className="w-full bg-transparent outline-none text-xs sm:text-sm text-white placeholder-neutral-500 font-sans"
              />
            </div>
            <button 
              onClick={() => setShortened("dub.sh/" + Math.random().toString(36).substring(7))}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs sm:text-sm font-semibold text-white transition-all shadow-md shadow-blue-600/30 whitespace-nowrap"
            >
              Rút gọn ngay
            </button>
          </div>

          {/* Generated Link Result Bar */}
          <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-blue-500/30 bg-blue-950/20 text-xs text-neutral-300">
            <span>Link rút gọn của bạn:</span>
            <span className="font-mono font-bold text-blue-400">https://{shortened}</span>
            <button 
              onClick={handleCopy}
              className="ml-2 p-1 rounded hover:bg-blue-900/40 text-neutral-400 hover:text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Metrics Preview */}
          <div className="mt-14 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 text-left">
              <div className="flex items-center justify-between text-neutral-400 text-xs">
                <span>Tổng lượt nhấp</span>
                <MousePointerClick className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-white mt-2">142.850</p>
              <span className="text-[11px] text-emerald-400 mt-1 inline-block">↑ +18.4% so với tuần trước</span>
            </div>

            <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 text-left">
              <div className="flex items-center justify-between text-neutral-400 text-xs">
                <span>Tỷ lệ chuyển đổi</span>
                <BarChart3 className="w-4 h-4 text-indigo-400" />
              </div>
              <p className="text-2xl font-bold text-white mt-2">12.6%</p>
              <span className="text-[11px] text-emerald-400 mt-1 inline-block">↑ Tăng trưởng đều đặn</span>
            </div>

            <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 text-left">
              <div className="flex items-center justify-between text-neutral-400 text-xs">
                <span>Quốc gia hàng đầu</span>
                <Globe className="w-4 h-4 text-sky-400" />
              </div>
              <p className="text-2xl font-bold text-white mt-2">Việt Nam (68%)</p>
              <span className="text-[11px] text-neutral-500 mt-1 inline-block">Hoa Kỳ, Nhật Bản, Singapore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-neutral-800/80 text-center text-xs text-neutral-500">
        <p>© 2026 DubLink. Đo lường liên kết thông minh chuẩn xác.</p>
      </footer>
    </div>
  );
}
