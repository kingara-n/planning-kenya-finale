import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/csr")({
  component: Page,
  head: () => ({
    meta: [
      { title: "CSR — Planning Kenya" },
      { name: "description", content: "Our corporate social responsibility commitments — community, sustainability and the future of Kenyan cities." },
    ],
  }),
});

function Page() {
  return (
    <main className="bg-background min-h-screen text-white">
      <Nav />
      <section className="px-8 md:px-16 pt-40 pb-32 max-w-6xl">
        <p className="text-sm tracking-[0.3em] text-white/60 mb-6">CSR</p>
        <h1 className="text-5xl md:text-7xl font-thin leading-[1.05] mb-8">Designing for community.</h1>
        <p className="text-lg md:text-xl text-white/75 font-light max-w-2xl">
          Our commitment to community, sustainability and the future of Kenyan cities.
        </p>
      </section>
      <Footer />
    </main>
  );
}
