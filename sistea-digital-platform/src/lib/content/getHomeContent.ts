import { notFound } from "next/navigation";

import type { Locale } from "@/config/locales";
import { homeEs } from "@/content/es/pages/home";

export function getHomeContent(locale: Locale) {
  if (locale === "es") {
    return homeEs;
  }

  notFound();
}
