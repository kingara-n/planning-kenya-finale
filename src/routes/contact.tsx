import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Contact — Planning Kenya" },
      { name: "description", content: "Get in touch with Planning Systems Services Ltd in Nairobi for architecture, planning and interior commissions." },
      { property: "og:title", content: "Contact — Planning Kenya" },
      { property: "og:description", content: "Architecture, planning and interior commissions — Nairobi, Kenya." },
    ],
  }),
});

function Page() {
  return (
    <main className="bg-background min-h-screen text-white">
      <Nav />

      <section className="px-6 md:px-16 pt-40 pb-24 max-w-7xl mx-auto">
        <Reveal>
          <p className="text-sm tracking-[0.3em] text-white/60 mb-6">CONTACT</p>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="text-white font-extralight leading-[1.02] mb-6"
            style={{ fontWeight: 200, fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Let's build together.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-lg md:text-xl text-white/75 font-light max-w-2xl">
            Tell us a little about your project. We'll get back to you with the
            right team and the right next step.
          </p>
        </Reveal>
      </section>

      <section className="px-6 md:px-16 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-stretch">
          {/* Left — company info */}
          <Reveal>
            <div className="space-y-10">
              <InfoBlock label="Email">
                <a href="mailto:info@planning-kenya.com" className="hover:text-white">
                  info@planning-kenya.com
                </a>
              </InfoBlock>
              <InfoBlock label="Phone">
                <a href="tel:+254724255088" className="block hover:text-white">+254 724 255 088</a>
                <a href="tel:+254733555001" className="block hover:text-white">+254 733 555 001</a>
              </InfoBlock>
              <InfoBlock label="Office">
                Planning Systems Services Ltd
                <br />
                Rosslyn Riviera Mall, Level 2
                <br />
                Limuru Road, Nairobi, Kenya
              </InfoBlock>
              <InfoBlock label="Hours">
                Monday – Friday
                <br />
                09:00 – 17:00 EAT
              </InfoBlock>
            </div>
          </Reveal>

          {/* Right — multi-step form */}
          <Reveal delay={120} className="md:h-full">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/15 pt-6">
      <p className="text-[11px] tracking-[0.3em] uppercase text-white/55 mb-3">{label}</p>
      <div className="text-xl md:text-2xl font-extralight text-white/90 leading-snug">
        {children}
      </div>
    </div>
  );
}
