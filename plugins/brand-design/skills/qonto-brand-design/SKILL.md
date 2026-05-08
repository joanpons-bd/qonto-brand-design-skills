---
name: qonto-brand-design-skill
version: 4.6
description: "Qonto brand foundations — color, typography, logo, composition, object styles, iconography, and tone of voice. Universal rules that apply to any surface or tool."
---

# Qonto Brand Design Skill — Foundations

> Version: 4.6 · Last updated: 2026-05-08 · Scope: brand foundations only

## North Star

> **"A precision tool dressed for a night out — white ground, black authority, photography as the only colour. Every element earns its place."**

When rules run out, this sentence is the tiebreaker. If a decision makes the output feel cheaper, busier, or more decorative, it's wrong. If it makes it feel more precise and intentional, it's right.

---

## Brand identity

Qonto is the European leader in business finance management for SMEs and freelancers — 500,000+ businesses across France, Germany, Italy, Spain, and the Netherlands.

**Brand personality** — every piece of work should feel like it came from the same hand:
- **To the point** — clear, concise, no jargon.
- **Playful and spirited** — professional yet approachable.
- **At ease** — calm, smooth, frictionless.
- **Always attentive** — empathetic, contextually aware.

**The marketing / product split** — the most important architectural rule:
- **Marketing & brand communications** — white-led, black-secondary, grayscale for content hierarchy. No product palette except in dataviz.
- **Product** — full expressive palette (Blueberry, Mint, Plum, Sakura, Peach, Mustard) plus semantic status families (Success, Warning, Error).

When unclear which context applies, ask.

---

## Universal rules

- Primary typeface: **Qonto Sans** (proprietary). Fallback: Manrope → Arial.
- Available weights: **Thin, Light, Regular, Semi Bold, Bold, Black** — each with an italic. No Medium weight. Sentence case only — never ALL CAPS.
- Minimum type size: **12 px** across body, captions, labels, entry-points.
- Structural objects are **sharp (`cornerRadius = 0`)**. Rounded corners belong to floating content only — product cards, small image tiles, icon bounding boxes, avatars, chips.
- Never use pure `#000000` — Qonto's black is `#050505`.
- **Default canvas is white (`#FFFFFF`).** Black (`#050505`) canvas is a deliberate choice reserved for section dividers or when the brief explicitly calls for it. Never default to black, dark navy, or any other dark background.
- **Use exact hex values.** No improvising. If a tool doesn't support the exact hex, use the closest available and document the delta.
- **Flag rather than improvise.** If a brand element can't be correctly reproduced in the target tool, flag it to the designer. A placeholder is safer than an off-brand render that gets treated as canon.

---

## Quick reference — do / don't

| ✅ Always | ❌ Never |
|---|---|
| Brand black `#050505` | Pure black `#000000` |
| `Qonto Sans` (exact name) | `Qonto Sans v4`, Inter, Helvetica, SF Pro |
| Sentence case everywhere | ALL CAPS headlines or labels |
| White-led canvas in marketing | Product palette colors in marketing |
| `#050505` or `#FFFFFF` for type | Colored type of any kind |
| Sharp `cornerRadius = 0` for structural objects | Rounded corners on structural scaffolding |
| 8 named gradients, plugin-exported | Hand-rolled or custom gradients |
| Logo imported from library component | Logo drawn as text or shapes |
| Photography as the only "colour" in marketing | Decorative shapes, patterns, or tints |
| One headline tier per composition | Mixing headline tiers in one layout |

---

## X-system

> **`X = 0.08 × min(canvas_w, canvas_h)`** — for every medium. Mnemonic: *X is 8 — for everything.*

`X` is the single brand unit. Every margin, gutter, type size, logo dimension, and spacing decision in this file resolves to a multiple of `X`. One canvas, one anchor.

| Element | Value |
|---|---|
| Canvas margin (all four edges) | `X` |
| Clear space around lockup | `X` |
| Wordmark height | `X` |
| Wordmark width | `X × 3.57` (aspect ratio locked) |
| Symbol size | `X × X` (square) |
| Entry-points size | `round(X × 0.245)` |
| Entry-points line-height | `round(X × 0.36)` |
| Gutter between columns | `0.5X` |
| Gap between adjacent content bands | `1X` |
| Gap from last content band to lockup | `≥ 1X` (default `2X`) |
| Headline tier 1 (Small) | `1X` cap height |
| Headline tier 2 (Medium) | `1.25X` cap height |
| Headline tier 3 (Large) | `1.5X` cap height |
| Subtitle | `0.5X` |

