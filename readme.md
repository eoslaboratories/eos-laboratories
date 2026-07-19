# EOS Laboratories — Design System

EOS Laboratories is a manufacturer of ready-to-use and dehydrated microbiology culture media, laboratory consumables, antibiotic sensitivity discs, transport swabs/media, and clinical/pharma microbiology testing solutions. Customers span clinical diagnostics, pharmaceutical QC, food & water testing, research/veterinary labs, and hospitals. The company is based in Mumbai, India (Neminath Industrial Estate, Vasai East).

Brand tagline: **"Precision. Quality. Trust."** Stated brand values: Accuracy, Quality, Innovation, Integrity, Excellence.

## Sources this system was built from

No Figma/codebase was attached. Everything here is derived from uploaded reference materials — treat these as the ground truth if you can access the original files:
- `uploads/WhatsApp Image 2026-07-09 at 9.38.25 PM.jpeg` — an existing one-page **brand guideline sheet** (logo system, color palette with hex/RGB/CMYK, typography, iconography, brand patterns, photography style, brand tone, applications). This is the single most authoritative source in the upload set; copied into `assets/reference/brand-guideline-sheet.jpeg`.
- `uploads/eos logo*.png` — primary horizontal logo lockup (orange/white split "EOS" wordmark + "LABORATORIES" underline).
- `uploads/EOS READY TO USE RANGE AND PRODUCT LIST*.jpg`, `uploads/PAGE 6.jpg` — pages from an existing product catalogue/brochure, showing real layout conventions (numbered feature lists, colour-coded category tags, left-aligned teal/navy headings, bulleted spec lists).
- `uploads/bannner.png` — an existing marketing banner ("Microbiology Consumables") — reference for hero layout, sweep graphic, icon-labeled trust badges.
- Dozens of individual product photography files (petri plates, agar bottles/slants, swabs, antibiotic discs, transport media, gas packs, lab photography) — copied into `assets/products/` and `assets/imagery/`.
- Several `ChatGPT Image *.png` files — AI-generated product photography (isolated plates/bottles on white) apparently produced in an earlier session; useful as photographic style reference, not treated as brand assets.
- A handful of `WhatsApp Image 2026-07-09 at 10.42.0* PM.jpeg` files — informal phone screenshots of color exploration (competing "Bright Orange / Electric Blue", "Royal Blue / Vibrant Orange" swatch cards). These conflict with the brand guideline sheet's documented hex values. **The brand guideline sheet wins** as the authoritative palette; the other swatches are noted here only as evidence the orange/blue direction is deliberate and long-standing.

No design system, Figma file, or codebase currently exists for EOS Laboratories — this project starts one from brand + product source material only.

## Index

- `styles.css` — root stylesheet, imports everything below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `patterns.css`.
- `assets/logos/` — primary horizontal logo.
- `assets/products/` — individual product cutout photography (plates, bottles, slants, swabs, discs).
- `assets/imagery/` — lab/lifestyle photography, the existing hero banner, brand reference sheet.
- `components/` — reusable marketing UI primitives (see below).
- `templates/` — full marketing-piece starting points (social banner, datasheet, certificate, deck slides…).
- `guidelines/` — foundation specimen cards shown in the Design System tab.
- `SKILL.md` — portable skill definition for use outside this environment.

### Components built

Grouped under `components/`:
- `core/Button.jsx`, `core/Tag.jsx`, `core/Badge.jsx` — actions and labels
- `core/SectionHeading.jsx` — eyebrow + title + rule, used to open every content section
- `core/StatBadge.jsx` — icon-circle trust stat ("Reliable Results" style), from banner reference
- `core/ProductCard.jsx` — product photo + name + REF code card
- `core/SpecTable.jsx` — key/value technical spec rows for datasheets

**Intentional additions:** none of these have a literal prior-art counterpart in the uploads (no component library was provided) — they were authored fresh from the brochure/banner layout conventions observed across the catalogue pages, sized to what a B2B scientific marketing system needs (not a generic app component set).

### Templates built

