"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Terminal, 
  Copy, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Globe 
} from "lucide-react";

export function ResendTemplate() {
  const [activeLang, setActiveLang] = useState<"node" | "python" | "curl">("node");
  const [copied, setCopied] = useState(false);

  const snippets = {
    node: `import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "onboarding@resend.dev",
  to: "user@gmail.com",
  subject: "Chào mừng bạn đến với nền tảng mới!",
  html: "<p>Email của bạn đã được gửi thành công!</p>"
});`,
    python: `import resend

resend.api_key = "re_123456789"

params = {
  "from": "onboarding@resend.dev",
  "to": ["user@gmail.com"],
  "subject": "Chào mừng bạn!",
  "html": "<p>Gửi qua Python SDK trong 2 dòng code.</p>"
}

resend.Emails.send(params)`,
    curl: `curl -X POST 'https://api.resend.com/emails' \\
  -H 'Authorization: Bearer re_123456789' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "from": "onboarding@resend.dev",
    "to": "user@gmail.com",
    "subject": "Gửi email trực tiếp qua REST API",
    "html": "<strong>Tốc độ phản hồi dưới 30ms</strong>"
  }'`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans relative">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-white flex items-center justify-center text-black font-black">
              <Mail className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold text-sm tracking-tight text-white">ResendDev</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-400">
            <a href="#tai-lieu" className="hover:text-white transition-colors">Tài liệu API</a>
            <a href="#tinh-nang" className="hover:text-white transition-colors">Khả năng gửi</a>
            <a href="#bang-gia" className="hover:text-white transition-colors">Bảng giá</a>
          </nav>

          <a 
            href="#dang-ky"
            className="px-3.5 py-1.5 rounded-md bg-white text-black hover:bg-neutral-200 text-xs font-semibold transition-colors"
          >
            Lấy mã API miễn phí
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Nền tảng gửi email được 100.000+ lập trình viên tin dùng
          </div>

          {/* Main Title - ALL CAPS according to Vietnamese rule */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight max-w-3xl">
            NỀN TẢNG EMAIL DÀNH RIÊNG CHO{" "}
            <span className="text-neutral-400">
              NHÀ PHÁT TRIỂN PHẦN MỀM
            </span>
          </h1>

          {/* Subheading - Sentence case */}
          <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
            API gửi email giao dịch hiện đại nhất: Thiết kế bằng code, tỷ lệ vào hộp thư đến 99.8% và xem trước giao diện tức thì.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a 
              href="#bat-dau"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-black text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-lg"
            >
              Bắt đầu tích hợp
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#tai-lieu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-xs sm:text-sm font-medium text-neutral-300 transition-colors"
            >
              Đọc tài liệu API
            </a>
          </div>

          {/* Interactive Code Playground */}
          <div className="mt-14 w-full max-w-2xl rounded-xl border border-neutral-800 bg-neutral-950 p-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-900 text-xs">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setActiveLang("node")}
                  className={`px-2.5 py-1 rounded transition-colors ${activeLang === "node" ? "bg-neutral-800 text-white font-medium" : "text-neutral-500 hover:text-white"}`}
                >
                  Node.js
                </button>
                <button 
                  onClick={() => setActiveLang("python")}
                  className={`px-2.5 py-1 rounded transition-colors ${activeLang === "python" ? "bg-neutral-800 text-white font-medium" : "text-neutral-500 hover:text-white"}`}
                >
                  Python
                </button>
                <button 
                  onClick={() => setActiveLang("curl")}
                  className={`px-2.5 py-1 rounded transition-colors ${activeLang === "curl" ? "bg-neutral-800 text-white font-medium" : "text-neutral-500 hover:text-white"}`}
                >
                  cURL
                </button>
              </div>
              <button 
                onClick={handleCopy}
                className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
                title="Sao chép mã"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <pre className="mt-4 font-mono text-xs sm:text-sm text-neutral-300 overflow-x-auto leading-relaxed">
              <code>{snippets[activeLang]}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-neutral-900 text-center text-xs text-neutral-600">
        <p>© 2026 ResendDev. Đơn giản hóa hạ tầng email toàn cầu.</p>
      </footer>
    </div>
  );
}
