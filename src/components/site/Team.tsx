import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Linkedin, X } from "lucide-react";
import { Reveal } from "./Reveal";

type Member = { name: string; role: string; img: string; bio: string; zoom?: boolean };
type Dept = { title: string; members: Member[] };

const departments: Dept[] = [
  {
    title: "Architectural Staff",
    members: [
      {
        name: "Henry Musangi",
        role: "Managing Director",
        img: "/assets/images/staff/HENRY-MUSANGI-Copy.jpg",
        bio: "Henry leads Planning Systems Services with three decades of experience shaping civic, commercial and residential architecture across East Africa. He balances rigorous planning discipline with a quiet, contextual design sensibility, guiding the practice's long-term vision and client relationships.",
      },
      {
        name: "Mumo Musuva",
        role: "Director",
        img: "/assets/images/staff/MUMO-MUSUVA-min.jpg",
        bio: "Mumo brings deep expertise in large-scale architectural delivery, overseeing complex briefs from concept through completion. His work focuses on integrating environmental responsibility with the cultural and material context of each site.",
      },
      {
        name: "Susan Makhulo",
        role: "Studio Director",
        img: "/assets/images/staff/sus-min.jpg",
        bio: "Susan directs the studio's day-to-day creative output, ensuring every project meets the practice's standards for craft and clarity. She mentors emerging architects and shapes the design culture across all four divisions.",
      },
      {
        name: "Michael Kinyumu",
        role: "Associate Director",
        img: "/assets/images/staff/MICHAELKINYUMU-min.jpg",
        bio: "Michael partners with clients on commercial and institutional projects, translating ambitious programmes into buildable, beautifully detailed architecture. His leadership pairs technical precision with a calm, collaborative approach.",
      },
      {
        name: "Felix Kawuondi",
        role: "Licentiate Architect",
        img: "/assets/images/staff/felix.png",
        bio: "Felix contributes to design development and documentation across a range of residential and mixed-use projects. He is interested in the intersection of vernacular building traditions and contemporary practice.",
        zoom: true,
      },
    ],
  },
  {
    title: "Arts & Graphics",
    members: [
      {
        name: "William Omondi",
        role: "Graphics Lead",
        img: "/assets/images/staff/William-Omondi2-min.jpg",
        bio: "William shapes how Planning Systems' work is communicated — from project visualisations and presentation books to wayfinding and brand systems. His craft brings precision and warmth to every visual the studio sends out.",
      },
    ],
  },
  {
    title: "Finance",
    members: [
      {
        name: "Moses Kinyanjui",
        role: "Director of Finance and Operations",
        img: "/assets/images/staff/Moses-min.jpg",
        bio: "Moses oversees the firm's financial strategy and operational health, keeping projects resourced and the business resilient. His steady stewardship gives the design teams the freedom to focus on the work.",
      },
      {
        name: "Dennis Kirimi",
        role: "Senior Accountant",
        img: "/assets/images/staff/Dennis-Kirimi-Copy-scaled.jpg",
        bio: "Dennis manages the day-to-day accounting and reporting that keep every project on solid financial footing. He is known across the studio for his accuracy and quiet reliability.",
      },
    ],
  },
  {
    title: "Human Resources & Administration",
    members: [
      {
        name: "Victoria Awiti",
        role: "Associate Director, HR",
        img: "/assets/images/staff/Victoria-Awiti-Copy.jpg",
        bio: "Victoria leads people and culture at Planning Systems, building the structures that support a multidisciplinary studio. Her work spans recruitment, professional development and the rituals that keep the team connected.",
      },
      {
        name: "Ednah Mueni",
        role: "Administrative Assistant",
        img: "/assets/images/staff/ednah.png",
        bio: "Ednah keeps the studio running smoothly, coordinating logistics, hospitality and the small daily details that make the office feel like a workshop.",
        zoom: true,
      },
    ],
  },
  {
    title: "Information Technology",
    members: [
      {
        name: "Chris Sigoli",
        role: "Head of Digital",
        img: "/assets/images/staff/Chris-min.jpg",
        bio: "Chris leads the firm's digital infrastructure and design technology — from BIM workflows and visualisation pipelines to the systems that connect the studio's four divisions. His work quietly powers everything the practice ships.",
      },
      {
        name: "Eric Ngugi",
        role: "Assistant IT",
        img: "/assets/images/staff/2023-09-29/Eric Ngugi.png",
        bio: "Eric supports the studio's hardware, software and design-tech needs, keeping every workstation, plotter and server humming. He is the team's first call when technology gets in the way of design.",
      },
    ],
  },
];

