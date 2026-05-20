import * as React from "react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  y = 28,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const Tag = as as any;
  return (
    <Tag
      ref={ref as any}
      className={className}
      style={{
        transform: shown ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
        opacity: shown ? 1 : 0,
        filter: shown ? "blur(0px)" : "blur(6px)",
        transition: `transform 1.1s cubic-bezier(.2,.7,.15,1) ${delay}ms, opacity 1.1s cubic-bezier(.2,.7,.15,1) ${delay}ms, filter 1.1s ease ${delay}ms`,
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </Tag>
  );
}
