# Install-QLCPlus-MUIDarkTheme.ps1
# This script provides an option to install or uninstall the MUIDarkTheme for QLC+ with a colorful UI.

# Path variables
$scriptPath = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent
$qlcplusUserFolder = "$env:USERPROFILE\QLC+"
$stylePath = Join-Path -Path $qlcplusUserFolder -ChildPath "qlcplusStyle.qss"

# Function to add color to output
function Write-Color {
    param ([string]$Text, [string]$Color = "White")
    Write-Host $Text -ForegroundColor $Color
}

function Install-Theme {
    # Copy the .qss file to the user directory
    Copy-Item "$scriptPath\qlcplusStyle.qss" -Destination $qlcplusUserFolder -Force -ErrorAction Stop

    # Check if the UI folder exists before copying
    if (Test-Path "$scriptPath\ui-MUI-Dark-Mode") {
        Copy-Item -Path "$scriptPath\ui-MUI-Dark-Mode" -Destination "$qlcplusUserFolder" -Recurse -Force -ErrorAction Stop
    } else {
        Write-Color "Theme failed to install. UI folder does not exist." -Color Red
        exit
    }

    # Replace the {{resources_path}} with the correct location of resources, ensuring forward slashes are used
    $resourcesPath = ($qlcplusUserFolder + '\ui-MUI-Dark-Mode').Replace('\', '/')
    try {
        (Get-Content $stylePath -ErrorAction Stop).Replace('{{resources_path}}', $resourcesPath) | Set-Content $stylePath
        Write-Color "Theme installed successfully!`n" -Color Green
        Write-Color "If QLC+ is already open, you will need to restart it to activate the theme."
    } catch {
        Write-Color "Failed to update the resource path in the style file." -Color Red
        exit
    }
}

function Uninstall-Theme {
    # Remove the .qss file and the UI folder
    Remove-Item $stylePath -ErrorAction Ignore
    Remove-Item "$qlcplusUserFolder\ui-MUI-Dark-Mode" -Recurse -ErrorAction Ignore
    
    # Verification
    $fileExists = Test-Path $stylePath
    $folderExists = Test-Path "$qlcplusUserFolder\ui-MUI-Dark-Mode"

    if (-not $fileExists -and -not $folderExists) {
        Write-Color "Theme uninstalled successfully." -Color Green
    } else {
        Write-Color "Failed to completely uninstall the theme. Please check manually." -Color Red
    }
}
Clear-Host
# User interface
Write-Color "Thanks for purchasing this theme! We really appreciate your support.`n" -Color Cyan
Write-Color "Please select an option:" -Color Cyan
Write-Color "1: Install Theme" -Color Yellow
Write-Color "2: Uninstall Theme" -Color Yellow
Write-Color "3: Exit" -Color Yellow

# Handling user input
$choise = Read-Host "Enter your choice (1, 2, or 3)"
switch ($choise) {
    "1" {
        Install-Theme
    }
    "2" {
        Uninstall-Theme
    }
    "3" {
        exit
    }
    default {
        Write-Color "Invalid option, please enter 1, 2, or 3." -Color Red
    }
}

# At the very end of your script
Write-Color "Press any key to exit..." -Color DarkGreen
$null = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")