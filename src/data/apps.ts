export interface AppEntry {
  name: string;
  slug: string;
  description: {
    es: string;
    en: string;
  };
  status: "live" | "soon";
  /** Technologies shown on the portfolio card */
  stack?: string[];
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
    name: "ARC Raiders Database",
    slug: "arc-raiders-database.minim-labs.app",
    description: {
      es: "Simple base de datos para el juego ARC Riders donde puedes visualizar los objetos, sus reciclajes y como se crean. Aparte de misiones y mejores de campamento.",
      en: "A simple database for the game ARC Riders where you can view items, their recycling options, and how they're created. It also includes missions and camp upgrades.",
    },
    status: "live",
  },
  {
    name: "App Three",
    slug: "app3",
    description: {
      es: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      en: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    },
    status: "soon",
  },
];

export function appUrl(slug: string): string {
  return `https://${slug}`;
}
