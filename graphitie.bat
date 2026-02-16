@echo off
SETLOCAL

REM Move to script directory (works regardless of where it's run from)
cd /d "%~dp0"

echo.
echo ==============================
echo  Graphitie Dev Server Starting
echo ==============================
echo.

REM Check if node_modules exists
IF NOT EXIST node_modules (
    echo Installing dependencies...
    npm install
)

REM Start dev server
npm run dev

ENDLOCAL
pause
