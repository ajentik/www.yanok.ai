# Yanok AI Website

This project is the Yanok AI website built with Next.js, a modern React framework that offers improved performance, developer experience, and flexibility.

## Key Features

- **High Performance**: Server-side rendering and static site generation with optimized client-side hydration
- **Modern JavaScript**: Latest JavaScript features and React components
- **Simplified Styling**: Integrated support for Tailwind CSS and other modern styling solutions
- **Improved Developer Experience**: Hot module reloading, TypeScript support, and better debugging
- **Flexible Data Fetching**: Multiple data fetching methods including static generation and server-side rendering
- **Better SEO**: Built-in features for improved search engine optimization

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Yarn package manager

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/yanok-ai.git
cd yanok-ai
```

2. Install dependencies:
```bash
yarn
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
yanok-ai/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable React components
│   ├── data/              # Data files
│   ├── lib/               # Utility functions
│   ├── pages/             # Next.js pages
│   └── styles/            # Global styles and Tailwind configuration
├── scripts/               # Utility scripts
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

### Static Export

```bash
yarn build
```

This generates a static export in the `out` directory that can be deployed to any static hosting service.

### GitHub Pages Deployment

The site is deployed solely using GitHub Pages via the static export generated in the `out` directory. The GitHub Actions workflow (`.github/workflows/nextjs.yml`) builds, exports, and deploys your Next.js site. Ensure `NEXT_PUBLIC_BASE_PATH` is set correctly in your repository secrets or workflow configuration.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
