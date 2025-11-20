import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.saavncdn.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "www.jiosaavn.com",
      },

      // 👇 Add your R2 storage hostname
      {
        protocol: "https",
        hostname: "pub-165f4a9e47204c94accfb4e1bb86c985.r2.dev",
      },
    ],
  },
};

export default nextConfig;
