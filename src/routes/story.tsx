import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/CtaLink";
import heroImg from "@/assets/hero-nairobi.jpg";
import tower from "@/assets/project-tower.jpg";

export const Route = createFileRoute("/story")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Our Story — Planning Kenya" },
      {
        name: "description",
        content:
          "Founded in 1978, Planning Systems Services Ltd has shaped East Africa's skyline for over four decades through architecture, planning and urban design.",
      },
      { property: "og:title", content: "Our Story — Planning Kenya" },
      {
        property: "og:description",
        content:
          "Four decades of design — from a small Nairobi balcony in 1978 to landmarks defining the Kenyan horizon.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
});

const milestones = [
  { year: "1972", title: "Serena Paraa & Chobe Lodges (Uganda)", body: "Jim Archer designs award-winning, landscape-integrated lodges in Uganda's national parks, establishing the regional ethos of architectural conservation and sustainable hospitality." },
  { year: "1978", title: "Founded in Nairobi", body: "Jim Archer and Trevor Andrews open a small office on a balcony above a used-car garage in Nairobi's Industrial Area on 1st May." },
  { year: "1980", title: "Lake View Estate", body: "Win the architectural competition for the acclaimed residential development nestled in the trees of Spring Valley, Lower Kabete." },
  { year: "1988", title: "PLANNING House", body: "Relocate to PLANNING House on Lower Kabete Road — home to the studio for the next 35 years." },
  { year: "1990s", title: "Fedha Towers & Lonrho House", body: "First high-rise commission for the East African Building Society sets the template for landmarks that redefine the Nairobi skyline." },
  { year: "1993", title: "Planning Interiors Limited", body: "Launch a dedicated interiors practice to meet rising demand for specialised design." },
  { year: "2000s", title: "Nation Centre & I&M Bank Tower", body: "Take over Nation Centre from the late Henning Larsen and deliver landmark commercial towers alongside the Mombasa Serena Beach Hotel." },
  { year: "2012", title: "World Design Impact Prize", body: "The Community Cooker initiative is awarded the inaugural prize for waste-to-energy innovation." },
  { year: "2020s", title: "Trade & Development Bank HQ", body: "Three-sky-garden TDB headquarters on Lenana Road, Four Points by Sheraton JKIA and the Pangani Housing project mark a new era of resilient, mixed-income design." },
  { year: "2024", title: "Zanzibar Coastal Resorts (Tanzania)", body: "Complete landmark sustainable luxury hospitality projects on the Zanzibar coastline, including Bweju and Mangapwani developments." },
  { year: "Today", title: "Third Generation", body: "Led by Managing Director Henry Musangi across Nairobi and Mombasa, focused on resilience, climate-conscious design and urban transformation." },
];

const landmarks = [
  { name: "Lonrho House", city: "Nairobi" },
  { name: "Nation Centre", city: "Nairobi" },
  { name: "I&M Bank Tower", city: "Nairobi" },
  { name: "KCB Pension Tower", city: "Nairobi" },
  { name: "Fedha Towers", city: "Nairobi" },
  { name: "Trade & Development Bank HQ", city: "Nairobi" },
  { name: "Mombasa Serena Beach Hotel & Spa", city: "Mombasa" },
  { name: "Four Points by Sheraton JKIA", city: "Nairobi" },
];

