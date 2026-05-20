import { useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
  title: string;
  intervalMs?: number;
  className?: string;
  onOpenGallery?: () => void;
};

export function ProjectSlideshow({ images, title, intervalMs = 6000, className, onOpenGallery }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;
  const reducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = m.matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current || total < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, total, intervalMs]);

  const go = (dir: 1 | -1) =>
    setActive((i) => (i + dir + total) % total);

  return (
    <div
      className={`relative w-full overflow-hidden bg-background-deep ${className ?? "h-[100svh]"}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt={`${title} — image ${i + 1} of ${total}`}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-out"
          style={{ opacity: i === active ? 1 : 0 }}
        />
      ))}

      {/* Vignette / legibility gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/0 to-black/55 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[55%] bg-gradient-to-l from-black/55 via-black/15 to-transparent pointer-events-none hidden lg:block" />

      {/* Prev / Next & View Full Gallery */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20 flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => go(-1)}
          className="pk-glass-hover h-12 w-12 rounded-full border border-white/40 backdrop-blur bg-white/5 text-white flex items-center justify-center"
        >
          <span className="text-lg">←</span>
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => go(1)}
          className="pk-glass-hover h-12 w-12 rounded-full border border-white/40 backdrop-blur bg-white/5 text-white flex items-center justify-center"
        >
          <span className="text-lg">→</span>
        </button>
        {onOpenGallery && (
          <button
            type="button"
            onClick={onOpenGallery}
            className="pk-glass-hover h-12 px-6 rounded-full border border-white/40 backdrop-blur bg-white/5 text-white text-[11px] tracking-[0.18em] uppercase font-light flex items-center justify-center whitespace-nowrap animate-fade-in"
          >
            View Full Gallery
          </button>
        )}
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to image ${i + 1}`}
            onClick={() => setActive(i)}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === active ? 28 : 10,
              backgroundColor:
                i === active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-10 right-6 md:right-12 z-20 text-[11px] tracking-[0.3em] uppercase text-white/80 tabular-nums">
        {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </div>
  );
}
