# Project State Handover — Loksanskruti Kala Seva Sangh

> **Generated:** 2026-06-23 | **Status:** Frontend scaffold complete, CSS polished, splash screen and About Us page use real images. Other pages still use placeholders.
> **Purpose:** Feed this entire file to a new AI agent so it can resume work with zero context loss.

---

## 1. Core Identity

| Field | Value |
|---|---|
| **Organization** | लोकसंस्कृती कला सेवा संघ (Lok Sanskruti Kala Seva Sangh) |
| **Location** | Ahilyanagar (Ahmednagar), Maharashtra, India |
| **Founded** | August 15, 2022 (Independence Day) |
| **Registration** | महा .३६७/२०२२ एफ - २४१२६ |
| **Founders** | Prof. Pandurang Uttam Shinde & Prof. Haridas Shinde |
| **Spiritual Father** | Late H.B.P. Purushottam Maharaj Shinde (Hatwalankar) |
| **Lineage** | 17th generation descendants of Gondhali Agyandas — the legendary Shahir in the court of Chhatrapati Shivaji Maharaj |
| **Mission** | Conservation, development, and global promotion of national folk art and culture |
| **Academy Wing** | Swarsandhya Sangeet Niketan — affiliated with Akhil Bharatiya Gandharva Mahavidyalaya Mandal |
| **Branches** | Head Office: Kedgaon, Ahilyanagar. Branch: Manjari Khurd, Pune |

### Vibe & Aesthetic Mandate
- **Prestigious, historical, institutional.** Think: a 100-year-old cultural trust, not a tech startup.
- Earthy, traditional palette. Deep browns, tans, parchment backgrounds, matte gold accents.
- Overlapping image-and-text cards with structured grid alignments.
- **Absolutely NO bubbly, modern tech-startup aesthetics.** No rounded-full cards, no neon gradients, no glassmorphism.
- Sharp corners or `rounded-sm` only (max 4px border-radius).
- Inspiration reference: https://abgmvm.org (structural/thematic reference only, not a clone).

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | `16.2.9` |
| React | React + ReactDOM | `19.2.4` |
| Styling | Tailwind CSS v4 | `^4` (uses `@import "tailwindcss"` not `@tailwind`) |
| PostCSS | `@tailwindcss/postcss` | `^4` |
| Icons | `lucide-react` | `^1.20.0` |
| Fonts | Google Fonts via `next/font/google` | Playfair Display (heading), Inter (body) |

### Critical Tailwind v4 Notes
- Tailwind v4 uses `@import "tailwindcss"` in CSS — NOT the old `@tailwind base/components/utilities` directives.
- Custom theme tokens are registered via `@theme inline { ... }` block in `globals.css`.
- **DO NOT** add a universal `* { margin: 0; padding: 0; box-sizing: border-box; }` reset. Tailwind v4's built-in Preflight handles this. A manual reset WILL conflict with `mx-auto` and break centering.
- `lucide-react` does NOT have brand icons (Facebook, Instagram, YouTube). Use `Globe`, `ExternalLink`, `Share2` as substitutes.

---

## 3. Architecture & Routing

### File Tree
```
app/src/
├── app/
│   ├── globals.css              ← Design system, custom classes, animations
│   ├── layout.js                ← Root layout (fonts, body wrapper)
│   ├── page.js                  ← SPLASH SCREEN (route: /)
│   └── (main)/
│       ├── layout.js            ← Wraps Header + <main> + Footer
│       ├── home/page.js         ← /home (hero, bento grid, about preview, events)
│       ├── about/page.js        ← /about (intro, timeline, social impact)
│       ├── academy/page.js      ← /academy (courses, features, CTA)
│       ├── achievements/page.js ← /achievements (US tour, PM Modi, awards, films)
│       ├── gallery/page.js      ← /gallery (filter bar + 50 masonry placeholders)
│       └── contact/page.js      ← /contact (inquiry form + contact details)
├── components/
│   ├── Header.jsx               ← Sticky header (top bar + nav + mobile drawer)
│   ├── Footer.jsx               ← 4-column footer grid
│   ├── NewsMarquee.jsx          ← Scrolling news ticker
│   └── StatsBanner.jsx          ← 4-stat icon row
```

### Route Rules

