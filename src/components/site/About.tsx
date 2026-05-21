import { Reveal } from "./Reveal";
import { CtaLink } from "./CtaLink";

export function About() {
  return (
    <section className="bg-background px-8 md:px-16 py-28 md:py-40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
        <Reveal>
          <h2
            className="text-white font-extralight leading-[1.05]"
            style={{ fontWeight: 200, fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
          >
            Designing Spaces
            <br />
            That Define the
            <br />
            East African Horizon
          </h2>
        </Reveal>
        <div className="space-y-6">
          <Reveal delay={120}>
            <p className="text-white text-xl md:text-2xl font-light leading-snug">
              We design spaces that are timeless, shaping the skylines and landscapes of East Africa.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="text-white/70 leading-relaxed font-light">
              PLANNING Systems Services Ltd is a prominent architectural firm founded in 1978 in Nairobi. Over the decades, our expertise in architecture, land use planning, and urban design has expanded across the East African footprint.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <p className="text-white/70 leading-relaxed font-light">
              We believe in the transformative power of design to craft captivating human experiences within sustainable and vibrant buildings, spaces, and communities across the region.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="mt-16 md:mt-24 flex justify-center">
        <Reveal delay={120}>
          <CtaLink to="/story" size="xl">Our Story</CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
