import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";

import "../globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { isLocale, type Locale } from "@/config/locales";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header locale={locale as Locale} />
        <main>{children}</main>
        <Footer locale={locale as Locale} />
      </body>
    </html>
  );
}
