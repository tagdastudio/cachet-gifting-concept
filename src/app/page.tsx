import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Catalogue } from "@/components/home/Catalogue";
import { Mantra } from "@/components/home/Mantra";
import { AtelierTeaser } from "@/components/home/AtelierTeaser";
import { Occasions } from "@/components/home/Occasions";
import { JournalTeaser } from "@/components/home/JournalTeaser";
import { VisitBand } from "@/components/home/VisitBand";
import { PhotoPlate } from "@/components/ui/PhotoPlate";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — ${site.tagline}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: "/",
    locale: "en_IN",
    images: [{ url: "/og.jpg", width: 1200, height: 630, type: "image/jpeg" }],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Catalogue />
      <Mantra />
      <PhotoPlate
        src="/media/sealed-letter.jpg"
        alt="A black embossed envelope closed with a wax seal, lit from one side."
        quote="The last thing a gift does is close."
        margin="No. 06 — the keepsake, sealed"
        height="h-[clamp(16rem,38vw,28rem)]"
        position="center 55%"
        filter="brightness(1.9) contrast(1.06) saturate(0.92)"
      />
      <AtelierTeaser />
      <Occasions />
      <JournalTeaser />
      <VisitBand />
    </>
  );
}
