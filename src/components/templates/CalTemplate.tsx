"use client";

import React, { useState } from "react";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Video, 
  Sparkles 
} from "lucide-react";

export function CalTemplate() {
  const [selectedDay, setSelectedDay] = useState(14);
  const [selectedTime, setSelectedTime] = useState("09:30");
  const [booked, setBooked] = useState(false);

  const times = ["09:00", "09:30", "10:30", "14:00", "15:30", "16:00"];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-neutral-800 selection:text-white font-sans relative">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-bold">
              <CalendarIcon className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold text-lg tracking-tight">CalSchedule</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-400">
            <a href="#tinh-nang" className="hover:text-white transition-colors">Tính năng</a>
            <a href="#tich-hop" className="hover:text-white transition-colors">Tích hợp</a>
            <a href="#doanh-nghiep" className="hover:text-white transition-colors">Doanh nghiệp</a>
            <a href="#bang-gia" className="hover:text-white transition-colors">Bảng giá</a>
          </nav>

          <a 
            href="#tao-lich"
            className="px-3.5 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-semibold transition-colors"
          >
            Tạo lịch hẹn của bạn
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-300 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
            Đặt lịch hẹn không ma sát cho chuyên gia và doanh nghiệp
          </div>

          {/* Main Title - ALL CAPS according to Vietnamese rule */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight max-w-3xl">
            ĐẶT LỊCH HẸN THÔNG MINH,{" "}
            <span className="text-neutral-400">
              KẾT NỐI KHÁCH HÀNG TỨC THÌ
            </span>
          </h1>

          {/* Subheading - Sentence case */}
          <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
            Loại bỏ hàng chục email trao đổi giờ giấc rườm rà. Chia sẻ đường link cá nhân và để khách hàng tự chọn khung giờ phù hợp nhất.
          </p>

          {/* Interactive Booking Widget Card */}
          <div className="mt-12 w-full max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-900/90 p-6 text-left shadow-2xl backdrop-blur-md">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Left Column: Meeting info */}
              <div className="sm:w-1/2 sm:border-r sm:border-neutral-800 sm:pr-6">
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-white text-[10px]">
                    AN
                  </div>
                  <span>Nguyễn Văn An</span>
                </div>
                <h3 className="text-lg font-bold text-white">Buổi tư vấn chiến lược 1:1</h3>
                <div className="mt-4 space-y-2 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>30 phút</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Google Meet tự động tạo link</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Múi giờ Đông Dương (GMT+7)</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Date & Time Picker */}
              <div className="sm:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-neutral-300">Chọn khung giờ khả dụng:</span>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {times.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                          selectedTime === t
                            ? "bg-white text-black border-white shadow-sm"
                            : "border-neutral-800 text-neutral-300 hover:border-neutral-700 bg-neutral-950/60"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">Khung giờ: <strong className="text-white">{selectedTime}</strong></span>
                  <button 
                    onClick={() => setBooked(true)}
                    className="px-4 py-2 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-bold transition-all shadow-md"
                  >
                    {booked ? "Đã xác nhận!" : "Xác nhận đặt lịch"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-neutral-800 text-center text-xs text-neutral-600">
        <p>© 2026 CalSchedule. Nền tảng đặt lịch hẹn trực tuyến chuyên nghiệp.</p>
      </footer>
    </div>
  );
}
