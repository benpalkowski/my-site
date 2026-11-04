import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Forces GitHub Pages to find the subfolders properly
  images: {
    unoptimized: true, // Required for static exports
  },
};

export default nextConfig;
