"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import EnergyCostCalculator from "./EnergyCostCalculator";

type Locale = "de" | "en" | "es";
type SectionId = "consulting" | "energy" | "esi" | "solutions" | "manufacturers" | "tools";

type HostMap = Record<SectionId, HTMLElement | null>;

const initialHosts: HostMap = {
  consulting: null,
  energy: null,
  esi: null,
  solutions: null,
  manufacturers: null,
  tools: null,
};

const copy = {
  de: {
    processEyebrow: "SISTEA Engineering Flow",
    processTitle: "Vom ersten Messwert bis zur optimierten Anlage – ein Projekt, eine Verantwortung.",
    processText: "Keine getrennten Inseln für Consulting, Planung, Einkauf und Installation. SISTEA führt die technischen und wirtschaftlichen Entscheidungen durchgängig zusammen.",
    processSteps: [
      ["01", "Verstehen", "Ziele, Prozesse, Randbedingungen"],
      ["02", "Messen", "Verbrauch, Last, Temperatur, Feuchte"],
      ["03", "Entwerfen", "Systemkonzept, Hydraulik, Regelung"],
      ["04", "Bewerten", "CAPEX, OPEX, Einsparung, Risiko"],
      ["05", "Beschaffen", "Technik, Qualität, Lieferkette"],
      ["06", "Realisieren", "Installation, Inbetriebnahme"],
      ["07", "Optimieren", "Monitoring, Feintuning, Performance"],
    ],
    energyEyebrow: "Kostenloser Energy Quick Check",
    energyTitle: "Energiekosten sichtbar machen. Einsparpotenziale in Sekunden verstehen.",
    energyText: "Ein schneller Einstieg für Gewerbe und Industrie: Stromrechnung, Verbrauch und Last eingeben – Jahreskosten und drei Einsparszenarien sofort sehen. Danach kann SISTEA die 6–12 Monate Stromrechnungen professionell auswerten.",
    energyBadges: ["El Salvador: 0,160 USD/kWh als Referenz", "20 / 30 / ~40 % Screening", "NDA auf Wunsch vor Datenübermittlung"],
    financeEyebrow: "Engineering + Finanzierung",
    financeTitle: "Effizienz darf nicht an der Investition scheitern.",
    financeLead: "Technische Einsparung wird erst dann wertvoll, wenn sie finanzierbar, messbar und vertraglich belastbar ist.",
    financeModels: [
      ["01", "ESI · Energy Savings Insurance", "Einsparung, Baseline, technische Validierung und Risikoreduzierung werden zu einer bankfähigen Projektstruktur zusammengeführt."],
      ["02", "Cooling-as-a-Service", "Der Kunde kann definierte Kühlleistung beziehen, statt die komplette Kälteanlage zwingend selbst zu kaufen. Betrieb, Wartung und Performance können integriert werden."],
      ["03", "SISTEA Project-as-a-Service", "Analyse, Engineering, Finanzierung, Beschaffung, Installation, Inbetriebnahme, Monitoring und Optimierung als integriertes Projektmodell."],
    ],
    financeCta: "Finanzierungsmodelle im Detail ansehen",
    solutionsEyebrow: "Cooling & HVAC Engineering",
    solutionsTitle: "Technik für reale industrielle Lasten – kompakt, klar und projektbezogen.",
    solutionsText: "Wir zeigen die Systeme getrennt vom Text: saubere Technikbilder, kurze Aussagen und klare Anwendungsbezüge. Die Auswahl erfolgt erst nach Last-, Betriebs- und Wirtschaftlichkeitsanalyse.",
    solutionCards: [
      ["Chilleranlagen", "Luft- und wassergekühlt, VFD, Hydraulik, Redundanz und Regelung."],
      ["Industriekälte", "NH₃/R717, CO₂/R744, Skids, Maschinenräume und Prozesskälte."],
      ["Kühl- & Tiefkühlzellen", "Lebensmittel, Pharma, Logistik und temperaturgeführte Lagerung."],
      ["BITZER-Aggregate", "Verdichteraggregate, Verbundtechnik, Verdampfer und Kondensation."],
      ["VRF / VRV", "Gewerbliche Gebäude, Hotels, Büros und Retrofit."],
      ["2-stufig adiabate Kühlung", "Sehr niedriger elektrischer Bedarf bei geeigneten Klimabedingungen."],
      ["Reale adiabate Systeme", "Integration in industrielle und gewerbliche Anlagen."],
      ["Wassergekühlte Systeme", "Chiller, Kühltürme, Pumpen, Wasserqualität und Gesamtregelung."],
    ],
    manufacturersEyebrow: "Chiller-Auswahl nach Projektanforderung",
    manufacturersTitle: "Technische Chiller-Dokumentation führender Hersteller – direkt bei SISTEA.",
    manufacturersText: "YORK, Carrier, Trane und TICA werden projektbezogen nach Last, Effizienz, Hydraulik, Schall, Kältemittel, Regelung, Redundanz und Total Cost of Ownership verglichen. Die technischen Kurzunterlagen bleiben auf der SISTEA-Webseite – ohne Weiterleitung zu Lieferantenseiten.",
    air: "Luftgekühlte Chiller",
    water: "Wassergekühlte Chiller",
    brochure: "Technische Broschüre",
    toolsEyebrow: "SISTEA Engineering Tools · DE · EN · ES",
    toolsTitle: "Drei Sprachen. Installierbar. Technische Berechnungen direkt vor Ort.",
    toolsLead: "Die Engineering Tools sind kein dekoratives Extra – sie sind ein zentraler Bestandteil der SISTEA Digital Platform.",
    toolsText: "Kunden und Techniker können erste Projektwerte strukturiert erfassen und Berechnungen für Kühlräume, Chiller, Komfortkühllasten und Einheiten durchführen. Danach übernimmt SISTEA die professionelle Validierung, Normenprüfung und Auslegung.",
    toolsFeatures: ["Deutsch · English · Español", "Cold Room Designer", "Chiller System Designer", "Comfort Cooling Load", "Engineering Unit Converter", "Installierbar auf iPhone & Android"],
    toolsCta: "Engineering Tools öffnen und installieren",
  },
  en: {
    processEyebrow: "SISTEA Engineering Flow",
    processTitle: "From the first measurement to the optimized system – one project, one responsibility.",
    processText: "No isolated hand-offs between consulting, design, procurement and installation. SISTEA connects technical and economic decisions from start to finish.",
    processSteps: [
      ["01", "Understand", "Goals, processes, constraints"],
      ["02", "Measure", "Consumption, load, temperature, humidity"],
      ["03", "Design", "System concept, hydraulics, controls"],
      ["04", "Evaluate", "CAPEX, OPEX, savings, risk"],
      ["05", "Procure", "Technology, quality, supply chain"],
      ["06", "Implement", "Installation and commissioning"],
      ["07", "Optimize", "Monitoring, fine-tuning, performance"],
    ],
    energyEyebrow: "Free Energy Quick Check",
    energyTitle: "Make energy costs visible. Understand savings potential in seconds.",
    energyText: "A fast starting point for commercial and industrial users: enter bill amount, consumption and demand to see annual cost and three savings scenarios instantly. SISTEA can then review 6–12 months of electricity bills professionally.",
    energyBadges: ["El Salvador reference: USD 0.160/kWh", "20 / 30 / ~40% screening", "NDA available before data transfer"],
    financeEyebrow: "Engineering + Financing",
    financeTitle: "Efficiency should not fail because of investment barriers.",
    financeLead: "Technical savings become valuable when they are financeable, measurable and contractually robust.",
    financeModels: [
      ["01", "ESI · Energy Savings Insurance", "Savings, baseline, technical validation and risk reduction are combined into a bankable project structure."],
      ["02", "Cooling-as-a-Service", "The customer can purchase defined cooling service instead of necessarily buying the entire plant. Operation, maintenance and performance can be integrated."],
      ["03", "SISTEA Project-as-a-Service", "Analysis, engineering, financing, procurement, installation, commissioning, monitoring and optimization as an integrated project model."],
    ],
    financeCta: "View financing models in detail",
    solutionsEyebrow: "Cooling & HVAC Engineering",
    solutionsTitle: "Technology for real industrial loads – compact, clear and project-specific.",
    solutionsText: "Clean technical visuals, concise explanations and real application context. Equipment selection follows load, operating and economic analysis.",
    solutionCards: [
      ["Chiller plants", "Air- and water-cooled, VFD, hydraulics, redundancy and controls."],
      ["Industrial refrigeration", "NH₃/R717, CO₂/R744, skids, machine rooms and process cooling."],
      ["Cold & freezer rooms", "Food, pharma, logistics and temperature-controlled storage."],
      ["BITZER units", "Condensing units, racks, evaporators and heat rejection."],
      ["VRF / VRV", "Commercial buildings, hotels, offices and retrofit."],
      ["Two-stage adiabatic cooling", "Very low electrical demand where climate conditions allow."],
      ["Real adiabatic systems", "Integration into industrial and commercial facilities."],
      ["Water-cooled systems", "Chillers, cooling towers, pumps, water quality and controls."],
    ],
    manufacturersEyebrow: "Chiller selection by project requirement",
    manufacturersTitle: "Technical chiller documentation from leading manufacturers – directly at SISTEA.",
    manufacturersText: "YORK, Carrier, Trane and TICA are compared by load, efficiency, hydraulics, sound, refrigerant, controls, redundancy and total cost of ownership. Technical summaries remain on the SISTEA website without redirecting visitors to supplier pages.",
    air: "Air-cooled chillers",
    water: "Water-cooled chillers",
    brochure: "Technical brochure",
    toolsEyebrow: "SISTEA Engineering Tools · DE · EN · ES",
    toolsTitle: "Three languages. Installable. Engineering calculations directly on site.",
    toolsLead: "The Engineering Tools are not a decorative add-on – they are a core part of the SISTEA Digital Platform.",
    toolsText: "Customers and technicians can structure project data and perform initial calculations for cold rooms, chillers, comfort cooling loads and engineering units. SISTEA then performs professional validation, standards review and final design.",
    toolsFeatures: ["Deutsch · English · Español", "Cold Room Designer", "Chiller System Designer", "Comfort Cooling Load", "Engineering Unit Converter", "Installable on iPhone & Android"],
    toolsCta: "Open and install Engineering Tools",
  },
  es: {
    processEyebrow: "SISTEA Engineering Flow",
    processTitle: "Desde la primera medición hasta el sistema optimizado – un proyecto, una responsabilidad.",
    processText: "Sin entregas aisladas entre consultoría, diseño, compras e instalación. SISTEA conecta las decisiones técnicas y económicas de principio a fin.",
    processSteps: [
      ["01", "Entender", "Objetivos, procesos, condiciones"],
      ["02", "Medir", "Consumo, carga, temperatura, humedad"],
      ["03", "Diseñar", "Concepto, hidráulica, control"],
      ["04", "Evaluar", "CAPEX, OPEX, ahorro, riesgo"],
      ["05", "Comprar", "Tecnología, calidad, suministro"],
      ["06", "Implementar", "Instalación y puesta en marcha"],
      ["07", "Optimizar", "Monitoreo, ajustes, performance"],
    ],
    energyEyebrow: "Energy Quick Check gratuito",
    energyTitle: "Hacer visibles los costos de energía. Entender el potencial de ahorro en segundos.",
    energyText: "Un inicio rápido para comercio e industria: ingresa factura, consumo y demanda para ver el costo anual y tres escenarios de ahorro. Después SISTEA puede analizar profesionalmente 6–12 meses de facturas eléctricas.",
    energyBadges: ["Referencia El Salvador: USD 0.160/kWh", "Screening 20 / 30 / ~40 %", "NDA disponible antes de enviar datos"],
    financeEyebrow: "Engineering + Financiamiento",
    financeTitle: "La eficiencia no debe fracasar por barreras de inversión.",
    financeLead: "El ahorro técnico gana valor cuando es financiable, medible y contractualmente sólido.",
    financeModels: [
      ["01", "ESI · Energy Savings Insurance", "Ahorro, línea base, validación técnica y reducción de riesgo se integran en una estructura de proyecto financiable."],
      ["02", "Cooling-as-a-Service", "El cliente puede contratar un servicio de enfriamiento definido en lugar de comprar obligatoriamente toda la planta. Operación, mantenimiento y desempeño pueden integrarse."],
      ["03", "SISTEA Project-as-a-Service", "Análisis, engineering, financiamiento, compras, instalación, puesta en marcha, monitoreo y optimización como modelo integrado."],
    ],
    financeCta: "Ver modelos de financiamiento en detalle",
    solutionsEyebrow: "Cooling & HVAC Engineering",
    solutionsTitle: "Tecnología para cargas industriales reales – compacta, clara y específica al proyecto.",
    solutionsText: "Imágenes técnicas limpias, explicaciones breves y aplicaciones reales. La selección del equipo llega después del análisis de carga, operación y economía.",
    solutionCards: [
      ["Plantas de chillers", "Aire y agua, VFD, hidráulica, redundancia y control."],
      ["Refrigeración industrial", "NH₃/R717, CO₂/R744, skids, salas de máquinas y procesos."],
      ["Cámaras frías y congeladas", "Alimentos, pharma, logística y almacenamiento controlado."],
      ["Unidades BITZER", "Unidades condensadoras, racks, evaporadores y condensación."],
      ["VRF / VRV", "Edificios comerciales, hoteles, oficinas y retrofit."],
      ["Enfriamiento adiabático 2 etapas", "Muy bajo consumo eléctrico donde el clima lo permite."],
      ["Sistemas adiabáticos reales", "Integración en instalaciones industriales y comerciales."],
      ["Sistemas enfriados por agua", "Chillers, torres, bombas, calidad de agua y control."],
    ],
    manufacturersEyebrow: "Selección de chillers según el proyecto",
    manufacturersTitle: "Documentación técnica de chillers de fabricantes líderes – directamente en SISTEA.",
    manufacturersText: "YORK, Carrier, Trane y TICA se comparan según carga, eficiencia, hidráulica, ruido, refrigerante, control, redundancia y costo total de propiedad. Los resúmenes técnicos permanecen en la web de SISTEA sin desviar al visitante a páginas de proveedores.",
    air: "Chillers enfriados por aire",
    water: "Chillers enfriados por agua",
    brochure: "Brochure técnica",
    toolsEyebrow: "SISTEA Engineering Tools · DE · EN · ES",
    toolsTitle: "Tres idiomas. Instalable. Cálculos técnicos directamente en obra.",
    toolsLead: "Las Engineering Tools no son un adorno – son una parte central de la SISTEA Digital Platform.",
    toolsText: "Clientes y técnicos pueden estructurar datos del proyecto y realizar cálculos iniciales para cámaras, chillers, carga de confort y unidades. Después SISTEA realiza la validación profesional, revisión normativa y diseño final.",
    toolsFeatures: ["Deutsch · English · Español", "Cold Room Designer", "Chiller System Designer", "Comfort Cooling Load", "Engineering Unit Converter", "Instalable en iPhone y Android"],
    toolsCta: "Abrir e instalar Engineering Tools",
  },
} as const;

