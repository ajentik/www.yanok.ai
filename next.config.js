/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  // Enable SWC compiler
  experimental: {
    forceSwcTransforms: true,
  },
  // Allow cross-origin requests in development
  allowedDevOrigins: [
    'http://192.168.50.235:3001'
  ],

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

  // Customize webpack with CSS processing fallbacks
  webpack: (config, { isServer }) => {
    // Add fallbacks for node native modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    
    // Handle native module errors - provide alternate CSS processing if lightningcss fails
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOfRule) => {
          if (
            oneOfRule.test &&
            oneOfRule.test.toString().includes('css') &&
            oneOfRule.use &&
            Array.isArray(oneOfRule.use)
          ) {
            // Add error handling for CSS loaders
            oneOfRule.use = oneOfRule.use.map((loader) => {
              if (typeof loader === 'object' && loader.loader && loader.loader.includes('postcss-loader')) {
                return {
                  ...loader,
                  options: {
                    ...loader.options,
                    postcssOptions: {
                      ...loader.options?.postcssOptions,
                      // Add a plugin that will work in CI even if lightningcss fails
                      plugins: {
                        ...loader.options?.postcssOptions?.plugins,
                        // Use cssnano directly as a fallback
                        'cssnano': {},
                      }
                    }
                  }
                };
              }
              return loader;
            });
          }
        });
      }
    });

    return config;
  },

  // Handle trailing slashes
  trailingSlash: true,

  // Disable source maps in production
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
