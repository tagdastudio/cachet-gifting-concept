import Link from "next/link";
import { WaxSeal } from "@/components/ui/WaxSeal";

const steps = [
  { title: "Tell us who it is for", body: "The occasion, the date, the person, the budget. Two lines is enough to start." },
  { title: "We send two or three ways", body: "A short note with what would go inside, what it costs, and when it can be ready." },
  { title: "We pack it, you send it", body: "Approved once, sealed by hand, delivered in Hyderabad or couriered across India." },
];

const brief = [
  { label: "For", value: "A new house, Jubilee Hills" },
  { label: "Date", value: "12 December" },
  { label: "Parcels", value: "One" },
  { label: "Budget", value: "₹5,000 – ₹8,000" },
  { label: "Note", value: "She likes fig. No lavender." },
];

/** The commission route, shown as the thing it actually is: a written brief with a seal on it. */
export function AtelierTeaser() {
  return (
    <section className="overflow-hidden bg-bg py-16 text-fg lg:py-24">
      <div className="gutter page grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eye">The atelier</p>
          <h2 className="h2 mt-4 max-w-[16ch]">When the box does not exist yet.</h2>
          <p className="lead mt-5 text-fg/55">
            Most parcels begin on this site. The best ones begin with a message: a person, a date, and a thing nobody sells.
          </p>

          <ol className="mt-9 border-t border-line">
            {steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-line py-4">
                <span className="pt-1 text-[0.58rem] font-semibold tracking-[0.18em] text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-[1.18rem] leading-tight">{step.title}</p>
                  <p className="mt-1.5 max-w-[34ch] text-[0.86rem] leading-relaxed text-fg/50">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <Link href="/atelier" className="btn btn-rose mt-8">
            Start a brief
          </Link>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div className="relative rotate-[-1.4deg] bg-paper p-5 text-ink shadow-[0_40px_60px_-40px_rgba(0,0,0,0.9)] sm:p-7">
            <div className="flex items-baseline justify-between gap-4 border-b border-line-ink pb-3">
              <p className="text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-rose">Commission</p>
              <p className="text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-ink/40">No. 0192</p>
            </div>

            <dl className="mt-5 space-y-3.5">
              {brief.map((row) => (
                <div key={row.label} className="grid grid-cols-[4.4rem_1fr] items-baseline gap-3">
                  <dt className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-ink/40">{row.label}</dt>
                  <dd className="font-display text-[1.02rem] leading-snug text-ink/85">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex items-end justify-between gap-4 border-t border-line-ink pt-4">
              <p className="max-w-[12rem] text-[0.62rem] leading-relaxed text-ink/40">
                Written by hand at the table, then packed to it.
              </p>
              <WaxSeal size={62} className="shrink-0 -rotate-6" />
            </div>
          </div>
          <p className="mt-5 text-center text-[0.62rem] uppercase tracking-[0.18em] text-fg/30">
            A brief, before it becomes a box
          </p>
        </div>
      </div>
    </section>
  );
}
