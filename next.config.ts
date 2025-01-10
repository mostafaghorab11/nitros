import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Add async rewrites to handle static files without locale prefix
  async rewrites() {
    return [
      {
        source: '/:locale/images/:path*',
        destination: '/images/:path*',
      },
    ];
  },
};

export default nextConfig;
