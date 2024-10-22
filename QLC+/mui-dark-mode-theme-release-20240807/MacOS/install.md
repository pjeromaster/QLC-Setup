# MUI Dark Theme for QLC+

Thank you for purchasing this premium theme for QLC+. With additional support from people like you, we can take QLC+ to the next level.

# Windows
## Manual Installation
 1. Find your QLC+ user directory (e.g. `C:\Users\{UserName}\QLC+\`)
 1. Copy the `ui-MUI-Dark-Mode` folder and `qlcplusStyle.qss` stylesheet to the QLC+ user directory
 1. Modify the stylesheet so all the images work:
    1. Create a Qt-Compatible path to the `ui-MUI-Dark-Mode` folder inside your QLC+ user directory. You can do this by:
        * Begining with the the full path (e.g. `C:\Users\{UserName}\QLC+\ui-MUI-Dark-Mode`)
        * Replace all the backslashes with forwardslashes (e.g. `C:/Users/{UserName}/QLC+/ui-MUI-Dark-Mode`)
    1. Open `qlcplusStyle.qss` in Notepad (or your text editor of choice)
    1. Press `CTRL` + `H` to find and replace every instance of `{{resources_path}}` with the Qt-Compatible path. 

## Automatic Installation

This will also delete any stylesheet which is already in the QLC+ user directory. 
 1. Open the theme folder. (the folder this .README is in)
 2. Hold down the SHIFT key and right-click inside the folder.
 3. Click "Open PowerShell window here".
 4. Type the following into the prompt: `PowerShell -ExecutionPolicy Bypass -File .\install-theme-Windows.ps1`
 5. Follow the prompts.

# Linux
## Manual Installation
 1. Find your QLC+ user directory (i.e. `/home/{UserName}/.qlcplus/`)
 1. Copy the `ui-MUI-Dark-Mode` folder and `qlcplusStyle.qss` stylesheet to the QLC+ user directory
 1. Modify the stylesheet so all the images work:
    1. Create a Qt-Compatible path to the `ui-MUI-Dark-Mode` folder inside your QLC+ user directory. You can do this by:
        * Begining with the the full path (e.g. `/home/{UserName}/.qlcplus/ui-MUI-Dark-Mode`)
    1. Open `qlcplusStyle.qss` in Text Editor
    1. Press `CTRL` + `H` to find and replace every instance of `{{resources_path}}` with the Qt-Compatible path. 

## Automatic Installation

This will also delete any stylesheet which is already in the QLC+ user directory. 
 1. Open the terminal and change directory to the theme folder. (the folder this .README is in)
 1. Type the following into the prompt: `chmod +x install-theme-Linux.sh && ./install-theme-Linux.sh`
 1. Follow the prompts.

# MacOS
## Manual Installation
 1. Find your QLC+ user directory (i.e. `Library/Application Support/QLC+/`)
 1. Copy the `ui-MUI-Dark-Mode` folder and `qlcplusStyle.qss` stylesheet to the QLC+ user directory
 1. Modify the stylesheet so all the images work:
    1. Create a Qt-Compatible path to the `ui-MUI-Dark-Mode` folder inside your QLC+ user directory. You can do this by:
        * Begining with the the full path (e.g. `Library/Application Support/QLC+/ui-MUI-Dark-Mode`)
    1. Open `qlcplusStyle.qss` in Text Editor
    1. Press `Command`+`Shift`+`F` to find and replace every instance of `{{resources_path}}` with the Qt-Compatible path. 

## Automatic Installation

This will also delete any stylesheet which is already in the QLC+ user directory. 
 1. Open the terminal and change directory to the theme folder. (the folder this .README is in)
 1. Type the following into the prompt: `chmod +x install-theme-MacOS.sh && ./install-theme-MacOS.sh`
 1. Follow the prompts.

# Troubleshooting
### I can't see the dropdown arrows/checkboxes/scrollbars?!
Make sure you've created the QT-Compatible path correctly. There should be no forwardslash at the end of the path.

The StyleSheet needs to have appropriate paths to the images. Open the StyleSheet and make sure that every line that looks like this: `image: url("{{resources_path}}/radio_unchecked.png");` has been correctly replaced with your QT-Compatible full path.

Also, make sure you've copied the `ui-MUI-Dark-Mode` folder to the QLC+ user directory correctly. 

# Uninstalling
Simply delete the `ui-MUI-Dark-Mode` folder and `qlcplusStyle.qss` stylesheet from your QLC+ user folder. Alternitavely, you can also run the install script again and follow the prompts to uninstall the theme.


# Thank You!
QLC+ By Massimo Callegari
QLC+ MUI Dark Theme by Nuke The Fox + Yestalgia (Lachlan Hicks)