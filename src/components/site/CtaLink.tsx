import { Link } from "@tanstack/react-router";

type Size = "default" | "xl" | "2xl";

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
  size?: Size;
};

const sizeClasses: Record<Size, string> = {
  default: "px-7 py-3 text-sm tracking-[0.18em] gap-3",
  xl: "px-10 py-5 text-base md:text-lg tracking-[0.22em] gap-4",
  "2xl": "px-14 py-7 text-lg md:text-2xl tracking-[0.26em] gap-5",
};

export function CtaLink({ to, children, className = "", size = "default" }: Props) {
  return (
    <Link
      to={to}
      className={`pk-glass-hover pk-glow-once inline-flex items-center rounded-full border border-white/30 text-white uppercase font-light backdrop-blur-sm bg-white/5 ${sizeClasses[size]} ${className}`}
    >
      <span>{children}</span>
      <span className="leading-none">→</span>
    </Link>
  );
}
