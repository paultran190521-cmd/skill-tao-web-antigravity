"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Học sinh cấp 2 (11 - 15 tuổi) có quá sớm để tiếp cận AI không?",
      a: "Hoàn toàn không! Cấp 2 là lứa tuổi vàng bắt đầu hình thành tư duy trừu tượng, tư duy phản biện và khả năng tự định hướng học tập. Tiếp cận AI đúng cách ở độ tuổi này giúp các em làm quen với công nghệ tương lai như một công cụ hỗ trợ tư duy, thay vì chỉ dùng điện thoại, máy tính để chơi game hay lướt mạng xã hội thụ động.",
    },
    {
      q: "Làm thế nào để đảm bảo con không dùng AI để gian lận hay chép bài giải sẵn?",
      a: "Toàn bộ giáo trình của AI Teen Master được xây dựng trên Phương pháp gợi mở Socratic. Giáo viên hướng dẫn học sinh cách ra lệnh để AI đóng vai người thầy phản biện, chỉ đưa ra các câu hỏi dẫn dắt, gợi ý tư duy từng bước chứ không giải hộ bài toán hay viết sẵn cả bài văn. Đồng thời, học sinh được học nguyên tắc đạo đức học đường, kiểm chứng thông tin và tự chịu trách nhiệm về sản phẩm của mình.",
    },
    {
      q: "Hình thức học online hay offline? Lịch học cụ thể như thế nào?",
      a: "Khóa học được tổ chức trực tuyến qua nền tảng tương tác chuyên dụng (Zoom Class có chia phòng thực hành nhóm nhỏ). Lịch học gồm 2 buổi/tuần (thường vào tối Thứ 7 và Sáng Chủ nhật hoặc các buổi tối trong tuần từ 19h30 đến 21h00), hoàn toàn không trùng lịch học chính khóa ở trường của con.",
    },
    {
      q: "Con cần chuẩn bị máy tính như thế nào? Có phải mua tài khoản AI trả phí không?",
      a: "Con chỉ cần 1 máy tính để bàn hoặc laptop có kết nối Internet ổn định, micro và webcam để tương tác với thầy cô. Trong suốt khóa học, học sinh được hướng dẫn sử dụng các phiên bản AI miễn phí tối ưu nhất (ChatGPT bản chuẩn, Claude, Canva Education, Gemini). Phụ huynh không cần tốn thêm bất kỳ chi phí mua tài khoản nào.",
    },
    {
      q: "Nếu con bận lịch thi học kỳ ở trường hoặc nghỉ ốm thì có được học bù không?",
      a: "Mọi buổi học đều được ghi hình chất lượng cao và lưu trữ trong tài khoản học viên trọn đời. Nếu con nghỉ buổi nào, trợ giảng 1 kèm 1 sẽ gửi video xem lại, tóm tắt bài giảng và tổ chức một buổi kèm riêng 30 phút để giải đáp bài tập, bảo đảm con không bị hổng kiến thức so với cả lớp.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-neutral-900/40 border-t border-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - ALL CAPS */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Giải đáp thắc mắc
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            CÂU HỎI THƯỜNG GẶP CỦA PHỤ HUYNH VỀ KHÓA HỌC AI
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Nếu phụ huynh có thêm bất kỳ câu hỏi nào khác, đội ngũ cố vấn giáo dục luôn sẵn sàng hỗ trợ 24/7 qua Hotline: 0988.123.456.
          </p>
        </div>

        {/* Accordion list */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-xl space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-800 rounded-2xl overflow-hidden transition-colors duration-200 hover:border-neutral-700"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-indigo-300 transition"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-indigo-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
