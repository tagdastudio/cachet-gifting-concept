export type FaqGroup = { title: string; items: { q: string; a: string }[] };

/** Questions on paper, each on its own rule, opening without ceremony. */
export function FaqList({ groups }: { groups: FaqGroup[] }) {
  return (
    <div className="space-y-14">
      {groups.map((group) => (
        <section key={group.title}>
          <h2 className="label text-rose">{group.title}</h2>
          <div className="mt-4 border-t border-line-ink">
            {group.items.map((item) => (
              <details key={item.q} className="group border-b border-line-ink">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="max-w-[42rem] font-display text-[1.18rem] leading-snug tracking-[-0.01em] text-ink">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative mt-1.5 size-3.5 shrink-0 text-rose transition-transform duration-300 group-open:rotate-45"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                  </span>
                </summary>
                <p className="max-w-[46rem] pb-6 text-[0.95rem] leading-[1.7] text-ink/70">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
