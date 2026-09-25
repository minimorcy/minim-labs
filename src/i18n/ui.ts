export const languages = {
  es: "ES",
  en: "EN",
} as const;

export const defaultLang = "es";

export const ui = {
  es: {
    "site.description": "Hub de aplicaciones de minim-labs.",
    "hub.title": "Hub de aplicaciones",
    "hub.subtitle": "Punto de entrada a los proyectos alojados bajo subdominios de minim-labs.app.",
    "status.live": "Activo",
    "status.soon": "Próximamente",
  },
  en: {
    "site.description": "minim-labs application hub.",
    "hub.title": "Application hub",
    "hub.subtitle": "Entry point to the projects hosted under minim-labs.app subdomains.",
    "status.live": "Live",
    "status.soon": "Coming soon",
  },
} as const;

export type Lang = keyof typeof ui;
