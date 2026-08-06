import type { MetadataRoute } from "next";

import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${siteConfig.url}${routes.es.home}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          es: `${siteConfig.url}${routes.es.home}`,
          en: `${siteConfig.url}${routes.en.home}`,
          de: `${siteConfig.url}${routes.de.home}`,
        },
      },
    },
    {
      url: `${siteConfig.url}${routes.en.home}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}${routes.de.home}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
