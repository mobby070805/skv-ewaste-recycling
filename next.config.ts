import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Trailing slashes are handled in src/proxy.ts so old-site URLs such as
  // /about/ redirect to the homepage in one hop instead of two.
  skipTrailingSlashRedirect: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Served quality for every <Image>: high enough to be visually lossless,
    // while AVIF still compresses far below the source files. Next 16 only
    // allows qualities listed here; the default of 75 is coerced to 85.
    qualities: [85],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
