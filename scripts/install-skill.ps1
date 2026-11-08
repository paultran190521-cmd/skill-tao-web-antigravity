# ==============================================================================
# SCRIPT CÀI ĐẶT TỰ ĐỘNG SKILL TẠO WEB CHO WINDOWS POWERSHELL
# Hỗ trợ 3 tên gọi: /web, /tao-web, /skill-web
# ==============================================================================

$RepoUrl = "https://github.com/paultran190521-cmd/skill-tao-web-antigravity.git"
$TempDir = "$env:TEMP\skill-tao-web-install-$(Get-Random)"

Write-Host ""
Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host "🚀 ĐANG CÀI ĐẶT BỘ KỸ NĂNG TẠO WEB CHUẨN MỰC (/web, /tao-web, /skill-web)..." -ForegroundColor Cyan
Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📦 Đang đồng bộ tài nguyên từ GitHub..." -ForegroundColor Yellow
git clone --depth 1 $RepoUrl $TempDir --quiet

$Aliases = @("skill-web", "tao-web", "web")
$BaseTargets = @(
    "$env:USERPROFILE\.gemini\skills",
    "$env:USERPROFILE\.gemini\config\skills",
    "$env:USERPROFILE\.agents\skills",
    "$env:USERPROFILE\.claude\skills"
)

foreach ($Base in $BaseTargets) {
    foreach ($Alias in $Aliases) {
        $TargetDir = "$Base\$Alias"
        Write-Host "📂 Đang cài đặt: $TargetDir" -ForegroundColor Green
        if (-not (Test-Path $TargetDir)) {
            New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null
        }
        Copy-Item -Path "$TempDir\.agents\skills\skill-web\*" -Destination $TargetDir -Recurse -Force
        
        $SkillFile = "$TargetDir\SKILL.md"
        if (Test-Path $SkillFile) {
            (Get-Content $SkillFile) -replace "^name: .*", "name: $Alias" | Set-Content $SkillFile
        }
    }
}

Remove-Item -Path $TempDir -Recurse -Force -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host "🎉 CÀI ĐẶT HOÀN TẤT 100%! BẠN CÓ THỂ GỌI BẰNG BẤT KỲ CÚ PHÁP NÀO SAU ĐÂY:" -ForegroundColor Green
Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host "👉 Cách 1 (Ngắn gọn nhất):  /web"
Write-Host "👉 Cách 2 (Tiếng Việt):     /tao-web"
Write-Host "👉 Cách 3 (Tiêu chuẩn):     /skill-web"
Write-Host ""
Write-Host "⚠️ LƯU Ý QUAN TRỌNG VỀ CÚ PHÁP:" -ForegroundColor Yellow
Write-Host "   - KHÔNG gõ dấu cách sau dấu gạch chéo (Gõ '/web', KHÔNG gõ '/ web')."
Write-Host "   - Gõ liền mạch ký tự để menu gợi ý tự động bật lên."
Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host ""
