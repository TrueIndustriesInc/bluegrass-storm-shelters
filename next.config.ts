import type { NextConfig } from "next";

/**
 * The site is fully static (output: "export") so it deploys anywhere —
 * Vercel, GitHub Pages, Netlify, or a plain web server — with zero servers
 * to maintain and excellent Core Web Vitals.
 *
 * NEXT_PUBLIC_BASE_PATH is only set by the GitHub Pages preview workflow.
 * On Vercel / a custom domain, leave it unset.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // Static export can't use the Next image optimizer; source images are
    // pre-sized and compressed in /public/images instead. The custom loader
    // applies basePath, which next/image skips for unoptimized images.
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
};

export default nextConfig;
