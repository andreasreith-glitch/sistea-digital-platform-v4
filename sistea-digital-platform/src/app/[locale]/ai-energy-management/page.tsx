import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const locales = ["es", "en", "de"] as const;
type Locale = (typeof locales)[number];

const copy = {
  es: {
    title: "Inteligencia Artificial para HVAC y Eficiencia Energética | SISTEA",
    description: "SISTEA integra inteligencia artificial, BMS, HVAC, refrigeración, chillers, almacenamiento de energía y gestión de cargas para optimizar instalaciones industriales en El Salvador y Centroamérica.",
    eyebrow: "IA + HVAC + Energía",
    h1: "Inteligencia Artificial para HVAC, Refrigeración y Eficiencia Energética",
    intro: "SISTEA conecta climatización, refrigeración industrial, chillers, ventilación, energía solar, baterías y automatización en una estrategia de control inteligente orientada a reducir consumo, demanda máxima y costos operativos.",
    sections: [
      ["Optimización HVAC y chillers", "La IA analiza cargas, temperaturas, humedad, horarios y condiciones exteriores para ajustar consignas, secuencias de equipos y capacidad en tiempo real."],
      ["Gestión energética inteligente", "Integramos medición, BMS, control de demanda, almacenamiento con baterías y generación fotovoltaica para coordinar consumo, producción y respaldo energético."],
      ["Mantenimiento predictivo", "El análisis continuo de tendencias ayuda a identificar desviaciones de rendimiento, ensuciamiento, fallas de sensores y patrones anómalos antes de que afecten la operación."],
      ["Integración industrial", "La arquitectura puede integrar PLC, BACnet/IP, Modbus TCP/IP, medidores, variadores de frecuencia y plataformas de supervisión existentes."],
    ],
    useCases: "Aplicaciones prioritarias",
    useCaseItems: ["Plantas industriales", "Centros logísticos y cámaras frigoríficas", "Hoteles y edificios comerciales", "Hospitales y laboratorios", "Centros de datos e infraestructura crítica"],
    cta: "Hablar con SISTEA sobre un proyecto de IA y eficiencia energética",
  },
  en: {
    title: "AI for HVAC and Energy Efficiency | SISTEA Central America",
    description: "SISTEA integrates AI, BMS, HVAC, industrial refrigeration, chillers, battery storage and load management to optimize industrial facilities in El Salvador and Central America.",
    eyebrow: "AI + HVAC + Energy",
    h1: "Artificial Intelligence for HVAC, Refrigeration and Energy Efficiency",
    intro: "SISTEA connects HVAC, industrial refrigeration, chillers, ventilation, solar generation, batteries and automation through intelligent control strategies designed to reduce energy use, peak demand and operating cost.",
    sections: [
      ["HVAC and chiller optimization", "AI evaluates load, temperature, humidity, schedules and outdoor conditions to optimize setpoints, equipment sequencing and capacity in real time."],
      ["Intelligent energy management", "We integrate metering, BMS, demand control, battery storage and photovoltaic generation to coordinate consumption, generation and backup power."],
      ["Predictive maintenance", "Continuous trend analysis helps detect efficiency drift, fouling, sensor faults and abnormal operating patterns before they impact production or comfort."],
      ["Industrial integration", "The architecture can integrate PLCs, BACnet/IP, Modbus TCP/IP, meters, variable-frequency drives and existing supervisory systems."],
    ],
    useCases: "Priority applications",
    useCaseItems: ["Industrial plants", "Cold storage and logistics centers", "Hotels and commercial buildings", "Hospitals and laboratories", "Data centers and critical infrastructure"],
    cta: "Discuss an AI and energy-efficiency project with SISTEA",
  },
  de: {
    title: "KI für HVAC und Energieeffizienz | SISTEA Zentralamerika",
    description: "SISTEA integriert KI, BMS, HVAC, Industriekälte, Chiller, Batteriespeicher und Lastmanagement zur Optimierung industrieller Anlagen in El Salvador und Zentralamerika.",
    eyebrow: "KI + HVAC + Energie",
    h1: "Künstliche Intelligenz für HVAC, Kältetechnik und Energieeffizienz",
    intro: "SISTEA verbindet Klimatisierung, Industriekälte, Chiller, Lüftung, Photovoltaik, Batteriespeicher und Automation in einer intelligenten Regelstrategie zur Senkung von Energieverbrauch, Lastspitzen und Betriebskosten.",
    sections: [
      ["Optimierung von HVAC und Chillern", "KI bewertet Lasten, Temperaturen, Feuchte, Betriebszeiten und Außenbedingungen und optimiert Sollwerte, Anlagenfolge und Leistung in Echtzeit."],
      ["Intelligentes Energiemanagement", "Wir integrieren Messung, BMS, Lastmanagement, Batteriespeicher und Photovoltaik, damit Verbrauch, Erzeugung und Versorgungssicherheit koordiniert arbeiten."],
      ["Predictive Maintenance", "Kontinuierliche Trendanalyse erkennt Wirkungsgradverluste, Verschmutzung, Sensorfehler und ungewöhnliche Betriebszustände frühzeitig."],
      ["Industrielle Integration", "Die Architektur kann SPS, BACnet/IP, Modbus TCP/IP, Zähler, Frequenzumrichter und bestehende Leitsysteme einbinden."],
    ],
    useCases: "Prioritäre Anwendungen",
    useCaseItems: ["Industriebetriebe", "Kühlhäuser und Logistikzentren", "Hotels und Gewerbegebäude", "Krankenhäuser und Labore", "Rechenzentren und kritische Infrastruktur"],
    cta: "KI- und Energieeffizienzprojekt mit SISTEA besprechen",
  },
} satisfies Record<Locale, any>;

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = copy[locale];
  const url = `https://www.sisteasv.com/${locale}/ai-energy-management`;
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: url,
      languages: {
        es: "https://www.sisteasv.com/es/ai-energy-management",
        en: "https://www.sisteasv.com/en/ai-energy-management",
        de: "https://www.sisteasv.com/de/ai-energy-management",
        "x-default": "https://www.sisteasv.com/es/ai-energy-management",
      },
    },
    openGraph: { title: t.title, description: t.description, url, type: "website" },
  };
}

export default async function AiEnergyManagementPage({ params }: { params: Promise<{ locale: string }> }) {
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
    serviceType: ["AI energy management", "HVAC optimization", "Industrial refrigeration optimization", "BMS integration", "Predictive maintenance"],
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
          {t.sections.map(([heading, body]: [string, string]) => (
            <article key={heading} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">{heading}</h2>
              <p className="mt-4 leading-7 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900">{t.useCases}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.useCaseItems.map((item: string) => <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 font-semibold text-slate-800">{item}</div>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={`/${locale}/ai-data-centers`} className="font-semibold text-cyan-700 hover:text-cyan-900">AI Data Centers →</Link>
            <Link href={`/${locale}`} className="font-semibold text-slate-600 hover:text-slate-900">SISTEA →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
