export interface AppEntry {
  name: string;
  slug: string;
  description: {
    es: string;
    en: string;
  };
  status: "live" | "soon";
}

export const apps: AppEntry[] = [
  {
    name: "Portfolio",
    slug: "javiermorcillonuevo.com",
    description: {
      es: "Mi portfolio actual mientras trabajo en el nuevo, que ya está en marcha.",
      en: "My current portfolio while I work on the new one, which is already in the works.",
    },
    status: "live",
  },
  {
    name: "App Two",
    slug: "app2",
    description: {
      es: "Descripción breve de la aplicación. Sustituye este texto cuando esté lista.",
      en: "Short app description. Replace this text once it's ready.",
    },
    status: "soon",
  },
  {
    name: "App Three",
    slug: "app3",
    description: {
      es: "Descripción breve de la aplicación. Sustituye este texto cuando esté lista.",
      en: "Short app description. Replace this text once it's ready.",
    },
    status: "soon",
  },
];

export function appUrl(slug: string): string {
  return `https://${slug}`;
}
