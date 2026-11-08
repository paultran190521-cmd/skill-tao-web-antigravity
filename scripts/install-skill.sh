#!/usr/bin/env bash
# ==============================================================================
# SCRIPT CÀI ĐẶT TỰ ĐỘNG SKILL TẠO WEB (SKILL-WEB) CHO MÁY TÍNH CÁ NHÂN
# Hỗ trợ: MacOS, Linux, WSL
# Các công cụ hỗ trợ: Antigravity, Claude Code, Cursor, Windsurf, Codex
# ==============================================================================

set -e

REPO_URL="https://github.com/paultran190521-cmd/skill-tao-web-antigravity.git"
TEMP_DIR="/tmp/skill-tao-web-install-$$"

echo ""
echo "================================================================================"
echo "🚀 ĐANG CÀI ĐẶT SKILL TẠO WEB CHUẨN MỰC (SKILL-WEB) VÀO MÁY CỦA BẠN..."
echo "================================================================================"
echo ""

# 1. Tải bản sao mới nhất từ GitHub
echo "📦 Đang đồng bộ tài nguyên từ GitHub..."
git clone --depth 1 "$REPO_URL" "$TEMP_DIR" --quiet

# 2. Định vị các thư mục đích trên máy tính
TARGET_DIRS=(
  "$HOME/.gemini/skills/skill-web"
  "$HOME/.agents/skills/skill-web"
  "$HOME/.claude/skills/skill-web"
)

for DIR in "${TARGET_DIRS[@]}"; do
  echo "📂 Đang cài đặt vào: $DIR"
  mkdir -p "$DIR"
  cp -r "$TEMP_DIR/.agents/skills/skill-web/"* "$DIR/"
done

# 3. Dọn dẹp thư mục tạm
rm -rf "$TEMP_DIR"

echo ""
echo "================================================================================"
echo "🎉 CÀI ĐẶT HOÀN TẤT 100%! BẠN CÓ THỂ SỬ DỤNG NGAY BÂY GIỜ:"
echo "================================================================================"
echo "👉 Antigravity / Gemini: Gõ /skill-web"
echo "👉 Claude Code: Kỹ năng đã sẵn sàng tại ~/.claude/skills/skill-web"
echo "👉 Cursor / Windsurf: Kỹ năng đã sẵn sàng tại ~/.agents/skills/skill-web"
echo "================================================================================"
echo ""
