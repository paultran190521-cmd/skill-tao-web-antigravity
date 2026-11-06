"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Sparkles } from "lucide-react";

export function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (e.g. 400px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-800 p-3 flex items-center gap-2 shadow-2xl transition-all duration-300">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0988123456"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 border border-neutral-700 text-sky-400 font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition"
      >
        <MessageCircle className="w-4 h-4 text-sky-400 shrink-0" />
        <span>Nhắn Zalo tư vấn</span>
      </a>

      {/* Register CTA Button */}
      <a
        href="#dang-ky"
        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/30 active:scale-95 transition"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
        <span>Giữ suất ưu đãi 45%</span>
      </a>
    </div>
  );
}
