@echo off
xcopy .\*.* D:\ams  /Y /E /Q /C
if errorlevel 0 echo 'Copy Success.'
