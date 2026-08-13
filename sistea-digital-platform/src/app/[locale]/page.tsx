import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import EnergyCostCalculator from "./components/EnergyCostCalculator";

export const runtime = "edge";

const APP_URL = "https://sistea-engineering-tools-secure.andreas-reith.workers.dev";
const ADMIN_URL = "https://sistea-engineering-tools-secure.andreas-reith.workers.dev/admin";
const AMAZON_URL = "https://www.amazon.com/author/andreasreith";
const WHATSAPP_URL = "https://wa.me/50377282624";
const BASE_ESI_URL = "https://energy-base.org/projects/energy-savings-insurance-europe/";
const BASE_CAAS_URL = "https://energy-base.org/projects/cooling-as-a-service-initiative/";
const SET_ALLIANCE_URL = "https://set-alliance.org/";
const UNEP_CAAS_URL = "https://www.unep.org/index.php/events/webinar/cooling-service-catalyzing-innovation-and-efficiency";
const UNEP_COOLING_FINANCE_URL = "https://www.unep.org/resources/publication/cooler-finance-mobilizing-investment-developing-worlds-sustainable-cooling";

const translations = {
  es: {
    title: "SISTEA | Ingeniería alemana para eficiencia energética, diseño e instalación",
    description:
      "Empresa alemana de ingeniería, consultoría, diseño e instalación para ahorro energético sostenible, gestión de demanda y sistemas técnicos integrados en Centroamérica.",
    nav: ["Consultoría", "Energía & Demanda", "Diseño", "Instalación", "Soluciones", "Libros", "Contacto"],
    heroEyebrow: "Empresa de ingeniería alemana · Consultoría · Diseño · Instalación",
    heroTitle: "Ahorrar energía de forma sostenible. Diseñar mejor. Ejecutar con ingeniería alemana.",
    heroText:
      "SISTEA es una empresa alemana de ingeniería, consultoría, diseño e instalación en Centroamérica. Analizamos consumo y picos de demanda, diseñamos medidas de ahorro económicamente viables y ejecutamos sistemas técnicos completos hasta la puesta en marcha y optimización.",
    heroPrimary: "Analizar potencial de ahorro",
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
    energyTitle: "El ahorro energético sostenible comienza con el perfil de carga.",
    energyText:
      "No empezamos vendiendo equipos. Empezamos con consumo, demanda y costo. El calculador energético permite una primera evaluación propia de costos, carga media y picos de demanda. Después SISTEA valida los datos y desarrolla medidas de reducción de consumo, peak shaving, desplazamiento de carga, recuperación de calor, generación propia y control inteligente.",
    energyFlow: [
      ["Medir", "Facturas, demanda, submedición y perfiles"],
      ["Reducir", "Chillers, HVAC, bombas, ventiladores y procesos"],
      ["Recuperar", "Calor residual y energía útil"],
      ["Generar", "Fotovoltaica y otras fuentes adecuadas"],
      ["Almacenar", "Baterías y desplazamiento de demanda"],
      ["Controlar", "BMS, PLC, IA y gestión de cargas"],
    ],
    reviewTitle: "Autoevaluación inicial más análisis energético profesional",
    reviewText:
      "Para una evaluación energética con valor informativo, envíanos preferentemente 6–12 meses consecutivos de facturas eléctricas. Así podemos evaluar consumo, costos, demanda máxima, estacionalidad, estructura tarifaria y comportamiento operativo, y construir una línea base más sólida para identificar medidas de reducción de consumo, peak shaving y gestión de carga.",
    reviewPrivacy:
      "Confidencialidad: SISTEA trata toda la información recibida de forma estrictamente confidencial y la utiliza únicamente para la evaluación técnica y energética. Si lo deseas, podemos enviar y firmar un NDA antes de recibir la documentación.",
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
    visualSolutions: [
      ["Chillers", "Plantas enfriadoras de aire o agua, hidráulica, VFD, redundancia y control integral."],
      ["Refrigeración industrial", "Skids, salas de máquinas, NH₃/R717, CO₂/R744, procesos, recuperación de calor y automatización."],
      ["VRF / VRV", "Sistemas de volumen de refrigerante variable para edificios, oficinas, hoteles y retrofit."],
      ["Climatización adiabática de 2 etapas", "Preenfriamiento indirecto/adiabático para reducir la temperatura de impulsión con muy bajo consumo eléctrico."],
      ["Cámaras frigoríficas + BITZER", "Cámaras de conservación y congelación con selección profesional de evaporadores, condensación y compresores."],
      ["Sistemas adiabáticos reales", "Integración de equipos adiabáticos en instalaciones industriales, comerciales y de proceso."],
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
      ["R744", "CO₂ Refrigeration", "#0A4F8A"],
      ["R717", "Ammonia Refrigeration", "#9a5b2f"],
      ["HEAT", "Heat Pumps & Recovery", "#187b7a"],
      ["ENERGY", "Industrial Efficiency", "#3b7d44"],
      ["HVAC", "Intelligent Cooling", "#5c4a8b"],
      ["AI DC", "Data Center Cooling", "#233b64"],
    ],
    booksButton: "Ver la serie en Amazon",
    booksLinkText: "Disponible en alemán, inglés y español según edición.",
    financeEyebrow: "Financiamiento & Servitización",
    financeTitle: "La eficiencia no debe fracasar por falta de inversión",
    financeText:
      "SISTEA conecta ingeniería, línea base, ahorro esperado, riesgo, desempeño y estructura financiera. El objetivo es convertir una buena medida técnica en un proyecto ejecutable, medible y financieramente estructurado.",
    financeModels: [
      ["ESI · Energy Savings Insurance", "Estructura el proyecto alrededor de ahorro, contrato, validación técnica y reducción del riesgo. Según el programa y el proyecto, puede incorporar seguro de ahorro y una estructura de financiamiento."],
      ["Cooling-as-a-Service", "El cliente no necesariamente compra el chiller o la planta de refrigeración. Contrata la capacidad o el servicio de enfriamiento definido, mientras inversión, operación, mantenimiento, monitoreo y eficiencia pueden integrarse en un modelo de largo plazo."],
      ["SISTEA Project-as-a-Service", "Para proyectos adecuados, SISTEA puede estructurar análisis, ingeniería, financiamiento, compra, instalación, puesta en marcha, monitoreo y optimización como una solución integrada orientada al desempeño."],
    ],
    financePoints: [
      "01 · Análisis y línea base",
      "02 · Ingeniería, CAPEX/OPEX y ahorro",
      "03 · Selección del modelo financiero o de servicio",
      "04 · Implementación, medición y optimización",
    ],
    financeMembership: "SISTEA participa en el ecosistema BASE / ESI y es miembro de la SET Alliance. Utilizamos estos marcos como referencia para estructurar proyectos adecuados en Centroamérica.",
    financeDetailButton: "Ver modelos de financiamiento en detalle",
    financeButton: "Solicitar evaluación de financiamiento",
    financeSourcesLabel: "Referencias internacionales",
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
    knowledgeEyebrow: "Conocimiento técnico SISTEA",
    knowledgeTitle: "Conocimiento que se convierte en decisiones de ingeniería",
    knowledgeText:
      "SISTEA conecta documentación técnica, herramientas de cálculo, análisis energético y modelos de financiamiento. El objetivo no es acumular información, sino convertirla en una decisión técnica y económica aplicable al proyecto.",
    knowledgeItems: [
      ["Engineering Tools", "Cálculos iniciales para estructurar datos, carga, capacidad, unidades y primera selección.", "Abrir herramientas", "#tools"],
      ["Engineering Series", "Metodología documentada para refrigeración, HVAC, energía, automatización y data centers.", "Ver libros", "#books"],
      ["Energía & Demanda", "Facturas, línea base, perfil de carga y primera identificación del potencial de ahorro.", "Analizar energía", "#energy"],
      ["Financiamiento", "ESI, Cooling-as-a-Service y modelos de servicio para convertir medidas viables en proyectos ejecutables.", "Ver modelos", "/financing"],
    ],
    procurementEyebrow: "Compra directa & sourcing técnico",
    procurementTitle: "Más de 20 años de experiencia de compra y comercio mayorista en China",
    procurementText:
      "SISTEA combina ingeniería en Centroamérica con relaciones de suministro desarrolladas durante más de dos décadas en toda China. Para proyectos adecuados buscamos acceso directo a fabricantes en las principales regiones industriales del país, incluyendo proveedores europeos y alemanes con producción en China.",
    procurementPromise:
      "No buscamos simplemente el precio más bajo. Buscamos la solución técnica y económicamente correcta, con especificación clara, documentación verificable y un precio de fábrica competitivo cuando la estructura del proyecto lo permite.",
    procurementStats: [
      ["20+", "años de experiencia en compra y comercio mayorista en China"],
      ["Directo", "contacto con fabricantes y fábricas"],
      ["Técnico", "selección basada en especificación y desempeño"],
      ["Integrado", "compra, logística y proyecto coordinados por SISTEA"],
    ],
    procurementSteps: [
      ["01", "Especificación", "SISTEA define capacidad, materiales, controles, normas, documentación y condiciones de servicio."],
      ["02", "Selección de fabricante", "Comparamos fábricas y proveedores según capacidad técnica, referencias, calidad, plazos y costo total."],
      ["03", "Oferta de fábrica", "Solicitamos precios de fabricante o proyecto y revisamos exactamente qué está incluido."],
      ["04", "Revisión técnica", "Validamos fichas, certificados, planos, componentes, comunicación BMS y compatibilidad con el proyecto."],
      ["05", "Logística", "Coordinamos embalaje, consolidación, transporte, documentación y entrega según el alcance acordado."],
      ["06", "Integración", "La compra termina en un sistema instalado, comisionado y operable, no en una caja entregada."],
    ],
    procurementCta: "Compare nuestra propuesta. Pónganos a prueba.",
    procurementButton: "Solicitar comparación técnica y comercial",
    procurementIntegrationText: "SISTEA integra diseño técnico, selección de proveedores y compras en un solo proceso de proyecto.",
    procurementFlowLabel: "Ingeniería → Fabricante → Precio de fábrica → Verificación → Logística → Integración",
    knowledgeFlow: ["Conocimiento", "Cálculo", "Validación", "Ingeniería", "Proyecto"],
    brandPortfolioLabel: "Portafolio oficial de productos ↗",
    brandEvaluationText: "YORK · Carrier · Trane se evalúan según el proyecto, considerando perfil de carga, eficiencia, hidráulica, ruido, redundancia, servicio y costo total de propiedad.",
    contactEyebrow: "Contacto de proyecto",
    sourcingEyebrow: "Compras técnicas & suministro directo",
    sourcingTitle: "Más de 20 años de experiencia propia en compras y comercio mayorista en toda China",
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
    contactTitle: "Del análisis energético hasta la instalación",
    contactText:
      "Costos altos de energía, picos de demanda, sistemas de suministro ineficientes o un nuevo proyecto: SISTEA integra consultoría, análisis, diseño, compras, instalación, puesta en marcha y optimización.",
    whatsapp: "Hablar por WhatsApp",
  },
  en: {
    title: "SISTEA | German engineering for energy efficiency, design and installation",
    description:
      "German engineering, consulting, design and installation company for sustainable energy savings, demand management and integrated technical systems in Central America.",
    nav: ["Consulting", "Energy & Demand", "Design", "Installation", "Solutions", "Books", "Contact"],
    heroEyebrow: "German engineering company · Consulting · Design · Installation",
    heroTitle: "Save energy sustainably. Design better systems. Implement reliable projects.",
    heroText:
      "SISTEA is a German engineering, consulting, design and installation company in Central America. We analyze energy use and demand peaks, design economically viable savings measures, and implement complete technical systems through commissioning and optimization.",
    heroPrimary: "Analyze savings potential",
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
    energyTitle: "Sustainable energy savings start with the load profile.",
    energyText:
      "We do not start by selling equipment. We start with consumption, demand and cost. The energy calculator provides an initial self-check of electricity cost, average load and demand peaks. SISTEA then validates the data and develops measures for consumption reduction, peak shaving, load shifting, heat recovery, onsite generation and intelligent controls.",
    energyFlow: [
      ["Measure", "Bills, demand, submetering and profiles"],
      ["Reduce", "Chillers, HVAC, pumps, fans and processes"],
      ["Recover", "Waste heat and useful energy"],
      ["Generate", "Solar PV and suitable onsite sources"],
      ["Store", "Batteries and demand shifting"],
      ["Control", "BMS, PLC, AI and load management"],
    ],
    reviewTitle: "Self-screening plus professional energy analysis",
    reviewText:
      "For a meaningful energy assessment, please send preferably 6–12 consecutive months of electricity bills. This allows us to evaluate consumption, cost, maximum demand, seasonality, tariff structure and operating behavior, and to build a more robust baseline for identifying consumption reduction, peak-shaving and load-management measures.",
    reviewPrivacy:
      "Confidentiality: SISTEA treats all information received as strictly confidential and uses it solely for the technical and energy assessment. If requested, we can provide and sign an NDA before any documentation is shared.",
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
    visualSolutions: [
      ["Chillers", "Air- or water-cooled chiller plants, hydraulics, VFD, redundancy and integrated controls."],
      ["Industrial refrigeration", "Skids, machine rooms, NH₃/R717, CO₂/R744, processes, heat recovery and automation."],
      ["VRF / VRV", "Variable refrigerant flow systems for buildings, offices, hotels and retrofit projects."],
      ["Two-stage adiabatic cooling", "Indirect/adiabatic pre-cooling to reduce supply-air temperature with very low electrical consumption."],
      ["Cold rooms + BITZER", "Chilled and frozen rooms with professional evaporator, condensing-unit and compressor selection."],
      ["Real adiabatic systems", "Integration of adiabatic equipment in industrial, commercial and process applications."],
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
      ["R744", "CO₂ Refrigeration", "#0A4F8A"],
      ["R717", "Ammonia Refrigeration", "#9a5b2f"],
      ["HEAT", "Heat Pumps & Recovery", "#187b7a"],
      ["ENERGY", "Industrial Efficiency", "#3b7d44"],
      ["HVAC", "Intelligent Cooling", "#5c4a8b"],
      ["AI DC", "Data Center Cooling", "#233b64"],
    ],
    booksButton: "View the series on Amazon",
    booksLinkText: "Available in German, English and Spanish depending on edition.",
    financeEyebrow: "Financing & Servitization",
    financeTitle: "Efficiency should not fail because of the investment barrier",
    financeText:
      "SISTEA connects engineering, baseline, expected savings, risk, performance and financing structure. The objective is to turn a sound technical measure into an executable, measurable and financeable project.",
    financeModels: [
      ["ESI · Energy Savings Insurance", "Structures the project around savings, contracts, technical validation and risk reduction. Depending on the program and project, it may include energy-savings insurance and a financing structure."],
      ["Cooling-as-a-Service", "The customer does not necessarily purchase the chiller or refrigeration plant. Instead, the required cooling capacity or defined service is contracted while investment, operation, maintenance, monitoring and efficiency can be integrated into a long-term model."],
      ["SISTEA Project-as-a-Service", "For suitable projects, SISTEA can structure analysis, engineering, financing, procurement, installation, commissioning, monitoring and optimization as an integrated performance-oriented solution."],
    ],
    financePoints: [
      "01 · Analysis and baseline",
      "02 · Engineering, CAPEX/OPEX and savings",
      "03 · Select financing or service model",
      "04 · Implementation, measurement and optimization",
    ],
    financeMembership: "SISTEA participates in the BASE / ESI ecosystem and is a member of the SET Alliance. We use these frameworks as references when structuring suitable projects in Central America.",
    financeDetailButton: "Explore financing models in detail",
    financeButton: "Request financing assessment",
    financeSourcesLabel: "International references",
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
    knowledgeEyebrow: "SISTEA Technical Knowledge",
    knowledgeTitle: "Knowledge that turns into engineering decisions",
    knowledgeText:
      "SISTEA connects technical documentation, calculation tools, energy analysis and financing models. The objective is not to accumulate information, but to convert it into a technical and economic decision that can be applied to the project.",
    knowledgeItems: [
      ["Engineering Tools", "Initial calculations to structure data, load, capacity, units and preliminary selection.", "Open tools", "#tools"],
      ["Engineering Series", "Documented methodology for refrigeration, HVAC, energy, automation and data centers.", "View books", "#books"],
      ["Energy & Demand", "Bills, baseline, load profile and initial identification of savings potential.", "Analyze energy", "#energy"],
      ["Financing", "ESI, Cooling-as-a-Service and service models to turn viable measures into executable projects.", "View models", "/financing"],
    ],
    procurementEyebrow: "Direct Procurement & Technical Sourcing",
    procurementTitle: "More than 20 years of procurement and wholesale experience in China",
    procurementText:
      "SISTEA combines engineering in Central America with supplier relationships developed over more than two decades across China. For suitable projects, we seek direct manufacturer access in China's major industrial regions, including European and German suppliers with production in China.",
    procurementPromise:
      "We do not simply search for the lowest price. We select the technically and economically right solution, with clear specifications, verifiable documentation and competitive factory-level pricing when the project structure allows it.",
    procurementStats: [
      ["20+", "years of procurement and wholesale experience in China"],
      ["Direct", "manufacturer and factory contacts"],
      ["Technical", "selection based on specification and performance"],
      ["Integrated", "procurement, logistics and project coordinated by SISTEA"],
    ],
    procurementSteps: [
      ["01", "Specification", "SISTEA defines capacity, materials, controls, standards, documentation and service conditions."],
      ["02", "Manufacturer selection", "We compare factories and suppliers by technical capability, references, quality, lead time and total cost."],
      ["03", "Factory quotation", "We request manufacturer or project pricing and verify exactly what is included."],
      ["04", "Technical review", "We validate datasheets, certificates, drawings, components, BMS communication and project compatibility."],
      ["05", "Logistics", "We coordinate packing, consolidation, transport, documentation and delivery according to the agreed scope."],
      ["06", "Integration", "Procurement ends with an installed, commissioned and operable system—not simply a delivered box."],
    ],
    procurementCta: "Compare our proposal. Put us to the test.",
    procurementButton: "Request technical and commercial comparison",
    procurementIntegrationText: "SISTEA integrates technical design, supplier selection and procurement into one project process.",
    procurementFlowLabel: "Engineering → Manufacturer → Factory Price → Verification → Logistics → Integration",
    knowledgeFlow: ["Knowledge", "Calculation", "Validation", "Engineering", "Project"],
    brandPortfolioLabel: "Official product portfolio ↗",
    brandEvaluationText: "YORK · Carrier · Trane are evaluated project by project based on load profile, efficiency, hydraulics, noise, redundancy, service and total cost of ownership.",
    contactEyebrow: "Project Contact",
    sourcingEyebrow: "Technical Procurement & Direct Sourcing",
    sourcingTitle: "More than 20 years of our own sourcing and wholesale experience across China",
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
    contactTitle: "From energy analysis through installation",
    contactText:
      "High energy costs, demand peaks, inefficient utility systems or a new project: SISTEA provides consulting, analysis, design, procurement, installation, commissioning and optimization as one integrated engineering process.",
    whatsapp: "Talk on WhatsApp",
  },
  de: {
    title: "SISTEA | Deutsche Ingenieurkompetenz für Energieeffizienz, Planung und Installation",
    description:
      "Deutscher Ingenieur-, Consulting-, Planungs- und Installationsbetrieb für nachhaltige Energieeinsparung, Lastmanagement und integrierte technische Systeme in Zentralamerika.",
    nav: ["Consulting", "Energie & Last", "Planung", "Installation", "Lösungen", "Bücher", "Kontakt"],
    heroEyebrow: "Deutscher Ingenieurbetrieb · Consulting · Planung · Installation",
    heroTitle: "Energie nachhaltig einsparen. Systeme besser planen. Projekte zuverlässig umsetzen.",
    heroText:
      "SISTEA ist ein deutscher Ingenieur-, Consulting-, Planungs- und Installationsbetrieb in Zentralamerika. Wir analysieren Energieverbrauch und Lastspitzen, planen wirtschaftliche Einsparmaßnahmen und realisieren komplette technische Systeme bis zur Inbetriebnahme und Optimierung.",
    heroPrimary: "Einsparpotenzial analysieren",
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
    energyTitle: "Umweltschonende Energieeinsparung beginnt mit dem Lastprofil.",
    energyText:
      "Wir beginnen nicht mit dem Verkauf einer Maschine, sondern mit Verbrauch, Leistung und Kosten. Der Energierechner ermöglicht eine erste eigene Bewertung von Stromkosten, mittlerer Last und Lastspitzen. Danach prüft SISTEA die Daten technisch und entwickelt Maßnahmen für Verbrauchsreduzierung, Peak Shaving, Lastverschiebung, Wärmerückgewinnung, Eigenerzeugung und intelligente Regelung.",
    energyFlow: [
      ["Messen", "Rechnungen, Leistung, Unterzähler und Profile"],
      ["Reduzieren", "Chiller, HVAC, Pumpen, Ventilatoren und Prozesse"],
      ["Rückgewinnen", "Abwärme und nutzbare Restenergie"],
      ["Erzeugen", "Photovoltaik und passende Eigenversorgung"],
      ["Speichern", "Batterien und Lastverschiebung"],
      ["Regeln", "BMS, PLC, KI und Lastmanagement"],
    ],
    reviewTitle: "Eigene Vorprüfung plus professionelle Energieanalyse",
    reviewText:
      "Für eine aussagekräftige Energieanalyse benötigen wir vorzugsweise 6–12 Monate Stromrechnungen. Damit können wir Verbrauch, Kosten, Leistungsspitzen, saisonale Schwankungen, Tarifstruktur und Betriebsverhalten bewerten, eine belastbarere Baseline bilden und Ansätze für Verbrauchsreduzierung, Peak Shaving und Lastmanagement identifizieren.",
    reviewPrivacy:
      "Vertraulichkeit: SISTEA behandelt alle übermittelten Informationen streng vertraulich und verwendet sie ausschließlich für die technische und energetische Auswertung. Auf Wunsch senden und unterzeichnen wir vor der Datenübermittlung ein NDA.",
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
    visualSolutions: [
      ["Chilleranlagen", "Luft- oder wassergekühlte Chillerzentralen, Hydraulik, VFD, Redundanz und integrierte Regelung."],
      ["Industriekälte", "Skids, Maschinenräume, NH₃/R717, CO₂/R744, Prozesse, Wärmerückgewinnung und Automation."],
      ["VRF / VRV", "Variable-Kältemittelstrom-Systeme für Gebäude, Büros, Hotels und Retrofit-Projekte."],
      ["Zweistufige adiabate Kühlung", "Indirekte/adiabate Vorkühlung zur Absenkung der Zulufttemperatur bei sehr geringem Strombedarf."],
      ["Kühlzellen + BITZER", "Kühl- und Tiefkühlzellen mit professioneller Auswahl von Verdampfern, Verflüssigung und Verdichtern."],
      ["Reale adiabate Systeme", "Integration adiabater Geräte in Industrie-, Gewerbe- und Prozessanwendungen."],
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
      ["R744", "CO₂-Kältetechnik", "#0A4F8A"],
      ["R717", "Ammoniak-Kältetechnik", "#9a5b2f"],
      ["HEAT", "Wärmepumpen & Rückgewinnung", "#187b7a"],
      ["ENERGY", "Industrielle Energieeffizienz", "#3b7d44"],
      ["HVAC", "Intelligente Kühlsysteme", "#5c4a8b"],
      ["AI DC", "Rechenzentrumskühlung", "#233b64"],
    ],
    booksButton: "Serie bei Amazon ansehen",
    booksLinkText: "Je nach Ausgabe auf Deutsch, Englisch und Spanisch verfügbar.",
    financeEyebrow: "Finanzierung & Servitisation",
    financeTitle: "Effizienz darf nicht an der Investition scheitern",
    financeText:
      "SISTEA verbindet Engineering, Baseline, erwartete Einsparung, Risiko, Performance und Finanzierungsstruktur. Ziel ist, aus einer technisch sinnvollen Maßnahme ein umsetzbares, messbares und finanzierbares Projekt zu machen.",
    financeModels: [
      ["ESI · Energy Savings Insurance", "Strukturiert das Projekt rund um Einsparung, Vertrag, technische Validierung und Risikoreduzierung. Je nach Programm und Projekt können eine Absicherung der Energieeinsparung und eine Finanzierungsstruktur Bestandteil sein."],
      ["Cooling-as-a-Service", "Der Kunde muss Chiller oder Kälteanlage nicht zwingend kaufen. Stattdessen bezieht er die definierte Kühlleistung oder den vereinbarten Service. Investition, Betrieb, Wartung, Monitoring und Effizienz können in einem langfristigen Modell zusammengeführt werden."],
      ["SISTEA Project-as-a-Service", "Für geeignete Projekte kann SISTEA Analyse, Engineering, Finanzierung, Beschaffung, Installation, Inbetriebnahme, Monitoring und Optimierung als integriertes, leistungsorientiertes Projektmodell strukturieren."],
    ],
    financePoints: [
      "01 · Analyse und Baseline",
      "02 · Engineering, CAPEX/OPEX und Einsparung",
      "03 · Finanzierungs- oder Servicemodell auswählen",
      "04 · Umsetzung, Messung und Optimierung",
    ],
    financeMembership: "SISTEA ist im BASE-/ESI-Umfeld aktiv und Mitglied der SET Alliance. Diese internationalen Ansätze nutzen wir als Referenz, um geeignete Projekte in Zentralamerika professionell zu strukturieren.",
    financeDetailButton: "Finanzierungsmodelle im Detail ansehen",
    financeButton: "Finanzierungsprüfung anfragen",
    financeSourcesLabel: "Internationale Referenzen",
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
    knowledgeEyebrow: "SISTEA Fachwissen",
    knowledgeTitle: "Wissen, das zu Engineering-Entscheidungen führt",
    knowledgeText:
      "SISTEA verbindet technische Dokumentation, Berechnungstools, Energieanalyse und Finanzierungsmodelle. Das Ziel ist nicht, Informationen zu sammeln, sondern daraus eine technisch und wirtschaftlich umsetzbare Projektentscheidung zu machen.",
    knowledgeItems: [
      ["Engineering Tools", "Erste Berechnungen für Projektdaten, Last, Leistung, Einheiten und Vorbemessung.", "Tools öffnen", "#tools"],
      ["Engineering Series", "Dokumentierte Methodik für Kälte, HVAC, Energie, Automation und Rechenzentren.", "Bücher ansehen", "#books"],
      ["Energie & Last", "Stromrechnungen, Baseline, Lastprofil und erste Identifikation von Einsparpotenzial.", "Energie analysieren", "#energy"],
      ["Finanzierung", "ESI, Cooling-as-a-Service und Servicemodelle für technisch tragfähige Projekte.", "Modelle ansehen", "/financing"],
    ],
    procurementEyebrow: "Direktbeschaffung & technisches Sourcing",
    procurementTitle: "Über 20 Jahre Einkaufs- und Großhandelserfahrung in China",
    procurementText:
      "SISTEA verbindet Engineering in Zentralamerika mit Lieferantenbeziehungen, die über mehr als zwei Jahrzehnte in ganz China aufgebaut wurden. Für geeignete Projekte suchen wir direkten Herstellerzugang in den wichtigsten chinesischen Industrieregionen – auch zu europäischen und deutschen Anbietern mit Produktion in China.",
    procurementPromise:
      "Wir suchen nicht einfach den niedrigsten Preis. Wir wählen die technisch und wirtschaftlich richtige Lösung – mit klarer Spezifikation, prüfbarer Dokumentation und wettbewerbsfähigem Hersteller- beziehungsweise Werkspreis, wenn die Projektstruktur dies ermöglicht.",
    procurementStats: [
      ["20+", "Jahre Einkaufs- und Großhandelserfahrung in China"],
      ["Direkt", "Kontakte zu Herstellern und Fabriken"],
      ["Technisch", "Auswahl nach Spezifikation und Performance"],
      ["Integriert", "Beschaffung, Logistik und Projekt durch SISTEA koordiniert"],
    ],
    procurementSteps: [
      ["01", "Spezifikation", "SISTEA definiert Leistung, Materialien, Regelung, Normen, Dokumentation und Servicebedingungen."],
      ["02", "Herstellerauswahl", "Wir vergleichen Fabriken und Lieferanten nach technischer Fähigkeit, Referenzen, Qualität, Lieferzeit und Gesamtkosten."],
      ["03", "Werksangebot", "Wir holen Hersteller- oder Projektpreise ein und prüfen exakt, welche Leistungen und Komponenten enthalten sind."],
      ["04", "Technische Prüfung", "Wir validieren Datenblätter, Zertifikate, Zeichnungen, Komponenten, BMS-Kommunikation und Projektkompatibilität."],
      ["05", "Logistik", "Wir koordinieren Verpackung, Konsolidierung, Transport, Dokumentation und Lieferung entsprechend dem vereinbarten Umfang."],
      ["06", "Integration", "Beschaffung endet für uns bei einem installierten, in Betrieb genommenen und nutzbaren System – nicht bei einer gelieferten Kiste."],
    ],
    procurementCta: "Vergleichen Sie unser Angebot. Testen Sie uns.",
    procurementButton: "Technischen und kaufmännischen Vergleich anfragen",
    procurementIntegrationText: "SISTEA verbindet technische Auslegung, Lieferantenauswahl und Beschaffung zu einem durchgängigen Projektprozess.",
    procurementFlowLabel: "Engineering → Hersteller → Werkspreis → Prüfung → Logistik → Integration",
    knowledgeFlow: ["Wissen", "Berechnung", "Validierung", "Engineering", "Projekt"],
    brandPortfolioLabel: "Offizielles Produktportfolio ↗",
    brandEvaluationText: "YORK · Carrier · Trane werden projektbezogen nach Lastprofil, Effizienz, Hydraulik, Schall, Redundanz, Service und Total Cost of Ownership bewertet.",
    contactEyebrow: "Projektkontakt",
    sourcingEyebrow: "Technische Beschaffung & Direktbezug",
    sourcingTitle: "Seit über 20 Jahren eigener Großhandel und Beschaffung in ganz China",
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
    contactTitle: "Von der Energieanalyse bis zur Installation",
    contactText:
      "Hohe Stromkosten, Lastspitzen, ineffiziente Versorgungssysteme oder ein neues Projekt: SISTEA übernimmt Consulting, Analyse, Planung, Beschaffung, Installation, Inbetriebnahme und Optimierung aus einer Hand.",
    whatsapp: "Über WhatsApp sprechen",
  },
} as const;

