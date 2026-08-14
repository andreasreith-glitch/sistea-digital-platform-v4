import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const locales = ["es", "en", "de"] as const;
type Locale = (typeof locales)[number];

const copy = {
  es: {
    title: "Refrigeración Industrial en El Salvador | SISTEA",
    description: "Diseño, modernización y optimización de refrigeración industrial en El Salvador y Centroamérica: Bitzer, R717, R744, HFO/HFC, cámaras frigoríficas, chillers y control inteligente.",
    eyebrow: "Refrigeración industrial",
    h1: "Refrigeración Industrial en El Salvador y Centroamérica",
    intro: "SISTEA diseña e integra sistemas de refrigeración industrial con enfoque en eficiencia energética, confiabilidad, control preciso y reducción del costo total de operación.",
    sections: [
      ["Sistemas con compresores Bitzer", "Integramos soluciones con compresores de alta eficiencia para aplicaciones de media y baja temperatura, procesos, cámaras frigoríficas y centrales de refrigeración."],
      ["Refrigerantes y arquitectura", "Evaluamos R717 (NH₃), R744 (CO₂), HFO/HFC y arquitecturas híbridas según temperatura, seguridad, normativa, disponibilidad de servicio y costo del ciclo de vida."],
      ["Eficiencia y recuperación de calor", "Optimizamos condensación, evaporación, variadores, secuenciación, recuperación de calor y control de demanda para reducir consumo y picos eléctricos."],
      ["Control y monitoreo", "Integramos PLC, BMS, Modbus TCP/IP, BACnet/IP, alarmas, tendencias y analítica para operación centralizada y mantenimiento predictivo."],
    ],
    applications: "Aplicaciones",
    items: ["Plantas de alimentos y bebidas", "Centros logísticos refrigerados", "Farmacéutica y laboratorios", "Procesos industriales", "Congelación y almacenamiento de baja temperatura", "Modernización de plantas existentes"],
    cta: "Solicitar evaluación de refrigeración industrial",
  },
  en: {
    title: "Industrial Refrigeration in El Salvador | SISTEA",
    description: "Industrial refrigeration design, retrofit and optimization in El Salvador and Central America: Bitzer, R717, R744, HFO/HFC, cold storage, chillers and intelligent controls.",
    eyebrow: "Industrial refrigeration",
    h1: "Industrial Refrigeration in El Salvador and Central America",
    intro: "SISTEA designs and integrates industrial refrigeration systems focused on energy efficiency, reliability, precise control and lower total cost of ownership.",
    sections: [
      ["Bitzer compressor systems", "We integrate high-efficiency compressor solutions for medium- and low-temperature applications, process cooling, cold rooms and central refrigeration plants."],
      ["Refrigerants and architecture", "We evaluate R717 (NH₃), R744 (CO₂), HFO/HFC and hybrid architectures based on temperature level, safety, regulations, serviceability and life-cycle cost."],
      ["Efficiency and heat recovery", "We optimize condensing, evaporating, variable-speed drives, sequencing, heat recovery and demand control to reduce energy use and electrical peaks."],
      ["Controls and monitoring", "We integrate PLCs, BMS, Modbus TCP/IP, BACnet/IP, alarms, trends and analytics for centralized operation and predictive maintenance."],
    ],
    applications: "Applications",
    items: ["Food and beverage plants", "Refrigerated logistics centers", "Pharmaceutical and laboratories", "Industrial processes", "Low-temperature freezing and storage", "Retrofit of existing plants"],
    cta: "Request an industrial refrigeration assessment",
  },
  de: {
    title: "Industriekälte in El Salvador | SISTEA Zentralamerika",
    description: "Planung, Modernisierung und Optimierung von Industriekälte in El Salvador und Zentralamerika: Bitzer, R717, R744, HFO/HFC, Kühlräume, Chiller und intelligente Regelung.",
    eyebrow: "Industriekälte",
    h1: "Industriekälte in El Salvador und Zentralamerika",
    intro: "SISTEA plant und integriert Industriekälteanlagen mit Fokus auf Energieeffizienz, Betriebssicherheit, präzise Regelung und niedrige Lebenszykluskosten.",
    sections: [
      ["Systeme mit Bitzer-Verdichtern", "Wir integrieren hocheffiziente Verdichterlösungen für Mittel- und Tiefkühlung, Prozesskälte, Kühlräume und zentrale Kälteanlagen."],
      ["Kältemittel und Systemarchitektur", "Wir bewerten R717 (NH₃), R744 (CO₂), HFO/HFC und hybride Konzepte nach Temperaturniveau, Sicherheit, Normen, Servicefähigkeit und Lebenszykluskosten."],
      ["Effizienz und Wärmerückgewinnung", "Wir optimieren Verflüssigung, Verdampfung, Frequenzumrichter, Anlagenfolge, Wärmerückgewinnung und Lastmanagement zur Senkung von Verbrauch und Lastspitzen."],
      ["Regelung und Monitoring", "Wir integrieren SPS, BMS, Modbus TCP/IP, BACnet/IP, Alarme, Trends und Analytik für zentrale Betriebsführung und Predictive Maintenance."],
    ],
    applications: "Anwendungen",
    items: ["Lebensmittel- und Getränkeindustrie", "Kühllogistik", "Pharma und Labore", "Industrielle Prozesse", "Tiefkühlung und Lagerung", "Modernisierung bestehender Anlagen"],
    cta: "Industriekälte bewerten lassen",
  },
} satisfies Record<Locale, any>;

