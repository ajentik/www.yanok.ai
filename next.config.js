/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',  // For static site generation similar to Jekyll
  images: {
    unoptimized: true, // Required when using 'export'
  },
};

module.exports = nextConfig;
