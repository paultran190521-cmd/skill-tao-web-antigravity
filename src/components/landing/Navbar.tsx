"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Sparkles, PhoneCall, BookOpen, UserCheck, HelpCircle, Layers } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

import { CountdownTimer } from "./CountdownTimer";

export function Navbar() {
  const navItems = [
    {
      name: "Lợi ích",
      link: "#loi-ich",
      icon: <Sparkles className="h-4 w-4 text-neutral-400" />,
    },
    {
      name: "Lộ trình",
      link: "#lo-trinh",
      icon: <BookOpen className="h-4 w-4 text-neutral-400" />,
    },
    {
      name: "Phương pháp",
      link: "#phuong-phap",
      icon: <Layers className="h-4 w-4 text-neutral-400" />,
    },
    {
      name: "Giảng viên",
      link: "#giang-vien",
      icon: <UserCheck className="h-4 w-4 text-neutral-400" />,
    },
    {
      name: "Học phí",
      link: "#hoc-phi",
      icon: <HelpCircle className="h-4 w-4 text-neutral-400" />,
    },
  ];

  return (
    <>
      {/* Top Banner & Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 transition-all duration-300">
        {/* Top notice bar */}
        <div className="bg-gradient-to-r from-indigo-950/80 via-purple-900/80 to-indigo-950/80 border-b border-indigo-900/40 text-center py-1.5 px-4 text-xs text-indigo-200 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">Ưu đãi khai giảng sớm giảm 45% kết thúc sau:</span>
          </div>
          <CountdownTimer />
        </div>

        {/* Main bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition duration-200">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-black tracking-wider text-white">AI TEEN MASTER</span>
              <span className="block text-[10px] text-neutral-400 -mt-1 font-medium">Khóa học AI học tập THCS</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a href="#loi-ich" className="hover:text-white transition">Lợi ích</a>
            <a href="#lo-trinh" className="hover:text-white transition">Lộ trình</a>
            <a href="#phuong-phap" className="hover:text-white transition">Phương pháp</a>
            <a href="#giang-vien" className="hover:text-white transition">Giảng viên</a>
            <a href="#hoc-phi" className="hover:text-white transition">Học phí</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>

          {/* Action Call & CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0988123456"
              className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white py-1.5 px-3 rounded-lg border border-neutral-800 hover:border-neutral-700 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>0988.123.456</span>
            </a>

            <Magnetic intensity={0.4} range={60}>
              <a
                href="#dang-ky"
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all duration-200"
              >
                Đăng ký ngay
              </a>
            </Magnetic>
          </div>
        </div>
      </header>

      {/* Floating navigation on scroll */}
      <FloatingNav navItems={navItems} className="top-20" />
    </>
  );
}
