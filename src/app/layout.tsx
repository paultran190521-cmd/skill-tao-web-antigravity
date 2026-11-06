import type { Metadata } from "next";
import { allFontVariables, beVietnamPro } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI TEEN MASTER - Khóa Học AI Ứng Dụng Trong Học Tập Dành Cho Học Sinh THCS",
  description: "Khóa học AI ứng dụng chuẩn phương pháp Socratic giúp học sinh cấp 2 tự học thông minh, bứt phá điểm số, làm slide thuyết trình và học tiếng Anh hiệu quả.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${allFontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
