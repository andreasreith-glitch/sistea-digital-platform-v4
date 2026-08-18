export type EngineeringToolsLocale = "es" | "en" | "de";

export const wholesaleRfqModule = {
  id: "wholesale-rfq",
  icon: "📦",
  href: {
    es: "https://sisteasv.com/es/wholesale-rfq",
    en: "https://sisteasv.com/en/wholesale-rfq",
    de: "https://sisteasv.com/de/wholesale-rfq",
  },
  title: {
    es: "Mayorista y Repuestos",
    en: "Wholesale & Spare Parts",
    de: "Großhandel & Ersatzteile",
  },
  description: {
    es: "Equipos HVAC y refrigeración, repuestos, datos técnicos y RFQ estructurada.",
    en: "HVAC and refrigeration equipment, spare parts, technical data and structured RFQs.",
    de: "HVAC- und Kältegeräte, Ersatzteile, technische Daten und strukturierte RFQs.",
  },
  badge: {
    es: "RFQ técnica",
    en: "Technical RFQ",
    de: "Technische RFQ",
  },
  category: "procurement",
  order: 50,
  external: true,
} as const;

export function getWholesaleRfqModule(locale: EngineeringToolsLocale) {
  return {
    id: wholesaleRfqModule.id,
    icon: wholesaleRfqModule.icon,
    title: wholesaleRfqModule.title[locale],
    description: wholesaleRfqModule.description[locale],
    badge: wholesaleRfqModule.badge[locale],
    href: wholesaleRfqModule.href[locale],
    category: wholesaleRfqModule.category,
    order: wholesaleRfqModule.order,
    external: wholesaleRfqModule.external,
  };
}
