"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Sparkles, ArrowRight, ShieldCheck, Clock, CheckCircle, Loader2 } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export function FinalCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    studentGrade: "Lớp 7",
    packageChoice: "Gói Toàn diện VIP",
  });

  const validatePhone = (phone: string) => {
    const vnPhoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    return vnPhoneRegex.test(phone.replace(/\s+/g, ""));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      setPhoneError("Vui lòng nhập số điện thoại Việt Nam hợp lệ (10 chữ số, ví dụ: 0988 123 456)");
      return;
    }
    setPhoneError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="dang-ky" className="py-24 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="rounded-3xl border border-indigo-500/30 bg-neutral-900/90 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl shadow-indigo-500/10">
          {/* Header - ALL CAPS */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Clock className="w-3.5 h-3.5" />
                Chỉ còn 8 suất học bổng sớm
              </span>
              <span className="text-neutral-500">•</span>
              <CountdownTimer />
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              ĐĂNG KÝ GIỮ CHỖ HÔM NAY ĐỂ NHẬN ƯU ĐÃI HỌC PHÍ 45%
            </h2>
            <p className="mt-3 text-xs sm:text-base text-neutral-300">
              Điền thông tin bên dưới để nhận ngay buổi học thử miễn phí cùng Thạc sĩ và Bộ tài liệu 500+ Prompt độc quyền trị giá 1.500.000đ.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Đăng ký thành công!</h3>
              <p className="text-xs sm:text-sm text-neutral-300 mb-4">
                Cảm ơn phụ huynh <strong>{formData.parentName || "bạn"}</strong>. Đội ngũ cố vấn học thuật sẽ gọi điện thoại hoặc gửi tin nhắn Zalo qua số <strong>{formData.phone}</strong> trong vòng 15 phút để tư vấn lịch học thử cho con.
              </p>
              <span className="text-xs text-emerald-400 font-mono">Mã ưu đãi đã kích hoạt: TEENAI-45PERCENT</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Họ và tên phụ huynh *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-800 bg-neutral-950/80 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Số điện thoại Zalo nhận tư vấn *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0988 123 456"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (phoneError) setPhoneError("");
                  }}
                  className={`w-full px-4 py-3 rounded-xl border bg-neutral-950/80 text-white placeholder-neutral-500 text-sm focus:outline-none transition ${
                    phoneError ? "border-red-500" : "border-neutral-800 focus:border-indigo-500"
                  }`}
                />
                {phoneError && (
                  <p className="text-red-400 text-xs mt-1.5">{phoneError}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Khối lớp hiện tại của con
                  </label>
                  <select
                    value={formData.studentGrade}
                    onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-800 bg-neutral-950/80 text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                  >
                    <option value="Lớp 6">Lớp 6 (11 - 12 tuổi)</option>
                    <option value="Lớp 7">Lớp 7 (12 - 13 tuổi)</option>
                    <option value="Lớp 8">Lớp 8 (13 - 14 tuổi)</option>
                    <option value="Lớp 9">Lớp 9 (14 - 15 tuổi)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Gói học quan tâm
                  </label>
                  <select
                    value={formData.packageChoice}
                    onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-800 bg-neutral-950/80 text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                  >
                    <option value="Gói Toàn diện VIP">Gói Toàn diện VIP (Khuyên dùng)</option>
                    <option value="Gói Tiêu chuẩn">Gói Tiêu chuẩn (Nền tảng)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:opacity-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Đang xử lý đăng ký...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-amber-300" />
                      <span>Xác nhận đăng ký nhận ưu đãi & học thử</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Bảo mật 100% thông tin cá nhân theo tiêu chuẩn an toàn học đường.</span>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Background beams animation */}
      <BackgroundBeams className="opacity-40 pointer-events-none" />
    </section>
  );
}
