#!/bin/bash
# Script to commit changes to Yanok.ai repository

# Display current status
echo "Current git status:"
git status

echo -e "\n==== Starting commit process ====\n"

# Unstage everything first to organize commits
git reset
echo "✓ Reset staging area"

# STEP 1: Commit the index page improvements (our main task)
git add index.html
git commit -m "Improve index page with modern design, better UX and responsive layout"
echo "✓ Committed index page improvements"

# STEP 2: Commit related layout changes if they support the index page
git add _layouts/default.html
git commit -m "Update default layout to support redesigned index page"
echo "✓ Committed layout template changes"

# STEP 3: Commit the documentation for local server access
git add access-local-server.md
git commit -m "Add documentation for accessing local dev server"
echo "✓ Committed server access documentation"

# STEP 4: Commit the partners page changes separately
git add partners.html
git commit -m "Update partners page"
echo "✓ Committed partners page changes"

echo -e "\n==== Next.js Migration (Optional) ====\n"
echo "It appears you're working on migrating to Next.js."
echo "Consider creating a separate branch for this work:"
echo ""
echo "  git checkout -b nextjs-migration"
echo "  git add jsconfig.json next.config.js scripts/ src/ public/"
echo "  git add package.json package-lock.json yarn.lock postcss.config.js tailwind.config.js"
echo "  git commit -m \"Set up Next.js migration framework\""
echo ""

echo -e "\n==== Final Status ====\n"
git status

echo -e "\nTo push your changes: git push origin master"
echo "For more detailed options, see git-commit-guide.md"
