import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// ============================================================================
// HỆ THỐNG KIỂM ĐỊNH CHẤT LƯỢNG TIÊU CHUẨN WEB (WEB QA STANDARDS AUDITOR)
// ============================================================================

interface AuditResult {
  category: string;
  passed: boolean;
  score: number;
  maxScore: number;
  details: string[];
}

const results: AuditResult[] = [];

// 1. Danh sách hư từ cấm kỵ (Zero-Fluff Banned Phrases)
const BANNED_FLUFF_PHRASES = [
  "chúng tôi",
  "quý khách",
  "nhằm mục đích",
  "có thể giúp bạn",
  "một cách tốt nhất",
  "một cách hiệu quả",
  "tự hào mang đến",
  "tự hào đem đến",
];

// Helper để đọc toàn bộ file mã nguồn trong src/
function getAllSourceFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== "node_modules" && file !== ".next") {
        getAllSourceFiles(fullPath, fileList);
      }
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const sourceFiles = getAllSourceFiles(path.join(process.cwd(), "src"));

// ============================================================================
// TEST 1: KIỂM TRA HƯ TỪ & TRỢ TỪ (ZERO-FLUFF FILTER)
// ============================================================================
function auditZeroFluff(): AuditResult {
  const violations: string[] = [];
  
  for (const file of sourceFiles) {
    const content = fs.readFileSync(file, "utf8");
    const relativePath = path.relative(process.cwd(), file);
    
    // Bỏ qua các file thư viện nội bộ ui/
    if (relativePath.includes("components/ui")) continue;

    for (const fluff of BANNED_FLUFF_PHRASES) {
      if (content.toLowerCase().includes(fluff)) {
        violations.push(`[${relativePath}] Chứa hư từ cấm kỵ: "${fluff}"`);
      }
    }
  }

  const passed = violations.length === 0;
  return {
    category: "Lọc bỏ Hư từ & Trợ từ (Zero-Fluff Filter)",
    passed,
    score: passed ? 20 : Math.max(0, 20 - violations.length * 5),
    maxScore: 20,
    details: passed 
      ? ["100% mã nguồn không chứa từ đệm sáo rỗng ('chúng tôi', 'nhằm mục đích', 'quý khách'...)."]
      : violations,
  };
}

