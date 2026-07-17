
# TotoAfya Digital — Investor Pitch Deck

A 13-slide cinematic pitch deck built as an interactive web app + downloadable PDF. Documentary-style AI photography of African maternal healthcare. The uploaded **TotoAfya Digital logo** appears on every slide, and its brand colors drive the palette.

## Brand system (derived from the logo)

- **Deep Green** `#1F7A3A` (primary — from wordmark "Toto" and heart outline)
- **Vibrant Orange** `#F26A21` (accent — from "Afya")
- **Leaf Green** `#8BC34A` (secondary accent — leaf)
- **Warm Cream** `#FFF9F0` (soft backgrounds)
- **Charcoal** `#1A1A1A` (body text)
- **White** `#FFFFFF` (primary background)

One dominant color per slide (mostly white/cream), with green as primary and orange as the single accent for numbers, highlights, and CTAs. Palette locked across every slide — no rainbow.

## Logo usage on every slide

- Full logo (mark + wordmark) lives in a fixed **top-left corner** at ~180px wide with 60px margin — small enough to breathe, present enough to brand every screenshot.
- Bottom-right: subtle slide counter "01 / 13" in charcoal.
- On dark/photo-heavy slides (hook, problem, vision), swap to a **white/knockout version** of the mark so it stays legible; on light slides use the full-color logo.
- Logo file stored via `lovable-assets` from the uploaded PNG so it stays crisp.

## Deliverables

1. **Web slides app** — presentation at `/deck`, arrow-key nav, fullscreen, subtle fade transitions, `?print` mode.
2. **PDF export** — `TotoAfya-Pitch.pdf` in `/mnt/documents/` via Playwright at 1920×1080 landscape.

## Design System

- **Typography**: Poppins for headlines (matches wordmark's rounded confident feel), Inter for body. Titles 96–140px, body 32–40px, captions 22px.
- **Layout**: 1920×1080 canvas scaled to viewport. Asymmetric. 120px+ margins. Generous whitespace.
- **Motion**: 400ms fade + 8px slide-up on enter. Nothing else.
- **Icons**: Lucide, thin, single weight.

## Slide sequence (13 slides, ~4 min)

Alternates emotion → evidence → vision → surprise. Every slide answers ONE question.

| # | Type | On-slide headline | Emotional goal |
|---|---|---|---|
| 1 | Hook | *"Somewhere in Kenya, a mother just missed her appointment."* | Silence |
| 2 | Stat shock | **1 in 39** — lifetime maternal death risk in Sub-Saharan Africa | Shock |
| 3 | Problem | *"Care is fragmented."* | Frustration |
| 4 | Problem visual | Triptych: mother at home / CHV with notebook / nurse at clinic — disconnected | Feel the gap |
| 5 | Solution reveal | **TotoAfya.** *One continuous care journey.* | Relief |
| 6 | How it works | Ecosystem diagram: Mother ↔ CHV ↔ Nurse ↔ Facility, TotoAfya at center (echoes the heart mark) | Clarity |
| 7 | Product outcome | *"A mother never misses critical care."* + phone mockup | Warmth |
| 8 | Product outcome | *"Care continues — even without internet."* + offline UI | Confidence |
| 9 | Traction | 3 large orange numbers: [mothers] · [CHVs] · [facilities] | Momentum |
| 10 | Market | Layered concentric circles: TAM / SAM / SOM for African maternal health | Scale |
| 11 | Competition | Scattered dots (existing apps) → single connected mesh (TotoAfya) | "Aha" |
| 12 | Team | 3 portraits + one-line credentials | Trust |
| 13 | Vision + Ask | *"The digital backbone of maternal care in Africa."* + [Ask: $X to reach Y mothers] | Inspiration |

Every slide file exports a metadata object: `objective`, `headline`, `speakerNotes`, `visualDescription`, `layoutRec`, `imageRec`, `animationRec`, `emotionalGoal`, `reason`. Speaker notes visible in a hidden panel (press `N`) and included in the PDF's final appendix pages.

## File structure

```
src/routes/
  deck.tsx                # /deck — presentation shell, URL-driven ?slide=N
  deck.print.tsx          # Stacked print layout for PDF
src/components/deck/
  SlideLayout.tsx         # 1920x1080 scaled canvas + logo chrome
  LogoMark.tsx            # Full color + knockout variants
  NavPills.tsx            # Auto-hiding prev/next
  slideRegistry.ts        # {Component, meta}[]
  slides/01-hook.tsx … 13-vision.tsx
  content.ts              # All copy + [BRACKETED] placeholders in one file
src/assets/deck/          # AI-generated photography + logo asset pointer
```

## Image generation

11 cinematic 1920×1080 documentary-style photos via `imagegen--generate_image` (standard quality). Prompts specify: real African women/mothers/CHVs/nurses, authentic Kenyan clinics, natural window light, National Geographic photojournalism, no cartoon, no stock. Team slide uses 3 silhouette placeholders you can swap later.

## Logo asset

Copy `user-uploads://totoafyalogo.png` into project via `lovable-assets create` for a CDN-hosted crisp source. Also generate a white knockout variant with `imagegen--edit_image` for dark slides.

## PDF export

Playwright headless → load `/deck?print` at 1920×1080 → `page.pdf({ width, height, printBackground: true })` → save to `/mnt/documents/TotoAfya-Pitch.pdf` → emit `<presentation-artifact>`.

## Placeholders

All numbers, team names, and ask amount are `[BRACKETED]` and centralized in `content.ts`.

## QA

After build: Playwright screenshot every slide at 1920×1080, inspect for overflow/crowding/logo legibility on each background, verify logo is visible on all 13. Render PDF, inspect each page image. Iterate until clean.

## Out of scope this pass

No backend, no auth, no real field photos (AI only), no data — placeholders until you provide.