type Locale = keyof typeof translations;
const localeOf = (value: string): Locale => (value === "en" || value === "de" ? value : "es");

const salesCopy = {
  es: {
    quickEyebrow: "Elija su punto de entrada",
    quickTitle: "Cuatro caminos. Un solo objetivo: convertir datos en un proyecto ejecutable.",
    quick: [
      ["01", "Análisis energético gratuito", "6–12 meses de facturas eléctricas, baseline y potencial de gestión de carga."],
      ["02", "Engineering Tools", "Primera estimación técnica para estructurar los datos del proyecto."],
      ["03", "Engineering Series", "Metodología documentada, cálculos y experiencia técnica aplicada."],
      ["04", "Financiamiento ESI", "Convertir medidas técnicamente sólidas en proyectos financiables."],
    ],
    energyVisualTitle: "De la factura al perfil de carga",
    energyVisualText: "Una sola factura muestra un momento. 6–12 meses de facturas eléctricas muestran estacionalidad, demanda y comportamiento operativo.",
    billsBadge: "6–12 meses de facturas eléctricas",
    baselineBadge: "Baseline energética",
    ndaBadge: "Confidencial · NDA disponible",
    peakLabel: "Pico",
    optimizedLabel: "Carga optimizada",
    energyViewLabel: "Vista energética de 12 meses",
    energyProfileLabel: "Perfil de carga · demanda · estacionalidad",
    potentialLabel: "potencial*",
    visualFootnote: "*Escenario ilustrativo de preevaluación. El ahorro real requiere validación de ingeniería.",
    appVisualLabel: "Interfaz real de SISTEA Engineering Tools",
    appVisualText: "Instalable en iPhone y Android. Los cálculos estructuran la conversación técnica y pasan a revisión de SISTEA.",
    appBoundaryTitle: "La app calcula. SISTEA valida.",
    appBoundaryText: "Engineering Tools entrega una primera aproximación. La selección definitiva, seguridad, normativa, control, integración y diseño pertenecen al engineering completo del proyecto.",
    appProjectButton: "Pasar a revisión de ingeniería",
    booksProjectButton: "Aplicar esta metodología a mi proyecto",
    knowledgeBridgeTitle: "Del conocimiento documentado al proyecto real",
    knowledgeBridgeText: "Los libros explican la metodología. Engineering Tools la convierte en una primera estimación. SISTEA valida, diseña, financia e implementa el proyecto.",
    bookActions: ["Comprender", "Calcular", "Diseñar", "Optimizar"],
    booksVisualLabel: "Competencia visible, no solo afirmada",
    booksVisualText: "La serie conecta refrigeración, HVAC, energía, automatización y data centers con metodología de ingeniería práctica.",
    finalEyebrow: "Siguiente paso",
    finalTitle: "No empiece comprando equipos. Empiece comprobando dónde está el potencial.",
    finalText: "SISTEA puede comenzar con una revisión energética, una consulta técnica o una especificación de compra. Después definimos ingeniería, inversión y financiamiento.",
    finalEnergy: "Iniciar análisis energético",
    finalProject: "Solicitar revisión de proyecto",
    mobileAnalyze: "Análisis gratuito",
    mobileWhatsApp: "WhatsApp",
  },
  en: {
    quickEyebrow: "Choose your entry point",
    quickTitle: "Four paths. One objective: turn data into an executable project.",
    quick: [
      ["01", "Free energy screening", "6–12 months of electricity bills, baseline and load-management potential."],
      ["02", "Engineering Tools", "An initial technical estimate that structures the project data."],
      ["03", "Engineering Series", "Documented methodology, calculations and applied engineering experience."],
      ["04", "ESI Financing", "Turn technically sound measures into financeable projects."],
    ],
    energyVisualTitle: "From electricity bills to a load profile",
    energyVisualText: "One bill shows a moment. 6–12 months of electricity bills reveal seasonality, demand and operating behavior.",
    billsBadge: "6–12 months of electricity bills",
    baselineBadge: "Energy baseline",
    ndaBadge: "Confidential · NDA available",
    peakLabel: "Peak",
    optimizedLabel: "Optimized load",
    energyViewLabel: "12-month energy view",
    energyProfileLabel: "Load profile · demand · seasonality",
    potentialLabel: "potential*",
    visualFootnote: "*Illustrative screening scenario. Actual savings require engineering validation.",
    appVisualLabel: "Actual SISTEA Engineering Tools interface",
    appVisualText: "Installable on iPhone and Android. Calculations structure the technical discussion and move to SISTEA engineering review.",
    appBoundaryTitle: "The app calculates. SISTEA validates.",
    appBoundaryText: "Engineering Tools provides an initial approximation. Final equipment selection, safety, compliance, controls, integration and design belong to the complete engineering project.",
    appProjectButton: "Move to engineering review",
    booksProjectButton: "Apply this methodology to my project",
    knowledgeBridgeTitle: "From documented knowledge to the real project",
    knowledgeBridgeText: "The books explain the methodology. Engineering Tools turns it into an initial estimate. SISTEA validates, designs, finances and implements the project.",
    bookActions: ["Understand", "Calculate", "Design", "Optimize"],
    booksVisualLabel: "Visible competence, not just a claim",
    booksVisualText: "The series connects refrigeration, HVAC, energy, automation and data centers through practical engineering methodology.",
    finalEyebrow: "Next step",
    finalTitle: "Do not start by buying equipment. Start by proving where the opportunity is.",
    finalText: "SISTEA can begin with an energy screening, technical consultation or procurement specification. Then we define engineering, investment and financing.",
    finalEnergy: "Start energy screening",
    finalProject: "Request project review",
    mobileAnalyze: "Free analysis",
    mobileWhatsApp: "WhatsApp",
  },
  de: {
    quickEyebrow: "Wählen Sie Ihren Einstieg",
    quickTitle: "Vier Wege. Ein Ziel: aus Daten ein umsetzbares Projekt machen.",
    quick: [
      ["01", "Kostenlose Energie-Erstprüfung", "6–12 Monate Stromrechnungen, Baseline und Lastmanagement-Potenzial."],
      ["02", "Engineering Tools", "Technische Vorberechnung zur strukturierten Erfassung der Projektdaten."],
      ["03", "Engineering Series", "Dokumentierte Methodik, Berechnungen und angewandte Engineering-Erfahrung."],
      ["04", "ESI-Finanzierung", "Technisch belastbare Maßnahmen in finanzierbare Projekte überführen."],
    ],
    energyVisualTitle: "Von der Stromrechnung zum Lastprofil",
    energyVisualText: "Eine Stromrechnung zeigt einen Moment. 6–12 Monate Stromrechnungen zeigen Saisonalität, Leistungsspitzen und Betriebsverhalten.",
    billsBadge: "6–12 Monate Stromrechnungen",
    baselineBadge: "Energetische Baseline",
    ndaBadge: "Vertraulich · NDA möglich",
    peakLabel: "Lastspitze",
    optimizedLabel: "Optimierte Last",
    energyViewLabel: "12-Monats-Energieansicht",
    energyProfileLabel: "Lastprofil · Leistung · Saisonalität",
    potentialLabel: "Potenzial*",
    visualFootnote: "*Illustratives Erstprüfungsszenario. Tatsächliche Einsparungen erfordern eine technische Validierung.",
    appVisualLabel: "Echte Oberfläche der SISTEA Engineering Tools",
    appVisualText: "Installierbar auf iPhone und Android. Die Berechnungen strukturieren das Projekt und führen anschließend zur technischen Prüfung durch SISTEA.",
    appBoundaryTitle: "Die App rechnet. SISTEA validiert.",
    appBoundaryText: "Engineering Tools liefert eine erste technische Annäherung. Endgültige Geräteauswahl, Sicherheit, Normen, Regelung, Integration und Auslegung gehören zum vollständigen Engineering-Projekt.",
    appProjectButton: "Zur Engineering-Prüfung",
    booksProjectButton: "Diese Methodik auf mein Projekt anwenden",
    knowledgeBridgeTitle: "Vom dokumentierten Wissen zum realen Projekt",
    knowledgeBridgeText: "Die Bücher erklären die Methodik. Engineering Tools macht daraus eine erste Abschätzung. SISTEA validiert, plant, finanziert und realisiert das Projekt.",
    bookActions: ["Verstehen", "Berechnen", "Planen", "Optimieren"],
    booksVisualLabel: "Kompetenz sichtbar belegen",
    booksVisualText: "Die Reihe verbindet Kälte, HVAC, Energie, Automation und Data Center mit praxisorientierter Engineering-Methodik.",
    finalEyebrow: "Nächster Schritt",
    finalTitle: "Nicht mit dem Gerätekauf beginnen. Zuerst prüfen, wo das Potenzial liegt.",
    finalText: "SISTEA kann mit einer Energie-Erstprüfung, einer technischen Anfrage oder einer Beschaffungsspezifikation starten. Danach definieren wir Engineering, Investition und Finanzierung.",
    finalEnergy: "Energieanalyse starten",
    finalProject: "Projekt prüfen lassen",
    mobileAnalyze: "Kostenlose Analyse",
    mobileWhatsApp: "WhatsApp",
  },
} as const;

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

