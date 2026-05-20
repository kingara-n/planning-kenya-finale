import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { adventures } from "@/data/adventures";

export const Route = createFileRoute("/adventure/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Our Adventures — Planning Kenya" },
      {
        name: "description",
        content:
          "News, stories and expeditions from PLANNING Systems Services Ltd — studio life, industry summits and the conversations shaping African design.",
      },
      { property: "og:title", content: "Our Adventures — Planning Kenya" },
      {
        property: "og:description",
        content: "News, stories and expeditions from PLANNING Systems Services Ltd.",
      },
    ],
  }),
});

function Page() {
  const [featured, ...rest] = adventures;

  return (
    <main className="bg-background min-h-screen text-white">
      <Nav />

      <section className="px-8 md:px-16 pt-40 pb-20 max-w-6xl">
        <Reveal>
          <p className="text-sm tracking-[0.3em] text-white/60 mb-6">
            OUR ADVENTURES — PLANNING NEWS FEED
          </p>
          <h1 className="text-5xl md:text-7xl font-thin leading-[1.05] mb-8">
            Stories from the studio.
          </h1>
          <p className="text-lg md:text-xl text-white/75 font-light max-w-2xl">
            Field notes, expeditions and industry conversations — the moments
            beyond the drawing board that shape how we design.
          </p>
        </Reveal>
      </section>

      {/* Featured */}
      <section className="px-8 md:px-16 pb-20">
        <Reveal delay={100}>
          <Link
            to="/adventure/$slug"
            params={{ slug: featured.slug }}
            className="group block max-w-6xl mx-auto border-t border-hairline pt-16"
          >
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-7 overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-5">
                <p className="text-xs tracking-[0.3em] text-white/55 mb-4">
                  FEATURED · {featured.date.toUpperCase()}
                </p>
                <h2 className="text-3xl md:text-4xl font-thin leading-[1.1] mb-5 transition-colors group-hover:text-white/90">
                  {featured.title}
                </h2>
                <p className="text-sm tracking-[0.2em] text-white/55 uppercase mb-8">
                  {featured.location}
                </p>
                <p className="text-white/75 font-light leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <span className="text-sm tracking-[0.25em] text-white/80 uppercase border-b border-white/40 pb-1 transition-colors group-hover:border-white">
                  Read story →
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* More posts */}
      <section className="px-8 md:px-16 pb-32">
        <div className="max-w-6xl mx-auto border-t border-hairline pt-16">
          <Reveal>
            <p className="text-white/50 text-xs tracking-[0.3em] mb-12">MORE STORIES</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {rest.map((post, idx) => (
              <Reveal key={post.slug} delay={idx * 50}>
                <Link
                  to="/adventure/$slug"
                  params={{ slug: post.slug }}
                  className="group block"
                >
                  <div className="overflow-hidden mb-6">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-[280px] md:h-[340px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs tracking-[0.3em] text-white/55 mb-3">
                    {post.date.toUpperCase()}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-thin leading-tight mb-3 transition-colors group-hover:text-white/90">
                    {post.title}
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <span className="text-xs tracking-[0.25em] text-white/70 uppercase border-b border-white/30 pb-1 transition-colors group-hover:border-white">
                    Read story →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
