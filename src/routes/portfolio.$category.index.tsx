import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { PortfolioDropdown } from "@/components/site/PortfolioDropdown";
import { getCategory, type Project } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/$category/")({
  loader: ({ params }) => {
    const category = getCategory(params.category)!;
    return { category };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    const title = c ? `${c.title} — Planning Kenya` : "Portfolio — Planning Kenya";
    const description = c?.blurb ?? "Planning Kenya portfolio category.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { category } = Route.useLoaderData();

  return (
    <main className="bg-background min-h-screen text-white">
      <Nav />

      <section className="px-6 md:px-16 pt-40 pb-12 max-w-7xl mx-auto">
        <Reveal>
          <p className="text-sm tracking-[0.3em] text-white/60 mb-6">
            <Link to="/portfolio" className="hover:text-white transition-colors">
              PORTFOLIO
            </Link>
            <span className="mx-3 text-white/30">/</span>
            <span>{category.title.toUpperCase()}</span>
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="text-white font-extralight leading-[1.02] mb-8"
            style={{ fontWeight: 200, fontSize: "clamp(2.25rem, 5.5vw, 5rem)" }}
          >
            {category.title}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-lg md:text-xl text-white/75 font-light max-w-2xl">
            {category.blurb}
          </p>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Reveal delay={200}>
            <PortfolioDropdown variant="page" />
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-32 max-w-7xl mx-auto space-y-10 md:space-y-14">
        {category.projects.map((p: Project, i: number) => (
          <Reveal key={p.title} delay={i * 90}>
            <ProjectHero p={p} index={i} categorySlug={category.slug} />
          </Reveal>
        ))}
      </section>

      <section className="px-6 md:px-16 pb-32 max-w-7xl mx-auto">
        <Link
          to="/portfolio"
          className="pk-glass-hover inline-flex items-center gap-3 border border-white/30 rounded-full px-6 py-3 text-sm tracking-[0.18em] uppercase font-light text-white/85 hover:text-white"
        >
          <span>←</span>
          <span>All Categories</span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}

function ProjectHero({
  p,
  index,
  categorySlug,
}: {
  p: Project;
  index: number;
  categorySlug: string;
}) {
  return (
    <Link
      to="/portfolio/$category/$project"
      params={{ category: categorySlug, project: p.slug }}
      className="pk-project group relative block overflow-hidden rounded-3xl bg-background-deep"
      style={{ aspectRatio: "16 / 9" }}
    >
      <img
        src={p.img}
        alt={p.title}
        loading="lazy"
        className="pk-project-img absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex items-end justify-between gap-6">
        <div className="pk-project-text">
          <p className="text-white/70 text-[11px] tracking-[0.3em] uppercase mb-3">
            {String(index + 1).padStart(2, "0")} · {p.location} · {p.year}
          </p>
          <h2 className="text-white font-extralight text-3xl md:text-5xl leading-tight">
            {p.title}
          </h2>
        </div>
        <span className="pk-project-arrow shrink-0 h-14 w-14 rounded-full border border-white/50 text-white flex items-center justify-center backdrop-blur-md bg-white/5">
          <span className="text-xl">↗</span>
        </span>
      </div>
    </Link>
  );
}