| Route | Type | Special Rules |
|---|---|---|
| `/` | Splash Screen | Full-screen dark-brown page. Uses `NEW.png` — a single unified image containing the org logo, 3D Marathi name, and English subtitle. Below it: centered portrait of Purushottam Maharaj Shinde (`puroshottam-shinde.jpg`), Marathi biography in 2-column panel, "प्रवेश करा — Enter Website" CTA button linking to `/home`. NO Header/Footer. |
| `/home` | Main Landing | Hero banner, NewsMarquee, StatsBanner, Activities bento grid (Academy + Achievements + Gallery), About preview section, Events preview cards. |
| `/about` | About Us | Intro paragraph, alternating timeline (grid-based `[1fr_60px_1fr]` with centered dots), Social Impact cards. |
| `/academy` | Academy | Course grid, key features, class schedule CTA. Academy = Swarsandhya Sangeet Niketan. |
| `/achievements` | Achievements | US Tour 2024 section, PM Modi performance highlight, Awards & Film Credits (dark theme section). |
| `/gallery` | Gallery | `"use client"` page. Filter bar (All/Performances/Tours/Academy/Events/Heritage) with 50 programmatically generated placeholder items in masonry columns. **All images are placeholders — do not add real images.** |
| `/contact` | Contact | Inquiry form (name, email, phone, course dropdown, message, submit) + contact details sidebar (addresses, phone numbers, email, map placeholder, social links). |

### Layout Structure
- **Root Layout** (`app/layout.js`): `<html lang="mr">` with font variables. `<body className="min-h-full flex flex-col antialiased">`.
- **Main Layout** (`app/(main)/layout.js`): Wraps `<Header />` + `<main className="flex-1">` + `<Footer />`. The splash screen (`/`) is OUTSIDE this group — it has no header/footer.

---

## 4. Design System

### Color Palette (CSS Custom Properties)

| Variable | Hex | Usage |
|---|---|---|
| `--bg-parchment` | `#FAF9F6` | Page backgrounds, card backgrounds |
| `--primary-saffron` | `#D95319` | CTAs, active states, accent highlights |
| `--accent-gold` | `#C5A059` | Borders, dividers, decorative elements |
| `--text-espresso` | `#2A1610` | Primary body text |
| `--dark-brown` | `#4A2511` | Dark section backgrounds, header/footer |
| `--dark-brown-deep` | `#341A0B` | Deeper dark variant (cards on dark backgrounds) |
| `--gold-light` | `#E8D5A3` | Text on dark backgrounds |
| `--parchment-dark` | `#F0EBE0` | Subtle background differentiation, input fields |

### Tailwind Theme Tokens (`@theme inline`)
```css
--color-parchment: var(--bg-parchment);
--color-saffron: var(--primary-saffron);
--color-gold: var(--accent-gold);
--color-espresso: var(--text-espresso);
--color-dark-brown: var(--dark-brown);
--color-dark-deep: var(--dark-brown-deep);
--color-gold-light: var(--gold-light);
--color-parchment-dark: var(--parchment-dark);
--font-heading: var(--font-playfair);
--font-body: var(--font-inter);
```

### Typography
| Element | Font | Weight | Line Height |
|---|---|---|---|
| Headings (h1–h6) | Playfair Display (serif) | 700 | 1.3 |
| Body text | Inter (sans-serif) | 400 | 1.7 |
| Paragraphs | Inter | 400 | 1.8 |

### Custom CSS Classes

| Class | Purpose |
|---|---|
| `.gold-divider` | 80px × 3px gold decorative line |
| `.gold-divider-wide` | 120px × 3px gold decorative line |
| `.card-institutional` | Parchment bg, 1px gold border, 4px radius, hover shadow + lift |
| `.gallery-frame` | Parchment-dark bg, 1px gold border, 4px radius, hover saffron border |
| `.btn-saffron` | Primary CTA — saffron bg, white text, 4px radius |
| `.btn-gold` | Secondary CTA — gold bg, espresso text |
| `.btn-outline` | Tertiary CTA — transparent bg, 2px gold border |
| `.animate-marquee` | Infinite horizontal scroll animation (30s) |
| `.fade-in-up` | Entry animation (0.6s ease-out, translateY 24px→0) |
| `.mobile-nav-overlay` | Fixed overlay backdrop for mobile drawer |
| `.mobile-nav-drawer` | Fixed right-side 280px mobile navigation panel |

---

