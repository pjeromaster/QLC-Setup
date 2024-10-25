@echo off
setlocal

set script_dir=%~dp0
set script_dir=%script_dir%QLC+

echo %script_dir%

set target_dir=%USERPROFILE%\QLC+

echo Creating junction from "%script_dir%" to "%target_dir%"

if exist "%target_dir%" (
    echo Target directory "%target_dir%" already exists. Deleting it now...
    rmdir /S /Q "%target_dir%"
    if exist "%target_dir%" (
        echo Failed to delete the existing directory. Please check permissions.
        exit /b 1
    )
)

mklink /J "%target_dir%" "%script_dir%"

if %errorlevel% equ 0 (
    echo Junction created successfully!
) else (
    echo Failed to create junction. Make sure you run this as administrator.
)

endlocal