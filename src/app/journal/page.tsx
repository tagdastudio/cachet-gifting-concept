import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { notes } from "@/content/journal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Journal",
  description:
    "Notes from the Cachet packing table: why a wax seal still earns its place, and what to write on the card that goes inside.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <>
      <PageHero
        crumb="Journal"
        title="Notes from the packing table."
        intro="Two short pieces on the part of gifting that happens before the box: the seal, and the card."
        meta={["Two notes", "Occasional", "No newsletter"]}
        index="Journal"
      />

      <section className="bg-paper py-14 text-ink lg:py-20">
        <div className="gutter page">
          <div className="border-t border-line-ink">
            {notes.map((note, index) => (
              <Link
                key={note.slug}
                href={`/journal/${note.slug}`}
                className="group grid gap-6 border-b border-line-ink py-8 sm:grid-cols-12 sm:items-center sm:gap-8"
              >
                <div className={`relative aspect-[16/10] overflow-hidden sm:col-span-4 ${index % 2 === 1 ? "sm:order-2" : ""}`}>
                  <Image
                    src={note.image}
                    alt={note.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    style={{ filter: "saturate(0.7) contrast(1.03)" }}
                  />
                </div>
                <div className={`sm:col-span-7 ${index % 2 === 1 ? "sm:order-1 sm:col-start-1" : ""}`}>
                  <div className="flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.16em] text-ink/45">
                    <span>{note.date}</span>
                    <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
                    <span>{note.reading}</span>
                  </div>
                  <h2 className="mt-3 max-w-[22ch] font-display text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[1.02] tracking-[-0.024em]">
                    {note.title}
                  </h2>
                  <p className="mt-3 max-w-[44ch] text-[0.92rem] leading-relaxed text-ink/55">{note.standfirst}</p>
                  <span className="mt-4 inline-flex border-b border-ink/30 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em]">
                    Read the note
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="The rest is in the box."
        body="Notes are occasional. Parcels are the thing we actually do; the collection is the shortest way in."
        primary={{ label: "See the parcels", href: "/parcels" }}
        secondary={{ label: "Commission a parcel", href: "/atelier" }}
      />
    </>
  );
}
