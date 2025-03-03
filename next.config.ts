import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  // Make sure postcss processing happens for TailwindCSS
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
