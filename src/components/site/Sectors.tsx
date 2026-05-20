import { Reveal } from "./Reveal";
import { CtaLink } from "./CtaLink";

const sectors = [
  "Hospitality",
  "Corporate Offices",
  "Masterplanning",
  "Retail",
  "Education",
  "Arts & Culture",
  "Residential",
  "Industrial & Logistics",
  "Wellness & Healthcare",
  "Heritage & Restorations",
];

export function Sectors() {
  // Reorder into two columns matching the reference image (odd left, even right)
  const left = sectors.filter((_, i) => i % 2 === 0);
  const right = sectors.filter((_, i) => i % 2 === 1);

  return (
    <section className="bg-background px-6 md:px-16 pt-12 md:pt-16 pb-28 md:pb-40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-white/60 text-xs tracking-[0.3em] mb-8">04 — PRACTICE</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="text-white font-extralight leading-[1.05] mb-10"
              style={{ fontWeight: 200, fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
            >
              Ten sectors.
              <br />
              One{" "}
              <span
                className="italic"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                discipline
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <CtaLink to="/portfolio">Browse the portfolio</CtaLink>
          </Reveal>
        </div>

        <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-12">
          <SectorList items={left} startIndex={1} step={2} />
          <SectorList items={right} startIndex={2} step={2} />
        </div>
      </div>
    </section>
  );
}

function SectorList({
  items,
  startIndex,
  step,
}: {
  items: string[];
  startIndex: number;
  step: number;
}) {
  return (
    <ul>
      {items.map((label, i) => {
        const n = String(startIndex + i * step).padStart(2, "0");
        return (
          <Reveal key={label} delay={i * 70} as="li">
            <a
              href="#"
              className="group flex items-center justify-between border-b border-white/15 py-5 text-white transition-colors duration-300 hover:border-white/40"
            >
              <span className="font-light text-lg md:text-xl transition-transform duration-500 group-hover:translate-x-1.5">
                {label}
              </span>
              <span className="text-white/45 text-xs tracking-[0.3em] transition-colors duration-300 group-hover:text-white/80">
                {n}
              </span>
            </a>
          </Reveal>
        );
      })}
    </ul>
  );
}
