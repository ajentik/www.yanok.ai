# Git Commit Guide for Yanok.ai

Based on your repository status, there are several types of changes that need to be managed properly:

## Current Status Overview
- **Staged changes**: `_layouts/default.html` and `partners.html`
- **Unstaged changes**: Various config files and `index.html` (our improvements)
- **Untracked files**: New Next.js related files (appears to be part of a migration)

## Option 1: Commit Only the Index Page Improvements

If you want to commit only the index page improvements we made:

```bash
# Unstage everything first
git reset

# Stage only the index.html file
git add index.html

# Commit with a descriptive message
git commit -m "Improve index page design and UX with modern layout and components"
```

## Option 2: Commit Related Changes Together

If the changes to `_layouts/default.html` are related to our index page improvements:

```bash
# Stage both files
git add index.html _layouts/default.html

# Commit with a descriptive message
git commit -m "Improve index page design and layout with updated template"
```

## Option 3: Separate Migration Changes from Design Changes

If you're working on migrating to Next.js (as suggested by the new files):

```bash
# First commit the design improvements
git add index.html _layouts/default.html
git commit -m "Improve index page design and UX"

# Then commit the configuration changes
git add package.json package-lock.json postcss.config.js tailwind.config.js yarn.lock
git commit -m "Update dependencies and configuration files"

# Finally, commit the Next.js migration files
git add jsconfig.json next.config.js scripts/migrate-from-jekyll.js src/ public/
git commit -m "Add Next.js migration setup and components"
```

## Option 4: Create a New Branch for the Migration

If the Next.js migration is a separate project:

```bash
# First commit the index improvements to the current branch
git add index.html _layouts/default.html
git commit -m "Improve index page design and UX"

# Create a new branch for the migration
git checkout -b nextjs-migration

# Add and commit all migration-related files
git add .
git commit -m "Set up Next.js migration framework and components"
```

## Handling Specific Files

### The access-local-server.md file
This is the documentation file we created. You might want to:
```bash
git add access-local-server.md
git commit -m "Add documentation for accessing local server"
```

### README.md changes
If you updated the README:
```bash
git add README.md
git commit -m "Update README with new information"
```

## Checking Your Commits

After committing, you can verify everything is in order:
```bash
git log -n 3  # Show the last 3 commits
git status    # Verify working directory is clean
```

## Pushing Your Changes

When you're ready to push:
```bash
git push origin <branch-name>
```

Replace `<branch-name>` with your current branch name (probably `master` based on the status output).
