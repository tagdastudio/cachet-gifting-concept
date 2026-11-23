import type { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { faqGroups } from "@/content/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Questions",
  description:
    "Lead times, contents, allergies, delivery across Hyderabad and India, samples, minimums and deposits — the practical answers.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        crumb="Questions"
        title="The things people ask before they order."
        intro="If the answer you need is not here, message the studio. A person replies, usually within a few hours, with no script."
        meta={["Lead times", "Contents", "Delivery"]}
        index="FAQ"
      />

      <section className="bg-paper py-14 text-ink lg:py-20">
        <div className="gutter page">
          <FaqList groups={faqGroups} />
        </div>
      </section>

      <CtaBand
        title="Still deciding?"
        body="A two-line message is enough to get a real answer: who it is for, when it is needed, roughly what you want to spend."
        primary={{ label: "Start a brief", href: "/atelier" }}
        secondary={{ label: "See the parcels", href: "/parcels" }}
      />
    </>
  );
}
