import Image from "next/image";
import Link from "next/link";
import { notes } from "@/content/journal";
import { Arrow } from "@/components/ui/Arrow";

/** Notes from the packing table: two at a time, with the reason to read them. */
export function JournalTeaser() {
  return (
    <section className="bg-paper-2 py-16 text-ink lg:py-24">
      <div className="gutter page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eye eye-ink">The journal</p>
            <h2 className="h2 mt-4 max-w-[18ch]">Notes from the packing table.</h2>
          </div>
          <Link
            href="/journal"
            className="group inline-flex items-center gap-2 self-start border-b border-ink/30 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em]"
          >
            All notes
            <Arrow className="size-2.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:gap-12">
          {notes.map((note) => (
            <Link key={note.slug} href={`/journal/${note.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={note.image}
                  alt={note.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  style={{ filter: "brightness(1.85) saturate(0.8) contrast(1.03)" }}
                />
              </div>
              <div className="mt-4 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.16em] text-ink/45">
                <span>{note.date}</span>
                <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
                <span>{note.reading}</span>
              </div>
              <h3 className="mt-2 max-w-[24ch] font-display text-[clamp(1.4rem,2.4vw,2rem)] leading-tight tracking-[-0.02em]">
                {note.title}
              </h3>
              <p className="mt-2 max-w-[40ch] text-[0.88rem] leading-relaxed text-ink/55">{note.standfirst}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
