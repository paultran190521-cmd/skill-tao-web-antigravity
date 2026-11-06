# CLAUDE CODE INSTRUCTIONS FOR THIS REPOSITORY

This repository contains a high-converting, modern Next.js 15 landing page project designed with Tailwind CSS v4, Motion (Framer Motion), and 9 UI effect libraries (Aceternity UI, LightsWind, Motion Primitives, Kokonut, Eldora, etc.).

## Commands
- Dev server: `npm run dev`
- Production build: `npm run build`
- Start server: `npm run start`
- Lint: `npm run lint`

## Project Structure
- `src/app/page.tsx`: Main page assembling all landing sections.
- `src/app/globals.css`: Tailwind v4 configuration, theme colors, and custom `@keyframes scroll` for moving cards.
- `src/components/landing/`: High-conversion modular sections (Navbar, HeroSection, BenefitsSection, CurriculumSection, InstructorsSection, PricingSection, TestimonialsSection, FaqSection, FinalCtaSection, Footer, MobileBottomBar).
- `src/components/ui/`: Reusable UI effect components (InfiniteMovingCards, AuroraBackground, FlipWords, Magnetic, MovingBorder, CardSpotlight, BentoGrid, BackgroundGradient, BackgroundBeams, Timeline, 3d-card, Accordion).
- `src/lib/fonts.ts`: 12 modern Vietnamese-supported Google fonts (`Be Vietnam Pro`, `Montserrat`, `Inter`, `Plus Jakarta Sans`, etc.).
- `.agents/skills/skill-web/`: Integrated agent skill for web consulting, CRO layout design, and component selection.

## Mandatory Design & Vietnamese Typography Rules
1. **Capitalization**:
   - Main Headings (H1, Hero, major section titles): MUST be concise UPPERCASE / ALL CAPS (5–8 words max per line, never whole sentences).
   - Subheadings, cards, button labels, chips, body text: MUST use Sentence case (only capitalize the first letter). NEVER use English Title Case.
2. **Navigation labels**: Must be 1–2 words max (`Lợi ích`, `Lộ trình`, `Phương pháp`, `Học phí`, `FAQ`, `Đăng ký ngay`).
3. **Color Palette (60-30-10)**: 60% dominant dark/light background (`neutral-950`), 30% structural neutral surfaces/borders, 10% primary accent (`indigo-600`) for the primary CTA button. Do not create rainbow neon clutter.
4. **Focal Point**: Exactly 1 primary motion/visual focal point per viewport. Primary CTA must have the highest contrast.
5. **Scannability**: Content blocks must follow "Bite - Snack - Meal" structure instead of walls of text.
