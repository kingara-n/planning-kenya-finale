import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { CtaLink } from "./CtaLink";
import { getProject } from "@/data/portfolio";

type FeaturedRef = {
  categorySlug: string;
  projectSlug: string;
  span: "tall" | "wide";
};

const featured: FeaturedRef[] = [
  { categorySlug: "residential", projectSlug: "karura-residence", span: "tall" },
  { categorySlug: "corporate-offices", projectSlug: "equatorial-tower", span: "tall" },
  { categorySlug: "hospitality", projectSlug: "enashipai-resort-spa", span: "wide" },
  { categorySlug: "masterplanning", projectSlug: "tatu-city-masterplan", span: "wide" },
];

export function Projects() {
  const items = featured
    .map((f) => {
      const r = getProject(f.categorySlug, f.projectSlug);
      return r ? { ...r, span: f.span } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  return (
    <section className="bg-background px-6 md:px-16 pt-28 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-white/60 text-xs tracking-[0.3em] mb-6">SELECTED WORK</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="text-white font-extralight leading-[1.02] mb-16 md:mb-24"
            style={{ fontWeight: 200, fontSize: "clamp(2.25rem, 5vw, 4.75rem)" }}
          >
            Projects shaping
            <br />
            the East African horizon.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {items.map((it, i) => (
            <Reveal
              key={it.project.slug}
              delay={i * 90}
              className="md:col-span-6"
            >
              <ProjectCard
                categorySlug={it.category.slug}
                projectSlug={it.project.slug}
                title={it.project.title}
                type={it.project.type}
                location={it.project.location}
                year={it.project.year}
                img={it.project.img}
                span={it.span}
                index={i}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 md:mt-24 flex justify-center">
          <Reveal delay={120}>
            <CtaLink to="/portfolio" size="xl">View More Projects</CtaLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  categorySlug,
  projectSlug,
  title,
  type,
  location,
  year,
  img,
  span,
  index,
}: {
  categorySlug: string;
  projectSlug: string;
  title: string;
  type: string;
  location: string;
  year: string;
  img: string;
  span: "tall" | "wide";
  index: number;
}) {
  const tall = span === "tall";
  return (
    <Link
      to="/portfolio/$category/$project"
      params={{ category: categorySlug, project: projectSlug }}
      className="pk-project group relative block overflow-hidden rounded-2xl bg-background-deep"
      style={{ aspectRatio: tall ? "4 / 5" : "16 / 10" }}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="pk-project-img absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-6">
        <div className="pk-project-text">
          <p className="text-white/70 text-[11px] tracking-[0.3em] uppercase mb-2">
            {String(index + 1).padStart(2, "0")} · {type}
          </p>
          <h3 className="text-white font-light text-2xl md:text-3xl leading-tight">
            {title}
          </h3>
          <p className="text-white/60 text-sm mt-1 font-light">
            {location} · {year}
          </p>
        </div>
        <span className="pk-project-arrow shrink-0 h-12 w-12 rounded-full border border-white/50 text-white flex items-center justify-center backdrop-blur-md bg-white/5">
          <span className="text-lg">↗</span>
        </span>
      </div>
    </Link>
  );
}
