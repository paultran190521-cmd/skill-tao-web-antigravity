"use client";

import React from "react";
import { Sparkles, PhoneCall, Mail, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-16 text-neutral-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-base font-black text-white tracking-wider">AI TEEN MASTER</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Hệ thống đào tạo ứng dụng trí tuệ nhân tạo (AI) học đường chuẩn Socratic dành riêng cho học sinh trung học cơ sở tại Việt Nam.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Chương trình bảo chứng an toàn số</span>
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Về khóa học</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#loi-ich" className="hover:text-white transition">4 Trụ cột năng lực cốt lõi</a></li>
              <li><a href="#lo-trinh" className="hover:text-white transition">Lộ trình 8 buổi thực hành</a></li>
              <li><a href="#phuong-phap" className="hover:text-white transition">Phương pháp Socratic gợi mở</a></li>
              <li><a href="#giang-vien" className="hover:text-white transition">Đội ngũ giảng viên & trợ giảng</a></li>
              <li><a href="#hoc-phi" className="hover:text-white transition">Chính sách ưu đãi học phí</a></li>
            </ul>
          </div>

          {/* Col 3: Principles */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Cam kết học đường</h4>
            <ul className="space-y-2 text-xs">
              <li>Hoàn tiền 100% sau buổi học thử</li>
              <li>Nói không với giải hộ & chép bài sẵn</li>
              <li>Bảo mật thông tin & danh tính học sinh</li>
              <li>Kèm cặp 1-1 và gửi báo cáo tiến độ tuần</li>
              <li>Hỗ trợ tài khoản và câu lệnh trọn đời</li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Liên hệ tư vấn phụ huynh</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Hotline: 0988.123.456 (24/7)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Email: hotro@aiteenmaster.edu.vn</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Tòa nhà Innovation Hub, Quận Cầu Giấy, Hà Nội</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 AI TEEN MASTER. Bảo lưu toàn bộ quyền.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-neutral-400 transition">Chính sách quyền riêng tư</a>
            <a href="#" className="hover:text-neutral-400 transition">Quy chuẩn an toàn trẻ em</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
