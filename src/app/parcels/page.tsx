import type { Metadata } from "next";
import { ParcelIndex } from "@/components/parcels/ParcelIndex";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { parcels } from "@/content/parcels";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "The parcels",
  description:
    "Six parcels from Cachet: weddings, new houses, festivals, offices, hard weeks and anniversaries. Packed by hand in Hyderabad, closed with a wax seal.",
  path: "/parcels",
});

export default function ParcelsPage() {
  return (
    <>
      <PageHero
        crumb="The collection"
        title="Six parcels, and a reason for each."
        intro="Every parcel is built around one moment. Choose one as it is, or have it adjusted — the contents are a starting point, not a rule."
        meta={["From ₹3,400", "Ready in 7–21 days", "India-wide on request"]}
        index="01 — 06"
      />

      <section className="bg-paper py-12 text-ink lg:py-16">
        <ParcelIndex parcels={parcels} />
      </section>

      <CtaBand
        title="Nothing here fits the person?"
        body="That is usually the right instinct. Tell us who it is for and we will build the parcel around them, from the paper up."
        primary={{ label: "Commission a parcel", href: "/atelier" }}
        secondary={{ label: "Ask a question", href: "/faq" }}
      />
    </>
  );
}
