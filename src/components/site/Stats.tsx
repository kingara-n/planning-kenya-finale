import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: number; suffix: string; description: string };

const stats: Stat[] = [
  { label: "PROJECTS", value: 120, suffix: "+", description: "Residential and commercial projects delivered with attention to detail." },
  { label: "CLIENTS", value: 90, suffix: "+", description: "Clients who trust us to shape spaces that reflect their identity." },
  { label: "YEARS", value: 47, suffix: "+", description: "Years of hands-on experience in architecture and urban design." },
  { label: "DESIGN SOLUTIONS", value: 100, suffix: "%", description: "Delivering diverse architectural solutions, showcasing our expertise and creativity." },
];

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return n;
}

function StatCell({ s, visible }: { s: Stat; visible: boolean }) {
  const n = useCountUp(s.value, visible);
  return (
    <div
      className={`px-6 md:px-12 py-12 md:py-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <p className="text-white/60 uppercase text-xs" style={{ letterSpacing: "0.2em" }}>
        {s.label}
      </p>
      <p
        className="text-white mt-6 leading-none"
        style={{ fontWeight: 200, fontSize: "clamp(3.5rem, 6vw, 6rem)" }}
      >
        {n}
        {s.suffix}
      </p>
      <p className="text-white/70 text-sm mt-6 max-w-[220px] leading-relaxed font-light">
        {s.description}
      </p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section
      ref={ref}
      className="bg-background border-y border-hairline"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-hairline border-t md:border-0 border-hairline max-md:[&>*+*]:border-t max-md:[&>*+*]:border-hairline">
        {stats.map((s) => (
          <StatCell key={s.label} s={s} visible={visible} />
        ))}
      </div>
    </section>
  );
}
