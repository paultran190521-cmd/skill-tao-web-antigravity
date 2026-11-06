"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Bot, Presentation, Languages, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export function BenefitsSection() {
  const pillars = [
    {
      title: "Gia sư học tập 24/7 theo phương pháp Socratic",
      description:
        "AI không giải hộ mà đặt câu hỏi gợi mở, giúp con nắm chắc bản chất các định lý Toán học, phân tích tác phẩm Văn học và hiện tượng Khoa học tự nhiên.",
      header: (
        <div className="h-44 w-full rounded-xl bg-gradient-to-br from-indigo-950/60 via-neutral-900 to-neutral-950 border border-neutral-800 p-4 flex flex-col justify-between overflow-hidden relative">
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span className="font-mono text-indigo-400">Prompt Socratic</span>
            <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 text-[10px]">Tư duy đa chiều</span>
          </div>
          <div className="space-y-1.5 text-xs text-neutral-300 bg-neutral-900/90 p-2.5 rounded-lg border border-neutral-800">
            <p className="text-emerald-400 font-mono text-[11px]">→ Gợi ý bước 1: Xác định điều kiện</p>
            <p className="text-neutral-400 text-[11px]">→ Gợi ý bước 2: Liên hệ định lý Pytago</p>
          </div>
          <p className="text-[11px] text-neutral-500">Giúp học sinh tự tay tìm ra lời giải mà không chép vẹt.</p>
        </div>
      ),
      icon: <Bot className="h-6 w-6 text-indigo-400" />,
      className: "md:col-span-2",
    },
    {
      title: "Thuyết trình & Đồ họa chuyên nghiệp trong 10 phút",
      description:
        "Tự tay chuyển ý tưởng thành slide PowerPoint bắt mắt trên Canva AI, vẽ sơ đồ tư duy (mindmap) tự động và tạo tranh ảnh minh họa sống động.",
      header: (
        <div className="h-44 w-full rounded-xl bg-gradient-to-br from-purple-950/60 via-neutral-900 to-neutral-950 border border-neutral-800 p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center gap-1.5 text-xs text-purple-300">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Tự động hóa Slide & Mindmap</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-300">
            <div className="bg-neutral-900 p-2 rounded-lg border border-neutral-800 text-center">
              <span className="block font-bold text-white text-xs">Trước đây</span>
              <span className="text-neutral-500">Mất 3 tiếng làm slide</span>
            </div>
            <div className="bg-purple-900/30 p-2 rounded-lg border border-purple-500/30 text-center">
              <span className="block font-bold text-purple-300 text-xs">Sau khóa học</span>
              <span className="text-purple-200">10 phút xong bài thuyết trình</span>
            </div>
          </div>
          <p className="text-[11px] text-neutral-400">Tự tin đứng trước lớp báo cáo dự án nhóm.</p>
        </div>
      ),
      icon: <Presentation className="h-6 w-6 text-purple-400" />,
      className: "md:col-span-1",
    },
    {
      title: "Luyện phản xạ tiếng Anh bản xứ không sợ sai",
      description:
        "Đàm thoại trực tiếp bằng giọng nói cùng trợ lý AI 1 kèm 1 theo các chủ đề: Thuyết trình, phỏng vấn học bổng, sửa phát âm và mở rộng từ vựng chuẩn Cambridge.",
      header: (
        <div className="h-44 w-full rounded-xl bg-gradient-to-br from-sky-950/60 via-neutral-900 to-neutral-950 border border-neutral-800 p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-sky-400">
            <span>Voice AI Chat 1-on-1</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="bg-neutral-900/90 p-3 rounded-lg border border-neutral-800 text-xs space-y-1">
            <p className="text-sky-300 font-medium">Topic: Daily routine & Dream career</p>
            <p className="text-neutral-400 text-[11px]">Sửa lỗi ngữ pháp ngay lập tức & hướng dẫn cách dùng từ tự nhiên.</p>
          </div>
          <p className="text-[11px] text-neutral-500">Xóa bỏ hoàn toàn nỗi sợ nói tiếng Anh ngập ngừng.</p>
        </div>
      ),
      icon: <Languages className="h-6 w-6 text-sky-400" />,
      className: "md:col-span-1",
    },
    {
      title: "Đạo đức AI, tư duy phản biện & an toàn không gian mạng",
      description:
        "Trang bị bộ lọc kiểm chứng nguồn tin (fact-checking), nói không với đạo văn và hiểu rõ bản quyền số để trở thành công dân số văn minh, trách nhiệm.",
      header: (
        <div className="h-44 w-full rounded-xl bg-gradient-to-br from-emerald-950/60 via-neutral-900 to-neutral-950 border border-neutral-800 p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center gap-1.5 text-xs text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Kỹ năng số quan trọng nhất thế kỷ 21</span>
          </div>
          <div className="space-y-1 text-xs text-neutral-300">
            <div className="flex items-center gap-1.5 text-emerald-300 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Kiểm chứng dữ liệu trước khi trích dẫn</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Bảo mật danh tính & tài khoản trực tuyến</span>
            </div>
          </div>
          <p className="text-[11px] text-neutral-400">Phụ huynh hoàn toàn an tâm khi con sử dụng thiết bị.</p>
        </div>
      ),
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <section id="loi-ich" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - ALL CAPS */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Giá trị cốt lõi
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            4 TRỤ CỘT NĂNG LỰC ĐỘT PHÁ CÙNG TRỢ LÝ AI
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Khóa học không dạy lý thuyết hàn lâm mà tập trung vào 4 kỹ năng thiết thực nhất, giúp con áp dụng ngay vào các môn học thực tế tại trường THCS.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[22rem]">
          {pillars.map((item, i) => (
            <BentoGridItem
              key={i}
              title={<span className="text-base sm:text-lg text-white font-bold">{item.title}</span>}
              description={<span className="text-xs sm:text-sm text-neutral-400 leading-relaxed block mt-1">{item.description}</span>}
              header={item.header}
              icon={item.icon}
              className={`border-neutral-800 bg-neutral-900/70 backdrop-blur-md p-6 hover:border-indigo-500/40 transition duration-300 ${item.className}`}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
