import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev server is bound to 0.0.0.0, while the preview opens 127.0.0.1.
  // Without this, Next blocks the dev channel and the preview never finishes loading.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
