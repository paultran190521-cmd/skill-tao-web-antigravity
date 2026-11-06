"use client";

import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Check, Sparkles, Gift, ShieldAlert, ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

export function PricingSection() {
  return (
    <section id="hoc-phi" className="py-24 bg-neutral-900/60 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - ALL CAPS */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5" />
            Đầu tư cho tương lai của con
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            BẢNG HỌC PHÍ & GÓI ƯU ĐÃI ĐỘC QUYỀN KHAI GIẢNG SỚM
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Học phí chỉ bằng một tháng học thêm truyền thống nhưng mang lại phương pháp và kỹ năng tự học suốt đời cho học sinh.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Card 1: Gói Cơ bản */}
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 flex flex-col justify-between backdrop-blur-xl">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-xs font-semibold">
                  Gói tiêu chuẩn
                </span>
                <span className="text-xs text-neutral-500">Lớp 15 - 20 học sinh</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Nền tảng tự học AI</h3>
              <p className="text-xs text-neutral-400 mb-6">
                Dành cho học sinh muốn làm quen và ứng dụng các công cụ AI cơ bản để cải thiện bài tập hàng ngày.
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-neutral-800">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">1.690.000đ</span>
                  <span className="text-sm text-neutral-500 line-through">2.800.000đ</span>
                </div>
                <p className="text-xs text-emerald-400 mt-1 font-medium">Tiết kiệm 40% khi đăng ký sớm tuần này</p>
              </div>

              {/* Features list */}
              <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Trọn bộ 8 buổi học thực hành trực tuyến (4 tuần)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tài liệu slide bài giảng & video xem lại trọn đời</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bộ 100 câu lệnh AI gợi mở học tập Socratic</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hỗ trợ giải đáp bài tập trong nhóm chung</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Chứng chỉ tốt nghiệp khóa học AI Teen Master</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <a
                href="#dang-ky"
                className="w-full py-3.5 px-6 rounded-2xl border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition"
              >
                <span>Đăng ký gói tiêu chuẩn</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Gói Toàn diện VIP (Khuyên dùng) with BackgroundGradient */}
          <BackgroundGradient className="rounded-3xl bg-neutral-900 p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-indigo-500 text-white text-xs font-bold shadow-md shadow-amber-500/20">
                  Gói khuyên dùng (Được 86% phụ huynh chọn)
                </span>
                <span className="text-xs text-amber-300 font-medium">Chỉ 10 học sinh/lớp</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <span>Toàn diện VIP 1 kèm 1</span>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </h3>
              <p className="text-xs text-neutral-300 mb-6">
                Chương trình huấn luyện chuyên sâu với trợ giảng theo sát từng sản phẩm thực tế và 2 buổi cố vấn riêng biệt.
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-neutral-800">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-amber-200">
                    2.490.000đ
                  </span>
                  <span className="text-sm text-neutral-500 line-through">4.500.000đ</span>
                </div>
                <p className="text-xs text-amber-300 mt-1 font-medium">Ưu đãi giảm 45% + Quà tặng độc quyền trị giá 2.500.000đ</p>
              </div>

              {/* Features list */}
              <div className="space-y-3.5 text-xs sm:text-sm text-neutral-200">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-white">Toàn bộ quyền lợi của Gói tiêu chuẩn</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-amber-200 font-medium">Tặng thêm 2 buổi cố vấn 1 kèm 1 riêng cho học sinh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bộ cẩm nang độc quyền 500+ Prompts học tập chuyên sâu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Khóa học phụ trợ: &ldquo;Làm chủ Canva AI thiết kế slide đỉnh cao&rdquo;</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Nhóm Zalo 1-1 riêng: Trợ giảng sửa bài & gửi báo cáo tuần cho phụ huynh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 font-semibold">Cam kết hoàn tiền 100% sau buổi 1 nếu không ưng ý</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <Magnetic intensity={0.4} range={60}>
                <a href="#dang-ky" className="block w-full">
                  <MovingBorderButton
                    borderRadius="1rem"
                    containerClassName="h-14 w-full"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:opacity-95 transition"
                    borderClassName="bg-[radial-gradient(#f59e0b_40%,transparent_60%)]"
                  >
                    <Sparkles className="w-5 h-5 text-amber-300" />
                    <span>Đăng ký gói Toàn diện VIP ngay</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </MovingBorderButton>
                </a>
              </Magnetic>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </section>
  );
}
