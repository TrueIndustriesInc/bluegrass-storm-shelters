import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/shelters/", priority: 0.9 },
    { path: "/shelters/in-ground/", priority: 0.9 },
    { path: "/shelters/above-ground/", priority: 0.9 },
    { path: "/process/", priority: 0.8 },
    { path: "/why-local/", priority: 0.7 },
    { path: "/resources/", priority: 0.8 },
    { path: "/contact/", priority: 0.9 },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r.path}`,
      changeFrequency: "monthly" as const,
      priority: r.priority,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/resources/${a.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      lastModified: a.datePublished,
    })),
  ];
}