Grouped under `templates/` (each is a `.dc.html` — a starting point consumers can copy):
- `exhibition-standee/` — 700×1650 (85×200cm ratio) roll-up standee: flat-lay hero built from real product photography, product portfolio list, "Why EOS" cards, QR/contact CTA footer. Uses the Royal Blue + Vibrant Orange palette per the finalized brand direction.
- `linkedin-banner/` — 1584×396 LinkedIn company page banner
- `social-post/` — 1080×1080 square social/WhatsApp creative
- `datasheet/` — printable A4-proportioned product technical datasheet
- `certificate/` — quality/compliance Certificate of Analysis layout
- `deck-title-slide/` & `deck-content-slide/` — 1920×1080 presentation slides

More formats (email banner, WhatsApp creative variants, full brochure/catalogue spread) can be added the same way — ask if you'd like those next.

## Content fundamentals

*(see also "Visual foundations" and "Iconography" below)*

- **Tone**: professional, confident, precise — never casual, never hard-sell. Per the brand sheet's own words, brand tone is <br>"scientific, precise, reliable, modern, professional"</br> — communicated "with clarity, accuracy and integrity."
- **Address**: third-person/institutional, not conversational "you/we" — copy names the product and its compliance facts rather than speaking to the reader ("EOS Ready to use Lowenstein Jensen medium used for cultivation of Mycobacterium tuberculosis").
- **Casing**: category names and section headers are set in ALL CAPS ("READY TO USE CULTURE MEDIA", "READY TO USE VIRAL TRANSPORT KIT"); product names are Title Case; body copy is sentence case.
- **Structure**: headline → 1-2 sentence factual description → bulleted spec list (availability, compliance, format). Bullets favor concrete facts: pack sizes, volumes, regulatory compliance ("Compliant with various pharmacopoeias and ISO regulations"), format options.
- **Proof points over adjectives**: claims are almost always paired with a credential — "ICMR Approved", "ISO regulations", "Custom made Antibiotic concentration available" — rather than unsupported superlatives.
- **Taglines run in three short parallel words**: "Precision. Quality. Trust." / "Reliable • Precise • Consistent" — a recurring rhythmic triplet structure worth reusing.
- **No emoji, ever.** No slang, no exclamation-heavy copy.
- **Numerals**: quantities, volumes and pack counts are always numeric with units (25ml, 90mm, packs of 10/50), never spelled out.

## Visual foundations

