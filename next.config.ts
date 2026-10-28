import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return [
      { source: "/go", destination: "/go/index.html" },
    ];
  },
};

export default nextConfig;
