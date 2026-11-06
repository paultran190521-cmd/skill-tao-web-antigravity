"use client";

import React from "react";
import { motion } from "motion/react";
import { BookOpen, Bot, Brain, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

interface StepNode {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  actor: string;
  badgeColor: string;
}

const steps: StepNode[] = [
  {
    step: "01",
    title: "Tiếp nhận đề bài & xác định mục tiêu",
    desc: "Học sinh xác định rõ môn học (Toán, Văn, Anh, KHTN) và vấn đề cần giải quyết, không sao chép đề bài máy móc.",
    icon: <BookOpen className="w-6 h-6 text-sky-400" />,
    actor: "Học sinh chủ động",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
  },
  {
    step: "02",
    title: "Ra lệnh gợi mở tư duy (Prompting)",
    desc: "Học sinh dùng công thức ra lệnh Socratic để AI đóng vai gia sư hướng dẫn từng bước tư duy, tuyệt đối không đưa ra đáp án sẵn.",
    icon: <Bot className="w-6 h-6 text-indigo-400" />,
    actor: "Trợ lý AI đồng hành",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  },
  {
    step: "03",
    title: "Tự lập luận & đúc kết kiến thức",
    desc: "Dựa vào gợi ý, học sinh tự suy nghĩ giải bài, tạo sơ đồ tư duy (mindmap) hoặc bài thuyết trình để nhớ sâu bản chất.",
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    actor: "Học sinh tự giải quyết",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  {
    step: "04",
    title: "Thầy cô cố vấn & kiểm chứng thực tế",
    desc: "Đội ngũ chuyên gia và trợ giảng 1-1 kiểm tra sản phẩm, góp ý phản xạ tư duy và cấp chứng chỉ tiến bộ từng tuần.",
    icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
    actor: "Giảng viên phản hồi",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
];

export function LearningLoopDiagram() {
  return (
    <div className="w-full relative py-8">
      {/* Background visual glow */}
      <div className="absolute inset-0 bg-radial from-indigo-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Grid of Steps with Connected Light Beams */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
        {steps.map((item, index) => (
          <div key={item.step} className="relative flex flex-col">
            {/* Step Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative flex-1 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 backdrop-blur-xl hover:border-neutral-700 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Header inside card */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-neutral-600 font-mono">
                    {item.step}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border mb-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.step === "02" ? "bg-indigo-400 animate-ping" : "bg-neutral-400"}`} />
                  <span className={item.badgeColor}>{item.actor}</span>
                </div>

                <h4 className="text-base font-semibold text-white mb-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Status bar */}
              <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  Rèn luyện tư duy
                </span>
                <span className="text-neutral-400 font-mono">Bước {index + 1}/4</span>
              </div>
            </motion.div>

            {/* Connecting Arrow for Desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 items-center justify-center text-indigo-400 shadow-md">
                <ArrowRight className="w-4 h-4 animate-pulse" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Loop note banner */}
      <div className="mt-8 rounded-xl border border-indigo-500/20 bg-indigo-950/30 p-4 text-center max-w-2xl mx-auto backdrop-blur-md">
        <p className="text-xs sm:text-sm text-indigo-200">
          ✨ <strong>Vòng lặp tư duy khép kín:</strong> AI không làm hộ bài tập mà đóng vai trò đòn bẩy kích thích học sinh tự đặt câu hỏi phản biện, phân tích logic và làm chủ kiến thức vững chắc.
        </p>
      </div>
    </div>
  );
}
