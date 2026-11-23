import type { Metadata } from "next";
import { BriefForm } from "@/components/forms/BriefForm";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList, type FaqGroup } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoPlate } from "@/components/ui/PhotoPlate";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Corporate gifting",
  description:
    "Corporate parcels from Cachet: new joiners, promotions, festivals and client thank-yous. From ten boxes, one sample on approval, pan-India courier.",
  path: "/corporate",
});

const points = [
  { title: "One sample, in the hand", body: "For runs above twenty-five. Paper and ribbon are approved in person; the sample is credited against the order." },
  { title: "A card that carries the name", body: "Your logo appears once, small, on the card. The box stays ours, which is the reason it gets kept." },
  { title: "A list, checked twice", body: "Names, spellings and addresses are confirmed against your sheet before anything is sealed." },
  { title: "One invoice, one date", body: "A single quote, a single delivery window, and one person answering the phone while it happens." },
];

const faq: FaqGroup[] = [
  {
    title: "Working with us",
    items: [
      {
        q: "What is the smallest corporate order?",
        a: "Ten parcels for The Desk, twenty-five for anything built to your brief. Below that, the collection is a better route.",
      },
      {
        q: "How long does a run take?",
        a: "Two weeks for ten to fifty parcels, three to four for anything larger or fully custom. Festive weeks add a week; we will say so in the quote.",
      },
      {
        q: "Can you ship to individual addresses?",
        a: "Yes. Send a sheet with names, addresses and phone numbers, and we pack and dispatch each parcel separately, with tracking where the courier provides it.",
      },
    ],
  },
];

export default function CorporatePage() {
  return (
    <>
      <PageHero
        crumb="Corporate"
        title="A hundred boxes, packed like one."
        intro="The parcel a new joiner opens on day one, and the one a client keeps on a shelf. Same table, same seal, same person checking the names."
        meta={["From 10 boxes", "Sample on approval", "Pan-India courier"]}
        index="No. 02"
      />

      <section className="bg-paper py-14 text-ink lg:py-20">
        <div className="gutter page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eye eye-ink">The service</p>
            <h2 className="h2 mt-4 max-w-[14ch]">It should not look like a purchase order.</h2>
            <p className="mt-5 max-w-[30rem] text-[0.95rem] leading-[1.75] text-ink/65">
              Most corporate gifting fails in the same place: the box is fine and the moment is missed. We start from the
              moment — the first day, the promotion, the festival — and build backwards.
            </p>

            <dl className="mt-8 border-t border-line-ink">
              {points.map((point) => (
                <div key={point.title} className="border-b border-line-ink py-4">
                  <dt className="font-display text-[1.16rem] leading-tight">{point.title}</dt>
                  <dd className="mt-1.5 max-w-[34rem] text-[0.86rem] leading-relaxed text-ink/55">{point.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div id="brief" className="scroll-mt-24 lg:col-span-7">
            <BriefForm kind="corporate" />
          </div>
        </div>
      </section>

      <PhotoPlate
        src="/media/candlelit-table.jpg"
        alt="A dark table set with candles, glassware and dried branches."
        quote="One card. One seal. Two hundred names."
        caption="Runs are packed in batches of twenty-five, then checked against the list."
        height="h-[clamp(15rem,32vw,26rem)]"
        position="center 55%"
      />

      <section className="bg-paper py-14 text-ink lg:py-20">
        <div className="gutter page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eye eye-ink">Before you ask</p>
            <h2 className="h2 mt-4 max-w-[12ch]">The practical part.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList groups={faq} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Send the date. We will send a plan."
        body="A quantity, a budget per box and the day they need to land is enough to start."
        primary={{ label: "Start a corporate brief", href: "/corporate#brief" }}
        secondary={{ label: "See the parcels", href: "/parcels" }}
      />
    </>
  );
}