**Cap height vs. font-size:** the tier values above are optical cap heights, not the font-size shown in the panel. For Qonto Sans, cap-height ratio ≈ **0.706**, so `font-size = cap_height ÷ 0.706`. At X = 24 px: Small headline → cap 24 px → font-size ≈ 34 px.

**Scalability floor:** wordmark minimum 24 px height on screen, 0.25 in print.

---

## Color

Qonto marketing is **black and white**, with grayscale for content hierarchy. The product palette lives inside product UI, not in marketing. Gradients are the strategic pop of color that complements the black-and-white frame.

### 1. The black-and-white principle

**Qonto is a white-and-black brand, in that order.** White is the primary surface; black is the secondary. Every composition starts on white unless the brief demands otherwise. Inversion is possible — nocturnal campaigns, dark product contexts — but it is the exception. The trigger is **both** an explicit brief signal *and* editorial judgement. When in doubt, default to white.

### 2. Primary tokens

| Token | Hex | Role |
|---|---|---|
| `primary/white` | `#FFFFFF` | Primary surface; primary ink on dark |
| `primary/black` | `#050505` | Secondary surface; primary ink on light |

### 3. Grayscale

Grayscale exists to enhance content hierarchy, not to introduce color. 11-step scale:

| Token | Hex |
|---|---|
| `neutral/gray-900` | `#1A1A1A` |
| `neutral/gray-800` | `#262626` |
| `neutral/gray-700` | `#3D3D3D` |
| `neutral/gray-600` | `#616161` |
| `neutral/gray-500` | `#8F8F8F` |
| `neutral/gray-400` | `#B8B8B8` |
| `neutral/gray-300` | `#CCCCCC` |
| `neutral/gray-200` | `#E0E0E0` |
| `neutral/gray-100` | `#E8E8E8` |
| `neutral/gray-50`  | `#F5F5F5` |
| `neutral/gray-25`  | `#F9F9F9` |

**Canvas/card pairing — two valid combinations only:**
- White canvas + `neutral/gray-50` (`#F5F5F5`) cards — the default.
- Black canvas (`#050505`) + `neutral/gray-800` (`#262626`) cards — for dark contexts.

Never invert: no gray-50 canvas with white cards, no gray-800 cards on a gray-50 canvas. Nested elements inside cards revert to the canvas color (white in white canvas, `#050505` in black canvas).

### 4. Product palette — product UI only

