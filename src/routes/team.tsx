import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Team } from "@/components/site/Team";

export const Route = createFileRoute("/team")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Our Team — Planning Kenya" },
      { name: "description", content: "Meet the architects, planners and designers behind Planning Systems Services Ltd." },
    ],
  }),
});

function Page() {
  return (
    <main className="bg-background min-h-screen text-white">
      <Nav />
      <Team />
      <Footer />
    </main>
  );
}
