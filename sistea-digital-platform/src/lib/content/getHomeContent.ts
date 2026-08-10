import { notFound } from "next/navigation";

import { homeEs } from "@/content/es/pages/home";

type Locale = "es" | "en" | "de";

export function getHomeContent(locale: Locale) {
  if (locale === "es") {
    return homeEs;
  }

  notFound();
}