## 5. Critical CSS Rules — Lessons Learned

These are hard-won fixes from debugging sessions. **A new agent MUST follow these rules or the layout will break.**

### 5.1 Container Centering
```
✅ CORRECT: max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16
❌ WRONG:   max-w-7xl mx-auto px-4 (too narrow on wide screens)
❌ WRONG:   ml-auto, justify-end, col-start-3 (shifts content right)
```
- The main content wrapper on every section MUST use `max-w-[1400px] mx-auto`.
- `mx-auto` is critical — it ensures equal left/right margins.
- Horizontal padding scales: `px-6` → `sm:px-8` → `lg:px-12` → `xl:px-16`.
- Never use `max-w-7xl` (1280px) — it leaves too much empty space on 1440px+ screens.

### 5.2 No Universal CSS Reset
```css
/* ❌ DO NOT DO THIS — it breaks Tailwind v4's mx-auto */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* ✅ Tailwind v4 Preflight handles resets automatically via @import "tailwindcss" */
```

### 5.3 Overflow Control
```css
html { overflow-x: hidden; }
body { width: 100%; max-width: 100vw; overflow-x: hidden; }
```
This prevents decorative absolute-positioned elements from creating horizontal scroll.

### 5.4 Spacing & Gaps (Mandatory)
- **NO text should ever touch a border.** Every card/container gets `p-6` minimum, `p-7` or `p-8` preferred.
- All CSS Grid and Flexbox containers MUST have gaps: `gap-6` minimum, `gap-8` preferred.
- Navigation links: `gap-2` between items, `px-5 py-2.5` on each link.
- Form inputs: `px-4 py-3` minimum.

### 5.5 Text Readability
- Body paragraphs: `leading-loose` (line-height ~2) for Marathi and English text.
- Constrain paragraph widths: use `max-w-prose` or `max-w-3xl` on long text blocks to prevent 100%-width unreadable lines.
- Font sizes: body `text-sm sm:text-base`, headings scale from `text-xl` to `text-5xl`.

### 5.6 Border Radius
- Maximum `rounded-sm` (4px). No `rounded-lg`, `rounded-xl`, `rounded-full` on cards.
- The 4px radius is set directly in CSS classes (`.card-institutional`, `.gallery-frame`, `.btn-*`).

### 5.7 Image Placeholder Contrast
- On dark backgrounds (`--dark-brown`), image placeholders MUST use a visible background: `bg-[var(--parchment-dark)]/10` with `border-2 border-[var(--accent-gold)]/40`.
- **Never** use `bg-[var(--dark-brown-deep)]` on `bg-[var(--dark-brown)]` — they have nearly zero contrast and the placeholder looks invisible.
- On light backgrounds, use `bg-[var(--parchment-dark)]` with `border border-[var(--accent-gold)]/20`.

### 5.8 Full-Width Sections
- Section wrappers (`<section>`) must be `w-full` (default block behavior).
- Only the internal `<div>` gets `max-w-[1400px] mx-auto px-...`.
- Header and Footer span full width; their internal content is constrained.

---

## 6. Component Reference

### Header (`Header.jsx`)
- **Sticky** (`sticky top-0 z-30`).
- **Top bar**: Dark brown, shows phone number + email + social icons.
- **Main nav**: Parchment bg, gold bottom border. Logo (Music icon + org name) on left, nav links on right.
- **Mobile**: Hamburger → right-side drawer (280px, dark brown).
- Active link: saffron text + 2px saffron underline.

### Footer (`Footer.jsx`)
- 4-column grid: About | Quick Links | Academy | Contact.
- Gold top border accent (1px).
- Bottom bar with copyright and founder attribution.

### NewsMarquee (`NewsMarquee.jsx`)
- Full-width gold bar with "NEWS" label and infinite scrolling text.
- 5 news items duplicated for seamless loop.
- Pauses on hover.

### StatsBanner (`StatsBanner.jsx`)
- 4-stat row: Est. 2022 | 17th Generation | 6+ US Cities | 10+ Awards.
- Dark brown background, gold icons in circular borders.

---

## 7. Content Data Sources

All reference content is in the `Information/` folder at the project root:

| File | Contains |
|---|---|
| `project_architecture.txt` | Route structure, tech stack outline |
| `design_system.txt` | Color codes, typography, spacing rules |
| `cultural_context.txt` | Gondhali lineage, Warkari tradition, Maharashtrian context |
| `academy_syllabus.txt` | Course categories, affiliation details |
| `global_achievements.txt` | US tour cities, awards list, film credits, PM Modi event |
| `shinde_bio_extracted.txt` | Detailed biography of Purushottam Maharaj Shinde (Marathi/English) |
| `haridas_bio.txt` | Prof. Haridas Shinde biography |
| `haridas_marathi.txt` | Haridas Shinde Marathi content |
| `mahitipatra_extracted.txt` | Extracted mahitipatra (information letter) content |
| `माहितीपत्रक.docx` | Original Marathi information letter (Word document) |
| `Screenshot (394).png` | Reference screenshot |

### Image Assets (`app/public/images/`)

| File | Usage |
|---|---|
| `NEW.png` | **Splash screen header** — unified image with org logo, 3D Marathi name, and English subtitle on dark brown background |
| `puroshottam-shinde.jpg` | Splash screen portrait of the spiritual father |
| `logo.jpeg` | Org logo (used in Header component) |
| `text-marathi.png` | Legacy 3D Marathi text (replaced by NEW.png on splash, kept for reference) |
| `instagram.png` | Social media icon |
| `youtube.png` | Social media icon |
| `facebook.png` | Social media icon |
| `whatsapp.png` | Social media icon |
| `whatsapp-qr.jpeg` | WhatsApp QR code (contact page) |

Source photographs are in `Photos To be used in Website/` at the project root.

---

## 8. Key Contact Information (Hardcoded in UI)

| Field | Value |
|---|---|
| Phone 1 | +91 7020692252 |
| Phone 2 | +91 9011548435 |
| Phone 3 | +91 9322941949 |
| Email | Loksanskruti.kalaseva.sangh@gmail.com |
| Address (HQ) | मु. पो. केडगाव, उदयनराजे नगर, जिल्हा अहमदनगर - 414001 |
| Address (Pune) | नेवाळे वस्ती, दत्त मंदीर, मांजरी खुर्द, ता. हवेली, जिल्हा पुणे |

---

## 9. What's Done vs. What's Remaining

### ✅ Completed
- [x] Full 7-route scaffold with Next.js App Router
- [x] Complete design system in `globals.css` (colors, typography, custom classes, animations)
- [x] Header with sticky nav, top bar, mobile drawer
- [x] Footer with 4-column grid
- [x] NewsMarquee with infinite scroll
- [x] StatsBanner with 4 stats
- [x] Splash screen with unified `NEW.png` header + centered portrait + Marathi biography
- [x] Home page: hero, bento grid, about preview, events section
- [x] About page: intro, grid-based alternating timeline, social impact cards
- [x] About page photos: added founder/performance images to intro and 7 timeline element images with custom vibe styling
- [x] Academy page: course grid, key features, CTA
- [x] Achievements page: US tour, PM Modi section, awards & films
- [x] Gallery page: filter bar + 50 masonry placeholders
- [x] Contact page: inquiry form + contact details + map placeholder
- [x] Global CSS refactor (spacing, gaps, padding, typography)
- [x] Layout centering fix (max-w-[1400px], removed rogue reset)
- [x] All comments stripped from source files
- [x] Build verification passes on all 7 routes
- [x] Splash screen header: replaced separate logo/text-marathi.png/English text with single NEW.png
- [x] GitHub push to `origin/main` (https://github.com/pathu1797/LSKSS.git)

### 🔲 Remaining / Next Steps
- [ ] Replace remaining image placeholders with real photographs (user will provide)
- [x] Add real Google Maps embed on contact page
- [ ] Wire up contact form to a backend (e.g., Firebase, email API)
- [ ] Add SEO metadata per page (partially done — each page has `metadata` export)
- [ ] Add Open Graph / social media meta tags
- [ ] Performance optimization (image lazy loading, next/image component)
- [ ] Responsive testing on actual mobile devices
- [ ] Add scroll-triggered animations (fade-in-up on intersection)
- [ ] Favicon replacement with actual logo
- [ ] PWA configuration (optional)
- [ ] Deployment to Vercel or custom hosting

---

## 10. How to Run

```bash
cd app
npm install
npm run dev        # Dev server at http://localhost:3000
npm run build      # Production build (verifies all routes compile)
```

---

*End of handover document.*
