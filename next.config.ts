import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos", "cdn.example.com"], // Add the domains you want to allow
  },
};

export default nextConfig;


