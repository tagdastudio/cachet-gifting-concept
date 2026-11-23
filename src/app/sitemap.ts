import type { MetadataRoute } from "next";
import { parcels } from "@/content/parcels";
import { notes } from "@/content/journal";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/parcels", "/atelier", "/weddings", "/corporate", "/visit", "/journal", "/faq", "/delivery", "/legal/privacy", "/legal/terms"];

  return [
    ...routes.map((route) => ({ url: `${SITE_URL}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...parcels.map((parcel) => ({ url: `${SITE_URL}/parcels/${parcel.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...notes.map((note) => ({ url: `${SITE_URL}/journal/${note.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
