"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

type Locale = "de" | "en" | "es";

const copy = {
  de: {
    eyebrow: "Gewerbliche & industrielle Anwendungen",
    title: "Wo Kälte und Klima viel Energie verbrauchen, beginnt unser stärkstes Engineering.",
    intro:
      "SISTEA konzentriert sich auf Anwendungen mit hoher Betriebsdauer, messbaren Lasten und echtem Einsparpotenzial. Nicht das Einzelgerät steht im Mittelpunkt, sondern der komplette Energie- und Kälteprozess.",
    priorities: [
      ["Kühllogistik & Tiefkühllager", "Kühlhäuser, Tiefkühllager, Verteilzentren, kontrollierte Atmosphäre und energieoptimierte Kühlketten."],
      ["Lebensmittel & Getränke", "Schlachthöfe, Fleisch- und Fischverarbeitung, Molkereien, Brauereien, Getränkeabfüllung, Großküchen und Produktion."],
      ["Industrielle Prozesskälte", "Kunststoff, Metall, Laser, Galvanik, Druck, Papier, Chemie, Maschinen- und Werkzeugkühlung."],
      ["Rechenzentren & Präzisionsklima", "24/7-Kühlung, Redundanz, Lastmanagement, Batteriespeicher, Wärmerückgewinnung und intelligente Regelung."],
    ],
    moreTitle: "Weitere gewerbliche und industrielle Einsatzfelder",
    more: [
      "Supermärkte & Verkaufskühlung",
      "Metzgereien & Fleischverarbeitung",
      "Fischmärkte & Fischverarbeitung",
      "Molkereien & Käsereien",
      "Bäckereien & Teigkühlung",
      "Zentralküchen & Großküchen",
      "Weinkeller & Weinklimatisierung",
      "Blumen- & Pflanzenkühlung",
      "Pharma & temperaturgeführte Prozesse",
      "Reinräume & Labore",
      "Medikamentenlager 2–8 °C",
      "Tiefkühllager −20 bis −80 °C",
      "Obst- & Gemüselager / CA-Lager",
      "Milchkühlung & Landwirtschaft",
      "Aquakultur & Fischzucht",
      "Gewächshausklimatisierung",
      "Hotels, Kliniken & Großgebäude",
      "Museen, Archive & sensible Lagerung",
      "Eissporthallen & Kunsteisbahnen",
      "Kältespeicher & Eisspeicher",
    ],
    videoTitle: "Engineering in Bewegung – vom Kältesystem bis zum Energiemanagement",
    videoText:
      "Analyse, Anlagenprüfung, Luftführung, Energieerzeugung und Regelung gehören zusammen. Deshalb zeigen wir nicht nur Produkte, sondern den gesamten technischen Arbeitsprozess.",
    videoLabels: ["Kälteanlage & Prozess", "Luftsysteme & HVAC", "Energie & Photovoltaik"],
    modulesTitle: "Besonders stark wird der Ansatz, wenn mehrere Module zusammenarbeiten",
    modules: ["Lufttrocknung", "2-stufig adiabate Kühlung", "PV + Batteriespeicher", "Intelligente Regelung / BMS", "Thermische Beschichtung"],
    cta: "Anwendung mit SISTEA prüfen",
  },
  en: {
    eyebrow: "Commercial & industrial applications",
    title: "Where cooling and HVAC consume serious energy, our strongest engineering begins.",
    intro:
      "SISTEA focuses on applications with long operating hours, measurable loads and real savings potential. The complete cooling and energy process matters more than the individual machine.",
    priorities: [
      ["Cold logistics & freezer warehouses", "Cold stores, freezer distribution centers, controlled-atmosphere storage and energy-optimized cold chains."],
      ["Food & beverage", "Slaughterhouses, meat and fish processing, dairy, breweries, beverage filling, central kitchens and production."],
      ["Industrial process cooling", "Plastics, metals, laser systems, electroplating, printing, paper, chemicals, machinery and tooling."],
      ["Data centers & precision cooling", "24/7 cooling, redundancy, demand management, batteries, heat recovery and intelligent controls."],
    ],
    moreTitle: "Additional commercial and industrial fields",
    more: [
      "Supermarkets & display refrigeration",
      "Butchers & meat processing",
      "Fish markets & processing",
      "Dairy & cheese production",
      "Bakeries & dough cooling",
      "Central & commercial kitchens",
      "Wine cellars & wine climate control",
      "Flower & plant cooling",
      "Pharma & temperature-controlled processes",
      "Cleanrooms & laboratories",
      "Medicine storage 2–8 °C",
      "Low-temperature storage −20 to −80 °C",
      "Fruit & vegetable / CA storage",
      "Milk cooling & agriculture",
      "Aquaculture & fish farming",
      "Greenhouse climate control",
      "Hotels, hospitals & large buildings",
      "Museums, archives & sensitive storage",
      "Ice rinks",
      "Thermal & ice storage",
    ],
    videoTitle: "Engineering in motion – from cooling plant to energy management",
    videoText:
      "Analysis, equipment inspection, air systems, energy generation and controls belong together. We therefore show the complete engineering workflow, not only equipment.",
    videoLabels: ["Cooling plant & process", "Air systems & HVAC", "Energy & solar PV"],
    modulesTitle: "The approach becomes especially powerful when several modules work together",
    modules: ["Dehumidification", "Two-stage adiabatic cooling", "PV + batteries", "Intelligent controls / BMS", "Thermal coatings"],
    cta: "Review this application with SISTEA",
  },
  es: {
    eyebrow: "Aplicaciones comerciales e industriales",
    title: "Donde la refrigeración y el clima consumen mucha energía, empieza nuestro engineering más fuerte.",
    intro:
      "SISTEA se concentra en aplicaciones con muchas horas de operación, cargas medibles y un potencial real de ahorro. El proceso completo de frío y energía importa más que una máquina aislada.",
    priorities: [
      ["Logística refrigerada y congelados", "Cámaras, centros de distribución, almacenamiento con atmósfera controlada y cadenas de frío optimizadas."],
      ["Alimentos y bebidas", "Mataderos, carne, pescado, lácteos, cervecerías, embotellado, cocinas centrales y producción."],
      ["Refrigeración de proceso", "Plásticos, metal, láser, galvanizado, impresión, papel, química, máquinas y herramientas."],
      ["Data centers y clima de precisión", "Refrigeración 24/7, redundancia, gestión de demanda, baterías, recuperación de calor y control inteligente."],
    ],
    moreTitle: "Más aplicaciones comerciales e industriales",
    more: [
      "Supermercados y vitrinas refrigeradas",
      "Carnicerías y procesamiento de carne",
      "Pescaderías y procesamiento de pescado",
      "Lácteos y queserías",
      "Panaderías y enfriamiento de masa",
      "Cocinas centrales e industriales",
      "Bodegas y climatización de vino",
      "Flores y plantas",
      "Farmacéutica y procesos térmicos",
      "Salas limpias y laboratorios",
      "Medicamentos 2–8 °C",
      "Almacenamiento −20 a −80 °C",
      "Frutas, vegetales y atmósfera controlada",
      "Enfriamiento de leche y agricultura",
      "Acuicultura y piscicultura",
      "Climatización de invernaderos",
      "Hoteles, hospitales y grandes edificios",
      "Museos, archivos y almacenamiento sensible",
      "Pistas de hielo",
      "Almacenamiento térmico y hielo",
    ],
    videoTitle: "Engineering en movimiento – de la planta de frío a la gestión energética",
    videoText:
      "Análisis, inspección de equipos, sistemas de aire, generación energética y control forman un solo proceso. Por eso mostramos el trabajo técnico completo y no solo equipos.",
    videoLabels: ["Planta de frío y proceso", "Sistemas de aire y HVAC", "Energía y fotovoltaica"],
    modulesTitle: "El enfoque gana fuerza cuando varios módulos trabajan juntos",
    modules: ["Deshumidificación", "Enfriamiento adiabático de 2 etapas", "FV + baterías", "Control inteligente / BMS", "Recubrimiento térmico"],
    cta: "Revisar esta aplicación con SISTEA",
  },
} as const;

