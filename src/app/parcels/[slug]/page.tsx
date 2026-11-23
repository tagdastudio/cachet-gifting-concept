import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ParcelCard } from "@/components/parcels/ParcelCard";
import { ParcelPlate } from "@/components/parcels/ParcelPlate";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoPlate } from "@/components/ui/PhotoPlate";
import { getParcel, parcels } from "@/content/parcels";
import { formatRupees, waLink } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return parcels.map((parcel) => ({ slug: parcel.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parcel = getParcel(slug);
  if (!parcel) return {};
  return pageMetadata({ title: parcel.name, description: parcel.blurb, path: `/parcels/${parcel.slug}` });
}

export default async function ParcelPage({ params }: Props) {
  const { slug } = await params;
  const parcel = getParcel(slug);
  if (!parcel) notFound();

  const others = parcels.filter((entry) => entry.slug !== parcel.slug).slice(0, 3);
  const message = `Hi Cachet, I'd like to ask about ${parcel.name} (${parcel.number}, ${formatRupees(parcel.price)}).`;

  return (
    <>
      <PageHero
        crumb={`${parcel.number} — the collection`}
        title={parcel.name}
        intro={parcel.blurb}
        meta={[formatRupees(parcel.price), `Ready in ${parcel.leadTime}`, "Sealed by hand"]}
        index={parcel.number}
      />

      <section className="bg-paper pb-16 pt-10 text-ink lg:pb-24 lg:pt-14">
        <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <ParcelPlate parcel={parcel} sealSize={128} />
            <p className="mt-4 text-[0.74rem] leading-relaxed text-ink-soft">
              The closed parcel, seen from above. Plate and seal colours are illustrative; a sample is approved before a run.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-baseline justify-between gap-4 border-b border-line-ink pb-4">
              <p className="label text-rose">The parcel</p>
              <p className="font-display text-[1.7rem] tabular-nums">{formatRupees(parcel.price)}</p>
            </div>

            <p className="mt-5 text-[0.95rem] leading-[1.75] text-ink/75">{parcel.description}</p>

            <dl className="mt-7 space-y-4 border-t border-line-ink pt-5 text-[0.88rem]">
              <div className="grid grid-cols-[7rem_1fr] gap-4">
                <dt className="text-ink-soft">For</dt>
                <dd className="text-ink/75">{parcel.forWho}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4">
                <dt className="text-ink-soft">Lead time</dt>
                <dd className="text-ink/75">{parcel.leadTime}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4">
                <dt className="text-ink-soft">Care</dt>
                <dd className="text-ink/75">{parcel.care}</dd>
              </div>
            </dl>

            <ul className="mt-6 flex flex-wrap gap-2">
              {parcel.notes.map((note) => (
                <li key={note} className="rounded-full border border-line-ink-strong px-3 py-1 text-[0.68rem] uppercase tracking-[0.1em] text-ink/60">
                  {note}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={waLink(message)} target="_blank" rel="noreferrer" className="btn btn-ink">
                Reserve on WhatsApp
              </a>
              <Link href="/atelier" className="btn btn-ink-outline">
                Adjust the contents
              </Link>
            </div>
            <p className="mt-4 text-[0.74rem] leading-relaxed text-ink-soft">
              Prices are illustrative. Stock, the final price and delivery are confirmed in writing before anything is packed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-16 text-ink lg:py-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eye eye-ink">Inside</p>
            <h2 className="h2 mt-4 max-w-[12ch]">What is in the box.</h2>
            <p className="mt-4 max-w-[26rem] text-[0.9rem] leading-relaxed text-ink/55">
              Five things, chosen to be used rather than stored. Anything can be left out; most things can be swapped.
            </p>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {parcel.contents.map((item, index) => (
              <li key={item.name} className="grid grid-cols-[2.2rem_1fr] gap-4 border-b border-line-ink py-5 first:border-t first:border-line-ink">
                <span className="pt-1 text-[0.6rem] font-semibold tracking-[0.16em] text-rose">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-[1.22rem] leading-tight">{item.name}</p>
                  <p className="mt-1.5 max-w-[38ch] text-[0.86rem] leading-relaxed text-ink/55">{item.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PhotoPlate
        src="/media/candlelit-table.jpg"
        alt="A dark table set with a candle, glassware and a dried branch."
        quote="Packed on one table, by one pair of hands."
        caption="The atelier in Banjara Hills, on an ordinary Tuesday."
        height="h-[clamp(16rem,34vw,26rem)]"
        position="center 48%"
        tone="dark"
      />

      <section className="bg-paper py-16 text-ink lg:py-24">
        <div className="gutter page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eye eye-ink">Also sealed</p>
              <h2 className="h2 mt-4">Three more parcels.</h2>
            </div>
            <Link href="/parcels" className="link-line text-[0.8rem] font-medium">
              All six
            </Link>
          </div>
          <div className="mt-9 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((entry) => (
              <ParcelCard key={entry.slug} parcel={entry} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="One parcel, or a hundred like it."
        body="Weddings and offices work from the same table, with the same seal. Tell us the date and the count."
        primary={{ label: "Commission a parcel", href: "/atelier" }}
        secondary={{ label: "Corporate gifting", href: "/corporate" }}
      />
    </>
  );
}
