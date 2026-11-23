import type { NextConfig } from "next";

/**
 * A static export, deployed to Cloudflare Pages as plain files. No route handlers, server actions, cookies or ISR:
 * live behaviour (the seal, the catalogue filters, the commission brief) runs in the browser.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cachet-gifting-concept.pages.dev",
    NEXT_PUBLIC_INDEXABLE: "false",
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