const solutionImages = [
  "/images/solutions/water-cooled-chiller-arkref.webp",
  "/images/solutions/industrial-refrigeration-plant.webp",
  "/images/solutions/cold-room-combi.webp",
  "/images/solutions/bitzer-cold-room-condensing-unit.webp",
  "/images/solutions/vrf-outdoor-unit.webp",
  "/images/solutions/two-stage-adiabatic-system-diagram.webp",
  "/images/solutions/adiabatic-cooling-installation.webp",
  "/images/solutions/industrial-refrigeration-skid.webp",
] as const;

const manufacturerData = [
  { name: "YORK", air: "/brochures/chillers/york-air-cooled-chillers.pdf", water: "/brochures/chillers/york-water-cooled-chillers.pdf" },
  { name: "Carrier", air: "/brochures/chillers/carrier-air-cooled-chillers-30XF.pdf", water: "/brochures/chillers/carrier-water-cooled-chillers-30XW-V.pdf" },
  { name: "TRANE", air: "/brochures/chillers/trane-air-cooled-chillers-RTAG.pdf", water: null },
  { name: "TICA", air: "/brochures/chillers/tica-air-cooled-chillers.pdf", water: "/brochures/chillers/tica-water-cooled-chillers.pdf" },
] as const;

const APP_URL = "https://sistea-engineering-tools-secure.andreas-reith.workers.dev";

