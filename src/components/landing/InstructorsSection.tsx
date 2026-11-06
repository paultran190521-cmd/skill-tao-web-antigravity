"use client";

import React from "react";
import { UserCheck, Award, GraduationCap, CheckCircle, Star } from "lucide-react";
import { motion } from "motion/react";

export function InstructorsSection() {
  const instructors = [
    {
      name: "ThS. Nguyễn Hoàng Nam",
      role: "Giám đốc học thuật & Giảng viên chính",
      exp: "Thạc sĩ Công nghệ Giáo dục (EdTech) tại Đại học Melbourne, hơn 10 năm nghiên cứu tâm lý học đường lứa tuổi THCS và phương pháp gợi mở Socratic.",
      tags: ["Chuyên gia AI Socratic", "10 năm kinh nghiệm", "Tác giả sách AI học đường"],
      badge: "Giảng viên trưởng",
      initials: "HN",
      avatarGradient: "from-blue-600 via-indigo-600 to-purple-600",
      rating: "4.98/5★ (780+ đánh giá)",
      stat: "1.200+ học sinh THCS",
    },
    {
      name: "Cô Lê Mai Phương",
      role: "Chuyên gia Thiết kế Đồ họa & Thuyết trình",
      exp: "Lead Designer tại agency công nghệ, chuyên gia đào tạo Canva Certified với hơn 5.000 học sinh tiếp cận kỹ năng visual thinking và làm slide.",
      tags: ["Canva Specialist", "Tư duy thị giác", "Huấn luyện viên thuyết trình"],
      badge: "Cố vấn sáng tạo",
      initials: "MP",
      avatarGradient: "from-purple-600 via-pink-600 to-rose-600",
      rating: "4.96/5★ (620+ đánh giá)",
      stat: "5.000+ bài thuyết trình xuất sắc",
    },
    {
      name: "Đội ngũ Trợ giảng 1 Kèm 1",
      role: "Đồng hành nhóm riêng 24/7",
      exp: "Các sinh viên xuất sắc thủ khoa, á khoa từ Đại học Sư phạm Hà Nội và Đại học Bách Khoa; kiên nhẫn giải đáp bài tập và gửi nhận xét cho phụ huynh.",
      tags: ["Theo sát từng bài tập", "Nhóm Zalo riêng", "Báo cáo tiến độ tuần"],
      badge: "Hỗ trợ 24/7",
      initials: "TG",
      avatarGradient: "from-emerald-600 via-teal-600 to-sky-600",
      rating: "5.0/5★ (Tuyệt đối)",
      stat: "Phản hồi trong 5 phút",
    },
  ];

  return (
    <section id="giang-vien" className="py-24 bg-neutral-900/50 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - ALL CAPS */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            Đội ngũ tâm huyết
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            ĐỘI NGŨ GIẢNG VIÊN & TRỢ GIẢNG ĐỒNG HÀNH 1 KÈM 1
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Sự kết hợp hoàn hảo giữa năng lực công nghệ AI hàng đầu và kỹ năng sư phạm am hiểu tâm lý lứa tuổi dậy thì của học sinh cấp 2.
          </p>
        </div>

        {/* Instructor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div>
                {/* Header with Avatar and Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.avatarGradient} p-0.5 shadow-lg flex items-center justify-center`}>
                      <div className="w-full h-full rounded-[14px] bg-neutral-950 flex items-center justify-center font-black text-white text-base">
                        {item.initials}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{item.rating}</span>
                      </div>
                      <span className="text-[11px] text-neutral-400 font-mono">{item.stat}</span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-xs font-medium border border-neutral-700">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                <p className="text-xs text-indigo-400 font-semibold mb-4">{item.role}</p>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {item.exp}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-neutral-800 flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-neutral-800/80 text-neutral-300 border border-neutral-700/60"
                  >
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
