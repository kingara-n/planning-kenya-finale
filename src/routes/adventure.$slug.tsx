import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getAdventure, adventures } from "@/data/adventures";

export const Route = createFileRoute("/adventure/$slug")({
  loader: ({ params }) => {
    const post = getAdventure(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Story — Planning Kenya" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} — Planning Kenya` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: `${loaderData.title} — Planning Kenya` },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:image", content: loaderData.cover },
        { name: "twitter:image", content: loaderData.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="bg-background min-h-screen text-white">
      <Nav />
      <section className="px-8 md:px-16 pt-40 pb-32 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-thin mb-6">Story not found</h1>
        <Link to="/adventure" className="text-white/70 underline underline-offset-4">
          ← Back to Our Adventures
        </Link>
      </section>
      <Footer />
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="bg-background min-h-screen text-white">
      <Nav />
      <section className="px-8 md:px-16 pt-40 pb-32 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-thin mb-6">Something went wrong</h1>
        <p className="text-white/70 mb-8">{error.message}</p>
        <Link to="/adventure" className="text-white/70 underline underline-offset-4">
          ← Back to Our Adventures
        </Link>
      </section>
      <Footer />
    </main>
  ),
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData();
  const others = adventures.filter((a) => a.slug !== post.slug).slice(0, 2);

  return (
    <main className="bg-background min-h-screen text-white">
      <Nav />

      <article className="px-8 md:px-16 pt-32 md:pt-40 pb-20 max-w-4xl mx-auto">
        <Reveal>
          <Link
            to="/adventure"
            className="text-xs tracking-[0.3em] text-white/55 hover:text-white uppercase"
          >
            ← Our Adventures
          </Link>

          <p className="mt-10 text-xs tracking-[0.3em] text-white/55 uppercase">
            {post.date} · {post.location}
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-thin leading-[1.05]">
            {post.title}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/80 font-light leading-snug">
            {post.excerpt}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 overflow-hidden">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-[380px] md:h-[560px] object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 space-y-7 text-white/80 font-light leading-relaxed text-base md:text-lg">
            {post.body.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </article>

      {/* Gallery carousel */}
      <section className="px-8 md:px-16 pb-24">
        <Reveal>
          <div className="max-w-6xl mx-auto border-t border-hairline pt-12">
            <p className="text-xs tracking-[0.3em] text-white/55 uppercase mb-8">
              Gallery
            </p>
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {post.gallery.map((img: { src: string; caption: string }, i: number) => (
                  <CarouselItem key={i} className="md:basis-2/3 lg:basis-1/2">
                    <figure>
                      <div className="overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full h-[320px] md:h-[440px] object-cover"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="mt-4 text-sm text-white/60 font-light">
                        {img.caption}
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-6 bg-transparent border-white/30 text-white hover:bg-white/10" />
                <CarouselNext className="-right-6 bg-transparent border-white/30 text-white hover:bg-white/10" />
              </div>
            </Carousel>
          </div>
        </Reveal>
      </section>

      {/* More stories */}
      {others.length > 0 && (
        <section className="px-8 md:px-16 pb-32">
          <Reveal>
            <div className="max-w-6xl mx-auto border-t border-hairline pt-12">
              <p className="text-xs tracking-[0.3em] text-white/55 uppercase mb-10">
                Continue reading
              </p>
              <div className="grid md:grid-cols-2 gap-10">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    to="/adventure/$slug"
                    params={{ slug: p.slug }}
                    className="group block"
                  >
                    <div className="overflow-hidden mb-5">
                      <img
                        src={p.cover}
                        alt={p.title}
                        className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs tracking-[0.3em] text-white/55 mb-2">
                      {p.date.toUpperCase()}
                    </p>
                    <h3 className="text-2xl font-thin leading-tight">{p.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      )}

      <Footer />
    </main>
  );
}
