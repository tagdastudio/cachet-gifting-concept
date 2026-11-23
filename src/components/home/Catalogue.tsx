import Link from "next/link";
import { parcels } from "@/content/parcels";
import { formatRupees } from "@/lib/links";
import { ParcelPlate } from "@/components/parcels/ParcelPlate";
import { SectionHead } from "@/components/ui/SectionHead";
import { Arrow } from "@/components/ui/Arrow";

/** The collection as a numbered catalogue, not a grid of cards. */
export function Catalogue() {
  return (
    <section className="bg-paper py-16 text-ink lg:py-24">
      <div className="gutter page">
        <SectionHead
          eyebrow="The collection"
          title="Six parcels, and a reason for each."
          intro="Nothing here is a hamper of leftovers. Every parcel is built around one moment — the first hour of a wedding, the first meal in a new house, the morning after."
          link={{ label: "All parcels", href: "/parcels" }}
        />

        <ol className="mt-10 border-t border-line-ink">
          {parcels.map((parcel) => (
            <li key={parcel.slug}>
              <Link
                href={`/parcels/${parcel.slug}`}
                className="group grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 border-b border-line-ink py-3.5 sm:grid-cols-[4rem_4.5rem_1fr_auto] sm:gap-6 sm:py-4"
              >
                <ParcelPlate
                  parcel={parcel}
                  sealSize={26}
                  className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-2 group-hover:scale-[1.06]"
                />
                <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-rose sm:block">
                  {parcel.number}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[clamp(1.3rem,2.6vw,2rem)] leading-tight tracking-[-0.02em]">
                    <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                      {parcel.name}
                    </span>
                  </h3>
                  <p className="mt-1 hidden max-w-[38ch] truncate text-[0.84rem] text-ink/50 sm:block">{parcel.blurb}</p>
                </div>
                <div className="flex items-center gap-4 sm:gap-8">
                  <p className="text-[0.82rem] tabular-nums text-ink/70">{formatRupees(parcel.price)}</p>
                  <Arrow className="size-3 text-rose transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
