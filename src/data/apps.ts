export interface AppEntry {
  name: string;
  slug: string;
  description: string;
  status: "live" | "soon";
}

export const apps: AppEntry[] = [
  {
    name: "App One",
    slug: "app1",
    description: "Descripción breve de la aplicación. Sustituye este texto cuando esté lista.",
    status: "soon",
  },
  {
    name: "App Two",
    slug: "app2",
    description: "Descripción breve de la aplicación. Sustituye este texto cuando esté lista.",
    status: "soon",
  },
  {
    name: "App Three",
    slug: "app3",
    description: "Descripción breve de la aplicación. Sustituye este texto cuando esté lista.",
    status: "soon",
  },
];

export const rootDomain = "minim-labs.dev";

export function appUrl(slug: string): string {
  return `https://${slug}.${rootDomain}`;
}
