import type { ReactNode } from "react";

type Props = {
  /** The small line above the title, e.g. "The parcels" or "No. 04". */
  crumb?: string;
  title: ReactNode;
  intro?: string;
  meta?: string[];
  children?: ReactNode;
  /** Right-aligned index, in the manner of a catalogue. */
  index?: string;
};

/** The opening of an inside page: dark, quiet, and set like a title page. */
export function PageHero({ crumb, title, intro, meta, children, index }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg text-fg">
      <div className="gutter page pb-14 pt-12 lg:pb-20 lg:pt-16">
        <div className="flex items-start justify-between gap-6">
          {crumb ? <p className="eye">{crumb}</p> : <span />}
          {index ? <p className="label text-fg/30">{index}</p> : null}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 className="display max-w-[18ch] lg:col-span-8">{title}</h1>
          <div className="lg:col-span-4">
            {intro ? <p className="text-[0.98rem] leading-relaxed text-fg/60">{intro}</p> : null}
            {meta?.length ? (
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.66rem] uppercase tracking-[0.16em] text-champagne">
                {meta.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span aria-hidden="true" className="size-1 rounded-full bg-rose" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        {children ? <div className="mt-10 flex flex-wrap items-center gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
