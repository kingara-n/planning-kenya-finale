import { Facebook, Linkedin, Instagram } from "lucide-react";

const socials = [
  { Icon: Facebook, href: "https://www.facebook.com/PLANNING.Ke/", label: "Facebook" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/planning-systems-services-ltd-932ba8146/", label: "LinkedIn" },
  { Icon: Instagram, href: "https://instagram.com/planningsske", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-background-deep px-8 md:px-16 pt-20 pb-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        <div>
          <p className="text-white font-medium tracking-[0.25em]">PLANNING</p>
          <p className="text-white/60 text-sm mt-3 font-light max-w-xs">
            We are crafting spaces and creating meaningful experiences through the Power of Architecture.
          </p>
        </div>
        <div className="flex justify-center gap-4 md:mt-2">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="pk-glass-hover h-11 w-11 rounded-full border border-white/40 flex items-center justify-center text-white"
              aria-label={label}
            >
              <Icon size={18} strokeWidth={1.75} />
            </a>
          ))}
        </div>
        <div className="md:text-right">
          <p className="text-white/60 text-sm font-light space-y-1">
            <a href="mailto:info@planning-kenya.com" className="block hover:text-white transition-colors">
              info@planning-kenya.com
            </a>
            <a href="tel:+254724255088" className="block hover:text-white transition-colors">
              +254 724 255 088 | +254 733 555 001
            </a>
            <span className="block mt-2">
              Rosslyn Riviera Mall, Level 2<br />
              Limuru Road, Nairobi, Kenya
            </span>
          </p>
        </div>
      </div>
      <div className="border-t border-hairline mt-16 pt-6">
        <p className="text-center text-white/50 text-xs font-light">
          © 2026 PLANNING Systems Services Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
