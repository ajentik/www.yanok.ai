# Yanok AI Website - Next.js Migration

This project is a migration of the Yanok AI website from Jekyll to Next.js, a modern React framework that offers improved performance, developer experience, and flexibility.

## Benefits of Next.js over Jekyll

- **Better Performance**: Next.js offers server-side rendering and static site generation with optimized client-side hydration
- **Modern JavaScript**: Use the latest JavaScript features and React components
- **Simplified Styling**: Integrated support for Tailwind CSS and other modern styling solutions
- **Incremental Adoption**: Migrate page by page while keeping the site functional
- **Improved Developer Experience**: Hot module reloading, TypeScript support, and better debugging
- **Flexible Data Fetching**: Multiple data fetching methods including static generation and server-side rendering
- **Better SEO**: Built-in features for improved search engine optimization

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/yanok-ai.git
cd yanok-ai
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Migration Process

This repository includes migration tools to help transition from Jekyll to Next.js:

### Using the Migration Script

The migration script converts Jekyll pages to Next.js components:

```bash
node scripts/migrate-from-jekyll.js
```

This will:
1. Copy assets from Jekyll's `assets/` to Next.js `public/` directory
2. Convert Jekyll YAML data files to JavaScript modules
3. Transform Jekyll pages (HTML and Markdown) to Next.js React components
4. Preserve front matter metadata as component props

### Manual Migration Steps

For optimal results, after running the migration script:

1. **Refine Components**: Improve the auto-generated components by splitting them into smaller, reusable components
2. **Update Styling**: Replace any Jekyll-specific styles with Tailwind CSS utilities
3. **Fix Links**: Update internal links to use Next.js `<Link>` components
4. **Test Interactivity**: Ensure any JavaScript functionality works with React's component lifecycle

## Project Structure

```
yanok-ai/
├── public/                # Static assets (migrated from Jekyll's assets/)
├── src/
│   ├── components/        # Reusable React components
│   ├── data/              # Migrated data files (from Jekyll _data/)
│   ├── lib/               # Utility functions
│   ├── pages/             # Next.js pages (migrated from Jekyll HTML/MD files)
│   └── styles/            # Global styles and Tailwind configuration
├── scripts/               # Migration scripts and utilities
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies
└── tailwind.config.js     # Tailwind CSS configuration
```

## Development Workflow

- **Add a new page**: Create a new file in the `src/pages` directory
- **Create a component**: Add a new component in the `src/components` directory
- **Add styling**: Use Tailwind CSS utility classes or add custom styles in `src/styles`
- **Fetch data**: Use Next.js data fetching methods in page components

## Deployment

The site can be deployed to various platforms:

### Static Export (similar to Jekyll)

```bash
npm run build
# or
yarn build
```

This generates a static export in the `out` directory that can be deployed to any static hosting service.

### Vercel Deployment

For advanced features like serverless functions, incremental static regeneration, and more:

1. Push your code to a Git repository
2. Import the project into [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Documentation](https://vercel.com/docs)
