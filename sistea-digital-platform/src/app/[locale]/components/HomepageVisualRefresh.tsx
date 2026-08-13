"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

type Locale = "de" | "en" | "es";

const copy = {
  de: {
    processEyebrow: "Von Daten zu messbarer Wirkung",
    processTitle: "Consulting, Planung und Installation – als lebendiger Engineering-Prozess.",
    processText:
      "Keine isolierten Einzelschritte. SISTEA verbindet Energieanalyse, technische Planung, Beschaffung, Installation und Optimierung in einem durchgängigen Projekt – mit klaren Entscheidungen an jedem Übergabepunkt.",
    processCta: "Projekt gemeinsam starten",
    processSteps: [
      ["01", "Verstehen", "Verbrauch, Lasten, Prozess, Klima und betriebliche Ziele sichtbar machen."],
      ["02", "Messen", "Lastprofil, Betriebszeiten, Temperaturen, Feuchte und Leistungsdaten erfassen."],
      ["03", "Entwerfen", "Systemarchitektur, Hydraulik, Luftführung, Regelung und Energieversorgung planen."],
      ["04", "Bewerten", "CAPEX, OPEX, Einsparung, Payback, Risiko und Finanzierbarkeit zusammenführen."],
      ["05", "Beschaffen", "Technik projektbezogen auswählen, vergleichen und direkt beschaffen."],
      ["06", "Realisieren", "Montage, Integration, Inbetriebnahme und Funktionsprüfung koordinieren."],
      ["07", "Optimieren", "Regelung nachschärfen, Lastspitzen reduzieren und Performance langfristig sichern."],
    ],
    solutionsEyebrow: "Technik, die im Betrieb bestehen muss",
    solutionsTitle: "Kälte- und Klimalösungen für echte gewerbliche und industrielle Lasten.",
    solutionsText:
      "Kompakt dargestellt, technisch klar getrennt und ohne Text über den Bildern. Die Auswahl richtet sich nach Last, Betriebszeit, Prozess, Energiepreis und Redundanz – nicht nach einer bevorzugten Marke.",
    solutionCards: [
      ["Chilleranlagen", "Luft- und wassergekühlte Systeme, VFD, Hydraulik, Kühltürme, Redundanz und Sequenzierung.", "/images/solutions/york-yvaa-official.jpg"],
      ["Industriekälte", "NH₃ / R717, CO₂ / R744, Maschinenräume, Skids, Wärmerückgewinnung und Prozessintegration.", "/images/solutions/industrial-refrigeration-plant.webp"],
      ["Kühl- & Tiefkühlzellen", "Lagerung, Tiefkühlung, Pharma, Lebensmittel und Logistik mit passender Verdampfer- und Regeltechnik.", "/images/solutions/cold-room-combi.webp"],
      ["BITZER-Aggregate", "Verflüssigungssätze und Verbundanlagen für gewerbliche und industrielle Kälteanwendungen.", "/images/solutions/bitzer-cold-room-condensing-unit.webp"],
      ["VRF / VRV", "Variable Kältemittelströme für Hotels, Büros, Kliniken, Handel und Retrofit.", "/images/solutions/vrf-outdoor-unit.webp"],
      ["2-stufig adiabate Kühlung", "Indirekte und adiabate Vorkühlung zur deutlichen Absenkung des mechanischen Kühlbedarfs.", "/images/solutions/two-stage-adiabatic-system-diagram.webp"],
      ["Reale adiabate Systeme", "Industrie- und Prozessanwendungen mit hoher Außenluftmenge und sehr niedrigem elektrischem Kühlenergiebedarf.", "/images/solutions/adiabatic-cooling-installation.webp"],
      ["Wassergekühlte Systeme", "Hocheffiziente Chillerzentralen mit Pumpen, Kühltürmen, VPF, Regelung und Wärmerückgewinnung.", "/images/solutions/water-cooled-chiller-arkref.webp"],
    ],
    videoTitle: "Nicht nur Technik zeigen – Engineering zeigen.",
    videoText: "Kurze reale Projektszenen bringen Bewegung in die Seite und zeigen, dass SISTEA analysiert, prüft, plant und umsetzt.",
    videoLabels: ["Kälteanlage prüfen", "Luft- und HVAC-Systeme", "Energie- und Lastdaten"],
    solutionCta: "Über diese Anwendung sprechen",
  },
  en: {
    processEyebrow: "From data to measurable impact",
    processTitle: "Consulting, design and installation as one living engineering process.",
    processText:
      "No isolated steps. SISTEA connects energy analysis, technical design, procurement, installation and optimization in one project flow with clear decisions at every transition.",
    processCta: "Start a project together",
    processSteps: [
      ["01", "Understand", "Make consumption, loads, process, climate and operating objectives visible."],
      ["02", "Measure", "Capture load profile, run hours, temperatures, humidity and power data."],
      ["03", "Design", "Plan system architecture, hydraulics, airflow, controls and energy supply."],
      ["04", "Evaluate", "Connect CAPEX, OPEX, savings, payback, risk and bankability."],
      ["05", "Source", "Select, compare and procure equipment specifically for the project."],
      ["06", "Implement", "Coordinate installation, integration, commissioning and functional testing."],
      ["07", "Optimize", "Fine-tune controls, reduce demand peaks and secure long-term performance."],
    ],
    solutionsEyebrow: "Technology that must perform in real operation",
    solutionsTitle: "Cooling and HVAC solutions for real commercial and industrial loads.",
    solutionsText:
      "Compact, technically separated and with no text placed over images. Selection follows load, run hours, process, energy price and redundancy—not a preferred brand.",
    solutionCards: [
      ["Chiller plants", "Air- and water-cooled systems, VFD, hydraulics, cooling towers, redundancy and sequencing.", "/images/solutions/york-yvaa-official.jpg"],
      ["Industrial refrigeration", "NH₃ / R717, CO₂ / R744, machine rooms, skids, heat recovery and process integration.", "/images/solutions/industrial-refrigeration-plant.webp"],
      ["Cold & freezer rooms", "Storage, freezing, pharma, food and logistics with matched evaporators and controls.", "/images/solutions/cold-room-combi.webp"],
      ["BITZER condensing units", "Condensing and compressor rack solutions for commercial and industrial refrigeration.", "/images/solutions/bitzer-cold-room-condensing-unit.webp"],
      ["VRF / VRV", "Variable refrigerant flow for hotels, offices, hospitals, retail and retrofit projects.", "/images/solutions/vrf-outdoor-unit.webp"],
      ["Two-stage adiabatic cooling", "Indirect and adiabatic pre-cooling to materially reduce mechanical cooling demand.", "/images/solutions/two-stage-adiabatic-system-diagram.webp"],
      ["Real adiabatic systems", "Industrial and process applications with high outdoor-air rates and very low electrical cooling demand.", "/images/solutions/adiabatic-cooling-installation.webp"],
      ["Water-cooled systems", "High-efficiency chiller plants with pumps, towers, VPF, controls and heat recovery.", "/images/solutions/water-cooled-chiller-arkref.webp"],
    ],
    videoTitle: "Do not only show equipment—show engineering.",
    videoText: "Short real project scenes add movement and demonstrate that SISTEA analyzes, inspects, designs and implements.",
    videoLabels: ["Inspect cooling plant", "Air & HVAC systems", "Energy & load data"],
    solutionCta: "Discuss this application",
  },
  es: {
    processEyebrow: "De los datos al impacto medible",
    processTitle: "Consultoría, diseño e instalación como un proceso de ingeniería vivo.",
    processText:
      "Sin pasos aislados. SISTEA conecta análisis energético, diseño, compras, instalación y optimización en un solo proyecto con decisiones claras en cada transición.",
    processCta: "Iniciar proyecto juntos",
    processSteps: [
      ["01", "Entender", "Hacer visibles consumo, cargas, proceso, clima y objetivos operativos."],
      ["02", "Medir", "Capturar perfil de carga, horas, temperaturas, humedad y potencia."],
      ["03", "Diseñar", "Definir arquitectura, hidráulica, aire, control y suministro energético."],
      ["04", "Evaluar", "Integrar CAPEX, OPEX, ahorro, retorno, riesgo y bancabilidad."],
      ["05", "Comprar", "Seleccionar, comparar y adquirir tecnología específica para el proyecto."],
      ["06", "Implementar", "Coordinar montaje, integración, puesta en marcha y pruebas."],
      ["07", "Optimizar", "Afinar control, reducir picos de demanda y asegurar el rendimiento."],
    ],
    solutionsEyebrow: "Tecnología que debe funcionar en operación real",
    solutionsTitle: "Soluciones de frío y climatización para cargas comerciales e industriales reales.",
    solutionsText:
      "Presentación compacta, técnicamente separada y sin texto encima de las imágenes. La selección depende de carga, horas, proceso, energía y redundancia, no de una marca preferida.",
    solutionCards: [
      ["Plantas de chillers", "Equipos por aire o agua, VFD, hidráulica, torres, redundancia y secuenciación.", "/images/solutions/york-yvaa-official.jpg"],
      ["Refrigeración industrial", "NH₃ / R717, CO₂ / R744, salas de máquinas, skids, recuperación de calor e integración de proceso.", "/images/solutions/industrial-refrigeration-plant.webp"],
      ["Cámaras y congelación", "Almacenamiento, congelación, pharma, alimentos y logística con evaporadores y control adecuados.", "/images/solutions/cold-room-combi.webp"],
      ["Unidades BITZER", "Unidades condensadoras y racks para refrigeración comercial e industrial.", "/images/solutions/bitzer-cold-room-condensing-unit.webp"],
      ["VRF / VRV", "Flujo variable de refrigerante para hoteles, oficinas, hospitales, comercio y retrofit.", "/images/solutions/vrf-outdoor-unit.webp"],
      ["Enfriamiento adiabático de 2 etapas", "Preenfriamiento indirecto y adiabático para reducir notablemente la carga mecánica.", "/images/solutions/two-stage-adiabatic-system-diagram.webp"],
      ["Sistemas adiabáticos reales", "Aplicaciones industriales y de proceso con mucho aire exterior y muy bajo consumo eléctrico de frío.", "/images/solutions/adiabatic-cooling-installation.webp"],
      ["Sistemas enfriados por agua", "Plantas de alta eficiencia con bombas, torres, VPF, control y recuperación de calor.", "/images/solutions/water-cooled-chiller-arkref.webp"],
    ],
    videoTitle: "No mostrar solo equipos—mostrar ingeniería.",
    videoText: "Escenas reales de proyecto aportan movimiento y muestran que SISTEA analiza, inspecciona, diseña e implementa.",
    videoLabels: ["Inspección de planta", "Aire y HVAC", "Datos de energía y demanda"],
    solutionCta: "Hablar sobre esta aplicación",
  },
} as const;

