"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BookOpen, Sparkles, CheckCircle2, Award, Clock } from "lucide-react";

export function CurriculumSection() {
  const data = [
    {
      title: "Tuần 1: Khởi động",
      content: (
        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold mb-2">
              <span>Buổi 1: Khám phá thế giới AI & an toàn số</span>
              <span className="flex items-center gap-1 text-neutral-400 font-normal">
                <Clock className="w-3.5 h-3.5" /> 90 phút
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 mb-3">
              Tìm hiểu bản chất AI (ChatGPT, Claude, Gemini). Thiết lập tài khoản học tập an toàn, bảo mật dữ liệu và 5 nguyên tắc đạo đức học đường.
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Đầu ra: Bản cam kết văn minh số & không gian học tập an toàn.</span>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold mb-2">
              <span>Buổi 2: Nghệ thuật ra lệnh thông minh (prompting tư duy)</span>
              <span className="flex items-center gap-1 text-neutral-400 font-normal">
                <Clock className="w-3.5 h-3.5" /> 90 phút
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 mb-3">
              Làm chủ công thức ra lệnh chuẩn: Bối cảnh + Vai trò + Nhiệm vụ. Kỹ thuật biến AI thành gia sư Socratic gợi mở tư duy thay vì chép bài giải sẵn.
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Đầu ra: Bộ 10 câu lệnh gợi mở tư duy cho các môn học chính.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Tuần 2: Môn Xã hội & Ngoại ngữ",
      content: (
        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold mb-2">
              <span>Buổi 3: Đọc hiểu văn học & sơ đồ tư duy môn xã hội</span>
              <span className="flex items-center gap-1 text-neutral-400 font-normal">
                <Clock className="w-3.5 h-3.5" /> 90 phút
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 mb-3">
              Hướng dẫn AI tóm tắt văn bản dài, phân tích hình tượng nhân vật và chuyển hóa tài liệu Lịch sử – Địa lý thành sơ đồ tư duy (mindmap) 1 trang dễ nhớ.
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Đầu ra: Sơ đồ tư duy 1 tác phẩm văn học cấp 2 có hình ảnh minh họa.</span>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold mb-2">
              <span>Buổi 4: Đàm thoại tiếng Anh & sửa lỗi viết luận cùng AI</span>
              <span className="flex items-center gap-1 text-neutral-400 font-normal">
                <Clock className="w-3.5 h-3.5" /> 90 phút
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 mb-3">
              Thực hành đàm thoại giọng nói theo chủ đề thuyết trình; AI chấm phát âm, sửa lỗi ngữ pháp tức thì và gợi ý từ vựng học thuật chuẩn Cambridge.
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Đầu ra: File ghi âm thuyết trình tiếng Anh 2 phút đã sửa hoàn thiện.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Tuần 3: Môn Tự nhiên & Đồ họa",
      content: (
        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold mb-2">
              <span>Buổi 5: Tư duy toán học & khoa học tự nhiên bằng hình ảnh</span>
              <span className="flex items-center gap-1 text-neutral-400 font-normal">
                <Clock className="w-3.5 h-3.5" /> 90 phút
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 mb-3">
              Mô phỏng hình học không gian 3D, cân bằng phản ứng hóa học và giải thích hiện tượng vật lý trực quan qua mô hình thực tế.
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Đầu ra: Infographic trực quan giải thích 1 chuyên đề khoa học.</span>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold mb-2">
              <span>Buổi 6: Thiết kế slide & đồ họa thuyết trình với Canva AI</span>
              <span className="flex items-center gap-1 text-neutral-400 font-normal">
                <Clock className="w-3.5 h-3.5" /> 90 phút
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 mb-3">
              Ứng dụng Canva Magic Design tạo slide tự động; kỹ thuật phối màu, dàn trang và tạo ảnh minh họa để tự tin thuyết trình trước lớp.
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Đầu ra: Bộ slide thuyết trình 8 trang chuẩn mỹ thuật.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Tuần 4: Tốt nghiệp & Showcase",
      content: (
        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold mb-2">
              <span>Buổi 7: Xây dựng dự án học tập tổng hợp (capstone project)</span>
              <span className="flex items-center gap-1 text-neutral-400 font-normal">
                <Clock className="w-3.5 h-3.5" /> 90 phút
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 mb-3">
              Học sinh chọn chủ đề thực tế yêu thích và kết hợp toàn bộ công cụ AI đã học để hoàn thiện bài nghiên cứu đa phương tiện hoàn chỉnh.
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Đầu ra: Dự án cá nhân hoàn chỉnh gồm nội dung, slide và poster.</span>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold mb-2">
              <span>Buổi 8: Báo cáo thuyết trình trước phụ huynh & trao chứng chỉ</span>
              <span className="flex items-center gap-1 text-neutral-400 font-normal">
                <Clock className="w-3.5 h-3.5" /> 90 phút
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 mb-3">
              Học sinh báo cáo sản phẩm trước hội đồng thầy cô và phụ huynh; nhận phản hồi chuyên môn và lộ trình phát triển kỹ năng dài hạn.
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <Award className="w-3.5 h-3.5 shrink-0" />
              <span>Đầu ra: Chứng chỉ hoàn thành khóa học & bảng đánh giá năng lực.</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="lo-trinh" className="py-20 bg-neutral-900/40 border-t border-neutral-900 relative">
      <Timeline
        data={data}
        title={
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Lộ trình bài bản
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              LỘ TRÌNH 8 BUỔI HỌC THỰC CHIẾN TỪ CĂN BẢN ĐẾN SẢN PHẨM ĐẦU TAY
            </h2>
          </div>
        }
        description={
          <p className="text-sm sm:text-base text-neutral-400 text-center md:text-left mt-2">
            Chương trình được thiết kế cô đọng trong 4 tuần (2 buổi/tuần), bảo đảm không gây quá tải lịch học ở trường của học sinh, cam kết 100% thời lượng là thực hành tương tác trực tiếp.
          </p>
        }
      />
    </section>
  );
}
