@echo off
cd /d "%~dp0"
echo.
echo  Site: http://localhost:8080
echo  Kapatmak icin bu pencereyi kapat veya Ctrl+C
echo.
start http://localhost:8080/index.html
where php >nul 2>&1 && php -S localhost:8080 && exit /b
where python >nul 2>&1 && python -m http.server 8080 && exit /b
echo PHP veya Python bulunamadi. Live Server ile ac veya PHP kur.
pause
