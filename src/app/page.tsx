"use client";

import React from "react";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden w-full relative">
      {/* 1. Header & Floating Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Pain Points & Empathy Bridge */}
      <PainPointsSection />

      {/* 4. Core Benefits (Bento Grid) */}
      <BenefitsSection />

      {/* 5. Curriculum Timeline */}
      <CurriculumSection />

      {/* 6. Interactive Learning Loop Diagram */}
      <LearningLoopSection />

      {/* 7. Instructors & Mentors */}
      <InstructorsSection />

      {/* 8. Social Proof & Testimonials Carousel */}
      <TestimonialsSection />

      {/* 9. Pricing Tiers & Bonuses */}
      <PricingSection />

      {/* 10. Risk-Reversal Guarantee */}
      <GuaranteeSection />

      {/* 11. FAQ Accordion */}
      <FaqSection />

      {/* 12. Final CTA & Registration */}
      <FinalCtaSection />

      {/* 13. Footer */}
      <Footer />

      {/* 14. Mobile Sticky Conversion Bar */}
      <MobileBottomBar />
    </div>
  );
}
