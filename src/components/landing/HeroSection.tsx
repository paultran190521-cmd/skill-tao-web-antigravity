"use client";

import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Magnetic } from "@/components/ui/magnetic";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Bot, Play, Star } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const words = [
    "Bứt phá điểm số",
    "Tự học thông minh",
    "Làm chủ tương lai",
    "Tiết kiệm 50% thời gian",
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-36 sm:pt-44 pb-16 overflow-hidden bg-neutral-950">
      <AuroraBackground className="bg-neutral-950 dark:bg-neutral-950 text-white min-h-[92vh]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 flex flex-col items-center">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-xs sm:text-sm font-medium text-indigo-200">
              Chương trình tiên phong dành riêng cho học sinh lớp 6 – 9
            </span>
          </motion.div>

          {/* Main Title - ALL CAPS according to Vietnamese rule, concise and punchy */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.2] max-w-4xl"
          >
            KHÓA HỌC AI CHO HỌC SINH CẤP 2:{" "}
            <span className="text-indigo-400 block sm:inline">
              TỰ HỌC THÔNG MINH, BỨT PHÁ ĐIỂM SỐ
            </span>
          </motion.h1>

          {/* Dynamic flip words line */}
          <div className="mt-4 text-base sm:text-xl font-semibold text-neutral-300 flex items-center justify-center flex-wrap gap-1.5">
            <span>Giúp con trang bị kỹ năng</span>
            <FlipWords words={words} className="text-indigo-300 font-bold" />
          </div>

          {/* Subheading - Sentence case according to Vietnamese rule */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed"
          >
            Biến AI thành trợ lý học tập 24/7 kiên nhẫn. Rèn luyện tư duy phản biện, tối ưu 50% thời gian làm bài tập và tự tin thuyết trình mà không lo lệ thuộc công nghệ.
          </motion.p>

          {/* CTA Buttons row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA with strong visual focal point */}
            <Magnetic intensity={0.4} range={60}>
              <a
                href="#dang-ky"
                className="h-13 px-8 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-indigo-200" />
                <span>Đăng ký nhận tư vấn & học thử</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Magnetic>

            {/* Secondary CTA */}
            <a
              href="#lo-trinh"
              className="h-13 px-6 rounded-xl border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200 text-sm font-semibold flex items-center justify-center gap-2 transition"
            >
              <Play className="w-4 h-4 text-neutral-400 fill-neutral-400" />
              <span>Khám phá lộ trình 8 buổi học</span>
            </a>
          </motion.div>

          {/* Key proof indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 pt-6 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-neutral-400 text-xs sm:text-sm w-full max-w-4xl"
          >
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% an toàn số cho trẻ em</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Phương pháp gợi mở Socratic</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Bot className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Thực hành ChatGPT, Claude, Canva</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
              <span>4.9/5★ từ hơn 1.200 phụ huynh</span>
            </div>
          </motion.div>

          {/* Visual Interactive Screen Simulation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 w-full max-w-4xl rounded-2xl border border-neutral-800 bg-neutral-900/90 p-4 sm:p-6 backdrop-blur-2xl shadow-2xl shadow-indigo-500/10 text-left"
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-[11px] text-neutral-500">ai-study-assistant-v2.0.tsx</span>
              </div>
              <span className="text-emerald-400 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Chế độ Gia sư Socratic đang bật
              </span>
            </div>

            {/* Simulated Chat Dialogue */}
            <div className="mt-4 space-y-4 text-xs sm:text-sm font-sans">
              {/* Student message */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-indigo-600/30 border border-indigo-500/40 text-neutral-100 p-3 rounded-2xl rounded-tr-none max-w-lg">
                  <p className="font-semibold text-indigo-300 text-xs mb-1">Học sinh Minh Anh (Lớp 8):</p>
                  <p>Trợ lý ơi, bài thơ &ldquo;Đồng chí&rdquo; của Chính Hữu có hình ảnh &ldquo;Đầu súng trăng treo&rdquo; mang ý nghĩa gì? Em cần chuẩn bị bài thuyết trình ngày mai!</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-xs shrink-0">
                  MA
                </div>
              </div>

              {/* AI message */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0 text-indigo-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="bg-neutral-800/80 border border-neutral-700 text-neutral-200 p-3.5 rounded-2xl rounded-tl-none max-w-xl">
                  <p className="font-semibold text-indigo-400 text-xs mb-1">Gia sư AI Socratic:</p>
                  <p className="mb-2">Chào Minh Anh! Thầy rất vui vì em muốn hiểu sâu hình ảnh này. Trước khi thầy gợi ý, em hãy quan sát hai hình ảnh đối lập:</p>
                  <ul className="list-disc pl-4 space-y-1 text-neutral-300 mb-2">
                    <li><strong>&ldquo;Súng&rdquo;</strong> tượng trưng cho điều gì trong chiến tranh?</li>
                    <li><strong>&ldquo;Trăng&rdquo;</strong> gợi lên cảm xúc gì trong thiên nhiên và tâm hồn con người?</li>
                  </ul>
                  <p className="text-emerald-300 text-xs">💡 Thử ghép hai ý nghĩa ấy lại, em cảm nhận được vẻ đẹp gì giữa hiện thực chiến đấu khốc liệt và tinh thần lãng mạn của người lính?</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  );
}
