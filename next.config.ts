import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'exafunction.github.io',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
};

export default nextConfig;
