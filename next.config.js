/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Allow cross-origin requests in development
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },

  ...(isProduction ? {
    // Enable static HTML export for GitHub Pages
    output: 'export',
    // Base path and asset prefix for GitHub Pages
    basePath,
    assetPrefix: basePath,
  } : {}),

  // Image configuration for static export
  images: {
    unoptimized: true,
    domains: ['www.yanok.ai'],
  },

  // Webpack configuration for node modules in browser
  webpack: (config, { isServer }) => {
    // Add fallbacks for node native modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    
    return config;
  },

  // Handle trailing slashes
  trailingSlash: true,

  // Disable source maps in production
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
