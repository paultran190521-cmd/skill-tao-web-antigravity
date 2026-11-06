"use client";

import React, { useState } from "react";
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Layout, 
  FileText, 
  Users, 
  ShieldCheck, 
  Star,
  CheckCircle2
} from "lucide-react";

export function SimpleLightTemplate() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Soạn thảo thông minh", desc: "Trợ lý AI hỗ trợ tự động hoàn thiện văn bản và tổng hợp ý chính." },
    { title: "Cộng tác thời gian thực", desc: "Làm việc chung với đồng đội trên cùng tài liệu với độ trễ dưới 20ms." },
    { title: "Phân quyền an toàn", desc: "Kiểm soát quyền truy cập chi tiết theo từng phòng ban và dự án." },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-blue-500 selection:text-white">
      {/* Subtle top decoration */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/70 via-zinc-50/30 to-transparent -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              <Layout className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg text-zinc-900 tracking-tight">SimpleDocs</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#tinh-nang" className="hover:text-zinc-900 transition-colors">Tính năng</a>
            <a href="#giai-phap" className="hover:text-zinc-900 transition-colors">Giải pháp</a>
            <a href="#bang-gia" className="hover:text-zinc-900 transition-colors">Bảng giá</a>
            <a href="#khach-hang" className="hover:text-zinc-900 transition-colors">Đánh giá</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="#dang-nhap" 
              className="text-xs font-semibold text-zinc-700 hover:text-zinc-900 px-3 py-1.5 transition-colors"
            >
              Đăng nhập
            </a>
            <a 
              href="#dung-thu"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition-all shadow-sm"
            >
              Dùng thử miễn phí
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-xs text-blue-700 font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Không gian làm việc cộng tác thế hệ mới
          </div>

          {/* Main Title - ALL CAPS according to Vietnamese rule */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 leading-[1.18] tracking-tight">
            QUẢN LÝ DỰ ÁN & TÀI LIỆU{" "}
            <span className="text-blue-600">
              GỌN GÀNG, CHÍNH XÁC
            </span>
          </h1>

          {/* Subheading - Sentence case */}
          <p className="mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Giải phóng đội ngũ khỏi những bảng biểu rườm rà. Tập trung vào mục tiêu trọng tâm với không gian làm việc tối giản và mượt mà.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a 
              href="#dung-thu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm font-semibold text-white transition-all shadow-md shadow-blue-600/20"
            >
              Bắt đầu 14 ngày dùng thử
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#tinh-nang"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-50 text-sm font-semibold text-zinc-700 transition-colors"
            >
              Khám phá tính năng
            </a>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Không yêu cầu thẻ tín dụng • Hủy bất cứ lúc nào</p>

          {/* Hero App Mockup */}
          <div className="mt-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-2 sm:p-4 shadow-xl">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm text-left">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  <span className="font-semibold text-sm text-zinc-800">Kế hoạch ra mắt sản phẩm Q3</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">Đang tiến hành</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-100">
                  <span className="text-xs text-zinc-500 font-medium">Tiến độ hoàn thành</span>
                  <p className="text-2xl font-bold text-zinc-900 mt-1">87%</p>
                </div>
                <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-100">
                  <span className="text-xs text-zinc-500 font-medium">Nhiệm vụ trọng tâm</span>
                  <p className="text-2xl font-bold text-zinc-900 mt-1">14 / 16</p>
                </div>
                <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-100">
                  <span className="text-xs text-zinc-500 font-medium">Thời gian tiết kiệm</span>
                  <p className="text-2xl font-bold text-blue-600 mt-1">12 giờ/tuần</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section id="tinh-nang" className="py-20 border-t border-zinc-200 bg-zinc-50/60">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950">
              TRẢI NGHIỆM ĐƠN GIẢN HÓA MỌI QUY TRÌNH
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Mọi công cụ bạn cần đều được tích hợp trên một trang duy nhất.
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === idx 
                    ? "bg-blue-600 text-white shadow-sm" 
                    : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm text-center">
            <h3 className="text-xl font-bold text-zinc-900">{tabs[activeTab].title}</h3>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-xl mx-auto">{tabs[activeTab].desc}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200 text-center text-xs text-zinc-500">
        <p>© 2026 SimpleDocs. Tối ưu cho tốc độ tải và chuyển đổi khách hàng.</p>
      </footer>
    </div>
  );
}
