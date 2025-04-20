# GitHub Actions Workflow Fix

## Problem Detected

The GitHub Actions workflow was failing with a JavaScript "heap out of memory" error:

```
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

## Root Cause Analysis

After examining the workflow and the repository structure, I identified the cause of the issue:

1. The repository appears to be in a transition state between Jekyll and Next.js:
   - There are Jekyll files (`_layouts`, `_includes`, etc.)
   - There are also Next.js files (`next.config.js`, `src/` directory)

2. The workflow was trying to use both technologies:
   - It was setting up Ruby for Jekyll
   - It was also setting up Node.js and running `npm install`
   - When it ran `npm run build`, it was executing `next build` (from package.json)
   - This was causing confusion and memory issues

## Fix Implemented

I've simplified the GitHub workflow to use **only Jekyll** for now:

1. Removed Node.js setup step
2. Removed the npm install step
3. Kept only the Jekyll-specific build process

This change ensures that:
- The website continues to build using the existing Jekyll configuration
- The memory error is avoided by not trying to run Next.js build
- Your index page updates will still be deployed

## Next Steps

### If you want to continue using Jekyll:

No further action needed. Your updates will deploy successfully with the current workflow.

### If you want to migrate to Next.js:

1. Create a dedicated branch for the Next.js migration:
   ```bash
   git checkout -b nextjs-migration
   ```

2. Complete your Next.js migration work on this branch

3. When ready to switch completely to Next.js, use the Next.js workflow template from `github-workflow-guide.md`

4. To fix the memory issues with Next.js builds, add this to the Next.js workflow when ready:
   ```yaml
   - name: Build with Next.js
     run: |
       export NODE_OPTIONS="--max_old_space_size=4096"
       npm run build
   ```

This will allocate more memory to the Node.js process during the build.
