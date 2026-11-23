import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { getNote, notes } from "@/content/journal";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return pageMetadata({ title: note.title, description: note.standfirst, path: `/journal/${note.slug}` });
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const others = notes.filter((entry) => entry.slug !== note.slug);

  return (
    <>
      <PageHero
        crumb="Journal"
        title={note.title}
        intro={note.standfirst}
        meta={[note.date, note.reading]}
        index="Note"
      />

      <div className="bg-paper text-ink">
        <div className="relative h-[clamp(15rem,40vw,32rem)] w-full overflow-hidden">
          <Image
            src={note.image}
            alt={note.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ filter: "saturate(0.72) contrast(1.03)" }}
          />
        </div>

        <article className="gutter page py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <p className="label text-rose">Filed under</p>
              <p className="mt-2 text-[0.88rem] text-ink/60">{note.date}</p>
              <p className="text-[0.88rem] text-ink/60">{note.reading}</p>
              <p className="mt-6 max-w-[16rem] text-[0.78rem] leading-relaxed text-ink-soft">
                Written at the packing table in Banjara Hills. No byline; there are four of us and we all pack.
              </p>
            </aside>

            <div className="max-w-[44rem] lg:col-span-8 lg:col-start-5">
              {note.blocks.map((block, index) => {
                if (block.kind === "h") {
                  return (
                    <h2 key={index} className="mt-10 font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight first:mt-0">
                      {block.text}
                    </h2>
                  );
                }
                if (block.kind === "quote") {
                  return (
                    <blockquote key={index} className="my-9 border-l-2 border-rose pl-6">
                      <p className="font-display text-[clamp(1.4rem,2.6vw,1.95rem)] leading-[1.15] tracking-[-0.02em] text-ink">
                        {block.text}
                      </p>
                    </blockquote>
                  );
                }
                if (block.kind === "list") {
                  return (
                    <ul key={index} className="my-6 space-y-2.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-3 text-[0.98rem] leading-[1.7] text-ink/75">
                          <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-rose" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="mt-4 text-[1rem] leading-[1.8] text-ink/75 first:mt-0">
                    {block.text}
                  </p>
                );
              })}

              <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-line-ink pt-6">
                <p className="text-[0.74rem] uppercase tracking-[0.16em] text-ink-soft">Next note</p>
                {others.map((entry) => (
                  <Link key={entry.slug} href={`/journal/${entry.slug}`} className="link-line font-display text-[1.15rem]">
                    {entry.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>

      <CtaBand
        title="A note goes in every box."
        body="Hand-written on cream card, or printed if there are two hundred of them. Either way, someone reads it before the seal goes on."
        primary={{ label: "See the parcels", href: "/parcels" }}
        secondary={{ label: "Commission a parcel", href: "/atelier" }}
      />
    </>
  );
}
