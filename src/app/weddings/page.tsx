import type { Metadata } from "next";
import Link from "next/link";
import { BriefForm } from "@/components/forms/BriefForm";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoPlate } from "@/components/ui/PhotoPlate";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Weddings",
  description:
    "Wedding parcels from Cachet: welcome boxes, return gifts and bridal-party boxes, matched to your palette and delivered to the venue in Hyderabad.",
  path: "/weddings",
});

const moments = [
  { number: "01", title: "The welcome box", body: "On the bed before the first guest arrives: something to drink, something to wear, the schedule, and a letter." },
  { number: "02", title: "The return gift", body: "One per family, small enough to carry home. Sweets that are eaten, an object that is kept." },
  { number: "03", title: "The bridal party", body: "For the people standing beside you. Named, labelled and delivered the morning of." },
  { number: "04", title: "The trousseau", body: "Silk, scent, brass. Packed in a single box and sealed with the couple’s initials." },
];

export default function WeddingsPage() {
  return (
    <>
      <PageHero
        crumb="Weddings"
        title="A small box at every place."
        intro="Welcome boxes, return gifts, bridal parties and the trousseau. We work from your palette and your date, and deliver to the venue with names on every box."
        meta={["From 25 boxes", "Palette matched", "Venue delivery"]}
        index="No. 01"
      >
        <a href="#brief" className="btn btn-rose">
          Start a wedding brief
        </a>
        <Link href="/parcels" className="btn btn-outline">
          See the boxes
        </Link>
      </PageHero>

      <PhotoPlate
        src="/media/candlelit-table.jpg"
        alt="A dark table set with candles, glassware and dried branches."
        quote="Set before the first guest arrives."
        margin="Venue delivery, Hyderabad"
        height="h-[clamp(18rem,46vw,36rem)]"
        position="center 52%"
      />

      <section className="bg-paper py-16 text-ink lg:py-24">
        <div className="gutter page">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eye eye-ink">Four boxes</p>
              <h2 className="h2 mt-4 max-w-[18ch]">The wedding is a sequence of small arrivals.</h2>
            </div>
            <p className="max-w-[26rem] text-[0.9rem] leading-relaxed text-ink/55 lg:col-span-4">
              Most couples need two of these, not four. We will say which ones are worth the money and which are not.
            </p>
          </div>

          <div className="mt-10 grid gap-px border border-line-ink bg-line-ink sm:grid-cols-2">
            {moments.map((moment) => (
              <div key={moment.number} className="bg-paper p-6 sm:p-8">
                <p className="label text-rose">{moment.number}</p>
                <h3 className="mt-4 font-display text-[1.5rem] leading-tight">{moment.title}</h3>
                <p className="mt-2 max-w-[34ch] text-[0.88rem] leading-relaxed text-ink/55">{moment.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="brief" className="scroll-mt-24 bg-paper-2 py-16 text-ink lg:py-24">
        <div className="gutter page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eye eye-ink">The brief</p>
            <h2 className="h2 mt-4 max-w-[12ch]">Start with the date.</h2>
            <p className="mt-5 max-w-[26rem] text-[0.92rem] leading-[1.75] text-ink/60">
              We can hold a date for a week without a deposit. After that we need one, because the paper and the wax are
              bought ahead and the week is the thing we are selling.
            </p>
            <p className="mt-5 max-w-[26rem] text-[0.82rem] leading-relaxed text-ink/45">
              Delivery to a venue is included in Hyderabad. Outside the city, we quote the courier and pack for the journey.
            </p>
          </div>
          <div className="lg:col-span-8">
            <BriefForm kind="wedding" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Two boxes, or two hundred."
        body="The smallest wedding order is twenty-five. If you need fewer, the collection is the better route."
        primary={{ label: "See the parcels", href: "/parcels" }}
        secondary={{ label: "Corporate gifting", href: "/corporate" }}
      />
    </>
  );
}
