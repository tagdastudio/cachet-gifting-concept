import Link from "next/link";
import { WaxSeal } from "@/components/ui/WaxSeal";

export default function NotFound() {
  return (
    <section className="bg-bg text-fg">
      <div className="gutter page flex min-h-[calc(100svh-var(--concept-h)-4.5rem)] flex-col justify-center py-20">
        <div className="flex items-start gap-8">
          <WaxSeal size={100} tone="ink" className="hidden sm:block" />
          <div>
            <p className="eye">No. 404</p>
            <h1 className="display mt-5 max-w-[18ch]">
              This box was never <em className="italic text-champagne">sealed</em>.
            </h1>
            <p className="lead mt-6 text-fg/55">
              The page you asked for is not here. The parcels still are. So is a person, on WhatsApp, who will answer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/parcels" className="btn btn-ivory">
                See the parcels
              </Link>
              <Link href="/" className="btn btn-outline">
                Back to the front
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
