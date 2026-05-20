import * as Popover from "@radix-ui/react-popover";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { categories } from "@/data/portfolio";

type Props = {
  variant?: "nav" | "page";
};

export function PortfolioDropdown({ variant = "nav" }: Props) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isNav = variant === "nav";

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className={
            isNav
              ? "pk-glass-hover pk-glow-once inline-flex items-center gap-2 border border-white/70 rounded-full px-4 py-2 text-sm font-medium text-white/90 hover:text-white whitespace-nowrap"
              : "pk-glass-hover inline-flex items-center gap-3 border border-white/40 rounded-full px-7 py-3 text-white text-sm tracking-[0.18em] uppercase font-light backdrop-blur-sm bg-white/5"
          }
          aria-label="Browse portfolio categories"
        >
          <span>{isNav ? "Our Portfolio" : "Browse Categories"}</span>
          <span
            className="inline-block transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            aria-hidden
          >
            ▾
          </span>
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="center"
          sideOffset={12}
          className="z-[60] pk-portfolio-pop w-[min(90vw,420px)] rounded-2xl border border-white/15 bg-black/70 backdrop-blur-xl p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        >
          <ul className="flex flex-col">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/portfolio/$category"
                  params={{ category: c.slug }}
                  className="group flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-white/85 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm font-light tracking-wide">
                    {c.title}
                  </span>
                  <span className="text-white/40 group-hover:text-white/80 transition-colors">
                    →
                  </span>
                </Link>
              </li>
            ))}
            <li className="mt-1 border-t border-white/10 pt-1">
              <Link
                to="/portfolio"
                className="flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-xs tracking-[0.25em] uppercase"
              >
                <span>All Portfolio</span>
                <span>↗</span>
              </Link>
            </li>
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