function Page() {
  return (
    <main className="bg-background min-h-screen text-white overflow-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-end px-8 md:px-16 pt-40 pb-20 md:pb-28 overflow-hidden">
        <img
          src={heroImg}
          alt="Nairobi skyline"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="relative max-w-6xl">
          <Reveal>
            <p className="text-white/60 text-xs tracking-[0.3em] mb-8">OUR STORY</p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="text-white font-extralight leading-[1.02]"
              style={{ fontWeight: 200, fontSize: "clamp(2.75rem, 7vw, 6.5rem)" }}
            >
              Four decades of
              <br />
              design,{" "}
              <span
                className="italic"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                shaping a skyline.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-10 text-white/75 text-lg md:text-2xl font-light max-w-2xl leading-snug">
              From a small balcony above a Nairobi garage in 1978 to a multi-disciplinary
              practice defining the East African horizon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Origin */}
      <section className="px-8 md:px-16 py-28 md:py-40 border-t border-hairline">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="text-white/60 text-xs tracking-[0.3em]">01 — ORIGINS</p>
            <h2
              className="mt-6 text-white font-extralight leading-[1.05]"
              style={{ fontWeight: 200, fontSize: "clamp(2rem, 3.6vw, 3.25rem)" }}
            >
              The unlikeliest
              <br />
              of places.
            </h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6 space-y-8">
            <Reveal delay={120}>
              <p className="text-white text-xl md:text-2xl font-light leading-snug">
                Our story began 45 years ago in the unlikeliest of places.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="text-white/70 leading-relaxed font-light">
                PLANNING Systems Services Ltd is a prominent architectural firm founded in 1978 in Nairobi, Kenya. Our expertise lies in architecture, land use planning, and urban design. We believe in the transformative power of design to craft captivating human experiences within sustainable and vibrant buildings and spaces.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <p className="text-white/70 leading-relaxed font-light">
                Our approach is rooted in our clients' values and facility requirements — harnessing the unique opportunities of each project site while remaining mindful of practical considerations that drive project economies. This philosophy fosters ongoing dialogue and collaboration from initial concept to project realisation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Milestone moments */}
      <section className="px-8 md:px-16 py-28 md:py-40 border-t border-hairline">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-white/60 text-xs tracking-[0.3em] mb-6">02 — MILESTONE MOMENTS</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="text-white font-extralight leading-[1.02] mb-20 max-w-4xl"
              style={{ fontWeight: 200, fontSize: "clamp(2.25rem, 5vw, 4.75rem)" }}
            >
              Underdogs who
              <br />
              redefined a skyline.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
            <Reveal delay={120}>
              <p className="text-white/75 leading-relaxed font-light">
                Over four decades, we have shaped Nairobi's skyline with iconic high-rise projects including the Kenya Commercial Bank Pension Tower, Lonrho House, and Investments and Mortgages Bank. Our hospitality portfolio includes internationally acclaimed projects such as the Four Points Sheraton JKIA, Mombasa Serena Beach Hotel and Spa, and Windsor Golf Hotel and Country Club.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="text-white/75 leading-relaxed font-light">
                In the residential realm, we are known for award-winning developments like Lakeview Estate, Imara Daima Housing Estate, and Komarock Phase I. We have a well-established track record of delivering quality projects, regardless of size, within budget and on schedule.
              </p>
            </Reveal>
          </div>

          {/* Landmarks strip */}
          <Reveal delay={120}>
            <p className="text-white/50 text-xs tracking-[0.3em] mb-8">SELECTED LANDMARKS</p>
          </Reveal>
          <ul className="border-t border-hairline mb-24">
            {landmarks.map((l, i) => (
              <Reveal key={l.name} delay={i * 80}>
                <li className="border-b border-hairline py-6 md:py-8 flex items-baseline justify-between gap-6 group">
                  <span className="text-white/40 text-sm font-light tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex-1 text-white font-extralight leading-none transition-transform duration-500 group-hover:translate-x-2"
                    style={{ fontWeight: 200, fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
                  >
                    {l.name}
                  </span>
                  <span className="text-white/50 text-xs tracking-[0.25em] uppercase">{l.city}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          {/* Timeline */}
          <Reveal>
            <p className="text-white/50 text-xs tracking-[0.3em] mb-10">TIMELINE</p>
          </Reveal>
          <ol className="relative border-l border-hairline pl-8 md:pl-12 space-y-14">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 100}>
                <li className="relative">
                  <span className="absolute -left-[37px] md:-left-[49px] top-2 h-2.5 w-2.5 rounded-full bg-white" />
                  <p className="text-white/60 text-xs tracking-[0.3em] mb-3">{m.year}</p>
                  <h3
                    className="text-white font-extralight leading-tight mb-3"
                    style={{ fontWeight: 200, fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)" }}
                  >
                    {m.title}
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed max-w-2xl">{m.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Today */}
      <section className="relative px-8 md:px-16 py-28 md:py-40 border-t border-hairline overflow-hidden">
        <img
          src={tower}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="text-white/60 text-xs tracking-[0.3em]">03 — OUR STORY TODAY</p>
            <h2
              className="mt-6 text-white font-extralight leading-[1.05]"
              style={{ fontWeight: 200, fontSize: "clamp(2rem, 3.6vw, 3.25rem)" }}
            >
              A third
              <br />
              generation.
            </h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6 space-y-8">
            <Reveal delay={120}>
              <p className="text-white text-xl md:text-2xl font-light leading-snug">
                Now in our third generation of leadership, under Managing Director
                Henry Musangi, we continue to expand our impact through our offices in
                Nairobi and Mombasa.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="text-white/70 leading-relaxed font-light">
                Our focus has evolved to meet the challenges of a changing world, with an
                emphatic focus on resilience, climate change, and urban transformation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-8 md:px-16 py-28 md:py-40 border-t border-hairline">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <Reveal className="md:col-span-7">
            <p className="text-white/60 text-xs tracking-[0.3em] mb-6">04 — PHILOSOPHY</p>
            <h2
              className="text-white font-extralight leading-[1.02]"
              style={{ fontWeight: 200, fontSize: "clamp(2rem, 4.4vw, 4rem)" }}
            >
              Design that serves{" "}
              <span
                className="italic"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                every community.
              </span>
            </h2>
          </Reveal>
          <div className="md:col-span-5 space-y-6">
            <Reveal delay={120}>
              <p className="text-white/75 leading-relaxed font-light">
                From large-scale master planning and the regeneration of the Nairobi
                Rivers to delivering dignified, low-income housing through projects like
                Pangani, we believe design can create sustainable, vibrant spaces for all
                socio-economic groups.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="text-white/70 leading-relaxed font-light">
                We remain dedicated to a philosophy that balances client requirements
                with a high regard for nature — ensuring every project provides the best
                possible value to the community.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-20 max-w-7xl mx-auto">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16 / 10" }}>
              <img
                src="/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/LONRHO HOUSE/IMAGES/LONRHO 3.jpg"
                alt="Lonrho House"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-6 left-6 text-white font-light text-xl">Lonrho House, Nairobi</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16 / 10" }}>
              <img
                src="/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/01 - Exterior View over the Pool(2).jpg"
                alt="Mombasa Serena Beach Hotel & Spa"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-6 left-6 text-white font-light text-xl">Mombasa Serena Beach Hotel & Spa</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 md:mt-28 flex justify-center">
          <Reveal delay={120}>
            <CtaLink to="/portfolio" size="xl">View Our Work</CtaLink>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
