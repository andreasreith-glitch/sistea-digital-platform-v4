import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const locales = ["es", "en", "de"] as const;
type Locale = (typeof locales)[number];

const copy = {
  es: {
    title: "Climatización y Energía para Centros de Datos de IA | SISTEA",
    description: "SISTEA diseña soluciones integradas de refrigeración, chillers, energía, baterías, recuperación de calor y gestión inteligente para centros de datos de IA en El Salvador y Centroamérica.",
    eyebrow: "Centros de datos de IA",
    h1: "Climatización, Refrigeración y Energía para Centros de Datos de IA",
    intro: "Las cargas de alta densidad exigen una arquitectura térmica y energética integrada. SISTEA combina refrigeración, chillers, gestión hidráulica, almacenamiento con baterías, recuperación de calor, agua y control inteligente para mejorar eficiencia y resiliencia.",
    sections: [
      ["Refrigeración de alta densidad", "Evaluamos arquitecturas con chillers, circuitos de agua helada, distribución hidráulica y estrategias de refrigeración líquida o híbrida según densidad de carga y redundancia requerida."],
      ["Energía y almacenamiento", "Integramos red, generación fotovoltaica, baterías y gestión de demanda para reforzar continuidad de servicio, control de picos y estabilidad energética."],
      ["Recuperación de calor", "Analizamos el aprovechamiento térmico del calor rechazado para procesos, agua caliente u otros usos cuando las condiciones de temperatura y demanda lo permiten."],
      ["Control inteligente", "La supervisión integra temperaturas, caudales, presiones, potencia, PUE, alarmas y disponibilidad para optimizar el sistema completo en lugar de operar equipos aislados."],
    ],
    design: "Áreas de diseño",
    designItems: ["Chillers y agua helada", "Liquid cooling y sistemas híbridos", "UPS, baterías y respaldo", "BMS / EMS y control con IA", "Gestión del agua", "Recuperación de calor", "Redundancia N+1 / 2N", "Medición de PUE y rendimiento"],
    cta: "Solicitar evaluación para un centro de datos",
  },
  en: {
    title: "Cooling and Energy for AI Data Centers | SISTEA Central America",
    description: "SISTEA designs integrated cooling, chiller, energy, battery storage, heat recovery and intelligent management solutions for AI data centers in El Salvador and Central America.",
    eyebrow: "AI Data Centers",
    h1: "Cooling, Refrigeration and Energy Systems for AI Data Centers",
    intro: "High-density computing requires an integrated thermal and power architecture. SISTEA combines refrigeration, chillers, hydronic systems, battery storage, heat recovery, water management and intelligent controls to improve efficiency and resilience.",
    sections: [
      ["High-density cooling", "We assess chiller plants, chilled-water loops, hydronic distribution and liquid or hybrid cooling strategies according to rack density, load profile and redundancy requirements."],
      ["Power and storage", "We integrate grid power, photovoltaic generation, battery storage and demand management to strengthen continuity, peak control and electrical stability."],
      ["Heat recovery", "We evaluate useful recovery of rejected heat for processes, hot water or other thermal loads when temperature levels and demand make recovery technically viable."],
      ["Intelligent controls", "Supervision integrates temperatures, flow, pressure, power, PUE, alarms and availability so the complete system is optimized instead of operating equipment in isolation."],
    ],
    design: "Design areas",
    designItems: ["Chillers and chilled water", "Liquid cooling and hybrid systems", "UPS, batteries and backup", "BMS / EMS and AI controls", "Water management", "Heat recovery", "N+1 / 2N redundancy", "PUE and performance metering"],
    cta: "Request a data center assessment",
  },
  de: {
    title: "Kühlung und Energie für KI-Rechenzentren | SISTEA Zentralamerika",
    description: "SISTEA plant integrierte Kühlungs-, Chiller-, Energie-, Batteriespeicher-, Wärmerückgewinnungs- und KI-Regelungslösungen für Rechenzentren in El Salvador und Zentralamerika.",
    eyebrow: "KI-Rechenzentren",
    h1: "Kühlung, Kältetechnik und Energieversorgung für KI-Rechenzentren",
    intro: "High-Density-Computing verlangt eine integrierte thermische und elektrische Architektur. SISTEA verbindet Kältetechnik, Chiller, Hydraulik, Batteriespeicher, Wärmerückgewinnung, Wassermanagement und intelligente Regelung für höhere Effizienz und Resilienz.",
    sections: [
      ["High-Density-Kühlung", "Wir bewerten Chilleranlagen, Kaltwassernetze, hydraulische Verteilung sowie Flüssigkeits- oder Hybridkühlung entsprechend Rack-Dichte, Lastprofil und Redundanzanforderungen."],
      ["Energie und Speicher", "Wir integrieren Netzversorgung, Photovoltaik, Batteriespeicher und Lastmanagement zur Verbesserung von Versorgungssicherheit, Spitzenlastbegrenzung und elektrischer Stabilität."],
      ["Wärmerückgewinnung", "Wir prüfen die Nutzung der Abwärme für Prozesse, Warmwasser oder andere thermische Verbraucher, sofern Temperaturniveau und Bedarf eine sinnvolle Nutzung ermöglichen."],
      ["Intelligente Regelung", "Die Überwachung integriert Temperaturen, Volumenströme, Drücke, Leistung, PUE, Alarme und Verfügbarkeit, damit das Gesamtsystem statt einzelner Anlagen optimiert wird."],
    ],
    design: "Planungsbereiche",
    designItems: ["Chiller und Kaltwasser", "Liquid Cooling und Hybridsysteme", "USV, Batterien und Backup", "BMS / EMS und KI-Regelung", "Wassermanagement", "Wärmerückgewinnung", "N+1 / 2N Redundanz", "PUE- und Performancemessung"],
    cta: "Bewertung eines Rechenzentrums anfragen",
  },
} satisfies Record<Locale, any>;

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = copy[locale];
  const url = `https://www.sisteasv.com/${locale}/ai-data-centers`;
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: url,
      languages: {
        es: "https://www.sisteasv.com/es/ai-data-centers",
        en: "https://www.sisteasv.com/en/ai-data-centers",
        de: "https://www.sisteasv.com/de/ai-data-centers",
        "x-default": "https://www.sisteasv.com/es/ai-data-centers",
      },
    },
    openGraph: { title: t.title, description: t.description, url, type: "website" },
  };
}

export default async function AiDataCentersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.h1,
    description: t.description,
    provider: { "@type": "Organization", name: "SISTEA S.A. de C.V.", url: "https://www.sisteasv.com" },
    areaServed: ["El Salvador", "Central America"],
    serviceType: ["Data center cooling", "AI data center cooling", "Chiller systems", "Liquid cooling", "Battery energy storage", "Heat recovery", "Energy management"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{t.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t.h1}</h1>
          <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-300">{t.intro}</p>
          <Link href={`/${locale}#contact`} className="mt-9 inline-flex rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-500">{t.cta}</Link>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {t.sections.map(([heading, body]: string[]) => (
            <article key={heading} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">{heading}</h2>
              <p className="mt-4 leading-7 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900">{t.design}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.designItems.map((item: string) => <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 font-semibold text-slate-800">{item}</div>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={`/${locale}/ai-energy-management`} className="font-semibold text-cyan-700 hover:text-cyan-900">AI Energy Management →</Link>
            <Link href={`/${locale}`} className="font-semibold text-slate-600 hover:text-slate-900">SISTEA →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
