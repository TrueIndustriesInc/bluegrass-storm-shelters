"use client";

/**
 * Static-export image loader: serves source images as-is, but prefixes the
 * deploy base path (next/image does not apply basePath to unoptimized
 * images, which 404s on GitHub Pages project sites without this).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function imageLoader({ src }: { src: string }) {
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
