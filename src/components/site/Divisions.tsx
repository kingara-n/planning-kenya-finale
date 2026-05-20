import { Reveal } from "./Reveal";

const divisions = [
  {
    n: "01",
    title: "PLANNING Systems Services Ltd",
    desc: "Architecture, land use planning, and urban design.",
  },
  {
    n: "02",
    title: "PLANNING Project Management Ltd",
    desc: "Project and development management across East Africa.",
  },
  {
    n: "03",
    title: "PLANNING Energy + Environment",
    desc: "Environmental design, sustainability, and analysis.",
  },
];

export function Divisions() {
  return (
    <section className="bg-background-deep px-6 md:px-16 py-28 md:py-40">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-white/60 text-xs tracking-[0.3em] mb-8">02 — THE GROUP</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="text-white font-extralight leading-[1.05] mb-16 md:mb-24"
            style={{ fontWeight: 200, fontSize: "clamp(2.25rem, 5vw, 4.75rem)" }}
          >
            Three divisions.&nbsp;
            <span
              className="italic"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              One practice.
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/15">
          {divisions.map((d, i) => (
            <Reveal key={d.n} delay={i * 100}>
              <div className="group relative h-full p-8 md:p-10 md:border-r last:md:border-r-0 border-white/15 border-b md:border-b-0 transition-colors duration-500 hover:bg-white/[0.04]">
                <p className="text-white/45 text-xs tracking-[0.3em] mb-10 transition-colors duration-300 group-hover:text-white/80">
                  {d.n}
                </p>
                <h3 className="text-white font-light text-2xl md:text-[1.7rem] leading-snug mb-6 transition-transform duration-500 group-hover:translate-x-1.5">
                  {d.title}
                </h3>
                <p className="text-white/65 text-sm font-light leading-relaxed">{d.desc}</p>
                <span
                  className="absolute left-0 bottom-0 h-px bg-white/40 w-0 group-hover:w-full transition-all duration-700"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