function LoadProfileVisual({
  peakLabel, optimizedLabel, viewLabel, profileLabel, potentialLabel, footnote,
}: {
  peakLabel: string; optimizedLabel: string; viewLabel: string; profileLabel: string; potentialLabel: string; footnote: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#B3D1E4] bg-gradient-to-br from-[#174F73] via-[#285D7C] to-[#3E728F] p-6 text-white shadow-[0_20px_55px_rgba(48,75,93,.18)] sm:p-8">
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="relative">
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="text-xs font-black uppercase tracking-[.2em] text-cyan-200">{viewLabel}</div>
            <div className="mt-2 text-2xl font-black">{profileLabel}</div>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur">
            <div className="text-2xl font-black text-cyan-200">~40%</div>
            <div className="text-[9px] font-black uppercase tracking-[.16em] text-white/65">{potentialLabel}</div>
          </div>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/15 bg-[#143F5B]/55 p-4">
          <svg viewBox="0 0 720 300" className="h-auto w-full" role="img" aria-label="Illustrative load profile">
            <defs>
              <linearGradient id="loadFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5ed7f1" stopOpacity=".35" />
                <stop offset="100%" stopColor="#5ed7f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[50,100,150,200,250].map((y) => <line key={y} x1="38" y1={y} x2="690" y2={y} stroke="rgba(255,255,255,.12)" strokeWidth="1" />)}
            {[80,132,184,236,288,340,392,444,496,548,600,652].map((x,i) => <line key={x} x1={x} y1="35" x2={x} y2="260" stroke="rgba(255,255,255,.07)" strokeWidth="1" />)}
            <path d="M40 236 C78 225 92 210 118 205 C155 198 165 168 205 171 C244 174 257 125 300 141 C338 155 350 111 390 121 C430 131 435 82 479 102 C521 121 539 64 574 90 C610 116 632 78 684 112 L684 260 L40 260 Z" fill="url(#loadFill)" />
            <path d="M40 236 C78 225 92 210 118 205 C155 198 165 168 205 171 C244 174 257 125 300 141 C338 155 350 111 390 121 C430 131 435 82 479 102 C521 121 539 64 574 90 C610 116 632 78 684 112" fill="none" stroke="#6de1f5" strokeWidth="6" strokeLinecap="round" />
            <path d="M40 235 C92 226 120 213 162 207 C210 200 251 183 296 184 C340 185 379 163 420 166 C463 169 510 149 551 153 C596 158 636 143 684 149" fill="none" stroke="#90e4b8" strokeWidth="5" strokeLinecap="round" strokeDasharray="12 10" />
            <circle cx="574" cy="90" r="9" fill="#ffffff" stroke="#6de1f5" strokeWidth="5" />
            <line x1="574" y1="90" x2="574" y2="45" stroke="rgba(255,255,255,.55)" strokeDasharray="5 5" />
            <text x="586" y="55" fill="#fff" fontSize="18" fontWeight="800">{peakLabel}</text>
          </svg>
          <div className="mt-1 flex flex-wrap items-center gap-5 text-xs font-bold text-white/75">
            <span className="inline-flex items-center gap-2"><span className="h-1 w-7 rounded-full bg-cyan-300" />Baseline</span>
            <span className="inline-flex items-center gap-2"><span className="h-1 w-7 rounded-full bg-emerald-300" />{optimizedLabel}</span>
          </div>
        </div>
        <p className="mt-4 text-xs leading-5 text-white/60">{footnote}</p>
      </div>
    </div>
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
    <p className={`text-xs font-black uppercase tracking-[.22em] ${light ? "text-[#188FC1]" : "text-[#117FB5]"}`}>
      {children}
    </p>
  );
}

function BookCard({ code, title, color }: { code: string; title: string; color: string }) {
  return (
    <div className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-[#C0D9E9] bg-[#E7F1F9] p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-2" style={{ backgroundColor: color }} />
      <div className="absolute -right-8 top-10 h-28 w-28 rounded-full opacity-10 blur-2xl" style={{ backgroundColor: color }} />
      <div className="relative flex h-full flex-col">
        <span className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">SISTEA Engineering Series</span>
        <div className="mt-8 text-3xl font-black" style={{ color }}>{code}</div>
        <h3 className="mt-3 text-lg font-black leading-tight text-[#183F5B]">{title}</h3>
        <div className="mt-auto pt-8 text-xs uppercase tracking-[.16em] text-slate-400">Planning · Design · Operation</div>
      </div>
    </div>
  );
}


const visualSolutionImages = [
  "/images/solutions/york-yvaa-official.jpg",
  "/images/solutions/industrial-refrigeration-plant.webp",
  "/images/solutions/vrf-outdoor-unit.webp",
  "/images/solutions/two-stage-adiabatic-system-diagram.webp",
  "/images/solutions/bitzer-cold-room-condensing-unit.webp",
  "/images/solutions/adiabatic-cooling-installation.webp",
] as const;

const manufacturerShowcase = [
  {
    name: "YORK",
    logo: "/images/manufacturers/main/york-logo.jpg",
    products: [
      {
        kind: "air",
        brochure: "/brochures/chillers/york-air-cooled-chillers.pdf",
      },
      {
        kind: "water",
        brochure: "/brochures/chillers/york-water-cooled-chillers.pdf",
      },
    ],
  },
  {
    name: "Carrier",
    logo: "/images/manufacturers/main/carrier-logo.png",
    products: [
      {
        kind: "air",
        brochure: "/brochures/chillers/carrier-air-cooled-chillers-30XF.pdf",
      },
      {
        kind: "water",
        brochure: "/brochures/chillers/carrier-water-cooled-chillers-30XW-V.pdf",
      },
    ],
  },
  {
    name: "Trane",
    logo: "/images/manufacturers/main/trane-logo.png",
    products: [
      {
        kind: "air",
        brochure: "/brochures/chillers/trane-air-cooled-chillers-RTAG.pdf",
      },
    ],
  },
  {
    name: "TICA",
    logo: "/images/manufacturers/main/TICA.png",
    products: [
      {
        kind: "air",
        brochure: "/brochures/chillers/tica-air-cooled-chillers.pdf",
      },
      {
        kind: "water",
        brochure: "/brochures/chillers/tica-water-cooled-chillers.pdf",
      },
    ],
  },
] as const;


const relaxedCopy = {
  es: {
    introEyebrow: "Ingeniería alemana de principio a fin",
    introTitle: "Consultoría, diseño e instalación como un solo proceso.",
    introText: "Nuestro trabajo comienza con los datos y termina con un sistema funcionando. La tecnología se selecciona después de entender el consumo, el proceso, el riesgo técnico y la economía del proyecto.",
    processEyebrow: "Cómo trabaja SISTEA",
    processTitle: "Del análisis a la optimización, sin separar responsabilidades.",
    processText: "SISTEA acompaña el proyecto completo con una secuencia clara y verificable.",
    processSteps: [
      ["01", "Consultoría", "Definir objetivos, restricciones, datos disponibles y alcance técnico-económico."],
      ["02", "Análisis", "Consumo, demanda, perfil de carga, proceso, capacidad instalada y oportunidades de ahorro."],
      ["03", "Planificación y diseño", "Cálculos, especificaciones, CAPEX/OPEX, selección tecnológica, control y documentación."],
      ["04", "Ahorro energético", "Reducir consumo y picos antes de dimensionar nueva capacidad o comprar equipos."],
      ["05", "Financiamiento", "Estructurar medidas viables con ESI, servitización u otros modelos cuando corresponda."],
      ["06", "Instalación y puesta en marcha", "Implementación, integración, pruebas, commissioning y entrega técnica."],
      ["07", "Optimización", "Monitoreo, ajustes y mejora continua del rendimiento energético y operativo."],
    ],
    solutionCta: "Hablar sobre esta solución",
    solutionsApplications: "Aplicaciones: cámaras frigoríficas y de congelación · unidades BITZER · mataderos · cervecerías · alimentos y bebidas · logística refrigerada · refrigeración de proceso.",
    manufacturerEyebrow: "Chillers · selección técnica por proyecto",
    manufacturerTitle: "YORK, Carrier, Trane y TICA: documentación técnica local, sin desviar al visitante a páginas de proveedores.",
    manufacturerText: "SISTEA compara soluciones según carga real, eficiencia, hidráulica, nivel sonoro, redundancia, refrigerante, control y costo total de propiedad. Las fichas siguientes son resúmenes técnicos alojados localmente en SISTEA.",
    brochureButton: "Ver brochure técnica",
    airCooledLabel: "Chiller enfriado por aire",
    waterCooledLabel: "Chiller enfriado por agua",
    manufacturerDisclaimer: "La presentación de marcas sirve para la selección técnica del proyecto y no implica una relación de exclusividad con el fabricante.",
    energyLead: "Primero hacemos visibles el consumo y los picos de demanda. Después diseñamos la medida correcta.",
    financeLead: "La ingeniería y el financiamiento deben formar parte de la misma decisión.",
    toolsLead: "Una primera estimación digital, seguida por validación técnica de SISTEA.",
    booksIntro: "Cada edición se muestra individualmente. La portada y el botón llevan directamente a la página exacta del libro en Amazon.",
    amazonDirect: "Abrir este libro en Amazon",
    amazonAll: "Ver todos los libros del autor",
    formatKindle: "Kindle eBook",
    sourcingLead: "Especificación técnica, selección de fabricante y compra directa como un solo proceso.",
    experienceTitle: "Más de 40 años de experiencia aplicada a decisiones de ingeniería.",
    experienceText: "SISTEA combina experiencia internacional, ingeniería europea y ejecución adaptada a las condiciones técnicas, climáticas y económicas de Centroamérica.",
    contactLead: "Cuéntanos el problema. Nosotros comenzamos por los datos.",
  },
  en: {
    introEyebrow: "German engineering from start to finish",
    introTitle: "Consulting, design and installation as one integrated process.",
    introText: "Our work starts with data and ends with an operating system. Technology is selected only after understanding consumption, process requirements, technical risk and project economics.",
    processEyebrow: "How SISTEA works",
    processTitle: "From analysis to optimization without splitting responsibility.",
    processText: "SISTEA supports the complete project through a clear and verifiable engineering sequence.",
    processSteps: [
      ["01", "Consulting", "Define objectives, constraints, available data and the technical-economic scope."],
      ["02", "Analysis", "Consumption, demand, load profile, process, installed capacity and savings opportunities."],
      ["03", "Planning and design", "Calculations, specifications, CAPEX/OPEX, technology selection, controls and documentation."],
      ["04", "Energy savings", "Reduce consumption and peaks before sizing new capacity or purchasing equipment."],
      ["05", "Financing", "Structure viable measures with ESI, servitization or other suitable models."],
      ["06", "Installation and commissioning", "Implementation, integration, testing, commissioning and technical handover."],
      ["07", "Optimization", "Monitoring, fine-tuning and continuous improvement of energy and operating performance."],
    ],
    solutionCta: "Discuss this solution",
    solutionsApplications: "Applications: cold and freezer rooms · BITZER condensing units · slaughterhouses · breweries · food and beverage · refrigerated logistics · process cooling.",
    manufacturerEyebrow: "Chillers · project-specific technical selection",
    manufacturerTitle: "YORK, Carrier, Trane and TICA: local technical documentation without sending visitors to supplier websites.",
    manufacturerText: "SISTEA compares solutions by real load, efficiency, hydraulics, sound, redundancy, refrigerant, controls and total cost of ownership. The following sheets are technical summaries hosted locally by SISTEA.",
    brochureButton: "View technical brochure",
    airCooledLabel: "Air-cooled chiller",
    waterCooledLabel: "Water-cooled chiller",
    manufacturerDisclaimer: "Brand presentation supports technical project selection and does not imply an exclusive manufacturer relationship.",
    energyLead: "First make consumption and demand peaks visible. Then design the right measure.",
    financeLead: "Engineering and financing should be part of the same decision.",
    toolsLead: "A digital first estimate followed by SISTEA engineering validation.",
    booksIntro: "Every edition is shown individually. The cover and button lead directly to that exact book on Amazon.",
    amazonDirect: "Open this book on Amazon",
    amazonAll: "View all author books",
    formatKindle: "Kindle eBook",
    sourcingLead: "Technical specification, manufacturer selection, and direct procurement as one process.",
    experienceTitle: "More than 40 years of experience applied to engineering decisions.",
    experienceText: "SISTEA combines international experience, European engineering, and execution adapted to the technical, climatic, and economic conditions of Central America.",
    contactLead: "Tell us the problem. We start with the data.",
  },
  de: {
    introEyebrow: "Deutsches Engineering von Anfang bis Ende",
    introTitle: "Consulting, Planung und Installation als durchgängiger Prozess.",
    introText: "Unsere Arbeit beginnt mit den Daten und endet mit einem funktionierenden System. Die Technologie wird erst ausgewählt, nachdem Verbrauch, Prozessanforderungen, technisches Risiko und Wirtschaftlichkeit verstanden sind.",
    processEyebrow: "So arbeitet SISTEA",
    processTitle: "Von der Analyse bis zur Optimierung – ohne getrennte Verantwortlichkeiten.",
    processText: "SISTEA begleitet das vollständige Projekt in einer klaren und nachvollziehbaren Engineering-Abfolge.",
    processSteps: [
      ["01", "Consulting", "Ziele, Randbedingungen, vorhandene Daten sowie den technischen und wirtschaftlichen Projektumfang definieren."],
      ["02", "Analyse", "Verbrauch, Leistung, Lastprofil, Prozess, installierte Kapazität und Einsparpotenziale untersuchen."],
      ["03", "Planung und Auslegung", "Berechnungen, Spezifikationen, CAPEX/OPEX, Technologieauswahl, Regelung und Dokumentation."],
      ["04", "Energieeinsparung", "Verbrauch und Lastspitzen reduzieren, bevor neue Kapazität dimensioniert oder Technik gekauft wird."],
      ["05", "Finanzierung", "Geeignete Maßnahmen bei Bedarf mit ESI, Servitisation oder anderen Modellen umsetzbar strukturieren."],
      ["06", "Installation und Inbetriebnahme", "Umsetzung, Integration, Prüfungen, Commissioning und technische Übergabe."],
      ["07", "Optimierung", "Monitoring, Nachregelung und kontinuierliche Verbesserung der energetischen und betrieblichen Performance."],
    ],
    solutionCta: "Über diese Lösung sprechen",
    solutionsApplications: "Anwendungen: Kühl- und Tiefkühlzellen · BITZER-Aggregate · Schlachthöfe · Brauereien · Lebensmittel & Getränke · Kühllogistik · Prozesskälte.",
    manufacturerEyebrow: "Chiller · projektbezogene technische Auswahl",
    manufacturerTitle: "YORK, Carrier, Trane und TICA: technische Unterlagen direkt bei SISTEA – ohne Weiterleitung zu Lieferantenseiten.",
    manufacturerText: "SISTEA vergleicht Lösungen nach realer Last, Effizienz, Hydraulik, Schall, Redundanz, Kältemittel, Regelung und Total Cost of Ownership. Die folgenden Unterlagen sind technische Kurzfassungen und werden lokal auf der SISTEA-Webseite bereitgestellt.",
    brochureButton: "Technische Broschüre ansehen",
    airCooledLabel: "Luftgekühlter Chiller",
    waterCooledLabel: "Wassergekühlter Chiller",
    manufacturerDisclaimer: "Die Darstellung der Marken dient der technischen Projektauswahl und stellt keine exklusive Herstellerpartnerschaft dar.",
    energyLead: "Zuerst Verbrauch und Lastspitzen selbst sichtbar machen. Danach die richtige Maßnahme planen.",
    financeLead: "Engineering und Finanzierung gehören in dieselbe Projektentscheidung.",
    toolsLead: "Eine digitale Erstabschätzung, anschließend die technische Validierung durch SISTEA.",
    booksIntro: "Jede Ausgabe wird einzeln gezeigt. Cover und Button führen direkt zur exakten Produktseite dieses Buches bei Amazon.",
    amazonDirect: "Dieses Buch direkt bei Amazon öffnen",
    amazonAll: "Alle Bücher des Autors ansehen",
    formatKindle: "Kindle eBook",
    sourcingLead: "Technische Spezifikation, Herstellerauswahl und Direktbeschaffung als durchgängiger Prozess.",
    experienceTitle: "Mehr als 40 Jahre Erfahrung für belastbare Engineering-Entscheidungen.",
    experienceText: "SISTEA verbindet internationale Erfahrung, europäisches Engineering und eine Umsetzung, die auf die technischen, klimatischen und wirtschaftlichen Bedingungen Zentralamerikas abgestimmt ist.",
    contactLead: "Sag uns, wo das Problem liegt. Wir beginnen mit den Daten.",
  },
} as const;

const bookEditions = [
  {
    topic: "CO₂ / R744",
    language: "Deutsch",
    title: "Praxisleitfaden CO₂-Kältetechnik: Von klassischen Kältemitteln zu R744 – Planung, Inbetriebnahme, Wartung und Fehlersuche",
    format: "Kindle eBook",
    cover: "/images/books/co2-de.webp",
    href: "https://www.amazon.de/dp/B0HC61VNPS",
  },
  {
    topic: "CO₂ / R744",
    language: "American English",
    title: "Practical Guide to CO₂ Refrigeration Technology: From Conventional Refrigerants to R744 – System Design, Commissioning, Maintenance, Energy Optimization, and Troubleshooting",
    format: "Kindle eBook",
    cover: "/images/books/co2-en.webp",
    href: "https://www.amazon.com/dp/B0HCBCSJ2G",
  },
  {
    topic: "CO₂ / R744",
    language: "Español",
    title: "Guía práctica de la refrigeración con CO₂: Del refrigerante convencional al R744 – diseño de sistemas, puesta en marcha, mantenimiento y diagnóstico de fallas",
    format: "Kindle eBook",
    cover: "/images/books/co2-es.webp",
    href: "https://www.amazon.com/dp/B0HC8HM1HM",
  },
  {
    topic: "NH₃ / R717",
    language: "Deutsch",
    title: "Industriekälte mit Ammoniak (R717): Projektleitfaden für Planung, Auslegung, Inbetriebnahme und energetische Optimierung",
    format: "Kindle eBook",
    cover: "/images/books/r717-de.webp",
    href: "https://www.amazon.de/dp/B0HCNBF9ZJ",
  },
  {
    topic: "NH₃ / R717",
    language: "American English",
    title: "Industrial Ammonia Refrigeration (R717): A Practical Guide to Planning, Design, Commissioning, Safety, and Energy Optimization",
    format: "Kindle eBook",
    cover: "/images/books/r717-en.webp",
    href: "https://www.amazon.com/dp/B0HCSRZ1DN",
  },
  {
    topic: "Industrial Heat Pumps",
    language: "Deutsch",
    title: "Industriewärmepumpen und Wärmerückgewinnung: Praxisleitfaden für Planung, Auslegung, Systemintegration und energieeffizienten Betrieb",
    format: "Kindle eBook",
    cover: "/images/books/heatpump-de.webp",
    href: "https://www.amazon.de/dp/B0HCRT9WC9",
  },
  {
    topic: "Industrial Heat Pumps",
    language: "American English",
    title: "Practical Guide to Industrial Heat Pumps and Heat Recovery: Planning, Design, Commissioning, Operation, and Energy Optimization",
    format: "Kindle eBook",
    cover: "/images/books/heatpump-en.webp",
    href: "https://www.amazon.com/dp/B0HCYS2G31",
  },
  {
    topic: "Industrial Heat Pumps",
    language: "Español",
    title: "Guía práctica de bombas de calor industriales y recuperación de calor: Planificación, diseño, puesta en marcha, operación y optimización energética",
    format: "Kindle eBook",
    cover: "/images/books/heatpump-es.webp",
    href: "https://www.amazon.com/dp/B0HCYWDC33",
  },
  {
    topic: "Industrial Energy Efficiency",
    language: "Deutsch",
    title: "Praxisleitfaden für industrielle Energieeffizienz: Technische Optimierung von Produktion, Versorgungssystemen und Betriebsabläufen",
    format: "Kindle eBook",
    cover: "/images/books/energy-de.webp",
    href: "https://www.amazon.de/dp/B0H2RCLNCX",
  },
  {
    topic: "Industrial Energy Efficiency",
    language: "American English",
    title: "Practical Guide to Industrial Energy Efficiency: Technical Optimization of Production, Supply Systems, and Operations",
    format: "Kindle eBook",
    cover: "/images/books/energy-en.webp",
    href: "https://www.amazon.com/dp/B0HCX5TFCL",
  },
  {
    topic: "Industrial Energy Efficiency",
    language: "Español",
    title: "Guía práctica de eficiencia energética industrial: Optimización técnica de la producción, los sistemas de suministro y las operaciones",
    format: "Kindle eBook",
    cover: "/images/books/energy-es.webp",
    href: "https://www.amazon.com/dp/B0HCXMQD5",
  },
] as const;

function PrimaryButton({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-[#0E78B7] px-6 py-3.5 text-center font-black text-white shadow-sm transition hover:bg-[#0E6BA8]"
    >
      {children}<ArrowIcon />
    </a>
  );
}

function SectionDivider() {
  return <div className="mx-auto h-px w-20 bg-[#A7C9DE]" />;
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = localeOf(locale);
  const t = translations[currentLocale];
  const sales = salesCopy[currentLocale];
  const r = relaxedCopy[currentLocale];

  return (
    <main className="overflow-hidden bg-[#F4F9FD] text-[#183F5B]">
      <section className="relative min-h-[720px] overflow-hidden bg-[#123F5D] text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero/san-salvador-skyline.jpg"
          className="absolute inset-0 h-full w-full object-cover [filter:brightness(.72)_contrast(.92)_saturate(.9)]"
        >
          <source src="/videos/sistea-hero-web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#123F5D]/45 via-[#123F5D]/58 to-[#123F5D]/82" />
        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-4xl flex-col justify-center px-6 py-24 text-center">
          <Eyebrow light>{t.heroEyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-black tracking-[-.035em] sm:text-5xl lg:text-6xl lg:leading-[1.05]">{t.heroTitle}</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/85">{t.heroText}</p>
          <div className="mx-auto mt-9 flex w-full max-w-sm flex-col gap-3">
            <PrimaryButton href="#contact">{t.heroPrimary}</PrimaryButton>
            <a href={APP_URL} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/45 bg-white/10 px-6 py-3.5 font-black text-white backdrop-blur transition hover:bg-white/20">
              {t.heroSecondary}<ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{r.introEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{r.introTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-[#426B86]">{r.introText}</p>
        </div>
      </section>

      <section id="consulting" className="scroll-mt-24 bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{r.processEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{r.processTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-[#426B86]">{r.processText}</p>
        </div>
        <div className="mx-auto mt-14 max-w-3xl">
          {r.processSteps.map(([number, title, body], index) => (
            <article key={number} className="relative py-8 text-center">
              {index > 0 && <SectionDivider />}
              <div className={index > 0 ? "pt-8" : ""}>
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#DDEFFA] text-sm font-black text-[#0E78B7]">{number}</div>
                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-8 text-[#426B86]">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="energy" className="scroll-mt-24 bg-[#E4F0F8] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>{t.energyEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.energyTitle}</h2>
          <p className="mt-5 text-xl font-bold leading-8 text-[#345F7A]">{r.energyLead}</p>
          <p className="mt-6 text-lg leading-8 text-[#426B86]">{t.energyText}</p>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <LoadProfileVisual
            peakLabel={sales.peakLabel}
            optimizedLabel={sales.optimizedLabel}
            viewLabel={sales.energyViewLabel}
            profileLabel={sales.energyProfileLabel}
            potentialLabel={sales.potentialLabel}
            footnote={sales.visualFootnote}
          />
        </div>
        <div className="mx-auto mt-14 max-w-5xl rounded-3xl border border-[#B6D1E3] bg-white p-6 shadow-sm sm:p-9">
          <h3 className="text-center text-2xl font-black sm:text-3xl">{t.reviewTitle}</h3>
          <p className="mx-auto mt-5 max-w-3xl text-center leading-8 text-[#426B86]">{t.reviewText}</p>
          <p className="mx-auto mt-4 max-w-3xl rounded-2xl bg-[#EAF4FB] p-4 text-center text-sm leading-6 text-[#41647B]">{t.reviewPrivacy}</p>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <p className="mb-5 text-center text-sm font-bold text-[#41647B]">
            {currentLocale === "de" ? "Voreinstellung El Salvador: 0,160 USD/kWh · frei anpassbar" : currentLocale === "en" ? "El Salvador default: USD 0.160/kWh · fully adjustable" : "Valor inicial El Salvador: USD 0.160/kWh · totalmente ajustable"}
          </p>
          <EnergyCostCalculator locale={currentLocale} />
        </div>
      </section>

      <section id="esi" className="scroll-mt-24 bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{t.financeEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.financeTitle}</h2>
          <p className="mt-5 text-xl font-bold leading-8 text-[#345F7A]">{r.financeLead}</p>
          <p className="mt-6 text-lg leading-8 text-[#426B86]">{t.financeText}</p>
        </div>
        <div className="mx-auto mt-14 max-w-3xl space-y-12">
          {t.financeModels.map(([title, body], index) => (
            <article key={title} className="text-center">
              <div className="mx-auto mb-5 grid h-10 w-10 place-items-center rounded-full bg-[#DDEFFA] text-sm font-black text-[#0E78B7]">0{index + 1}</div>
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-8 text-[#426B86]">{body}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-sm">
          <Link href={`/${currentLocale}/financing`} className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-[#0E78B7] px-6 py-3.5 text-center font-black text-white shadow-sm transition hover:bg-[#0E6BA8]">{t.financeDetailButton}<ArrowIcon /></Link>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-24 bg-[#E8F2FA] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>{t.refrigerationEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.refrigerationTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-[#426B86]">{t.refrigerationText}</p>
          <p className="mt-5 rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-[#41647B]">{r.solutionsApplications}</p>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-7 sm:grid-cols-2">
          {t.visualSolutions.map(([title, body], index) => (
            <article key={title} className="overflow-hidden rounded-3xl border border-[#C5DCEB] bg-white shadow-[0_14px_38px_rgba(48,75,93,.08)]">
              <div className="grid h-[250px] place-items-center bg-[#F8FBFD] p-4 sm:h-[280px]">
                <img
                  src={visualSolutionImages[index]}
                  alt={title}
                  loading="lazy"
                  className="max-h-full w-full object-contain"
                />
              </div>
              <div className="p-7 text-center">
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-[#426B86]">{body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-sm">
          <PrimaryButton href="#contact">{r.solutionCta}</PrimaryButton>
        </div>
      </section>

      <section id="manufacturers" className="scroll-mt-24 bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>{r.manufacturerEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{r.manufacturerTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-[#426B86]">{r.manufacturerText}</p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <img
            src="/images/manufacturers/chiller-manufacturers-overview.webp"
            alt="YORK Carrier Trane TICA chiller product overview"
            loading="lazy"
            className="mx-auto max-h-[900px] w-full rounded-3xl border border-[#C2D9E8] bg-white object-contain p-3 shadow-[0_18px_48px_rgba(48,75,93,.10)]"
          />
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-10">
          {manufacturerShowcase.map((manufacturer) => (
            <article key={manufacturer.name} className="rounded-3xl border border-[#C2D9E8] bg-[#F7FBFE] p-6 shadow-sm sm:p-8">
              <div className="flex min-h-20 items-center justify-center border-b border-[#D9E8F1] pb-6">
                <img
                  src={manufacturer.logo}
                  alt={`${manufacturer.name} logo`}
                  loading="lazy"
                  className="max-h-14 max-w-[210px] object-contain"
                />
              </div>

              <div className={`mt-7 grid gap-5 ${manufacturer.products.length > 1 ? "md:grid-cols-2" : "mx-auto max-w-xl"}`}>
                {manufacturer.products.map((product) => (
                  <div key={product.brochure} className="rounded-2xl border border-[#D4E4EE] bg-white p-5 text-center">
                    <h3 className="text-xl font-black">{product.kind === "air" ? r.airCooledLabel : r.waterCooledLabel}</h3>
                    <a
                      href={product.brochure}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0E78B7] px-5 py-3 font-black text-white transition hover:bg-[#0E6BA8]"
                    >
                      {r.brochureButton}<ArrowIcon />
                    </a>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-5 text-[#5D7B8F]">{r.manufacturerDisclaimer}</p>
      </section>

      <section id="tools" className="scroll-mt-24 bg-[#E8F2FA] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <img src="/images/marketing/engineering-tools-desktop.webp" alt="SISTEA Engineering Tools" loading="lazy" className="mx-auto w-full rounded-3xl border border-[#BED8E8] bg-white object-contain shadow-[0_20px_60px_rgba(48,75,93,.10)]" />
          <div className="mx-auto mt-12 max-w-3xl">
            <Eyebrow>{t.toolsEyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.toolsTitle}</h2>
            <p className="mt-5 text-xl font-bold leading-8 text-[#345F7A]">{r.toolsLead}</p>
            <p className="mt-6 text-lg leading-8 text-[#426B86]">{t.toolsText}</p>
            <div className="mx-auto mt-8 max-w-sm">
              <PrimaryButton href={APP_URL} external>{t.toolsButton}</PrimaryButton>
            </div>
            <p className="mt-4 text-sm text-[#54748A]">{t.toolsNote}</p>
          </div>
        </div>
      </section>

      <section id="books" className="scroll-mt-24 bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{t.booksEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.booksTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-[#426B86]">{t.booksText}</p>
          <p className="mt-5 rounded-2xl bg-[#EAF4FB] p-5 leading-7 text-[#3C6078]">{r.booksIntro}</p>
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          {bookEditions.map((book, index) => (
            <article key={`${book.href}-${book.language}`} className="py-16 text-center first:pt-0 last:pb-0">
              {index > 0 && <SectionDivider />}
              <div className={index > 0 ? "pt-16" : ""}>
                <a href={book.href} target="_blank" rel="noreferrer" aria-label={`${book.title} – Amazon`}>
                  <img
                    src={book.cover}
                    alt={book.title}
                    loading="lazy"
                    className="mx-auto max-h-[560px] w-auto max-w-full rounded-xl border border-[#C3DBEA] bg-white object-contain shadow-[0_24px_60px_rgba(48,75,93,.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(48,75,93,.22)]"
                  />
                </a>
                <div className="mt-8 text-xs font-black uppercase tracking-[.2em] text-[#0E78B7]">{book.topic}</div>
                <div className="mt-3 text-sm font-bold text-[#506F85]">{book.language} · {book.format}</div>
                <h3 className="mx-auto mt-4 max-w-2xl text-2xl font-black leading-tight sm:text-3xl">{book.title}</h3>
                <div className="mx-auto mt-7 max-w-sm">
                  <PrimaryButton href={book.href} external>{r.amazonDirect}</PrimaryButton>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-20 max-w-sm text-center">
          <a href={AMAZON_URL} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#8DB9D4] bg-white px-6 py-3.5 font-black text-[#174F73] transition hover:bg-[#EAF4FB]">
            {r.amazonAll}<ArrowIcon />
          </a>
        </div>
      </section>

      <section className="bg-[#E8F2FA] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{t.procurementEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.procurementTitle}</h2>
          <p className="mt-5 text-xl font-bold leading-8 text-[#345F7A]">{r.sourcingLead}</p>
          <p className="mt-6 text-lg leading-8 text-[#426B86]">{t.procurementText}</p>
          <p className="mt-6 text-lg leading-8 text-[#426B86]">{t.procurementPromise}</p>
          <div className="mx-auto mt-8 max-w-sm">
            <PrimaryButton href="#contact">{t.procurementButton}</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{t.whyEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{r.experienceTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-[#426B86]">{r.experienceText}</p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#E1EEF7] px-6 py-24 pb-32 sm:py-28 sm:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{t.contactEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.contactTitle}</h2>
          <p className="mt-5 text-xl font-bold leading-8 text-[#345F7A]">{r.contactLead}</p>
          <p className="mt-6 text-lg leading-8 text-[#426B86]">{t.contactText}</p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-[#B7D2E4] bg-white p-5 shadow-sm sm:p-8">
          <ContactForm locale={currentLocale} />
        </div>
        <div className="mx-auto mt-8 max-w-sm text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#8DB9D4] bg-white px-6 py-3.5 font-black text-[#174F73] transition hover:bg-[#EAF4FB]">
            {t.whatsapp}<ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="bg-[#163F5B] px-6 py-10 text-center text-sm text-white/70">
        <p>SISTEA S.A. de C.V. · www.sisteasv.com · info@sisteasv.com</p>
        <a href={ADMIN_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs font-bold text-white/45 transition hover:text-white/80">SISTEA Admin</a>
      </footer>
    </main>
  );
}
