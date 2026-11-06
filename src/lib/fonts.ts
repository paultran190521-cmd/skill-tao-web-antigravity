import {
  Be_Vietnam_Pro,
  Montserrat,
  Inter,
  Plus_Jakarta_Sans,
  Manrope,
  Space_Grotesk,
  Lexend,
  Epilogue,
  Archivo,
  Work_Sans,
  Mulish,
  Lora,
  Playfair_Display,
} from "next/font/google";

/**
 * 2 FONT ƯU TIÊN SỐ 1 CHO WEBSITE TIẾNG VIỆT
 */
export const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-montserrat",
  display: "swap",
});

/**
 * 10 FONT HIỆN ĐẠI CHUẨN QUỐC TẾ HỖ TRỢ TIẾNG VIỆT 100% NATIVE
 */
export const inter = Inter({
  subsets: ["vietnamese", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["vietnamese", "latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["vietnamese", "latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["vietnamese", "latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const lexend = Lexend({
  subsets: ["vietnamese", "latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const epilogue = Epilogue({
  subsets: ["vietnamese", "latin"],
  variable: "--font-epilogue",
  display: "swap",
});

export const archivo = Archivo({
  subsets: ["vietnamese", "latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const workSans = Work_Sans({
  subsets: ["vietnamese", "latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const mulish = Mulish({
  subsets: ["vietnamese", "latin"],
  variable: "--font-mulish",
  display: "swap",
});

export const lora = Lora({
  subsets: ["vietnamese", "latin"],
  variable: "--font-lora",
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["vietnamese", "latin"],
  variable: "--font-playfair",
  display: "swap",
});

/**
 * Chuỗi kết hợp tất cả các biến font CSS để nhúng vào RootLayout <html>
 */
export const allFontVariables = [
  beVietnamPro.variable,
  montserrat.variable,
  inter.variable,
  plusJakartaSans.variable,
  manrope.variable,
  spaceGrotesk.variable,
  lexend.variable,
  epilogue.variable,
  archivo.variable,
  workSans.variable,
  mulish.variable,
  lora.variable,
  playfairDisplay.variable,
].join(" ");
