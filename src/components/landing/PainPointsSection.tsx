"use client";

import React from "react";
import { AlertCircle, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function PainPointsSection() {
  const parentConcerns = [
    {
      title: "Sợ con lười suy nghĩ & chép bài giải sẵn",
      desc: "Lo ngại con phụ thuộc vào đáp án có sẵn của AI, dẫn đến thụ động tư duy và mất gốc kiến thức căn bản.",
    },
    {
      title: "Lo lắng con tiếp xúc nội dung độc hại trên mạng",
      desc: "Internet mở tiềm ẩn nhiều rủi ro khi học sinh chưa được trang bị bộ lọc thông tin và kỹ năng an toàn số.",
    },
    {
      title: "Không đủ thời gian & kiến thức mới để kèm con",
      desc: "Chương trình đổi mới với nhiều dự án và thuyết trình khiến phụ huynh khó theo sát hỗ trợ con mỗi tối.",
    },
    {
      title: "Sợ con bị tụt hậu so với bạn bè cùng trang lứa",
      desc: "Nhiều trường đã phổ cập AI sớm, trong khi con vẫn loay hoay với cách ghi chép thủ công tốn nhiều thời gian.",
    },
  ];

  const studentPressures = [
    {
      title: "Khối lượng bài vở cấp 2 tăng vọt quá nhanh",
      desc: "Học cùng lúc hơn 10 môn học với hàng chục bài kiểm tra, đề cương và dự án nhóm mỗi tuần.",
    },
    {
      title: "Học vẹt mau quên, thiếu phương pháp tự học sâu",
      desc: "Dành 3-4 tiếng mỗi tối làm bài tập nhưng khi vào phòng thi lại lúng túng vì không hiểu bản chất vấn đề.",
    },
    {
      title: "Áp lực thuyết trình và làm việc nhóm trước lớp",
      desc: "Mất cả buổi tối tìm ảnh, làm slide PowerPoint đơn điệu và lo lắng khi phải đứng nói trước đám đông.",
    },
    {
      title: "Rụt rè khi học ngoại ngữ vì sợ phát âm sai",
      desc: "Thiếu môi trường luyện nói tiếng Anh hàng ngày, ngại giơ tay phát biểu vì sợ thầy cô và bạn bè chê cười.",
    },
  ];

  return (
    <section className="py-20 bg-neutral-900/60 border-t border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - ALL CAPS, punchy */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            Thấu hiểu trăn trở
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            TRĂN TRỞ CỦA CHA MẸ & ÁP LỰC HỌC TẬP CỦA CON
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Khoảng cách giữa phương pháp học cũ và yêu cầu của kỷ nguyên số đang tạo ra áp lực đè nặng lên cả gia đình.
          </p>
        </div>

        {/* Dual Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Column 1: Parent Concerns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Trăn trở của cha mẹ</h3>
                  <p className="text-xs text-neutral-400 font-medium">Băn khoăn khi cho con tiếp cận trí tuệ nhân tạo</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {parentConcerns.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-200"
                  >
                    <h4 className="text-sm font-semibold text-neutral-200 flex items-start gap-2">
                      <span className="text-indigo-400 text-xs mt-0.5">●</span>
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 pl-3.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-500 italic">
              * Khảo sát từ 850 phụ huynh có con học cấp 2 tại Hà Nội và TP.HCM.
            </div>
          </motion.div>

          {/* Column 2: Student Pressures */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Áp lực thực tế của con</h3>
                  <p className="text-xs text-neutral-400 font-medium">Những quá tải vô hình học sinh THCS đang gánh chịu</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {studentPressures.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-200"
                  >
                    <h4 className="text-sm font-semibold text-neutral-200 flex items-start gap-2">
                      <span className="text-indigo-400 text-xs mt-0.5">●</span>
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 pl-3.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-500 italic">
              * Học sinh dành trung bình 28 giờ/tuần cho việc làm bài tập sau giờ học chính khóa.
            </div>
          </motion.div>
        </div>

        {/* Bridge Solution Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/50 via-purple-950/50 to-neutral-900 p-6 sm:p-8 text-center flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-left max-w-2xl">
            <h4 className="text-base sm:text-xl font-bold text-white mb-2">
              Giải pháp không phải là cấm đoán, mà là dạy con sử dụng công nghệ văn minh!
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              Khóa học này được thiết kế để biến AI thành công cụ khơi gợi đam mê học hỏi, giúp con chủ động tự giải quyết vấn đề và giải phóng hoàn toàn thời gian cho cả gia đình.
            </p>
          </div>

          <a
            href="#loi-ich"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-600/30 transition shrink-0"
          >
            <span>Xem 4 trụ cột đào tạo đột phá</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
