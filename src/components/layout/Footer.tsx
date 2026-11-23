import Link from "next/link";
import { site } from "@/content/site";
import { WaxSeal } from "@/components/ui/WaxSeal";

const columns = [
  {
    title: "The parcels",
    links: [
      { label: "All parcels", href: "/parcels" },
      { label: "Weddings", href: "/weddings" },
      { label: "Corporate", href: "/corporate" },
      { label: "Commission one", href: "/atelier" },
    ],
  },
  {
    title: "The house",
    links: [
      { label: "Visit the showroom", href: "/visit" },
      { label: "Journal", href: "/journal" },
      { label: "Questions", href: "/faq" },
      { label: "Delivery", href: "/delivery" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-bg text-fg">
      <div className="rule" />
      <div className="gutter page py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <WaxSeal size={64} />
              <div>
                <p className="font-display text-[1.45rem] uppercase leading-none tracking-[0.14em]">{site.wordmark}</p>
                <p className="mt-2 text-[0.76rem] uppercase tracking-[0.18em] text-champagne">{site.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-[26rem] text-[0.9rem] leading-relaxed text-fg/55">
              {site.descriptor} Made in {site.city}, sent wherever it needs to go.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[0.8rem]">
              <a
                href={`https://wa.me/${site.concept ? "" : site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="link-line"
              >
                {site.whatsappDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="link-line">
                {site.email}
              </a>
              <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="link-line">
                {site.instagram}
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <p className="label text-champagne">{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[0.9rem] text-fg/60 transition-colors duration-300 hover:text-fg">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <p className="label text-champagne">The showroom</p>
            <address className="mt-4 text-[0.9rem] not-italic leading-relaxed text-fg/60">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <dl className="mt-4 space-y-1 text-[0.82rem] text-fg/50">
              {site.hours.map((entry) => (
                <div key={entry.day} className="flex justify-between gap-4">
                  <dt>{entry.day}</dt>
                  <dd className="tabular-nums">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-[0.72rem] text-fg/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. A concept by{" "}
            <a href="https://tagda.studio" target="_blank" rel="noreferrer" className="link-line text-fg/60">
              Tagda Studio
            </a>
            .
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-fg/30">Prices, hours and address are illustrative.</span>
            <Link href="/legal/privacy" className="link-line">
              Privacy
            </Link>
            <Link href="/legal/terms" className="link-line">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
