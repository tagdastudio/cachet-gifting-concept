import { site } from "@/content/site";
import { waLink } from "@/lib/links";
import { Arrow } from "@/components/ui/Arrow";
import { WaxSeal } from "@/components/ui/WaxSeal";

/** The showroom: address, hours, and the one thing worth saying before someone visits. */
export function VisitBand() {
  return (
    <section className="bg-bg-deep py-16 text-fg lg:py-24">
      <div className="gutter page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eye">The showroom</p>
          <h2 className="h2 mt-4 max-w-[16ch]">Come and see the paper.</h2>
          <p className="lead mt-5 text-fg/55">
            A small room in Banjara Hills with the boxes, the ribbons and the wax out on a table. Come with a date in mind,
            or with nothing but a person.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.mapUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
              {site.directionsLabel}
              <Arrow className="size-2.5" />
            </a>
            <a
              href={waLink("Hi Cachet, I'd like to visit the showroom.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Book a time
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <div className="flex items-start gap-5 border-t border-line pt-6">
            <WaxSeal size={72} className="shrink-0" />
            <div>
              <address className="not-italic">
                <p className="label text-champagne">Address</p>
                {site.address.map((line) => (
                  <span key={line} className="mt-1 block text-[0.92rem] leading-relaxed text-fg/70">
                    {line}
                  </span>
                ))}
              </address>
              <dl className="mt-5 space-y-1 text-[0.84rem]">
                {site.hours.map((entry) => (
                  <div key={entry.day} className="flex justify-between gap-4">
                    <dt className="text-fg/45">{entry.day}</dt>
                    <dd className="tabular-nums text-fg/70">{entry.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-[0.76rem] leading-relaxed text-fg/35">{site.hoursNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
