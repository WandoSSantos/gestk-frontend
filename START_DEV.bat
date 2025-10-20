@echo off
REM ============================================================================
REM Script para iniciar o GESTK Frontend - Todas as 3 aplicações
REM ============================================================================
REM
REM Uso: Duplo clique neste arquivo para iniciar
REM      - Admin:   http://localhost:3000
REM      - Client:  http://localhost:3001
REM      - Landing: http://localhost:3002
REM
REM ============================================================================

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║          GESTK FRONTEND - Iniciando Aplicações...             ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Verificar se Node.js está instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js não encontrado! Por favor instale Node.js primeiro.
    echo Baixe em: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js encontrado
node --version
echo.

REM Ir para a pasta do projeto
cd /d "%~dp0"

echo 📦 Instalando dependências (se necessário)...
call npm install >nul 2>&1

echo.
echo 🚀 Iniciando as 3 aplicações...
echo.
echo    ├─ 🏢 Admin (PORT 3000):   http://localhost:3000
echo    ├─ 👥 Client (PORT 3001):  http://localhost:3001
echo    └─ 🌐 Landing (PORT 3002): http://localhost:3002
echo.
echo    Aguarde 2-3 minutos para tudo compilar...
echo.

REM Executar npm run dev
call npm run dev

pause
