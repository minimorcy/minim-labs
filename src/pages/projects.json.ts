import type { APIRoute } from "astro";
import { apps, appUrl } from "../data/apps";

// Public feed consumed by the portfolio. Generated at build time from src/data/apps.ts.
export const GET: APIRoute = () => {
  const body = {
    version: 1,
    apps: apps.map((app) => ({
      name: app.name,
      slug: app.slug,
      url: appUrl(app.slug),
      description: app.description,
      status: app.status,
      stack: app.stack ?? [],
    })),
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
