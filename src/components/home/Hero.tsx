"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, MQ, useGSAP } from "@/motion/gsap";
import { WaxSeal } from "@/components/ui/WaxSeal";
import { Arrow } from "@/components/ui/Arrow";
import { formatRupees } from "@/lib/links";
import { parcels } from "@/content/parcels";

const keepsake = parcels.find((parcel) => parcel.slug === "the-keepsake");

export function Hero() {
  const scope = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap.from("[data-line-inner]", {
          yPercent: 114,
          duration: 1.25,
          stagger: 0.1,
          delay: 0.08,
          ease: "expo",
        });
        gsap.from("[data-fade]", { y: 18, autoAlpha: 0, duration: 1, stagger: 0.1, delay: 0.5 });
        gsap.from("[data-seal]", {
          scale: 0.78,
          rotate: -14,
          autoAlpha: 0,
          duration: 1.1,
          delay: 0.62,
          ease: "back.out(1.4)",
        });
      });
      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      className="relative -mt-[4.5rem] flex min-h-[calc(100svh-var(--concept-h))] flex-col overflow-hidden bg-bg-deep"
    >
      <div className="absolute inset-0">
        <Image
          src="/media/candlelit-table.jpg"
          alt="A dark table set with a candle, glassware and a dried branch, lit from one side."
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: "center 42%",
            filter: "saturate(0.55) sepia(0.24) hue-rotate(-14deg) contrast(1.02) brightness(1.14)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/35 to-bg-deep/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/85 via-bg-deep/25 to-transparent" />
      </div>

      <div className="relative z-10 gutter page flex min-h-0 flex-1 flex-col justify-between pb-7 pt-[6.6rem]">
        <div className="flex items-start justify-between gap-6 text-[0.58rem] uppercase tracking-[0.2em] text-fg/45">
          <p>Hyderabad, India</p>
          <p className="hidden sm:block">Est. 2019 — by appointment</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eye" data-fade>
              A gifting house for the occasions that matter
            </p>

            <h1 className="mt-5 font-display text-[clamp(3.1rem,8.4vw,7.6rem)] font-normal leading-[0.9] tracking-[-0.032em]">
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="block" data-line-inner>
                  Gifts that
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="block" data-line-inner>
                  arrive <em className="italic text-champagne">sealed.</em>
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-[27rem] text-[0.98rem] leading-relaxed text-fg/60" data-fade>
              Six parcels, packed by hand in Hyderabad and closed with a wax seal. For weddings, new houses, and the people
              who already have everything.
            </p>

            <div className="mt-8 flex flex-wrap gap-3" data-fade>
              <Link href="/parcels" className="btn btn-ivory">
                See the parcels
              </Link>
              <Link href="/atelier" className="btn btn-outline">
                Commission one
                <Arrow className="size-2.5" />
              </Link>
            </div>
          </div>

          {keepsake ? (
            <div className="lg:col-span-4 lg:justify-self-end" data-seal>
              <div className="flex items-center gap-5 border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <WaxSeal size={92} className="shrink-0" />
                <div>
                  <p className="label text-champagne">{keepsake.number}</p>
                  <p className="mt-1.5 font-display text-[1.05rem] leading-tight">{keepsake.name}</p>
                  <p className="mt-1.5 text-[0.8rem] tabular-nums text-fg/50">{formatRupees(keepsake.price)}</p>
                  <Link
                    href={`/parcels/${keepsake.slug}`}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-[0.58rem] uppercase tracking-[0.18em] text-fg/65 transition-colors hover:text-fg"
                  >
                    Look inside
                    <Arrow className="size-2" />
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-[0.56rem] uppercase tracking-[0.2em] text-fg/40">
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-6 w-px bg-fg/20" />
            Scroll
          </span>
          <span>Hand delivery in Hyderabad · India on request</span>
        </div>
      </div>
    </section>
  );
}
