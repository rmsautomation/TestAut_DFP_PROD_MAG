@echo off
net session >nul 2>&1
if %errorLevel% neq 0 (
    powershell -Command "Start-Process cmd -ArgumentList '/c \"%~f0\"' -Verb RunAs"
    exit
)
 
reg delete "HKEY_CURRENT_USER\Software\Magaya" /f
 
echo Suscess