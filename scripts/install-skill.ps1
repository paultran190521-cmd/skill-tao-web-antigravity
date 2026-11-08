# ==============================================================================
# SCRIPT CÀI ĐẶT TỰ ĐỘNG SKILL TẠO WEB CHO WINDOWS POWERSHELL
# ==============================================================================

$RepoUrl = "https://github.com/paultran190521-cmd/skill-tao-web-antigravity.git"
$TempDir = "$env:TEMP\skill-tao-web-install-$(Get-Random)"

Write-Host ""
Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host "🚀 ĐANG CÀI ĐẶT SKILL TẠO WEB CHUẨN MỰC (SKILL-WEB) VÀO MÁY CỦA BẠN..." -ForegroundColor Cyan
Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📦 Đang đồng bộ tài nguyên từ GitHub..." -ForegroundColor Yellow
git clone --depth 1 $RepoUrl $TempDir --quiet

$TargetDirs = @(
    "$env:USERPROFILE\.gemini\skills\skill-web",
    "$env:USERPROFILE\.agents\skills\skill-web",
    "$env:USERPROFILE\.claude\skills\skill-web"
)

foreach ($Dir in $TargetDirs) {
    Write-Host "📂 Đang cài đặt vào: $Dir" -ForegroundColor Green
    if (-not (Test-Path $Dir)) {
        New-Item -ItemType Directory -Path $Dir -Force | Out-Null
    }
    Copy-Item -Path "$TempDir\.agents\skills\skill-web\*" -Destination $Dir -Recurse -Force
}

Remove-Item -Path $TempDir -Recurse -Force -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host "🎉 CÀI ĐẶT HOÀN TẤT 100%! BẠN CÓ THỂ SỬ DỤNG NGAY BÂY GIỜ:" -ForegroundColor Green
Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host "👉 Antigravity / Gemini: Gõ /skill-web"
Write-Host "👉 Claude Code: ~/.claude/skills/skill-web"
Write-Host "👉 Cursor / Windsurf: ~/.agents/skills/skill-web"
Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host ""
