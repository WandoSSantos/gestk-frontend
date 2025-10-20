# ============================================================================
# Script para iniciar o GESTK Frontend - Todas as 3 aplicações
# ============================================================================
#
# Uso: .\START_DEV.ps1
#      - Admin:   http://localhost:3000
#      - Client:  http://localhost:3001
#      - Landing: http://localhost:3002
#
# ============================================================================

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║          GESTK FRONTEND - Iniciando Aplicações...             ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Verificar se Node.js está instalado
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js encontrado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js não encontrado! Por favor instale Node.js primeiro." -ForegroundColor Red
    Write-Host "Baixe em: https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Pressione Enter para sair"
    exit 1
}

Write-Host ""
Write-Host "📦 Instalando dependências (se necessário)..." -ForegroundColor Yellow

# Ir para a pasta do script
Set-Location -Path $PSScriptRoot

# Instalar dependências silenciosamente
npm install > $null 2>&1

Write-Host ""
Write-Host "🚀 Iniciando as 3 aplicações..." -ForegroundColor Green
Write-Host ""
Write-Host "    ├─ 🏢 Admin (PORT 3000):   http://localhost:3000" -ForegroundColor Cyan
Write-Host "    ├─ 👥 Client (PORT 3001):  http://localhost:3001" -ForegroundColor Cyan
Write-Host "    └─ 🌐 Landing (PORT 3002): http://localhost:3002" -ForegroundColor Cyan
Write-Host ""
Write-Host "    Aguarde 2-3 minutos para tudo compilar..." -ForegroundColor Yellow
Write-Host ""

# Executar npm run dev
npm run dev

Read-Host "Pressione Enter para sair"
