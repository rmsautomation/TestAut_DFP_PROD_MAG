@echo off
set "usersessionname=%username%"
taskkill /F /FI "USERNAME eq %usersessionname%" /IM ExpExpl.exe