import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

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
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href={`/${locale}`} className="text-xl font-bold text-slate-900">
            SISTEA
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <Link href={`/${locale}`} className="text-sm font-medium text-slate-700">
              {text.home}
            </Link>
            <Link href={`/${locale}#solutions`} className="text-sm font-medium text-slate-700">
              {text.solutions}
            </Link>
            <Link href={`/${locale}#industries`} className="text-sm font-medium text-slate-700">
              {text.industries}
            </Link>
            <Link href={`/${locale}#knowledge`} className="text-sm font-medium text-slate-700">
              {text.knowledge}
            </Link>
            <Link href={`/${locale}#contact`} className="text-sm font-medium text-slate-700">
              {text.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/es" className="text-xs font-semibold text-slate-500">ES</Link>
            <Link href="/en" className="text-xs font-semibold text-slate-500">EN</Link>
            <Link href="/de" className="text-xs font-semibold text-slate-500">DE</Link>
            <Link
              href={`/${locale}#contact`}
              className="hidden rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white lg:inline-flex"
            >
              {text.cta}
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-xl font-bold">SISTEA S.A. de C.V.</p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
            Tecnología europea, ahorro garantizado, financiamiento asegurado.
          </p>
          <p className="mt-6 text-sm text-slate-400">
            info@sisteasv.com · www.sisteasv.com
          </p>
        </div>
      </footer>
    </>
  );
}
