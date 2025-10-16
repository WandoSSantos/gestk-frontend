import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@gestk/shared', '@gestk/ui'],
};

export default nextConfig;

