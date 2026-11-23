import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoPlate } from "@/components/ui/PhotoPlate";
import { WaxSeal } from "@/components/ui/WaxSeal";
import { site } from "@/content/site";
import { waLink } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Visit the showroom",
  description:
    "Visit the Cachet showroom in Banjara Hills, Hyderabad. Boxes, ribbons and wax on one table, by appointment, Tuesday to Saturday.",
  path: "/visit",
});

export default function VisitPage() {
  return (
    <>
      <PageHero
        crumb="The showroom"
        title="Come and see the paper."
        intro="A small room with the boxes, the ribbons and the wax out on a table. Come with a date in mind, or with nothing but a person."
        meta={["Banjara Hills", "Tuesday to Saturday", "By appointment"]}
        index="Hyderabad"
      />

      <PhotoPlate
        src="/media/sealed-letter.jpg"
        alt="A black embossed envelope closed with a wax seal, lit from one side."
        caption="Paper, wax and a monogram — the three things on the table before a box is packed."
        height="h-[clamp(14rem,32vw,26rem)]"
        position="center 52%"
        filter="brightness(1.9) contrast(1.06) saturate(0.92)"
      />

      <section className="bg-paper py-16 text-ink lg:py-24">
        <div className="gutter page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eye eye-ink">The address</p>
            <address className="mt-6 not-italic">
              <p className="font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.1]">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
            <a href={site.mapUrl} target="_blank" rel="noreferrer" className="btn btn-ink mt-7">
              {site.directionsLabel}
            </a>
            <p className="mt-4 max-w-[26rem] text-[0.78rem] leading-relaxed text-ink-soft">
              This is a concept site; the address, hours and map are illustrative. A real showroom&apos;s details are
              confirmed before launch.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex items-start gap-6">
              <WaxSeal size={84} className="hidden shrink-0 sm:block" />
              <div className="w-full">
                <p className="label text-rose">Hours</p>
                <dl className="mt-3 border-t border-line-ink">
                  {site.hours.map((entry) => (
                    <div key={entry.day} className="flex items-baseline justify-between gap-6 border-b border-line-ink py-3">
                      <dt className="text-[0.9rem] text-ink/70">{entry.day}</dt>
                      <dd className="text-[0.9rem] tabular-nums text-ink/70">{entry.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 max-w-[28rem] text-[0.84rem] leading-relaxed text-ink/50">{site.hoursNote}</p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={waLink("Hi Cachet, I'd like to book a time to visit the showroom.")}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ink"
                  >
                    Book a time
                  </a>
                  <a href={`mailto:${site.email}`} className="btn btn-ink-outline">
                    Write instead
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-16 text-ink lg:py-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eye eye-ink">Before you come</p>
            <h2 className="h2 mt-4 max-w-[12ch]">Three useful things.</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
            <div>
              <p className="font-display text-[1.15rem]">Bring a date</p>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-ink/55">Even a rough one. Lead times are the first thing we check, and the first thing that goes wrong.</p>
            </div>
            <div>
              <p className="font-display text-[1.15rem]">Bring a budget</p>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-ink/55">A number per box, not for the whole order. It decides the paper, not the thought.</p>
            </div>
            <div>
              <p className="font-display text-[1.15rem]">Bring the person</p>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-ink/55">If you are gifting for someone, a photograph helps more than a description.</p>
            </div>
          </div>
        </div>
        <div className="gutter page mt-12">
          <Link href="/atelier" className="link-line text-[0.85rem] font-medium">
            Or start the brief before you come →
          </Link>
        </div>
      </section>

      <CtaBand
        title="Can’t come to Banjara Hills?"
        body="Most parcels are chosen over a message. Send the date and the person; we will do the rest by WhatsApp."
        primary={{ label: "Start a brief", href: "/atelier" }}
        secondary={{ label: "See the parcels", href: "/parcels" }}
      />
    </>
  );
}