const priorityMedia = [
  { type: "image", src: "/images/solutions/cold-room-combi.webp" },
  { type: "image", src: "/images/solutions/industrial-refrigeration-plant.webp" },
  { type: "video", src: "/videos/engineers-inspect-cooling-plant.mp4", poster: "/images/solutions/industrial-refrigeration-skid.webp" },
  { type: "video", src: "/videos/engineers-inspect-energy-data-tablet.mp4", poster: "/images/solutions/water-cooled-chiller-arkref.webp" },
] as const;

const videoStrip = [
  "/videos/engineers-inspect-cooling-plant.mp4",
  "/videos/engineers-inspect-air-handling-system.mp4",
  "/videos/engineer-reviewing-solar-panels.mp4",
] as const;

export default function HomepageApplications({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [host, setHost] = useState<HTMLElement | null>(null);
  const t = copy[locale];

  useEffect(() => {
    const normalized = pathname.replace(/\/$/, "");
    if (normalized !== `/${locale}`) return;

    const marker = document.getElementById("manufacturers") || document.getElementById("tools");
    if (!marker || !marker.parentElement) return;

    const node = document.createElement("div");
    node.id = "sistea-industries-portal";
    marker.parentElement.insertBefore(node, marker);
    setHost(node);

    return () => {
      setHost(null);
      node.remove();
    };
  }, [locale, pathname]);

  if (!host) return null;

  return createPortal(
    <section id="industries" className="scroll-mt-24 overflow-hidden bg-[#0A3855] px-6 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-.025em] sm:text-4xl lg:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-sky-100/80">{t.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {t.priorities.map(([title, body], index) => {
            const media = priorityMedia[index];
            return (
              <article key={title} className="group overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_18px_55px_rgba(0,20,35,.28)] backdrop-blur-sm">
                <div className="h-52 overflow-hidden bg-[#EAF4F9] sm:h-60">
                  {media.type === "video" ? (
                    <video autoPlay muted loop playsInline preload="metadata" poster={media.poster} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]">
                      <source src={media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={media.src} alt="" loading="lazy" className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.03]" />
                  )}
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-sky-100/75">{body}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl border border-white/15 bg-white/8 p-6 sm:p-8">
          <h3 className="text-center text-2xl font-black sm:text-3xl">{t.moreTitle}</h3>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.more.map((item) => (
              <div key={item} className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-sm font-bold leading-5 text-sky-50/90">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-black sm:text-3xl">{t.videoTitle}</h3>
          <p className="mx-auto mt-4 max-w-3xl leading-7 text-sky-100/75">{t.videoText}</p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {videoStrip.map((src, index) => (
            <figure key={src} className="overflow-hidden rounded-3xl border border-white/15 bg-[#082D45] shadow-[0_18px_45px_rgba(0,20,35,.28)]">
              <video autoPlay muted loop playsInline preload="metadata" className="aspect-[16/10] w-full object-cover">
                <source src={src} type="video/mp4" />
              </video>
              <figcaption className="px-5 py-4 text-sm font-black text-cyan-100">{t.videoLabels[index]}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#0E78B7] to-[#0B5F8E] p-7 text-center shadow-[0_20px_55px_rgba(0,20,35,.26)] sm:p-9">
          <h3 className="text-2xl font-black">{t.modulesTitle}</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {t.modules.map((module) => (
              <span key={module} className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-bold text-white">{module}</span>
            ))}
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 font-black text-[#0B5F8E] transition hover:-translate-y-0.5 hover:shadow-xl">
            {t.cta} →
          </a>
        </div>
      </div>
    </section>,
    host,
  );
}
