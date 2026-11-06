"use client";

import React, { useState } from "react";
import { 
  Database, 
  ShieldCheck, 
  FolderLock, 
  Zap, 
  ArrowRight, 
  Terminal, 
  Table, 
  Cpu, 
  Check 
} from "lucide-react";

export function SupabaseTemplate() {
  const [activeTab, setActiveTab] = useState<"table" | "sql">("table");

  return (
    <div className="min-h-screen bg-[#0e0f12] text-white selection:bg-emerald-500 selection:text-black font-sans relative">
      {/* Signature emerald ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0e0f12]/80 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Database className="w-4 h-4" />
            </div>
            <span className="font-bold text-base tracking-tight text-white">SupaBaseStack</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-400">
            <a href="#co-so-du-lieu" className="hover:text-emerald-400 transition-colors">Cơ sở dữ liệu</a>
            <a href="#xac-thuc" className="hover:text-emerald-400 transition-colors">Xác thực</a>
            <a href="#luu-tru" className="hover:text-emerald-400 transition-colors">Lưu trữ</a>
            <a href="#bang-gia" className="hover:text-emerald-400 transition-colors">Bảng giá</a>
          </nav>

          <a 
            href="#khoi-tao"
            className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-xs font-semibold text-black transition-all shadow-md shadow-emerald-500/20"
          >
            Khởi tạo Project
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-xs text-emerald-300 mb-8 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            PostgreSQL phân tán chuyên dụng cho ứng dụng hiện đại
          </div>

          {/* Main Title - ALL CAPS according to Vietnamese rule */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
            XÂY DỰNG NHANH,{" "}
            <span className="text-emerald-400">
              MỞ RỘNG HÀNG TRIỆU NGƯỜI
            </span>
          </h1>

          {/* Subheading - Sentence case */}
          <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
            Bộ công cụ backend toàn diện: Cơ sở dữ liệu Postgres chuyên dụng, Xác thực tài khoản tự động, Lưu trữ tệp và Edge Functions.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a 
              href="#bat-dau"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-xs sm:text-sm font-bold text-black transition-all shadow-lg shadow-emerald-500/20"
            >
              Bắt đầu dự án miễn phí
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#tai-lieu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-xs sm:text-sm font-medium text-neutral-300 transition-colors"
            >
              Tài liệu kỹ thuật
            </a>
          </div>

          {/* Interactive Database Console Preview */}
          <div className="mt-14 w-full max-w-3xl rounded-xl border border-neutral-800 bg-[#121316] p-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setActiveTab("table")}
                  className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                    activeTab === "table" ? "bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/30" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Table className="w-3.5 h-3.5" />
                  Bảng dữ liệu
                </button>
                <button 
                  onClick={() => setActiveTab("sql")}
                  className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                    activeTab === "sql" ? "bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/30" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  Trình soạn thảo SQL
                </button>
              </div>
              <span className="text-neutral-500 text-[11px]">postgres://cluster-01</span>
            </div>

            {activeTab === "table" ? (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-neutral-800 text-neutral-500">
                      <th className="pb-2">id (uuid)</th>
                      <th className="pb-2">ho_va_ten (text)</th>
                      <th className="pb-2">email (text)</th>
                      <th className="pb-2">trang_thai (text)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/60 text-neutral-300">
                    <tr>
                      <td className="py-2.5 text-neutral-500">a0eebc99-9c0b...</td>
                      <td className="py-2.5">Nguyễn Văn An</td>
                      <td className="py-2.5 text-emerald-400">an.nguyen@company.com</td>
                      <td className="py-2.5"><span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 text-[10px]">Đã kích hoạt</span></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-neutral-500">c9f8a123-11aa...</td>
                      <td className="py-2.5">Trần Thị Mai</td>
                      <td className="py-2.5 text-emerald-400">mai.tran@startup.io</td>
                      <td className="py-2.5"><span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 text-[10px]">Đã kích hoạt</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <pre className="mt-4 font-mono text-xs text-neutral-300 leading-relaxed overflow-x-auto">
                <code>{`-- Tạo chính sách phân quyền Row Level Security (RLS)
CREATE POLICY "Cho phép người dùng xem dữ liệu cá nhân"
ON public.profiles
FOR SELECT
USING (auth.uid() = user_id);`}</code>
              </pre>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-neutral-800 text-center text-xs text-neutral-500">
        <p>© 2026 SupaBaseStack. Nền tảng cơ sở dữ liệu Postgres cho mọi nhà phát triển.</p>
      </footer>
    </div>
  );
}
