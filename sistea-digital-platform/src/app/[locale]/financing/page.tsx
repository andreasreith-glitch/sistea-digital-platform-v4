import type { Metadata } from "next";
import Link from "next/link";

export const runtime = "edge";

const BASE_ESI_URL = "https://energy-base.org/projects/energy-savings-insurance-europe/";
const BASE_CAAS_URL = "https://energy-base.org/projects/cooling-as-a-service-initiative/";
const SET_ALLIANCE_URL = "https://set-alliance.org/";
const UNEP_CAAS_URL = "https://www.unep.org/index.php/events/webinar/cooling-service-catalyzing-innovation-and-efficiency";
const UNEP_COOLING_FINANCE_URL = "https://www.unep.org/resources/publication/cooler-finance-mobilizing-investment-developing-worlds-sustainable-cooling";
const WHATSAPP_URL = "https://wa.me/50377282624";

type Locale = "es" | "en" | "de";
const localeOf = (value: string): Locale => value === "en" || value === "de" ? value : "es";

const copy = {
  de: {
    title: "Finanzierung & Servitisation | SISTEA",
    description: "ESI, Cooling-as-a-Service und SISTEA Project-as-a-Service für energieeffiziente HVAC-, Kälte-, PV-, Batterie- und Infrastrukturprojekte.",
    back: "Zur Startseite",
    eyebrow: "Finanzierung & Servitisation",
    hero: "Technisch sinnvoll. Wirtschaftlich belastbar. Finanzierbar strukturiert.",
    intro: "Viele Energie- und Infrastrukturprojekte scheitern nicht an der Technik, sondern an Investitionshürden, Performance-Risiken oder fehlender Projektstruktur. SISTEA verbindet Engineering, Baseline, Einsparung, CAPEX/OPEX, Risiko und Service zu einem entscheidungsfähigen Projekt.",
    principle: "Der entscheidende Perspektivwechsel",
    oldQ: "Nicht nur: Was kostet die Anlage?",
    newQ: "Sondern: Welche Leistung brauche ich, welche Einsparung entsteht und wie kann sich das Projekt wirtschaftlich tragen?",
    esiTitle: "ESI · Energy Savings Insurance",
    esiTag: "Einsparung strukturieren · Risiko reduzieren",
    esiText: "Das ESI-Modell schafft Vertrauen zwischen Kunde, Technologieanbieter und Finanzierungspartner. Es verbindet eine definierte Einsparlogik mit standardisierten Vertragsstrukturen, technischer Validierung und – je nach Programm und Projekt – einer Absicherung der zugesagten Energieeinsparung sowie einer Finanzierungsstruktur.",
    esiPoints: ["Technische Baseline und definierte Ausgangslage", "Nachvollziehbare Einspar- und Performance-Annahmen", "Vertragliche Struktur für Verantwortung und Leistung", "Unabhängige technische Validierung als möglicher Baustein", "Versicherung und Finanzierung abhängig von Programm, Land und Projekt"],
    caasTitle: "Cooling-as-a-Service",
    caasTag: "Kühlleistung nutzen statt Anlage kaufen",
    caasText: "Unternehmen brauchen in erster Linie zuverlässige Kühlung – nicht zwingend den Besitz eines Chillers. Bei Cooling-as-a-Service wird eine definierte Kühlleistung oder ein vereinbarter Kühlservice bereitgestellt. Investition, Betrieb, Wartung, Monitoring und Optimierung können in einem langfristigen leistungsbezogenen Modell gebündelt werden.",
    caasPoints: ["Reduzierung oder Vermeidung hoher Anfangsinvestitionen möglich", "Serviceanbieter hat einen direkten Anreiz für effizienten Betrieb", "Betrieb, Wartung und Monitoring können integriert werden", "Geeignet für Chiller, Industriekälte, Cold Chain und größere HVAC-Anwendungen", "Vergütung kann nach Nutzung, Leistung oder vertraglich definiertem Service erfolgen"],
    paasTitle: "SISTEA Project-as-a-Service",
    paasTag: "Vom Engineering bis zur Performance",
    paasText: "Project-as-a-Service verwenden wir als SISTEA-eigenes Angebotsmodell. Es ist kein offizielles UNEP- oder BASE-Programm. Für geeignete Projekte strukturieren wir die gesamte Kette als integrierte Leistung – vom technischen Konzept über Finanzierung und Beschaffung bis zu Inbetriebnahme, Monitoring und Optimierung.",
    paasFlow: ["Analyse", "Engineering", "Finanzierung", "Beschaffung", "Installation", "Inbetriebnahme", "Monitoring", "Optimierung"],
    fitTitle: "Welche Projekte passen zu diesen Modellen?",
    fit: ["Chiller- und zentrale Kälteversorgung", "Industriekälte mit NH₃ / R717 oder CO₂ / R744", "HVAC, Entfeuchtung und Lüftung", "PV + Batteriespeicher und Peak Shaving", "Wärmerückgewinnung und Wärmepumpen", "Automation, BMS, Lastmanagement und Energieoptimierung"],
    processTitle: "So strukturiert SISTEA ein finanzierbares Projekt",
    process: [
      ["01", "Baseline", "Verbrauch, Lastprofil, Betrieb, Kosten und technische Ausgangslage erfassen."],
      ["02", "Engineering", "Maßnahmen, Auslegung, CAPEX, OPEX, Einsparung, ROI und Risiken bewerten."],
      ["03", "Modell wählen", "Kauf, klassische Finanzierung, ESI, Cooling-as-a-Service oder ein geeignetes Servicemodell vergleichen."],
      ["04", "Umsetzen & messen", "Beschaffung, Installation, Inbetriebnahme, Monitoring und kontinuierliche Optimierung."],
    ],
    intlTitle: "Internationale Modelle und Referenzen",
    intlText: "Erst nachdem das Projekt technisch verstanden ist, prüfen wir die passende Struktur. Die folgenden Institutionen und Initiativen liefern dafür wichtige internationale Referenzen.",
    baseEsi: "BASE · Energy Savings Insurance",
    baseCaas: "BASE · Cooling-as-a-Service",
    set: "SET Alliance · Servitisation for the Energy Transition",
    unepCaas: "UNEP · Cooling-as-a-Service",
    unepFinance: "UNEP / Cool Coalition · Sustainable Cooling Finance",
    membership: "SISTEA ist im BASE-/ESI-Umfeld aktiv und Mitglied der SET Alliance. Wir nutzen diese internationalen Ansätze als Referenz für geeignete Projekte in Zentralamerika.",
    noteTitle: "Wichtiger Hinweis",
    note: "Die dargestellten Modelle sind keine automatische Finanzierungszusage und keine Einspargarantie. Verfügbarkeit, Versicherung, Finanzierung, Vertragsstruktur und Konditionen hängen vom Projekt, Land, Finanzierungspartner, Versicherer, Validierung und der technischen Prüfung ab.",
    ctaTitle: "Beginnen wir mit dem Projekt – nicht mit dem Finanzprodukt.",
    ctaText: "Für eine belastbare Entscheidung starten wir mit technischen Daten, Baseline und wirtschaftlicher Bewertung. Danach wählen wir das Finanzierungs- oder Servicemodell, das zum Projekt passt.",
    ctaEnergy: "Kostenlose Energie-Erstprüfung",
    ctaContact: "Finanzierungsprüfung anfragen",
  },
  en: {
    title: "Financing & Servitization | SISTEA",
    description: "ESI, Cooling-as-a-Service and SISTEA Project-as-a-Service for energy-efficient HVAC, refrigeration, solar, battery and infrastructure projects.",
    back: "Back to home",
    eyebrow: "Financing & Servitization",
    hero: "Technically sound. Economically robust. Structured for financing.",
    intro: "Many energy and infrastructure projects fail not because of the technology, but because of investment barriers, performance risk or weak project structure. SISTEA connects engineering, baseline, savings, CAPEX/OPEX, risk and service into a decision-ready project.",
    principle: "The decisive change in perspective",
    oldQ: "Not only: What does the equipment cost?",
    newQ: "But: What performance do I need, what savings are created, and how can the project support itself economically?",
    esiTitle: "ESI · Energy Savings Insurance",
    esiTag: "Structure savings · reduce risk",
    esiText: "The ESI model builds trust among the customer, technology provider and financing partner. It combines a defined savings logic with standardized contractual structures, technical validation and – depending on the program and project – energy-savings insurance and a financing structure.",
    esiPoints: ["Technical baseline and defined starting point", "Traceable savings and performance assumptions", "Contract structure for responsibility and performance", "Independent technical validation as a possible element", "Insurance and financing depend on program, country and project"],
    caasTitle: "Cooling-as-a-Service",
    caasTag: "Use cooling performance instead of buying equipment",
    caasText: "Businesses primarily need reliable cooling, not necessarily ownership of a chiller. With Cooling-as-a-Service, defined cooling capacity or an agreed cooling service is provided. Investment, operation, maintenance, monitoring and optimization can be bundled into a long-term performance-based model.",
    caasPoints: ["Potential to reduce or avoid high upfront investment", "Service provider has a direct incentive to operate efficiently", "Operation, maintenance and monitoring can be integrated", "Suitable for chillers, industrial refrigeration, cold chain and larger HVAC applications", "Payment may be based on use, performance or a contractually defined service"],
    paasTitle: "SISTEA Project-as-a-Service",
    paasTag: "From engineering to performance",
    paasText: "Project-as-a-Service is a SISTEA offering model. It is not an official UNEP or BASE program. For suitable projects, we structure the complete chain as an integrated service – from technical concept and financing through procurement, commissioning, monitoring and optimization.",
    paasFlow: ["Analysis", "Engineering", "Financing", "Procurement", "Installation", "Commissioning", "Monitoring", "Optimization"],
    fitTitle: "Which projects can fit these models?",
    fit: ["Chillers and central cooling plants", "Industrial refrigeration with NH₃ / R717 or CO₂ / R744", "HVAC, dehumidification and ventilation", "Solar PV + batteries and peak shaving", "Heat recovery and heat pumps", "Automation, BMS, demand management and energy optimization"],
    processTitle: "How SISTEA structures a financeable project",
    process: [
      ["01", "Baseline", "Capture consumption, load profile, operation, cost and technical starting point."],
      ["02", "Engineering", "Assess measures, sizing, CAPEX, OPEX, savings, ROI and risk."],
      ["03", "Select model", "Compare purchase, conventional financing, ESI, Cooling-as-a-Service or an appropriate service model."],
      ["04", "Implement & measure", "Procurement, installation, commissioning, monitoring and continuous optimization."],
    ],
    intlTitle: "International models and references",
    intlText: "Only after the project is technically understood do we evaluate the appropriate structure. The following institutions and initiatives provide important international references.",
    baseEsi: "BASE · Energy Savings Insurance",
    baseCaas: "BASE · Cooling-as-a-Service",
    set: "SET Alliance · Servitisation for the Energy Transition",
    unepCaas: "UNEP · Cooling-as-a-Service",
    unepFinance: "UNEP / Cool Coalition · Sustainable Cooling Finance",
    membership: "SISTEA participates in the BASE / ESI ecosystem and is a member of the SET Alliance. We use these international approaches as references for suitable projects in Central America.",
    noteTitle: "Important note",
    note: "The models shown are not an automatic financing commitment or savings guarantee. Availability, insurance, financing, contract structure and terms depend on the project, country, financing partner, insurer, validation and technical review.",
    ctaTitle: "Start with the project – not with the financial product.",
    ctaText: "For a robust decision, we start with technical data, baseline and economic evaluation. Then we select the financing or service model that fits the project.",
    ctaEnergy: "Free energy screening",
    ctaContact: "Request financing assessment",
  },
  es: {
    title: "Financiamiento & Servitización | SISTEA",
    description: "ESI, Cooling-as-a-Service y SISTEA Project-as-a-Service para proyectos eficientes de HVAC, refrigeración, solar, baterías e infraestructura.",
    back: "Volver al inicio",
    eyebrow: "Financiamiento & Servitización",
    hero: "Técnicamente sólido. Económicamente viable. Estructurado para financiarse.",
    intro: "Muchos proyectos de energía e infraestructura no fallan por la tecnología, sino por barreras de inversión, riesgo de desempeño o una estructura débil del proyecto. SISTEA conecta ingeniería, línea base, ahorro, CAPEX/OPEX, riesgo y servicio en un proyecto listo para decidir.",
    principle: "El cambio de perspectiva decisivo",
    oldQ: "No solo: ¿Cuánto cuesta el equipo?",
    newQ: "Sino: ¿Qué desempeño necesito, qué ahorro genera y cómo puede el proyecto sostenerse económicamente?",
    esiTitle: "ESI · Energy Savings Insurance",
    esiTag: "Estructurar ahorro · reducir riesgo",
    esiText: "El modelo ESI crea confianza entre el cliente, el proveedor de tecnología y el socio financiero. Combina una lógica de ahorro definida con estructuras contractuales estandarizadas, validación técnica y – según el programa y el proyecto – seguro de ahorro energético y una estructura de financiamiento.",
    esiPoints: ["Línea base técnica y punto de partida definido", "Supuestos trazables de ahorro y desempeño", "Estructura contractual para responsabilidad y desempeño", "Validación técnica independiente como posible componente", "Seguro y financiamiento dependen del programa, país y proyecto"],
    caasTitle: "Cooling-as-a-Service",
    caasTag: "Usar capacidad de enfriamiento en vez de comprar equipos",
    caasText: "Las empresas necesitan principalmente enfriamiento confiable, no necesariamente ser propietarias de un chiller. Con Cooling-as-a-Service se entrega una capacidad de enfriamiento definida o un servicio acordado. Inversión, operación, mantenimiento, monitoreo y optimización pueden integrarse en un modelo de largo plazo basado en desempeño.",
    caasPoints: ["Posibilidad de reducir o evitar una inversión inicial elevada", "El proveedor tiene un incentivo directo para operar con eficiencia", "Operación, mantenimiento y monitoreo pueden integrarse", "Aplicable a chillers, refrigeración industrial, cold chain y HVAC de mayor escala", "El pago puede basarse en uso, desempeño o un servicio definido contractualmente"],
    paasTitle: "SISTEA Project-as-a-Service",
    paasTag: "De la ingeniería al desempeño",
    paasText: "Project-as-a-Service es un modelo de oferta propio de SISTEA. No es un programa oficial de UNEP o BASE. Para proyectos adecuados estructuramos la cadena completa como un servicio integrado – desde el concepto técnico y el financiamiento hasta la compra, puesta en marcha, monitoreo y optimización.",
    paasFlow: ["Análisis", "Ingeniería", "Financiamiento", "Compras", "Instalación", "Puesta en marcha", "Monitoreo", "Optimización"],
    fitTitle: "¿Qué proyectos pueden adaptarse a estos modelos?",
    fit: ["Chillers y plantas centrales de agua helada", "Refrigeración industrial con NH₃ / R717 o CO₂ / R744", "HVAC, deshumidificación y ventilación", "Fotovoltaica + baterías y peak shaving", "Recuperación de calor y bombas de calor", "Automatización, BMS, gestión de demanda y optimización energética"],
    processTitle: "Cómo estructura SISTEA un proyecto financiable",
    process: [
      ["01", "Línea base", "Registrar consumo, perfil de carga, operación, costos y punto de partida técnico."],
      ["02", "Ingeniería", "Evaluar medidas, dimensionamiento, CAPEX, OPEX, ahorro, ROI y riesgos."],
      ["03", "Elegir modelo", "Comparar compra, financiamiento convencional, ESI, Cooling-as-a-Service o un modelo de servicio adecuado."],
      ["04", "Implementar y medir", "Compras, instalación, puesta en marcha, monitoreo y optimización continua."],
    ],
    intlTitle: "Modelos y referencias internacionales",
    intlText: "Solo después de entender técnicamente el proyecto evaluamos la estructura adecuada. Las siguientes instituciones e iniciativas aportan referencias internacionales importantes.",
    baseEsi: "BASE · Energy Savings Insurance",
    baseCaas: "BASE · Cooling-as-a-Service",
    set: "SET Alliance · Servitisation for the Energy Transition",
    unepCaas: "UNEP · Cooling-as-a-Service",
    unepFinance: "UNEP / Cool Coalition · Sustainable Cooling Finance",
    membership: "SISTEA participa en el ecosistema BASE / ESI y es miembro de la SET Alliance. Utilizamos estos enfoques internacionales como referencia para proyectos adecuados en Centroamérica.",
    noteTitle: "Nota importante",
    note: "Los modelos descritos no constituyen una aprobación automática de financiamiento ni una garantía de ahorro. La disponibilidad, seguro, financiamiento, estructura contractual y condiciones dependen del proyecto, país, socio financiero, asegurador, validación y revisión técnica.",
    ctaTitle: "Empecemos por el proyecto, no por el producto financiero.",
    ctaText: "Para una decisión sólida empezamos con datos técnicos, línea base y evaluación económica. Después seleccionamos el modelo de financiamiento o servicio que mejor se adapta al proyecto.",
    ctaEnergy: "Evaluación energética gratuita",
    ctaContact: "Solicitar evaluación de financiamiento",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = copy[localeOf(locale)];
  return { title: t.title, description: t.description };
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function Check() {
  return <span aria-hidden="true" className="font-black text-emerald-700">✓</span>;
}

export default async function FinancingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = localeOf(locale);
  const t = copy[lang];

  const sources = [
    [t.baseEsi, BASE_ESI_URL],
    [t.baseCaas, BASE_CAAS_URL],
    [t.set, SET_ALLIANCE_URL],
    [t.unepCaas, UNEP_CAAS_URL],
    [t.unepFinance, UNEP_COOLING_FINANCE_URL],
  ] as const;

  return (
    <main className="min-h-screen bg-[#e4edef] text-[#304b5d]">

      <section className="bg-gradient-to-br from-[#31596a] via-[#3d6d79] to-[#5a8a92] px-6 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-sm font-black text-cyan-100 hover:text-white">← {t.back}</Link>
          <div className="mt-10 max-w-5xl">
            <div className="text-xs font-black uppercase tracking-[.18em] text-cyan-200">{t.eyebrow}</div>
            <h1 className="mt-5 text-4xl font-black tracking-[-.04em] sm:text-5xl lg:text-7xl lg:leading-[1.02]">{t.hero}</h1>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-white/80 lg:text-xl">{t.intro}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <div className="text-xs font-black uppercase tracking-[.16em] text-cyan-200">{t.principle}</div>
              <div className="mt-4 text-xl font-black text-white/65">{t.oldQ}</div>
            </div>
            <div className="rounded-2xl border border-cyan-200/30 bg-[#25b4dc]/20 p-6 backdrop-blur">
              <div className="text-xs font-black uppercase tracking-[.16em] text-cyan-100">SISTEA</div>
              <div className="mt-4 text-xl font-black">{t.newQ}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-8">
          {[
            [t.esiTitle, t.esiTag, t.esiText, t.esiPoints],
            [t.caasTitle, t.caasTag, t.caasText, t.caasPoints],
          ].map(([title, tag, body, points], index) => (
            <article key={title as string} className="overflow-hidden rounded-3xl border border-[#bed1d7] bg-[#edf3f4] shadow-sm">
              <div className="grid lg:grid-cols-[.78fr_1.22fr]">
                <div className="bg-[#dce9ec] p-8 sm:p-10">
                  <div className="text-xs font-black uppercase tracking-[.17em] text-[#159dc5]">0{index + 1} · {tag as string}</div>
                  <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">{title as string}</h2>
                  <p className="mt-5 leading-8 text-slate-600">{body as string}</p>
                </div>
                <div className="p-8 sm:p-10">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {(points as readonly string[]).map((p) => (
                      <div key={p} className="flex items-start gap-3 rounded-xl border border-[#c7d8dd] bg-[#e5eef0] p-4 text-sm font-semibold leading-6 text-slate-700">
                        <Check /> <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}

          <article className="rounded-3xl border border-[#b9d5d0] bg-[#dfece8] p-8 shadow-sm sm:p-10">
            <div className="text-xs font-black uppercase tracking-[.17em] text-emerald-800">03 · {t.paasTag}</div>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">{t.paasTitle}</h2>
            <p className="mt-5 max-w-5xl leading-8 text-slate-700">{t.paasText}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {t.paasFlow.map((item, i) => (
                <div key={item} className="rounded-xl border border-[#bdd4ce] bg-[#eef4f2] p-4">
                  <div className="text-xs font-black text-emerald-700">0{i + 1}</div>
                  <div className="mt-2 font-black">{item}</div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#dce7ea] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{t.fitTitle}</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {t.fit.map((item) => <div key={item} className="rounded-xl border border-[#c3d5da] bg-[#edf3f4] p-4 font-semibold text-slate-700">{item}</div>)}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{t.processTitle}</h2>
            <div className="mt-7 space-y-3">
              {t.process.map(([n, title, body]) => (
                <div key={n} className="grid grid-cols-[auto_1fr] gap-4 rounded-xl border border-[#c3d5da] bg-[#edf3f4] p-5">
                  <div className="text-sm font-black text-[#159dc5]">{n}</div>
                  <div><div className="font-black">{title}</div><p className="mt-1 text-sm leading-6 text-slate-600">{body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#bdd3da] bg-[#31596a] p-8 text-white shadow-[0_22px_60px_rgba(48,75,93,.16)] sm:p-10 lg:p-12">
          <div className="max-w-4xl">
            <div className="text-xs font-black uppercase tracking-[.17em] text-cyan-200">{t.intlTitle}</div>
            <p className="mt-5 text-lg leading-8 text-white/80">{t.intlText}</p>
            <p className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm font-semibold leading-6 text-white/80">{t.membership}</p>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {sources.map(([label, url]) => (
              <a key={url} href={url} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-black transition hover:bg-white/20">
                <span>{label}</span><Arrow />
              </a>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-amber-200/25 bg-amber-50/10 p-6">
            <div className="font-black text-amber-100">{t.noteTitle}</div>
            <p className="mt-2 text-sm leading-6 text-white/75">{t.note}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#d8e7ea] px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#b9d1d7] bg-[#edf3f4] p-8 shadow-sm sm:p-10 lg:p-12">
          <h2 className="max-w-4xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.ctaTitle}</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">{t.ctaText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={`/${lang}#energy`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25b4dc] px-6 py-4 font-black text-white hover:bg-[#159dc5]">{t.ctaEnergy}<Arrow /></Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-black text-white hover:bg-emerald-700">{t.ctaContact}<Arrow /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
