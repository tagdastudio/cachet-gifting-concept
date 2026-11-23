"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { waLink } from "@/lib/links";
import { WaxSeal } from "@/components/ui/WaxSeal";
import { Arrow } from "@/components/ui/Arrow";

export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimer = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    if (dialog.open) dialog.close();
  }, [open]);

  useEffect(
    () => () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    },
    [],
  );

  function openMenu() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setClosing(false);
    setOpen(true);
  }

  function requestClose() {
    if (!open || closing) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setClosing(true);
    closeTimer.current = window.setTimeout(
      () => {
        setOpen(false);
        setClosing(false);
      },
      reduced ? 0 : 220,
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="inline-flex min-h-11 items-center gap-2.5 border border-line px-3.5 text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-fg transition-colors duration-300 hover:border-fg/60 lg:hidden"
      >
        Menu
        <span aria-hidden="true" className="flex w-3.5 flex-col gap-1">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => {
          setOpen(false);
          setClosing(false);
        }}
        onCancel={(event) => {
          event.preventDefault();
          requestClose();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) requestClose();
        }}
        data-closing={closing ? "true" : "false"}
        aria-label="Menu"
        className="fixed inset-0 m-0 h-[100svh] max-h-none w-full max-w-none border-0 bg-bg p-0 text-fg backdrop:bg-bg-deep"
      >
        <div className="menu-panel flex h-full flex-col">
          <div className="gutter flex h-[4.5rem] shrink-0 items-center justify-between border-b border-line">
            <Link href="/" onClick={requestClose} className="menu-seal inline-flex items-center gap-3" aria-label={`${site.name} home`}>
              <WaxSeal size={40} />
              <span className="font-display text-[0.95rem] uppercase leading-none tracking-[0.16em]">{site.wordmark}</span>
            </Link>
            <button
              type="button"
              onClick={requestClose}
              className="inline-flex min-h-11 items-center gap-2 border border-line px-3.5 text-[0.63rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:border-fg/60"
            >
              Close
            </button>
          </div>

          <div className="gutter flex min-h-0 flex-1 flex-col justify-between overflow-y-auto py-8">
            <nav aria-label="Mobile" className="page">
              <ul>
                {site.nav.map((item, index) => (
                  <li key={item.href} className="border-b border-line/60">
                    <Link
                      href={item.href}
                      onClick={requestClose}
                      className="menu-link flex items-baseline gap-4 py-4"
                      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                    >
                      <span className="w-6 shrink-0 font-body text-[0.6rem] tracking-[0.18em] text-champagne">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[clamp(1.9rem,8.4vw,2.8rem)] leading-none tracking-[-0.02em]">
                        {item.label}
                      </span>
                      <Arrow className="ml-auto size-3.5 text-champagne" />
                    </Link>
                  </li>
                ))}
                <li className="border-b border-line/60">
                  <Link
                    href="/journal"
                    onClick={requestClose}
                    className="menu-link flex items-baseline gap-4 py-4"
                    style={{ animationDelay: `${0.1 + site.nav.length * 0.05}s` }}
                  >
                    <span className="w-6 shrink-0 font-body text-[0.6rem] tracking-[0.18em] text-champagne">
                      {String(site.nav.length + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[clamp(1.9rem,8.4vw,2.8rem)] leading-none tracking-[-0.02em]">
                      Journal
                    </span>
                    <Arrow className="ml-auto size-3.5 text-champagne" />
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="page mt-10">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <a
                  href={waLink("Hi Velvet Parcel, I'd like help with a gift.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-rose"
                >
                  WhatsApp the studio
                </a>
                <Link href="/parcels" onClick={requestClose} className="btn btn-outline">
                  See the parcels
                </Link>
              </div>
              <p className="mt-6 text-[0.78rem] leading-relaxed text-fg/45">
                {site.address[0]}
                <br />
                {site.address[1]}
                <br />
                {site.hours[0].day} · {site.hours[0].time}
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
