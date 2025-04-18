#!/bin/bash
# Script to set up Git authentication for the www.yanok.ai repository

echo "===== Git Authentication Setup for www.yanok.ai ====="
echo "Remote repository: https://github.com/ajentik/www.yanok.ai"
echo

# Verify git is installed
if ! command -v git &> /dev/null; then
    echo "Error: Git is not installed. Please install Git first."
    exit 1
fi

# Check if already authenticated by trying a simple git operation
echo "Checking current authentication status..."
if git fetch --dry-run > /dev/null 2>&1; then
    echo "✅ You appear to be already authenticated with GitHub."
    echo "Current remote configuration:"
    git remote -v
else
    echo "Authentication needed. Setting up credentials..."
    
    # Prompt for authentication method
    echo
    echo "Choose authentication method:"
    echo "1) HTTPS with Personal Access Token (recommended for most users)"
    echo "2) SSH Keys (recommended for developers)"
    read -p "Enter choice (1 or 2): " auth_choice
    
    if [ "$auth_choice" = "1" ]; then
        echo
        echo "===== Setting up HTTPS Authentication ====="
        echo "You'll need a GitHub Personal Access Token (PAT)."
        echo "If you don't have one, create it at: GitHub.com → Settings → Developer settings → Personal access tokens"
        echo "Ensure your token has 'repo' scope at minimum."
        echo
        
        # Configure credential helper based on OS
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS - use keychain
            git config --global credential.helper osxkeychain
            echo "✅ Configured Git to use macOS Keychain for credential storage"
        else
            # Linux/Windows - use store
            git config --global credential.helper store
            echo "✅ Configured Git to store credentials"
        fi
        
        echo
        echo "When you push to GitHub for the first time, you'll be prompted for:"
        echo "- Username: your GitHub username"
        echo "- Password: your Personal Access Token (NOT your GitHub password)"
        
    elif [ "$auth_choice" = "2" ]; then
        echo
        echo "===== Setting up SSH Authentication ====="
        
        # Check for existing SSH keys
        if [ -f ~/.ssh/id_ed25519 ] || [ -f ~/.ssh/id_rsa ]; then
            echo "Existing SSH keys found."
        else
            echo "No SSH keys found. Generating new SSH key..."
            read -p "Enter your email for SSH key: " email
            ssh-keygen -t ed25519 -C "$email"
        fi
        
        # Start ssh-agent and add key
        eval "$(ssh-agent -s)"
        ssh-add ~/.ssh/id_ed25519 2>/dev/null || ssh-add ~/.ssh/id_rsa 2>/dev/null
        
        # Display public key for adding to GitHub
        echo
        echo "Add this SSH key to your GitHub account (GitHub.com → Settings → SSH and GPG keys → New SSH key):"
        echo
        cat ~/.ssh/id_ed25519.pub 2>/dev/null || cat ~/.ssh/id_rsa.pub
        
        # Update remote URL to use SSH
        echo
        echo "Updating remote URL to use SSH..."
        git remote set-url origin git@github.com:ajentik/www.yanok.ai.git
        echo "✅ Remote URL updated to use SSH"
        
    else
        echo "Invalid choice. Please run the script again and select 1 or 2."
        exit 1
    fi
fi

# Verify the repository configuration
echo
echo "===== Repository Configuration ====="
echo "Current remote configuration:"
git remote -v

# Validate the repository structure
echo
echo "===== Repository Validation ====="
if [ -f "index.html" ] && [ -d "_layouts" ]; then
    echo "✅ Repository structure appears valid for www.yanok.ai"
else
    echo "⚠️ Warning: Repository may not be properly structured for www.yanok.ai"
    echo "Make sure you are in the correct directory."
fi

# Show git status
echo
echo "===== Current Changes ====="
git status

echo
echo "===== Next Steps ====="
echo "1. Test authentication by running: ./commit-changes.sh"
echo "2. If you encounter issues, refer to github-authentication-guide.md"
echo "3. For organizing commits, use git-commit-guide.md"
echo
echo "Authentication setup complete! ✨"