export function Team() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <section className="px-6 md:px-12 lg:px-20 pt-36 md:pt-44 pb-32 max-w-[1400px] mx-auto">
      <Reveal>
        <p className="text-xs tracking-[0.32em] text-white/55 mb-6">OUR TEAM</p>
      </Reveal>
      <Reveal delay={120}>
        <h1 className="text-5xl md:text-7xl font-thin leading-[1.02] tracking-tight max-w-3xl text-white">
          The people behind the work.
        </h1>
      </Reveal>
      <Reveal delay={240}>
        <p className="text-base md:text-lg text-white/70 font-light max-w-xl mt-8">
          Architects, planners, interior designers and engineers united by a love of
          considered space — organised across five active divisions.
        </p>
      </Reveal>

      <div className="mt-24 space-y-20">
        {departments.map((d, di) => (
          <div
            key={d.title}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 border-t border-white/12 pt-12"
          >
            <div className="lg:col-span-3">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-thin leading-tight tracking-tight text-white">
                  {d.title}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-3 text-xs tracking-[0.24em] text-white/45 uppercase">
                  {String(di + 1).padStart(2, "0")} / {String(departments.length).padStart(2, "0")}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {d.members.map((m, i) => (
                <MemberCard key={m.name} m={m} delay={i * 90} onClick={() => setSelectedMember(m)} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <DialogPrimitive.Root
        open={!!selectedMember}
        onOpenChange={(open) => !open && setSelectedMember(null)}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-[100] pk-backdrop-blur" />
          <DialogPrimitive.Content 
            className="pk-glass-pop fixed left-1/2 top-1/2 z-[101] w-[92vw] max-w-3xl rounded-3xl p-6 md:p-8 outline-none -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto pk-no-scrollbar"
            aria-describedby={undefined}
          >
            {selectedMember && <MemberDialog m={selectedMember} onClose={() => setSelectedMember(null)} />}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
}

function MemberCard({ m, delay, onClick }: { m: Member; delay: number; onClick: () => void }) {
  return (
    <Reveal delay={delay} y={24} className="group">
      <button
        type="button"
        onClick={onClick}
        aria-label={`Open profile for ${m.name}`}
        className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-2xl"
      >
        <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-white/5">
          <img
            src={m.img}
            alt={m.name}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] ${
              m.zoom ? "scale-[1.4] origin-center" : ""
            }`}
            style={{ filter: "grayscale(100%) contrast(1.02)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
        <div className="pt-4">
          <div className="text-white text-lg font-light tracking-tight group-hover:text-pk-gold transition-colors">{m.name}</div>
          <div className="text-white/55 text-xs tracking-[0.18em] uppercase mt-1">{m.role}</div>
        </div>
      </button>
    </Reveal>
  );
}

function MemberDialog({ m, onClose }: { m: Member; onClose: () => void }) {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
      <div className="md:col-span-2">
        <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-white/5">
          <img
            src={m.img}
            alt={m.name}
            className={`absolute inset-0 w-full h-full object-cover ${m.zoom ? "scale-[1.4] origin-center" : ""}`}
            style={{ filter: "grayscale(100%) contrast(1.04)" }}
          />
        </div>
      </div>
      <div className="md:col-span-3 flex flex-col justify-center">
        <DialogPrimitive.Title asChild>
          <h3 className="text-3xl md:text-4xl font-thin tracking-tight text-white leading-[1.05]">
            {m.name}
          </h3>
        </DialogPrimitive.Title>
        <div className="text-xs tracking-[0.22em] uppercase text-white/55 mt-3">
          {m.role}
        </div>
        <div className="h-px w-12 bg-white/30 my-5" />
        <p className="text-white/80 font-light leading-relaxed text-[15px] md:text-base">
          {m.bio}
        </p>
        <div className="mt-7">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/90 text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
          >
            <Linkedin className="h-3.5 w-3.5" />
            LinkedIn
          </a>
        </div>
      </div>
      <DialogPrimitive.Close
        onClick={onClose}
        className="absolute -top-2 -right-2 md:top-0 md:right-0 h-9 w-9 rounded-full border border-white/25 bg-white/10 text-white/90 flex items-center justify-center hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </DialogPrimitive.Close>
    </div>
  );
}
