export interface AppEntry {
  name: string;
  slug: string;
  description: {
    es: string;
    en: string;
  };
  /**
   * live: online and finished · building: online but still under construction · soon: not deployed yet
   */
  status: "live" | "building" | "soon";
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
    name: "Metapulse",
    slug: "metapulse.minim-labs.app",
    description: {
      es: "El meta de Pokémon Champions en tiempo real.",
      en: "The Pokémon Champions meta in real time.",
    },
    status: "live",
  },
  {
    name: "CeArt",
    slug: "ceart.minim-labs.app",
    description: {
      es: "Un juego de palabras en el que ganáis cuando vuestras mentes coinciden.",
      en: "A word game where you win when your thoughts match.",
    },
    status: "building",
  },
  {
    name: "ARC Raiders Database",
    slug: "arc-raiders-database.minim-labs.app",
    description: {
      es: "Simple base de datos para el juego ARC Raiders donde puedes visualizar los objetos, sus reciclajes y como se crean. Aparte de misiones y mejores de campamento.",
      en: "A simple database for the game ARC Raiders where you can view items, their recycling options, and how they're created. It also includes missions and camp upgrades.",
    },
    status: "live",
  }
];

export function appUrl(slug: string): string {
  return `https://${slug}`;
}
