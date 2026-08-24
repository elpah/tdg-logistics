import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: "custom",
    loaderFile: "./lib/cloudinaryLoader.ts",
    qualities: [75, 90],
  },
};

export default nextConfig;
