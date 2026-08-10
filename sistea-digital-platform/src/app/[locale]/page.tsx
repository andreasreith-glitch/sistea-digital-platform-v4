import type { Metadata } from "next";
import Link from "next/link";
export const runtime = "edge";

const content = {
  es: {
    title: "SISTEA | HVAC, Refrigeración Industrial y Eficiencia Energética",
    description:
      "SISTEA desarrolla soluciones integrales de HVAC, refrigeración industrial, energía solar, baterías, agua, automatización y financiamiento ESI en El Salvador y Centroamérica.",

    eyebrow: "Ingeniería técnica para Centroamérica",

    headline:
      "Soluciones integrales para eficiencia energética, climatización e infraestructura industrial.",

    lead:
      "Desarrollamos proyectos desde la idea inicial hasta la implementación técnica: análisis, planificación, visualización, suministro, instalación, automatización, monitoreo y operación.",

    primary: "Solicitar proyecto",
    secondary: "Iniciar asistente de ingeniería",

    solutionsTitle: "Soluciones técnicas",

    solutionDescription:
      "Planificación, dimensionamiento, integración y operación con enfoque en eficiencia energética, confiabilidad y sostenibilidad.",

    solutions: [
      "HVAC",
      "Refrigeración industrial",
      "Ventilación",
      "Energía fotovoltaica",
      "Almacenamiento con baterías",
      "Tratamiento de agua",
      "Automatización de edificios",
      "Financiamiento ESI",
    ],

    industriesTitle: "Sectores",

    industries: [
      "Alimentos y bebidas",
      "Farmacéutica",
      "Hoteles",
      "Hospitales",
      "Industria",
      "Centros comerciales",
      "Centros de datos",
    ],

    ctaTitle: "¿Está planificando un proyecto técnico?",

    ctaText:
      "SISTEA revisa sus requerimientos y desarrolla una solución eficiente, financiable y adecuada para su operación.",

    contactTitle: "Contacto",
  },

  en: {
    title: "SISTEA | HVAC, Industrial Refrigeration and Energy Efficiency",
    description:
      "SISTEA develops integrated HVAC, industrial refrigeration, solar energy, battery storage, water treatment, automation and ESI financing solutions in El Salvador and Central America.",

    eyebrow: "Engineering for Central America",

    headline:
      "Integrated solutions for energy efficiency, climate control and industrial infrastructure.",

    lead:
      "We develop projects from the initial concept through technical implementation: analysis, planning, visualization, procurement, installation, automation, monitoring and operation.",

    primary: "Request a project",
    secondary: "Start engineering assistant",

    solutionsTitle: "Technical solutions",

    solutionDescription:
      "Planning, sizing, integration and operation focused on energy efficiency, reliability and sustainability.",

    solutions: [
      "HVAC",
      "Industrial refrigeration",
      "Ventilation",
      "Photovoltaic systems",
      "Battery storage",
      "Water treatment",
      "Building automation",
      "ESI financing",
    ],

    industriesTitle: "Industries",

    industries: [
      "Food and beverage",
      "Pharmaceutical",
      "Hotels",
      "Hospitals",
      "Industry",
      "Shopping centers",
      "Data centers",
    ],

    ctaTitle: "Planning a technical project?",

    ctaText:
      "SISTEA reviews your requirements and develops an efficient, financeable solution tailored to your operation.",

    contactTitle: "Contact",
  },

  de: {
    title: "SISTEA | HVAC, Industriekälte und Energieeffizienz",
    description:
      "SISTEA entwickelt integrierte Lösungen für HVAC, Industriekälte, Photovoltaik, Batteriespeicher, Wasseraufbereitung, Automation und ESI-Finanzierung in El Salvador und Zentralamerika.",

    eyebrow: "Ingenieurtechnik für Zentralamerika",

    headline:
      "Ganzheitliche Lösungen für Energieeffizienz, Klimatisierung und industrielle Infrastruktur.",

    lead:
      "Wir entwickeln Projekte von der ersten Idee bis zur technischen Umsetzung: Analyse, Planung, Visualisierung, Beschaffung, Installation, Automation, Monitoring und Betrieb.",

    primary: "Projekt anfragen",
    secondary: "Engineering Assistant starten",

    solutionsTitle: "Technische Lösungen",

    solutionDescription:
      "Planung, Auslegung, Integration und Betrieb mit Fokus auf Energieeffizienz, Zuverlässigkeit und Nachhaltigkeit.",

    solutions: [
      "HVAC",
      "Industriekälte",
      "Lüftung",
      "Photovoltaik",
      "Batteriespeicher",
      "Wasseraufbereitung",
      "Gebäudeautomation",
      "ESI-Finanzierung",
    ],

    industriesTitle: "Branchen",

    industries: [
      "Lebensmittel und Getränke",
      "Pharma",
      "Hotels",
      "Krankenhäuser",
      "Industrie",
      "Einkaufszentren",
      "Rechenzentren",
    ],

    ctaTitle: "Planst du ein technisches Projekt?",

    ctaText:
      "SISTEA prüft deine Anforderungen und entwickelt eine effiziente, finanzierbare und betrieblich passende Lösung.",

    contactTitle: "Kontakt",
  },
} as const;

type Locale = keyof typeof content;

function getLocale(value: string): Locale {
  if (value === "es" || value === "en" || value === "de") {
    return value;
  }

  return "es";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const page = content[getLocale(locale)];

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = getLocale(locale);
  const page = content[currentLocale];

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[680px] bg-slate-950 bg-cover bg-center px-6 py-24 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2, 6, 23, 0.78), rgba(2, 6, 23, 0.88)), url('/images/hero/san-salvador-skyline.jpg')",
        }}
      >
        <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap gap-3 text-sm">
  <Link
    href="/es"
    className={
      currentLocale === "es"
        ? "font-bold text-cyan-400"
        : "text-white hover:text-cyan-400"
    }
  >
    Español
  </Link>

  <span className="text-slate-500">|</span>

  <Link
    href="/en"
    className={
      currentLocale === "en"
        ? "font-bold text-cyan-400"
        : "text-white hover:text-cyan-400"
    }
  >
    English
  </Link>

  <span className="text-slate-500">|</span>

  <Link
    href="/de"
    className={
      currentLocale === "de"
        ? "font-bold text-cyan-400"
        : "text-white hover:text-cyan-400"
    }
  >
    Deutsch
  </Link>
</div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {page.eyebrow}
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {page.headline}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            {page.lead}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-cyan-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-cyan-500"
            >
              {page.primary}
            </a>

            <a
              href="#assistant"
              className="rounded-lg border border-white/40 bg-black/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              {page.secondary}
            </a>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900">
            {page.solutionsTitle}
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.solutions.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-semibold text-slate-900">{item}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {page.solutionDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900">
            {page.industriesTitle}
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.industries.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING ASSISTANT */}
      <section id="assistant" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-2xl bg-slate-950 p-10 text-white">
          <h2 className="text-3xl font-bold">{page.ctaTitle}</h2>

          <p className="mt-4 max-w-3xl text-slate-300">
            {page.ctaText}
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900">
            {page.contactTitle}
          </h2>

          <p className="mt-4 text-slate-600">
            SISTEA S.A. de C.V.
          </p>

          <p className="mt-2 text-slate-600">
            info@sisteasv.com
          </p>

          <p className="mt-2 text-slate-600">
            www.sisteasv.com
          </p>
        </div>
      </section>
    </>
  );
}