const processVideo = "/videos/energy-efficiency-project-visual.mp4";
const processPoster = "/images/solutions/industrial-refrigeration-skid.webp";
const miniVideos = [
  "/videos/engineers-inspect-cooling-plant.mp4",
  "/videos/engineers-inspect-air-handling-system.mp4",
  "/videos/engineers-inspect-energy-data-tablet.mp4",
] as const;

export default function HomepageVisualRefresh({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [processHost, setProcessHost] = useState<HTMLElement | null>(null);
  const [solutionsHost, setSolutionsHost] = useState<HTMLElement | null>(null);
  const t = copy[locale];

  useEffect(() => {
    const normalized = pathname.replace(/\/$/, "");
    if (normalized !== `/${locale}`) return;

    const consulting = document.getElementById("consulting");
    const solutions = document.getElementById("solutions");
    const manufacturers = document.getElementById("manufacturers");

    const created: HTMLElement[] = [];
    const hidden: HTMLElement[] = [];

    if (consulting?.parentElement) {
      const intro = consulting.previousElementSibling as HTMLElement | null;
      if (intro?.tagName === "SECTION") {
        intro.style.display = "none";
        hidden.push(intro);
      }
      consulting.style.display = "none";
      hidden.push(consulting);
      const host = document.createElement("div");
      host.id = "sistea-process-refresh";
      consulting.parentElement.insertBefore(host, consulting);
      created.push(host);
      setProcessHost(host);
    }

    if (solutions?.parentElement) {
      solutions.style.display = "none";
      hidden.push(solutions);
      const host = document.createElement("div");
      host.id = "sistea-solutions-refresh";
      solutions.parentElement.insertBefore(host, solutions);
      created.push(host);
      setSolutionsHost(host);
    }

    if (manufacturers) {
      const overview = manufacturers.querySelector('img[src*="chiller-manufacturers-overview"]') as HTMLElement | null;
      if (overview) overview.style.display = "none";
      const overviewWrap = overview?.parentElement as HTMLElement | null;
      if (overviewWrap) {
        overviewWrap.style.display = "none";
        hidden.push(overviewWrap);
      }
      manufacturers.querySelectorAll("article").forEach((article) => {
        (article as HTMLElement).style.marginTop = "0";
      });
      manufacturers.querySelectorAll("img").forEach((img) => {
        const el = img as HTMLImageElement;
        if (!el.src.includes("overview")) {
          el.style.maxHeight = "72px";
          el.style.maxWidth = "240px";
        }
      });
    }

    return () => {
      setProcessHost(null);
      setSolutionsHost(null);
      created.forEach((node) => node.remove());
      hidden.forEach((node) => (node.style.display = ""));
    };
  }, [locale, pathname]);

  const processSection = processHost ? createPortal(
    <section className="overflow-hidden bg-[#082E47] px-6 py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">{t.processEyebrow}</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-.03em] sm:text-4xl lg:text-5xl">{t.processTitle}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-100/78">{t.processText}</p>
          <a href="#contact" className="mt-8 inline-flex rounded-xl bg-[#10A7D8] px-6 py-3.5 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0D96C4]">{t.processCta} →</a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/15 bg-black/20 shadow-[0_25px_70px_rgba(0,0,0,.28)]">
          <video autoPlay muted loop playsInline preload="metadata" poster={processPoster} className="aspect-[16/10] w-full object-cover">
            <source src={processVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.processSteps.map(([number, title, body], index) => (
          <article key={number} className={`rounded-3xl border p-6 shadow-[0_14px_35px_rgba(0,10,20,.18)] ${index === 3 || index === 6 ? "border-cyan-300/35 bg-[#0E6F96]/55" : "border-white/12 bg-white/8"}`}>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black text-cyan-300/85">{number}</span>
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
            </div>
            <h3 className="mt-6 text-xl font-black">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-sky-100/70">{body}</p>
          </article>
        ))}
      </div>
    </section>,
    processHost,
  ) : null;

  const solutionsSection = solutionsHost ? createPortal(
    <section id="solutions-refresh" className="bg-[#EAF4FA] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-black uppercase tracking-[.22em] text-[#0E78B7]">{t.solutionsEyebrow}</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-.03em] text-[#153F59] sm:text-4xl lg:text-5xl">{t.solutionsTitle}</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#466B82]">{t.solutionsText}</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.solutionCards.map(([title, body, image]) => (
          <article key={title} className="group overflow-hidden rounded-3xl border border-[#C8DDE9] bg-white shadow-[0_12px_32px_rgba(48,75,93,.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(48,75,93,.14)]">
            <div className="grid h-44 place-items-center overflow-hidden bg-[#F7FAFC] p-3 sm:h-48">
              <img src={image} alt={title} loading="lazy" className="max-h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]" />
            </div>
            <div className="border-t border-[#E2EDF3] p-5">
              <h3 className="text-xl font-black text-[#153F59]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#527286]">{body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-6xl rounded-3xl bg-[#123F5D] p-6 text-white shadow-[0_18px_50px_rgba(48,75,93,.18)] sm:p-8">
        <div className="text-center">
          <h3 className="text-2xl font-black sm:text-3xl">{t.videoTitle}</h3>
          <p className="mx-auto mt-4 max-w-3xl leading-7 text-sky-100/75">{t.videoText}</p>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {miniVideos.map((video, index) => (
            <figure key={video} className="overflow-hidden rounded-2xl border border-white/12 bg-[#082E47]">
              <video autoPlay muted loop playsInline preload="metadata" className="aspect-[16/10] w-full object-cover">
                <source src={video} type="video/mp4" />
              </video>
              <figcaption className="px-5 py-4 text-sm font-black text-cyan-100">{t.videoLabels[index]}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#contact" className="inline-flex rounded-xl bg-[#0E78B7] px-6 py-3.5 font-black text-white transition hover:bg-[#0D6A9F]">{t.solutionCta} →</a>
        </div>
      </div>
    </section>,
    solutionsHost,
  ) : null;

  return <>{processSection}{solutionsSection}</>;
}
