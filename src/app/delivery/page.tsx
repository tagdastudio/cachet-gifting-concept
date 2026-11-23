import type { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Delivery",
  description:
    "Hand delivery across Hyderabad, courier across India, venue delivery for weddings, and honest lead times from the Cachet atelier.",
  path: "/delivery",
});

const windows = [
  { zone: "Hyderabad, inside the ORR", time: "Same day to 48 hours", note: "Hand delivery, by our own rider. Time windows confirmed the morning of." },
  { zone: "Hyderabad, outside the ORR", time: "48 to 72 hours", note: "Hand delivery where we can, courier where it is faster." },
  { zone: "Metro cities", time: "3 to 5 working days", note: "Courier, packed for the journey, tracked where the courier allows." },
  { zone: "Rest of India", time: "5 to 8 working days", note: "Courier. Fragile contents are double-boxed; we do not ship glass." },
  { zone: "Venues and hotels", time: "Agreed to the hour", note: "Delivered to the event manager with a name list, counted before we leave." },
];

export default function DeliveryPage() {
  return (
    <>
      <PageHero
        crumb="Delivery"
        title="Packed for the journey."
        intro="Most parcels are handed over in Hyderabad. The rest are packed to survive a courier and a doorman, in that order."
        meta={["Hand delivery", "Pan-India courier", "Venue drop-off"]}
        index="Logistics"
      />

      <section className="bg-paper py-14 text-ink lg:py-20">
        <div className="gutter page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eye eye-ink">Windows</p>
            <h2 className="h2 mt-4 max-w-[12ch]">What to expect.</h2>
            <p className="mt-5 max-w-[26rem] text-[0.9rem] leading-[1.7] text-ink/55">
              Estimates, not promises. Festive weeks, rain and a courier’s idea of “out for delivery” all move the number.
            </p>
            <p className="mt-4 max-w-[26rem] text-[0.84rem] leading-relaxed text-ink/45">
              We would rather give you a later date we can hold than an early one we cannot.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line-ink">
              {windows.map((window) => (
                <div key={window.zone} className="grid gap-1.5 border-b border-line-ink py-4 sm:grid-cols-[1.1fr_0.9fr_1.4fr] sm:gap-6">
                  <p className="font-display text-[1.1rem] leading-tight">{window.zone}</p>
                  <p className="text-[0.8rem] uppercase tracking-[0.1em] text-rose">{window.time}</p>
                  <p className="text-[0.84rem] leading-relaxed text-ink/55">{window.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-14 text-ink lg:py-20">
        <div className="gutter page grid gap-10 sm:grid-cols-3">
          <div>
            <p className="eye eye-ink">01 — Packing</p>
            <p className="mt-3 font-display text-[1.3rem] leading-tight">Double-boxed, no loose glass</p>
            <p className="mt-2 max-w-[30rem] text-[0.88rem] leading-relaxed text-ink/55">
              Every parcel travels inside a plain outer box, with the seal protected by a card sleeve. Ribbon is tied to the
              inner box, not the outer, so nothing arrives crushed.
            </p>
          </div>
          <div>
            <p className="eye eye-ink">02 — Tracking</p>
            <p className="mt-3 font-display text-[1.3rem] leading-tight">A number, or a person</p>
            <p className="mt-2 max-w-[30rem] text-[0.88rem] leading-relaxed text-ink/55">
              Courier parcels get a tracking number. Hand deliveries get the rider’s number and a message when it leaves the
              table.
            </p>
          </div>
          <div>
            <p className="eye eye-ink">03 — If it goes wrong</p>
            <p className="mt-3 font-display text-[1.3rem] leading-tight">Same-day photographs</p>
            <p className="mt-2 max-w-[30rem] text-[0.88rem] leading-relaxed text-ink/55">
              Send a photograph on the day. We replace what we can, refund what we cannot, and we would rather hear about it
              than not.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-16 pt-10 text-ink lg:pb-24">
        <div className="gutter page">
          <p className="max-w-[46rem] border-t border-line-ink pt-5 text-[0.78rem] leading-relaxed text-ink-soft">
            Delivery details on this concept site are illustrative. A real studio confirms the date, the window and the cost
            in writing before packing. Pickup from the {site.city} showroom is always free.
          </p>
        </div>
      </section>

      <CtaBand
        title="Need it on a particular day?"
        body="Say the date in the brief. If we cannot hold it, we will say so before you plan around it."
        primary={{ label: "Start a brief", href: "/atelier" }}
        secondary={{ label: "Visit the showroom", href: "/visit" }}
      />
    </>
  );
}