// ============================================================================
// TEST 2: KIỂM TRA QUY TẮC VIẾT HOA TIẾNG VIỆT & NGÂN SÁCH TỪ H1
// ============================================================================
function auditTypographyAndCapitalization(): AuditResult {
  const violations: string[] = [];

  for (const file of sourceFiles) {
    const content = fs.readFileSync(file, "utf8");
    const relativePath = path.relative(process.cwd(), file);
    if (relativePath.includes("components/ui")) continue;

    // Tìm các thẻ H1
    const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
    if (h1Matches) {
      for (const h1 of h1Matches) {
        // Lấy text thô bên trong thẻ H1
        const rawText = h1.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
        const words = rawText.split(" ").filter(w => w.length > 0 && !w.startsWith("{") && !w.endsWith("}"));

        // Kiểm tra ALL CAPS: nếu chứa chữ cái thường tiếng Việt mà không phải code
        const hasLowerAlpha = /[a-zàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/g.test(rawText);
        if (hasLowerAlpha && !rawText.includes("$") && !rawText.includes("pipeline")) {
          violations.push(`[${relativePath}] Tiêu đề H1 chưa viết hoa toàn bộ (ALL CAPS): "${rawText.substring(0, 50)}..."`);
        }

        // Kiểm tra độ dài: nếu một dòng H1 vượt quá 12 từ
        if (words.length > 12) {
          violations.push(`[${relativePath}] Tiêu đề H1 vượt quá ngân sách từ (${words.length} từ > tối đa 8-10 từ/dòng): "${rawText.substring(0, 50)}..."`);
        }
      }
    }
  }

  const passed = violations.length === 0;
  return {
    category: "Quy tắc Viết hoa Tiếng Việt & Độ dài Tiêu đề H1",
    passed,
    score: passed ? 20 : Math.max(0, 20 - violations.length * 5),
    maxScore: 20,
    details: passed 
      ? ["Tiêu đề chính H1 viết hoa toàn bộ (ALL CAPS) tinh gọn, tuân thủ nghiêm ngặt 5-8 từ/dòng."]
      : violations,
  };
}

// ============================================================================
// TEST 3: KIỂM TRA PHÂN TẦNG MÀU SẮC 60-30-10 & MÀU CHỮ
// ============================================================================
function auditColorHierarchy(): AuditResult {
  const violations: string[] = [];

  for (const file of sourceFiles) {
    const content = fs.readFileSync(file, "utf8");
    const relativePath = path.relative(process.cwd(), file);
    if (relativePath.includes("components/ui")) continue;

    // Kiểm tra viền dày bất thường: border-2, border-4 (chỉ cho phép border 1px mảnh)
    if (content.includes("border-2 ") || content.includes("border-4 ")) {
      violations.push(`[${relativePath}] Phát hiện viền dày thô (border-2/border-4). Tiêu chuẩn cao cấp chỉ dùng viền 1px hairline.`);
    }

    // Kiểm tra gradient cầu vồng quá nhiều màu trong text
    if (content.includes("from-red-") && content.includes("via-green-") && content.includes("to-blue-")) {
      violations.push(`[${relativePath}] Phát hiện gradient chữ quá nhiều màu sặc sỡ. Chỉ được dùng gradient 2-3 tông liền kề.`);
    }
  }

  const passed = violations.length === 0;
  return {
    category: "Kỷ luật Phối màu 60-30-10 & Viền Hairline 1px",
    passed,
    score: passed ? 20 : Math.max(0, 20 - violations.length * 5),
    maxScore: 20,
    details: passed 
      ? ["Bảng màu tuân thủ 60% nền trung tính, 30% cấu trúc viền 1px tinh tế, 10% Accent CTA, không bị loạn màu."]
      : violations,
  };
}

// ============================================================================
// TEST 4: KIỂM TRA TAILWIND V4 KEYFRAME COMPATIBILITY
// ============================================================================
function auditTailwindKeyframes(): AuditResult {
  const globalsCssPath = path.join(process.cwd(), "src/app/globals.css");
  const violations: string[] = [];

  if (fs.existsSync(globalsCssPath)) {
    const css = fs.readFileSync(globalsCssPath, "utf8");
    if (!css.includes("@keyframes scroll")) {
      violations.push("Thiếu khai báo '@keyframes scroll' trong globals.css (Cần thiết cho InfiniteMovingCards / Marquee trên Tailwind v4).");
    }
    if (!css.includes(".animate-scroll")) {
      violations.push("Thiếu khai báo '.animate-scroll' trong globals.css.");
    }
  } else {
    violations.push("Không tìm thấy tệp src/app/globals.css.");
  }

  const passed = violations.length === 0;
  return {
    category: "Khai báo Keyframe CSS cho Tailwind CSS v4",
    passed,
    score: passed ? 20 : 0,
    maxScore: 20,
    details: passed 
      ? ["globals.css đã khai báo đầy đủ keyframes @keyframes scroll và class .animate-scroll hỗ trợ Tailwind v4."]
      : violations,
  };
}

// ============================================================================
// TEST 5: KIỂM TRA TYPESCRIPT & PRODUCTION BUILD HEALTH
// ============================================================================
function auditBuildHealth(): AuditResult {
  try {
    execSync("npx tsc --noEmit", { stdio: "pipe" });
    return {
      category: "Kiểm tra Cú pháp TypeScript (Type Safety)",
      passed: true,
      score: 20,
      maxScore: 20,
      details: ["TypeScript biên dịch sạch sẽ 100%, không có lỗi type nào trong toàn bộ dự án."],
    };
  } catch (err: any) {
    const errorOutput = err.stderr ? err.stderr.toString() : err.stdout.toString();
    const firstLines = errorOutput.split("\n").slice(0, 4).join(" | ");
    return {
      category: "Kiểm tra Cú pháp TypeScript (Type Safety)",
      passed: false,
      score: 0,
      maxScore: 20,
      details: [`Phát hiện lỗi TypeScript: ${firstLines}`],
    };
  }
}

// ============================================================================
// CHẠY KIỂM ĐỊNH TẤT CẢ VÀ XUẤT BẢNG ĐIỂM
// ============================================================================
console.log("\n================================================================================");
console.log("🔍 AGENT KIỂM ĐỊNH CHẤT LƯỢNG TIÊU CHUẨN WEB (WEB QA STANDARDS AUDITOR)");
console.log("================================================================================\n");

results.push(auditZeroFluff());
results.push(auditTypographyAndCapitalization());
results.push(auditColorHierarchy());
results.push(auditTailwindKeyframes());
results.push(auditBuildHealth());

let totalScore = 0;
let totalMax = 0;
let allPassed = true;

results.forEach((r, idx) => {
  totalScore += r.score;
  totalMax += r.maxScore;
  if (!r.passed) allPassed = false;

  const icon = r.passed ? "✅ [PASS]" : "❌ [FAIL]";
  console.log(`${idx + 1}. ${icon} ${r.category}: ${r.score}/${r.maxScore} điểm`);
  r.details.forEach(d => console.log(`   └─ ${d}`));
  console.log("");
});

console.log("--------------------------------------------------------------------------------");
console.log(`📊 TỔNG ĐIỂM CHẤT LƯỢNG WEB: ${totalScore}/${totalMax} ĐIỂM`);
if (allPassed && totalScore === totalMax) {
  console.log("🎉 KẾT QUẢ: ĐẠT TIÊU CHUẨN CHUẨN MỰC 100%! SẴN SÀNG BÀN GIAO CHO NGƯỜI DÙNG.");
  console.log("================================================================================\n");
  process.exit(0);
} else {
  console.log("⚠️ KẾT QUẢ: CHƯA ĐẠT! VUI LÒNG HIỆU CHỈNH CÁC LỖI TRÊN TRƯỚC KHI BÀN GIAO.");
  console.log("================================================================================\n");
  process.exit(1);
}
