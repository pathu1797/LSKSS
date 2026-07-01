# AI Agent Context: Lok Sanskruti Kala Seva Sangh (LKSS)

> **Purpose:** This file is designed to be read by an AI coding assistant. It contains the complete architectural, stylistic, and technical context of the project. Read this before making any modifications to the codebase.

## 1. Project Overview & Identity
- **Organization:** Lok Sanskruti Kala Seva Sangh
- **Mission:** Conservation, development, and global promotion of Maharashtrian folk art and culture. The founders are 17th-generation descendants of Gondhali Agyandas (Shahir of Chhatrapati Shivaji Maharaj).
- **Academy Wing:** Swarsandhya Sangeet Niketan.
- **Vibe Mandate:** Prestigious, historical, institutional. Earthy palette (browns, gold, parchment). **NO modern tech-startup UI** (no neon, no glassmorphism, no heavily rounded corners—max 4px radius `rounded-sm`).

## 2. Tech Stack
- **Framework:** Next.js (App Router) v16.2.9
- **React:** v19.2.4
- **Styling:** Tailwind CSS v4 (uses `@import "tailwindcss"` in `globals.css`)
- **Animation:** GSAP (ScrollTrigger) & `split-type`
- **Icons:** `lucide-react`
- **Fonts:** Playfair Display (Headings), Inter (Body) via `next/font/google`.

## 3. Architecture & Routing
The frontend is a fully responsive 7-route application.
- `/` : Splash Screen. No header/footer. Dark mode. Contains `S.png` (Unified Logo + Text), Founder Portrait, Marathi Bio, and PDF Download.
- `/home` : Main Landing. Hero, NewsMarquee, Stats, Bento grids.
- `/about` : Organization History. Includes a grid-based alternating timeline.
- `/academy` : Course offerings for Swarsandhya Sangeet Niketan.
- `/achievements` : Awards, US Tour highlights, PM Modi performance, press coverage.
- `/gallery` : Masonry image grid with category filters, loading 242 `.webp` images from `src/data/galleryData.js`.
- `/contact` : Contact info, embedded Google Maps, embedded Google Form.

### Key Components (`app/src/components/`)
- **GSAPTextReveal / GSAPBlockReveal:** Used for scroll-triggered entry animations. **CRITICAL:** `GSAPTextReveal` accepts a `splitBy="words"` prop which MUST be used for Marathi/Devanagari text to prevent rendering breakages caused by character splitting.
- **AutoImageCarousel / SpotlightCarousel:** Used to cycle through images beautifully with crossfades.
- **ScrollToTop:** Global floating action button (injected via `layout.js`).

## 4. CSS Rules & Layout Gotchas (DO NOT BREAK THESE)
1. **Container Centering:** Every main section wrapper uses `max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16`. Never use `max-w-7xl` or float alignments to center blocks.
2. **NO CSS RESETS:** Do NOT add `* { margin: 0; padding: 0; box-sizing: border-box; }` to `globals.css`. Tailwind v4's Preflight handles it. A manual reset breaks `mx-auto` centering.
3. **Typography:** Body text must have `leading-loose` (line-height ~2) for readability of both English and Marathi.
4. **Contrast:** Placeholders or borders on the `--dark-brown` background must use `--parchment-dark` or `--gold-light` to remain visible.

## 5. Security & Configuration
- **next.config.mjs:** Contains strict HTTP Security Headers.
- **CSP (Content-Security-Policy):** Highly restrictive. `frame-src` explicitly allows `https://docs.google.com`, `https://www.google.com`, `https://maps.google.com`, and `https://maps.googleapis.com` to prevent the Contact page Google Form and Google Map from breaking. Do not modify CSP without verifying these embeds.

## 6. Current State
- The UI/UX, animations, assets, SEO, responsive refactoring, and security headers are **100% complete**. 
- Project is ready for Production Deployment (e.g., Vercel).
