import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";

const facts = [
  { term: "Six parcels", detail: "Built, not assembled. Each one has a moment it is for." },
  { term: "One seal", detail: "Pressed by hand, in oxblood wax, on every box that leaves." },
  { term: "Two ways", detail: "Choose from the collection, or have one made around the person." },
];

/** The house, in its own words: one statement, then three plain facts. */
export function Mantra() {
  return (
    <section className="bg-paper-2 py-16 text-ink lg:py-24">
      <div className="gutter page">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eye eye-ink">Why we exist</p>
            <p className="mt-6 max-w-[26ch] font-display text-[clamp(2rem,4.4vw,3.9rem)] leading-[0.98] tracking-[-0.028em]">
              Most gifts are bought. A few are <em className="italic text-rose">composed</em>.
            </p>
            <p className="lead-ink mt-7">
              We started because the good gifts were hard to find and the easy ones were everywhere. A parcel from us is
              chosen for one person, packed on one table, and closed with a seal that cannot be opened quietly.
            </p>
            <Link
              href="/atelier"
              className="group mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-[0.64rem] font-semibold uppercase tracking-[0.18em]"
            >
              How a commission works
              <Arrow className="size-2.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <dl className="lg:col-span-4 lg:border-l lg:border-line-ink lg:pl-8">
            {facts.map((fact) => (
              <div key={fact.term} className="border-t border-line-ink py-5 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-5">
                <dt className="font-display text-[1.22rem] leading-tight">{fact.term}</dt>
                <dd className="mt-2 text-[0.86rem] leading-relaxed text-ink/55">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
