# GitHub Authentication & Remote Repository Setup Guide

This guide will help you set up GitHub authentication and ensure you're pushing commits to the correct repository.

## 1. Check Current Remote Repository

First, let's check what remote repository is currently configured:

```bash
git remote -v
```

This will show the URLs for fetch and push operations. If you don't see any output or the repository isn't correct, you'll need to add or modify the remote.

## 2. Setting Up GitHub Authentication

You have two main options for authenticating with GitHub: HTTPS or SSH.

### Option A: HTTPS Authentication (with Personal Access Token)

1. **Generate a Personal Access Token (PAT)** on GitHub:
   - Go to GitHub.com → Your profile icon → Settings → Developer settings → Personal access tokens → Generate new token
   - Select the necessary scopes (at minimum: `repo`, `workflow` if using GitHub Actions)
   - Create the token and **copy it immediately** (you won't be able to see it again)

2. **Configure Git to use your PAT**:

   ```bash
   # Store credentials in git config
   git config --global credential.helper store
   
   # The first time you push, you'll be prompted for username and password
   # Enter your GitHub username and use your PAT as the password
   ```

   Alternatively, on macOS you can use the keychain:
   ```bash
   git config --global credential.helper osxkeychain
   ```

3. **Test authentication**:
   ```bash
   git push -u origin master
   ```

### Option B: SSH Authentication (Recommended)

1. **Check for existing SSH keys**:
   ```bash
   ls -la ~/.ssh
   ```

2. **Generate a new SSH key** (if needed):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

3. **Add your SSH key to the ssh-agent**:
   ```bash
   # Start the ssh-agent in the background
   eval "$(ssh-agent -s)"
   
   # Add your key
   ssh-add ~/.ssh/id_ed25519
   ```

4. **Add your SSH key to your GitHub account**:
   - Copy your public key:
     ```bash
     cat ~/.ssh/id_ed25519.pub | pbcopy
     ```
   - Go to GitHub.com → Your profile icon → Settings → SSH and GPG keys → New SSH key
   - Paste your key and give it a descriptive title

5. **Test SSH connection**:
   ```bash
   ssh -T git@github.com
   ```
   You should see: "Hi username! You've successfully authenticated..."

## 3. Adding or Changing the Remote Repository

If you need to set up or change your remote repository:

```bash
# Remove existing remote (if needed)
git remote remove origin

# Add new remote
git remote add origin https://github.com/username/repository.git
# OR for SSH
git remote add origin git@github.com:username/repository.git
```

Replace `username` and `repository` with your GitHub username and repository name.

## 4. Pushing to the Correct Repository

After setting up authentication and the remote repository:

```bash
# If this is your first push to the repository:
git push -u origin master
# OR if your main branch is called 'main':
git push -u origin main

# For subsequent pushes:
git push
```

## 5. Troubleshooting

### Authentication Issues

- **HTTPS Authentication Errors**: 
  - Ensure your PAT has the correct permissions
  - Check that your username is correct
  - Make sure your token hasn't expired

- **SSH Authentication Errors**:
  - Verify SSH key is added to your GitHub account
  - Confirm ssh-agent is running and has your key
  - Check SSH config: `cat ~/.ssh/config`

### Permission Issues

If you see "Permission denied" errors:
- Ensure you have write access to the repository
- Verify you're a collaborator or member of the organization
- Check that your authentication method has proper permissions

### Repository Issues

If you can't push because the remote contains work you don't have locally:
```bash
# First pull and merge changes
git pull origin master
# Then push your changes
git push origin master
```

## 6. Organization-Specific Setup

If you're working with an organization repository:

1. **Verify organization membership**:
   - Go to GitHub.com → Your profile icon → Your organizations
   - Ensure you're a member of the relevant organization

2. **Check repository permissions**:
   - Organization admin can verify your permission level in the repository settings

3. **Set up organization-specific authentication**:
   - Some organizations require SAML SSO authentication
   - You may need to authorize your SSH key or PAT for use with the organization

## 7. Test Your Setup

After completing the setup:

```bash
# Create a test commit
echo "# Test" > test.md
git add test.md
git commit -m "Test commit"

# Push to verify authentication works
git push

# Remove test file
git rm test.md
git commit -m "Remove test file"
git push
```

This confirms your authentication and repository configuration are working correctly.
