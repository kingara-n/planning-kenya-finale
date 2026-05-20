import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ProjectSlideshow } from "@/components/site/ProjectSlideshow";
import { getProject } from "@/data/portfolio";

const formatProjectDetails = (text: string) => {
  // Clean up corrupted encoding characters from legacy imports
  let cleaned = text
    .replace(/\?o/g, '"')
    .replace(/\?\?/g, '"')
    .replace(/\?T/g, "'")
    .replace(/\?"/g, '—')
    .replace(/,/g, ' ')
    .replace(/\?/g, ' ');
  const blocks = cleaned.split('\n').map(s => s.trim()).filter(Boolean);
  const elements: React.ReactNode[] = [];
  
  blocks.forEach((block, index) => {
    // Split massive paragraphs into smaller neat chunks (3 sentences per paragraph max)
    const sentences = block.match(/[^.!?]+[.!?]+(?:\s|$)/g);
    if (sentences && sentences.length > 3) {
      let currentPara = "";
      for (let i = 0; i < sentences.length; i++) {
        currentPara += sentences[i];
        if ((i + 1) % 3 === 0 || i === sentences.length - 1) {
          elements.push(<p key={`${index}-${i}`} className="text-white/85 leading-[1.85]">{currentPara.trim()}</p>);
          currentPara = "";
        }
      }
    } else {
      elements.push(<p key={index} className="text-white/85 leading-[1.85]">{block}</p>);
    }
  });

  return elements;
};

export const Route = createFileRoute("/portfolio/$category/$project")({
  loader: ({ params }) => {
    const result = getProject(params.category, params.project);
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const c = loaderData?.category;
    const title = p ? `${p.title} — Planning Kenya` : "Project — Planning Kenya";
    const description = p?.description.slice(0, 155) ?? "Planning Kenya project.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(p?.img ? [{ property: "og:image", content: p.img }] : []),
        ...(c ? [{ property: "article:section", content: c.title }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <main className="bg-background min-h-screen text-white">
      <Nav />
      <section className="px-6 md:px-16 pt-40 pb-32 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.3em] text-white/60 mb-6">404</p>
        <h1 className="text-5xl font-thin mb-6">Project not found</h1>
        <Link to="/portfolio" className="text-white/80 underline underline-offset-4">
          Back to Portfolio
        </Link>
      </section>
      <Footer />
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="bg-background min-h-screen text-white">
      <Nav />
      <section className="px-6 md:px-16 pt-40 pb-32 max-w-3xl mx-auto">
        <h1 className="text-3xl font-thin mb-4">Something went wrong</h1>
        <p className="text-white/70">{error.message}</p>
      </section>
      <Footer />
    </main>
  ),
  component: Page,
});

function Page() {
  const { category, project } = Route.useLoaderData();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const cleanShortDesc = project.shortDescription
    .replace(/Explore the full design journey below\.?/gi, "")
    .trim();

  return (
    <main className="bg-background min-h-screen text-white">
      <Nav />

      {/* Hero: slideshow with overlaid sidecard on desktop, stacked card on mobile */}
      <section className="relative">
        <div className="relative">
          <ProjectSlideshow
            images={project.gallery}
            title={project.title}
            className="h-[68svh] lg:h-[100svh]"
            onOpenGallery={() => {
              setGalleryIndex(0);
              setGalleryOpen(true);
            }}
          />

          {/* Mobile/tablet: compact title block overlaid on bottom of slideshow */}
          <div className="lg:hidden pointer-events-none absolute inset-x-0 bottom-0 z-10 px-6 pb-24 pt-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/70 mb-3">
              <Link to="/portfolio" className="pointer-events-auto hover:text-white transition-colors">
                Portfolio
              </Link>
              <span className="mx-2 text-white/35">/</span>
              <Link
                to="/portfolio/$category"
                params={{ category: category.slug }}
                className="pointer-events-auto hover:text-white transition-colors"
              >
                {category.title}
              </Link>
            </p>
            <h1
              className="text-white font-extralight leading-[1.05]"
              style={{ fontWeight: 200, fontSize: "clamp(1.75rem, 6vw, 2.5rem)" }}
            >
              {project.title}
            </h1>
          </div>
        </div>

        {/* Sidecard — overlaid on desktop only */}
        <aside className="hidden lg:block lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-8 xl:right-16 lg:z-10 lg:w-[420px] xl:w-[460px]">
          <div className="lg:mx-0 lg:mt-0 relative z-10">
            <Reveal>
              <div className="rounded-3xl border border-white/15 bg-black/55 backdrop-blur-xl p-7 md:p-9 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <p className="text-[11px] tracking-[0.3em] uppercase text-white/65 mb-5">
                  <Link to="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                  <span className="mx-2 text-white/35">/</span>
                  <Link
                    to="/portfolio/$category"
                    params={{ category: category.slug }}
                    className="hover:text-white transition-colors"
                  >
                    {category.title}
                  </Link>
                </p>

                <h1
                  className="text-white font-extralight leading-[1.05] mb-5"
                  style={{ fontWeight: 200, fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
                >
                  {project.title}
                </h1>

                <p className="text-white/80 font-light leading-relaxed text-[15px] md:text-base mb-7">
                  {cleanShortDesc}
                </p>

                <a
                  href="#key-facts"
                  className="pk-glass-hover inline-flex items-center gap-3 border border-white/30 rounded-full px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase font-light text-white/85 hover:text-white"
                >
                  <span>Key Facts</span>
                  <span aria-hidden>↓</span>
                </a>
              </div>
            </Reveal>
          </div>
        </aside>
      </section>

      {/* Mobile/tablet: full description card below the hero */}
      <section className="lg:hidden px-6 md:px-12 pt-12 pb-4">
        <Reveal>
          <div className="rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-sm p-7 md:p-9">
            <p className="text-white/80 font-light leading-relaxed text-[15px] md:text-base mb-7">
              {cleanShortDesc}
            </p>
            <a
              href="#key-facts"
              className="pk-glass-hover inline-flex items-center gap-3 border border-white/30 rounded-full px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase font-light text-white/85 hover:text-white"
            >
              <span>Key Facts</span>
              <span aria-hidden>↓</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* Key facts */}
      <section
        id="key-facts"
        className="px-6 md:px-16 pt-10 lg:pt-12 pb-20 max-w-6xl mx-auto scroll-mt-24"
      >
        <Reveal>
          <p className="text-sm tracking-[0.3em] text-white/60 mb-10">KEY FACTS</p>
        </Reveal>
        <Reveal delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/15">
            <Fact label="Project Type" value={project.type} />
            <Fact label="Project Location" value={project.location} />
            <Fact label="Year of Completion" value={project.year} />
          </div>
        </Reveal>
      </section>

      {/* Full Description */}
      <section className="px-6 md:px-16 pb-20 max-w-4xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-6 mb-10">
            <p className="text-[11px] tracking-[0.3em] text-white/50 uppercase whitespace-nowrap">Project Details</p>
            <div className="h-px bg-white/10 w-full flex-1"></div>
          </div>
          <div className="space-y-8 md:space-y-10 font-light text-[15px] md:text-[17px]">
            {formatProjectDetails(project.description)}
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-16 pb-32 max-w-6xl mx-auto">
        <Link
          to="/portfolio/$category"
          params={{ category: category.slug }}
          className="pk-glass-hover inline-flex items-center gap-3 border border-white/30 rounded-full px-6 py-3 text-sm tracking-[0.18em] uppercase font-light text-white/85 hover:text-white"
        >
          <span>←</span>
          <span>Back to {category.title}</span>
        </Link>
      </section>

      {/* Pop-out Card Modal Gallery */}
      <DialogPrimitive.Root open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 pk-backdrop-blur" />
          <DialogPrimitive.Content className="pk-glass-pop fixed left-[50%] top-[50%] z-50 w-[94vw] max-w-6xl h-[88vh] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-between p-4 md:p-6 lg:p-7 pb-3 md:pb-4 lg:pb-4 rounded-3xl lg:rounded-[32px] outline-none">
            
            {/* Header */}
            <div className="flex items-center justify-between w-full">
              <DialogPrimitive.Title className="text-[9px] md:text-[10px] tracking-[0.3em] text-white/45 font-light uppercase pr-4 truncate">
                {project.title} — PLANNING KENYA
              </DialogPrimitive.Title>
              <DialogPrimitive.Close className="h-9 w-9 md:h-10 md:w-10 shrink-0 rounded-full border border-white/20 bg-white/5 text-white/80 hover:text-white flex items-center justify-center transition-colors pk-glass-hover focus:outline-none focus:ring-1 focus:ring-white/30">
                <X className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </div>

            {/* Image Slider */}
            <div className="relative flex-1 my-3 flex items-center justify-center overflow-hidden w-full h-full">
              <img
                src={project.gallery[galleryIndex]}
                alt={`${project.title} gallery image ${galleryIndex + 1}`}
                className="w-full h-full object-contain max-h-[62vh] md:max-h-[70vh] lg:max-h-[73vh] select-none rounded-2xl"
              />
            </div>

            {/* Footer Controls */}
            <div className="flex items-center justify-between w-full mt-auto">
              <button
                type="button"
                onClick={() => setGalleryIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
                className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/45 bg-white/5 text-white flex items-center justify-center pk-glass-hover focus:outline-none focus:ring-1 focus:ring-white/30"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-1.5 md:gap-2">
                {project.gallery.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setGalleryIndex(i)}
                    className="h-1 md:h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === galleryIndex ? 24 : 8,
                      backgroundColor: i === galleryIndex ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.3)",
                    }}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setGalleryIndex((prev) => (prev + 1) % project.gallery.length)}
                className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/45 bg-white/5 text-white flex items-center justify-center pk-glass-hover focus:outline-none focus:ring-1 focus:ring-white/30"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      <Footer />
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b md:border-b-0 md:border-r last:md:border-r-0 border-white/15 py-8 md:py-12 md:px-8 first:md:pl-0">
      <p className="text-[11px] tracking-[0.3em] uppercase text-white/55 mb-3">
        {label}
      </p>
      <p className="text-xl md:text-2xl font-extralight text-white">{value}</p>
    </div>
  );
}
