# Install MUI Dark Theme for QLC+ on Linux

## Automatic Installation

This will also delete any stylesheet which is already in the QLC+ user directory. 
 1. Open the terminal and change directory to the Linux theme folder. (the folder this file is in)
 1. Type the following into the prompt: `chmod +x install-theme-Linux.sh && ./install-theme-Linux.sh`
 1. Follow the prompts.

## Manual Installation
 1. Find your QLC+ user directory (i.e. `/home/{UserName}/.qlcplus/`)
 1. Copy the `ui-MUI-Dark-Mode` folder and `qlcplusStyle.qss` stylesheet to the QLC+ user directory
 1. Modify the stylesheet so all the images work:
    1. Create a Qt-Compatible path to the `ui-MUI-Dark-Mode` folder inside your QLC+ user directory. You can do this by:
        * Begining with the the full path (e.g. `/home/{UserName}/.qlcplus/ui-MUI-Dark-Mode`)
    1. Open `qlcplusStyle.qss` in Text Editor
    1. Press `CTRL` + `H` to find and replace every instance of `{{resources_path}}` with the Qt-Compatible path. 

# Uninstalling
Simply delete the `ui-MUI-Dark-Mode` folder and `qlcplusStyle.qss` stylesheet from your QLC+ user folder. Alternitavely, you can also run the install script again and follow the prompts to uninstall the theme.


# Thank You!
QLC+ By Massimo Callegari
QLC+ MUI Dark Theme by Nuke The Fox + Yestalgia (Lachlan Hicks)