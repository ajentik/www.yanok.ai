# Fixing VSCode Shell Integration Issue on Windows

You're experiencing the "Shell Integration Unavailable" error in VSCode, which prevents Cline from viewing command outputs. Here's how to fix it on Windows:

## Solution Steps

### 1. Update VSCode

First, make sure your VSCode is up to date:

1. Open the Command Palette by pressing `Ctrl + Shift + P`
2. Type "Check for Updates" and select it
3. If updates are available, install them and restart VSCode

### 2. Configure the Default Terminal Shell

VSCode needs to use a supported shell (PowerShell is recommended on Windows):

1. Open the Command Palette (`Ctrl + Shift + P`)
2. Type "Terminal: Select Default Profile" and select it
3. Choose one of these supported shells:
   - PowerShell (recommended for Windows)
   - Git Bash (if installed)
   - WSL Bash (if Windows Subsystem for Linux is installed)
   - Command Prompt (less recommended but should work)

### 3. Restart VSCode

After changing the default terminal profile:

1. Close VSCode completely
2. Reopen VSCode
3. Open a new terminal with `` Ctrl + ` `` (backtick)

### 4. Enable Shell Integration Manually (if needed)

If the issue persists:

1. Open VSCode settings with `Ctrl + ,`
2. Search for "terminal.integrated.shellIntegration.enabled"
3. Make sure this setting is checked/enabled
4. Also check "terminal.integrated.defaultProfile.windows" and ensure it's set to your chosen shell

### 5. Install PowerShell 7 (if using older Windows versions)

If you're using an older version of Windows with an outdated PowerShell:

1. Download PowerShell 7 from: https://github.com/PowerShell/PowerShell/releases
2. Install it following the prompts
3. In VSCode, select PowerShell 7 as your default terminal

### 6. Check for Extensions Conflicts

Some extensions might interfere with shell integration:

1. Open the Command Palette (`Ctrl + Shift + P`)
2. Type "Extensions: Show Enabled Extensions" and select it
3. Temporarily disable any terminal-related extensions
4. Restart VSCode and check if the issue is resolved

### 7. Reset VSCode User Settings (last resort)

If nothing else works:

1. Open the Command Palette (`Ctrl + Shift + P`)
2. Type "Preferences: Open User Settings (JSON)" and select it
3. Look for any terminal-related settings and remove them
4. Save the file and restart VSCode

## Additional Troubleshooting

If you're still experiencing issues:

1. Try running VSCode as administrator
2. Check if Windows Defender or other security software is blocking shell integration
3. Ensure your user account has appropriate permissions

After implementing these steps, you should be able to see command outputs in the terminal when using Cline.
