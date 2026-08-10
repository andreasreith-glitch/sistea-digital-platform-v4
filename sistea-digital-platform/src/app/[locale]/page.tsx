import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import EnergyCostCalculator from "./components/EnergyCostCalculator";

export const runtime = "edge";

const APP_URL = "https://jolly-wood-2bda.andreas-reith.workers.dev";
const AMAZON_URL = "https://www.amazon.com/author/andreasreith";
const WHATSAPP_URL = "https://wa.me/50377282624";

const translations = {
  es: {
    title: "SISTEA | Ingeniería, HVAC, Refrigeración, Energía y ESI",
    description:
      "Ingeniería integral para HVAC, refrigeración industrial, chillers, eficiencia energética, fotovoltaica, baterías, automatización y financiamiento ESI en Centroamérica.",
    nav: ["Sistema", "Soluciones", "Energía & Demanda", "App", "Libros", "Financiamiento", "Contacto"],
    heroEyebrow: "Ingeniería alemana · ejecución local · Centroamérica",
    heroTitle: "Ingeniería que conecta eficiencia, refrigeración, energía y financiamiento.",
    heroText:
      "SISTEA analiza, diseña, optimiza e integra HVAC, refrigeración industrial, chillers, ventilación, deshumidificación, fotovoltaica, baterías, automatización, agua y soluciones de eficiencia energética.",
    heroPrimary: "Analizar mi proyecto",
    heroSecondary: "Abrir Engineering Tools",
    heroThird: "Ver soluciones",
    stats: [
      ["40+", "años de experiencia técnica"],
      ["3", "idiomas de ingeniería"],
      ["360°", "visión técnica y económica"],
    ],
    storyEyebrow: "Un sistema conectado",
    storyTitle: "De la primera medición al proyecto financiado",
    storyText:
      "Cada elemento de la plataforma cumple una función concreta. La web explica. Los libros documentan. La app permite una primera aproximación. SISTEA convierte los datos en ingeniería y el financiamiento elimina barreras de inversión.",
    storySteps: [
      ["01", "Detectar", "Problema, consumo, carga y oportunidad."],
      ["02", "Calcular", "Herramientas digitales para una primera estimación."],
      ["03", "Validar", "Revisión técnica y análisis de factibilidad."],
      ["04", "Diseñar", "Engineering completo, selección y control."],
      ["05", "Financiar", "ESI y modelos adecuados al proyecto."],
      ["06", "Implementar", "Proyecto, puesta en marcha y optimización."],
    ],
    systemEyebrow: "SISTEA 5-Module System",
    systemTitle: "Cinco módulos que trabajan como un solo sistema",
    systemText:
      "No optimizamos equipos aislados. Coordinamos carga térmica, humedad, energía, control y envolvente para reducir consumo y aumentar estabilidad operativa.",
    modules: [
      ["01", "Deshumidificación", "Control preciso de humedad y punto de rocío para procesos, almacenamiento y confort."],
      ["02", "Enfriamiento adiabático en dos etapas", "Reducción de temperatura de aire de suministro sin humidificar directamente el espacio acondicionado."],
      ["03", "Fotovoltaica + baterías", "Generación propia, respaldo, peak shaving y mayor independencia de la red."],
      ["04", "Control inteligente", "BMS, PLC, BACnet, Modbus, secuenciación y optimización basada en datos."],
      ["05", "MIG coatings", "Recubrimientos interiores y exteriores para reducir carga térmica y apoyar la eficiencia del sistema."],
    ],
    solutionsEyebrow: "Competencias integradas",
    solutionsTitle: "Una sola ingeniería para sistemas que normalmente se planifican por separado",
    solutionsText:
      "La mayor oportunidad suele estar en las interacciones: refrigeración con calor residual, HVAC con generación solar, chillers con almacenamiento, automatización con gestión de demanda.",
    competences: [
      ["HVAC", "Climatización, deshumidificación, calidad de aire y ventilación."],
      ["Refrigeración industrial", "NH₃ / R717, CO₂ / R744, cámaras, procesos y cadena de frío."],
      ["Chiller plants", "Aire/agua, hidráulica, VPF, torres, secuenciación y retrofit."],
      ["PV + baterías", "Autogeneración, respaldo, peak shaving y gestión energética."],
      ["Automatización", "BMS, PLC, BACnet, Modbus, sensores, dashboards y alarmas."],
      ["Recuperación de calor", "Reutilización de energía térmica para agua caliente y procesos."],
      ["Tratamiento de agua", "Acondicionamiento para procesos, torres y sistemas técnicos."],
      ["Consulting", "Factibilidad, ingeniería, CAPEX/OPEX, ROI, proyecto y commissioning."],
    ],
    energyEyebrow: "Energy & Engineering Consulting",
    energyTitle: "Reducimos costos de energía y picos de demanda con Consulting, análisis y gestión inteligente de cargas.",
    energyText:
      "Partimos de las facturas eléctricas y avanzamos hacia perfiles de carga, simultaneidad, demanda máxima, chillers, HVAC, bombas, ventiladores, procesos, fotovoltaica, baterías y estrategia de control. En proyectos adecuados, el análisis integral puede identificar potenciales de ahorro del orden de 40 %, sujetos a validación técnica.",
    energyFlow: [
      ["Medir", "Facturas, demanda, submedición y perfiles"],
      ["Reducir", "Chillers, HVAC, bombas, ventiladores y procesos"],
      ["Recuperar", "Calor residual y energía útil"],
      ["Generar", "Fotovoltaica y otras fuentes adecuadas"],
      ["Almacenar", "Baterías y desplazamiento de demanda"],
      ["Controlar", "BMS, PLC, IA y gestión de cargas"],
    ],
    reviewTitle: "Cálculo gratuito de costos energéticos y gestión de demanda",
    reviewText:
      "Envíanos 1–3 facturas eléctricas. Revisamos consumo, costo, demanda, tarifa y operación para crear una primera línea base e identificar medidas de reducción de consumo, peak shaving y gestión de carga.",
    reviewButton: "Solicitar primera revisión",
    refrigerationEyebrow: "Cooling Engineering",
    refrigerationTitle: "Chillers, refrigeración industrial y cadena de frío con enfoque de sistema",
    refrigerationText:
      "Evaluamos carga real, clima, temperaturas de operación, redundancia, eficiencia estacional, hidráulica, control y costo total de propiedad. La selección del equipo llega después del análisis.",
    refrigerationCards: [
      ["Chiller Engineering", "Air-cooled · Water-cooled · Scroll · Screw · Centrifugal · VFD · Magnetic bearing"],
      ["NH₃ / R717", "Industria alimentaria, proceso, almacenamiento, seguridad y eficiencia energética."],
      ["CO₂ / R744", "Sistemas subcríticos y transcríticos, recuperación de calor y control de alta presión."],
      ["Cold Chain", "Cámaras frigoríficas, congelación, farmacéutica, logística y distribución."],
    ],
    brandsLabel: "Fabricantes considerados según aplicación y proyecto",
    brands: ["YORK", "Carrier", "Trane", "TICA"],
    toolsEyebrow: "SISTEA Engineering Tools",
    toolsTitle: "Herramientas útiles sin sustituir la ingeniería profesional",
    toolsText:
      "La app entrega una primera estimación y ayuda a estructurar los datos del proyecto. Para selección final, seguridad, normas, control y dimensionamiento completo, el cálculo pasa a revisión de SISTEA.",
    tools: [
      ["Cold Room Designer", "Cámaras frigoríficas y congelación."],
      ["Chiller System Designer", "Capacidad, caudal e hidráulica inicial."],
      ["Comfort Cooling Load", "Estimación de carga térmica para confort."],
      ["Engineering Unit Converter", "kW, TR, BTU/h, presión, caudal y más."],
    ],
    toolsButton: "Abrir e instalar la app",
    toolsNote: "Web app instalable en iPhone y Android.",
    booksEyebrow: "SISTEA Engineering Series",
    booksTitle: "Documentamos la metodología que aplicamos en nuestros proyectos",
    booksText:
      "Los libros no son un catálogo. Son evidencia técnica. Explican planificación, cálculo, operación, mantenimiento, seguridad, eficiencia energética y automatización en los mismos campos donde SISTEA desarrolla proyectos reales.",
    books: [
      ["R744", "CO₂ Refrigeration", "#0f5d8f"],
      ["R717", "Ammonia Refrigeration", "#9a5b2f"],
      ["HEAT", "Heat Pumps & Recovery", "#187b7a"],
      ["ENERGY", "Industrial Efficiency", "#3b7d44"],
      ["HVAC", "Intelligent Cooling", "#5c4a8b"],
      ["AI DC", "Data Center Cooling", "#233b64"],
    ],
    booksButton: "Ver la serie en Amazon",
    booksLinkText: "Disponible en alemán, inglés y español según edición.",
    financeEyebrow: "ESI Financing",
    financeTitle: "Una buena medida de eficiencia también debe ser ejecutable financieramente",
    financeText:
      "SISTEA combina análisis técnico, ahorro esperado, inversión, riesgo, desempeño y estructura financiera. Así una oportunidad de ahorro puede convertirse en un proyecto bancable y medible.",
    financePoints: [
      "Evaluación técnica y línea base",
      "Estimación de ahorro y desempeño",
      "CAPEX, OPEX, ROI y sensibilidad",
      "Estructuración ESI y modelos de servicio",
      "Seguimiento técnico durante la implementación",
    ],
    financeButton: "Conocer financiamiento ESI",
    industriesEyebrow: "Aplicaciones",
    industriesTitle: "Ingeniería adaptada a la operación real de cada sector",
    industries: [
      ["Industria", "Producción, procesos, utilidades y grandes cargas eléctricas."],
      ["Alimentos & bebidas", "Refrigeración, congelación, calor de proceso y recuperación."],
      ["Farmacéutica", "Temperatura, humedad, almacenamiento y continuidad operativa."],
      ["Hoteles & hospitales", "Confort, agua caliente, chillers, calidad de aire y respaldo."],
      ["Logística", "Cold chain, almacenes, ventilación, energía y monitoreo."],
      ["Data Centers", "Alta densidad térmica, redundancia, energía, baterías y control."],
    ],
    sourcingEyebrow: "Compras técnicas & suministro directo",
    sourcingTitle: "Más de 20 años de experiencia propia en compras y comercio mayorista en Shanghái / China",
    sourcingText:
      "Desde hace más de 20 años trabajamos directamente con fabricantes y proveedores en China. Esto incluye relaciones consolidadas con fabricantes alemanes que producen en China y con fabricantes asiáticos técnicamente seleccionados. SISTEA combina ingeniería, especificación técnica y compra directa para reducir intermediarios y conseguir condiciones de fábrica competitivas.",
    sourcingPoints: [
      "Contacto directo con fabricantes y plantas de producción",
      "Relaciones con fabricantes alemanes con producción en China",
      "Evaluación técnica antes de comparar precios",
      "Compra directa y menos niveles de intermediación",
      "Apoyo en especificación, oferta, negociación y logística",
      "Precios de fábrica o condiciones directas de planta cuando la estructura de suministro lo permite",
    ],
    sourcingButton: "Pónganos a prueba con su próxima solicitud",
    sourcingNote: "Envíenos su lista de equipos, ficha técnica o especificación. Comparamos solución, calidad y precio directamente para su proyecto.",
    whyEyebrow: "Por qué SISTEA",
    whyTitle: "Conocimiento, herramientas y ejecución en una sola cadena",
    why: [
      ["Experiencia", "Más de cuatro décadas en refrigeración, HVAC, energía y sistemas técnicos."],
      ["Visión de sistema", "Analizamos interacciones y no solo componentes individuales."],
      ["Tecnología abierta", "Seleccionamos la solución adecuada al proyecto, no una marca fija."],
      ["Implementación", "Del estudio y cálculo hasta la puesta en marcha y optimización."],
      ["Suministro directo", "Más de 20 años de experiencia de compra en China y acceso directo a fabricantes."],
    ],
    contactTitle: "Cuéntanos dónde está el problema técnico o energético",
    contactText:
      "Puede ser una factura elevada, un chiller ineficiente, humedad, falta de capacidad, picos de demanda, un proyecto fotovoltaico o una nueva instalación. Empezamos por los datos.",
    whatsapp: "Hablar por WhatsApp",
  },
  en: {
    title: "SISTEA | Engineering, HVAC, Refrigeration, Energy and ESI",
    description:
      "Integrated engineering for HVAC, industrial refrigeration, chillers, energy efficiency, solar PV, batteries, automation and ESI financing in Central America.",
    nav: ["System", "Solutions", "Energy & Demand", "App", "Books", "Financing", "Contact"],
    heroEyebrow: "German engineering · local execution · Central America",
    heroTitle: "Engineering that connects efficiency, refrigeration, energy and financing.",
    heroText:
      "SISTEA analyzes, designs, optimizes and integrates HVAC, industrial refrigeration, chillers, ventilation, dehumidification, solar PV, batteries, automation, water and energy-efficiency solutions.",
    heroPrimary: "Analyze my project",
    heroSecondary: "Open Engineering Tools",
    heroThird: "View solutions",
    stats: [["40+", "years of technical experience"], ["3", "engineering languages"], ["360°", "technical and economic view"]],
    storyEyebrow: "One connected system",
    storyTitle: "From first measurement to a financed project",
    storyText:
      "Every platform element has a clear role. The website explains. The books document. The app provides a first approximation. SISTEA turns data into engineering and financing removes investment barriers.",
    storySteps: [
      ["01", "Detect", "Problem, consumption, load and opportunity."],
      ["02", "Calculate", "Digital tools for an initial estimate."],
      ["03", "Validate", "Technical review and feasibility analysis."],
      ["04", "Design", "Complete engineering, selection and controls."],
      ["05", "Finance", "ESI and project-appropriate models."],
      ["06", "Implement", "Project delivery, commissioning and optimization."],
    ],
    systemEyebrow: "SISTEA 5-Module System",
    systemTitle: "Five modules working as one integrated system",
    systemText:
      "We do not optimize isolated equipment. We coordinate thermal load, humidity, energy, controls and the building envelope to reduce consumption and improve operating stability.",
    modules: [
      ["01", "Dehumidification", "Precise humidity and dew-point control for processes, storage and comfort."],
      ["02", "Two-stage adiabatic cooling", "Supply-air temperature reduction without directly humidifying the conditioned space."],
      ["03", "Solar PV + batteries", "Onsite generation, backup, peak shaving and greater grid independence."],
      ["04", "Intelligent controls", "BMS, PLC, BACnet, Modbus, sequencing and data-driven optimization."],
      ["05", "MIG coatings", "Interior and exterior coatings that reduce thermal load and support system efficiency."],
    ],
    solutionsEyebrow: "Integrated capabilities",
    solutionsTitle: "One engineering approach for systems that are usually planned separately",
    solutionsText:
      "The largest opportunity often sits in the interactions: refrigeration with waste heat, HVAC with solar generation, chillers with storage, automation with demand management.",
    competences: [
      ["HVAC", "Air conditioning, dehumidification, indoor air quality and ventilation."],
      ["Industrial refrigeration", "NH₃ / R717, CO₂ / R744, cold rooms, processes and cold chain."],
      ["Chiller plants", "Air/water cooled, hydraulics, VPF, towers, sequencing and retrofit."],
      ["PV + batteries", "Onsite generation, backup, peak shaving and energy management."],
      ["Automation", "BMS, PLC, BACnet, Modbus, sensors, dashboards and alarms."],
      ["Heat recovery", "Reuse of thermal energy for hot water and process applications."],
      ["Water treatment", "Conditioning for processes, cooling towers and technical systems."],
      ["Consulting", "Feasibility, engineering, CAPEX/OPEX, ROI, project and commissioning."],
    ],
    energyEyebrow: "Energy & Engineering Consulting",
    energyTitle: "Reduce energy costs and demand peaks through consulting, analysis and intelligent load management.",
    energyText:
      "We start with electricity bills and then analyze load profiles, simultaneity, maximum demand, chillers, HVAC, pumps, fans, processes, solar PV, batteries and control strategy. In suitable projects, integrated analysis can identify savings potential on the order of 40%, subject to engineering validation.",
    energyFlow: [
      ["Measure", "Bills, demand, submetering and profiles"],
      ["Reduce", "Chillers, HVAC, pumps, fans and processes"],
      ["Recover", "Waste heat and useful energy"],
      ["Generate", "Solar PV and suitable onsite sources"],
      ["Store", "Batteries and demand shifting"],
      ["Control", "BMS, PLC, AI and load management"],
    ],
    reviewTitle: "Free energy-cost and demand-management screening",
    reviewText:
      "Send us 1–3 electricity bills. We review consumption, cost, demand, tariff and operating data to establish an initial baseline and identify consumption reduction, peak-shaving and load-management measures.",
    reviewButton: "Request initial review",
    refrigerationEyebrow: "Cooling Engineering",
    refrigerationTitle: "Chillers, industrial refrigeration and cold chain with a systems approach",
    refrigerationText:
      "We evaluate real load, climate, operating temperatures, redundancy, seasonal efficiency, hydraulics, controls and total cost of ownership. Equipment selection comes after the analysis.",
    refrigerationCards: [
      ["Chiller Engineering", "Air-cooled · Water-cooled · Scroll · Screw · Centrifugal · VFD · Magnetic bearing"],
      ["NH₃ / R717", "Food industry, process, storage, safety and energy efficiency."],
      ["CO₂ / R744", "Subcritical and transcritical systems, heat recovery and high-pressure control."],
      ["Cold Chain", "Cold rooms, freezing, pharmaceutical, logistics and distribution."],
    ],
    brandsLabel: "Manufacturers considered according to application and project",
    brands: ["YORK", "Carrier", "Trane", "TICA"],
    toolsEyebrow: "SISTEA Engineering Tools",
    toolsTitle: "Useful tools without replacing professional engineering",
    toolsText:
      "The app provides an initial estimate and helps structure project data. Final selection, safety, standards, controls and full sizing are reviewed by SISTEA.",
    tools: [
      ["Cold Room Designer", "Cold rooms and freezing applications."],
      ["Chiller System Designer", "Initial capacity, flow and hydraulics."],
      ["Comfort Cooling Load", "Preliminary comfort cooling load."],
      ["Engineering Unit Converter", "kW, TR, BTU/h, pressure, flow and more."],
    ],
    toolsButton: "Open and install the app",
    toolsNote: "Installable web app for iPhone and Android.",
    booksEyebrow: "SISTEA Engineering Series",
    booksTitle: "We document the methodology we apply in real projects",
    booksText:
      "The books are not a catalog. They are technical evidence. They cover planning, calculation, operation, maintenance, safety, energy efficiency and automation in the same fields where SISTEA develops real projects.",
    books: [
      ["R744", "CO₂ Refrigeration", "#0f5d8f"],
      ["R717", "Ammonia Refrigeration", "#9a5b2f"],
      ["HEAT", "Heat Pumps & Recovery", "#187b7a"],
      ["ENERGY", "Industrial Efficiency", "#3b7d44"],
      ["HVAC", "Intelligent Cooling", "#5c4a8b"],
      ["AI DC", "Data Center Cooling", "#233b64"],
    ],
    booksButton: "View the series on Amazon",
    booksLinkText: "Available in German, English and Spanish depending on edition.",
    financeEyebrow: "ESI Financing",
    financeTitle: "A strong efficiency measure must also be financially executable",
    financeText:
      "SISTEA combines technical analysis, expected savings, investment, risk, performance and financing structure. This turns a savings opportunity into a measurable, bankable project.",
    financePoints: ["Technical assessment and baseline", "Savings and performance estimate", "CAPEX, OPEX, ROI and sensitivity", "ESI structure and service models", "Technical follow-up during implementation"],
    financeButton: "Explore ESI financing",
    industriesEyebrow: "Applications",
    industriesTitle: "Engineering adapted to each sector's real operating conditions",
    industries: [
      ["Industry", "Production, processes, utilities and large electrical loads."],
      ["Food & beverage", "Refrigeration, freezing, process heat and heat recovery."],
      ["Pharmaceutical", "Temperature, humidity, storage and operational continuity."],
      ["Hotels & hospitals", "Comfort, hot water, chillers, air quality and backup."],
      ["Logistics", "Cold chain, warehouses, ventilation, energy and monitoring."],
      ["Data Centers", "High heat density, redundancy, energy, batteries and controls."],
    ],
    sourcingEyebrow: "Technical Procurement & Direct Sourcing",
    sourcingTitle: "More than 20 years of our own sourcing and wholesale experience in Shanghai / China",
    sourcingText:
      "For more than 20 years we have worked directly with manufacturers and suppliers in China. This includes established relationships with German manufacturers producing in China as well as technically selected Asian manufacturers. SISTEA combines engineering, technical specification and direct sourcing to reduce unnecessary intermediaries and obtain competitive factory-level terms.",
    sourcingPoints: [
      "Direct access to manufacturers and production plants",
      "Relationships with German manufacturers producing in China",
      "Technical evaluation before price comparison",
      "Direct purchasing with fewer intermediary margins",
      "Support with specification, quotation, negotiation and logistics",
      "Factory pricing or direct plant terms whenever the supply structure allows it",
    ],
    sourcingButton: "Test us with your next RFQ",
    sourcingNote: "Send us your equipment list, datasheet or specification. We compare solution, quality and price directly for your project.",
    whyEyebrow: "Why SISTEA",
    whyTitle: "Knowledge, tools and execution in one chain",
    why: [
      ["Experience", "More than four decades in refrigeration, HVAC, energy and technical systems."],
      ["Systems view", "We analyze interactions instead of isolated components."],
      ["Open technology", "We select what fits the project rather than forcing one brand."],
      ["Implementation", "From study and calculation through commissioning and optimization."],
      ["Direct sourcing", "More than 20 years of China sourcing experience and direct manufacturer access."],
    ],
    contactTitle: "Tell us where the technical or energy problem is",
    contactText:
      "It may be a high utility bill, an inefficient chiller, humidity, insufficient capacity, demand peaks, a solar project or a new installation. We start with the data.",
    whatsapp: "Talk on WhatsApp",
  },
  de: {
    title: "SISTEA | Engineering, HVAC, Kälte, Energie und ESI",
    description:
      "Integriertes Engineering für HVAC, Industriekälte, Chiller, Energieeffizienz, Photovoltaik, Batteriespeicher, Automation und ESI-Finanzierung in Zentralamerika.",
    nav: ["System", "Lösungen", "Energie & Last", "App", "Bücher", "Finanzierung", "Kontakt"],
    heroEyebrow: "Deutsches Engineering · lokale Umsetzung · Zentralamerika",
    heroTitle: "Engineering, das Effizienz, Kälte, Energie und Finanzierung verbindet.",
    heroText:
      "SISTEA analysiert, plant, optimiert und integriert HVAC, Industriekälte, Chiller, Lüftung, Entfeuchtung, Photovoltaik, Batteriespeicher, Automation, Wasser und Energieeffizienzlösungen.",
    heroPrimary: "Projekt analysieren",
    heroSecondary: "Engineering Tools öffnen",
    heroThird: "Lösungen ansehen",
    stats: [["40+", "Jahre technische Erfahrung"], ["3", "Engineering-Sprachen"], ["360°", "technische und wirtschaftliche Sicht"]],
    storyEyebrow: "Ein verbundenes System",
    storyTitle: "Von der ersten Messung bis zum finanzierten Projekt",
    storyText:
      "Jedes Element der Plattform hat eine klare Funktion. Die Website erklärt. Die Fachbücher dokumentieren. Die App ermöglicht eine erste Abschätzung. SISTEA macht daraus Engineering und die Finanzierung reduziert Investitionshürden.",
    storySteps: [
      ["01", "Erkennen", "Problem, Verbrauch, Last und Potenzial."],
      ["02", "Berechnen", "Digitale Tools für eine erste Abschätzung."],
      ["03", "Prüfen", "Technische Validierung und Machbarkeit."],
      ["04", "Planen", "Vollständiges Engineering, Auswahl und Regelung."],
      ["05", "Finanzieren", "ESI und passende Projektmodelle."],
      ["06", "Umsetzen", "Projekt, Inbetriebnahme und Optimierung."],
    ],
    systemEyebrow: "SISTEA 5-Modul-System",
    systemTitle: "Fünf Module arbeiten als ein integriertes System",
    systemText:
      "Wir optimieren keine Einzelgeräte. Wir koordinieren thermische Last, Feuchte, Energie, Regelung und Gebäudehülle, um Verbrauch zu senken und den Betrieb stabiler zu machen.",
    modules: [
      ["01", "Entfeuchtung", "Präzise Feuchte- und Taupunktregelung für Prozesse, Lagerung und Komfort."],
      ["02", "Zweistufige adiabate Kühlung", "Absenkung der Zulufttemperatur ohne direkte Befeuchtung des konditionierten Raums."],
      ["03", "PV + Batteriespeicher", "Eigenerzeugung, Backup, Peak Shaving und höhere Netzunabhängigkeit."],
      ["04", "Intelligente Regelung", "BMS, PLC, BACnet, Modbus, Sequenzierung und datenbasierte Optimierung."],
      ["05", "MIG-Beschichtungen", "Innen- und Außenbeschichtungen zur Reduzierung der Wärmelast und Unterstützung der Systemeffizienz."],
    ],
    solutionsEyebrow: "Integrierte Kompetenzen",
    solutionsTitle: "Ein Engineering-Ansatz für Systeme, die sonst getrennt geplant werden",
    solutionsText:
      "Das größte Potenzial steckt oft in den Schnittstellen: Kälte mit Abwärme, HVAC mit PV, Chiller mit Speicher, Automation mit Lastmanagement.",
    competences: [
      ["HVAC", "Klimatisierung, Entfeuchtung, Raumluftqualität und Lüftung."],
      ["Industriekälte", "NH₃ / R717, CO₂ / R744, Kühlräume, Prozesse und Kühlkette."],
      ["Chiller-Anlagen", "Luft/Wasser, Hydraulik, VPF, Kühltürme, Sequenzierung und Retrofit."],
      ["PV + Batteriespeicher", "Eigenerzeugung, Backup, Peak Shaving und Energiemanagement."],
      ["Automation", "BMS, PLC, BACnet, Modbus, Sensorik, Dashboards und Alarmierung."],
      ["Wärmerückgewinnung", "Nutzung thermischer Restenergie für Warmwasser und Prozesse."],
      ["Wasseraufbereitung", "Konditionierung für Prozesse, Kühltürme und technische Systeme."],
      ["Consulting", "Machbarkeit, Engineering, CAPEX/OPEX, ROI, Projekt und Commissioning."],
    ],
    energyEyebrow: "Energy & Engineering Consulting",
    energyTitle: "Energiekosten und Lastspitzen mit Consulting, Analyse und intelligentem Lastmanagement reduzieren.",
    energyText:
      "Wir starten mit den Stromrechnungen und analysieren danach Lastprofile, Gleichzeitigkeit, maximale Leistung, Chiller, HVAC, Pumpen, Ventilatoren, Prozesse, PV, Batteriespeicher und Regelstrategien. Bei geeigneten Projekten kann eine ganzheitliche Analyse Einsparpotenziale in der Größenordnung von rund 40 % identifizieren – vorbehaltlich technischer Prüfung.",
    energyFlow: [
      ["Messen", "Rechnungen, Leistung, Unterzähler und Profile"],
      ["Reduzieren", "Chiller, HVAC, Pumpen, Ventilatoren und Prozesse"],
      ["Rückgewinnen", "Abwärme und nutzbare Restenergie"],
      ["Erzeugen", "Photovoltaik und passende Eigenversorgung"],
      ["Speichern", "Batterien und Lastverschiebung"],
      ["Regeln", "BMS, PLC, KI und Lastmanagement"],
    ],
    reviewTitle: "Kostenlose Stromkosten- und Lastmanagement-Erstprüfung",
    reviewText:
      "Sende uns 1–3 Stromrechnungen. Wir prüfen Verbrauch, Kosten, Leistungsspitzen, Tarif und Betriebsdaten, bilden eine erste Baseline und identifizieren Ansätze für Verbrauchsreduzierung, Peak Shaving und Lastmanagement.",
    reviewButton: "Erstprüfung anfragen",
    refrigerationEyebrow: "Cooling Engineering",
    refrigerationTitle: "Chiller, Industriekälte und Kühlkette mit Systemansatz",
    refrigerationText:
      "Wir bewerten reale Last, Klima, Betriebstemperaturen, Redundanz, saisonale Effizienz, Hydraulik, Regelung und Total Cost of Ownership. Die Geräteauswahl folgt erst nach der Analyse.",
    refrigerationCards: [
      ["Chiller Engineering", "Air-cooled · Water-cooled · Scroll · Screw · Centrifugal · VFD · Magnetic bearing"],
      ["NH₃ / R717", "Lebensmittelindustrie, Prozess, Lagerung, Sicherheit und Energieeffizienz."],
      ["CO₂ / R744", "Subkritische und transkritische Systeme, Wärmerückgewinnung und Hochdruckregelung."],
      ["Cold Chain", "Kühlräume, Tiefkühlung, Pharma, Logistik und Distribution."],
    ],
    brandsLabel: "Hersteller je nach Anwendung und Projekt",
    brands: ["YORK", "Carrier", "Trane", "TICA"],
    toolsEyebrow: "SISTEA Engineering Tools",
    toolsTitle: "Nützliche Werkzeuge, ohne professionelles Engineering zu ersetzen",
    toolsText:
      "Die App liefert eine erste Abschätzung und strukturiert Projektdaten. Endauswahl, Sicherheit, Normen, Regelung und vollständige Auslegung werden von SISTEA geprüft.",
    tools: [
      ["Cold Room Designer", "Kühlräume und Tiefkühlanwendungen."],
      ["Chiller System Designer", "Erste Kapazität, Volumenstrom und Hydraulik."],
      ["Comfort Cooling Load", "Vorbemessung der Kühllast für Komfortklima."],
      ["Engineering Unit Converter", "kW, TR, BTU/h, Druck, Volumenstrom und mehr."],
    ],
    toolsButton: "App öffnen und installieren",
    toolsNote: "Installierbare Web-App für iPhone und Android.",
    booksEyebrow: "SISTEA Engineering Series",
    booksTitle: "Wir dokumentieren die Methodik, die wir in realen Projekten anwenden",
    booksText:
      "Die Fachbücher sind kein Katalog. Sie sind ein technischer Kompetenznachweis. Sie behandeln Planung, Berechnung, Betrieb, Wartung, Sicherheit, Energieeffizienz und Automation in denselben Bereichen, in denen SISTEA Projekte realisiert.",
    books: [
      ["R744", "CO₂-Kältetechnik", "#0f5d8f"],
      ["R717", "Ammoniak-Kältetechnik", "#9a5b2f"],
      ["HEAT", "Wärmepumpen & Rückgewinnung", "#187b7a"],
      ["ENERGY", "Industrielle Energieeffizienz", "#3b7d44"],
      ["HVAC", "Intelligente Kühlsysteme", "#5c4a8b"],
      ["AI DC", "Rechenzentrumskühlung", "#233b64"],
    ],
    booksButton: "Serie bei Amazon ansehen",
    booksLinkText: "Je nach Ausgabe auf Deutsch, Englisch und Spanisch verfügbar.",
    financeEyebrow: "ESI-Finanzierung",
    financeTitle: "Eine gute Effizienzmaßnahme muss auch finanziell umsetzbar sein",
    financeText:
      "SISTEA verbindet technische Analyse, erwartete Einsparung, Investition, Risiko, Performance und Finanzierungsstruktur. So wird aus einem Einsparpotenzial ein messbares, finanzierbares Projekt.",
    financePoints: ["Technische Bewertung und Baseline", "Einspar- und Performanceprognose", "CAPEX, OPEX, ROI und Sensitivität", "ESI-Struktur und Servicemodelle", "Technische Begleitung der Umsetzung"],
    financeButton: "ESI-Finanzierung ansehen",
    industriesEyebrow: "Anwendungen",
    industriesTitle: "Engineering passend zum realen Betrieb jeder Branche",
    industries: [
      ["Industrie", "Produktion, Prozesse, Utilities und große elektrische Lasten."],
      ["Lebensmittel & Getränke", "Kälte, Tiefkühlung, Prozesswärme und Rückgewinnung."],
      ["Pharma", "Temperatur, Feuchte, Lagerung und Betriebssicherheit."],
      ["Hotels & Krankenhäuser", "Komfort, Warmwasser, Chiller, Luftqualität und Backup."],
      ["Logistik", "Cold Chain, Lager, Lüftung, Energie und Monitoring."],
      ["Data Center", "Hohe Wärmedichte, Redundanz, Energie, Batterien und Regelung."],
    ],
    sourcingEyebrow: "Technische Beschaffung & Direktbezug",
    sourcingTitle: "Seit über 20 Jahren eigener Großhandel und Beschaffung in Shanghai / China",
    sourcingText:
      "Seit mehr als 20 Jahren arbeiten wir direkt mit Herstellern und Lieferanten in China. Dazu gehören gewachsene Kontakte zu deutschen Herstellern mit Produktion in China sowie zu technisch ausgewählten asiatischen Produzenten. SISTEA verbindet Engineering, technische Spezifikation und Direktbeschaffung. So reduzieren wir unnötige Handelsstufen und können wettbewerbsfähige Werkskonditionen anbieten.",
    sourcingPoints: [
      "Direkter Kontakt zu Herstellern und Produktionswerken",
      "Bestehende Kontakte zu deutschen Herstellern mit Fertigung in China",
      "Technische Prüfung vor dem Preisvergleich",
      "Direktbeschaffung mit weniger Zwischenhandelsmargen",
      "Unterstützung bei Spezifikation, Angebot, Verhandlung und Logistik",
      "Werkspreise oder direkte Werkskonditionen, soweit die Lieferstruktur dies ermöglicht",
    ],
    sourcingButton: "Testen Sie uns mit Ihrer nächsten Anfrage",
    sourcingNote: "Senden Sie uns Ihre Geräteliste, Datenblätter oder Spezifikation. Wir vergleichen Lösung, Qualität und Preis direkt für Ihr Projekt.",
    whyEyebrow: "Warum SISTEA",
    whyTitle: "Wissen, Werkzeuge und Umsetzung in einer Kette",
    why: [
      ["Erfahrung", "Mehr als vier Jahrzehnte in Kälte, HVAC, Energie und technischen Systemen."],
      ["Systemblick", "Wir analysieren Wechselwirkungen statt isolierter Komponenten."],
      ["Technologieoffen", "Wir wählen die passende Lösung statt eine feste Marke vorzugeben."],
      ["Umsetzung", "Von Studie und Berechnung bis Inbetriebnahme und Optimierung."],
      ["Direktbeschaffung", "Über 20 Jahre China-Einkaufserfahrung und direkter Zugang zu Herstellern."],
    ],
    contactTitle: "Sag uns, wo das technische oder energetische Problem liegt",
    contactText:
      "Hohe Stromkosten, ineffizienter Chiller, Feuchte, fehlende Kapazität, Lastspitzen, PV-Projekt oder Neubau: Wir beginnen mit den Daten.",
    whatsapp: "Über WhatsApp sprechen",
  },
} as const;

