import type { Metadata } from "next";

type CreateMetadataInput = {
  title: string;
  description: string;
  canonical: string;
  openGraphTitle: string;
  openGraphDescription: string;
  openGraphImage: string;
  locale: string;
};

export function createMetadata(input: CreateMetadataInput): Metadata {
  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: input.canonical,
      languages: {
        es: "https://www.sisteasv.com/es",
        en: "https://www.sisteasv.com/en",
        de: "https://www.sisteasv.com/de",
        "x-default": "https://www.sisteasv.com/es",
      },
    },
    openGraph: {
      title: input.openGraphTitle,
      description: input.openGraphDescription,
      images: [input.openGraphImage],
      locale: input.locale,
      type: "website",
    },
  };
}
