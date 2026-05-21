import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Projects } from "@/components/site/Projects";
import { Divisions } from "@/components/site/Divisions";
import { Sectors } from "@/components/site/Sectors";
import { Footer } from "@/components/site/Footer";
import { ContactCta } from "@/components/site/ContactCta";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Planning Kenya — Architecture & Interior Design Studio" },
      {
        name: "description",
        content:
          "Planning Systems Services Ltd — a Nairobi-based architecture, land use planning and urban design firm shaping the East African horizon since 1978.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Divisions />
      <Projects />
      <Sectors />
      <Stats />
      <ContactCta />
      <Footer />
    </main>
  );
}
