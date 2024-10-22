#!/bin/bash
# Install-QLCPlus-MUIDarkTheme-Linux.sh
# This script provides an option to install or uninstall the MUIDarkTheme for QLC+ with a colorful UI.

# Path variables
scriptPath=$(dirname "$(realpath "\$0")")
qlcplusUserFolder=$HOME/.qlcplus
stylePath=$qlcplusUserFolder/qlcplusStyle.qss

# Function to add color to output
function write_color {
    text=$1
    color=$2
    case $color in
        "Red") echo -e "\e[31m$text\e[0m";;
        "Green") echo -e "\e[32m$text\e[0m";;
        "Yellow") echo -e "\e[33m$text\e[0m";;
        "Cyan") echo -e "\e[36m$text\e[0m";;
        *) echo "$text";;
    esac
}

function install_theme {
    # Copy the .qss file to the user directory
    cp "$scriptPath/qlcplusStyle.qss" "$qlcplusUserFolder" || { write_color "Failed to copy theme file." "Red"; exit 1; }

    # Check if the UI folder exists before copying
    if [ -d "$scriptPath/ui-MUI-Dark-Mode" ]; then
        cp -r "$scriptPath/ui-MUI-Dark-Mode" "$qlcplusUserFolder" || { write_color "Theme failed to install. UI folder copy failed." "Red"; exit 1; }
    else
        write_color "Theme failed to install. UI folder does not exist." "Red"
        exit 1
    fi

    # Replace the {{resources_path}} with the correct location of resources
    resourcesPath="$qlcplusUserFolder/ui-MUI-Dark-Mode"
    sed -i "s|{{resources_path}}|$resourcesPath|g" "$stylePath" || { write_color "Failed to update the resource path in the style file." "Red"; exit 1; }

    write_color "Theme installed successfully!" "Green"
    write_color "If QLC+ is already open, you will need to restart it to activate the theme."
}

function uninstall_theme {
    # Remove the .qss file and the UI folder
    rm -f "$stylePath"
    rm -rf "$qlcplusUserFolder/ui-MUI-Dark-Mode"

    # Verification
    if [ ! -f "$stylePath" ] && [ ! -d "$qlcplusUserFolder/ui-MUI-Dark-Mode" ]; then
        write_color "Theme uninstalled successfully." "Green"
    else
        write_color "Failed to completely uninstall the theme. Please check manually." "Red"
    fi
}

# User interface
write_color "Thanks for purchasing this theme! We really appreciate your support." "Cyan"
write_color "Please select an option:" "Cyan"
write_color "1: Install Theme" "Yellow"
write_color "2: Uninstall Theme" "Yellow"
write_color "3: Exit" "Yellow"

# Handling user input
read -p "Enter your choice (1, 2, or 3): " choice
case $choice in
    "1") install_theme;;
    "2") uninstall_theme;;
    "3") exit;;
    *) write_color "Invalid option, please enter 1, 2, or 3." "Red";;
esac

# At the very end of your script
write_color "Press any key to exit..." "Green"
read -n 1 -s -r -p ""