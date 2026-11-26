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
    // Finer width steps than the default (…1200, 1920, 2048, 3840) so the
    // browser gets a file close to the size it shows, not one up to 2x
    // wider; this cuts both download size and first-request encode time.
    // No source is wider than 2400px, so a 3840 step never helps.
    deviceSizes: [640, 750, 828, 1080, 1280, 1536, 1920, 2560],
    // Optimised files are reused for 31 days instead of re-encoded.
    minimumCacheTTL: 2678400,
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
