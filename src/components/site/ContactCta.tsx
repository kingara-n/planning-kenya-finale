import { Reveal } from "./Reveal";
import { CtaLink } from "./CtaLink";

export function ContactCta() {
  return (
    <section className="bg-background-deep px-6 md:px-16 py-28 md:py-40">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <p className="text-white/60 text-xs tracking-[0.3em] mb-8">
            05 — LET'S BUILD
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="text-white font-extralight leading-[1.05] mb-12 md:mb-16"
            style={{ fontWeight: 200, fontSize: "clamp(2.25rem, 5vw, 4.75rem)" }}
          >
            Have a project in mind? Tell us more
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <div className="flex justify-center">
            <CtaLink to="/contact" size="2xl">
              Contact Us
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
