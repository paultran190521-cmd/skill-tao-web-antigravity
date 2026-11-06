"use client";

import React from "react";
import { LearningLoopDiagram } from "./LearningLoopDiagram";
import { Layers, ShieldCheck } from "lucide-react";

export function LearningLoopSection() {
  return (
    <section id="phuong-phap" className="py-24 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - ALL CAPS */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Phương pháp độc quyền
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            SƠ ĐỒ PHƯƠNG PHÁP HỌC TƯƠNG TÁC: TƯ DUY CHỦ ĐỘNG, NÓI KHÔNG VỚI CHÉP BÀI
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Minh chứng trực quan về luồng tương tác giữa học sinh, trí tuệ nhân tạo và giáo viên: AI chỉ đóng vai trò người gợi mở, học sinh là người làm chủ tư duy và sáng tạo.
          </p>
        </div>

        {/* Interactive Loop Diagram */}
        <LearningLoopDiagram />

        {/* 3 Core Rules Banner */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-md">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Nguyên tắc 1: Không đưa bài giải sẵn</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Các câu lệnh mẫu đều được khóa ở chế độ gợi mở (Socratic Prompting), buộc học sinh phải động não qua từng nấc thang tư duy.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-md">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Nguyên tắc 2: Đối chiếu sách giáo khoa</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Mọi kiến thức AI đưa ra luôn được học sinh kiểm chứng lại với sách giáo khoa chuẩn của Bộ Giáo dục & Đào tạo.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-md">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Nguyên tắc 3: Báo cáo phụ huynh mỗi tuần</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Trợ giảng gửi báo cáo chi tiết sản phẩm học tập và mức độ tiến bộ của con qua nhóm Zalo riêng sau từng buổi học.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
