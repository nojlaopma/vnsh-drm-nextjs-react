/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['secure.vnsh.com', 'www.vnsh.com', 'localhost'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // Required for static exports
  },
  // Enable static exports for deployment
  output: 'export',
  // Add a trailing slash to all paths for better compatibility
  trailingSlash: true,
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],
  // Enable CSS modules for all files
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|webp)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/images',
          outputPath: 'static/images',
          name: '[name]-[hash].[ext]',
        },
      },
    });

    return config;
  },
  // Add base path if deploying to a subdirectory
  // basePath: '/your-base-path',
  // Enable source maps in production for debugging
  productionBrowserSourceMaps: true,
  // Enable ES modules for better tree-shaking
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;
