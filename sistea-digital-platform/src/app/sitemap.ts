import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sisteasv.com";
  const locales = ["es", "en", "de"] as const;
  const pages = ["", "/ai-energy-management", "/ai-data-centers"] as const;

  return locales.flatMap((locale, localeIndex) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? (localeIndex === 0 ? 1 : localeIndex === 1 ? 0.8 : 0.7) : 0.85,
    })),
  );
}
