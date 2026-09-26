import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preview opens 127.0.0.1 while the server also listens on IPv6.
  // Without this, Next blocks the dev channel and the preview never finishes loading.
  allowedDevOrigins: ["127.0.0.1", "::1"],
  images: {
    qualities: [75, 90, 92],
  },
};

export default nextConfig;