export default function HomepagePremiumUpgrade({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [hosts, setHosts] = useState<HostMap>(initialHosts);
  const t = copy[locale];

  useEffect(() => {
    const normalized = pathname.replace(/\/$/, "");
    if (normalized !== `/${locale}`) return;

    const next: HostMap = { ...initialHosts };
    const originals: Array<{ node: HTMLElement; id: SectionId }> = [];

    (Object.keys(initialHosts) as SectionId[]).forEach((id) => {
      const node = document.getElementById(id);
      if (!node || !node.parentElement) return;
      const host = document.createElement("div");
      host.id = `${id}-premium-host`;
      node.parentElement.insertBefore(host, node);
      node.id = `${id}-legacy`;
      node.style.display = "none";
      originals.push({ node, id });
      next[id] = host;
    });

    setHosts(next);

    return () => {
      originals.forEach(({ node, id }) => {
        node.id = id;
        node.style.display = "";
      });
      (Object.values(next) as Array<HTMLElement | null>).forEach((host) => host?.remove());
      setHosts(initialHosts);
    };
  }, [locale, pathname]);

  const process = (
    <section id="consulting" className="scroll-mt-24 overflow-hidden bg-[#082D45] px-6 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">{t.processEyebrow}</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-.03em] sm:text-4xl lg:text-5xl">{t.processTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-sky-100/75">{t.processText}</p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,.25)]">
              <video autoPlay muted loop playsInline preload="metadata" className="aspect-[16/9] w-full object-cover">
                <source src="/videos/energy-efficiency-project-visual.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {t.processSteps.map(([number, title, body]) => (
              <div key={number} className="grid grid-cols-[52px_1fr] items-center gap-4 rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-400/15 text-sm font-black text-cyan-200">{number}</div>
                <div>
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-1 text-sm leading-5 text-sky-100/65">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const energy = (
    <section id="energy" className="scroll-mt-24 bg-gradient-to-b from-[#0B3A57] to-[#0E4D70] px-6 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">{t.energyEyebrow}</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-.03em] sm:text-4xl lg:text-5xl">{t.energyTitle}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-sky-100/75">{t.energyText}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {t.energyBadges.map((badge) => <span key={badge} className="rounded-full border border-cyan-200/20 bg-white/8 px-4 py-2 text-xs font-bold text-cyan-50">{badge}</span>)}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl">
          <EnergyCostCalculator locale={locale} />
        </div>
      </div>
    </section>
  );

  const financing = (
    <section id="esi" className="scroll-mt-24 overflow-hidden bg-[#071F31] px-6 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">{t.financeEyebrow}</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-.03em] sm:text-4xl lg:text-5xl">{t.financeTitle}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-xl font-bold leading-8 text-sky-100/85">{t.financeLead}</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {t.financeModels.map(([number, title, body], index) => (
            <article key={title} className={`rounded-3xl border p-6 sm:p-7 ${index === 1 ? "border-cyan-300/35 bg-gradient-to-br from-[#0E78B7]/30 to-white/8" : "border-white/12 bg-white/7"}`}>
              <div className="text-5xl font-black text-cyan-300/30">{number}</div>
              <h3 className="mt-3 text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-sky-100/70">{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <a href={`/${locale}/financing`} className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3.5 font-black text-[#062238] shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-300">{t.financeCta} →</a>
        </div>
      </div>
    </section>
  );

  const solutions = (
    <section id="solutions" className="scroll-mt-24 bg-[#103F5C] px-6 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">{t.solutionsEyebrow}</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-.03em] sm:text-4xl lg:text-5xl">{t.solutionsTitle}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-sky-100/75">{t.solutionsText}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.solutionCards.map(([title, body], index) => (
            <article key={title} className="overflow-hidden rounded-3xl border border-white/12 bg-white/8 shadow-[0_18px_45px_rgba(0,20,35,.18)]">
              <div className="grid h-44 place-items-center bg-[#E6F1F7] p-4">
                <img src={solutionImages[index] ?? solutionImages[0]} alt={title} loading="lazy" className="max-h-full w-full object-contain" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-sky-100/70">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  const manufacturers = (
    <section id="manufacturers" className="scroll-mt-24 bg-[#0A314A] px-6 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">{t.manufacturersEyebrow}</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-.03em] sm:text-4xl lg:text-5xl">{t.manufacturersTitle}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-sky-100/75">{t.manufacturersText}</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {manufacturerData.map((brand) => (
            <article key={brand.name} className="rounded-3xl border border-white/12 bg-white/8 p-5 shadow-[0_18px_45px_rgba(0,20,35,.18)] sm:p-6">
              <div className="rounded-2xl bg-white px-5 py-6 text-center shadow-inner">
                <div className={`font-black tracking-[-.04em] text-[#103F5C] ${brand.name === "Carrier" ? "text-4xl italic" : "text-4xl"}`}>{brand.name}</div>
              </div>
              <div className={`mt-5 grid gap-3 ${brand.water ? "sm:grid-cols-2" : ""}`}>
                <a href={brand.air} target="_blank" rel="noreferrer" className="rounded-2xl border border-cyan-200/15 bg-[#082A40] p-4 transition hover:border-cyan-300/50 hover:bg-[#0A3855]">
                  <div className="text-sm font-black text-white">{t.air}</div>
                  <div className="mt-2 text-xs font-bold text-cyan-300">{t.brochure} →</div>
                </a>
                {brand.water && <a href={brand.water} target="_blank" rel="noreferrer" className="rounded-2xl border border-cyan-200/15 bg-[#082A40] p-4 transition hover:border-cyan-300/50 hover:bg-[#0A3855]">
                  <div className="text-sm font-black text-white">{t.water}</div>
                  <div className="mt-2 text-xs font-bold text-cyan-300">{t.brochure} →</div>
                </a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  const tools = (
    <section id="tools" className="scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#071F31] via-[#0B3C5B] to-[#0E6B91] px-6 py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="inline-flex rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-cyan-200">{t.toolsEyebrow}</div>
          <h2 className="mt-5 text-4xl font-black tracking-[-.035em] sm:text-5xl lg:text-6xl">{t.toolsTitle}</h2>
          <p className="mt-5 text-xl font-black leading-8 text-cyan-100">{t.toolsLead}</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-sky-100/75">{t.toolsText}</p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {t.toolsFeatures.map((feature, index) => <span key={feature} className={`rounded-full px-4 py-2 text-sm font-bold ${index === 0 ? "bg-cyan-300 text-[#062238]" : "border border-white/15 bg-white/8 text-white"}`}>{feature}</span>)}
          </div>
          <a href={APP_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center rounded-xl bg-cyan-300 px-6 py-4 text-base font-black text-[#062238] shadow-[0_18px_40px_rgba(0,0,0,.22)] transition hover:-translate-y-0.5 hover:bg-white">{t.toolsCta} →</a>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[36px] bg-cyan-300/10 blur-2xl" />
          <div className="relative rotate-[1deg] overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-[0_28px_70px_rgba(0,0,0,.30)] backdrop-blur">
            <img src="/images/marketing/engineering-tools-desktop.webp" alt="SISTEA Engineering Tools" loading="lazy" className="w-full rounded-2xl bg-white object-contain" />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/20 bg-[#071F31]/90 px-5 py-4 shadow-xl backdrop-blur">
            <div className="text-xs font-bold uppercase tracking-[.16em] text-cyan-300">Engineering Tools</div>
            <div className="mt-1 text-2xl font-black">DE · EN · ES</div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {hosts.consulting && createPortal(process, hosts.consulting)}
      {hosts.energy && createPortal(energy, hosts.energy)}
      {hosts.esi && createPortal(financing, hosts.esi)}
      {hosts.solutions && createPortal(solutions, hosts.solutions)}
      {hosts.manufacturers && createPortal(manufacturers, hosts.manufacturers)}
      {hosts.tools && createPortal(tools, hosts.tools)}
    </>
  );
}
