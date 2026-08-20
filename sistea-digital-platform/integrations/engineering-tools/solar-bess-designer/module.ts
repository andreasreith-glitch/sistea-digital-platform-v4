export type EngineeringToolsLocale = "es" | "en" | "de";

export const solarBessDesignerModule = {
  id: "solar-bess-designer",
  icon: "☀️",
  href: {
    es: "https://sisteasv.com/es/solar-bess-designer",
    en: "https://sisteasv.com/en/solar-bess-designer",
    de: "https://sisteasv.com/de/solar-bess-designer",
  },
  title: {
    es: "Solar Industrial + BESS",
    en: "Industrial Solar + BESS",
    de: "Industrie-PV + BESS",
  },
  description: {
    es: "Área útil, módulos, inversores, strings, PVGIS, peak shaving y respaldo con baterías.",
    en: "Usable area, modules, inverters, strings, PVGIS, peak shaving and battery backup.",
    de: "Nutzfläche, Module, Wechselrichter, Strings, PVGIS, Peak Shaving und Batterie-Backup.",
  },
  badge: {
    es: "Diseño FV",
    en: "PV design",
    de: "PV-Auslegung",
  },
  category: "energy",
  order: 35,
  external: true,
} as const;

export function getSolarBessDesignerModule(locale: EngineeringToolsLocale) {
  return {
    id: solarBessDesignerModule.id,
    icon: solarBessDesignerModule.icon,
    title: solarBessDesignerModule.title[locale],
    description: solarBessDesignerModule.description[locale],
    badge: solarBessDesignerModule.badge[locale],
    href: solarBessDesignerModule.href[locale],
    category: solarBessDesignerModule.category,
    order: solarBessDesignerModule.order,
    external: solarBessDesignerModule.external,
  };
}
