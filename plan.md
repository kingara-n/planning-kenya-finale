## Plan

### 1. `src/routes/story.tsx` — refinements

**Selected Landmarks** — replace current 4 with 8 most prominent PLANNING projects (sourced from planning-kenya.com):
- Lonrho House — Nairobi
- Nation Centre — Nairobi
- I&M Bank Tower — Nairobi
- KCB Pension Tower — Nairobi
- Fedha Towers — Nairobi
- Trade & Development Bank HQ — Nairobi
- Mombasa Serena Beach Hotel & Spa — Mombasa
- Four Points by Sheraton JKIA — Nairobi

**Timeline** — replace milestones with project-led timeline:
- 1978 — Founded by Jim Archer & Trevor Andrews above a used-car garage, Industrial Area, Nairobi
- 1980 — Won Lake View Estate competition, Spring Valley
- 1988 — Relocated to PLANNING House, Lower Kabete Road
- 1990s — Fedha Towers (first major high-rise) & Lonrho House define the Nairobi skyline
- 1993 — Launched Planning Interiors Limited
- 2000s — Nation Centre, KCB Pension Tower, I&M Bank Tower, Mombasa Serena Beach Hotel
- 2012 — Community Cooker awarded inaugural World Design Impact Prize
- 2020s — Trade & Development Bank HQ, Four Points Sheraton JKIA, Pangani Housing
- Today — Third generation under MD Henry Musangi; Nairobi & Mombasa offices

**Third Generation (Today section)** — update copy to name **Henry Musangi** as Managing Director leading the third generation (replacing the previous "Arch. Musuva Mumo" reference).

### 2. Convert `Our Adventures` to a blog index + detail pages

**`src/routes/adventure.tsx`** — convert from single article to a blog index:
- Hero unchanged ("Stories from the studio.")
- Render a list/grid of 3 article cards (title, date, excerpt, cover image, "Read story →"), each a `<Link>` to its detail route.
- Articles included (sourced from planning-kenya.com news feed):
  1. **Transforming African Hospitality** — Dec 2024
  2. **Building Bridges: Woodlife Sweden Study Tour** — Sep 2024
  3. **Reimagining Heritage: May al-Ibrashy** — Sep 2023

**New file `src/routes/adventure.$slug.tsx`** — dynamic blog post page:
- `head()` derives title/description per post.
- Layout: eyebrow (date · location), H1 title, hero image, body paragraphs, then an **image carousel** under the article using existing `src/components/ui/carousel.tsx` (Embla). Carousel shows 3–4 supporting images per post drawn from existing assets in `src/assets/projects/` (e.g. `enashipai-resort-spa.jpg`, plus other resort/hospitality/heritage images already in the project).
- "Back to Our Adventures" link at top, contact CTA at bottom.
- Posts data lives in a small local module `src/data/adventures.ts` (slug, title, date, location, excerpt, cover, gallery[], body paragraphs[]). Adventure index and detail both read from it.

**Slugs**:
- `/adventure/transforming-african-hospitality`
- `/adventure/building-bridges-sweden`
- `/adventure/reimagining-heritage-egypt`

### Out of scope
- No backend, no new image generation (reuse existing assets in `src/assets/projects/` and `src/assets/`).
- No nav changes — `/adventure` remains the entry point.
- Heritage page untouched.
