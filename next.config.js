/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Enable static HTML export for GitHub Pages
  output: 'export',

  // Base path and asset prefix for GitHub Pages
  basePath,
  assetPrefix: basePath,

  // Image configuration for static export
  images: {
    unoptimized: true,
    domains: ['www.yanok.ai'],
  },

  // Customize webpack if needed
  webpack: (config) => {
    return config;
  },

  // Handle trailing slashes
  trailingSlash: true,

  // Disable source maps in production
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
