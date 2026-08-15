import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import HomepageApplications from "./components/HomepageApplications";
import HomepagePremiumUpgrade from "./components/HomepagePremiumUpgrade";
import HomepageVisualPolish from "./components/HomepageVisualPolish";

export const runtime = "edge";

const locales = ["es", "en", "de"] as const;
type Locale = (typeof locales)[number];

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const labels = {
  es: {
    home: "Inicio",
    solutions: "Soluciones",
    industries: "Industrias",
    knowledge: "Conocimiento",
    contact: "Contacto",
    cta: "Solicitar proyecto",
  },
  en: {
    home: "Home",
    solutions: "Solutions",
    industries: "Industries",
    knowledge: "Knowledge",
    contact: "Contact",
    cta: "Request a project",
  },
  de: {
    home: "Start",
    solutions: "Lösungen",
    industries: "Branchen",
    knowledge: "Wissen",
    contact: "Kontakt",
    cta: "Projekt anfragen",
  },
} satisfies Record<Locale, Record<string, string>>;

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

  const text = labels[locale];

  return (
    <>
      <HomepageVisualPolish />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">
          <Link
            href={`/${locale}`}
            className="flex min-w-0 items-center"
            aria-label="SISTEA Startseite"
          >
            <img
              src="/images/sistea-logo-header.png"
              alt="SISTEA – Expertos en Enfriamiento Eficiente · Tecnología Alemana"
              className="h-12 w-auto max-w-[220px] object-contain sm:h-14 sm:max-w-[250px]"
            />
          </Link>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            <Link href={`/${locale}`} className="text-sm font-medium text-slate-700 transition hover:text-cyan-600">{text.home}</Link>
            <Link href={`/${locale}#solutions`} className="text-sm font-medium text-slate-700 transition hover:text-cyan-600">{text.solutions}</Link>
            <Link href={`/${locale}#industries`} className="text-sm font-medium text-slate-700 transition hover:text-cyan-600">{text.industries}</Link>
            <Link href={`/${locale}#knowledge`} className="text-sm font-medium text-slate-700 transition hover:text-cyan-600">{text.knowledge}</Link>
            <Link href={`/${locale}#contact`} className="text-sm font-medium text-slate-700 transition hover:text-cyan-600">{text.contact}</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/es" className={`rounded-md px-2 py-1 text-xs font-semibold transition ${locale === "es" ? "bg-cyan-600 text-white" : "text-slate-500 hover:text-cyan-600"}`}>ES</Link>
            <Link href="/en" className={`rounded-md px-2 py-1 text-xs font-semibold transition ${locale === "en" ? "bg-cyan-600 text-white" : "text-slate-500 hover:text-cyan-600"}`}>EN</Link>
            <Link href="/de" className={`rounded-md px-2 py-1 text-xs font-semibold transition ${locale === "de" ? "bg-cyan-600 text-white" : "text-slate-500 hover:text-cyan-600"}`}>DE</Link>
            <Link href={`/${locale}#contact`} className="hidden rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 lg:inline-flex">{text.cta}</Link>
          </div>
        </div>
      </header>

      <main>{children}</main>
      <HomepagePremiumUpgrade locale={locale} />
      <HomepageApplications locale={locale} />

      <footer className="bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <img src="/images/sistea-logo-header.png" alt="SISTEA" className="h-14 w-auto rounded-md bg-white p-1" />
          <p className="mt-5 text-xl font-bold">SISTEA S.A. de C.V.</p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">Tecnología europea, ahorro garantizado, financiamiento asegurado.</p>
          <p className="mt-6 text-sm text-slate-400">info@sisteasv.com · www.sisteasv.com</p>
        </div>
      </footer>
    </>
  );
}
