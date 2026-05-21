import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/planning-logo-white.png";

const links = [
  { label: "Our Story", to: "/story" },
  { label: "Our Portfolio", to: "/portfolio" },
  { label: "Our Team", to: "/team" },
  { label: "Our Adventures", to: "/adventure" },
] as const;

function pressGlow(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.classList.remove("pk-press-glow");
  // force reflow so the animation can replay
  void el.offsetWidth;
  el.classList.add("pk-press-glow");
  window.setTimeout(() => el.classList.remove("pk-press-glow"), 1000);
}

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("open-menu")) {
      setIsMenuOpen(true);
    }
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      // If menu is open, don't hide the nav bar
      if (isMenuOpen) return;
      
      const y = window.scrollY;
      const vh = window.innerHeight;
      setScrolled(y > 40);
      if (y > vh * 0.9 && y > lastY) setHidden(true);
      else if (y < lastY - 4 || y < vh * 0.6) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  // Close menu when clicking anywhere outside of the mobile nav trigger wrapper
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleOutsideClick = (e: globalThis.MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".pk-mobile-nav-wrapper")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-transform duration-700"
      style={{
        transform: hidden ? "translate3d(0,-110%,0)" : "translate3d(0,0,0)",
        willChange: "transform",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 transition-opacity duration-700"
        style={{
          opacity: scrolled ? 0.55 : 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.32) 35%, rgba(0,0,0,0.12) 70%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 60%, transparent 100%)",
        }}
      />
      <nav className="relative pointer-events-auto px-6 md:px-10 py-5 flex items-center justify-between gap-4">
        <Link
          to="/"
          onClick={(e) => {
            setIsMenuOpen(false);
            pressGlow(e);
          }}
          className="shrink-0 flex items-center pk-glass-hover rounded-full"
        >
          <img src={logo} alt="Planning" className="h-7 md:h-8 w-auto" />
        </Link>
        
        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                onClick={pressGlow}
                className="pk-glass-hover inline-block border border-transparent rounded-full px-4 py-2 text-sm text-white/90 hover:text-white whitespace-nowrap font-light"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          onClick={pressGlow}
          className="pk-glass-hover hidden lg:inline-flex items-center border border-white/70 rounded-full px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl uppercase tracking-[0.22em] font-light text-white whitespace-nowrap"
        >
          Contact Us
        </Link>

        {/* Mobile & Tablet Dropdown Wrapper */}
        <div className="relative lg:hidden flex items-center pk-mobile-nav-wrapper">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="pk-glass-hover text-white/90 hover:text-white px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 text-xs tracking-widest uppercase cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span>Menu</span>
          </button>

          {/* Premium Popout Menu Card - Tight to the top right close button */}
          <div
            className={`absolute right-0 top-full mt-3 w-64 bg-black/95 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-md transition-all duration-300 origin-top-right transform ${
              isMenuOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col gap-3.5">
              {links.map((l, index) => (
                <li
                  key={l.label}
                  className="transition-all duration-300 transform"
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                    transform: isMenuOpen ? "translateX(0)" : "translateX(8px)",
                    opacity: isMenuOpen ? 1 : 0,
                  }}
                >
                  <Link
                    to={l.to}
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      pressGlow(e);
                    }}
                    className="text-white/80 hover:text-white font-light text-base tracking-wide block py-1 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li
                className="border-t border-white/10 pt-3 mt-1.5 transition-all duration-300 transform"
                style={{
                  transitionDelay: isMenuOpen ? `${links.length * 50}ms` : "0ms",
                  transform: isMenuOpen ? "translateX(0)" : "translateX(8px)",
                  opacity: isMenuOpen ? 1 : 0,
                }}
              >
                <Link
                  to="/contact"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    pressGlow(e);
                  }}
                  className="text-white hover:text-white/80 font-light text-base tracking-widest block py-1 transition-colors uppercase"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