function isLocale(value: string): value is Locale { return locales.includes(value as Locale); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = copy[locale];
  const url = `https://www.sisteasv.com/${locale}/industrial-refrigeration`;
  return { title: t.title, description: t.description, alternates: { canonical: url, languages: { es: "https://www.sisteasv.com/es/industrial-refrigeration", en: "https://www.sisteasv.com/en/industrial-refrigeration", de: "https://www.sisteasv.com/de/industrial-refrigeration", "x-default": "https://www.sisteasv.com/es/industrial-refrigeration" } }, openGraph: { title: t.title, description: t.description, url, type: "website" } };
}

export default async function IndustrialRefrigerationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: t.h1, description: t.description, provider: { "@type": "Organization", name: "SISTEA S.A. de C.V.", url: "https://www.sisteasv.com" }, areaServed: ["El Salvador", "Central America"], serviceType: ["Industrial refrigeration", "Cold storage", "R717 ammonia refrigeration", "R744 CO2 refrigeration", "Refrigeration energy optimization"] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="bg-slate-950 px-6 py-20 text-white"><div className="mx-auto max-w-6xl"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{t.eyebrow}</p><h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t.h1}</h1><p className="mt-7 max-w-4xl text-lg leading-8 text-slate-300">{t.intro}</p><Link href={`/${locale}#contact`} className="mt-9 inline-flex rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-500">{t.cta}</Link></div></section>
    <section className="px-6 py-16"><div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">{t.sections.map(([heading, body]: string[]) => <article key={heading} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold text-slate-900">{heading}</h2><p className="mt-4 leading-7 text-slate-600">{body}</p></article>)}</div></section>
    <section className="bg-slate-50 px-6 py-16"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-bold text-slate-900">{t.applications}</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{t.items.map((item: string) => <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 font-semibold text-slate-800">{item}</div>)}</div><div className="mt-10 flex flex-wrap gap-4"><Link href={`/${locale}/chillers`} className="font-semibold text-cyan-700 hover:text-cyan-900">Chillers →</Link><Link href={`/${locale}/cold-storage`} className="font-semibold text-cyan-700 hover:text-cyan-900">Cold Storage →</Link><Link href={`/${locale}/ai-energy-management`} className="font-semibold text-cyan-700 hover:text-cyan-900">AI Energy Management →</Link></div></div></section>
  </>;
}