type Locale = keyof typeof translations;
const localeOf = (value: string): Locale => (value === "en" || value === "de" ? value : "es");

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = translations[localeOf(locale)];
  return { title: t.title, description: t.description };
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function TechIcon({ index }: { index: number }) {
  const paths = [
    <path key="a" d="M4 17h16M6 14V7h12v7M9 7V4h6v3M8 11h8" />,
    <path key="b" d="M5 18c3-8 11-8 14 0M7 8h10M9 5h6M12 8v7" />,
    <path key="c" d="M4 15h16M6 15V8h12v7M8 11h8M9 5h6" />,
    <path key="d" d="M12 3v18M5 12h14M7 7l10 10M17 7 7 17" />,
    <path key="e" d="M4 16c4-9 12-9 16 0M7 16v4M12 13v7M17 16v4" />,
  ];
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
      {paths[index % paths.length]}
    </svg>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-black uppercase tracking-[.22em] ${light ? "text-[#2aaed1]" : "text-[#168fb4]"}`}>
      {children}
    </p>
  );
}

function BookCard({ code, title, color }: { code: string; title: string; color: string }) {
  return (
    <div className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-[#c6d7dc] bg-[#edf3f4] p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-2" style={{ backgroundColor: color }} />
      <div className="absolute -right-8 top-10 h-28 w-28 rounded-full opacity-10 blur-2xl" style={{ backgroundColor: color }} />
      <div className="relative flex h-full flex-col">
        <span className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">SISTEA Engineering Series</span>
        <div className="mt-8 text-3xl font-black" style={{ color }}>{code}</div>
        <h3 className="mt-3 text-lg font-black leading-tight text-[#304b5d]">{title}</h3>
        <div className="mt-auto pt-8 text-xs uppercase tracking-[.16em] text-slate-400">Planning · Design · Operation</div>
      </div>
    </div>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = localeOf(locale);
  const t = translations[currentLocale];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#c6d7dd] bg-[#e8f0f2]/94 shadow-[0_6px_22px_rgba(48,75,93,.08)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-6">
          <Link href={`/${currentLocale}`} className="group flex items-center gap-3" aria-label="SISTEA home">
            <img
              src="/images/sistea-logo.jpg"
              alt="SISTEA – Expertos en Enfriamiento Eficiente · Tecnología Alemana"
              className="h-14 w-14 rounded-xl object-contain sm:h-16 sm:w-16"
            />
            <div className="hidden sm:block">
              <div className="text-xl font-black leading-none tracking-tight text-[#304b5d]">SISTEA</div>
              <div className="mt-1 text-[9px] font-bold uppercase tracking-[.19em] text-slate-500">Systems · Energy · Engineering</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-bold text-slate-700 xl:flex">
            {['#system', '#solutions', '#energy', '#tools', '#books', '#esi', '#contact'].map((href, i) => (
              <a key={href} href={href} className="transition hover:text-cyan-700">{t.nav[i]}</a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            {(['es', 'en', 'de'] as const).map((language) => (
              <Link
                key={language}
                href={`/${language}`}
                className={currentLocale === language
                  ? 'rounded-lg bg-[#26afd3] px-3 py-2 text-xs font-black text-white shadow-sm'
                  : 'rounded-lg bg-[#dce8ec] px-3 py-2 text-xs font-black text-[#496172] transition hover:bg-[#d1e3e8]'}
              >
                {language.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="relative min-h-[760px] overflow-hidden bg-[#cddfe4] text-[#f5f8f9]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero/san-salvador-skyline.jpg"
            className="absolute inset-0 h-full w-full object-cover [filter:brightness(1.26)_contrast(.91)_saturate(.96)]"
          >
            <source src="/videos/sistea-hero-web.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#31586a]/58 via-[#3d6975]/24 to-[#d7e7ea]/8" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#a9d4da]/10 via-transparent to-[#d9e7e9]/8" />

          <div className="relative z-10 mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.25fr_.75fr] lg:py-28">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dcebed]/55 bg-[#d9e8ea]/18 px-4 py-2 shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-xs font-black uppercase tracking-[.16em] text-[#d8f1f5]">{t.heroEyebrow}</span>
              </div>
              <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-[-.04em] sm:text-5xl lg:text-7xl lg:leading-[1.02]">
                {t.heroTitle}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#f0f5f6]/95 [text-shadow:0_2px_12px_rgba(22,53,70,.35)] lg:text-xl">{t.heroText}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25b4dc] px-6 py-4 font-black text-white shadow-lg shadow-cyan-950/10 transition hover:bg-[#159dc5]">
                  {t.heroPrimary}<ArrowIcon />
                </a>
                <a href={APP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e7f0f2]/95 px-6 py-4 font-black text-[#304b5d] shadow-lg shadow-slate-950/10 transition hover:bg-[#f0f5f6]">
                  {t.heroSecondary}<ArrowIcon />
                </a>
                <a href="#solutions" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#dcebed]/55 bg-[#d9e8ea]/16 px-6 py-4 font-black text-white shadow-sm backdrop-blur-md transition hover:bg-[#f0f5f6]/24">
                  {t.heroThird}
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {t.stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-[#b9d2d8] bg-[#dce9ec]/88 p-6 text-[#304b5d] shadow-xl shadow-[#234b61]/10 backdrop-blur-xl">
                  <div className="text-4xl font-black text-[#20a8cf]">{value}</div>
                  <div className="mt-2 text-sm font-semibold leading-6 text-[#4d6575]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#c2d5da]/75 bg-[#d9e6e9]/90 shadow-[0_-8px_30px_rgba(48,75,93,.06)] backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 px-6 py-4 text-[11px] font-bold uppercase tracking-[.16em] text-[#4d6575] lg:justify-between">
              {['HVAC', 'R717 · NH₃', 'R744 · CO₂', 'CHILLERS', 'PV + BATTERY', 'BMS · PLC', 'ESI FINANCING'].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="bg-[#e5edef] px-6 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <Eyebrow>{t.storyEyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#304b5d] sm:text-4xl lg:text-5xl">{t.storyTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">{t.storyText}</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {t.storySteps.map(([number, title, text]) => (
                <div key={number} className="group rounded-2xl border border-[#c9dade] bg-[#edf3f4] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-[#f0f5f6] hover:shadow-xl">
                  <div className="text-sm font-black text-cyan-700">{number}</div>
                  <h3 className="mt-5 text-lg font-black text-[#304b5d]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="system" className="relative overflow-hidden bg-gradient-to-br from-[#dce9ed] via-[#e8f0f1] to-[#dfecea] px-6 py-24 text-[#304b5d]">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#25b4dc]/12 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#70d8cf]/14 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <Eyebrow>{t.systemEyebrow}</Eyebrow>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.systemTitle}</h2>
              </div>
              <p className="text-lg leading-8 text-[#5d7180]">{t.systemText}</p>
            </div>

            <div className="mt-14 grid gap-4 lg:grid-cols-5">
              {t.modules.map(([number, title, text], index) => (
                <article key={number} className="group rounded-2xl border border-[#c6d8dd] bg-[#eef4f4]/95 p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#7fd7e9] hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#e2f6fb] text-[#159dc5]"><TechIcon index={index} /></div>
                    <span className="text-sm font-black text-[#8ca0ab]">{number}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#637783]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="bg-[#dce6ea] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <Eyebrow>{t.solutionsEyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#304b5d] sm:text-4xl lg:text-5xl">{t.solutionsTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">{t.solutionsText}</p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {t.competences.map(([title, text], index) => (
                <article key={title} className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 0 || index === 3 ? 'border-[#a9d6df] bg-[#e5f1f3]' : 'border-[#c5d6db] bg-[#edf3f4]'}`}>
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#e3f6fb] text-[#159dc5]"><TechIcon index={index} /></div>
                  <h3 className="mt-6 text-lg font-black text-[#304b5d]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="energy" className="bg-[#e6eef0] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>{t.energyEyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#304b5d] sm:text-4xl lg:text-5xl">{t.energyTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">{t.energyText}</p>

              <div className="mt-9 rounded-2xl border border-[#afd5dd] bg-[#dfecef] p-7">
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-xl font-black text-[#304b5d]">{t.reviewTitle}</h3>
                  <div className="flex-none rounded-xl border border-[#bfd6dc] bg-[#eef4f5] px-4 py-3 text-center shadow-sm">
                    <div className="text-2xl font-black text-[#159dc5]">~40%</div>
                    <div className="mt-1 text-[10px] font-black uppercase tracking-[.12em] text-[#6d8390]">Potential</div>
                  </div>
                </div>
                <p className="mt-4 leading-7 text-slate-700">{t.reviewText}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25b4dc] px-5 py-3 font-black text-white shadow-sm transition hover:bg-[#159dc5]">
                  {t.reviewButton}<ArrowIcon />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-[#d7e8ed] bg-gradient-to-br from-[#dcebed] to-[#e4efed] p-6 text-[#304b5d] shadow-sm sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {t.energyFlow.map(([title, text], index) => (
                  <div key={title} className="relative overflow-hidden rounded-2xl border border-[#c6d8dd] bg-[#edf3f4] p-6 shadow-sm">
                    <div className="absolute right-4 top-3 text-5xl font-black text-[#dceef3]">0{index + 1}</div>
                    <div className="text-xs font-black uppercase tracking-[.18em] text-[#159dc5]">0{index + 1}</div>
                    <h3 className="mt-4 text-xl font-black text-[#304b5d]">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#637783]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-7xl">
            <EnergyCostCalculator locale={currentLocale} />
          </div>
        </section>

        <section className="bg-[#f2f8fa] px-6 py-24 text-[#304b5d]">
          <div className="mx-auto max-w-7xl">
            <Eyebrow>{t.refrigerationEyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-5xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.refrigerationTitle}</h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-[#607684]">{t.refrigerationText}</p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {t.refrigerationCards.map(([title, text], index) => (
                <article key={title} className="rounded-2xl border border-[#c6d8dd] bg-[#edf3f4] p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#7fd7e9] hover:shadow-lg">
                  <div className="text-xs font-black uppercase tracking-[.16em] text-[#159dc5]">Engineering 0{index + 1}</div>
                  <h3 className="mt-4 text-2xl font-black text-[#304b5d]">{title}</h3>
                  <p className="mt-4 leading-7 text-[#607684]">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-[#c6d8dd] bg-[#edf3f4] p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[.18em] text-[#718692]">{t.brandsLabel}</p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {t.brands.map((brand) => <div key={brand} className="rounded-xl border border-[#d7e8ed] bg-[#dce7ea] px-5 py-4 text-center text-xl font-black text-[#405d70]">{brand}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="tools" className="relative overflow-hidden bg-gradient-to-br from-[#dbeaec] via-[#e8f0f2] to-[#d7e3e7] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <Eyebrow>{t.toolsEyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#304b5d] sm:text-4xl lg:text-5xl">{t.toolsTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">{t.toolsText}</p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {t.tools.map(([title, text], index) => (
                  <div key={title} className="rounded-2xl border border-[#c6d7dc] bg-[#edf3f4] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#dff4f8] text-xs font-black text-[#159dc5]">0{index + 1}</div>
                      <h3 className="font-black text-[#304b5d]">{title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
              <a href={APP_URL} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-4 font-black text-white transition hover:bg-cyan-700">
                {t.toolsButton}<ArrowIcon />
              </a>
              <p className="mt-3 text-sm text-slate-500">{t.toolsNote}</p>
            </div>

            <div className="mx-auto w-full max-w-md rounded-[2.4rem] border-[10px] border-[#58717d] bg-[#58717d] p-2 shadow-2xl shadow-[#365466]/15">
              <div className="overflow-hidden rounded-[1.75rem] bg-[#dce7ea]">
                <div className="flex items-center justify-between bg-[#405d70] px-5 py-4 text-white">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[.16em] text-cyan-300">SISTEA</div>
                    <div className="mt-1 font-black">Engineering Tools</div>
                  </div>
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-3 p-5">
                  {t.tools.map((tool, index) => {
                    const title = tool[0];
                    return (
                      <div key={title} className="flex items-center gap-4 rounded-2xl bg-[#eef4f5] p-4 shadow-sm">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-50 font-black text-cyan-700">0{index + 1}</div>
                        <div className="font-black text-slate-900">{title}</div>
                      </div>
                    );
                  })}
                  <div className="rounded-2xl bg-cyan-600 p-5 text-white">
                    <div className="text-xs font-bold uppercase tracking-[.16em] text-[#d8f1f5]">Engineering Review</div>
                    <div className="mt-2 text-lg font-black">SISTEA Technical Check</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="books" className="bg-gradient-to-br from-[#dfe9ec] via-[#e8f0f1] to-[#dbe9eb] px-6 py-24 text-[#304b5d]">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <Eyebrow>{t.booksEyebrow}</Eyebrow>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.booksTitle}</h2>
              </div>
              <div>
                <p className="text-lg leading-8 text-[#607684]">{t.booksText}</p>
                <a href={AMAZON_URL} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#25b4dc] px-6 py-3.5 font-black text-white shadow-sm transition hover:bg-[#159dc5]">
                  {t.booksButton}<ArrowIcon />
                </a>
                <p className="mt-3 text-sm text-[#718692]">{t.booksLinkText}</p>
              </div>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {t.books.map(([code, title, color]) => <BookCard key={code} code={code} title={title} color={color} />)}
            </div>

            <div className="mt-12 grid gap-3 text-center text-xs font-black uppercase tracking-[.14em] text-[#607684] sm:grid-cols-4">
              <div className="rounded-xl border border-[#c5d7dc] bg-[#edf3f4] px-4 py-4">Understand</div>
              <div className="rounded-xl border border-[#c5d7dc] bg-[#edf3f4] px-4 py-4">Calculate</div>
              <div className="rounded-xl border border-[#c5d7dc] bg-[#edf3f4] px-4 py-4">Design</div>
              <div className="rounded-xl border border-[#c5d7dc] bg-[#edf3f4] px-4 py-4">Optimize</div>
            </div>
          </div>
        </section>

        <section id="esi" className="bg-[#e4edef] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.85fr] lg:items-center">
            <div>
              <Eyebrow>{t.financeEyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#304b5d] sm:text-4xl lg:text-5xl">{t.financeTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">{t.financeText}</p>
              <Link href={`/${currentLocale}/esi`} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#25b4dc] px-6 py-4 font-black text-white shadow-sm transition hover:bg-[#159dc5]">
                {t.financeButton}<ArrowIcon />
              </Link>
            </div>
            <div className="rounded-3xl border border-[#bfd9d2] bg-[#dfece8] p-7 sm:p-9">
              <div className="text-xs font-black uppercase tracking-[.18em] text-emerald-800">Technical → Economic → Financeable</div>
              <div className="mt-7 space-y-4">
                {t.financePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-xl bg-[#eef4f2] p-4 text-slate-800 shadow-sm">
                    <span className="mt-0.5 text-emerald-700"><CheckIcon /></span>
                    <span className="font-semibold leading-6">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#d9e4e8] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <Eyebrow>{t.industriesEyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-tight text-[#304b5d] sm:text-4xl lg:text-5xl">{t.industriesTitle}</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.industries.map(([title, text], index) => (
                <article key={title} className="group relative overflow-hidden rounded-2xl border border-[#c5d6db] bg-[#ebf1f3] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute right-4 top-1 text-7xl font-black text-slate-100 transition group-hover:text-cyan-50">0{index + 1}</div>
                  <div className="relative">
                    <h3 className="text-xl font-black text-[#304b5d]">{title}</h3>
                    <p className="mt-4 max-w-sm leading-7 text-slate-600">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e5edef] px-6 py-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#c3d4d9] bg-[#edf3f4] shadow-[0_18px_50px_rgba(48,75,93,.10)]">
            <div className="grid lg:grid-cols-[1.05fr_.95fr]">
              <div className="p-8 sm:p-12 lg:p-14">
                <Eyebrow>{t.sourcingEyebrow}</Eyebrow>
                <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-tight text-[#304b5d] sm:text-4xl lg:text-5xl">{t.sourcingTitle}</h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{t.sourcingText}</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {t.sourcingPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-xl border border-[#c8d8dd] bg-[#e4ecef] p-4 text-sm leading-6 text-slate-700">
                      <span className="mt-0.5 text-emerald-700"><CheckIcon /></span>
                      <span className="font-semibold">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between bg-gradient-to-br from-[#d7e8eb] to-[#dceae6] p-8 text-[#304b5d] sm:p-12 lg:p-14">
                <div>
                  <div className="text-xs font-black uppercase tracking-[.18em] text-[#168fb4]">Shanghai · China · Direct Factory Access</div>
                  <div className="mt-7 text-5xl font-black tracking-tight text-[#304b5d] sm:text-6xl">20+ <span className="text-[#20a8cf]">Years</span></div>
                  <div className="mt-3 text-lg font-bold text-[#557080]">Engineering + Procurement + Logistics</div>
                  <p className="mt-8 text-base leading-7 text-[#607684]">{t.sourcingNote}</p>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25b4dc] px-6 py-4 text-center font-black text-white shadow-sm transition hover:bg-[#159dc5]">
                  {t.sourcingButton}<ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e5edef] px-6 py-24">
          <div className="mx-auto max-w-7xl rounded-3xl border border-[#d7e8ed] bg-gradient-to-br from-[#d9e8eb] via-[#e6eef0] to-[#dce9e5] p-8 text-[#304b5d] shadow-sm sm:p-12 lg:p-14">
            <div className="max-w-4xl">
              <Eyebrow>{t.whyEyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.whyTitle}</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {t.why.map(([title, text], index) => (
                <div key={title} className="border-l border-[#71d8e9] pl-5">
                  <div className="text-xs font-black text-[#159dc5]">0{index + 1}</div>
                  <h3 className="mt-4 text-xl font-black text-[#304b5d]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#607684]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-b from-[#e2ebee] to-[#d8e8eb] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <Eyebrow>Project Contact</Eyebrow>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#304b5d] sm:text-4xl lg:text-5xl">{t.contactTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">{t.contactText}</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-black text-white transition hover:bg-emerald-700">
                {t.whatsapp}<ArrowIcon />
              </a>
              <div className="mt-10 rounded-2xl border border-[#c3d4d9] bg-[#eaf1f2] p-6 text-sm leading-7 text-slate-600 shadow-sm">
                <div className="font-black text-[#304b5d]">SISTEA S.A. de C.V.</div>
                <div>www.sisteasv.com</div>
                <div>info@sisteasv.com</div>
                <div>WhatsApp +503 7728-2624</div>
              </div>
            </div>
            <div className="rounded-3xl border border-[#c3d4d9] bg-[#eaf1f2] p-5 shadow-[0_18px_45px_rgba(48,75,93,.10)] sm:p-8">
              <ContactForm locale={currentLocale} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d7e8ed] bg-[#dce7ea] px-6 py-8 text-[#607684]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div><span className="font-black text-[#304b5d]">SISTEA S.A. de C.V.</span> · Engineering for efficient systems</div>
          <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[.13em] text-[#718692]">
            <a href={AMAZON_URL} target="_blank" rel="noreferrer" className="hover:text-[#159dc5]">Engineering Series</a>
            <a href={APP_URL} target="_blank" rel="noreferrer" className="hover:text-[#159dc5]">Engineering Tools</a>
            <a href="#contact" className="hover:text-[#159dc5]">Contact</a>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white shadow-2xl transition hover:scale-105 hover:bg-emerald-700"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.81 11.81 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.95L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.46h.01C18.65 23.82 24 18.47 24 11.9c0-3.18-1.24-6.17-3.48-8.42Zm-8.44 18.33h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.93-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.01c-.01 5.47-4.46 9.92-9.93 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </>
  );
}
