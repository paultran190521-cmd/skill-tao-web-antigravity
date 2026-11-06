"use client";

import React, { useState } from "react";
import { PersonalWebsite } from "@/components/personal/PersonalWebsite";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { CurriculumSection } from "@/components/landing/CurriculumSection";
import { LearningLoopSection } from "@/components/landing/LearningLoopSection";
import { InstructorsSection } from "@/components/landing/InstructorsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";
import { MobileBottomBar } from "@/components/landing/MobileBottomBar";
import { User, GraduationCap } from "lucide-react";

export default function Home() {
  const [viewMode, setViewMode] = useState<"personal" | "course">("personal");

  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      {/* Floating View Switcher Bar */}
      <aside aria-label="Bộ chuyển đổi giao diện mẫu" className="fixed bottom-4 right-4 z-50 p-1 rounded-full border border-white/10 bg-neutral-900/90 backdrop-blur-md shadow-2xl flex items-center gap-1 text-xs">
        <button
          onClick={() => setViewMode("personal")}
          className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
            viewMode === "personal"
              ? "bg-white text-black font-semibold shadow"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>Trang cá nhân (Resend)</span>
        </button>
        <button
          onClick={() => setViewMode("course")}
          className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
            viewMode === "course"
              ? "bg-white text-black font-semibold shadow"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Khóa học AI (EdTech)</span>
        </button>
      </aside>

      {/* Main Content */}
      {viewMode === "personal" ? (
        <PersonalWebsite />
      ) : (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden w-full relative">
          <Navbar />
          <HeroSection />
          <PainPointsSection />
          <BenefitsSection />
          <CurriculumSection />
          <LearningLoopSection />
          <InstructorsSection />
          <TestimonialsSection />
          <PricingSection />
          <GuaranteeSection />
          <FaqSection />
          <FinalCtaSection />
          <Footer />
          <MobileBottomBar />
        </div>
      )}
    </div>
  );
}