Token prefix: `brand/[family]-[shade]` for product families; `status/[name]-[shade]` for semantic families. Source of truth: [Colors — Library (Figma)](https://www.figma.com/design/6w90xGF6JvJFMxUo2CyJWc/Colors---Library?node-id=1-201).

**Expressive families** — 5 shades each (50 = lightest, 1000 = darkest):

| Token prefix | 1000 | 900 | 800 | 100 | 50 |
|---|---|---|---|---|---|
| `brand/blueberry` | `#093B75` | `#3275C4` | `#71A5E0` | `#9BC5EA` | `#C6E6FB` |
| `brand/mint`      | `#0D5563` | `#2F95A0` | `#66C8C8` | `#9BE5DA` | `#C8FFEC` |
| `brand/plum`      | `#461068` | `#7B4DB8` | `#A585DB` | `#BFA6EA` | `#D5C8FF` |
| `brand/sakura`    | `#7E0F4C` | `#C24B89` | `#E975B2` | `#FFACD6` | `#FFDFEA` |
| `brand/peach`     | `#7A250C` | `#CE6033` | `#FF9E75` | `#FFB590` | `#FFC9A6` |
| `brand/mustard`   | `#705208` | `#C5A635` | `#F0E060` | `#F5F596` | `#FAFFA4` |

**Semantic / status families** — 5 shades each (50 = lightest, 1000 = darkest):

| Token prefix | 1000 | 800 | 400 | 300 | 50 |
|---|---|---|---|---|---|
| `status/success` | `#0F7A3D` | `#2BAD5F` | `#66DB7C` | `#54D59F` | `#E6FFE4` |
| `status/warning` | `#B04E10` | `#DC9433` | `#FFD870` | `#FFE5AA` | `#FFF2D9` |
| `status/error`   | `#B81818` | `#E04545` | `#FF8585` | `#FFBABE` | `#FFE8E8` |

Does not appear in marketing or brand communications. Dataviz is the one exception (§5).

### 5. Dataviz exception

Charts, infographics, and chart-like surfaces may use the product palette in marketing. Lead with expressive families (`brand/blueberry`, `brand/mint`, `brand/plum`, `brand/sakura`, `brand/peach`, `brand/mustard`) for categorical distinctions. Use semantic families (`status/success`, `status/warning`, `status/error`) only for status data. Chart scaffolding (axes, legends, labels, type) stays black or white — the data carries the color.

### 6. Accent color

**`brand/blueberry-800` `#71A5E0`** — hero product moments only (completing a transfer, typing an amount). Not a marketing tool. If a marketing surface feels like it needs accent, reach for a gradient or rework the composition.

### 7. Gradients

Gradients are the brand's pop of color — always a supporting element, never the primary visual. Eight canonical gradients, two scopes:

**General brand / marketing:**
- Golden Hour · Lavender Rise · Morning Veil · Daybreak

**Qonto AI / AI agents only:**
- Ai Agent - The Operator · Ai Agent - The Analyst · Ai Agent - The Collector · Ai Agent - The Bookkeepper

Do not apply AI-agent gradients to non-AI surfaces. Do not invent gradient names. Gradients are plugin-exported images — never render as a native vector fill (`GRADIENT_LINEAR`, CSS `linear-gradient`, SVG `<linearGradient>`). If the gradient cannot be obtained via the Qonto Gradient plugin or the asset library, say so and stop. Never substitute a hand-rolled approximation.

### 8. Color in UI shots

When a marketing composition includes rendered product UI, keep the UI's real colors. Do not abstract product colors to force the marketing black-and-white rule onto a UI shot — that misrepresents the product.

### 9. Color in typography

**Typography is black or white only.** No colored headlines, colored callouts, or colored pull-quotes. On white surfaces, type is `#050505`. On dark surfaces, type is `#FFFFFF`.

### 10. Anti-patterns

- Do not use the product palette in marketing outside the dataviz exception.
- Do not use an AI-reserved gradient on a non-AI surface.
- Do not reconstruct a gradient by hand — use the plugin or the asset-library export.
- Do not render a gradient as a native vector fill of any kind.
- Do not apply any color to typography beyond `primary/black` and `primary/white`.
- Do not invert white-led to black-led without a brief signal or editorial rationale.
- Do not use pure `#000000` — Qonto black is `#050505`.

---

## Logo

### 1. Configurations — pick one before anything else

Four canonical configurations. Pick the richest one that fits the canvas. Do not invent combinations.

1. **Full lockup** (symbol + entry points + divider + wordmark) — default when canvas has room. Fits when canvas width ≥ ~8 × X and entry-points text clears the medium floor (≥ 20 px digital, ≥ 12 px print).
2. **Wordmark + entry points** — when the full lockup cannot fit without collapsing the auto gap.
3. **Wordmark alone** — when entry-points fall below the medium floor, or when the audience already has full brand context.
4. **Symbol only** (squircle multiplier or circular badge) — compact/functional contexts, or when the canvas is too small for the wordmark at 24 px height.

**Quick reference:**

| Canvas | X | EP size | Configuration |
|---|---|---|---|
| 1080 × 1080 / 1080 × 1350 / 1080 × 1920 | 86 | 21 px ✓ | Full lockup or wordmark + EP |
| 1920 × 1080 | 86 | 21 px ✓ | Full lockup |
| 1200 × 627 | 50 | 12 px ✗ | Wordmark alone |
| 1200 × 600 | 48 | 12 px ✗ | Wordmark alone |
| 400 × 400 | 32 | 8 px ✗ | Symbol only |

### 2. Color — two modes only

| Background | Wordmark | Symbol |
|---|---|---|
| Light (white or near-white) | `#050505` | Black container, white flower, always-on 1 px white stroke |
| Dark (`#050505` or near-black) | `#FFFFFF` | Black container, white flower, 1 px white stroke (visible on dark) |

The 1 px white stroke on the symbol is always on — on light it is invisible, on dark it delineates the edge. Never invert the symbol to a white container. No gradients, no brand palette colors, no effects.

### 3. Entry points

Qonto Sans Regular, size `round(X × 0.245)`, left-aligned, flush-left block (ragged right is intentional). Three lines maximum.

**Fit test:** if `round(X × 0.245)` < 20 px digital / 12 px print → drop entry points, step down to wordmark alone.

### 4. Placement

**Priority (use first) — bottom, full width:**
- Symbol anchored bottom-left, `X` from the left edge and `X` from the bottom.
- Entry points + divider + wordmark cluster anchored bottom-right, `X` from right edge, same `X` from bottom.
- Gap between symbol and cluster is **auto** — fills remaining width.

**Top placement (reversed):**
- Cluster (wordmark / wordmark + entry points) top-**left**, symbol top-**right**.
- Reading path: eye opens on the wordmark, travels right to the symbol.
- Use when the bottom is occupied by the composition's primary subject.

**Bisected-canvas placement** (content half + image half):
- Wordmark at the canvas-edge margin (content side).
- Symbol at the half-canvas divide, `X` inset from the centre line.
- Auto gap between cluster and symbol fills the content half.

**Cluster-only placements** (no symbol): bottom-right, bottom-left, top-right, or top-left — match the composition's anchor edge.

**Rules for all placements:**
- Margin on every canvas edge = `X`.
- Logo height = `X` in all placements.
- Never center the full lockup horizontally.
- Never mix two anchor edges (symbol top-left + cluster bottom-right).
- When a structural contrasting element (gradient, dark block, photography) splits the canvas, the non-contrasting zone becomes the effective canvas for all foreground elements including the lockup.

### 5. Lockup orientation

- **Horizontal** — default everywhere. Bottom placements, top placements, footers.
- **Vertical** — end frames only: closing slides of a video, logo-only OOH, splash screens where the lockup is the **only element on the canvas**.

**Horizontal-left vs horizontal-right:** `-left` puts entry points to the left of the wordmark (use for bottom placement). `-right` puts the wordmark first (use for top placement, so the wordmark anchors the canvas-left margin).

### 6. Co-branding

- Equal visual weight — match partner logo's optical height to Qonto's wordmark height.
- Order: Qonto first, then partner (left-to-right), unless the partner hosts the communication.
- Separator: vertical divider line, `X` on each side as breathing room.
- Never combine into a single mark.

### 7. Anti-patterns

- Never draw the logo as text or shapes — always import the library component.
- Never rotate, skew, stretch, or slant.
- Never apply shadows, glows, outlines, gradients, or 3D effects.
- Never recolor beyond `#050505` and `#FFFFFF`.
- Never use the flower symbol without its container in production.
- Never invent a lockup outside the five configurations. Step down the reduction ladder — full lockup → wordmark + entry points → wordmark alone.
- Never clone a bottom lockup at the top without flipping the order (bottom = symbol-left + cluster-right; top = cluster-left + symbol-right).
- Never use the logo below minimum size.

---

## Composition

Composition ties everything in a layout to one ratio: `X`. Every type size, margin, gutter, and clear-space decision is an integer or half-integer multiple of `X`.

### 1. Headline + subtitle tiers

Three canonical tiers. Pick one per composition.

| Tier | Headline (Qonto Sans Bold) | Subtitle (Qonto Sans Regular) | Line-height |
|---|---|---|---|
| **Small** | `1 × X` | `0.5 × X` | Headline 98% · Subtitle 110% |
| **Medium** | `1.25 × X` | `0.5 × X` | Headline 98% · Subtitle 110% |
| **Large** | `1.5 × X` | `0.5 × X` | Headline 98% · Subtitle 110% |

Subtitle is single-tier — it does not scale with the headline tier. Gap from headline to subtitle: `0.5 × X`.

**When to use each tier:**
- **Small** — formal, restrained. Document covers, legal-adjacent, when an image or KPI dominates.
- **Medium** — default. Most marketing outputs.
- **Large** — high-impact. Posters, OOH, hero slides, editorial covers.

### 2. Spacing — the X rhythm

Compositions are built from horizontal content bands stacked vertically. Every gap is a multiple of `X`.

- **Canvas margin:** `X` on all four sides.
- **Gap between adjacent content bands:** `1X`.
- **Gap from last content band to lockup:** `≥ 1X` — default `2X` for text-led layouts, relax to `1X` for dense card-heavy layouts.
- **Grid gutter:** `0.5X`.

### 3. Grid

- Gutter between columns: `0.5X`. All columns equal width.

| Canvas shape | Aspect ratio | Columns |
|---|---|---|
| Square / portrait | ≤ 1.5 | 4 |
| Landscape | 1.5–2.5 | 8 |
| Ultra-wide / banner | > 2.5 | 12 |

### 4. Placement

- Headline sits at the top or center of the canvas — never at the bottom.
- Subtitle sits directly under the headline. Same left and right margins. Gap ≈ `0.5X`.
- Logo anchors the bottom per §Logo.4 priority placement.
- Vertical space between subtitle and logo = whatever remains per band-gap rules. Do not fill it with decoration.

### 5. Horizontal alignment

**Left or center only. Never right.**

- **Left** — default. Natural reading flow, strongest with asymmetric imagery or KPI on the right.
- **Center** — formal, balanced, poster-like. Ceremonial comms, title cards, mostly-whitespace canvases.

Subtitle follows the headline's alignment. Never mix within one composition.

### 6. Vertical alignment

**Top or center only. Never bottom.**

- **Top** — default. Headline → visual → logo reading order.
- **Center** — formal, ceremonial, minimal. Block is vertically centered in the content area.

| Horizontal | Vertical | Feel |
|---|---|---|
| Left | Top | Default — reading flow, asymmetric layouts |
| Left | Center | Formal with asymmetric emphasis |
| Center | Top | Balanced, magazine-cover |
| Center | Center | Ceremonial, poster, title card |

### 7. Archetypes — A through F

Six canonical patterns (Stack text/visual, Stack visual/text, Split, Overlay full-bleed, Overlay card, Layered floating). Every composition belongs to one — including paid ads, which map to five of these six. Full descriptions and build recipes in `FIGMA.md § Composition archetypes`.

**Shared rule for all archetypes:** outer margin `X` on all sides; every content band ends at `lockupY − ≥1X`; copy on photography always gets a dark gradient scrim.

### 8. Anti-patterns

- Never right-align headlines or subtitles.
- Never bottom-align the headline block.
- Never use band gaps that are not multiples of X.
- Never invent column counts outside 4 / 8 / 12.
- Never set gutters that differ from `0.5X`.
- Never invent a layout outside archetypes A–F without an explicit reason.
- Never mix headline and subtitle alignments within one composition.
- Never mix headline tiers within one composition.
- Never set body copy in Bold — Bold is reserved for the headline.

---

## Typography

### 1. Family — Qonto Sans only

Qonto Sans is the brand's primary typeface. Proprietary — internal use only.

Six weights, each with an italic:

| Weight | Use |
|---|---|
| **Thin** / Thin Italic | Editorial accent only |
| **Light** / Light Italic | Editorial accent only |
| **Regular** / Regular Italic | Default body, subtitle, entry-points, UI labels |
| **Semi Bold** / Semi Bold Italic | Emphasis within body; UI secondary labels |
| **Bold** / Bold Italic | Default headline |
| **Black** / Black Italic | Hero-headline accent |

Bold + Regular carry the overwhelming majority of brand work. Never synthesise — load the real font file. No faux-italic, no faux-bold.

Always call the family `Qonto Sans`. The SOT's `Qonto Sans v4` label is a transitional artefact — treat it as such and use `Qonto Sans` everywhere in output.

### 2. Principles

- **Accessibility first.** No negative tracking on body, no sub-12 px type, no low-contrast pairings.
- **Balanced brand voice.** Qonto Sans sits between geometric neutrality and warmth. Treat it as a voice, not a utility.
- **Design flexibility.** Five weights × italics is enough range. If you feel the urge to bring in a second family, the hierarchy is wrong — fix the hierarchy.

### 3. Hierarchy — five roles, all scaled from X

| Role | Weight | Size formula | Line-height | Tracking |
|---|---|---|---|---|
| **Headline** | Bold | Small `1X` · Medium `1.25X` · Large `1.5X` | 98% | +0.5% |
| **Subtitle** | Regular | `0.5X` | 110% | +0.5% |
| **Card title** | Bold | `max(22 px, round(X × 0.55))` | 110% | 0% |
| **Body / paragraph** | Regular | `max(16 px, round(X × 0.45))` | 130% | 0% |
| **Caption / label / entry-points** | Regular | `max(12 px, round(X × 0.245))` | 130% | 0% |

- Headlines are sub-leading (98%) so the type block reads as one dense shape; +0.5% tracking opens the counters at display sizes.
- 12 px is the absolute floor. Never ship type smaller.
- Entry-points carry an additional medium-specific floor: 20 px digital / 12 px print. Below the floor, the lockup drops to wordmark-alone.

### 4. Case — sentence case

Sentence case everywhere: headlines, subtitles, body, labels, buttons, nav.

- Capitalise the first word and proper nouns. That's it.
- No Title Case. No ALL CAPS.

### 5. Alignment

- **Headlines:** left or centered. Left is the default.
- **Subtitles:** match their headline's alignment.
- **Body / captions / labels:** left-aligned only.
- **Never right-aligned or justified** in any brand surface.

### 6. Line length and rhythm

- **Body line length: 45–75 characters including spaces.**
- No orphans and no widows — rewrite copy, don't force breaks.
- Watch the rag — the right edge of a left-aligned paragraph should feel balanced.
- **Stacked headlines: break for meaning, not for shape.**
- Trust the font's kerning by default. Only hand-kern at display sizes when a visible pair-spacing issue survives at final size.

### 7. Color — black or white only

Typography is `#050505` or `#FFFFFF` only. See §Color.9.

### 8. Fallbacks — when Qonto Sans can't ship

```
font-family: "Qonto Sans", "Manrope", Arial, sans-serif;
```

- **Manrope** — primary fallback. Open-source, closest metrics.
- **Arial** — ultimate fallback.

Never swap Qonto Sans for Inter, SF Pro, Helvetica, or any other sans.

### 9. Script coverage

Qonto serves FR, DE, IT, ES, and NL. Qonto Sans must cover diacritics (`é è ê ë ï ç à ä ö ü ß ñ`), currency marks (`€ £ $ ¥`), and standard punctuation across all five languages.

When Qonto Sans can't render a script, fall back per-platform for that script run only — never ship `.notdef` boxes:

| Surface | Fallback for unsupported scripts |
|---|---|
| Web | `system-ui, "Noto Sans", sans-serif` |
| iOS | San Francisco (system) |
| Android | Roboto / Noto Sans CJK |
| Print / deck / PDF | Noto Sans |

### 10. Anti-patterns

- No ALL CAPS for emphasis — use weight (Bold) or tier up.
- No decorative tracking — wide-tracked Thin for "elegance" is not a brand move.
- No colored type beyond `primary/black` or `primary/white`.
- No mixing two families in one surface.
- No synthesised weights or slants — always load the real font file.
- No sub-12 px type.

---

## Object styles

Every object in a Qonto composition is either **structural** (compositional scaffolding) or **content** (sits inside that scaffolding). Structural objects are sharp. Content objects can be rounded. This single distinction drives every radius choice.

### 1. The four atomic shapes

| Shape | `cornerRadius` | Role |
|---|---|---|
| **Square** | `0` | Structural scaffolding, hero images, backing cards, full-bleed rectangles, scrims |
| **App-square** | `≈ 0.14 × short_side` | Content tiles: product covers, small image tiles, icon bounding boxes |
| **Circle** | `≥ 0.5 × short_side` | Avatars, dots, circular badges |
| **Pill** | `≥ 0.5 × short_side` | Chips, tags, metric bars, CTA pills |

`cornerSmoothing` stays at `0` on all brand objects except the Qonto symbol's inner square, which uses `0.8`.

### 2. Sharp grounds, rounded accents

- **Structural → sharp (`cornerRadius = 0`).** Backing cards that host headline + lockup, full-bleed rectangles, scrims, band dividers, the hero image.
- **Content → rounded.** Small image tiles, product cards, icon bounding boxes, floating editorial clusters, avatars, chips.

**The test:** is this providing the composition's structure, or is it content sitting inside that structure? Structural → sharp. Content → rounded. If you can't tell, it's structural.

### 3. Choosing a radius for content tiles

In compositions, use the **X-bracketed scale** — discrete multiples of X, not a continuous function of the tile's pixel width:

| Bracket | Radius | Use |
|---|---|---|
| **Small** | `X / 4` | Nested accents — icon bounding boxes inside cards, small floating tiles |
| **Default** | `X / 2` | Default content tile — product cards, image floats, grid cells |
| **Large** | `X` | Hero-scale rounded tile that dominates the composition (rare) |

Two tiles with the same role share the same bracket. Use `0.14 × short_side` as a visual sanity check on isolated tiles outside an X-governed canvas only.

### 4. Nesting — concentric radii

For any two concentric rounded frames:

```
outer_radius = inner_radius + gap_between_frames
```

**Canonical marketing case — icon bounding box inside a content card:**
- Card (default content tile) → `card_r = X / 2`
- Icon-box (nested accent) → `iconBox_r = X / 4`
- Gap (icon-box inset from card edge) → `gap = X / 4`

This resolves both the X-bracketed radii and the concentric rule simultaneously.

The concentric rule governs *rounded inside rounded* only. A sharp backing card can hold a rounded content tile without needing a matching radius.

### 5. Corner smoothing

- **Default: `cornerSmoothing: 0`** for every brand object in marketing.
- **Exception: `cornerSmoothing: 0.8`** for the Qonto symbol's inner square only.

### 6. Three-tier card model

| Tier | Treatment | When |
|---|---|---|
| **Primary** | Solid fill (white or black) + Beautiful Shadows 5-layer stack | Special occasions only — the one card that must float off the page |
| **Secondary** | Flat solid fill, tonally offset from canvas (gray-50 on white / gray-800 on black). No shadow. | **Default.** Most cards on most surfaces. |
| **Tertiary** | Full-bleed media + dark gradient scrim where copy lands | Image-led cards. Scrim is mandatory. |

Reach for secondary first. Promote to primary only when a single card must be elevated. A composition with multiple primary cards defeats the hierarchy.

**Card padding:**

> **`card_pad = round(0.08 × min(cardW, cardH))`** — applied uniformly to all four card edges and to major element gaps inside the card.

### 7. Anti-patterns

- Never use a free radius outside the four atomic shapes.
- Never use `cornerSmoothing: 0.8` on anything except the Qonto symbol.
- Never put a sharp-edged hero image on a rounded backing — structural objects are sharp.
- Never use a circle or pill as an icon bounding box frame (use app-square).
- Never apply a shadow to secondary or tertiary cards.

---

## Iconography

Icons in Qonto marketing are pulled from a single library, locked to a single style, sized from a single scale, and inked black or white only. No improvisation.

**Scope:** marketing surfaces only. Product UI iconography is governed by the design system.

### 1. Library — Material Symbols + in-house overrides

Base set: **Google Material Symbols** (the modern variable-axis family — not the legacy fixed Material Icons). When a Qonto-specific action has no fitting Material glyph, the brand team produces an in-house override. The override wins — don't fall back to a near-match Material icon when an in-house version exists.

Both live in `Icons/` in the asset library.

### 2. Style axes — fixed values

| Axis | Value |
|---|---|
| Family | **Outlined** |
| Fill | **0** (off) — filled variants exist only for SOT-named exceptions |
| Weight | **300** |
| Grade | **0** |
| Optical size | **matches render size** |

### 3. Sizing scale

Five sizes. Pick from the scale — never a custom value.

| Size | Optical size | Use |
|---|---|---|
| 16 px | 20 | Body-inline glyphs, bullet markers |
| 24 px | 24 | Standard marketing inline |
| 40 px | 40 | Card / feature glyph |
| 48 px | 48 | Large feature glyph |
| 64 px | 48 | Empty-state, oversized decorative callout |

Anchor in X: `0.3X – 1.2X` is the expected range. If the icon falls outside this range, the composition probably wants a different headline tier.

### 4. Color

Black (`#050505`) on light surfaces. White (`#FFFFFF`) on dark surfaces. Nothing else. The icon's ink follows the surrounding type's ink.

### 5. Bounding box — optional

When an icon needs a frame, wrap in an **app-square** (§Object styles.1):
- Icon-to-box ratio = `0.5 ×` (16 px icon → 32 px box; 24 px icon → 48 px box).
- Box fill: `neutral/200` (light grey) or transparent.
- `cornerRadius = 0.14 × short_side`, `cornerSmoothing = 0`.

A bounding box is never required — use it only when the icon would otherwise float against a busy backing.

### 6. Anti-patterns

- Never edit, recolour outside black/white, rotate for purpose, distort, or stylise an icon.
- Never mix Material families within a composition (Outlined only).
- Never use a weight other than `300`.
- Never fill an outlined glyph unless a `_filled` SOT variant exists.
- Never use grey or brand-palette colors on icon strokes.
- Never use a circle or sharp square as the icon frame — use app-square.
- Never generate a "Qonto-style" icon from a model — if a custom glyph is needed, the brand team produces it.

---

## Tone of voice

### 1. The four principles

Every piece of copy passes all four. They aren't a pick-one menu — they compose.

| Principle | One-liner |
|---|---|
| **To the point** | Deliver the message in the most efficient way possible. |
| **Playful but polished** | Playful, innovative, and crystal-clear language. |
| **In tune** | Meet each audience on their own wavelength. |
| **At your service** | The customer is the star of the show. |

### 2. To the point

Concision is efficiency, not brevity. Don't use 30 words if 15 better words do the job. The test: does the reader get what they need to act?

| ✅ Aim for | ❌ Avoid |
|---|---|
| Direct | Cold |
| Concise | Dismissive |
| Purposeful | Simplistic |

### 3. Playful but polished

Wit and charm come naturally — but clever wordplay never gets in the way of clarity. Polished ≠ intellectual. Impress by making the message shine.

| ✅ Aim for | ❌ Avoid |
|---|---|
| Quick-witted | Pretentious |
| Confident | Sloppy |
| Friendly yet professional | Bland |

### 4. In tune

Same brand, different registers per audience. Tune by vocabulary, sentence length, and reference points — never by abandoning the other three principles.

| ✅ Aim for | ❌ Avoid |
|---|---|
| Astute | Presumptuous |
| Inclusive | Generic |
| Relatable | Obscure |

### 5. At your service

The customer is the protagonist; Qonto sits in the wings. Frame outcomes as opportunities for the reader, not credit for Qonto.

- `you` = the customer / reader.
- `we` = collective — Qonto and the audience together. Never Qonto-alone.

| ✅ Aim for | ❌ Avoid |
|---|---|
| Supportive | Boastful |
| Understated | Pushy |
| Proactive | Overfamiliar |

### 6. Practical writing rules

- `you` = customer. `we` = collective, never Qonto-alone.
- Sentence case. Brand names retain canonical casing (`Qonto` — never `qonto` or `QONTO`).
- No jargon. No "leverage," "synergise," "frictionless paradigm shift."
- No hyperbole without evidence. Don't claim "best," "fastest," "most-loved" without a citation.
- Positivity framing — problems as opportunities, outcomes as possibilities.
- Inclusive language across FR / DE / IT / ES / NL. No metaphors that don't translate.
- Every word earns its place. No filler, no one-size-fits-all copy, no wordplay that obscures meaning.

---

## Changelog

| Version | Date | Changes |
|---|---|---|
| 4.6 | 2026-05-08 | Full audit: X-system promoted to top-level section. §Non-Figma and §Paid ads removed. Bugs fixed (logo configs count, Semi Bold weight). Redundant anti-patterns, duplicate notes, and changelog history trimmed. |
| 4.5 | 2026-05-08 | Removed header boilerplate. North Star is now the true opening. |
| 4.4 | 2026-05-08 | §Color.4: hex values updated to official Colors — Library values (sourced from Notion). Status families restructured to 50/300/400/800/1000 scale. Accent updated to `brand/blueberry-800 #71A5E0`. |
| 4.3 | 2026-05-08 | §Color: token names updated to match Colors — Library (`neutral/gray-XX`, `brand/[family]-[shade]`, `status/[name]-[shade]`). |
| 4.2 | 2026-05-08 | Added North Star. Added Quick reference Do/Don't table. §Composition.7 archetypes condensed to a pointer — full descriptions moved to FIGMA.md. |
| 4.1 | 2026-05-08 | §Typography.3: clarified that headline tier sizes (1X / 1.25X / 1.5X) are optical cap heights, not font-size values. Added Qonto Sans cap-height ratio (≈ 0.706) and conversion note. |
| 4.0 | 2026-05-07 | Major restructure: brand foundations only. All Figma-specific content extracted to FIGMA.md. |
