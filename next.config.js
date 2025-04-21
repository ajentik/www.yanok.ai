/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',  // For static site generation similar to Jekyll
  images: {
    unoptimized: true, // Required when using 'export'
  },
=======

const isProduction = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Enable static HTML export for GitHub Pages
  output: 'export',
  
  // Set the base path for GitHub Pages deployment
  basePath,
  assetPrefix: basePath,
  
  // Configure image optimization
  images: {
    unoptimized: true, // Required for static export
    domains: ['www.yanok.ai'],
  },

  // Customize webpack config if needed
  webpack: (config) => {
    return config;
  },
  
  // Handle trailing slashes
  trailingSlash: true,
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
>>>>>>> local-master
};

module.exports = nextConfig;
