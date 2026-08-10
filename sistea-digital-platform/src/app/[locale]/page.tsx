import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./components/ContactForm";

export const runtime = "edge";

const APP_URL = "https://jolly-wood-2bda.andreas-reith.workers.dev";
const AMAZON_URL = "https://www.amazon.com/author/andreasreith";
const WHATSAPP_URL = "https://wa.me/50377282624";

const translations = {
  es: {
    title: "SISTEA | HVAC, Refrigeración, Energía y ESI",
    description:
      "Ingeniería integral para HVAC, refrigeración industrial, chillers, energía, automatización, gestión de cargas y financiamiento ESI en Centroamérica.",

    heroEyebrow: "Ingeniería integral para Centroamérica",
    heroTitle:
      "Reducimos el consumo energético y diseñamos sistemas para una operación más eficiente, resiliente y autónoma.",
    heroText:
      "SISTEA integra HVAC, refrigeración industrial, chillers, ventilación, fotovoltaica, baterías, automatización, agua, gestión de cargas y financiamiento ESI.",

    project: "Solicitar análisis de proyecto",
    app: "Instalar Engineering Tools",
    free: "Evaluación energética gratuita",

    consultingEyebrow: "Energy & Engineering Consulting",
    consultingTitle:
      "De la factura eléctrica a una estrategia de máxima autonomía energética",
    consultingText:
      "Analizamos el consumo total, reducimos primero la demanda y después integramos generación propia, almacenamiento y control inteligente. El objetivo es reducir drásticamente la energía comprada a la red y avanzar, cuando sea técnica y económicamente viable, hacia una operación ampliamente autónoma.",

    consultingPoints: [
      "Análisis de facturas, demanda máxima y perfiles de carga",
      "Medición por áreas, procesos y equipos",
      "Optimización de chillers, HVAC, bombas, ventiladores y refrigeración",
      "Gestión de cargas, peak shaving y desplazamiento de demanda",
      "Fotovoltaica y almacenamiento con baterías",
      "Recuperación de calor y aprovechamiento de energía residual",
      "BMS, PLC, BACnet, Modbus y control inteligente",
      "CAPEX, OPEX, ROI y estrategia de implementación",
    ],

    chillerEyebrow: "Chiller Engineering",
    chillerTitle:
      "Chillers de alta eficiencia para edificios, industria y procesos",
    chillerText:
      "Evaluamos carga real, clima, perfil operativo, temperaturas de agua, redundancia, eficiencia estacional y costo total de propiedad.",
    chillerBrands: "Marcas consideradas según proyecto",

    chillerTech: [
      "Chillers enfriados por aire y por agua",
      "Scroll, tornillo y centrífugos",
      "Variadores de frecuencia y control de carga parcial",
      "Rodamientos magnéticos cuando la aplicación lo justifique",
      "Optimización hidráulica de plantas de agua helada",
      "Variable Primary Flow y sistemas primario/secundario",
      "Torres de enfriamiento y tratamiento de agua",
      "Recuperación de calor y retrofit",
      "Integración BMS y secuenciación automática",
    ],

    refrigeration: "Refrigeración industrial y cadena de frío",

    refrigerationItems: [
      "NH₃ / R717",
      "CO₂ / R744",
      "Cámaras frigoríficas y congelación",
      "Alimentos y bebidas",
      "Farmacéutica",
      "Almacenes y logística",
      "Recuperación de calor",
      "Optimización energética",
    ],

    loadEyebrow: "Load Management",
    loadTitle: "Gestión inteligente de cargas y reducción de picos",
    loadText:
      "Medimos dónde, cuándo y por qué se consume energía y coordinamos las cargas sin afectar la producción.",

    loadItems: [
      "Monitoreo de múltiples puntos",
      "Detección de picos y simultaneidades",
      "Priorización automática de cargas",
      "Integración de chillers, bombas, compresores, HVAC y producción",
      "Peak shaving con baterías",
      "Coordinación con fotovoltaica",
      "Alarmas, tendencias y dashboards",
      "Control BMS/PLC",
    ],

    freeTitle: "Primera revisión gratuita del consumo eléctrico",
    freeText:
      "Envíanos una factura eléctrica reciente y datos básicos de operación. SISTEA realiza una primera evaluación para identificar potencial de ahorro.",

    esiEyebrow: "ESI Financing",
    esiTitle: "La eficiencia energética también debe ser financiable",
    esiText:
      "SISTEA combina evaluación técnica, estimación de ahorro, análisis económico y estructuración financiera para convertir oportunidades de ahorro en proyectos ejecutables.",
    esiButton: "Cómo funciona el financiamiento ESI",

    toolsEyebrow: "SISTEA Engineering Tools",
    toolsTitle: "Lleva nuestras herramientas de cálculo en tu teléfono",
    toolsText:
      "Después del registro, SISTEA revisa los datos de contacto y habilita el acceso. Los cálculos pueden enviarse directamente a SISTEA para revisión técnica.",
    toolsButton: "Abrir e instalar la app",
    toolsNote: "App web instalable para iPhone y Android.",

    tools: [
      [
        "Cold Room Designer",
        "Cámaras frigoríficas y congelación.",
      ],
      [
        "Chiller System Designer",
        "Chillers, caudales e hidráulica.",
      ],
      [
        "Comfort Cooling Load",
        "Carga térmica para confort.",
      ],
      [
        "Engineering Unit Converter",
        "kW, TR, BTU/h, presión, caudal y más.",
      ],
    ],

    competence: "Competencias SISTEA",

    competences: [
      [
        "HVAC",
        "Climatización de edificios e industria.",
      ],
      [
        "Refrigeración industrial",
        "Proceso, almacenamiento y cadena de frío.",
      ],
      [
        "Ventilación",
        "Calidad de aire, extracción y distribución.",
      ],
      [
        "PV + baterías",
        "Generación propia, respaldo y peak shaving.",
      ],
      [
        "Automation",
        "BMS, PLC, BACnet, Modbus y monitoreo.",
      ],
      [
        "Agua",
        "Tratamiento y acondicionamiento.",
      ],
      [
        "Recuperación de calor",
        "Aprovechamiento de energía térmica residual.",
      ],
      [
        "Consultoría",
        "Estudios, ingeniería, factibilidad y optimización.",
      ],
    ],

    booksEyebrow: "SISTEA Engineering Series",
    booksTitle: "Ingeniería explicada desde la práctica",
    booksText:
      "Nuestros libros profundizan en refrigeración, HVAC, energía y sistemas industriales. Los principios de nuestros Engineering Tools se documentan en la SISTEA Engineering Series.",
    booksButton: "Ver libros en Amazon",

    contactTitle: "Hablemos de su proyecto",
    contactText:
      "Envíanos los datos básicos o contáctanos directamente por WhatsApp.",

    nav: [
      "Soluciones",
      "Energía",
      "Chillers",
      "Financiamiento",
      "App",
      "Libros",
      "Contacto",
    ],
  },

  en: {
    title: "SISTEA | HVAC, Refrigeration, Energy and ESI",
    description:
      "Integrated engineering for HVAC, industrial refrigeration, chillers, energy, automation, load management and ESI financing in Central America.",

    heroEyebrow: "Integrated engineering for Central America",
    heroTitle:
      "We reduce energy consumption and design systems for more efficient, resilient and autonomous operations.",
    heroText:
      "SISTEA integrates HVAC, industrial refrigeration, chillers, ventilation, solar PV, batteries, automation, water, load management and ESI financing.",

    project: "Request project analysis",
    app: "Install Engineering Tools",
    free: "Free energy review",

    consultingEyebrow: "Energy & Engineering Consulting",
    consultingTitle:
      "From the electric bill to a maximum-energy-autonomy strategy",
    consultingText:
      "We analyze total energy use, reduce demand first and then integrate onsite generation, storage and intelligent control. The objective is to drastically reduce grid purchases and move, where technically and economically viable, toward highly autonomous operation.",

    consultingPoints: [
      "Utility bills, peak demand and load profiles",
      "Submetering by area, process and equipment",
      "Optimization of chillers, HVAC, pumps, fans and refrigeration",
      "Load management, peak shaving and demand shifting",
      "Solar PV and battery storage",
      "Heat recovery and waste-energy utilization",
      "BMS, PLC, BACnet, Modbus and intelligent controls",
      "CAPEX, OPEX, ROI and implementation strategy",
    ],

    chillerEyebrow: "Chiller Engineering",
    chillerTitle:
      "High-efficiency chillers for buildings, industry and process applications",
    chillerText:
      "We evaluate real load, climate, operating profile, water temperatures, redundancy, seasonal efficiency and total cost of ownership.",
    chillerBrands: "Brands considered according to project",

    chillerTech: [
      "Air-cooled and water-cooled chillers",
      "Scroll, screw and centrifugal chillers",
      "Variable-speed drives and part-load control",
      "Magnetic-bearing systems where justified",
      "Hydraulic optimization of chilled-water plants",
      "Variable Primary Flow and primary/secondary systems",
      "Cooling towers and water treatment",
      "Heat recovery and retrofit",
      "BMS integration and automatic sequencing",
    ],

    refrigeration: "Industrial refrigeration and cold chain",

    refrigerationItems: [
      "NH₃ / R717",
      "CO₂ / R744",
      "Cold and freezer rooms",
      "Food and beverage",
      "Pharmaceutical",
      "Warehouses and logistics",
      "Heat recovery",
      "Energy optimization",
    ],

    loadEyebrow: "Load Management",
    loadTitle:
      "Intelligent load management and peak-demand reduction",
    loadText:
      "We measure where, when and why energy is consumed and coordinate loads without compromising production.",

    loadItems: [
      "Multi-point monitoring",
      "Peak and simultaneity detection",
      "Automatic load prioritization",
      "Integration of chillers, pumps, compressors, HVAC and production",
      "Battery peak shaving",
      "Coordination with solar PV",
      "Alarms, trends and dashboards",
      "BMS/PLC control",
    ],

    freeTitle: "Free initial electricity-consumption review",
    freeText:
      "Send us a recent electric bill and basic operating data. SISTEA performs an initial review to identify savings potential.",

    esiEyebrow: "ESI Financing",
    esiTitle: "Energy efficiency must also be financeable",
    esiText:
      "SISTEA combines technical evaluation, savings estimates, economic analysis and financing structure to turn efficiency opportunities into executable projects.",
    esiButton: "How ESI financing works",

    toolsEyebrow: "SISTEA Engineering Tools",
    toolsTitle: "Take our engineering calculators with you",
    toolsText:
      "After registration, SISTEA reviews the contact information and enables access. Calculations can be sent directly to SISTEA for technical review.",
    toolsButton: "Open and install the app",
    toolsNote: "Installable web app for iPhone and Android.",

    tools: [
      [
        "Cold Room Designer",
        "Cold and freezer rooms.",
      ],
      [
        "Chiller System Designer",
        "Chillers, flows and hydraulics.",
      ],
      [
        "Comfort Cooling Load",
        "Comfort cooling-load estimation.",
      ],
      [
        "Engineering Unit Converter",
        "kW, TR, BTU/h, pressure, flow and more.",
      ],
    ],

    competence: "SISTEA capabilities",

    competences: [
      [
        "HVAC",
        "Climate control for buildings and industry.",
      ],
      [
        "Industrial refrigeration",
        "Process, storage and cold chain.",
      ],
      [
        "Ventilation",
        "Air quality, exhaust and distribution.",
      ],
      [
        "Solar PV + batteries",
        "Onsite generation, backup and peak shaving.",
      ],
      [
        "Automation",
        "BMS, PLC, BACnet, Modbus and monitoring.",
      ],
      [
        "Water",
        "Treatment and conditioning.",
      ],
      [
        "Heat recovery",
        "Use of residual thermal energy.",
      ],
      [
        "Consulting",
        "Studies, engineering, feasibility and optimization.",
      ],
    ],

    booksEyebrow: "SISTEA Engineering Series",
    booksTitle:
      "Engineering knowledge built from practical experience",
    booksText:
      "Our books cover refrigeration, HVAC, energy and industrial systems in depth. The principles behind our Engineering Tools are documented in the SISTEA Engineering Series.",
    booksButton: "View books on Amazon",

    contactTitle: "Let's discuss your project",
    contactText:
      "Send us the basic information or contact us directly through WhatsApp.",

    nav: [
      "Solutions",
      "Energy",
      "Chillers",
      "Financing",
      "App",
      "Books",
      "Contact",
    ],
  },

  de: {
    title: "SISTEA | HVAC, Kälte, Energie und ESI",
    description:
      "Ganzheitliches Engineering für HVAC, Industriekälte, Chiller, Energie, Automation, Lastmanagement und ESI-Finanzierung in Zentralamerika.",

    heroEyebrow: "Ganzheitliches Engineering für Zentralamerika",
    heroTitle:
      "Wir reduzieren Energieverbrauch und entwickeln Systeme für effizientere, resilientere und möglichst autonome Betriebe.",
    heroText:
      "SISTEA verbindet HVAC, Industriekälte, Chiller, Lüftung, Photovoltaik, Batteriespeicher, Automation, Wasser, Lastmanagement und ESI-Finanzierung.",

    project: "Projektanalyse anfragen",
    app: "Engineering Tools installieren",
    free: "Kostenlose Energieprüfung",

    consultingEyebrow: "Energy & Engineering Consulting",
    consultingTitle:
      "Von der Stromrechnung zur Strategie für maximale Energieautarkie",
    consultingText:
      "Wir analysieren den gesamten Energieverbrauch, reduzieren zuerst die Nachfrage und integrieren anschließend Eigenerzeugung, Speicher und intelligente Regelung. Ziel ist eine drastische Reduzierung des Netzenergiebezugs und – wo technisch und wirtschaftlich sinnvoll – eine weitgehend autonome Betriebsweise.",

    consultingPoints: [
      "Stromrechnungen, Spitzenleistung und Lastprofile",
      "Messung nach Bereichen, Prozessen und Einzelverbrauchern",
      "Optimierung von Chillern, HVAC, Pumpen, Ventilatoren und Kälteanlagen",
      "Lastmanagement, Peak Shaving und Lastverschiebung",
      "Photovoltaik und Batteriespeicher",
      "Wärmerückgewinnung und Nutzung von Abwärme",
      "BMS, PLC, BACnet, Modbus und intelligente Regelung",
      "CAPEX, OPEX, ROI und Umsetzungsstrategie",
    ],

    chillerEyebrow: "Chiller Engineering",
    chillerTitle:
      "Hocheffiziente Chillersysteme für Gebäude, Industrie und Prozesse",
    chillerText:
      "Wir bewerten reale Kühllast, Klima, Betriebsprofil, Kaltwassertemperaturen, Redundanz, saisonale Effizienz und Total Cost of Ownership.",
    chillerBrands: "Je nach Projekt berücksichtigte Marken",

    chillerTech: [
      "Luft- und wassergekühlte Chiller",
      "Scroll-, Schrauben- und Zentrifugaltechnik",
      "Frequenzregelung und Teillastoptimierung",
      "Magnetlagertechnik, wenn sinnvoll",
      "Hydraulische Optimierung von Kaltwasseranlagen",
      "Variable Primary Flow und Primär-/Sekundärsysteme",
      "Kühltürme und Wasseraufbereitung",
      "Wärmerückgewinnung und Retrofit",
      "BMS-Integration und automatische Sequenzierung",
    ],

    refrigeration: "Industriekälte und Kühlkette",

    refrigerationItems: [
      "NH₃ / R717",
      "CO₂ / R744",
      "Kühl- und Tiefkühlräume",
      "Lebensmittel und Getränke",
      "Pharma",
      "Lager und Logistik",
      "Wärmerückgewinnung",
      "Energieoptimierung",
    ],

    loadEyebrow: "Lastmanagement",
    loadTitle:
      "Intelligentes Lastmanagement und Reduzierung von Leistungsspitzen",
    loadText:
      "Wir messen, wo, wann und warum Energie verbraucht wird und koordinieren Lasten ohne Beeinträchtigung der Produktion.",

    loadItems: [
      "Monitoring vieler Verbrauchspunkte",
      "Erkennung von Lastspitzen und Gleichzeitigkeit",
      "Automatische Lastpriorisierung",
      "Integration von Chillern, Pumpen, Kompressoren, HVAC und Produktion",
      "Peak Shaving mit Batteriespeichern",
      "Koordination mit Photovoltaik",
      "Alarme, Trends und Dashboards",
      "BMS-/PLC-Steuerung",
    ],

    freeTitle:
      "Kostenlose Erstprüfung des elektrischen Verbrauchs",
    freeText:
      "Sende uns eine aktuelle Stromrechnung und grundlegende Betriebsdaten. SISTEA prüft zunächst kostenlos, ob ein relevantes Einsparpotenzial erkennbar ist.",

    esiEyebrow: "ESI-Finanzierung",
    esiTitle: "Energieeffizienz muss auch finanzierbar sein",
    esiText:
      "SISTEA verbindet technische Bewertung, Einsparprognose, Wirtschaftlichkeitsanalyse und Finanzierungsstruktur zu umsetzbaren Effizienzprojekten.",
    esiButton: "ESI-Finanzierung verstehen",

    toolsEyebrow: "SISTEA Engineering Tools",
    toolsTitle:
      "Unsere Berechnungstools direkt auf deinem Smartphone",
    toolsText:
      "Nach der Registrierung prüft SISTEA die Kontaktdaten und gibt den Zugang frei. Berechnungen können direkt zur technischen Prüfung an SISTEA übertragen werden.",
    toolsButton: "App öffnen und installieren",
    toolsNote:
      "Installierbare Web-App für iPhone und Android.",

    tools: [
      [
        "Cold Room Designer",
        "Kühl- und Tiefkühlräume.",
      ],
      [
        "Chiller System Designer",
        "Chiller, Volumenströme und Hydraulik.",
      ],
      [
        "Comfort Cooling Load",
        "Kühllast für Komfortklima.",
      ],
      [
        "Engineering Unit Converter",
        "kW, TR, BTU/h, Druck, Volumenstrom und mehr.",
      ],
    ],

    competence: "SISTEA-Kompetenzen",

    competences: [
      [
        "HVAC",
        "Klimatisierung für Gebäude und Industrie.",
      ],
      [
        "Industriekälte",
        "Prozess, Lagerung und Kühlkette.",
      ],
      [
        "Lüftung",
        "Luftqualität, Absaugung und Verteilung.",
      ],
      [
        "PV + Batteriespeicher",
        "Eigenerzeugung, Backup und Peak Shaving.",
      ],
      [
        "Automation",
        "BMS, PLC, BACnet, Modbus und Monitoring.",
      ],
      [
        "Wasser",
        "Aufbereitung und Konditionierung.",
      ],
      [
        "Wärmerückgewinnung",
        "Nutzung thermischer Restenergie.",
      ],
      [
        "Consulting",
        "Studien, Engineering, Machbarkeit und Optimierung.",
      ],
    ],

    booksEyebrow: "SISTEA Engineering Series",
    booksTitle: "Ingenieurwissen aus der Praxis",
    booksText:
      "Unsere Fachbücher vertiefen Kältetechnik, HVAC, Energie und industrielle Systeme. Die Grundlagen unserer Engineering Tools werden in der SISTEA Engineering Series dokumentiert.",
    booksButton: "Fachbücher bei Amazon ansehen",

    contactTitle: "Lass uns dein Projekt prüfen",
    contactText:
      "Sende uns die wichtigsten Angaben oder kontaktiere uns direkt über WhatsApp.",

    nav: [
      "Lösungen",
      "Energie",
      "Chiller",
      "Finanzierung",
      "App",
      "Bücher",
      "Kontakt",
    ],
  },
} as const;

