#!/usr/bin/env bash
# ==============================================================================
# SCRIPT CÀI ĐẶT TỰ ĐỘNG SKILL TẠO WEB CHO MÁY TÍNH CÁ NHÂN
# Hỗ trợ: MacOS, Linux, WSL
# Hỗ trợ 3 tên gọi: /web, /tao-web, /skill-web
# Các công cụ hỗ trợ: Antigravity, Claude Code, Cursor, Windsurf, Codex
# ==============================================================================

set -e

REPO_URL="https://github.com/paultran190521-cmd/skill-tao-web-antigravity.git"
TEMP_DIR="/tmp/skill-tao-web-install-$$"

echo ""
echo "================================================================================"
echo "🚀 ĐANG CÀI ĐẶT BỘ KỸ NĂNG TẠO WEB CHUẨN MỰC (/web, /tao-web, /skill-web)..."
echo "================================================================================"
echo ""

# 1. Tải bản sao mới nhất từ GitHub
echo "📦 Đang đồng bộ tài nguyên từ GitHub..."
git clone --depth 1 "$REPO_URL" "$TEMP_DIR" --quiet

# 2. Định vị các thư mục đích và cài đặt 3 bí danh (skill-web, tao-web, web)
ALIASES=("skill-web" "tao-web" "web")
BASE_TARGETS=(
  "$HOME/.gemini/skills"
  "$HOME/.gemini/config/skills"
  "$HOME/.agents/skills"
  "$HOME/.claude/skills"
)

for BASE in "${BASE_TARGETS[@]}"; do
  for ALIAS in "${ALIASES[@]}"; do
    TARGET_DIR="$BASE/$ALIAS"
    echo "📂 Đang cài đặt: $TARGET_DIR"
    mkdir -p "$TARGET_DIR"
    cp -r "$TEMP_DIR/.agents/skills/skill-web/"* "$TARGET_DIR/"
    # Đổi name trong frontmatter của SKILL.md cho đúng alias
    if [ -f "$TARGET_DIR/SKILL.md" ]; then
      sed -i "s/^name: .*/name: $ALIAS/" "$TARGET_DIR/SKILL.md" 2>/dev/null || true
    fi
  done
done

# 3. Dọn dẹp thư mục tạm
rm -rf "$TEMP_DIR"

echo ""
echo "================================================================================"
echo "🎉 CÀI ĐẶT HOÀN TẤT 100%! BẠN CÓ THỂ GỌI BẰNG BẤT KỲ CÚ PHÁP NÀO SAU ĐÂY:"
echo "================================================================================"
echo "👉 Cách 1 (Ngắn gọn nhất):  /web"
echo "👉 Cách 2 (Tiếng Việt):     /tao-web"
echo "👉 Cách 3 (Tiêu chuẩn):     /skill-web"
echo ""
echo "⚠️ LƯU Ý QUAN TRỌNG VỀ CÚ PHÁP:"
echo "   - KHÔNG gõ dấu cách sau dấu gạch chéo (Gõ '/web', KHÔNG gõ '/ web')."
echo "   - Gõ liền mạch ký tự để menu gợi ý tự động bật lên."
echo "================================================================================"
echo ""
