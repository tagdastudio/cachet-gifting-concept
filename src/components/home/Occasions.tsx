import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";

const panels = [
  {
    number: "No. 01",
    title: "Weddings",
    copy: "Welcome boxes, return gifts, bridal parties, the trousseau. We work from your palette and your date, and we deliver to the venue with names on every box.",
    points: ["From 25 boxes", "Palette matched", "Venue delivery"],
    href: "/weddings",
    cta: "The wedding service",
  },
  {
    number: "No. 02",
    title: "Corporate",
    copy: "New joiners, promotions, festivals, the client you would like to keep. One card can carry your logo; the box stays ours.",
    points: ["From 10 boxes", "Sample on approval", "Pan-India courier"],
    href: "/corporate",
    cta: "The corporate service",
  },
];

/** The two commissions that are not one box at a time. */
export function Occasions() {
  return (
    <section className="bg-paper py-16 text-ink lg:py-24">
      <div className="gutter page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eye eye-ink">In numbers</p>
            <h2 className="h2 mt-4 max-w-[18ch]">Two kinds of order, one standard.</h2>
          </div>
          <p className="max-w-[24rem] text-[0.9rem] leading-relaxed text-ink/55">
            A hundred boxes are packed like one: the same paper, the same seal, the same person checking the names.
          </p>
        </div>

        <div className="mt-10 grid border border-line-ink sm:grid-cols-2">
          {panels.map((panel, index) => (
            <div
              key={panel.title}
              className={`flex flex-col justify-between p-6 sm:p-9 ${index === 0 ? "border-b border-line-ink sm:border-b-0 sm:border-r" : ""}`}
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="label text-rose">{panel.number}</p>
                  <Arrow className="size-3 text-ink/30" />
                </div>
                <h3 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,2.9rem)] leading-none tracking-[-0.025em]">{panel.title}</h3>
                <p className="mt-4 max-w-[32ch] text-[0.92rem] leading-relaxed text-ink/60">{panel.copy}</p>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                  {panel.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.12em] text-ink/45">
                      <span aria-hidden="true" className="size-1 rounded-full bg-rose/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={panel.href}
                className="group mt-8 inline-flex items-center gap-2 self-start border-b border-ink/30 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em]"
              >
                {panel.cta}
                <Arrow className="size-2.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
