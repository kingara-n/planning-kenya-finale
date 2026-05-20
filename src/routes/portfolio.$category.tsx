import { createFileRoute, Outlet, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { getCategory } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  notFoundComponent: () => (
    <main className="bg-background min-h-screen text-white">
      <Nav />
      <section className="px-6 md:px-16 pt-40 pb-32 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.3em] text-white/60 mb-6">404</p>
        <h1 className="text-5xl font-thin mb-6">Category not found</h1>
        <Link to="/portfolio" className="text-white/80 underline underline-offset-4">
          Back to Portfolio
        </Link>
      </section>
      <Footer />
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="bg-background min-h-screen text-white">
      <Nav />
      <section className="px-6 md:px-16 pt-40 pb-32 max-w-3xl mx-auto">
        <h1 className="text-3xl font-thin mb-4">Something went wrong</h1>
        <p className="text-white/70">{error.message}</p>
      </section>
      <Footer />
    </main>
  ),
  component: () => <Outlet />,
});
