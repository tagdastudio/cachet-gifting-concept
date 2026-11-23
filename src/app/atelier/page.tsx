import type { Metadata } from "next";
import { BriefForm } from "@/components/forms/BriefForm";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoPlate } from "@/components/ui/PhotoPlate";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "The atelier",
  description:
    "Commission a parcel from Cachet. Tell us who it is for, the date and the budget; we send two or three ways to do it, then pack it by hand in Hyderabad.",
  path: "/atelier",
});

const steps = [
  {
    title: "You write two lines",
    body: "Who it is for, the occasion, the date, roughly what you want to spend. A brief below is enough; a WhatsApp message is also enough.",
  },
  {
    title: "We answer with a proposal",
    body: "Within two working days: what would go inside, what it costs, when it can be ready. Two options if the brief is open, one if it is settled.",
  },
  {
    title: "You approve a sample",
    body: "For anything over twenty-five parcels, we make one finished box first. Paper, ribbon and wax are approved in the hand, not on a screen.",
  },
  {
    title: "We pack, seal and deliver",
    body: "Hand delivery across Hyderabad, or couriered across India. The names are checked twice; the seal goes on last.",
  },
];

export default function AtelierPage() {
  return (
    <>
      <PageHero
        crumb="The atelier"
        title="Tell us the person. We will build the box."
        intro="The collection covers six occasions. The atelier covers the rest: the friend who has everything, the client who does not drink, the wedding with a colour you cannot name."
        meta={["A reply in two days", "From one parcel", "Hyderabad"]}
        index="Atelier"
      />

      <section className="bg-paper py-14 text-ink lg:py-20">
        <div className="gutter page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eye eye-ink">How it works</p>
            <h2 className="h2 mt-4 max-w-[14ch]">Four steps, no forms after this one.</h2>

            <ol className="mt-8 border-t border-line-ink">
              {steps.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-line-ink py-4">
                  <span className="pt-1 text-[0.58rem] font-semibold tracking-[0.18em] text-rose">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-[1.16rem] leading-tight">{step.title}</p>
                    <p className="mt-1.5 text-[0.86rem] leading-relaxed text-ink/55">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 max-w-[30rem] text-[0.84rem] leading-relaxed text-ink/50">
              There is no deposit on this page, and nothing is charged until a written quote is accepted. If the date is
              close, say so in the note; we keep a few same-week slots.
            </p>
          </div>

          <div className="lg:col-span-7">
            <BriefForm kind="atelier" />
          </div>
        </div>
      </section>

      <PhotoPlate
        src="/media/black-satin.jpg"
        alt="Folds of black silk, lit from the left."
        quote="Paper, ribbon, wax. Everything else is a choice."
        margin="The atelier — Banjara Hills"
        height="h-[clamp(14rem,28vw,22rem)]"
        position="center 40%"
        filter="brightness(2.5) contrast(1.1) saturate(0.35)"
      />

      <CtaBand
        title="Prefer to talk it through?"
        body="Some parcels are easier to describe than to type. Message the studio and we will reply as a person, not a form."
        primary={{ label: "See the parcels", href: "/parcels" }}
        secondary={{ label: "Read the questions", href: "/faq" }}
      />
    </>
  );
}
