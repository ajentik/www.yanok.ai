# Using the Next.js Workflow for Yanok.ai

I've created a dedicated Next.js workflow for GitHub Actions that will allow you to deploy your Next.js version of the Yanok.ai website. This workflow exists alongside your Jekyll workflow, giving you flexibility during your migration process.

## Changes Made

1. **Created `.github/workflows/nextjs.yml`**
   - Dedicated workflow for Next.js build and deployment
   - Includes increased memory allocation to prevent out-of-memory errors
   - Configured for GitHub Pages deployment

2. **Updated `package.json`**
   - Added `export` script to support static HTML generation
   - Kept existing scripts intact

3. **Updated `next.config.js`**
   - Set `output: 'export'` for static site generation
   - Configured with dynamic base path for GitHub Pages
   - Added settings for image optimization
   - Enabled trailing slashes for better URL compatibility

## How to Use the Workflows

### Current State: Two Parallel Workflows

You now have two GitHub Actions workflows:

1. **`jekyll.yml`** - Your primary workflow for the current Jekyll-based website
2. **`nextjs.yml`** - A new workflow for Next.js-based deployment

### Option 1: Continue with Jekyll for Now

If you want to continue using Jekyll and just deploy your index page improvements:

```bash
# Make sure you're on the master branch
git checkout master

# Push changes to GitHub
git push origin master
```

The Jekyll workflow will run automatically.

### Option 2: Switch to Next.js

When you're ready to switch to Next.js completely:

1. Ensure your Next.js migration is complete
2. Rename the workflows:

```bash
# Rename the Jekyll workflow to disable it
git mv .github/workflows/jekyll.yml .github/workflows/jekyll.yml.disabled

# Push changes to GitHub
git add .github/workflows/
git commit -m "Switch from Jekyll to Next.js deployment"
git push origin master
```

The Next.js workflow will now run automatically.

### Option 3: Use Separate Branches (Recommended During Transition)

To maintain both versions during transition:

```bash
# For Jekyll site (current version)
git checkout master
# Make changes to Jekyll files
git push origin master

# For Next.js development
git checkout nextjs-migration
# Make changes to Next.js files
git push origin nextjs-migration
```

## Troubleshooting

### Memory Issues

If you still encounter memory issues with the Next.js build:

1. Further increase memory allocation:
   ```yaml
   export NODE_OPTIONS="--max_old_space_size=8192"
   ```

2. Optimize your Next.js build:
   - Reduce unnecessary imports
   - Optimize image sizes
   - Consider code splitting

### Export Errors

If you encounter issues with the static export:

1. Check that any Server Components are properly handled for static export
2. Ensure dynamic routes have proper fallbacks
3. Verify environment variables are correctly set

## Testing Locally

To test your Next.js build locally before pushing:

```bash
# Install dependencies
npm install

# Build with increased memory
export NODE_OPTIONS="--max_old_space_size=6144" 
npm run build

# Generate static export
npm run export

# Serve the static files locally
npx serve out
```

This will create the same static files that will be deployed to GitHub Pages.
