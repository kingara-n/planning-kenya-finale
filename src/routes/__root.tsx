import { Outlet, Link, createRootRoute, HeadContent, Scripts, ScrollRestoration, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Planning Kenya" },
      { name: "description", content: "Modern minimalist website for Planning Kenya, an architecture and interior design studio." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Planning Kenya" },
      { property: "og:description", content: "Modern minimalist website for Planning Kenya, an architecture and interior design studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Planning Kenya" },
      { name: "twitter:description", content: "Modern minimalist website for Planning Kenya, an architecture and interior design studio." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/It5zINaU38QjUwipHnz1nFWqxhx1/social-images/social-1778234096143-Planning_Logo_(white)_P.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/It5zINaU38QjUwipHnz1nFWqxhx1/social-images/social-1778234096143-Planning_Logo_(white)_P.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <style
          dangerouslySetInnerHTML={{
            __html: `html.lenis,html.lenis body{height:auto}.lenis.lenis-smooth{scroll-behavior:auto!important}.lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}.lenis.lenis-stopped{overflow:clip}.lenis.lenis-smooth iframe{pointer-events:none}`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer />
        <script src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js" defer />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener('load',function(){(function init(){if(!window.Lenis||!window.gsap||!window.ScrollTrigger){return setTimeout(init,50);}var gsap=window.gsap;gsap.registerPlugin(window.ScrollTrigger);var lenis=new window.Lenis({duration:1.2,easing:function(t){return Math.min(1,1.001-Math.pow(2,-10*t));},smoothWheel:true});lenis.on('scroll',window.ScrollTrigger.update);gsap.ticker.add(function(time){lenis.raf(time*1000);});gsap.ticker.lagSmoothing(0);window.__lenis=lenis;})();});`,
          }}
        />
      </body>
    </html>
  );
}

function RootComponent() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
