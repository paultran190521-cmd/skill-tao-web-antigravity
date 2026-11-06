"use client";

import React from "react";
import { ShieldCheck, RefreshCw, Award, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";

export function GuaranteeSection() {
  const guarantees = [
    {
      icon: <RefreshCw className="w-8 h-8 text-emerald-400" />,
      title: "Cam kết hoàn tiền 100% không điều kiện",
      desc: "Nếu sau buổi học đầu tiên, con hoặc phụ huynh cảm thấy phương pháp không phù hợp, trung tâm xin hoàn lại 100% học phí ngay lập tức mà không hỏi thêm bất kỳ câu hỏi nào.",
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-400" />,
      title: "Cam kết tối thiểu 3 sản phẩm thực tế đầu ra",
      desc: "Mỗi học sinh sau khi tốt nghiệp đều tự tay hoàn thiện ít nhất 1 bài thuyết trình chuyên nghiệp, 1 sơ đồ tư duy môn học và 1 dự án đa phương tiện báo cáo trước phụ huynh.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-purple-400" />,
      title: "Đồng hành hỏi đáp trọn đời sau khóa học",
      desc: "Học sinh tiếp tục được duy trì tài khoản trong cộng đồng AI Teen Club, tham gia các buổi workshop cập nhật công cụ mới hàng tháng hoàn toàn miễn phí.",
    },
  ];

  return (
    <section className="py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 via-neutral-900/90 to-neutral-950 p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Heading - ALL CAPS */}
          <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              Bảo chứng uy tín 100%
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              CAM KẾT CHẤT LƯỢNG & BẢO CHỨNG RỦI RO HOÀN TIỀN 100%
            </h2>
            <p className="mt-3 text-xs sm:text-base text-neutral-400">
              Chúng tôi hiểu sự cẩn trọng của cha mẹ khi đầu tư giáo dục cho con. Mọi rủi ro thuộc về chúng tôi!
            </p>
          </div>

          {/* 3 Guarantees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {guarantees.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/80 hover:border-emerald-500/40 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-neutral-800 border border-neutral-700/80 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
