"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { MessageSquare, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Trước đây tối nào con cũng thức đến 11h đêm loay hoay làm bài tập và than thở môn Văn quá dài. Sau khóa học, cháu biết dùng AI để tóm tắt ý chính và tự lập dàn ý bằng mindmap. Điểm thi giữa kỳ của con tăng từ 6.5 lên 8.5 mà tối nào cũng được ngủ đúng giờ!",
      name: "Chị Hoàng Lan Anh",
      title: "Phụ huynh em Gia Huy (Lớp 7, Trường THCS Cầu Giấy, Hà Nội)",
    },
    {
      quote:
        "Em thích nhất buổi học làm slide Canva AI và nói chuyện với trợ lý tiếng Anh. Lúc trước em rất sợ bị cô giáo gọi lên bảng thuyết trình, giờ em tự tin làm slide cực đẹp và được cả lớp vỗ tay khen ngợi!",
      name: "Em Nguyễn Đức Minh",
      title: "Học sinh Lớp 8, Trường THCS Lê Quý Đôn, TP.HCM",
    },
    {
      quote:
        "Tôi từng rất sợ con dùng AI để gian lận hay chép bài văn mẫu trên mạng. Nhưng khi theo dõi con học, thấy thầy cô dạy phương pháp đặt câu hỏi gợi mở Socratic cực kỳ chặt chẽ, tôi hoàn toàn yên tâm. Con tôi giờ tự giác và có tư duy phản biện tốt hơn hẳn.",
      name: "Anh Trần Quốc Bảo",
      title: "Kỹ sư phần mềm - Phụ huynh em Bảo Ngọc (Lớp 9, Đà Nẵng)",
    },
    {
      quote:
        "Nhờ các câu lệnh gợi mở của thầy Nam, những bài toán hình học không gian trước đây em nhìn như ma trận giờ được minh họa bằng hình ảnh 3D rất trực quan. Em không còn thấy sợ môn Toán nữa!",
      name: "Em Vũ Thảo Linh",
      title: "Học sinh Lớp 8, Trường Vinschool Hà Nội",
    },
    {
      quote:
        "Khóa học rất nhân văn. Các thầy cô không chỉ dạy kỹ thuật mà còn dạy con nguyên tắc đạo đức không được đạo văn và cách bảo vệ dữ liệu cá nhân. Rất đáng tiền cho tương lai của con!",
      name: "Chị Phạm Thu Hương",
      title: "Bác sĩ - Phụ huynh em Tuấn Kiệt (Lớp 6, Hải Phòng)",
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Heading - ALL CAPS */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            Bằng chứng xã hội thực tế
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            CẢM NHẬN THỰC TẾ TỪ HỌC SINH & PHỤ HUYNH KHÓA TRƯỚC
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Hơn 1.200 học sinh THCS trên toàn quốc đã bứt phá tư duy và làm chủ công cụ tự học thông minh cùng AI Teen Master.
          </p>
        </div>
      </div>

      {/* Infinite moving cards carousel */}
      <div className="relative">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
          className="py-4"
        />
      </div>
    </section>
  );
}