type Locale = keyof typeof translations;

function localeOf(value: string): Locale {
  if (value === "en" || value === "de") {
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
  const t = translations[localeOf(locale)];

  return {
    title: t.title,
    description: t.description,
  };
}

function Bullets({
  items,
}: {
  items: readonly string[];
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-6 text-slate-700"
        >
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = localeOf(locale);
  const t = translations[currentLocale];

  const navLinks = [
    "#solutions",
    "#energy",
    "#chillers",
    "#esi",
    "#tools",
    "#books",
    "#contact",
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href={`/${currentLocale}`}
            className="text-2xl font-black text-slate-950"
          >
            SISTEA
          </Link>

          <nav className="hidden gap-5 text-sm font-semibold text-slate-700 xl:flex">
            {navLinks.map((href, index) => (
              <a key={href} href={href}>
                {t.nav[index]}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            {(["es", "en", "de"] as const).map((language) => (
              <Link
                key={language}
                href={`/${language}`}
                className={
                  currentLocale === language
                    ? "rounded bg-cyan-600 px-3 py-2 text-xs font-black text-white"
                    : "rounded bg-slate-100 px-3 py-2 text-xs font-black text-slate-700"
                }
              >
                {language.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero/san-salvador-skyline.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/videos/sistea-hero-web.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-400">
            {t.heroEyebrow}
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
            {t.heroTitle}
          </h1>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200">
            {t.heroText}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="rounded-lg bg-cyan-600 px-6 py-3 text-center font-black"
            >
              {t.project}
            </a>

            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-6 py-3 text-center font-black text-slate-950"
            >
              {t.app}
            </a>

            <a
              href="#energy-review"
              className="rounded-lg border border-white/40 px-6 py-3 text-center font-black"
            >
              {t.free}
            </a>
          </div>
        </div>
      </section>

      <section
        id="energy"
        className="bg-white px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.18em] text-cyan-700">
              {t.consultingEyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-950">
              {t.consultingTitle}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {t.consultingText}
            </p>

            <a
              href="#energy-review"
              className="mt-8 inline-flex rounded-lg bg-slate-950 px-6 py-3 font-black text-white"
            >
              {t.free}
            </a>
          </div>

          <div className="rounded-2xl bg-slate-50 p-8">
            <Bullets items={t.consultingPoints} />
          </div>
        </div>
      </section>

      <section
        id="chillers"
        className="bg-slate-950 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.18em] text-cyan-400">
            {t.chillerEyebrow}
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black">
            {t.chillerTitle}
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            {t.chillerText}
          </p>

          <p className="mt-10 text-sm font-black uppercase tracking-[0.16em] text-slate-300">
            {t.chillerBrands}
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["YORK", "Carrier", "Trane", "TICA"].map(
              (brand) => (
                <div
                  key={brand}
                  className="rounded-xl border border-white/15 bg-white/5 p-7 text-center text-2xl font-black"
                >
                  {brand}
                </div>
              ),
            )}
          </div>

          <div className="mt-10 rounded-2xl bg-white p-8 text-slate-950">
            <Bullets items={t.chillerTech} />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">
            {t.refrigeration}
          </h2>

          <div className="mt-9">
            <Bullets items={t.refrigerationItems} />
          </div>
        </div>
      </section>

      <section
        id="energy-review"
        className="bg-cyan-50 px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.18em] text-cyan-800">
              {t.loadEyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-black">
              {t.loadTitle}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              {t.loadText}
            </p>

            <div className="mt-8">
              <Bullets items={t.loadItems} />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black">
              {t.freeTitle}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {t.freeText}
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex rounded-lg bg-cyan-600 px-6 py-3 font-black text-white"
            >
              {t.free}
            </a>
          </div>
        </div>
      </section>

      <section
        id="esi"
        className="bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.18em] text-cyan-700">
            {t.esiEyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black">
            {t.esiTitle}
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            {t.esiText}
          </p>

          <Link
            href={`/${currentLocale}/esi`}
            className="mt-8 inline-flex rounded-lg bg-slate-950 px-6 py-3 font-black text-white"
          >
            {t.esiButton}
          </Link>
        </div>
      </section>

      <section
        id="tools"
        className="bg-slate-950 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.18em] text-cyan-400">
            {t.toolsEyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black">
            {t.toolsTitle}
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            {t.toolsText}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {t.tools.map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-white/15 bg-white/5 p-7"
              >
                <h3 className="text-xl font-black">
                  {title}
                </h3>

                <p className="mt-3 text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-lg bg-cyan-500 px-7 py-4 text-lg font-black text-slate-950"
          >
            {t.toolsButton}
          </a>

          <p className="mt-3 text-sm text-slate-400">
            {t.toolsNote}
          </p>
        </div>
      </section>

      <section
        id="solutions"
        className="bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">
            {t.competence}
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.competences.map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="books"
        className="bg-slate-100 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl rounded-2xl bg-white p-10">
          <p className="font-black uppercase tracking-[0.18em] text-cyan-700">
            {t.booksEyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black">
            {t.booksTitle}
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            {t.booksText}
          </p>

          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-lg bg-slate-950 px-6 py-3 font-black text-white"
          >
            {t.booksButton}
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="bg-white px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black">
              {t.contactTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {t.contactText}
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-lg bg-emerald-600 px-6 py-3 font-black text-white"
            >
              WhatsApp
            </a>

            <div className="mt-8 space-y-2 text-sm text-slate-600">
              <p>SISTEA S.A. de C.V.</p>
              <p>info@sisteasv.com</p>
              <p>www.sisteasv.com</p>
              <p>WhatsApp +503 7728-2624</p>
            </div>
          </div>

          <ContactForm locale={currentLocale} />
        </div>
      </section>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-emerald-600 px-5 py-4 font-black text-white shadow-xl"
      >
        WhatsApp
      </a>
    </>
  );
}