- **Colors**: two solid primaries only — EOS Orange `#F68634` and EOS Blue `#2F7CCB` — against a dominant white field (brand sheet documents an explicit usage split: 60% white, 25% blue, 10% orange, 5% light gray). No gradients as primary decoration; the one gradient-like element in existing material is a soft diagonal color "sweep" at a corner (see `.pattern-corner-sweep` token), used once per composition, subtly, never as a full-bleed wash. **Do not introduce new primary hues.**
- **Type**: Montserrat (bold/extrabold, tight leading) for display/headings; Inter for body copy and UI labels. Headline tracking is tight to neutral; small eyebrow/overline labels use wide uppercase tracking (~0.08em), matching the brochure's "READY TO USE CULTURE MEDIA" section labels.
- **Spacing**: generous white space is the primary luxury cue — section padding is large (48–96px), internal component padding is comparatively tight and precise (8–16px), producing an "engineered," not loose, feel.
- **Backgrounds**: predominantly flat white or very light gray. Full-bleed photography is used for hero sections only (product-on-white group shots, or lab/clinical photography), always with generous negative space reserved for a headline. No hand-drawn illustration anywhere in source material. Subtle geometric patterns (dot grid, hairline grid, hex outline — see `tokens/patterns.css`) stand in for the brand sheet's "molecular", "DNA line" and "lab grid" pattern references; used as low-opacity section textures, never as foreground decoration competing with product photography.
- **Animation**: no animation present in any source material (all static print/social collateral). Default to no motion; if a digital surface needs it, keep to simple fades/opacity — nothing bouncy.
- **Hover/press states**: none observed in source (print-first brand); components in this system use a conservative pattern — hover darkens fill ~10% (`--eos-orange-600` / `--eos-blue-700`), press adds a subtle `scale(0.98)`. Treat this as a system addition, not an observed brand rule.
- **Borders / shadows**: source material is essentially borderless — separation comes from whitespace and color blocking, not strokes. Where a card needs definition, use a hairline `1px solid var(--color-border-default)` and a soft, single-direction shadow (`--shadow-sm`/`--shadow-md`) — never a colored left-border accent stripe.
- **Corner radii**: restrained. Photography and cards read as sharp/rectangular in every source image (petri dishes and bottles are the only "round" motif, and that roundness is the *product*, not the UI chrome). Use `--radius-sm`/`--radius-md` (4–8px) for cards and inputs; reserve pill radius for chips, tags and buttons only.
- **Transparency/blur**: not used in source material. Avoid glassmorphism/blur entirely — it reads as consumer-app, not scientific/B2B.
- **Photography color vibe**: bright, cool-white clinical light; petri dish media supplies the only saturated color in a composition (blood-red, mustard-yellow MSA, coral XLD) — let the product itself be the color accent against a white/gray studio background. Gloved hands are pale blue nitrile. No grain, no warm filters — everything reads clean and clinical.
- **Layout rules**: logo top-right or top-left on a hero; headline right-aligned to imagery on hero banners (per `bannner.png`); numbered/lettered category lists use a colored circle-numeral bullet (see catalogue reference `PAGE 6.jpg`); footer/contact block is small, right- or center-aligned, always includes website + social handles.
- **Cards**: white surface, hairline border, 8px radius, soft shadow, product photo top, Title-Case name + monospace REF/LOT code beneath — modeled directly on the catalogue's per-product listings (e.g. "BI-PLATE / DUAL MEDIA / SHEEP BLOOD AGAR/MACCONKEY AGAR PLATE / ER018").

## Iconography

- The brand sheet's own iconography section shows **simple, closed-outline glyphs with rounded corners** (microscope, petri dish, test tube, incubator, quality-check shield, certificate/document, flask, safety shield) described in-sheet as "Simple, clean and consistent line icons" with "rounded corners for a modern and approachable look."
- No icon font or SVG sprite was included in the uploads — only the glyphs' appearance inside the flattened brand-sheet raster image, which cannot be extracted as crisp vector icons.
- **Substitution**: this system links **Lucide** icons from CDN (`https://unpkg.com/lucide@latest`) as the closest open stroke-based match — 2px rounded-cap/rounded-join outline strokes, no fills, which mirrors the brand sheet's description closely. Flag this to the user: if EOS has (or can produce) the original icon set, swap it in and update `components/core/` accordingly.
- No emoji, no unicode-symbol icons anywhere in source or in this system.
- Numbered category lists use plain colored-circle numerals (typography, not icons) — see `PAGE 6.jpg` reference ("1 2 3 4 5" in colored ring badges).

## Caveats

- **Fonts**: Montserrat + Inter are already standard Google Fonts, loaded via `@import` in `tokens/typography.css` — no substitution was needed, but no local/licensed font *files* were provided either, so this relies on the Google-hosted CDN rather than shipping binaries. Flag if EOS has licensed static font files to embed instead.
- **Icons**: Lucide is a substitution for an icon system that visually exists in the brand sheet but has no extractable source files — see Iconography above.
- **Palette update (Jul 2026):** EOS finalized the palette as **Royal Blue `#2563EB` + Vibrant Orange `#F97316`** (+ Light Grey `#F8FAFC`) — one of the candidates from the `WhatsApp Image ...10.42.0*` exploration screenshots — superseding the brand-guideline-sheet's originally documented `#2F7CCB`/`#F68634`. `tokens/colors.css` reflects this final decision; the brand sheet is retained only as historical/typography/iconography reference.
- **No component library, codebase, or Figma file was attached** — all components/templates below are original layouts authored from the catalogue/banner reference material, not "recreations" of an existing UI kit.
