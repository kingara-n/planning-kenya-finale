import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { PortfolioDropdown } from "@/components/site/PortfolioDropdown";
import { categories } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Our Portfolio — Planning Kenya" },
      {
        name: "description",
        content:
          "Selected works by Planning Systems Services Ltd across heritage, hospitality, corporate, masterplanning, retail, education, residential and more.",
      },
      { property: "og:title", content: "Our Portfolio — Planning Kenya" },
      {
        property: "og:description",
        content:
          "Architecture, urban design and interiors across ten disciplines, shaped over four decades of practice in East Africa.",
      },
    ],
  }),
});

function Page() {
  return (
    <main className="bg-background min-h-screen text-white">
      <Nav />

      <section className="px-6 md:px-16 pt-40 pb-16 max-w-7xl mx-auto">
        <Reveal>
          <p className="text-sm tracking-[0.3em] text-white/60 mb-6">PORTFOLIO</p>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="text-white font-extralight leading-[1.02] mb-8"
            style={{ fontWeight: 200, fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Ten disciplines.
            <br />
            One body of work.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-lg md:text-xl text-white/75 font-light max-w-2xl">
            Four decades of architecture, planning and interior design across
            East Africa — organised by the practice areas that shape our work.
          </p>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Reveal delay={200}>
            <PortfolioDropdown variant="page" />
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <CategoryCard
                slug={c.slug}
                title={c.title}
                index={i}
                img={c.projects[0].img}
                count={c.projects.length}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CategoryCard({
  slug,
  title,
  index,
  img,
  count,
}: {
  slug: string;
  title: string;
  index: number;
  img: string;
  count: number;
}) {
  return (
    <Link
      to="/portfolio/$category"
      params={{ category: slug }}
      className="pk-project group relative block overflow-hidden rounded-3xl bg-background-deep"
      style={{ aspectRatio: "4 / 5" }}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="pk-project-img absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex items-end justify-between gap-6">
        <div className="pk-project-text">
          <p className="text-white/70 text-[11px] tracking-[0.3em] uppercase mb-3">
            {String(index + 1).padStart(2, "0")} · {count} Projects
          </p>
          <h3 className="text-white font-extralight text-3xl md:text-4xl leading-tight">
            {title}
          </h3>
        </div>
        <span className="pk-project-arrow shrink-0 h-14 w-14 rounded-full border border-white/50 text-white flex items-center justify-center backdrop-blur-md bg-white/5">
          <span className="text-xl">↗</span>
        </span>
      </div>
    </Link>
  );
}
