---
name: qonto-brand-design-skill
version: 3.0
description: "Qonto brand as code. Apply Qonto's brand guidelines — logo, composition, color, typography, tone, photography — to any output (Figma, HTML, social, print). Pulls ground truth from the Brand Kit SOT Figma file. Always uses Figma library components — never recreates from scratch."
---

# Qonto Brand Design Skill

> Version: 3.0 · Last updated: 2026-04-28 · Status: living document
>
> Single source of truth: [Qonto Brand Kit — SOT (Figma)](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT) · `fileKey: 9MBP81zVpoj7hlLS8gf4eV`

You are creating work for Qonto. This skill is the consolidated source for Qonto's brand. Apply it to every visual or written output — Figma frames, HTML, social posts, flyers, decks, dashboards.

When the output lives in Figma, **never draw logos, colors, or type as shapes or hard-coded values**. Pull design system components and tokens from the linked Figma libraries.

---

## Brand identity

Qonto is the European leader in business finance management for SMEs and freelancers — 500,000+ businesses across France, Germany, Italy, Spain, and the Netherlands.

**Brand personality** — every piece of work should feel like it came from the same hand:
- **To the point** — clear, concise, no jargon.
- **Playful and spirited** — professional yet approachable.
- **At ease** — calm, smooth, frictionless.
- **Always attentive** — empathetic, contextually aware.

**The marketing / product split** — the most important architectural rule:
- **Marketing & brand communications** — white-led, black-secondary, grayscale for content hierarchy. No product palette except in dataviz. See §Color.
- **Product** — full expressive palette (Blueberry, Mint, Plum, Sakura, Peach, Mustard) plus semantic status families (Success, Warning, Error). See §Color.

When unclear which context applies, ask.

---

## Universal rules

- Primary typeface: **Qonto Sans** (custom, proprietary). Fallback: Manrope → Arial. See §Typography.
- Available weights: **Thin, Light, Regular, Bold, Black** — each with an italic. There is **no Medium** and **no Semi Bold** weight; passing `style: 'Medium'` or `style: 'Semi Bold'` to Figma will fail to load. Default: Regular. Headlines: Bold. Sentence case only — never ALL CAPS.
- Minimum type size: **12 px** (floor across body, captions, labels, entry-points). See §Typography.4.
- Generous whitespace. Corner-radius language is split: **structural objects are sharp (`cornerRadius = 0`); rounded corners are reserved for floating content** (product covers, small image tiles, icon bounding boxes, avatars, chips) and resolve to one of the four atomic shapes. See §Object styles.
- Never use pure `#000000` — Qonto's black is `#050505` (token `primary/black`). See §Color for the full palette.

---

## Color

Qonto marketing is **black and white**, with **grayscale for content hierarchy**. The **product palette** lives inside product UI, not in marketing — the one exception is dataviz. **Gradients** are the strategic pop of color that complements the black-and-white frame without anchoring it. This section is the canonical source for every color decision in any Qonto output.

**DS vs SOT.** All hex values below are pulled directly from the Brand Kit SOT Color page ([node 2:18028](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=2-18028)). The design system is mid-migration to match these values — until it completes, the hex in this file wins over a conflicting DS token. Flag the drift to the brand team; do not silently pick one.

### 1. The black-and-white principle

**Qonto is a white-and-black brand, in that order.** White is the primary surface; black is the secondary. Every composition starts on a white surface unless the brief demands otherwise. Inversion (black-led) is possible — nocturnal campaigns, dark product contexts, specific editorial tones — but it is the exception, not an equal-weight alternative. The trigger for inversion is **both** an explicit brief signal *and* editorial judgement: if the brief does not ask for dark and no editorial rationale stands up to scrutiny, default to light. When in doubt, ask.

Why: the SOT states *"our palette is deliberately reduced to black and white. This isn't a limitation — it's a statement. It lets our product, photography, and content do the talking without introducing color."* Light-led keeps product and content as the protagonists; dark-led pulls the frame itself forward and should only happen when that is the intent.

### 2. Primary tokens — white and black

| Token | Hex | Role |
|---|---|---|
| `primary/white` | `#FFFFFF` | Primary surface; primary ink on dark backgrounds |
| `primary/black` | `#050505` | Secondary surface; primary ink on light backgrounds |

Never use pure `#000000`. Qonto black is `#050505` — a near-black that reads richer against photography and print. Same token §Logo.3 uses for the wordmark.

### 3. Grayscale — structure without color

Grayscale exists to **enhance content hierarchy**, not to introduce color. Per the SOT: *"these neutral grays provide the range needed for UI hierarchy, borders, disabled states, and secondary text — without introducing color. Use these values to ensure sufficient contrast ratios across all touchpoints. They extend our black-and-white foundation into the functional details where nuance matters."*

**The scale — 11 steps:**

| Token | Hex | Typical use (descriptive, not prescriptive) |
|---|---|---|
| `neutral/900` | `#1A1A1A` | Near-black ink; heavy text on light |
| `neutral/800` | `#262626` | Dark ink |
| `neutral/700` | `#3D3D3D` | Dark ink |
| `neutral/600` | `#616161` | Secondary text, meta |
| `neutral/500` | `#8F8F8F` | Tertiary text, captions |
| `neutral/400` | `#B8B8B8` | Disabled states |
| `neutral/300` | `#CCCCCC` | Borders, dividers |
| `neutral/200` | `#E0E0E0` | Subtle borders |
| `neutral/100` | `#E8E8E8` | Fills, container backgrounds |
| `neutral/50`  | `#F5F5F5` | Section backgrounds |
| `neutral/25`  | `#F9F9F9` | Page-chrome backgrounds |

The "typical use" column is descriptive — the SOT does not hard-assign each step to a role. Use the scale as a continuous resource: closer steps = subtler hierarchy, further apart = stronger contrast. Honour WCAG contrast for any text step against its background.

### 4. Product color palette — product only

The product palette is designed for product UI: semantic states (success, warning, error), categorical distinctions in charts and dashboards, and interface signals. **It does not appear in marketing or brand communications.** The one exception is dataviz (§5).

**The matrix — 9 hue families × 5 weights:**

| Family | 1000 | 900 | 800 | 100 | 50 |
|---|---|---|---|---|---|
| **Blueberry** | `#163470` | `#2450B0` | `#3468D8` | `#9CB8EC` | `#E0EAFB` |
| **Mint**      | `#085C58` | `#0E9088` | `#18BEB0` | `#70DCD0` | `#D0F2EE` |
| **Plum**      | `#441E80` | `#6A34BB` | `#8C52E0` | `#C49CE4` | `#EEE0FA` |
| **Sakura**    | `#7C1232` | `#B82050` | `#E03868` | `#F098B4` | `#FAE0E8` |
| **Peach**     | `#7C3600` | `#B85000` | `#E06808` | `#F0AD68` | `#FAE6D2` |
| **Mustard**   | `#686000` | `#A89800` | `#D0C000` | `#E4DC58` | `#F8F5C8` |
| **Success**   | `#086430` | `#0E964A` | `#1CC060` | `#68DC9C` | `#D0F4DE` |
| **Warning**   | `#704806` | `#B06A04` | `#E08A10` | `#F0C468` | `#FAF0DA` |
| **Error**     | `#7C1C14` | `#BA2C22` | `#E44038` | `#F09890` | `#FAE0DC` |

**Expressive** (categorical, non-semantic): Blueberry, Mint, Plum, Sakura, Peach, Mustard.
**Semantic** (status): Success, Warning, Error.

Weights are discrete roles, not a smooth scale: **1000 / 900 / 800** cover dark-to-base, **100 / 50** cover soft-to-wash. Mid-tones (200–700) are deliberately absent from the product palette — use them only from the grayscale (§3).

### 5. Dataviz exception

Charts, infographics, and any chart-like surface **may** use the product palette in marketing — that is why the palette's categorical families exist. Rules of thumb:

- Lead with the expressive families (Blueberry, Mint, Plum, Sakura, Peach, Mustard) for categorical distinctions.
- Use semantic families (Success, Warning, Error) only for status data (gains/losses, pass/fail, risk tiers) — not as decorative colors.
- Chart axes, legends, labels, and any type stay `primary/black` on light or `primary/white` on dark per §8. The data carries the color; the scaffolding does not.
- One palette per chart — do not mix expressive and semantic families in a single series unless the data semantics require it.

Every other marketing surface (hero imagery, typography, UI in lifestyle comps, editorial layouts) stays black-and-white plus grayscale.

### 6. Accent color

There is one accent color: **Blueberry 800 `#3468D8`**. Per the SOT: *"accent color should only be used in key hero moments that truly define the Qonto experience, like when completing a transfer or when typing a specific amount."*

Accent is a product moment, not a marketing tool. If a marketing surface feels like it needs the accent, reach for a gradient (§7) or rework the composition — do not drop Blueberry 800 onto a flyer.

### 7. Gradients

Gradients are the brand's pop of color — the one place marketing borrows from the product palette. Per the SOT: *"gradients are the perfect complement of a pure black and white brand framework, they provide a pop of color without anchoring the brand with any specific hex value. They should be used strategically and always as a supporting element."*

**The eight canonical gradients:**

| Name | Usage |
|---|---|
| Golden Hour | General brand / marketing |
| Lavender Rise | General brand / marketing |
| Morning Veil | General brand / marketing |
| Daybreak | General brand / marketing |
| Ai Agent - The Operator | **Qonto AI / AI agents only** |
| Ai Agent - The Analyst | **Qonto AI / AI agents only** |
| Ai Agent - The Collector | **Qonto AI / AI agents only** |
| Ai Agent - The Bookkeepper | **Qonto AI / AI agents only** |

The four AI-agent gradients carry the `Ai Agent - ` prefix in their names precisely so the scope is visible at the point of use — that transparency is deliberate. Per the SOT: *"they should be used strategically and always as a supporting element."* Treat the AI-agent scope as a hard rule — do not drop one onto a campaign surface, and do not invent new gradient names.

**Canonical spec.** Gradients are built from the product color palette values, but the SOT **does not publish per-gradient hex stops**. In the Brand Kit file, each gradient card is an **image export** of the in-house Qonto Gradient plugin. The canonical spec is the plugin's output — not a stop list reconstructable by hand.

**Never render a gradient as a vector/native fill** — not in Figma (`GRADIENT_LINEAR`, `GRADIENT_RADIAL`, SVG `<linearGradient>`), not in code (`linear-gradient(...)`, CSS `background-image`), not as a "reference" or "placeholder" to be swapped later. The plugin-exported image is the only valid form. A vector approximation gets read as canon the moment it leaves your hands and drifts the brand; omitting the gradient until the export is available is always safer.

**How to obtain a gradient:**

| Context | How | Notes |
|---|---|---|
| In Figma (designer-led) | Run the **Qonto Gradient** plugin — [figma.com/community/plugin/1625521818592255695](https://www.figma.com/community/plugin/1625521818592255695). The plugin writes the gradient into the selected layer. | Install once per workspace. |
| In Figma (AI-agent-led) | Recommend the plugin to the designer in your reply; link the community URL. If the plugin or the asset-library export is unreachable, leave the surface without the gradient and flag the gap — do not substitute a native `GRADIENT_LINEAR`/`GRADIENT_RADIAL` fill, not even labelled "placeholder". | A §Composition.9b-style scrim is a compositional mechanic, not a brand gradient. |
| Outside Figma (decks, HTML, email, print, Canva) | Pull exported PNG / SVG assets from the brand asset library's `Gradients/` folder — see §Asset library. *(Folder pending; until it lands, gradients have no outside-Figma export — say so and stop.)* | Same conventions as the logo export pipeline. |
| Raw spec fallback | **There isn't one.** If you cannot reach the plugin or the asset library, say so and stop — do not invent stops, and do not render a vector fallback (Figma native gradient, CSS `linear-gradient`, SVG `<linearGradient>`). Vector references get mistaken for canon and drift the brand. | Intentional: gradients are sealed exports, not reconstructable from memory. |

### 8. Color in UI shots

When a marketing composition includes an illustrated or rendered product UI (dashboards, transfer screens, card views), **keep the UI's real colors**. Per the SOT: *"illustrations are representing specific UI components and flows, we should stay true to the actual experience instead of inventing abstract conventions. Color should follow the same direction sticking to the source components. Embrace black, white and grayscale, status colors when needed, and use gradient to drive attention to any specific element."*

Practically: if the real product screen shows Success 800 on a confirmed-transfer state, the marketing render shows Success 800. If the real screen is grayscale until the user interacts, the render is grayscale. Do not abstract product colors away to force the marketing black-and-white rule onto a UI shot — that misrepresents the product.

### 9. Color in typography

**Typography is black or white. Never any other color.** Per the SOT: *"always black or white, never use any other color in typography."*

- No colored headlines, no colored callouts, no colored pull-quotes.
- No product palette colors in type, even in dataviz — chart axes, legends, and labels stay black/white/gray; the data bars/points/areas carry the color.
- Any semantic-color type (Success, Warning, Error text) is a product-UI concern governed by the DS — not a brand tool.

On a white surface, type is `primary/black`. On a black/dark surface, type is `primary/white`. On intermediate grayscale surfaces, pick whichever of the two gives WCAG contrast.

### 10. Anti-patterns

- Do not pick a color from memory. Every hex comes from the tables above or via a Figma variable reference.
- Do not use the product palette in marketing outside the dataviz exception (§5).
- Do not use an AI-reserved gradient (`Ai Agent - The Operator` / `The Analyst` / `The Collector` / `The Bookkeepper`) on a non-AI surface.
- Do not reconstruct a canonical Qonto gradient by hand — use the plugin or the asset-library export.
- Do not render a gradient as a native/vector fill (`GRADIENT_LINEAR`, `GRADIENT_RADIAL`, CSS `linear-gradient`, SVG `<linearGradient>`) — not as a placeholder, not as a reference, not as an approximation. Vector references get mistaken for canon and drift the brand; omit the gradient until the plugin export exists.
- Do not apply any color to typography beyond `primary/black` and `primary/white`.
- Do not invert white-led to black-led without a brief signal or an editorial rationale that stands up to scrutiny.
- Do not use pure `#000000` — Qonto black is `#050505`.
- Do not let a structural color element (gradient, dark block, photography, scrim) bleed into the bottom 2X band where the full lockup sits. The lockup must rest on a single color — see §Logo.5.

### 11. For AI agents — color checklist

Before applying color to any output, walk this list:

1. **Marketing or product?** Marketing → black + white + grayscale. Product → full palette available. Ambiguous → ask.
2. **If marketing and color appears** — is it dataviz or a UI shot? Yes → narrow exception (§5 or §8) applies. No → strip the color.
3. **If using a gradient** — is the surface Qonto AI / agent-related? Then the four `Ai Agent - *` gradients are candidates. Otherwise use Golden Hour / Lavender Rise / Morning Veil / Daybreak. Acquire via the plugin or the asset-library export, never by hand-rolling stops.
4. **In Figma** — prefer variable references (`primary/black`, `neutral/500`, etc.) over raw hex when the library is linked. If a DS token value disagrees with a hex here, use the hex and flag the drift.
5. **Outside Figma** (HTML, SVG, print) — use the hex values from the tables above verbatim.

---

## Logo

The logo is the most frequently misapplied element in AI-generated work. Follow this section exactly.

### 1. Configurations — pick one before anything else

Qonto has five canonical logo configurations. Decide which applies, then use the matching library component. Do not invent combinations.

**Decision rule — prefer the richest configuration that fits.** In order of preference:

1. **Full lockup** (symbol + entry points + divider + wordmark) — use this by default whenever the canvas has room. It stretches edge-to-edge between the layout margins (see §Logo.5), so the true test is geometry, not aesthetics. Specifically, it fits when:
   - Canvas width ≥ **~8 × X** (canvas margin + symbol + minimum auto gap + entry points + X/2 + divider + X/2 + wordmark + canvas margin), AND
   - Entry-points text `round(X × 0.245)` clears the **medium-specific floor** per §Logo.4: `≥ 12 px` print, `≥ 20 px` digital. Practically: `min(canvas_w, canvas_h) ≥ 980 px` for print, **`≥ 1025 px` for digital** (since `X` is 8 % of min on digital).
2. **Wordmark + entry points** — when the full lockup would be forced to collapse its auto gap (symbol and cluster touching the minimum). Keeps the service descriptor; drops the symbol.
3. **Wordmark alone** — when entry-points fall below the medium-specific floor, or when the audience already has full brand context. **This is the canonical move for tight social formats** — `1200 × 627` LinkedIn ads (X = 50, EP = 12 below the 20-floor), email banners, most YouTube thumbnails (X = 58, EP = 14 below the 20-floor). Trying to keep entry-points at sub-floor sizes produces unreadable text and breaks the X-anchored hierarchy.
4. **Symbol only** (squircle multiplier or circular badge) — compact/functional contexts, or when the canvas is too small for the wordmark at 24 px height.

**Quick decision table — which configuration for which surface:**

| Canvas | Medium | X | EP at X × 0.245 | Configuration |
|---|---|---|---|---|
| `1080 × 1080` IG square / `1080 × 1350` IG portrait / `1080 × 1920` IG Story | digital | 86 | **21 px** ✓ (>20) | Full lockup or wordmark + entry points |
| `1920 × 1080` deck slide (presented on screen) | digital | 86 | **21 px** ✓ | Full lockup |
| `1920 × 1080` printed deck handout | print | 54 | **13 px** ✓ (>12) | Full lockup |
| `2880 × 1620` OOH / DOOH (print viewing distance) | print | 81 | **20 px** ✓ | Full lockup |
| `1200 × 627` LinkedIn sponsored content | digital | 50 | **12 px** ✗ < 20 floor | **Wordmark alone** (drop entry-points) |
| `1200 × 600` email banner | digital | 48 | **12 px** ✗ < 20 floor | **Wordmark alone** |
| `1280 × 720` YouTube thumbnail | digital | 58 | **14 px** ✗ < 20 floor | **Wordmark alone** |
| `400 × 400` favicon-class | digital | 32 | **8 px** ✗ < 20 floor | **Symbol only** |

**The cluster fit-test, plain.** *"Compute `round(X × 0.245)`. If the result is ≥ 12 (print) or ≥ 20 (digital), ship the entry-points cluster. Otherwise drop entry-points and use the wordmark alone (or wordmark + symbol composed manually)."* This is the rule that keeps the lockup legible at every scale Qonto ships. **Do not** try to keep entry-points below the floor by using a smaller proportion or pushing the lockup oversized — both break the X-anchored hierarchy.

When in doubt, start from §Logo.5 priority placement and fall back to the next configuration only when the geometry breaks.

| Configuration | When to use | Library component |
|---|---|---|
| **Wordmark alone** ("Qonto") | Default for marketing layouts where the viewer already has brand context | `Qonto logo wordmark` |
| **Wordmark + entry points** | External-facing materials where the audience may not know what Qonto does. Entry points = the service descriptor ("Business Account", "Company Creation", "Invoicing") | `Qonto logo wordmark` (variant with entry points) |
| **Full lockup** (symbol + entry points + divider + wordmark) | Formal external materials where both the brand and the service need to be named | Composed — see §Logo.8 recipe. Uses `Qonto logo square` (with cornerRadius override for squircle) + entry-points text + 1 px divider + `Qonto logo wordmark` |
| **Symbol only** ("multiplier", squircle container) | Compact/functional contexts, app icon, in-layout anchor | `Qonto logo square` with cornerRadius ≈ 0.22 × size applied to the inner `square` frame. See §Logo.8 |
| **Symbol only** (circular avatar) | Favicon, off-platform social avatar, on-platform avatar | `Qonto logo badge` (circular container, no override needed) |
| **Flower glyph** (no container) | Never use bare — only inside a composed container. Reserved for sub-brand compositions | `Qonto logo flower` |

**Never** combine the symbol and wordmark side by side outside the approved lockup configurations.

### 2. Library components — always import, never redraw

When working in Figma, **always** use `figma.importComponentByKeyAsync(key)` and instantiate via `.createInstance()`. Never draw the logo as text or vector shapes.

Before placing any logo, call `search_design_system` with the file's `fileKey` to confirm the component is subscribed and get the latest key.

**Logos Library — `Logos - Library`** (brand/marketing context):

| Component | Key |
|---|---|
| Qonto logo wordmark | `ea8c642aa816c04f75bb326581c12a90e51c833e` |
| Qonto logo flower | `feb4e263f9976e7c1ffb788e22ecf45942707eee` |
| Qonto logo badge | `d137cbe69ebbac55c1e9f4307da8bfe5aed91afb` |
| Qonto logo square | `8aa7d855955618d4b44821f577443de9de00a0eb` |

Sub-brand lockups (use only when the work is specifically for these sub-brands):
- `Qonto facturation logo`, `Qonto creation logo` — search via `search_design_system`.

**In-app assets Library — `In-app assets`** (product UI context):

| Component | Key |
|---|---|
| qonto wordmark | `edb4e3f7ac7687c59adcc1eaf643796199d22ce2` |
| qonto_flower | `6351139248035c632f0f3bbbfb635e7389ff975a` |

Use the In-app components inside product UI surfaces; use the Logos Library components in marketing/brand outputs.

### 3. Color — two colors, always

The logo exists in exactly two color modes:

| Background | Wordmark | Symbol (flower in app-container) |
|---|---|---|
| Light (white or near-white) | Fill `primary/black` = `#050505` | Black container, white flower glyph (with the always-on white stroke from below — invisible on light) |
| Dark (`#050505` or near-black) | Fill `primary/white` = `#ffffff` | Black container, white flower glyph + **1 px white stroke around the container** |

**Symbol stroke — always on.** Per the SOT Color spec ([node 220:52555](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=220-52555)): *"We don't invert the multiplier color when used over dark background, instead we add a white stroke around it to delimitate its shape."* The skill's canonical interpretation is to **always apply the 1 px white stroke** to the symbol's outer container. On light surfaces it's invisible (white-on-white); on dark surfaces it delineates the squircle's edge. Keeping it always-on means agents don't need a "is this background dark?" branch — one symbol asset, one stroke setting, robust against the background changing.

**Do not invert the flower's colors on dark backgrounds.** The `qonto-symbol-multiplier-white.svg` asset (white squircle + black flower) exists in the asset library as a legacy file; **prefer the canonical `qonto-symbol-multiplier-black.svg` (black squircle + white flower) + always-on 1 px white stroke** for every placement. The white-asset is reserved for very specific exception cases (e.g. an embossed-relief OOH treatment) — flag any planned use to the brand team first.

```javascript
// After figma.createNodeFromSvg(symbolBlackSvg):
//   Find the outer squircle path (the largest fill-#050505 path)
//   Add the always-on stroke
const squirclePath = symbol.findOne(n => n.type === 'VECTOR' &&
  Array.isArray(n.fills) && n.fills.some(f => f.color && f.color.r < 0.1));
squirclePath.strokes = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
squirclePath.strokeWeight = 1;
squirclePath.strokeAlign = 'INSIDE';
```

The corresponding rule in §Logo.8's full-lockup Figma recipe inverts only the **wordmark** ink on dark backgrounds; the symbol always stays canonical (black squircle + stroke).

No gradients, no brand palette colors, no outlines (except the symbol stroke rule above), no effects.

**Figma color tokens**
- Primitive (always exact, no theming): `primary/black` (`#050505`), `primary/white` (`#ffffff`) — from `Colors - Library`, collection "Primitive colors".
- Semantic (prefer for product contexts): `content/primary-a` (`#050505`), `content/primary-b`, `border/primary` — from `Product Foundations`, collection "Semantic colors".

**DS vs SOT:** if a DS token value disagrees with a hex in this file, the hex wins (the DS is mid-migration to match the SOT). Flag the mismatch to the brand team. Confirmed in-sync as of 2026-04-22: `content/primary-a` = `primary/black` = `#050505`.

### 4. Sizing — the X-system

The X-system replaces the old vague "x-height of wordmark" guidance with a single canvas-anchored ratio that governs **everything in the composition** — margins, gutters, lockup, type, content-tile radii, vertical rhythm.

> **`X = 0.05 × min(canvas_w, canvas_h)`** for **print**. **`X = 0.08 × min(canvas_w, canvas_h)`** for **digital**. Mnemonic: **5 for ink, 8 for screens.**

`X` is the single brand unit. Every spec in §Logo, §Composition, §Typography, and §Object styles resolves to a multiple of `X`. The unit collapses what used to be three separately-tuned ratios (compositional X, lockup X, clear-space X) into one — when the SOT was updated 2026-04-28, the lockup-internal anchor was unified back into `X`, and the digital uplift to 8 % carries the whole composition (not just the lockup).

**The print / digital boundary.**

| Medium | Surfaces | `X` |
|---|---|---|
| Digital (intimate viewing) | Social, web, in-app, video, email banners, deck slides presented on screen, dashboards, banner ads | `0.08 × min(W, H)` |
| Print | OOH, **DOOH** (digital out-of-home — pixels, but viewed at distance), flyers, brochures, posters, business cards, packaging, deck PDFs printed for handout | `0.05 × min(W, H)` |

DOOH is digital pixels at print viewing distance — follow print at 5 %.

**Why one X, not two.** Earlier iterations of this skill (v2.18) split a separate `X_logo` for the lockup so the brand mark could grow on digital while the layout stayed calibrated. The split worked, but produced an inconsistency at the canvas edge: the lockup's clear-space halo (8 %) extended beyond the layout margin (5 %) on digital. The clean fix is to bump *everything* to 8 % on digital — the SOT's new headline tiers (1, 1.25, 1.5 — see §Composition.1) come down to neutralise the cascade so absolute type sizes stay roughly where they were, and the lockup's clear-space halo touches the canvas edge cleanly because they share the same anchor.

**Verification against SOT.** The reference layout in the Brand Kit SOT is 2000 px wide and frames a print artefact; its wordmark is rendered at 100 × 356. That matches `X = 100` (5 % of 2000), wordmark height = `X`, wordmark width = `X × (492 / 138) = 356`. The 8 % digital uplift is a per-medium constant on top of the SOT's print baseline.

| Canvas | Medium | Min dim | `X` | Wordmark width |
|---|---|---|---|---|
| 1080 × 1080 IG square | digital | 1080 | **86** | 308 |
| 1080 × 1350 IG portrait | digital | 1080 | **86** | 308 |
| 1080 × 1920 IG Story | digital | 1080 | **86** | 308 |
| 1920 × 1080 deck (presented on screen) | digital | 1080 | **86** | 308 |
| 1920 × 1080 deck (printed handout) | print | 1080 | 54 | 193 |
| 1200 × 630 LinkedIn / OG | digital | 630 | **50** | 179 |
| 2480 × 3508 A4 brochure | print | 2480 | 124 | 442 |
| 2880 × 1620 OOH | print | 1620 | 81 | 289 |
| A4 print (210 × 297 mm) | print | 210 mm | 10.5 mm | 37.4 mm |

**Margin** — every edge of the canvas has `X` of padding. Do not place anything (logo, text, image) closer to the edge than `X`. The lockup, headlines, body, photos all share this same canvas margin — there is no longer a separate "lockup margin."

**Clear space around the lockup** — `X` on all four sides of the lockup. Because layout margin and clear space are both `X`, the lockup placed at the canvas margin has its clear-space halo coinciding with the canvas edge — exactly as the SOT clear-space diagram ([node 220:52554](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=220-52554)) shows.

**Logo dimensions** — the wordmark component (`Qonto logo wordmark`, source 492 × 138, aspect ratio 3.57 : 1):

```
wordmark_height = X
wordmark_width  = X × (492 / 138) ≈ X × 3.57
```

The logo has intentional brand presence — at 1080 px digital, the wordmark is ~28 % of canvas width. It anchors the composition with weight; it does not dominate it.

After instantiating the component in Figma, call `instance.resize(wordmark_width, wordmark_height)`. The component preserves its internal proportions.

**Cluster sourcing — Figma comps build manually; non-Figma surfaces use the asset-library SVG.** The wordmark + entry-points cluster has two valid construction paths, and the choice matters for legibility:

- **In Figma marketing comps:** **build the lockup manually** — wordmark SVG (vector) + divider rectangle + **entry-points as a Figma TEXT node** (Qonto Sans Regular, size = `round(X × 0.245)`). Text gets sub-pixel anti-aliasing and font hinting at any scale, which is the difference between "21 px reads cleanly" and "21 px renders as fuzzy paths" — the asset-library cluster SVG ships entry-points as **vector path data**, which loses readability when scaled below ~30 px on screen. Rendering as text fixes that. See §Reference compositions §1 / §2 for the canonical Figma recipe.
- **In non-Figma surfaces** (HTML, decks, print exports, social tools that accept SVG): fetch the cluster SVG directly from the asset library — the renderer handles text shaping and the entry-points read fine because it's the renderer's font engine, not Figma's vector rasterizer, doing the work.

The sizing math below applies in both cases — it's the geometry that matters, not the construction.

**Sizing the wordmark + entry-points cluster.** The `wordmark height = X` rule applies to the **wordmark glyph** ("Qonto") regardless of which lockup configuration the agent is rendering. When using the asset-library entry-points cluster SVG (viewBox `965 × 162`) as a single import, the cluster wraps the wordmark inside a larger frame that also holds the divider, the entry-points text, and clear-space padding. **The wordmark glyph in that cluster occupies `144 × 162 = 89 %` of the viewBox height** (measured empirically — Q-glyph cap-height + descender). To render so the wordmark glyph hits `X`:

```
cluster_height = X × (162 / 144) ≈ X × 1.125
cluster_width  = cluster_height × (965 / 162) ≈ X × 6.7
```

Worked examples:

| Canvas | Medium | X | cluster_height | cluster_width | wordmark glyph in render |
|---|---|---|---|---|---|
| 1080 × 1080 / 1080 × 1350 / 1080 × 1920 (IG square / portrait / Story) | digital | 86 | 97 | 575 | 86 |
| 1200 × 627 (LinkedIn ad) | digital | 50 | 56 | 333 | 50 — but EP < 20 floor → drop EP, ship wordmark alone |
| 1920 × 1080 (deck presented on screen) | digital | 86 | 97 | 575 | 86 |
| 1920 × 1080 (printed deck handout) | print | 54 | 61 | 362 | 54 |
| 2880 × 1620 (OOH) | print | 81 | 91 | 543 | 81 |

**Don't render the cluster at `h = X` directly** — that pushes the wordmark down to `0.89 X`, undersizing it relative to the X-system. **Don't render the cluster at `h = 162` (1:1 viewBox) either** — that oversizes the wordmark and the lockup competes with the headline rather than anchoring it. Use `h ≈ 1.125 × X` so the wordmark glyph lands at `X` and everything else (divider, entry-points text, clear space) scales proportionally.

**Symbol (flower) dimensions** — when used standalone (app icon, avatar, favicon) or as part of the full lockup: `symbol_size = X × X` (square). The symbol's container handles its own internal padding.

**Full lockup spacing** (symbol + entry points + divider + wordmark): each piece has height `X`. The lockup stretches the full layout width — the gap between the **symbol** and the **(entry points + divider + wordmark) cluster** is **auto** (it fills the remaining width between margins). Inside the cluster, gaps are fixed at `X / 2`: entry points → divider = `X / 2`, divider → wordmark = `X / 2`. Vertical divider: height `X`, 1 px stroke. Squircle corner radius on the symbol's inner `square` frame ≈ `X × 0.22`.

Minimum auto gap — if the gap would compress below `X`, the full lockup no longer fits: drop to wordmark + entry points per §Logo.1. See §Logo.8 for the exact recipe.

**Scalability floor** — never render below these sizes:
- Wordmark alone or wordmark+symbol: minimum 24 px height on screen, 0.25 in print.
- Below 24 px on screen, switch to **symbol only** (favicon/app icon).
- With entry points: the entry-points text size has a **medium-specific floor** — `< 12 px` (print) or `< 20 px` (digital). If the layout cannot meet its medium's floor, drop the entry points and ship wordmark-alone (or wordmark + symbol).

**Entry-points typography** — from the SOT (measured on node 220:51724):
- Family: **Qonto Sans** (not Inter). Always use this family name. Some SOT nodes currently carry the intermediate label `Qonto Sans v4` — treat that as a naming artefact and use `Qonto Sans` in all output.
- Weight: **Regular**.
- Size: `round(X × 0.245)` px — at `X = 86` (1080 IG digital) that's 21 px; at `X = 100` (large print) that's 24 px. **Dual hard floor: 12 px print, 20 px digital — drop the entry points if the computed value falls below the medium's floor.**
- Line-height: `round(X × 0.36)` px — at `X = 86` that's 31 px; at `X = 100` that's 36 px.
- Color: same as the divider and wordmark — `#050505` on light, `#ffffff` on dark.
- **Alignment: left within the text block.** Lines start flush left; the block's right edge sits `X / 2` from the divider. The ragged right edge (Invoicing shorter than Business Account) is intentional — don't right-align.
- Three lines maximum: `Business Account\nCompany Creation\nInvoicing` is the canonical copy. Translate per market; keep to three short lines.

### 5. Placement

**Priority placement (use this first).** The full lockup is **edge-anchored along the bottom of the canvas and stretches the full layout width**:

- Symbol (squircle) anchored at bottom-left, `X` from the left edge and `X` from the bottom.
- Entry points + divider + wordmark anchored as a tight cluster at bottom-right, `X` from the right edge, same `X` from the bottom.
- The horizontal space between the symbol and the cluster is **auto** — it fills whatever width remains between them. The cluster stays tight (`X/2` between its pieces); the symbol does not drift rightward.
- Vertically, the whole lockup sits at one baseline at height `X`, with `X` of clear space above it.

Reference: Brand Kit SOT node [220:51714](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=220-51714). Use this for posters, flyers, portrait social, OOH, document covers — any long-lived branded artefact with a clear bottom edge.

**Also valid.** All other placements in the SOT Placement section ([node 220:52561](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=220-52561)) are acceptable when the priority placement does not serve the composition. They follow the same rules — `X` margin on all sides, height `X`, tight cluster, auto gap when both symbol and cluster appear:

- **Top edge-anchored, full width.** **Cluster (wordmark / wordmark + entry points) top-LEFT, symbol top-RIGHT** — *reversed* from the priority bottom placement. Reading-path rationale: when the lockup is at the top, the eye lands on the cluster first and travels right to the symbol, mirroring how readers scan a page top-to-bottom and left-to-right. The symbol becomes the trailing "punctuation," not the lead. Auto gap between cluster's right edge and symbol's left edge fills the canvas width. Use this whenever the canvas's bottom is occupied by the brief's primary subject — full-bleed photography (archetype D) where the subject sits in the lower two-thirds, busy compositions where the bottom strip is unavailable, or any layout where the brand needs to read before the content rather than after.
- **Bottom-right cluster only** (no symbol). Use when the wordmark or wordmark + entry-points configuration is chosen and the symbol is dropped per the §Logo.1 reduction ladder.
- **Bottom-left cluster only** (no symbol). Mirror of the above.
- **Top-right / top-left cluster only.** Same, anchored to the top edge — when no symbol is used, the cluster anchors to whichever corner the composition needs.

### 5b. Lockup orientation — horizontal default; vertical for end frames

The asset library ships the wordmark + entry-points lockup in two orientations:

- **Horizontal** (viewBox `965 × 162`, ratio `≈ 5.96 : 1`). Three asset variants: `horizontal-left-<LANG>` puts entry-points on the left of the divider, wordmark on the right; `horizontal-right-<LANG>` is mirrored (wordmark on the left, entry-points on the right); the bottom-anchored full-lockup composition uses one of these depending on which side the symbol sits. **Use horizontal everywhere by default** — bottom placements, top placements (paired with a separate symbol per §Logo.5), inline footers, anywhere the lockup sits inside a populated composition.
- **Vertical** (viewBox `492 × 359`, ratio `≈ 1.37 : 1`). One asset variant: `vertical-left-<LANG>` stacks the wordmark over the entry-points. **Reserve vertical for edge / end-frame use only** — closing slides of a video, logo-only OOH placements, splash screens, anywhere the lockup is the **only element on the canvas**. The vertical orientation reads as "this is where the brand bows out"; using it inside a populated marketing composition pulls focus disproportionately and conflicts with the priority bottom-right placement geometry above.

**Decision rule.** "Is the lockup the only element on this canvas?" Yes → vertical. No (any content surrounds the lockup) → horizontal.

**Picking horizontal-left vs horizontal-right.** The `-left` / `-right` suffix in the asset filename denotes which side **the entry-points text** sits on relative to the wordmark. For top placement under §Logo.5's reversed rule (cluster top-LEFT, symbol top-RIGHT), use **horizontal-right** so the wordmark anchors the canvas's left margin and the entry-points read as a justified appendage running toward the centre. For bottom placement under the priority rule, **horizontal-left** keeps entry-points adjacent to the centre auto-gap and the wordmark on the canvas's right margin.

**Rules that apply to all placements:**
- Margin on every canvas edge = `X`.
- The logo anchors the composition — it does not compete with the headline.
- Never center the full lockup horizontally — centering breaks the "whole-width" rule. Shorter configurations (wordmark alone, symbol alone) may be centered if the layout demands it.
- Never mix two anchor edges (e.g. symbol top-left + cluster bottom-right). The full lockup is always on one edge.
- **When a structural contrasting element splits the canvas, the non-contrasting zone becomes the effective canvas.** If a gradient, dark block, photography, or scrim occupies part of the canvas, its inner edge acts as a canvas edge for every foreground element. Headline, subtitle, and the full lockup all respect an `X` margin from that inner edge exactly as they do from a real canvas edge. The full lockup stretches the full width of the **non-contrasting zone** (not the full canvas width) — symbol at the zone's left-margin `X`, cluster at the zone's right-margin `X`, auto gap between — keeping the whole lockup on a single color per §Logo.3. If the non-contrasting zone is narrower than `~8 × X` (the full-lockup minimum from §Logo.1), step down the reduction ladder.

### 6. Co-branding (Qonto × partner)

When a partner logo appears with Qonto:
- **Equal visual weight** — match the partner logo's optical height to Qonto's wordmark height.
- Order: **Qonto first, then partner** (left-to-right), unless the partner is the host of the communication.
- Separator: a vertical divider line, `1 × wordmark x-height` (= `X`) on each side as breathing room.
- Each logo follows its own clear-space rules; the divider sits within the overlap.
- Never lock the two logos into a single combined mark.

### 7. Anti-patterns — never do any of these

- Do not draw the logo as text or shapes — always import the library component.
- Do not rotate, skew, stretch, or slant.
- Do not apply shadows, glows, outlines, gradients, or 3D effects.
- Do not recolor — only `#050505` or `#ffffff`.
- Do not place the flower symbol without its app-shaped container in production.
- Do not invent a custom lockup by placing canonical components side-by-side (symbol + wordmark, flower + wordmark, symbol + entry points, etc.). The five configurations in §Logo.1 are the only allowed lockups. If real estate is tight, **step down the reduction ladder** — full lockup → wordmark + entry points → wordmark alone — removing the symbol first, then entry points, never inventing a two-piece combo. The wordmark stays visible at every step (per SOT: *"Symbol and entry points can be removed if real estate around identity is limited. Logo should always be visible."*). Visual reference: [SOT node 220:52554](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=220-52554). Symbol-alone is a separate configuration for compact/functional contexts (app icon, avatar, favicon) — not a fallback on this ladder.
- Do not use over busy backgrounds or photography without contrast protection.
- Do not use the logo below the minimum size.
- Do not pair with the old Qonto logotype (pre-rebrand) — only the current wordmark.

### 8. Figma build recipe — copy this

Paste this into `use_figma` when placing a logo in a new Figma layout. Adjust `canvasW`, `canvasH`, and the desired variant.

The `Qonto logo wordmark` is a **component set** with one variant property — `color` (`black` or `white`). Use `importComponentSetByKeyAsync`, then pick the variant via its name (`color=black` / `color=white`). Using `importComponentByKeyAsync` on a component set returns "not found".

**Operational note — chunk long builds.** A single `figma_execute` call that imports both component sets **and** builds multiple frames reliably exceeds the 25s plugin timeout. Split it: (1) setup + import component sets in one call, note the returned IDs, (2) build each frame in its own call using `await figma.getNodeByIdAsync(id)` to re-resolve the imports. Dynamic-page mode also requires `await figma.setCurrentPageAsync(page)` and `await figma.getNodeByIdAsync(id)` — the synchronous variants throw.

```javascript
const canvasW = 1080;
const canvasH = 1080;
const MEDIUM  = 'digital';                                                    // 'digital' or 'print' — see §Logo.4
const shortest = Math.min(canvasW, canvasH);
const X = Math.round(shortest * (MEDIUM === 'digital' ? 0.08 : 0.05));        // 86 digital / 54 print
const wordmarkH = X;                              // 86
const wordmarkW = Math.round(X * (492 / 138));    // 308

// Brand/marketing context. For product UI, see §Logo.2 "In-app assets Library".
const WORDMARK_SET_KEY = 'ea8c642aa816c04f75bb326581c12a90e51c833e';

const set = await figma.importComponentSetByKeyAsync(WORDMARK_SET_KEY);
const bgIsDark = false; // flip to true for dark canvases
const variant = set.children.find(c => c.name === (bgIsDark ? 'color=white' : 'color=black'));
const instance = variant.createInstance();

instance.resize(wordmarkW, wordmarkH);
instance.x = X;                                   // bottom-left placement
instance.y = canvasH - X - wordmarkH;
```

**Full lockup recipe** — symbol (squircle) anchored at bottom-left margin `X`, (entry points + divider + wordmark) cluster anchored at bottom-right margin `X`, with **auto space filling between them**. All lockup pieces share height `X` (per §Logo.4 — `0.08 × min(W, H)` for digital, `0.05 × min(W, H)` for print). Squircle multiplier is not a single library component; compose it from `Qonto logo square` with a corner-radius override on its inner `square` frame.

Before running: check the configuration actually fits (§Logo.1 decision rule). If canvas width < `8 × X`, fall back to wordmark + entry points.

```javascript
const canvasW = 1080;
const canvasH = 1350;
const MEDIUM  = 'digital';                                 // 'digital' or 'print' — see §Logo.4 boundary
const minDim  = Math.min(canvasW, canvasH);
const X       = Math.round(minDim * (MEDIUM === 'digital' ? 0.08 : 0.05));   // 86 digital / 54 print
const epFloor = MEDIUM === 'digital' ? 20 : 12;
const cornerR    = Math.round(X * 0.22);                   // 19 — squircle corner
const clusterGap = Math.round(X * 0.5);                    // 43 — intra-cluster gap
const wordmarkW  = Math.round(X * (492 / 138));            // 308
const bgIsDark   = false;                                  // flip for dark canvases

const SQUARE_SET_KEY   = '8aa7d855955618d4b44821f577443de9de00a0eb';
const WORDMARK_SET_KEY = 'ea8c642aa816c04f75bb326581c12a90e51c833e';

const squareSet   = await figma.importComponentSetByKeyAsync(SQUARE_SET_KEY);
const wordmarkSet = await figma.importComponentSetByKeyAsync(WORDMARK_SET_KEY);
const inkRGB = bgIsDark ? { r: 1, g: 1, b: 1 } : { r: 0.02, g: 0.02, b: 0.02 };

// 1. Symbol — ALWAYS keep the color=black variant. On dark bg add a white stroke, never flip to color=white.
const sym = squareSet.children.find(c => c.name === 'color=black').createInstance();
sym.resize(X, X);
const innerSq = sym.findOne(n => n.type === 'FRAME' && n.name === 'square');
if (innerSq) {
  innerSq.cornerRadius = cornerR;                          // squircle
  if (bgIsDark) {
    innerSq.strokes = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    innerSq.strokeWeight = 1;
    innerSq.strokeAlign = 'INSIDE';
  }
}

// 2. Entry-points text — Qonto Sans Regular, scaled from X. Medium-specific floor.
const entrySize = Math.max(epFloor, Math.round(X * 0.245));   // 21 at X=86 digital
const entryLH   = Math.round(X * 0.36);                       // 31 at X=86 digital
await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Regular' });
const entry = figma.createText();
entry.fontName = { family: 'Qonto Sans', style: 'Regular' };
entry.fontSize = entrySize;
entry.lineHeight = { unit: 'PIXELS', value: entryLH };
entry.characters = 'Business Account\nCompany Creation\nInvoicing';
entry.fills = [{ type: 'SOLID', color: inkRGB }];
entry.textAlignHorizontal = 'LEFT';                       // flush-left block; ragged right is intentional
entry.resize(entry.width, X);

// 3. Divider — 1 px × X, vertical.
const divider = figma.createRectangle();
divider.resize(1, X);
divider.fills = [{ type: 'SOLID', color: inkRGB }];

// 4. Wordmark — variant follows bg, never stroked.
const wmVariant = wordmarkSet.children.find(c => c.name === (bgIsDark ? 'color=white' : 'color=black'));
const wordmark = wmVariant.createInstance();
wordmark.resize(wordmarkW, X);

// 5. Compose — symbol at left canvas margin, cluster at right canvas margin, auto gap between.
const baselineY = canvasH - X - X;                         // canvas margin X + lockup height X

sym.x = X;
sym.y = baselineY;

// Right-to-left: wordmark hugs the right margin, then divider, then entry points.
const rightEdge = canvasW - X;
wordmark.x = rightEdge - wordmarkW;
wordmark.y = baselineY;

divider.x = wordmark.x - clusterGap - 1;
divider.y = baselineY;

entry.x = divider.x - clusterGap - entry.width;
entry.y = baselineY;

// Sanity: verify the auto gap didn't collapse below X (clear-space rule).
const autoGap = entry.x - (sym.x + X);
if (autoGap < X) {
  console.warn(`Full lockup does not fit: auto gap = ${autoGap}px < X (${X}). Drop to wordmark + entry points.`);
}
```

Key pitfalls (do not skip):
- **Auto space, not fixed gap.** The symbol anchors left-margin-X; the cluster anchors right-margin-X. Do not iterate pieces left-to-right with a fixed gap — that produces a tight group floating at the left and breaks the "full-width" rule from the SOT.
- **Cluster stays tight.** Only the symbol → cluster gap is auto. Inside the cluster, gaps are fixed at `X/2`.
- **Squircle.** `instance.cornerRadius = N` on the top-level square instance is silently ignored. Reach the inner `square` frame via `findOne` and set its `cornerRadius`.
- **Dark background.** Keep `color=black` for the symbol and add a 1 px inside stroke on the inner `square` frame. Never use the `color=white` variant for the symbol — it inverts the glyph and breaks the SOT rule.
- **Wordmark.** The wordmark component has its own internal colors and no glyph-in-container structure. Use `color=white` on dark backgrounds. No stroke.

For other configurations (wordmark + entry points, flower symbol) instantiate the matching component set from §Logo.2 and apply the same sizing math. Always check `set.variantGroupProperties` first; the wordmark and square sets expose only `{ color: ['black', 'white'] }`.

### 9. Non-Figma outputs

- **HTML / React**: serve the SVG from `Logo/` in the [Asset library](#asset-library) — never typeset "Qonto" as HTML text styled to look like the logo. Apply `fill: #050505` or `#ffffff`. Set height via CSS; width is auto.
- **Print / PDF**: embed the SVG or a high-res PNG (from `Logo/` in the [Asset library](#asset-library)) at the computed size; respect the X margin rule (5 % of the shortest trim-box side) relative to the trim box.
- **Social exports**: compute `X` from the export dimensions, not from the design canvas.

**Picking the right asset-library file (lockup configuration outside Figma).** §Logo.1's preference order applies, but only the configurations below ship as **single, pre-composed asset-library files** — the full lockup (symbol + entry points + divider + wordmark) is composed in Figma per §Logo.8 and has no single SVG export. Default to `wordmark + entry points horizontal` for most marketing surfaces; fall back to `wordmark` only when the canvas is too tight or audience already has full brand context. The full lockup itself is achievable only in Figma. **The vertical lockup is reserved for edge / end-frame use** per §Logo.5b — do not pick it for inline marketing placements.

| Configuration | Asset-library filename | When to pick |
|---|---|---|
| **Wordmark + entry points — horizontal-left** | `Logo/qonto-logo-category-entry-points-horizontal-left-<LANG>.svg` | viewBox `965 × 162` (≈ 5.96 : 1). **Bottom placement** under §Logo.5 priority (cluster bottom-right with symbol bottom-left auto-spaced). |
| **Wordmark + entry points — horizontal-right** | `Logo/qonto-logo-category-entry-points-horizontal-right-<LANG>.svg` | viewBox `965 × 162`, mirrored. **Top placement** under §Logo.5 reversed rule (cluster top-left with symbol top-right auto-spaced). |
| **Wordmark + entry points — vertical-left** | `Logo/qonto-logo-category-entry-points-vertical-left-<LANG>.svg` | viewBox `492 × 359` (≈ 1.37 : 1). **End frames / logo-only canvases** per §Logo.5b — closing slides, splash screens, logo-only OOH. **Not for inline marketing comps.** |
| **Wordmark alone** | `Logo/qonto-wordmark-black.svg` · `Logo/qonto-wordmark-white.svg` | viewBox `82 × 24` (≈ 3.42 : 1). When entry-points can't reach 12 px or the audience has full brand context. Black or white — ink switches by file, not by recolour. |
| **Symbol multiplier** (squircle container) | `Logo/qonto-symbol-multiplier-black.svg` · `Logo/qonto-symbol-multiplier-white.svg` | viewBox `138 × 138` square. For compact / functional contexts, **and as the right-side symbol when paired with a horizontal-right cluster on top placement** (§Logo.5). |
| **Full lockup** (symbol + entry points + divider + wordmark) | *(no single asset)* | Compose in Figma per §Logo.8. |

**Localisation.** `<LANG>` matches the audience's primary market — pick `EN` for international or English-speaking surfaces, `FR` / `DE` / `IT` / `ES` / `NL` for in-market campaigns. Combined-locale variants (`EN-DE`, `EN-NL`) exist for bilingual contexts. When in doubt, ship `EN` and ask the brand team.

**Ink colour.** The horizontal entry-points lockups ship only in the brand black (`#050505`). For dark / photo-overlay surfaces, generate the white variant with one substitution: `sed 's/#050505/#FFFFFF/g' input.svg > white.svg`. The symbol-multiplier and wordmark assets ship in both black and white — ink switches by file.

### 9b. Logos are vector, never raster

**The rule.** When importing a logo into Figma, **always use `figma.createNodeFromSvg(svgString)`** so the result is a vector node. Never rasterise the SVG to PNG and apply via `figma_set_image_fill` — that destroys vector precision, blows up the file size, and looks fuzzy at scale.

```javascript
// ✅ Vector — preserves brand precision, scales without quality loss
const svg = await fetch(LOCKUP_URL).then(r => r.text());      // or read from disk
const lockup = figma.createNodeFromSvg(svg);
lockup.resize(targetW, targetH);
lockup.x = …; lockup.y = …;
parent.appendChild(lockup);

// ❌ Raster — loses precision, fuzzy at scale, large file footprint
figma_set_image_fill(lockup, '/tmp/lockup.png');              // do not
```

**Photographs and decorative images** stay raster (PNG / JPG via `figma_set_image_fill`) — that's the right format for them. **Brand assets** (logos, symbols, wordmarks, lockups, icons) stay vector.

**Why this is non-negotiable.** Brand precision is in the curves of the wordmark and the corners of the symbol. Rasterising at any size below the source resolution introduces anti-aliasing and edge softness that diverges from the brand. At export time (deck export, social export, OOH print), Figma re-rasterises the vector at the target resolution — so a vector source produces a clean export at every scale. A pre-rasterised source at the wrong scale produces a soft export.

**Inlining large SVGs in `figma_execute`.** The wordmark + entry-points SVG is ~23 KB. **`figma_execute` accepts scripts well over 25 KB** — empirically validated 2026-04-28. Inline the full SVG as a string literal (use `JSON.stringify(svgContent)` to escape it cleanly):

```python
import json
svg = open('/tmp/q-lockup-h-EN.svg').read()
script = f'const SVG = {json.dumps(svg)};\nconst lockup = figma.createNodeFromSvg(SVG);\n…'
```

The earlier "rasterise with sips" fallback in §1 / §2 / §3 reference compositions is **deprecated** — the canonical workflow is `createNodeFromSvg` with the SVG inlined. Reference comp recipes will be updated in the next iteration. If you genuinely cannot inline (e.g. agent runtime caps script length), the raster fallback remains valid as an escape hatch — but flag it as a workaround, not the default.

### 9c. Manual lockup composition for Figma marketing comps

The asset-library entry-points cluster SVG ships entry-points as **vector path data**, not text. At Figma's typical render scales for social / mobile canvases, the wordmark Q-glyph and divider scale cleanly, but the entry-points lines (which would render at `X × 0.245 ≈ 21 px` on a 1080 digital canvas) lose font hinting as paths and read as fuzzy. The fix: **build the lockup manually in Figma** — wordmark vector + divider rectangle + entry-points as a Figma TEXT node — so the entry-points get sub-pixel anti-aliasing and proper hinting.

**Anatomy of the manual lockup** (left-to-right, horizontal-LEFT orientation — bottom placement):

```
[ entry-points text ]  ←  X/2  →  [ divider, 1 × X ]  ←  X/2  →  [ wordmark, w = X × 82/24 ]
```

For horizontal-RIGHT orientation (top placement, eye-reads-cluster-first per §Logo.5), reverse the order:

```
[ wordmark, w = X × 82/24 ]  ←  X/2  →  [ divider, 1 × X ]  ←  X/2  →  [ entry-points text ]
```

**Symbol placement** (separate node, `X × X`, always-on white stroke per §Logo.3) sits at the canvas's opposite edge with auto-gap to the cluster.

**Figma recipe — bottom-right cluster (horizontal-LEFT):**

```javascript
await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Regular' });

const minDim  = Math.min(canvasW, canvasH);
const MEDIUM  = 'digital';                                                    // 'digital' or 'print' — see §Logo.4
const X       = Math.round(minDim * (MEDIUM === 'digital' ? 0.08 : 0.05));    // 86 digital / 54 print
const halfX   = Math.round(X / 2);
const epFloor = MEDIUM === 'digital' ? 20 : 12;
const ink     = bgIsDark ? { r: 1, g: 1, b: 1 } : { r: 0.02, g: 0.02, b: 0.02 };

// 1. Wordmark — vector
const wordmark = figma.createNodeFromSvg(WORDMARK_SVG);              // sourced from asset library
wordmark.resize(Math.round(X * 82 / 24), X);                          // X × (82/24) ≈ 3.42 X wide
wordmark.x = canvasW - X - wordmark.width;                            // bottom-right with X canvas margin
wordmark.y = canvasH - X - X;
parent.appendChild(wordmark);

// 2. Divider — 1 × X rectangle (NOT a Figma LINE — line rotation has anchor quirks)
const divider = figma.createRectangle();
divider.resize(1, X);
divider.fills = [{ type: 'SOLID', color: ink }];
divider.x = wordmark.x - halfX - 1;
divider.y = wordmark.y;
parent.appendChild(divider);

// 3. Entry-points — Figma text node (NOT vector path data — text gets hinting)
const epText = figma.createText();
epText.fontName = { family: 'Qonto Sans', style: 'Regular' };
epText.characters = 'Business account\nFinance management\nCompany creation';
epText.fontSize = Math.max(epFloor, Math.round(X * 0.245));          // 21 px at X=86 digital
epText.lineHeight = { unit: 'PIXELS', value: Math.round(X * 0.36) }; // ~36% LH
epText.fills = [{ type: 'SOLID', color: ink }];
epText.textAutoResize = 'WIDTH_AND_HEIGHT';
epText.textAlignHorizontal = 'LEFT';
parent.appendChild(epText);
epText.x = divider.x - halfX - epText.width;
epText.y = wordmark.y + Math.round((X - epText.height) / 2);         // vertically centre on wordmark

// 4. Symbol (separate, opposite edge, X × X, always-on white stroke per §Logo.3) — see §Logo.5 placement
```

**Figma vs non-Figma split — confirm the right path before rendering.**

| Surface type | Lockup construction |
|---|---|
| Figma marketing comps (every reference composition in this file) | **Manual:** wordmark SVG + divider rect + entry-points TEXT node |
| HTML / React landing pages | Single asset-library cluster SVG (browser font engine handles text) |
| Decks, Canva, exported PDFs, social tools accepting SVG | Single asset-library cluster SVG |
| Print exports | Single asset-library cluster SVG, embedded |

The asset-library cluster SVG is **only deprecated for use as a single Figma node**. For every other surface, it's the right artefact.

---

## Composition

Composition ties everything in a layout — headline, subtitle, body, logo — to one ratio. That ratio is `X`, the brand unit defined in §Logo.4 (`0.05 × min(W, H)` for print, `0.08 × min(W, H)` for digital). Every type size, every margin, every gutter, every clear-space decision is an integer or half-integer multiple of `X`. This is what makes Qonto layouts feel like a system rather than a collection.

### 1. Headline + subtitle tiers — all scaled from X

Three canonical tiers, measured from the SOT "Headline size" section ([node 420:50784](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=420-50784)). Pick one tier per composition.

| Tier | Headline (Qonto Sans **Bold**) | Subtitle (Qonto Sans **Regular**) |
|---|---|---|
| **Small** | `1 × X` @ 98% line-height | `0.5 × X` @ 110% line-height |
| **Medium** | `1.25 × X` @ 98% line-height | `0.5 × X` @ 110% line-height |
| **Large** | `1.5 × X` @ 98% line-height | `0.5 × X` @ 110% line-height |

At digital `X = 86` (1080-shortest canvas): small = 86 / 43, medium = 108 / 43, large = 129 / 43.

At print `X = 54` (1080-shortest, printed handout): small = 54 / 27, medium = 68 / 27, large = 81 / 27.

**Subtitle is single-tier.** Unlike earlier iterations of this skill that kept three subtitle sizes paired with three headline tiers, the SOT-aligned rule (2026-04-28) is: subtitle is always `0.5 × X`. The headline scales; the subtitle stays. This frees the subtitle from carrying tier information and lets the headline carry it cleanly.

**Subtitle gap from headline.** The vertical gap between the headline's last line and the subtitle's first line is `0.5 × X`. Not 1X (too airy), not 0X (cramped) — exactly half-X.

**Why these specific multipliers.** The new tiers (1, 1.25, 1.5) are clean integer-and-half multiples of X. There are no decimal-noise constants. The headline literally is some multiple of the brand unit, and that multiple is small enough (1 to 1.5) that headlines feel anchored to the layout rather than competing with the lockup. The previous multipliers (1.37, 2.22, 2.76) were calibrated against a 5 % X — they had to be bigger to compensate for the small unit. With X bumped to 8 % on digital, the multipliers can come down and still produce the same absolute headline sizes, with much cleaner math.

**When to use each tier:**
- **Small** — formal, restrained. Document covers, legal-adjacent pieces, or when an image or KPI needs to dominate the frame.
- **Medium** — default. Most marketing outputs land here.
- **Large** — high-impact. Posters, OOH, hero slides, editorial covers.

### 2. Horizontal spacing — the X rhythm

Reference: SOT "Horizontal spacing" ([node 428:51357](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=428-51357)).

Compositions are built from **horizontal content bands** (headline, image, subtitle, callout, floating object) stacked vertically. Every gap — margin, inter-band, pre-lockup — is a multiple of `X`, the same value that sizes the logo. Layout size → X → logo → margins → band gaps → type sizes. One chain, no orphan decisions.

**The rules:**

- **Canvas margins: `X` on all four sides.** The safe content area is `(canvas_w − 2X)` wide by `(canvas_h − 2X)` tall. No content, no lockup, no floating object ever crosses into the X margin.
- **Gap between adjacent content bands: `1X`.** Use this between headline ↔ image, image ↔ subtitle, or any two directly-stacked content blocks.
- **Gap between the last content band and the bottom lockup: `2X`.** The lockup always gets a double gutter — it anchors the composition and needs breathing room.

Worked examples — print 1080×1350 reference (X = 54) and digital 1080×1080 (X = 86):

| Element | Print X = 54 | Digital X = 86 | In X |
|---|---|---|---|
| Canvas margin (all 4 sides) | 54 | 86 | `1X` |
| Content column width | 972 | 908 | `canvas_w − 2X` |
| Adjacent-band gap | 54 | 86 | `1X` |
| Last-band → lockup gap | 108 | 172 | `2X` |
| Lockup strip height (symbol / wordmark / cluster glyph) | 54 | 86 | `1X` |
| Grid gutter (§Composition.3) | 27 | 43 | `0.5X` |

**Floating / overlapping objects.** When a composition uses layered imagery (hero object + backing shapes, as in the SOT third variant), the first object starts `2X` below the headline band. Subsequent objects may overlap each other and visual judgment takes over — but nothing crosses the outer `X` margin, and nothing pushes into the `2X` zone above the lockup.

**Why this matters.** Because every gap is a multiple of X, a layout stays coherent whether you scale it to 1080×1350, 1920×1080, or 2048×2048: X recomputes, margins and band gaps scale with it, and all proportional relationships stay intact. A poster and an Instagram post built from the same system read as the same brand.

### 3. Grid — the X column system

Reference: SOT "Grid" ([node 450:51608](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=450-51608)).

§Composition.2 governs the **vertical** axis (band gaps). This section governs the **horizontal** axis (columns). Same unit: X. Together they form an X-grounded lattice that a composition can snap to.

**Universal rules:**

- Outer margins: `X` on all four sides (same boundary as §Composition.2).
- Gutter between columns: **`0.5 × X`** (half-X — tighter than the canvas margin so columns read as one set rather than as separate rectangles).
- All columns are equal width.

**Column count scales with aspect ratio.** Pick the preset that matches the canvas:

| Canvas shape | Aspect ratio (long ÷ short) | Column count | Examples |
|---|---|---|---|
| **Square / portrait** | `≤ 1.5` | **4** | 1080×1080, 1080×1350, A4 portrait |
| **Landscape** | `1.5 < ratio ≤ 2.5` | **8** | 1920×1080 deck, 2048×1152 |
| **Ultra-wide / banner** | `> 2.5` | **12** | 2844×460 web banners, billboards |

**Content columns ≠ grid columns — content cells react to canvas size.** The grid above is a positioning **lattice**: it tells you where things can snap, not how many things to put across the row. The number of **content cells** (cards, tiles, feature blocks) sitting side-by-side reacts to the canvas's real size, not just its aspect ratio:

| Canvas size (`min(W, H)`) | Max content cells per row | Why |
|---|---|---|
| **`≤ 1080`** (mobile / social — IG square, IG portrait, IG Story) | **2** | At 1080 px wide, three cells with X-margins and 0.5X-gutters collapse each cell below comfortable phone scale. Two cells give each card ample width to carry photo + title + body cleanly. |
| **`1081–1920`** (desktop / deck slides / standard landscape) | **3** | Per-cell width comfortable for a feature-card row with photo + title + body. |
| **`> 1920`** (OOH / hero banners / print) | **4+** | Up to the grid ladder. Larger canvases buy proportionally more horizontal room, so wider rows of cells become legitimate. |

**Practical reading.** Three feature cards on a `1080 × 1080` IG post is over-dense — Joan's review (2026-04-28). Pick two cards instead, give each ample width, and let the row breathe. On a `1920 × 1080` deck slide three cards work; four start to crowd. On OOH / billboard scale four-plus is fine.

**The grid is still the underlying ruler.** A 2-card row on a 1080-wide canvas with 4-column grid means each card spans 2 grid columns plus the half-X inter-column gutter. The grid doesn't disappear — it becomes the unit you snap card edges to.

**Column width formula:**

```
col_width = (canvas_w − 2X − (n − 1) × 0.5X) / n
```

where `n` is the column count, `X` = 5 % print / 8 % digital × `min(canvas_w, canvas_h)`. The `2X` term covers both outer margins; `(n − 1) × 0.5X` covers every half-X gutter between columns.

| Canvas | Medium | X | n | col_width |
|---|---|---|---|---|
| 1080 × 1080 | digital | 86 | 4 | ≈ 195 px |
| 1080 × 1350 | digital | 86 | 4 | ≈ 195 px |
| 1920 × 1080 | digital | 86 | 8 | ≈ 188 px |
| 2480 × 3508 (A4 print) | print | 124 | 4 | ≈ 512 px |
| 2844 × 460 | digital | 37 (extreme-ratio adjusted) | 12 | varies |

**Two-card row width** (the most common social pattern): `card_w = 2 × col_w + 0.5X gutter` ≈ `(canvas_w − 2X − 0.5X) / 2`. At 1080 digital: `card_w = (1080 − 172 − 43) / 2 ≈ 432`.

**X for extreme aspect ratios.** "5 % / 8 % of the shortest side" is the rule for standard formats (ratio ≤ 2.5). For ultra-wide or ultra-tall canvases (ratio > 2.5), the shortest-side rule produces a margin too small to register (a 2844×460 banner at digital would give X = 37). Instead, anchor X to the **base format the banner is sliced from** — usually a 1080- or 1920-class layout — so brand rhythm stays consistent across the set. Rule of thumb: `X = max(per-medium × min(canvas_w, canvas_h), 0.028 × max(canvas_w, canvas_h))`. For a 2844×460 banner with the digital constant this yields 80, so round to the nearest existing X in your system.

**How to use the grid:**

- Every composable element (text block, image, callout, KPI card) spans `1..n` columns and lands on column boundaries.
- A 1-column element is a slim side-rail. A full-bleed element spans all `n` columns (still inside the outer X margin).
- The full-width headline from §Composition.3 spans all `n` columns — that is already encoded in `canvas_w − 2X`.
- Common spans in a 4-col grid: `1/1/1/1` (quartet), `2/2` (diptych), `3/1` (hero + rail), `1/3` (rail + hero), `4` (full-bleed).
- Common spans in an 8-col grid: `2/2/2/2` (four equal cards), `4/4` (diptych), `6/2` (hero + rail), `3/3/2` (asymmetric).
- The grid is a reference, not a cage. Asymmetric placements (§Composition.2 floating objects) honour the outer margin first and use columns only as visual anchors.

**A note on rounding.** Column widths like `202.5 px` are fine — keep the true value in computation and round at the last moment when placing a shape. If you round each column to `202`, the final column ends up 2 px off-grid. Prefer `canvas_w − marginRight` for the final column's right edge rather than stacking rounded widths.

### 4. Placement

- **Headline sits at the top or center of the canvas** (never bottom — see §Composition.6 for the vertical alignment rule). Left and right margin = `X`. Its text block width = `canvas_width − 2X`.
- **Subtitle sits directly under the headline**, same left and right margins. Gap from headline baseline ≈ `X / 2` (27 px at X=54; matches the medium/large SOT frames — small deviates slightly smaller, that is fine as a minimum).
- **Logo anchors the bottom** per §Logo.5 priority placement (full lockup stretched edge-to-edge).
- Vertical space between the subtitle block and the logo = whatever remains, subject to the band-gap rules in §Composition.2. That empty space is deliberate; do not fill it with decoration.

### 5. Horizontal alignment — left or center only

Headlines may be **left-aligned** or **center-aligned**. Both are valid and interchangeable — pick based on what the composition needs:

- **Left-aligned** — the default. Natural reading flow, strongest when paired with an asymmetric image, callout, or KPI on the right. Use this unless you have a reason not to.
- **Center-aligned** — formal, balanced, poster-like. Use for ceremonial comms, title cards, or when the canvas is mostly whitespace and the headline needs to sit as a symmetric focal point.

Reference: SOT "Horizontal alignment" ([node 420:50864](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=420-50864)).

**Right-alignment is never permitted** — this is a hard rule from the SOT (the right-aligned variants are slashed through for every tier).

The subtitle follows the headline's alignment. Never mix: left-aligned headline + center-aligned subtitle (or vice versa) breaks the hierarchy.

In Figma, set `text.textAlignHorizontal = 'LEFT'` or `'CENTER'`. Never `'RIGHT'`. In CSS, `text-align: left` or `text-align: center`.

### 6. Vertical alignment — top or center only

The headline + subtitle block sits at one of two vertical positions within the canvas. Reference: SOT "Vertical alignment" ([node 450:52060](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=450-52060)).

- **Top** — the default. Block's top edge at margin `X` from the canvas top. This is what the §Composition.2 band rules and §Composition.4 placement assume.
- **Center** — block vertically centered in the content area. Top of block at `y = X + (canvas_h − 2X − block.height) / 2`. Equal whitespace above and below the block.

**Bottom-aligned headlines are never permitted.** Every tier × every horizontal alignment in the SOT's bottom row is slashed through. The lockup holds the bottom; the headline does not compete for it.

When to use each:

- **Top** — default reading order: headline → visual → logo. Marketing, editorial, most social posts.
- **Center** — formal, ceremonial, minimal. Poster-like compositions where the headline is the focal point and a visual below wants symmetric breathing room.

The subtitle never separates from the headline — always directly below with the `X/2` gap (§Composition.4). The pair moves as one block when you center-align vertically.

**Combining axes.** Horizontal × vertical multiply; any combination from the table below is valid:

| Horizontal | Vertical | Feel |
|---|---|---|
| Left | Top | Default — reading flow, asymmetric layouts |
| Left | Center | Formal with asymmetric emphasis |
| Center | Top | Balanced, magazine-cover |
| Center | Center | Ceremonial, poster, title card |

Bottom is never valid regardless of horizontal alignment. Right is never valid regardless of vertical alignment.

In Figma code, top-alignment is `block.y = X`; center-alignment is `block.y = X + Math.round((canvasH - 2*X - block.height) / 2)`.

### 7. Directional layout structures

Reference: SOT "Layouts" ([node 450:52523](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=450-52523)).

These are the canonical archetypes for Qonto marketing touch points. Every composition should recognisably belong to one of them. They compose the rules from §§Composition.1–6 into reusable patterns — use them as starting points for posters, social posts, OOH, landing pages, decks, emails. The SOT shows each archetype in both portrait (1080×1350) and landscape (1920×1080); the rules scale to any size via X.

| Archetype | Pattern | Best for |
|---|---|---|
| **A. Stack — text then visual** | Text band top → `1X` → visual band → `2X` → lockup | Message-first product announcements, feature reveals |
| **B. Stack — visual then text** | Visual band top → `1X` → text band → `2X` → lockup | "Look at this, here's why" — visual sells, headline punctuates |
| **C. Split — text ↔ visual** | Landscape: text one half, visual other half. Portrait: collapses to A or B. The **visual side also ends at `lockupY − 2X`** — the 2X clearance before the lockup applies to every last band, including the visual half of a split (never let a photo run into the lockup strip). | KPI + supporting image, testimonial + face, equal-weight pairs |
| **D. Overlay — text on full-bleed image** | Image bleeds edge-to-edge; text block + lockup sit on top within `X` margins. **Dark-background recipe:** use the `color=white` logo variants and apply a `1px` white stroke to the symbol (per §Logo.3). Verify contrast: headline and lockup must read cleanly against the busiest region of the photo, not just the calm edge. When the photo's text zone isn't reliably dark, add a scrim — see §Composition.9b for the full Figma build recipe. **Subject-aware copy placement** (§Composition.7 archetype D notes below): copy never crosses a recognisable face. **Two layout variants:** (i) classic — copy at the top + lockup at the bottom, used when the subject sits in the lower two-thirds; (ii) reversed — **lockup at the top (per §Logo.5 reversed-top placement) + copy at the bottom**, used when the subject's face occupies the upper or middle of the frame and putting copy there would land on the face. | Atmospheric, photo-led campaigns; portraits with strong subject presence |
| **E. Overlay — text card on bleed image** | Image full-bleed; solid-colour card (usually white) with headline + lockup, card honours `X` margin and `X` internal padding. The card is **structural** — it provides the composition's spine, so `cornerRadius = 0` (see §Object styles.2). | Photo + crisp readable message, landing-page hero |
| **F. Layered — floating objects + text** | Text at top → `2X` → three overlapping cascading objects (§Composition.2 floating-object rule) → `2X` → lockup | Editorial, object-of-the-week, feature-rich storytelling |

**Picking the right archetype:**

- Does the message or the image lead? → A (message) or B (image)
- Are the two elements equal weight? → C
- Do you want the viewer inside the image? → D
- Photo background but the copy must pop? → E
- Multiple objects or a progression? → F

**Rules shared across all archetypes:**

- Outer margin `X` on all sides (§Composition.2), except for full-bleed images in D and E, which bleed past the margin but never the text block or the lockup.
- **Photography comes from `Photography/` in the [Asset library](#asset-library)** — don't generate or swap in arbitrary imagery for archetypes B, C, D, E.
- **Photo-archetype fit.** D and E place text *over* the photo, so they require shots with generous negative space and tonal uniformity in the text zones (upper-left for headline, lower-X strip for lockup). If the provided photo is activity-dense, crops tightly onto subjects, or has no calm region for text to breathe, **propose switching to A, B, or C** — where the photo gets its own dedicated band and doesn't fight the text. Don't force-fit a busy photo into D or E. This applies even when the user explicitly asks for D/E: name the mismatch and recommend the better archetype.
- Lockup sits at the bottom X strip (§Logo.5). In archetype E it sits inside the card, not at the canvas bottom.
- **Every last content band ends at `lockupY − 2X`**, not at the canvas bottom. This holds for text bands (A), visual bands (B), both halves of a split (C), overlay text blocks (D), and cards (E). The 2X breathing room before the lockup is non-negotiable.
- Text block honours horizontal (§Composition.5) and vertical (§Composition.6) alignment rules.
- Headline tier (§Composition.1) picked for the archetype, not per element.
- Grid (§Composition.3) as a reference, especially when splitting (C) or sizing the text card (E).
- **Sharp grounds, rounded accents.** Structural objects (backing cards, scrims, bands, hero images, full-bleed rectangles) are always sharp (`cornerRadius = 0`). Rounded corners belong to content-scale objects that float *inside* the structure — product covers, small image tiles, icon bounding boxes, avatars, chips — picked from the four atomic shapes in §Object styles.1. Full rules in §Object styles.
- **Copy never crosses a recognisable face** (archetype D, and any photo-overlay variant). When the subject's face occupies the canvas zone where copy would naturally land, do not let the copy cross it — pivot to archetype D's reversed variant (**lockup at the top per §Logo.5 reversed-top placement, copy at the bottom**) or move to archetype B / C where text and image have their own bands. The photo subject is the brief's protagonist; the copy supports them, never obscures them.

### 7b. Archetype D variants — subject-aware photo placement

Archetype D ships in two layouts depending on where the subject sits in the photo. Read the photo first; pick the variant that keeps copy off the face.

| Variant | Subject sits in… | Layout | Lockup |
|---|---|---|---|
| **D-classic** (priority) | the lower two-thirds of the photo (subject's face is below the headline zone) | Copy at the **top** (headline + subtitle within `X` margins, dark scrim per §9b for contrast). Subject occupies the bottom. | Bottom-right per §Logo.5 priority. |
| **D-reversed** | the upper two-thirds of the photo (subject's face is in the headline zone) | **Lockup at the top** per §Logo.5 reversed-top placement (cluster top-LEFT, symbol top-RIGHT). Copy at the **bottom** of the useful canvas (above the bottom safe area on social, above the bottom margin elsewhere). Subject occupies the middle. | Top, reversed-placement variant. |

**The subject-detection step is the rule, not the variant choice.** Look at the photo before deciding D-classic vs D-reversed:

- Crop the photo to the canvas's aspect ratio mentally.
- Locate the subject's face (or strongest focal point) in the cropped frame.
- If the face sits in the **upper third** of the cropped frame → **D-reversed**.
- If the face sits in the **lower two-thirds** → **D-classic**.
- If the face crosses the **centre line** of the canvas (typical for portrait photos on portrait canvases): D-reversed wins, because top placement gives the lockup the upper margin and copy gets the bottom band — neither lands on the face.

**Both variants honour §Composition.7 shared rules** — `X` margins, `2X` clearance from the last content band to the lockup, photo from `Photography/`, white ink + scrim per §Logo.3 / §9b. The only thing that flips is the placement of the lockup and copy relative to the subject.

**Not a cage.** These six archetypes (with the D-reversed variant) cover the vast majority of Qonto touch points, but a genuinely novel composition can exist if every underlying rule (X-scaled type, X-margin, band-gap, alignment, colour) holds. If you need a new archetype, measure it against the SOT and propose it as an addition to this section rather than a one-off.

### 8. Anti-patterns

- Do not right-align headlines or subtitles. Left and center only (§Composition.5).
- Do not bottom-align the headline block. Top and center only (§Composition.6).
- Do not use band gaps that are not multiples of X (§Composition.2). Adjacent bands = `1X`, last band to lockup = `2X`, margins = `X`.
- Do not invent column counts outside the 4 / 8 / 12 ladder (§Composition.3). A 5- or 7-column grid is not Qonto.
- Do not set gutters that differ from X (§Composition.3). Gutter = X, always.
- Do not invent a layout outside the six archetypes in §Composition.7 without an explicit reason. Pick A–F first; deviate only when a genuine new need appears.
- Do not mix alignments within one composition — if the headline is centered, the subtitle is centered too.
- Do not pick headline sizes outside these three tiers. Custom sizes break the X-system and produce layouts that feel "almost right".
- Do not mix the tiers within a single composition (e.g. large headline with small subtitle). Pick a tier; stay in it.
- Do not set body copy in Bold — Bold is reserved for the headline. Body copy and subtitles use Regular.

### 9. Figma build recipe — composition with headline, subtitle, and full lockup

```javascript
const canvasW = 1080;
const canvasH = 1350;
const tier = 'medium';                                     // 'small' | 'medium' | 'large'
const bgIsDark = false;

const X = Math.round(Math.min(canvasW, canvasH) * 0.05);
const inkRGB = bgIsDark ? { r: 1, g: 1, b: 1 } : { r: 0.02, g: 0.02, b: 0.02 };

const ratios = {
  small:  { h: 1.37, s: 0.78 },
  medium: { h: 2.22, s: 0.93 },
  large:  { h: 2.76, s: 1.37 },
}[tier];
const headlineSize = Math.round(X * ratios.h);
const subtitleSize = Math.round(X * ratios.s);

await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Bold' });
await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Regular' });

const textWidth = canvasW - 2 * X;

// Headline — top-left, Bold
const headline = figma.createText();
headline.fontName = { family: 'Qonto Sans', style: 'Bold' };
headline.fontSize = headlineSize;
headline.lineHeight = { unit: 'PERCENT', value: 98 };
headline.characters = 'Gérer vos finances n\u2019a jamais été aussi simple';
headline.fills = [{ type: 'SOLID', color: inkRGB }];
headline.textAutoResize = 'HEIGHT';                        // fixed width, wraps to multiple lines
headline.resize(textWidth, headline.height);
headline.x = X;
headline.y = X;

// Subtitle — directly below headline, Regular
const subtitle = figma.createText();
subtitle.fontName = { family: 'Qonto Sans', style: 'Regular' };
subtitle.fontSize = subtitleSize;
subtitle.lineHeight = { unit: 'PERCENT', value: 110 };
subtitle.characters = 'Gérer vos finances n\u2019a jamais été aussi simple';
subtitle.fills = [{ type: 'SOLID', color: inkRGB }];
subtitle.textAutoResize = 'HEIGHT';
subtitle.resize(textWidth, subtitle.height);
subtitle.x = X;
subtitle.y = headline.y + headline.height + Math.round(X * 0.5);

// Logo — use §Logo.8 full-lockup recipe at the bottom.
```

### 9b. Figma build recipe — archetype D (full-bleed photo with scrim)

Extends §9 and §Logo.8 for archetype D (full-bleed photo hero). Adds a black linear scrim so white copy stays legible regardless of what the photo is doing under the text zone. Use when the photo's upper region isn't uniformly dark enough to guarantee headline contrast.

```javascript
// Assumes the frame, photo, and full lockup already exist per §9 and §Logo.8.
// Photo applied via imageHash from figma_set_image_fill (see §Asset library).
const canvasW = 1920;
const canvasH = 1080;
const X = Math.round(Math.min(canvasW, canvasH) * 0.05);   // 54

// 1. Scrim — linear gradient, black at top, transparent at bottom.
//    Sits above the photo, below every text and logo element.
const scrim = figma.createRectangle();
scrim.name = 'scrim';
scrim.resize(canvasW, canvasH);
scrim.x = 0;
scrim.y = 0;
scrim.fills = [{
  type: 'GRADIENT_LINEAR',
  gradientTransform: [[0, 1, 0], [-1, 0, 1]],              // top→bottom
  gradientStops: [
    { position: 0, color: { r: 0, g: 0, b: 0, a: 0 } },    // transparent at bottom
    { position: 1, color: { r: 0, g: 0, b: 0, a: 0.7 } },  // 70% black at top
  ],
}];
frame.insertChild(1, scrim);                               // index 1 = just above photo

// 2. Headline + subtitle — copy from §9 with bgIsDark = true (inkRGB = white).
//    Position top-left at X margin; subtitle X/2 below headline.

// 3. Full lockup — run §Logo.8 with bgIsDark = true.
//    Symbol stays color=black with a 1px INSIDE white stroke on its inner `square` frame.
//    Wordmark uses color=white. Divider + entry points inherit inkRGB = white.
```

**Why a scrim.** Photo-archetype fit (§Composition.7) requires tonal uniformity in the text zones. Real photos rarely give that — a scrim enforces the condition without darkening the subject. The top-down gradient keeps the photo's subject (typically mid-frame) fully saturated while the upper text zone gains a reliable dark backing. The lockup at the bottom sits on near-original photo tones; the white variant + symbol stroke handle local contrast.

**Scrim opacity.** `0.7` at the top is the default for medium-luminance photos. Push to `0.85` for very bright photos; drop to `0.5` for already-dark photos. Don't exceed `0.85` — the photo starts disappearing and you'd be better off with archetype A or E.

**When to skip the scrim.** If the photo's top strip is already uniformly dark with headroom for `X` margins, the scrim is optional. When in doubt, add it.

**Still broken?** If even with a scrim the composition feels fought — busy photo, subject crosses the headline zone, no place the lockup reads — the photo isn't right for archetype D. Fall back to C (split) or B (visual above text), per §Composition.7's photo-archetype fit rule.

*Empirically validated on `Thomas Tech Office Laptop Front.png` at 1920×1080 (file `mNVOGF8yvrXXMXTVt6cKkr`, page "Composition Test", frame 62:464).*

### 10. Body copy and other type sizes

See §Typography.4 for the full type system. In brief: every non-headline/subtitle text role anchors in `X` with a hard pixel floor — **paragraph body** at `max(16 px, round(X × 0.45))`, **card titles** at `max(22 px, round(X × 0.65))`, **captions / metadata / entry-points** at `max(12 px, round(X × 0.245))` (entry-points additionally bounded by their `20 px digital / 12 px print` floor per §Logo.4). Do not introduce sizes that sit between the defined ratios.

---

## Typography

Source of truth: the Qonto Sans Typography Guide (internal Notion) plus the SOT "Headline size" block ([node 420:50784](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=420-50784)). The Notion guide is the narrative companion; the SOT is the measured artefact. When the two disagree, brand ownership adjudicates and the stale source is corrected — the values in this section reflect those adjudications.

### 1. Family — Qonto Sans only

Qonto Sans is the brand's primary typeface. **Proprietary — internal use only.** Do not redistribute, embed in public tools, or ship to third parties without brand-team clearance.

**Character.** Qonto Sans is a geometric sans softened by open apertures and generous counters — warm enough to feel human on a product surface, disciplined enough to carry dense financial copy and dataviz without fatigue. Proportions are moderate, the x-height is clean, and rhythm stays even across Regular and Bold so hierarchy comes from weight and scale, not from a switch in voice.

<!-- Joan, draft placeholder: fingerprint letterforms — one or two specific details that are unmistakably Qonto Sans (shape of the `a`, terminal on the `t`, counter of the `4`, diagonals of the `k`, etc.). Pick the 1–3 that distinguish it from Manrope / Inter / Space Grotesk in your eye. Replace this comment with a final sentence when ready. -->

Five weights, each with an italic:

| Weight | Use |
|---|---|
| **Thin** / Thin Italic | Editorial accent only |
| **Light** / Light Italic | Editorial accent only |
| **Regular** / Regular Italic | Default body, subtitle, entry-points, UI labels |
| **Bold** / Bold Italic | Default headline |
| **Black** / Black Italic | Hero-headline accent |

Bold + Regular carry the overwhelming majority of brand work. Do not introduce any weight outside this set, and **never synthesise** — if you need italic or bold, load the real font file. No faux-italic, no faux-bold.

Feedback and font requests: `design@qonto.com`.

### 2. Install — uninstall the previous version first

Qonto Sans is evolving (the SOT still carries transitional `Qonto Sans v4` labels — treat those as artefacts and call the family `Qonto Sans` everywhere in output). When a new cut ships, **uninstall the previous version before installing the new one** — font systems silently prefer the older cut if both are registered and you end up designing against stale metrics.

- **macOS:** Font Book → select old `Qonto Sans` family → right-click → Remove → then double-click the new font files to install.
- **Windows:** Settings → Personalisation → Fonts → select old `Qonto Sans` → Uninstall → then right-click new files → Install for all users.

Restart Figma (desktop) and any editor that caches font lists (Keynote, Sketch, Illustrator) after install.

### 3. Principles

Every rule below ladders back to one of three:

- **Accessibility first.** Metrics and weights are tuned for legibility at small sizes and low contrast. Don't override — no negative tracking on body, no sub-12 px type, no low-contrast pairings.
- **Balanced brand voice.** Qonto Sans sits between geometric neutrality and warmth. Treat it as a voice, not a utility.
- **Design flexibility.** Five weights × italics is enough range. If you feel the urge to bring in a second family, the hierarchy is wrong — fix the hierarchy.

### 4. Hierarchy — five roles, all scaled from X

Five typographic roles. Every size is a multiple of `X` (the composition base unit — see §Composition.1 and §Logo.4) with a hard pixel floor that catches small-canvas surfaces.

| Role | Family & weight | Size formula | Line-height | Tracking |
|---|---|---|---|---|
| **Headline** | Qonto Sans **Bold** | Small `1 × X` · Medium `1.25 × X` · Large `1.5 × X` — see §Composition.1 | **98 %** | +0.5 % |
| **Subtitle** | Qonto Sans **Regular** | `0.5 × X` (single tier) — see §Composition.1 | 110 % | +0.5 % |
| **Card title** (sub-headline inside cards / panels / blocks) | Qonto Sans **Bold** | `max(22 px, round(X × 0.65))` | 110 % | 0 % |
| **Body / paragraph copy** | Qonto Sans **Regular** | `max(16 px, round(X × 0.45))` | 130 % | 0 % |
| **Caption / metadata / label / entry-points** | Qonto Sans **Regular** | `max(12 px, round(X × 0.245))` | 130 % | 0 % |

- Headlines are set **sub-leading (98 % LH)** — lines crowd into each other so the type block reads as one dense shape; +0.5 % tracking opens the counters back up at display sizes so the crowding doesn't fight legibility.
- Body uses 130 % LH because reading-mode wants air; tracking stays at 0 — Qonto Sans is already tuned for it.
- **12 px is the absolute floor for body / caption / metadata.** Never ship type smaller, even for legal footnotes — pick a larger canvas instead.
- **Entry-points share the caption row's formula** (`max(12 px, round(X × 0.245))`) but carry an additional medium-specific floor of `20 px digital / 12 px print` because they ship brand information inside the lockup — see §Logo.4. When the formula falls below the entry-points floor, the lockup drops to wordmark-alone (§Logo.1).
- **Why two body-side rows.** Paragraph copy (the "read this to understand" tier) and captions (the "glance at this for orientation" tier) had collapsed into one row in earlier versions, which let card body land at 12–16 px on social canvases — illegible at phone scale. Splitting the rows and anchoring paragraph copy at `0.45 X` lifts body copy to a thumb-readable size at digital `X = 86` (`39 px`) and stays at the floor on tiny surfaces like a `1200 × 627` LinkedIn ad (`23 → 16 px floor`).

**Reading the X-anchored sizes by surface.** Walk a few canonical examples to build intuition:

| Surface | Medium | X | Headline (M) | Subtitle | Card title min | Body min | Caption min |
|---|---|---|---|---|---|---|---|
| `1080 × 1080` IG square | digital | 86 | 108 | 43 | 56 | 39 | 21 |
| `1080 × 1350` IG portrait | digital | 86 | 108 | 43 | 56 | 39 | 21 |
| `1080 × 1920` IG Story | digital | 86 | 108 (M) / 129 (L) | 43 | 56 | 39 | 21 |
| `1200 × 627` LinkedIn ad | digital | 50 | 63 | 25 | 33 | 23 | 12 |
| `1920 × 1080` deck (screen) | digital | 86 | 108 | 43 | 56 | 39 | 21 |
| `1920 × 1080` deck (printed handout) | print | 54 | 68 | 27 | 35 | 24 | 13 |
| `2880 × 1620` OOH | print | 81 | 101 | 41 | 53 | 36 | 20 |

### 5. Case — sentence case

Sentence case is the default for everything: headlines, subtitles, body, labels, buttons, nav.

- Capitalise the first word and proper nouns. That's it.
- **No Title Case.** Not for headlines, not for buttons, not for nav.
- **No ALL CAPS.** Not for emphasis, not for faux small-caps, not for UI chrome.

Exceptions live inside product UI (certain DS metadata labels ship uppercase) — those are governed by the product DS, not this skill.

### 6. Alignment

- **Headlines:** left or centered. Left is the default; center is the accent — reserve it for hero moments (announcements, covers, single-line statements). See §Composition.5.
- **Subtitles:** match their headline's alignment.
- **Body / captions / labels: left-aligned only.** Centered body is a readability regression.
- **No right-aligned or justified type** in any brand surface. Justified sets create rivers in Qonto Sans at brand sizes.

### 7. Line length and rhythm

- **Body line length: 45–75 characters including spaces.** Below 45 the eye jumps too often; above 75 the return sweep fails. If the column is wider than 75 ch, split into two columns or narrow the column.
- **No orphans** (single word on the last line of a paragraph) and **no widows** (last line of a paragraph stranded at the top of the next column). Rewrite copy; don't force breaks with soft returns.
- **Watch the rag.** The right edge of a left-aligned paragraph should feel balanced — avoid a silhouette that punches in and out, and never let a long line sit below two short lines.
- **Stacked headlines: break for meaning, not for shape.** A wrap should land on a natural phrase boundary. Do not tune breaks to make the silhouette prettier.
- **Kerning:** trust the font by default. Only hand-kern display-size headlines when a visible pair-spacing issue survives at the final size on the final substrate.

### 8. Color — black or white, nothing else

Typography is **`primary/black` or `primary/white`** only. See §Color.9. When a near-black is needed for press (paired with the SOT's print-black), the hex is `#050505` (CMYK `50 50 50 100`) — reads as black with slightly richer on-press behaviour.

### 9. Fallbacks — when Qonto Sans can't ship

Qonto Sans is proprietary, so any surface outside controlled environments (external partner decks, third-party SaaS without font upload, email, code we don't own) needs a fallback.

```
font-family: "Qonto Sans", "Manrope", Arial, sans-serif;
```

- **Manrope** — primary fallback. Open-source, closest metrics to Qonto Sans. Use whenever you can register a webfont.
- **Arial** — ultimate fallback. Installed everywhere. Accept the aesthetic cost when nothing else is available (plain-text email, legacy Office templates, system UI).

Never swap Qonto Sans for Inter, SF Pro, Helvetica, or any other sans — the stack above is fixed.

### 10. Anti-patterns

- **Belt and suspenders.** Repeating the same content across headline + subtitle + caption + image overlay. Say it once, well.
- **ALL CAPS for emphasis.** Use weight (Bold) or hierarchy (tier up) instead.
- **Decorative tracking.** Wide-tracked Qonto Sans Thin for "elegance" is a stylesheet cheat, not a brand move.
- **Coloured type.** Any hue beyond `primary/black` or `primary/white`.
- **Mixing two families in one surface.** Qonto Sans — or its Manrope/Arial fallback when Qonto Sans isn't available — is the only family on a brand layout. Never run both stacks simultaneously.
- **Synthesised weights or slants.** Always load the real font file.
- **Sub-12 px type.** 12 px is the floor — shrink the canvas or rewrite before shrinking type.

### 11. Script coverage and non-Latin fallbacks

Qonto operates across France, Germany, Italy, Spain, and the Netherlands today, with more markets planned (see §Brand identity). Qonto Sans must cover those five languages in full — diacritics (`é è ê ë ï ç à ä ö ü ß ñ ¿ ¡`), the Dutch `ij` digraph (U+0133), currency marks (`€ £ $ ¥ ¢`), and standard punctuation.

**The authoritative supported-glyph list is maintained by the brand team.** Request it from `design@qonto.com` before shipping any non-obvious character, and flag mismatches when you find them. Until that list is published here, treat the following as the working assumption:

- **Confirmed (working assumption — verify when it matters):** Latin + Latin Extended-A — full coverage for FR / DE / IT / ES / NL.
- **Ask before shipping:** Cyrillic, Greek, Vietnamese, Turkish-specific diacritics, rare math / currency symbols.
- **Assume not supported:** CJK (Simplified Chinese, Traditional Chinese, Japanese, Korean), Arabic, Hebrew, Devanagari, Thai — and any script not listed above.

**When Qonto Sans can't render the script, fall back per-platform for that script run only — never ship `.notdef` boxes, and never let the rendering engine pick a silent substitute.**

| Surface | Fallback for unsupported-script runs |
|---|---|
| Web | `system-ui, -apple-system, "Noto Sans", sans-serif` |
| iOS native | San Francisco (system) |
| Android native | Roboto (Latin-adjacent) · Noto Sans CJK (CJK) |
| Print / deck / PDF | Noto Sans — broadest open-source script coverage |

**This exception is for script coverage only.** It does not licence SF Pro / Inter / Helvetica as a Latin substitute when Qonto Sans is simply unavailable — that case stays governed by §Typography.9 (`Qonto Sans → Manrope → Arial`). The two rules compose: script-coverage fallback applies to the non-Latin **run** inside a piece of copy; the surrounding Latin text still follows the Qonto Sans / Manrope / Arial stack.

<!-- Expansion territories (to be nailed next, same approach as logo + composition + color + typography + object-styles + iconography + tone-of-voice: pull from SOT, write concrete specs, test against Figma library components):
     - UI snapshots (product in marketing)
     - Motion
-->

---

## Object styles

Reference: SOT "Object Style" ([node 507:52699](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=507-52699)).

Every object in a Qonto composition is either **structural** (it provides the compositional scaffolding) or **content** (it sits inside that scaffolding as a thing the viewer reads). Structural objects are sharp. Content objects can be rounded. This single distinction drives every radius choice in the brand.

### 1. The four atomic shapes

Every brand object in marketing resolves to one of four shapes. Reference geometry from SOT atomic origin ([node 507:52699](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=507-52699)), measured on a 294×294 canonical tile (603×294 for the pill).

| Shape | `cornerRadius` | `cornerSmoothing` | Role |
|---|---|---|---|
| **Square** | `0` | `0` | Structural scaffolding, hero images, backing cards, full-bleed rectangles, scrims, section bands |
| **App-square** (soft square) | `≈ 0.136 × short_side` (SOT uses `40` on `294` — round to `0.14×` for other sizes) | `0` | Content tiles: product covers, small image tiles, icon bounding boxes, editorial floats |
| **Circle** | `≥ 0.5 × short_side` (Figma clamps) | `0` | Avatars, dots, icon marks, circular badges |
| **Pill** (stadium) | `≥ 0.5 × short_side` on the short axis (Figma clamps to stadium) | `0` | Chips, tags, metric bars, CTA pills |

**Why these four, and not a free radius scale.** The SOT only defines these shapes; any radius outside them (e.g. `8 px`, `12 px`, a "soft" in-between) is an improvisation. When a brief calls for "rounded," the question is *which of the four*, not *what value*. The app-square covers almost all content-tile needs; circle and pill are specialised.

**The `0.14×` ratio for app-square.** Pick the shorter side of the tile, multiply by `0.14`, round to an integer. A 400×600 product cover → `400 × 0.14 = 56` → `cornerRadius: 56`. A 135×208 small image float → `135 × 0.14 ≈ 19`. This ratio tracks the SOT atomic example and keeps small and large tiles reading as the same family.

**Smoothing stays at `0`.** The `cornerSmoothing: 0.8` ("iOS squircle") parameter is reserved for the Qonto symbol's inner square (§Logo) — using it elsewhere pulls objects toward Apple's shape language and away from Qonto's. On everything else, `cornerSmoothing = 0`.

### 2. Sharp grounds, rounded accents

From the SOT sharp-and-rounded spec ([node 516:52710](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=516-52710)):

> *"Larger, hero-level images sit in sharp-edged squares. This gives them weight and anchors the composition. Smaller, supporting images can float within rounded-corner containers — adding depth and layering without competing with the primary visual. This contrast between sharp and soft creates a clear visual hierarchy: the square grounds, the rounded elements accent."*

This is the single governing principle of §Object styles, and it generalises past images:

- **Structural → sharp (`cornerRadius = 0`).** Backing cards that host headline + lockup, full-bleed rectangles, scrims, band dividers, grid-aligned rectangles, the hero image in a composition, any rectangle that provides the composition's spine.
- **Content → rounded (app-square, circle, or pill per §Object styles.1).** Small image tiles, product cards, icon bounding boxes, floating editorial clusters, avatars, chips — anything that reads as "a thing inside the layout" rather than "the layout itself."

**The test.** For any given object ask: *is this providing the composition's structure, or is it content sitting inside that structure?* Structural → sharp. Content → rounded. If you can't tell, it's structural — sharp is the safer default and the stronger signal.

**What the SOT shows at composition scale.** Large image anchors at `912×742`, `508×338`, `474×359`, `423×423` are all `cornerRadius: 0`. Small floating tiles at `135×208`, `217×334`, `274×423` are all rounded (radii consistent with the `0.14×` app-square ratio from §Object styles.1). Same composition, explicit hierarchy — the sharp images ground; the rounded floats accent.

### 3. Choosing a radius for content tiles

When you've decided an object is content (per §Object styles.2) and needs a radius, map the object's role to one of the four atomic shapes:

| Object role | Shape | Notes |
|---|---|---|
| Product cover, small image float, icon bounding box, editorial tile | **App-square** | Use the X-bracketed scale below |
| Avatar, circular badge, dot marker | **Circle** | Radius ≥ half the short side; Figma clamps |
| Chip, tag, metric bar, pill button, CTA | **Pill** | Radius ≥ half the short axis; stadium shape |
| Backing card, scrim, band, hero image | **Square** | Structural — sharp, per §Object styles.2 |

**The X-bracketed scale for app-square tiles.** At composition scale the radius is a **discrete multiple of X** (the canvas-derived step from §Composition.2 / §Logo.4), not a continuous function of the tile's own pixel width. Pick from three brackets by role:

| Bracket | Radius | Use |
|---|---|---|
| **Small** | `X / 4` | Nested accents — icon bounding boxes inside cards, badges, small floating tiles within an editorial cluster |
| **Default** | `X / 2` | Default content tile in marketing — product cards, image floats, two-up / three-up grid cells |
| **Large** | `X` | Hero-scale rounded tile that dominates the composition — rare; reserved for content that fills > 70 % of canvas |

The brackets work like eBay's bracketed scale: discrete steps stop the radius drifting with each tile's exact pixel width, and tie corner geometry to the X system that already governs type, gutters, and lockup. **Two tiles with the same role share the same bracket.**

**Why bracketed-X rather than `0.14 × short_side`.** The `0.14×` ratio (SOT atomic origin, §Object styles.1) describes the canonical 294-tile and tracks well at small sizes — at a `135` short-side it returns `19`, indistinguishable from `X / 4` on a typical canvas. Applied verbatim to a 459 px card on a 1080 canvas, however, it returns `64` — visually too aggressive, and decoupled from the X system. The two scales agree up to about `3.5 X` (where `0.14 × 3.5 X ≈ X / 2`) and diverge as tiles grow. Use `0.14×` only as a *visual sanity check* on isolated tiles outside an X-governed canvas (e.g., a standalone product render on a transparent surface). Inside marketing comps, the bracketed X scale wins.

**Uniform stack vs scaled stack.** When multiple tiles share a role (a row of feature cards, a grid of product covers), all tiles use the **same bracket** — uniform radius across the set, regardless of small width differences. When tiles play different roles in the same composition (a hero tile + accent thumbnails nested inside it), let each tile pick its own bracket: hero at `X / 2`, accents at `X / 4` — and the concentric rule of §4 will resolve them cleanly.

### 4. Nesting — concentric radii

From the SOT nested-frames spec ([node 516:52728](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=516-52728)):

> *"Use a base corner radius as your reference. The innermost element defines the starting value. For nested frames, set the outer radius to the inner radius plus the distance between the two frames. This keeps corners optically consistent as they scale outward. This rule ensures shapes always feel intentionally nested, never misaligned or awkwardly rounded."*

**The formula.** For any two concentric rounded frames:

```
outer_radius = inner_radius + gap_between_frames
```

**Worked example** (from the SOT diagram): inner element `16 px` radius, gap `40 px` between inner and middle frame → middle frame `16 + 40 = 56 px` — the SOT shows this labelled as `16 + 40 px`. Add another frame with a `16 px` gap to the middle → outer `56 + 16 = 72 px`. Triple-nested, optically parallel corners at every level.

**Worked example — icon bounding box inside a content card** (the canonical marketing case). On a digital IG-square canvas at `X = 86`:

- The card is a default content tile per §Object styles.3 → `card_r = X / 2 = 43`
- The icon-box is a nested accent → small bracket → `iconBox_r = X / 4 ≈ 22`
- The gap (icon-box inset from card edge) follows from the concentric formula: `gap = card_r − iconBox_r = X / 2 − X / 4 = X / 4 ≈ 22` (rounded-integer parity with the inner radius)

So padding the icon-box at `X / 4` from the card edge resolves both the X-bracketed radii **and** the concentric rule simultaneously — the card and icon-box read as a single nested system, with corners optically parallel. Without this derivation the radii drift apart visually (e.g., `card_r = 60` from `0.14 × short_side` on a `432` card with `iconBox_r = 20` from `0.14 × 144` on a `144` icon box and an arbitrary `22` inset gives `card_r − inset = 38 ≠ 20` — corners aren't concentric).

**The shortcut for nested marketing tiles.** When a content tile contains a smaller content tile (icon-box-in-card, badge-in-card, thumbnail-in-feature-card), default to: **outer at `X / 2`, gap at `X / 4`, inner at `X / 4`**. All three values are X-bracketed and the concentric formula holds. Other content inside the same card (text, body copy) keeps its own padding from §Composition.2 — the concentric rule governs the *nested rounded tile only*, not every inner element.

**Does not apply when the outer is structural.** If the outer frame is a backing card / scrim / section band (sharp, `cornerRadius = 0` per §Object styles.2), the rule stops — the sharp outer doesn't need to match the rounded inner. The rule governs *rounded inside rounded*, not *rounded inside sharp*. A sharp backing card can perfectly hold a rounded content tile.

### 5. Corner smoothing

- **Default: `cornerSmoothing: 0`** for every brand object in marketing — every rectangle, tile, pill, card, icon box.
- **Exception: `cornerSmoothing: 0.8`** is reserved for the Qonto symbol's inner square (§Logo). Using it elsewhere imports Apple-style squircles into the brand.

The atomic shapes in §Object styles.1 all resolve to `cornerSmoothing: 0`; don't override unless you're building the logo itself.

### 6. Style and effect

From the SOT style-and-effect spec ([node 521:52763](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=521-52763)):

> *"On floating objects we allow full flat black or white backgrounds as well as transparent options with background blur. We recommend Beautiful Shadows plugin to generate subtle and rich drop shadows on objects when needed."*

**Four background treatments** on a floating content tile (canonical SOT object `370×370` at `cornerRadius: 24`, `cornerSmoothing: 0`):

| Treatment | Fill | Extras |
|---|---|---|
| **Flat white** | Solid `#FFFFFF` | No blur, no stroke |
| **Flat black** | Solid `#000000` | No blur, no stroke |
| **Blur white** | Transparent fill | Background blur radius `52` over a light scene |
| **Blur black** | Transparent fill (dark tint) | Background blur radius `52` over a dark scene |

Blur treatments require a **visually varied backing** (a photo, a gradient, a busy composition). Over a flat colour, the blur reads as a washed tint and loses its purpose — use flat white or flat black instead.

**Drop shadows via Beautiful Shadows.** Do not hand-roll single-layer shadows. Use the [Beautiful Shadows](https://www.figma.com/community/plugin/1038073952378169144) plugin to generate a rich multi-layer stack. The SOT canonical shadow on a `370×370` tile is a five-layer stack:

| Layer | Y offset | Blur | Opacity |
|---|---|---|---|
| 1 | `10` | `23` | `10 %` |
| 2 | `41` | `41` | `9 %` |
| 3 | `93` | `56` | `5 %` |
| 4 | `166` | `66` | `1 %` |
| 5 | `259` | `73` | `0 %` |

All layers `#000000`, spread `0`. Regenerate with the plugin when the object size changes — these values are calibrated for the SOT's `370×370` reference and don't linearly scale. Run the plugin on the actual object rather than copying this stack verbatim to a wildly different size.

### 7. Anti-patterns

- **"Rounded corners (16–24 px) on cards and containers" as a universal rule.** Wrong — it inverts the principle. Structural cards and containers are sharp; only content-scale tiles are rounded (§Object styles.2).
- **Rounding a structural object.** A backing card that hosts headline + lockup, a scrim under an overlay, a full-bleed band — these are sharp. Adding any radius softens the composition's spine.
- **Sharpening a content object that should be rounded.** A floating product card, a small image tile in an editorial cluster, an icon bounding box — when these are placed sharp, the composition loses the sharp-grounds-rounded-accents contrast.
- **Radii outside the four atomic shapes.** `8 px`, `12 px`, "slightly rounded" — improvisation. Pick app-square (`0.14×`), circle, or pill.
- **Non-concentric nesting.** Two rounded frames with a constant radius ignore the gap; corners drift visually. Apply `outer = inner + gap` (§Object styles.4).
- **Mixing radii within the same role.** A row of product tiles with different radii reads as inconsistency, not intent. Use the uniform-stack rule (§Object styles.3).
- **`cornerSmoothing: 0.8` outside the logo.** Imports Apple squircle language; `0.8` is logo-only (§Object styles.5).
- **Single-layer hand-rolled drop shadow.** Flat and cheap; use Beautiful Shadows (§Object styles.6).
- **Background blur over a flat background.** No variation for the blur to resolve against — use a flat white or flat black treatment instead (§Object styles.6).

### 8. For AI agents — decision ladder

Resolve object style by walking this ladder top-down. Stop at the first rule that applies.

1. **Is this object providing the composition's structure?** (backing card, scrim, band, hero image, full-bleed rectangle) → **sharp.** `cornerRadius: 0`, `cornerSmoothing: 0`. Stop.
2. **Is this the Qonto symbol's inner square?** → `cornerRadius: 0.22 × symbolSize`, `cornerSmoothing: 0.8`. See §Logo. Stop.
3. **Is this a chip, tag, pill button, or CTA?** → **pill.** `cornerRadius ≥ 0.5 × short_axis`, `cornerSmoothing: 0`. Stop.
4. **Is this an avatar, dot, or circular badge?** → **circle.** `cornerRadius ≥ 0.5 × short_side`, `cornerSmoothing: 0`. Stop.
5. **Is this a content tile nested inside another rounded container?** → **app-square,** apply concentric rule: `outer_radius = inner_radius + gap`. Inherit the stack's uniform radius if in a uniform stack. Stop.
6. **Default content tile** (product cover, small image float, icon bounding box, editorial tile) → **app-square.** `cornerRadius ≈ 0.14 × short_side` (round to integer), `cornerSmoothing: 0`.
7. **Does the object float with depth?** Add a Beautiful Shadows multi-layer stack (§Object styles.6). Never a single-layer shadow.
8. **Background transparent with blur?** Confirm the backing scene is visually varied; otherwise switch to flat white or flat black (§Object styles.6).

### 9. Figma build recipe — archetype F with object styles

End-to-end recipe for archetype F (§Composition.7): headline top, three cascading floating objects with the full object-styles treatment (flat black, flat white, translucent blur), concentric nested tile inside the large float, Qonto wordmark at the bottom X strip. Every rule in §Object styles.1–6 touches this recipe.

```javascript
// --- 0. Page + section (dynamic-page-safe) ---
await figma.loadAllPagesAsync();
let page = figma.root.children.find(p => p.name === 'Object Styles Test');
if (!page) { page = figma.createPage(); page.name = 'Object Styles Test'; }
await figma.setCurrentPageAsync(page);                         // NOT figma.currentPage = page — throws in dynamic-page mode

await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Bold' });

// Wipe any prior build with the same section name (idempotent reruns)
for (const s of page.findAll(n => n.type === 'SECTION' && n.name === 'Archetype F — Object Styles')) s.remove();
const section = figma.createSection();
section.name = 'Archetype F — Object Styles';
section.x = 0; section.y = 0;
section.resizeWithoutConstraints(1200, 1500);
page.appendChild(section);

// --- 1. Canvas — structural → sharp (§Object styles.2) ---
const canvasW = 1080;
const canvasH = 1350;
const X = Math.round(Math.min(canvasW, canvasH) * 0.05);       // 54

const canvas = figma.createFrame();
canvas.name = 'Archetype F — 1080×1350';
canvas.resize(canvasW, canvasH);
canvas.cornerRadius = 0;                                        // §Object styles.1 square
canvas.cornerSmoothing = 0;                                     // §Object styles.5
canvas.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
section.appendChild(canvas);

// --- 2. Beautiful Shadows canonical stack (§Object styles.6) ---
// Calibrated for a 370×370 reference tile. Regenerate with the Beautiful Shadows
// Figma plugin when the tile size differs significantly from ~370 — the stack
// does not linearly scale.
const shadowStack = [
  { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.10 }, offset: { x: 0, y: 10 },  radius: 23, spread: 0, visible: true, blendMode: 'NORMAL' },
  { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.09 }, offset: { x: 0, y: 41 },  radius: 41, spread: 0, visible: true, blendMode: 'NORMAL' },
  { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.05 }, offset: { x: 0, y: 93 },  radius: 56, spread: 0, visible: true, blendMode: 'NORMAL' },
  { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.01 }, offset: { x: 0, y: 166 }, radius: 66, spread: 0, visible: true, blendMode: 'NORMAL' },
  { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.00 }, offset: { x: 0, y: 259 }, radius: 73, spread: 0, visible: true, blendMode: 'NORMAL' },
];

// --- 3. Headline (§Composition.1 medium tier, §Typography.4) ---
const headline = figma.createText();
headline.fontName = { family: 'Qonto Sans', style: 'Bold' };
headline.characters = 'One app to run your business';
headline.fontSize = Math.round(X * 2.22);                       // 120
headline.lineHeight = { unit: 'PERCENT', value: 98 };
headline.letterSpacing = { unit: 'PERCENT', value: 0.5 };
headline.fills = [{ type: 'SOLID', color: { r: 0.02, g: 0.02, b: 0.02 } }];
headline.textAutoResize = 'HEIGHT';
headline.resize(canvasW - 2 * X, headline.height);
headline.x = X; headline.y = X;
canvas.appendChild(headline);

// --- 4. Three cascading floats (§Composition.7 archetype F, §Object styles.3) ---
// Short-side × 0.14 → app-square radius, rounded to integer. cornerSmoothing = 0.
const appSquare = (shortSide) => Math.round(shortSide * 0.14);

// Vertical layout honours the 2X rule on both sides:
//   headline bottom → 2X → top of topmost float
//   bottom of bottommost float → 2X → lockup top (which is canvasH − X − X)
const lockupTopY = canvasH - X - X;                             // 1242
const topFloatY  = X + Math.round(headline.height) + 2 * X;     // headline bottom + 2X

// Float 1 — large, flat black, bottom-left (back layer)
const float1 = figma.createFrame();
float1.name = 'Float 1 — Flat black';
float1.resize(420, 560);
float1.cornerRadius = appSquare(Math.min(420, 560));            // 59
float1.cornerSmoothing = 0;
float1.fills = [{ type: 'SOLID', color: { r: 0.02, g: 0.02, b: 0.02 } }];
float1.effects = shadowStack;
float1.clipsContent = true;
float1.x = 80;
float1.y = lockupTopY - 2 * X - 560;                            // bottom ends at lockupTopY − 2X
canvas.appendChild(float1);

// Nested tile inside Float 1 — tests §Object styles.4 concentric formula
// outer 59 = inner 19 + gap 40  →  inner radius = outer − gap
const innerNest = figma.createRectangle();
innerNest.name = 'Nested tile';
innerNest.resize(340, 180);
const nestGap = 40;
innerNest.cornerRadius = float1.cornerRadius - nestGap;         // 19
innerNest.cornerSmoothing = 0;
innerNest.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
innerNest.x = nestGap;
innerNest.y = float1.height - nestGap - innerNest.height;
float1.appendChild(innerNest);

// Float 2 — medium, flat white, middle (overlaps Float 1)
const float2 = figma.createFrame();
float2.name = 'Float 2 — Flat white';
float2.resize(320, 440);
float2.cornerRadius = appSquare(320);                           // 45
float2.cornerSmoothing = 0;
float2.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
float2.effects = shadowStack;
float2.x = 380;
float2.y = float1.y - 96;                                       // cascade up ~96px per tile
canvas.appendChild(float2);

// Float 3 — small, translucent + background blur, top-right (front layer)
// BACKGROUND_BLUR requires semi-transparent fill; 0.3 opacity reads as frosted glass.
// Place over a varied backing (Float 2's white edge + Float 1's black edge) so the blur
// has something to resolve against — §Object styles.6 anti-pattern otherwise.
const float3 = figma.createFrame();
float3.name = 'Float 3 — Blur white';
float3.resize(220, 300);
float3.cornerRadius = appSquare(220);                           // 31
float3.cornerSmoothing = 0;
float3.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0.3 }];
float3.effects = [
  { type: 'BACKGROUND_BLUR', radius: 52, visible: true },
  ...shadowStack,
];
float3.x = 580;
float3.y = topFloatY;                                           // honours headline + 2X
canvas.appendChild(float3);

// --- 5. Lockup (§Logo, §Composition.7 archetype F) ---
// Qonto wordmark from Logos Library. Key is a COMPONENT_SET → importComponentByKeyAsync
// fails; use importComponentSetByKeyAsync + .defaultVariant.
const wordmarkSetKey = 'ea8c642aa816c04f75bb326581c12a90e51c833e';
let logo;
try {
  const comp = await figma.importComponentByKeyAsync(wordmarkSetKey);
  logo = comp.createInstance();
} catch (_) {
  const set = await figma.importComponentSetByKeyAsync(wordmarkSetKey);
  logo = set.defaultVariant.createInstance();
}
const logoScale = X / logo.height;
logo.resize(logo.width * logoScale, X);
logo.x = canvasW - X - logo.width;
logo.y = canvasH - X - logo.height;
canvas.appendChild(logo);
```

**Rule coverage.** This recipe touches every subsection of §Object styles: the four atomic shapes (§1), the sharp-structural / rounded-content split (§2), the `0.14×` ratio applied per tile (§3), the concentric `outer = inner + gap` formula (§4), `cornerSmoothing = 0` everywhere (§5), and all three background treatments plus the 5-layer Beautiful Shadows stack (§6). If any rule were wrong in the skill, this recipe would render it wrong — that's what makes it a test, not just a sample.

**Dynamic-page mode gotchas.** Dynamic-page access is the modern default for Figma plugins; three calls behave differently from the classic API:

- `figma.currentPage = page` → use `await figma.setCurrentPageAsync(page)`.
- `figma.getNodeById(id)` → use `await figma.getNodeByIdAsync(id)`.
- Library component sets → `importComponentByKeyAsync` throws on a `COMPONENT_SET` key; use `importComponentSetByKeyAsync` and pick a variant (`.defaultVariant.createInstance()`). `figma_search_components` / `search_design_system` results return the **set** key, not a variant key — so the fallback pattern above is the safe default.

**Blur visibility caveat.** `BACKGROUND_BLUR` needs partial transparency on the object's fill to render. A fully opaque or fully empty fill produces no visible frosted-glass effect. Use a semi-transparent fill (`opacity: 0.2–0.3` for blur-white over a light scene; a similar low-opacity dark for blur-black). The SOT calls this a "transparent fill" — in Figma terms, that means translucent, not zero-alpha.

*Empirically validated at `1080×1350` in file `mNVOGF8yvrXXMXTVt6cKkr`, page "Object Styles Test", section "Archetype F — Object Styles". Screenshot verified every radius, shadow layer, blur radius, and margin against the expected values in §Object styles.1–6 and §Composition.7.*

---

## Iconography

Reference: SOT "Iconography" ([node 2:18056](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=2-18056)), curated iconset at [node 541:5259](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=541-5259).

Icons in Qonto marketing are pulled from a single library, locked to a single style, sized from a single scale, and inked black or white only. The discipline is "no improvisation" — never edit a glyph, never invent a colour, never mix families. When Material doesn't ship the right icon for a Qonto-specific action, the brand team produces an in-house asset; that asset lives next to the Material exports in the library and is reached the same way.

**Scope.** This section governs **marketing surfaces**: posters, social, decks, OOH, landing pages, emails, print. Product UI has its own iconography rules in the design system; for product work, defer to the DS — not to this file.

### 1. Library — Material Symbols, plus in-house overrides

The base icon set is **[Google Material Symbols](https://fonts.google.com/icons)** (the modern variable-axis family — *not* the legacy fixed Material Icons). Per the SOT: *"We use Google Material Icons as our standard icon set. They're open, widely supported, and visually consistent with Qonto Sans's clean geometry."*

**In-house overrides.** When a Qonto-key action has no fitting Material design, or Material's stock glyph doesn't carry the right meaning for a Qonto context, the brand team produces an in-house asset and ships it into the library. The override wins for that action — don't fall back to a near-match Material icon when an in-house version exists.

Both Material exports and in-house overrides live in `Icons/` in the [Asset library](#asset-library). When sourcing for any non-Figma surface, fetch from there; in Figma, the curated SOT iconset (284 glyphs at 20 × 20, [node 541:5259](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=541-5259)) is the canonical drop-in.

### 2. Style axes — fixed values

Material Symbols is a variable font with four axes plus a family choice. For Qonto marketing, all five are pinned:

| Axis | Value | Why |
|---|---|---|
| Family | **Outlined** | The lightweight, modern feel the SOT calls for. Never the Rounded or Sharp families. |
| Fill | **`0`** (off) | Outline-led. Filled variants exist as named exceptions only — see §3 below. |
| Weight | **`300`** | Quiet next to Qonto Sans Bold headlines, still legible at 16 px. |
| Grade | **`0`** (Normal) | Per the SOT. |
| Optical size | **matches render size** | The whole point of the variable-axis modern set — picking the right optical-size stop gives correct stroke proportions at the rendered size. Don't ship an icon at, say, 48 px with optical size set to 20. |

**Fill exceptions.** The SOT's curated iconset includes filled variants for a small, named set of glyphs (status dots, bullets, primary nav marks, lightning bolts, etc. — see [node 541:5259](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=541-5259)). When the SOT ships a `_filled` variant alongside the `_outlined` one, the filled is licensed for that specific glyph. **Don't generalise** — adding fill to an arbitrary outlined glyph is an edit, and edits are anti-pattern (§7).

### 3. Sizing scale for marketing

Five canonical sizes, mapped to Material's optical-size stops where the variable font has tested proportions:

| Size | Optical size stop | Use for |
|---|---|---|
| **16 px** | `20` | Body-inline glyphs at small ratios — bullet markers, inline annotations |
| **24 px** | `24` | Standard marketing inline — captions, list bullets, footers |
| **40 px** | `40` | Card / feature glyph — paired with body or short label |
| **48 px** | `48` | Large feature glyph — hero accent |
| **64 px** | `48` (Material caps at 48) | Empty-state, oversized decorative callout, large feature mark |

**Anchor in `X` when in a composition.** The icon size shouldn't float free of the layout's X-system. Common ratios on a portrait `1080 × 1350` canvas (`X = 54`):

- `16 px ≈ 0.30 X` (body-inline)
- `24 px ≈ 0.45 X` (standard)
- `40 px ≈ 0.74 X` (card/feature)
- `48 px ≈ 0.89 X` (hero accent)
- `64 px ≈ 1.19 X` (oversized)

Pick the size from the scale first; verify it sits within `0.3 X – 1.2 X`; if it doesn't, your composition probably wants a different tier (§Composition.1) rather than a custom icon size.

**Pairing with type.** When an icon sits inline with a text run, match the icon's box height to the type's cap height — visually, that means **icon = `0.85 × type-fontSize`**. So a `16 pt` body run takes a `~14 px` icon, a `40 pt` subtitle takes a `~34 px` icon. The 16/24/40/48 stops cover this range — round to the nearest stop.

### 4. Color and contrast

Per the SOT: *"Use them in black or white only, matching the surrounding context."*

- **Black** (`#050505`, token `primary/black`) on light surfaces.
- **White** (`#FFFFFF`, token `primary/white`) on dark surfaces.
- **Nothing else.** No greys (icons match type ink, type ink is binary — see §Typography.4 / §Color.9). No brand palette colours. No gradients. No semantic-status hues — those belong to product UI, not marketing.

The icon's ink follows the surrounding type's ink. If the type is white, the icon is white; if the type is black, the icon is black. This rule short-circuits any debate about "what colour should this status icon be on a dark hero" — same colour as the headline next to it.

### 5. Bounding box — optional, per §Object styles

Per the SOT: *"In product we can frame icons within a light gray bounding box, which we can also use in Marketing materials."*

When a marketing icon needs a frame for contrast or hierarchy, wrap it in an **app-square** per [§Object styles.1](#object-styles) — the same shape language as small content tiles. Two practical rules:

- **Icon-to-box ratio = `0.5 ×`.** A 16 px icon sits in a 32 px box; a 24 px icon in a 48 px; a 40 px icon in an 80 px. (Borrowed from eBay's playbook; aligns with the §Object styles app-square radius math without needing its own scale.)
- **Box fill: light grey or transparent.** Light grey uses `neutral/200` (or the visually equivalent token in your surface). Transparent works when the box is just for spacing and the surface itself provides the contrast. Black or white box backgrounds: don't — that's the floating-tile treatment from [§Object styles.6](#object-styles), not an icon frame.
- **Box geometry follows §Object styles.** `cornerRadius = 0.14 × short_side`, `cornerSmoothing = 0`. So a 32 px box has `r = 4.5 → 5`; a 48 px box has `r = 7`; an 80 px box has `r = 11`.

A bounding box is **never required** in marketing — it's a tool for hierarchy when an icon would otherwise read as a floating glyph against a busy backing. When in doubt, skip the box.

### 6. Asset library handoff

For non-Figma surfaces (decks, HTML, email, print, Canva), source icons from `Icons/` in the [Asset library](#asset-library) — same fetch flow as every other asset (raw URL pattern, percent-encoded paths, browse the gallery if you don't know the filename).

**Naming convention** (observed in the live library): `icon_<name>_<style>.svg` — e.g. `icon_lightbulb_outlined.svg`, `icon_chat_filled.svg`, `icon_arrow_right_outlined.svg`. The brand team wraps both Material exports and in-house overrides into this single scheme, so the filename alone doesn't disclose the source — the brand decides; agents fetch by name. `_outlined` is the default `<style>`; `_filled` is reserved for the SOT-named fill exceptions (§2).

**Don't redraw an icon in CSS, inline SVG, or as a Figma vector** when the canonical asset exists in the library. If the library doesn't have what you need, name the gap to the brand team and stop — don't substitute a near-match.

### 7. Anti-patterns

- **Don't edit, recolour outside black/white, rotate for purpose, distort, or stylise** an icon. The Material set + in-house overrides are sealed assets — eBay's rule applies cleanly: *"As a general rule, do not alter or edit icons."*
- **Don't mix Material families** within a composition (Outlined ↔ Rounded ↔ Sharp). One family per surface. Outlined is Qonto's.
- **Don't use a weight other than `300`** outside named in-house exceptions. Material's variable axis tempts ad-hoc adjustment; resist.
- **Don't fill an outlined glyph** unless a `_filled` variant exists in the SOT iconset (§2 fill exceptions). Adding fill where none was sanctioned is an edit.
- **Don't use grey or brand-palette colours** on icon strokes. Black or white only.
- **Don't use a circle, pill, or sharp square as the icon frame.** The frame is an app-square (§Object styles.1). Circles belong to avatars.
- **Don't break the `0.5 ×` icon-to-box ratio.** A 16 px icon in a 24 px box looks cramped; in a 64 px box it looks lost.
- **Don't ship an icon at one size with optical-size axis set for another.** A 48 px render with optical size `20` produces incorrect stroke proportions — the variable axis exists precisely to prevent this.
- **Don't generate a "Qonto-style" icon from a model.** If the action needs a custom glyph, the brand team produces it as an in-house override; agents don't.

### 8. For AI agents — icon decision ladder

Walk top-down. Stop at the first rule that resolves.

1. **Look up the icon in `Icons/`** by composing the filename `icon_<action>_outlined.svg` (or `_filled` if the SOT-named fill exception applies). If the file exists, use it — it's already the brand-correct version, whether sourced from Material or produced in-house. Style axes are baked in; no agent-side adjustment.
2. **Filename doesn't resolve?** Browse the gallery to find the closest semantic match. Material's full library is mirrored into Qonto naming; if no Qonto-named version exists, the action probably isn't covered yet — name the gap (step 7) rather than substituting.
3. **Pick the render size from the scale** (§3): 16 / 24 / 40 / 48 / 64. Verify against `X` and against the type the icon sits next to.
4. **Pick the ink** (§4): black on light, white on dark. Match the surrounding type's ink.
5. **Does the icon need a frame?** → wrap in an app-square per §Object styles.1; box at `2 ×` icon size; fill light grey or transparent; box `cornerRadius = 0.14 × short_side`, `cornerSmoothing = 0`.
6. **Outside Figma?** → fetch the asset from `Icons/` in the asset library; never hand-roll the SVG.
7. **Material doesn't fit and there's no in-house override?** → say so, name the gap to the user, and stop. Don't generate a substitute.

### 9. Figma build recipe — sizing scale + bounding box + ink

End-to-end recipe that exercises every rule in §Iconography.1–6 plus the §Object styles.2 sharp-structural convention. Three rows on a `1080 × 1350` canvas: the five-size scale on white, the app-square bounding box at `0.5×` ratio with light-grey fill, and the same scale on a sharp black backing with white ink. Side-effect: the asset-library fetch flow gets exercised too.

```javascript
// --- 0. Page + section (dynamic-page-safe, see §Object styles.9 gotchas) ---
await figma.loadAllPagesAsync();
let page = figma.root.children.find(p => p.name === 'Iconography Test');
if (!page) { page = figma.createPage(); page.name = 'Iconography Test'; }
await figma.setCurrentPageAsync(page);

await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Bold' });
await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Regular' });

for (const s of page.findAll(n => n.type === 'SECTION' && n.name === 'Iconography Test')) s.remove();
const section = figma.createSection();
section.name = 'Iconography Test';
section.x = 0; section.y = 0;
section.resizeWithoutConstraints(1200, 1500);
page.appendChild(section);

// --- 1. Fetch icon SVG from the asset library ---
// Outside Figma: do this with curl/WebFetch, not figma_execute.
//   curl -s "https://qontobrandassetlibrary.netlify.app/api/assets/raw/Icons/icon_lightbulb_outlined.svg"
// Inside the recipe we paste the SVG string verbatim — figma.createNodeFromSvg
// imports it as a vector group with the brand's #050505 fill baked in.
const SVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" ...>...</svg>`;

// --- 2. Canvas (white, sharp — structural per §Object styles.2) ---
const canvasW = 1080, canvasH = 1350, X = 54;
const black = { r: 0.02, g: 0.02, b: 0.02 };
const white = { r: 1, g: 1, b: 1 };
const lightGrey = { r: 0.96, g: 0.96, b: 0.96 };           // ≈ neutral/200

const canvas = figma.createFrame();
canvas.resize(canvasW, canvasH);
canvas.cornerRadius = 0; canvas.cornerSmoothing = 0;
canvas.fills = [{ type: 'SOLID', color: white }];
section.appendChild(canvas);

// --- 3. Helpers ---
// Recolor every SOLID fill in the imported SVG tree — the export ships with
// #050505 baked in; for white-on-dark we walk the children and swap the colour.
const makeIcon = (size, color) => {
  const node = figma.createNodeFromSvg(SVG);
  node.resize(size, size);
  const recolor = (n) => {
    if ('fills' in n && Array.isArray(n.fills)) {
      n.fills = n.fills.map(f => f.type === 'SOLID' ? { ...f, color } : f);
    }
    if ('children' in n && n.children) for (const c of n.children) recolor(c);
  };
  recolor(node);
  return node;
};

// --- 4. Row 1: Sizing scale (no box, black on white) ---
const sizes = [16, 24, 40, 48, 64];                          // §Iconography.3
const r1Top = 200;
const r1Baseline = r1Top + 40 + 64;                          // bottom-align row at the largest icon
const gap = 64;
const totalW = sizes.reduce((s, sz) => s + sz, 0) + gap * (sizes.length - 1);
let x = X + Math.round((canvasW - 2 * X - totalW) / 2);
for (const sz of sizes) {
  const ic = makeIcon(sz, black);
  ic.x = x; ic.y = r1Baseline - sz;
  canvas.appendChild(ic);
  x += sz + gap;
}

// --- 5. Row 2: App-square bounding box · 0.5× ratio · light-grey fill ---
// Box geometry follows §Object styles.1: cornerRadius = 0.14 × short_side, cornerSmoothing = 0.
const boxIconSizes = [16, 24, 40];                           // boxes will be 32, 48, 80
const r2Baseline = 400;
const r2TotalW = boxIconSizes.reduce((s, sz) => s + sz * 2, 0) + gap * (boxIconSizes.length - 1);
let r2X = X + Math.round((canvasW - 2 * X - r2TotalW) / 2);
for (const iconSz of boxIconSizes) {
  const boxSz = iconSz * 2;                                  // §Iconography.5: 0.5× ratio
  const box = figma.createFrame();
  box.resize(boxSz, boxSz);
  box.cornerRadius = Math.round(0.14 * boxSz);               // §Object styles.1 app-square
  box.cornerSmoothing = 0;                                   // §Object styles.5
  box.fills = [{ type: 'SOLID', color: lightGrey }];
  box.x = r2X;
  box.y = r2Baseline + (80 - boxSz);                         // bottom-align all boxes
  canvas.appendChild(box);
  const ic = makeIcon(iconSz, black);
  ic.x = (boxSz - iconSz) / 2;
  ic.y = (boxSz - iconSz) / 2;
  box.appendChild(ic);
  r2X += boxSz + gap;
}

// --- 6. Row 3: Black surface · white ink (no box) ---
// Backing rectangle is structural — sharp per §Object styles.2.
const r3BackingY = 580;
const r3Backing = figma.createRectangle();
r3Backing.resize(canvasW - 2 * X, 200);
r3Backing.cornerRadius = 0; r3Backing.cornerSmoothing = 0;   // structural
r3Backing.fills = [{ type: 'SOLID', color: black }];
r3Backing.x = X; r3Backing.y = r3BackingY;
canvas.appendChild(r3Backing);

const r3Baseline = r3BackingY + 40 + 64;
let r3X = X + Math.round((canvasW - 2 * X - totalW) / 2);
for (const sz of sizes) {
  const ic = makeIcon(sz, white);                            // §Iconography.4 white on dark
  ic.x = r3X; ic.y = r3Baseline - sz;
  canvas.appendChild(ic);
  r3X += sz + gap;
}
```

**Rule coverage.** Library fetch (§1, §6) via the asset-library raw URL; sizing scale (§3) — all five stops rendered; bounding box (§5) — three boxes at the 0.5× ratio with `0.14 × short_side` radius; ink (§4) — black on white and white on black, never grey; structural sharp on the black backing (§Object styles.2). The recipe also indirectly tests the asset-library fetch flow (§Asset library) — the icon is pulled from the live library and dropped into Figma without a Drive MCP.

**SVG recolour caveat.** The brand's SVG exports ship with `#050505` baked in. `figma.createNodeFromSvg` imports the file as a vector group whose inner paths carry that fill. To render in white (or any other licensed colour — only `#050505` and `#FFFFFF` per §4), walk the imported group and swap the SOLID fill on every descendant. Don't rely on the parent group's `fills` alone — the colour lives on the leaf vectors.

*Empirically validated at `1080 × 1350` in file `mNVOGF8yvrXXMXTVt6cKkr`, page "Iconography Test", section "Iconography Test — Sizing + Box + Ink". Screenshot verified the five-size scale, the three boxes' radii (`r = 4 / 7 / 11` for `32 / 48 / 80` boxes), `cornerSmoothing = 0` everywhere, and ink switching cleanly between black on white and white on black.*

---

## Tone of voice

Reference: SOT "Tone of voice" ([node 2:18027](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=2-18027)).

> *"Our Tone of Voice defines how we speak to the world. It builds on our brand strategy to reflect our unique personality."* — SOT

Tone of voice is how Qonto sounds in writing — the words, the rhythm, the shape of sentences. Four principles govern every line of copy, marketing or otherwise. They map onto §Brand identity's personality traits but refine them for written language: identity is who we are; tone is how we speak. When the two disagree on a line of copy, the principles below win for word choice; identity stays in charge of strategy.

**Scope.** This section governs **all customer-facing copy** — headlines, subtitles, bodies, CTAs, captions, ad copy, emails, OOH, voice-overs. Internal-comms tone is broadly aligned but not strictly bound by this file.

### 1. The four principles at a glance

| Principle | One-liner | Mirrors in §Brand identity |
|---|---|---|
| **To the point** | We know our customers are busy, so we deliver our message in the most efficient way possible. | "To the point" |
| **Playful but polished** | We prove our added value through playful, innovative, and crystal-clear language. | "Playful and spirited" |
| **In tune** | We meet each audience on their own wavelength, in terms that resonate with them personally. | "Always attentive" |
| **At your service** | We enable success from the sidelines, keeping our customers centre stage. | "At ease" |

Every piece of copy should pass all four. They aren't a pick-one menu — they compose. A LinkedIn ad and an Instagram Story sound different (per "In tune"), but both are still to-the-point, playful-but-polished, and at-your-service.

### 2. To the point

> *"We know our customers are time-poor, so we get straight to the point. No fluff, no BS."* — SOT

Concision is **efficiency, not brevity**. Don't use 30 words if 15 better words do the job; equally, don't crush a thought into 5 words just to be short. The test is whether the reader gets what they need to act. Mirrors the product's *delightfully efficient* behaviour: every line is a function call, not decoration.

| ✅ Aim for | ❌ Avoid |
|---|---|
| Direct | Cold |
| Concise | Dismissive |
| Purposeful | Simplistic |

### 3. Playful but polished

> *"We delight our customers and bring a smile to their faces with copy that's playful and sharp, warm and approachable."* — SOT

Wit and charm come naturally — but **clever wordplay never gets in the way of clarity**. Polished ≠ intellectual; we impress by making the message shine, not by setting a record Scrabble score. Reliability shows in consistency and faultless attention to detail; the playful twist comes when it adds, not when it's owed.

| ✅ Aim for | ❌ Avoid |
|---|---|
| Quick-witted | Pretentious |
| Confident | Sloppy |
| Friendly yet professional | Bland and unimaginative |

### 4. In tune

> *"Every customer is different, so we tailor our language to each of our audiences. We don't do 'one-size-fits-all' copy."* — SOT

Anna on TikTok, John on LinkedIn, Richard via email — same brand, different registers. Audience-tune by **vocabulary, sentence length, and reference points**, never by abandoning the other three principles. Internally too: language stays inclusive of every Qontoer.

| ✅ Aim for | ❌ Avoid |
|---|---|
| Astute | Presumptuous |
| Inclusive | Generic |
| Relatable | Obscure |

### 5. At your service

> *"We genuinely love to help businesses get things done and succeed. So, in our copy, the customer is the star of the show."* — SOT

We **enable**, we don't **lead**. The customer is the protagonist; Qonto sits in the wings. Avoid hyperbole and self-aggrandising — we don't say "best," "incredible," "revolutionary," "world-class" without specific evidence backing them. Frame outcomes as opportunities and possibilities for the reader, not credit for us.

**Pronoun discipline.**
- **`you`** = the customer / reader, always.
- **`we`** = collective — Qonto and the audience, together. *Never* "we = Qonto alone, look how great we are."

| ✅ Aim for | ❌ Avoid |
|---|---|
| Supportive | Boastful |
| Understated | Pushy |
| Proactive | Overfamiliar |

### 6. Practical writing rules

Surface-agnostic rules every Qonto line should follow:

- **Pronouns.** `you` = customer (always). `we` = us + customer (collective). Don't use `we` to mean Qonto-only in self-promoting contexts (§5).
- **Length.** Efficient, not minimal. Trim until trimming would lose meaning. The 45–75 ch line-length rule from §Typography.7 sets the physical bound; the ToV equivalent is *every word earns its place*.
- **Sentence case.** No ALL CAPS for emphasis (§Typography.5). No decorative capitalisation of common nouns. Brand and product names retain their canonical casing (`Qonto`, `Material Symbols`, `Beautiful Shadows`).
- **No jargon.** No "leverage," "synergise," "frictionless paradigm shift." Plain language over branded vocabulary, every time. The agent test: would the reader's friend-from-a-different-job understand the line? If no, rewrite.
- **No hyperbole without evidence.** Don't claim "best," "fastest," "most-loved" without a citation in the same surface. Concrete numbers and outcomes beat adjectives — *"500,000+ businesses across 5 markets"* over *"trusted by countless customers."*
- **Positivity framing.** Where possible, present problems as opportunities and outcomes as possibilities. *"Reduce admin time by 80 %"* lands warmer than *"Stop wasting time on admin."*
- **Audience tuning.** Pick vocabulary, register, and reference points to match the surface (TikTok ≠ LinkedIn ≠ email; agency client ≠ freelancer ≠ Qontoer). The other three principles still hold underneath.
- **Inclusivity.** Use language that includes every Qontoer and every audience member — gender, neurotype, geography, ability. Avoid metaphors that don't translate across the FR / DE / IT / ES / NL audience floor (sports references, US-pop-culture in-jokes, gendered defaults).
- **Brand-name discipline.** Always title-case `Qonto`. Never `qonto`, never `QONTO`, never stylised variants. Sub-brands (Qonto Facturation, Qonto Création) follow their canonical case.

### 7. Anti-patterns

- **No fluff or filler.** "In order to" → "to"; "due to the fact that" → "because"; "at this moment in time" → "now." Every word earns its place.
- **No hyperbole or self-promotion without evidence.** "Best," "incredible," "world-class," "revolutionary" don't ship in marketing copy unless the same surface backs them with a citation.
- **No `we` as Qonto-alone in self-aggrandising context.** *"We've built the best banking app"* ❌ → *"Banking that just works"* ✅ or *"Built for fast-moving businesses"* ✅.
- **No one-size-fits-all copy.** Same line on a LinkedIn ad and a TikTok caption is a sign neither is right. Pick the surface, write for it.
- **No clever wordplay that obscures meaning.** Playful is great; cryptic is not. If the reader has to re-read, the wordplay lost.
- **No ALL CAPS for emphasis, no decorative tracking, no italics for shouting** (§Typography.10).
- **No jargon or internal-speak.** Terms only the team knows (`pipeline`, `runway`, `ARR` outside finance audiences) shouldn't appear in customer-facing copy unless we know the reader speaks them.
- **No exclusionary metaphors.** Test against the FR / DE / IT / ES / NL audience floor.
- **No `qonto`, `QONTO`, or stylised brand-name variants** — always `Qonto`. (Crosses with §Logo's wordmark rule, but applies to typed copy too.)

### 8. For AI agents — copy decision ladder

Walk this top-down for any line of customer-facing copy.

1. **Does the line read clearly in ≤ 12 seconds?** No → trim until it does. Test "to the point."
2. **Can the line carry warmth or wit without losing clarity?** Yes → add it. No (regulatory copy, error states) → leave plain. Test "playful but polished."
3. **Does the register match the surface?** Check against the audience for that surface — IG Story (fast, casual, emotive) vs LinkedIn (calm, evidenced, professional) vs email (warm, reasoned). Adjust vocabulary, never the principles. Test "in tune."
4. **Who's the protagonist?** The customer should be `you`. `we` should be collective. If the line reads as Qonto bragging, rewrite. Test "at your service."
5. **Run the practical rules** (§6): no jargon, no hyperbole-without-evidence, sentence case, inclusive metaphors, brand-name discipline.
6. **Cross-check against §Brand identity** if the line carries strategic weight — voice and identity should agree. If they don't, ask the brand team; don't paper over.
7. **In doubt about tone for a specific audience?** Don't ship — flag, propose two variants, and let a human pick.

---

## Reference compositions

Worked examples that exercise multiple sections at once, to prove the rules compose. Each is a **real Qonto surface** — a square Instagram post, an Instagram Story, a LinkedIn paid ad — built end-to-end from rules already in this file. They double as **regression tests**: rebuild any one of these and a rule drift in §Logo / §Composition / §Color / §Typography / §Object styles / §Iconography / §Asset library will surface visibly.

**Reading these.** Each entry cites the rules it exercises and ends with an `Empirically validated at …` footnote pointing to the live Figma artefact. To rerun, paste the build script into `figma_execute` against `mNVOGF8yvrXXMXTVt6cKkr` (file "Brand Skill — Logo Test"), on the page named after the surface.

**Test in tangible surfaces.** New reference compositions should be framed by media Qonto actually ships, not abstract canvas sizes. Existing surfaces in this list and queued additions:

| Surface | Dimensions | Status |
|---|---|---|
| Square Instagram post | `1080 × 1080` (1:1) | ✓ §1 below |
| Instagram Story / Reel cover | `1080 × 1920` (9:16) — mind safe areas | ✓ §2 below |
| LinkedIn sponsored content (landscape) | `1200 × 627` (1.91:1) | ✓ §3 below |
| Portrait Instagram post | `1080 × 1350` (4:5) | queued |
| LinkedIn paid ad (square) | `1200 × 1200` (1:1) | queued |
| Email banner | `1200 × 600` (2:1) | queued |
| Deck slide | `1920 × 1080` (16:9) — covered by §Composition.9b archetype D | shipped |
| YouTube thumbnail | `1280 × 720` (16:9) | queued |
| OOH / billboard | varies | queued |

### 1. Square Instagram post — two-card row + full horizontal lockup

A `1080 × 1080` Instagram-square promo, archetype A spacing (text → 1X → visual → 2X → lockup), with **two** feature cards (per §Composition.3's mobile content-cell rule — three cards on a 1080 canvas crush imagery and copy). **One photo card + one icon card** so the composition demonstrates §Photography next to §Iconography. **Brief**: announce the breadth of Qonto's offering with breathing room and full-lockup brand presence.

**Rules exercised:**

- §Composition — archetype A spacing, **unified X = 86** (digital 8 %), small headline tier (1X = 86 — keeps card real-estate viable on the 1080² canvas). **Two cards per row** per §Composition.3 mobile rule. Grid gutter `0.5X = 43`.
- §Typography — Bold headline at `X × 1 = 86` (small tier, LH 98 % / +0.5 %), Regular subtitle at `X × 0.5 = 43` (LH 110 % / +0.5 %), card titles at `max(22, X × 0.65) = 56` (LH 110 %), bodies at `max(16, X × 0.45) = 39` (LH 130 %). Sentence case throughout.
- §Color — white-led, black ink, light grey for the icon box — no product palette.
- §Object styles — two rounded content tiles at the **default X-bracketed radius (`X / 2 = 43`)** per §Object styles.3, Beautiful Shadows 5-layer stack, sharp structural canvas. Card 2's icon box at the **small bracket (`X / 4 = 22`)** with a matching `X / 4 = 22` inset — the concentric `outer = inner + gap` formula resolves both radii and the gap simultaneously per §Object styles.4. Two cards in the same role share the same bracket (uniform stack rule).
- §Iconography — Material Symbols Outlined glyph at the canonical 72 px size in a 144 px app-square box (0.5× ratio), light-grey fill, black ink.
- §Photography — Sarah Freelancer Studio Portrait at full card width × 60 % height, scaleMode FILL.
- §Logo — **full lockup at bottom** per §Logo.5 priority: symbol-multiplier bottom-left + **horizontal-left** wordmark + entry-points cluster bottom-right, auto gap between. Lockup keys off the unified `X = 86`: cluster `h = 1.125 × X = 97`, symbol `X × X = 86 × 86`, entry-points text at `round(86 × 0.245) = 21 px` (clears the 20 px digital floor). Canvas margin = `X = 86` for everything (lockup and content alike — no separate compositional margin).
- §Asset library — photo, horizontal cluster lockup, and symbol-multiplier all fetched from the netlify library. Logos as vector via `figma.createNodeFromSvg`; photo via `figma_set_image_fill`.

```javascript
// --- 0. Page + section + fonts (dynamic-page-safe) ---
await figma.loadAllPagesAsync();
let page = figma.root.children.find(p => p.name === 'Square Instagram Post Test');
if (!page) { page = figma.createPage(); page.name = 'Square Instagram Post Test'; }
await figma.setCurrentPageAsync(page);

await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Bold' });
await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Regular' });

for (const s of page.findAll(n => n.type === 'SECTION' && n.name === 'IG Square — every section')) s.remove();
const section = figma.createSection();
section.name = 'IG Square — every section';
section.x = 0; section.y = 0;
section.resizeWithoutConstraints(1200, 1200);
page.appendChild(section);

// --- 1. Fetch icons from the asset library (outside Figma — see §Asset library) ---
//   curl -s "https://qontobrandassetlibrary.netlify.app/api/assets/raw/Icons/icon_briefcase_outlined.svg"
//   curl -s "https://qontobrandassetlibrary.netlify.app/api/assets/raw/Icons/icon_attachment_outlined.svg"
//   curl -s "https://qontobrandassetlibrary.netlify.app/api/assets/raw/Icons/icon_calculator_outlined.svg"
const ICONS = {
  briefcase:  `<svg width="20" height="20" ...>...</svg>`,    // paste fetched SVG
  attachment: `<svg width="20" height="20" ...>...</svg>`,
  calculator: `<svg width="20" height="20" ...>...</svg>`,
};

// --- 2. Constants + Beautiful Shadows stack (§Object styles.6) ---
const canvasW = 1080, canvasH = 1080;
const MEDIUM = 'digital';                                                // §Logo.4
const X = Math.round(Math.min(canvasW, canvasH) * (MEDIUM === 'digital' ? 0.08 : 0.05));   // 86
const gutter = Math.round(X * 0.5);                                       // 43 — §Composition.3
const black     = { r: 0.02, g: 0.02, b: 0.02 };
const white     = { r: 1, g: 1, b: 1 };
const lightGrey = { r: 0.96, g: 0.96, b: 0.96 };  // ≈ neutral/200

const shadowStack = [
  { type: 'DROP_SHADOW', color: { r:0, g:0, b:0, a:0.10 }, offset: { x:0, y:10 },  radius: 23, spread: 0, visible: true, blendMode: 'NORMAL' },
  { type: 'DROP_SHADOW', color: { r:0, g:0, b:0, a:0.09 }, offset: { x:0, y:41 },  radius: 41, spread: 0, visible: true, blendMode: 'NORMAL' },
  { type: 'DROP_SHADOW', color: { r:0, g:0, b:0, a:0.05 }, offset: { x:0, y:93 },  radius: 56, spread: 0, visible: true, blendMode: 'NORMAL' },
  { type: 'DROP_SHADOW', color: { r:0, g:0, b:0, a:0.01 }, offset: { x:0, y:166 }, radius: 66, spread: 0, visible: true, blendMode: 'NORMAL' },
  { type: 'DROP_SHADOW', color: { r:0, g:0, b:0, a:0.00 }, offset: { x:0, y:259 }, radius: 73, spread: 0, visible: true, blendMode: 'NORMAL' },
];

// --- 3. Canvas — structural sharp (§Object styles.2) ---
const canvas = figma.createFrame();
canvas.resize(canvasW, canvasH);
canvas.cornerRadius = 0; canvas.cornerSmoothing = 0;
canvas.fills = [{ type: 'SOLID', color: white }];
section.appendChild(canvas);

// --- 4. Helpers ---
const makeIcon = (svg, size, color) => {
  const node = figma.createNodeFromSvg(svg);
  node.resize(size, size);
  const recolor = (n) => {
    if ('fills' in n && Array.isArray(n.fills)) {
      n.fills = n.fills.map(f => f.type === 'SOLID' ? { ...f, color } : f);
    }
    if ('children' in n && n.children) for (const c of n.children) recolor(c);
  };
  recolor(node);
  return node;
};

const makeText = (chars, weight, size, lhPct, color, x, y, w, tracking) => {
  const t = figma.createText();
  t.fontName = { family: 'Qonto Sans', style: weight };
  t.characters = chars;
  t.fontSize = size;
  t.lineHeight = { unit: 'PERCENT', value: lhPct };
  if (tracking != null) t.letterSpacing = { unit: 'PERCENT', value: tracking };
  t.fills = [{ type: 'SOLID', color }];
  t.textAutoResize = w ? 'HEIGHT' : 'WIDTH_AND_HEIGHT';
  if (w) t.resize(w, t.height);
  t.x = x; t.y = y;
  return t;
};

// --- 5. Headline + subtitle (§Composition.1 small tier — keeps card real-estate viable on 1080²) ---
const textW = canvasW - 2 * X;
const headline = makeText('Everything your business needs', 'Bold', Math.round(X * 1), 98, black, X, X, textW, 0.5);
canvas.appendChild(headline);
const subtitle = makeText(
  'Banking, invoicing, expenses.',
  'Regular', Math.round(X * 0.5), 110, black,
  X, headline.y + headline.height + Math.round(X * 0.5), textW, 0.5
);
canvas.appendChild(subtitle);

// --- 6. Two feature cards (archetype A: text → 1X → visual → 2X → lockup) ---
//   §Composition.3 mobile rule: 1080-class canvases cap at 2 cells per row.
//   Card width = (canvasW − 2X margins − 0.5X gutter) / 2 = (1080 − 172 − 43) / 2 ≈ 432.
//   Lockup band height = canvas margin (X) + cluster height (1.125 × X) per §Logo.4 digital rule.
const lockupClusterH = Math.round(X * 162 / 144);            // 97 — wordmark glyph lands at X
const lockupTopY     = canvasH - X - lockupClusterH;          // canvas margin + cluster height
const visualTop      = subtitle.y + subtitle.height + X;     // 1X band gap (§Composition.2)
const visualBottom   = lockupTopY - 2 * X;                    // 2X gap above lockup
const cardW          = Math.floor((canvasW - 2 * X - gutter) / 2);   // 432
const cardH          = visualBottom - visualTop;

// X-bracketed radii per §Object styles.3 + concentric per §Object styles.4
const cardR       = Math.round(X / 2);                     // 43 — default content tile bracket
const iconInset   = Math.round(X / 4);                     // 22 — gap, doubles as inner padding
const iconBoxR    = cardR - iconInset;                     // 21 ≈ X/4 — small bracket
const iconBoxSize = 144, iconSize = 72;                    // §Iconography.5: 0.5× ratio

// X-anchored type sizes (§Typography.4)
const cardTitleSize = Math.max(22, Math.round(X * 0.65));  // 56
const bodySize      = Math.max(16, Math.round(X * 0.45));  // 39

// Card 1 — photo + title + body (50/50 photo/text split — bigger X needs tighter layout)
//   Card body copy is intentionally short (one line) per §Tone of voice "to the point" —
//   long card body doesn't fit at digital X = 86 without spilling card bounds.
const card1 = figma.createFrame();
card1.name = 'Card · Banking (photo)';
card1.resize(cardW, cardH);
card1.cornerRadius = cardR; card1.cornerSmoothing = 0;
card1.fills = [{ type: 'SOLID', color: white }];
card1.effects = shadowStack;
card1.x = X; card1.y = visualTop;
card1.clipsContent = true;                                   // rounded card crops the photo
canvas.appendChild(card1);

const photoH1   = Math.round(cardH * 0.50);                  // 50/50 split
const cardPad   = Math.round(X / 4);                          // 22 — tighter than 0.5X to fit content at digital X
const photoBg1 = figma.createRectangle();
photoBg1.name = 'Card photo (Banking)';
photoBg1.resize(cardW, photoH1);
photoBg1.fills = [{ type: 'SOLID', color: lightGrey }];
card1.appendChild(photoBg1);
const photoPlaceholderId = photoBg1.id;                       // hand to figma_set_image_fill later

const card1Title = makeText('Banking', 'Bold', cardTitleSize, 110, black,
  X / 2, photoH1 + cardPad, cardW - X, 0);
card1.appendChild(card1Title);
const card1Body = makeText('Move money fast.',
  'Regular', bodySize, 130, black, X / 2, card1Title.y + card1Title.height + 4, cardW - X, 0);
card1.appendChild(card1Body);

// Card 2 — icon + title + body
const card2 = figma.createFrame();
card2.name = 'Card · Invoicing & expenses (icon)';
card2.resize(cardW, cardH);
card2.cornerRadius = cardR; card2.cornerSmoothing = 0;
card2.fills = [{ type: 'SOLID', color: white }];
card2.effects = shadowStack;
card2.x = X + cardW + gutter; card2.y = visualTop;     // 0.5X gutter between cards (§Composition.3)
card2.clipsContent = true;
canvas.appendChild(card2);

const iconBox = figma.createFrame();
iconBox.resize(iconBoxSize, iconBoxSize);
iconBox.cornerRadius = iconBoxR; iconBox.cornerSmoothing = 0;
iconBox.fills = [{ type: 'SOLID', color: lightGrey }];
iconBox.x = iconInset; iconBox.y = iconInset;             // X/4 inset → concentric per §Object styles.4
card2.appendChild(iconBox);

const ic = makeIcon(ICONS.attachment, iconSize, black);
ic.x = (iconBoxSize - iconSize) / 2;
ic.y = (iconBoxSize - iconSize) / 2;
iconBox.appendChild(ic);

const card2Title = makeText('Invoicing', 'Bold', cardTitleSize, 110, black,
  X / 2, iconBox.y + iconBox.height + cardPad, cardW - X, 0);
card2.appendChild(card2Title);
const card2Body = makeText('All in one place.',
  'Regular', bodySize, 130, black, X / 2, card2Title.y + card2Title.height + 4, cardW - X, 0);
card2.appendChild(card2Body);

// --- 7. Full lockup at bottom: symbol bottom-left + horizontal-left cluster bottom-right ---
// Per §Logo.5 priority placement. Lockup keys off the same unified X (digital 8 %).
// Cluster scaled so it fits the canvas width minus 2X canvas margins minus symbol width
// minus an auto gap of at least X (clear-space rule).
//   curl -s "…/Logo/qonto-logo-category-entry-points-horizontal-left-EN.svg" -o /tmp/q-lockup-h.svg
//   curl -s "…/Logo/qonto-symbol-multiplier-black.svg"                       -o /tmp/q-symbol-black.svg
// Sizing per §Logo.4 wordmark-glyph = X rule: cluster_h = X × (162/144) ≈ 1.125 X.
const clusterH   = lockupClusterH;                            // 97 — see §6 (= X × 162/144)
const clusterW   = Math.round(clusterH * 965 / 162);          // viewBox 965×162 → ≈ 575
const symbolSize = X;                                         // 86 — symbol = X × X

const lockupCluster = figma.createRectangle();
lockupCluster.name = 'Qonto wordmark + entry points (horizontal-left-EN) — bottom-right';
lockupCluster.resize(clusterW, clusterH);
lockupCluster.fills = [{ type: 'SOLID', color: lightGrey }];
lockupCluster.x = canvasW - X - lockupCluster.width;
lockupCluster.y = canvasH - X - lockupCluster.height;
canvas.appendChild(lockupCluster);

const symbol = figma.createRectangle();
symbol.name = 'Qonto symbol multiplier (black) — bottom-left';
symbol.resize(symbolSize, symbolSize);
symbol.fills = [{ type: 'SOLID', color: lightGrey }];
symbol.x = X;
symbol.y = canvasH - X - symbolSize;
canvas.appendChild(symbol);
// Return photoPlaceholderId, lockupCluster.id, symbol.id for the figma_set_image_fill calls.
```

**Logos as vector via `createNodeFromSvg` (canonical workflow).** Per §Logo.9b, brand assets stay vector. After the build script creates the canvas + cards + photo placeholder, run **two more `figma_execute` calls** — one for the cluster (large SVG, ~23 KB), one for the symbol (small SVG, ~1.7 KB) — using `figma.createNodeFromSvg` with the SVG content inlined. Then apply the photo image fill in a separate `figma_set_image_fill` call and re-bind the returned `imageHash`:

```javascript
// figma_execute, call N+1: cluster vector at the canonical wordmark = X size
//   X = 0.08 × 1080 = 86 (digital, see §Logo.4)
//   cluster_height = X × (162 / 144) = X × 1.125  →  97
//   cluster_width  = cluster_height × (965 / 162)  →  575
const CLUSTER_SVG = `<svg width="965" height="162" …>…</svg>`;     // full SVG inlined (~23 KB)
const cluster = figma.createNodeFromSvg(CLUSTER_SVG);
cluster.resize(575, 97);
cluster.x = 1080 - 86 - cluster.width;             // X canvas margin = 86 (unified, digital)
cluster.y = 1080 - 86 - cluster.height;
parent.appendChild(cluster);

// figma_execute, call N+2: symbol vector at X × X (per §Logo.4)
const SYMBOL_SVG = `<svg width="138" height="138" …>…</svg>`;
const symbol = figma.createNodeFromSvg(SYMBOL_SVG);
symbol.resize(86, 86);                              // X × X
symbol.x = 86;                                      // X canvas margin
symbol.y = 1080 - 86 - 86;
parent.appendChild(symbol);

// figma_set_image_fill (photo only — photos stay raster), then re-bind hash:
photoBg.fills = [{ type: 'IMAGE', imageHash: '<photo hash>', scaleMode: 'FILL' }];
```

**Generating the inlined SVG strings.** Read the SVG file, JSON-encode it (handles all the escaping cleanly), and paste the result as a string literal:

```python
import json
svg = open('/tmp/q-lockup-h-EN.svg').read()
print(f'const CLUSTER_SVG = {json.dumps(svg)};')
```

The earlier "rasterise with sips, apply via image-fill" workflow is **deprecated** for logos — see §Logo.9b. It remains valid only as an escape hatch when SVG inlining genuinely fails (e.g. agent runtime caps script length below the SVG size).

**Why two cards, not three.** Three feature cards on a `1080 × 1080` canvas crushes each card to ≈ 288 px. Card body falls below comfortable phone-reading scale and photos read as thumbnails. Per §Composition.3's mobile content-cell rule, mobile / social canvases (`min(W, H) ≤ 1080`) cap at 2 cells per row. Two cards at ≈ 459 px give photo and copy room to breathe — empirically validated against Joan's review (2026-04-28).

*Empirically validated at `1080 × 1080` in file `mNVOGF8yvrXXMXTVt6cKkr`, page "Square Instagram Post Test". Screenshot verified **unified `X = 86`** (digital 8 %): canvas margin = 86, grid gutter = 0.5X = 43, two cards 432 × 295 at `cardR = X / 2 = 43`, Card 2 icon-box at `(22, 22)` with `r = X / 4 ≈ 21`, headline "Everything your business needs" at small tier (1 × X = 86 px), subtitle at 0.5 × X = 43 px, full lockup at the same X (cluster 575 × 97, symbol 86 × 86, EP 21 px). The whole composition reads off one anchor.*

### 2. Instagram Story — D-reversed: lockup top, content bottom

A `1080 × 1920` 9:16 Story built on §Composition.7b's **D-reversed** variant — the photo's subject (Chloe Founder, face upper-third) sits where headline copy would normally land, so the lockup goes at the **top** per §Logo.5 reversed-top placement (cluster top-left, symbol top-right) and the headline + subtitle drop to the **bottom** of the useful canvas where the subject's torso provides darker backing. **Brief**: lead with brand presence, let the photo subject anchor the middle, deliver the message at the bottom — without ever crossing the face.

**Rules exercised:**

- §Composition.7b D-reversed — subject-aware photo placement: face occupies upper-third → lockup top, copy bottom. Bottom scrim provides headline contrast over Chloe's torso.
- §Logo.4 unified X — `X = 86` (digital 8 % of 1080) used for canvas margin, lockup, headline spacing, and lockup-internal sizing alike. Cluster height `1.125 × X = 97`, symbol `86 × 86`, entry-points text `21 px` ≥ 20 digital floor.
- §Logo.5 reversed-top placement — **cluster (horizontal-right wordmark + entry-points, white) top-LEFT, symbol-multiplier (canonical black + always-on white stroke per §Logo.3) top-RIGHT**, auto gap between. Reading-path rationale: top placement is read first, left-to-right; cluster reads, then the eye lands on the symbol as the brand "punctuation." **The symbol is *not* inverted on dark backgrounds** — keep the canonical black squircle with white flower and let the always-on white stroke delineate the squircle's edge against the photo.
- §Logo.5b lockup orientation — horizontal lockup (not vertical) because this is an inline marketing surface, not an end frame.
- §Tone of voice — *"To the point"* (parallel-structure headline), *"Playful but polished"* (the "boring bits" wink, light enough to land), *"At your service"* (subtitle ends with "the boring bits" — wink without obscuring meaning), *"In tune"* (casual emotive register; contrast with §3's formal LinkedIn register).
- §Composition — large tier headline (1.5 × X = 129 px), single-tier subtitle (0.5 × X = 43 px). Subtitle bottom anchored at `canvasH − bottomSafe − X = 1484`; headline stacked above with 0.5X gap.
- §Typography — Bold headline LH 98 / +0.5%, Regular subtitle LH 110 / +0.5%, sentence case, **white ink** over the bottom scrim.
- §Color — bottom scrim (linear gradient bottom-up, 60 % black) for headline contrast. Top scrim (50 % black, fading down) for lockup contrast against any photo region.
- §Photography — Chloe Founder Studio Portrait at `scaleMode: 'FILL'` — copy crosses her torso (allowed) but never her face (the rule). 
- §Asset library — photo + cluster (horizontal-right-EN, white-recoloured locally) + symbol-multiplier-**black** (canonical), all fetched from netlify. Stroke is added in code, not in the asset.

**Story safe areas.** Instagram overlays the top ~250 px (status bar, profile chrome) and the bottom ~350 px (caption, reaction tray, share). Treat those as **no-go zones** — the lockup, headline, and any critical copy must sit inside `[250, 1570]` vertically.

**White cluster + canonical symbol.** The horizontal entry-points cluster ships only in `#050505`; for the dark photo background, generate the white-fill variant locally with one substitution. **The symbol stays canonical** (black squircle, white flower) — *do not* fetch `qonto-symbol-multiplier-white.svg` (legacy asset that inverts the squircle). Always apply the 1 px white stroke per §Logo.3.

```bash
curl -s "https://qontobrandassetlibrary.netlify.app/api/assets/raw/Logo/qonto-logo-category-entry-points-horizontal-right-EN.svg" -o /tmp/q-lockup-h-right.svg
curl -s "https://qontobrandassetlibrary.netlify.app/api/assets/raw/Logo/qonto-symbol-multiplier-black.svg"                       -o /tmp/q-symbol-black.svg
sed 's/#050505/#FFFFFF/g' /tmp/q-lockup-h-right.svg > /tmp/q-lockup-h-right-white.svg
```

**Build (key excerpts — same helpers as §1):**

```javascript
const canvasW = 1080, canvasH = 1920;
const MEDIUM = 'digital';
const X = Math.round(Math.min(canvasW, canvasH) * (MEDIUM === 'digital' ? 0.08 : 0.05));   // 86
const topSafe = 250, bottomSafe = 350;
const white = { r: 1, g: 1, b: 1 };

// Canvas: black backstop while the photo image fill loads
const canvas = figma.createFrame();
canvas.resize(canvasW, canvasH);
canvas.cornerRadius = 0; canvas.cornerSmoothing = 0;
canvas.fills = [{ type: 'SOLID', color: { r: 0.02, g: 0.02, b: 0.02 } }];
canvas.clipsContent = true;
section.appendChild(canvas);

// Full-bleed photo placeholder
const photoBg = figma.createRectangle();
photoBg.resize(canvasW, canvasH);
photoBg.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.3 } }];
canvas.appendChild(photoBg);

// Bottom scrim — dark gradient bottom-up (covers ~45% of canvas) for headline contrast
const bottomScrim = figma.createRectangle();
bottomScrim.resize(canvasW, Math.round(canvasH * 0.45));
bottomScrim.x = 0; bottomScrim.y = canvasH - Math.round(canvasH * 0.45);
bottomScrim.fills = [{
  type: 'GRADIENT_LINEAR',
  gradientTransform: [[0, 1, 0], [-1, 0, 1]],
  gradientStops: [
    { position: 0, color: { r: 0, g: 0, b: 0, a: 0   } },
    { position: 1, color: { r: 0, g: 0, b: 0, a: 0.6 } },
  ],
}];
canvas.appendChild(bottomScrim);

// Top scrim — dark gradient top-down (covers ~25% of canvas) for lockup contrast
const topScrim = figma.createRectangle();
topScrim.resize(canvasW, Math.round(canvasH * 0.25));
topScrim.fills = [{
  type: 'GRADIENT_LINEAR',
  gradientTransform: [[0, 1, 0], [-1, 0, 1]],
  gradientStops: [
    { position: 0, color: { r: 0, g: 0, b: 0, a: 0.5 } },
    { position: 1, color: { r: 0, g: 0, b: 0, a: 0   } },
  ],
}];
canvas.appendChild(topScrim);

// === LOCKUP AT TOP — D-reversed per §Logo.5 / §Composition.7b ===
// Cluster (horizontal-right-white = wordmark on left, entry-points on right) at top-LEFT
// Symbol (white) at top-RIGHT
// Lockup keys off the same unified X (digital 8%) per §Logo.4.
const lockupTopY = topSafe + X;                       // 336: canvas margin clearance below top safe area
const clusterH   = Math.round(X * 162 / 144);         // 97 — wordmark glyph lands at X per §Logo.4
const clusterW   = Math.round(clusterH * 965 / 162);  // 575
const symbolSize = X;                                 // 86 — symbol = X × X per §Logo.4

// Cluster — vector, white-recoloured horizontal-right SVG
const CLUSTER_SVG_WHITE = `<svg width="965" height="162" …>…</svg>`;   // sed-recoloured to #FFFFFF
const cluster = figma.createNodeFromSvg(CLUSTER_SVG_WHITE);
cluster.resize(clusterW, clusterH);
cluster.x = X;                                      // top-left margin
cluster.y = lockupTopY;
canvas.appendChild(cluster);

// Symbol — black canonical (NOT the white-asset inversion) + always-on white stroke
const SYMBOL_BLACK = `<svg width="138" height="138" …>…</svg>`;        // black squircle, white flower
const symbol = figma.createNodeFromSvg(SYMBOL_BLACK);
symbol.resize(symbolSize, symbolSize);
symbol.x = canvasW - X - symbolSize;                // top-right margin
symbol.y = lockupTopY + clusterH - symbolSize;      // bottom-align with cluster baseline
// Always-on 1 px white stroke around the squircle (per §Logo.3) —
// invisible on light surfaces, delineates the squircle on dark/photo
const dark = (n) => Array.isArray(n.fills) && n.fills.some(f => f.type === 'SOLID' && f.color.r < 0.1);
const all = symbol.findAll(n => n.type === 'VECTOR' && dark(n));
all.sort((a, b) => (b.width * b.height) - (a.width * a.height));
const squirclePath = all[0];
squirclePath.strokes = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
squirclePath.strokeWeight = 1;
squirclePath.strokeAlign = 'INSIDE';
canvas.appendChild(symbol);

// === CONTENT AT BOTTOM — copy never crosses Chloe's face (upper third) ===
// §Composition.1 large headline tier (1.5 × X) + single-tier subtitle (0.5 × X)
const textW = canvasW - 2 * X;
const subtitle = makeText('Banking that handles invoicing, expenses, and the boring bits.',
  'Regular', Math.round(X * 0.5), 110, white, X, 0, textW, 0.5);
canvas.appendChild(subtitle);
subtitle.y = canvasH - bottomSafe - X - subtitle.height;   // anchor subtitle bottom to canvasH − bottomSafe − X

const headline = makeText('Less admin.\nMore business.',
  'Bold', Math.round(X * 1.5), 98, white, X, 0, textW, 0.5);
canvas.appendChild(headline);
headline.y = subtitle.y - Math.round(X * 0.5) - headline.height;
```

**Apply image fill (photo only — logos are vector per §Logo.9b):**

```bash
figma_set_image_fill nodeIds=[photoId]   imageData=/tmp/q-photo-chloe-2160.png       scaleMode=FILL
```

Then re-bind the returned `imageHash` via `figma_execute` (same plugin quirk).

**Photo size cap.** Figma's `figma_set_image_fill` rejects PNGs above ~4 MP / 4 MB. Pre-resize with `sips --resampleWidth 2160 …`.

**Why D-reversed.** Per §Composition.7b's subject-detection step: Chloe's face occupies the upper third of the cropped canvas. Putting the headline at the top would land it directly on her face (the violation). Putting the lockup at the top instead lets the headline drop to the bottom band where her torso provides darker backing for white type, and the bottom scrim seals the contrast. The face stays clear — the rule.

*Empirically validated at `1080 × 1920` in file `mNVOGF8yvrXXMXTVt6cKkr`, page "Instagram Story Test". Screenshot verified **unified `X = 86`** (digital 8 %): top lockup (cluster horizontal-right top-left: wordmark 307 × 86, divider 1 × 86, entry-points 21 px; symbol-multiplier-black + always-on white stroke 86 × 86 top-right with auto gap) at canvas margin = `X = 86`. Headline "Less admin. / More business." at large tier (1.5 × X = 129 px) wraps to 3 lines for vertical drama; subtitle at 0.5 × X = 43 px anchored at `canvasH − bottomSafe − X = 1484`. Chloe's face fully clear of any copy.*

### 3. LinkedIn paid ad — archetype C split (text + photo) + ToV in formal register

A `1200 × 627` (LinkedIn sponsored-content default) on §Composition.7 archetype C — **text on the left half, photo on the right half**. Same Qonto brand as §2 above but the audience is pitched to professional B2B; same four ToV principles produce visibly different vocabulary and rhythm. Read §2 and §3 side-by-side to see "In tune" prove itself.

**Rules exercised:**

- §Tone of voice — *"In tune"* register adaptation: descriptive single-sentence headline ("Banking purpose-built for European SMEs.") instead of IG's parallel imperative. Vocabulary leans formal (`purpose-built`, `SMEs`, `trust`) rather than casual (`admin`, `boring bits`). *"At your service"* via concrete evidence — 500,000+ businesses, five named markets — no "best" / "world-class" / hyperbole. *"To the point"* and *"Playful but polished"* still hold underneath.
- §Composition — archetype C split: text occupies the left half, photo the right half. Each half observes its own X margins (so text has X-margin from the canvas left and from the half boundary). Headline at medium tier per §Composition.1. Unified `X = 50` (digital 8% of min=627).
- §Typography — Bold headline at `1.25 × X = 63 px` (LH 98 / +0.5%), Regular subtitle at `0.5 × X = 25 px` (LH 110 / +0.5%). At this small canvas (X = 50) most of §Typography.4's pixel floors win over the X-multipliers — body sizes hit `16 px` floor and caption hits `12 px` before the ratios kick in.
- §Color — white left half, photographic right half — no product palette.
- §Photography — right-half photo (`Lisa Cs Office Action.png`) at `scaleMode: 'FILL'` cropped to the half. Picked for B2B warmth — a real moment of customer-facing work.
- §Logo — **wordmark alone at the bottom of the left half**, *not* the full lockup. Per §Logo.1's reduction ladder, this canvas's `X = 50` (digital 8% of 627) produces entry-points text at `X × 0.245 ≈ 12 px`, below the **20 px digital floor**. Cluster is dropped; the wordmark-alone variant ships instead. Symbol-multiplier (black, `X × X = 50 × 50`, **always-on white stroke** per §Logo.3) at bottom-left, wordmark-alone (height `X = 50`, width `X × 82/24 ≈ 171`) at bottom-right of the left half, auto gap between. Canvas margin = `X = 50` (unified — same anchor for layout and lockup).
- §Asset library — photo + standalone wordmark SVG + symbol-multiplier-black SVG, all imported via `figma.createNodeFromSvg` (vector — see §Logo.9b).

**Build (key excerpts — same helpers as §1):**

```javascript
const canvasW = 1200, canvasH = 627;
const MEDIUM = 'digital';
const X = Math.round(Math.min(canvasW, canvasH) * (MEDIUM === 'digital' ? 0.08 : 0.05));   // 50
const halfW = canvasW / 2;
const black = { r: 0.02, g: 0.02, b: 0.02 };
const white = { r: 1, g: 1, b: 1 };

// Canvas (structural sharp)
const canvas = figma.createFrame();
canvas.resize(canvasW, canvasH);
canvas.cornerRadius = 0; canvas.cornerSmoothing = 0;
canvas.fills = [{ type: 'SOLID', color: white }];
canvas.clipsContent = true;
section.appendChild(canvas);

// Right-half photo placeholder — fill applied via figma_set_image_fill
const photoBg = figma.createRectangle();
photoBg.resize(halfW, canvasH);
photoBg.x = halfW; photoBg.y = 0;
photoBg.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.3 } }];
canvas.appendChild(photoBg);

// Headline + subtitle on the left half. Subtitle width capped at 70% of textW so the
// sentence breaks at meaning rather than at the canvas edge — common in dense B2B copy.
const textW = halfW - 2 * X;
const headline = makeText('Banking purpose-built for European SMEs.',
  'Bold', Math.round(X * 1.25), 98, black, X, X, textW, 0.5);   // medium tier 1.25 X
canvas.appendChild(headline);
const subtitle = makeText(
  '500,000+ businesses across France, Germany, Italy, Spain, and the Netherlands trust Qonto for banking, invoicing, and finance management.',
  'Regular', Math.round(X * 0.5), 110, black,                    // single tier 0.5 X
  X, headline.y + headline.height + Math.round(X * 0.5), Math.round(textW * 0.7), 0.5
);
canvas.appendChild(subtitle);

// Lockup — wordmark alone (entry-points dropped per §Logo.1 dual-floor rule).
// X = 0.08 × min(1200, 627) = 50 (digital). At X = 50, EP = round(50 × 0.245) = 12 px,
// below the 20 px digital floor → drop entry-points, ship wordmark-alone.
// Standalone wordmark SVG: viewBox 82 × 24. Render so wordmark height = X = 50:
//   wordmark_w = X × (82 / 24) ≈ 171
const WORDMARK_SVG = `<svg width="82" height="24" …>…</svg>`;
const wordmark = figma.createNodeFromSvg(WORDMARK_SVG);
wordmark.resize(Math.round(X * 82 / 24), X);                      // 171 × 50
wordmark.x = halfW - X - wordmark.width;             // bottom-right of left half (canvas margin X)
wordmark.y = canvasH - X - wordmark.height;
canvas.appendChild(wordmark);

// Symbol — black canonical + always-on white stroke (§Logo.3)
const SYMBOL_SVG = `<svg width="138" height="138" …>…</svg>`;     // black squircle + white inner Q
const symbol = figma.createNodeFromSvg(SYMBOL_SVG);
symbol.resize(X, X);                                 // 50 × 50 — symbol = X × X
symbol.x = X;                                        // bottom-left of left half (canvas margin X)
symbol.y = canvasH - X - X;
// Always-on white stroke on the outer squircle
const dark = (n) => Array.isArray(n.fills) && n.fills.some(f => f.type === 'SOLID' && f.color.r < 0.1);
const all = symbol.findAll(n => n.type === 'VECTOR' && dark(n));
all.sort((a, b) => (b.width * b.height) - (a.width * a.height));
const squirclePath = all[0];
squirclePath.strokes = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
squirclePath.strokeWeight = 1;
squirclePath.strokeAlign = 'INSIDE';
canvas.appendChild(symbol);
```

**Apply image fill (photo only — logos are vector per §Logo.9b):**

```bash
figma_set_image_fill nodeIds=[photoId]   imageData=/tmp/q-photo-lisa-2160.png  scaleMode=FILL
```

Then re-bind the returned `imageHash` via `figma_execute` (same plugin quirk as §1, §2).

**Side-by-side reading.** Open §2 and §3 next to each other. Same Qonto brand, same colours, same Qonto Sans, same lockup geometry — but the **headline form, vocabulary, register, and rhythm are visibly different**, because §Tone of voice "In tune" adapted those layers to the audience. The principles underneath are unchanged.

*Empirically validated at `1200 × 627` in file `mNVOGF8yvrXXMXTVt6cKkr`, page "LinkedIn Paid Ad Test". Screenshot verified **unified `X = 50`** (digital 8 % of 627): medium-tier headline at 1.25 × X = 63 px wraps to 3 lines, subtitle at 0.5 × X = 25 px capped at 70 % width, Lisa office photo on the right half at FILL, **wordmark-alone** (171 × 50) bottom-right of the left half, **symbol-multiplier-black with always-on white stroke** (50 × 50) bottom-left at canvas margin = X = 50. Entry-points dropped: at `X = 50` the EP size of 12 px is below the 20 px digital floor, so the cluster collapses to wordmark-alone per §Logo.1.*

---

## Photography

See [`references/photography.md`](references/photography.md) for AI generation prompts and photo-selection rules. For approved shots, pull from `Photography/` in the [Asset library](#asset-library) — any image in that folder is cleared for use.

---

## Asset library

Canonical exports of the SOT for any context that isn't Figma — decks, docs, email, Canva, Notion, landing pages, social tools.

**Where it lives:** [Qonto Brand Asset Library](https://qontobrandassetlibrary.netlify.app/) — public web app backed by AWS S3, hosted on Netlify. No auth required.

**Migrated from Google Drive (2026-04-27).** The library moved off Drive onto AWS S3 with a Next.js front-end. Folder structure mirrors the prior Drive 1:1, so cross-references in earlier sections still resolve. New asset categories (Gradients, Motion, etc.) land here, not back on Drive — flag the brand team if you see a stray Drive link in any rule.

**Source vs export.** The Figma SOT is the source of truth; the asset library is the export pipeline's output. If an asset exists in both, the library mirrors Figma — if they disagree, Figma wins and the library copy is stale. Flag the mismatch to the brand team rather than working around it.

| Folder | What's in it | Files | Use for | Source / cross-link |
|---|---|---|---|---|
| `Logo/` | SVG and PNG exports of every canonical logo configuration | 28 | Any non-Figma surface that needs a logo | SOT [node 399:548](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=399-548) · §Logo |
| `Icons/` | Material Symbols Outlined exports + in-house overrides for Qonto-key actions | 220 | Iconography on any non-Figma surface | SOT [node 2:18056](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=2-18056) · §Iconography |
| `Photography/` | Approved photography pool — no gate, self-serve | 49 | Full-bleed backgrounds, card imagery (§Composition.7 archetypes D, E) | §Photography |
| `Card Assets/` | Product-card renders | 66 | Feature and product-announcement compositions | — |
| `Trustpilot/` | Rating badges and visuals | 7 | Social-proof placements | — |
| `UI Snapshots/` | Approved product screenshots | 323 | Product-story compositions in marketing | — |

(*Total `693` files at the time of migration. A `Gradients/` folder is on the roadmap and will land here when the Qonto Gradient plugin's export pipeline is wired up — until then, gradients come from the plugin in Figma and don't have an outside-Figma export. See §Color.7.*)

### How the agent reaches it

The library is a **public web app with no auth** — any agent with `WebFetch` (or any HTTP fetch primitive) and a URL can read it. Two flows depending on whether you know the filename or not:

- **Filename known** (you saved it from a previous session, the user gave it to you, or you derived it from the convention): fetch directly via the **raw asset URL pattern** below. Skip the gallery.
- **Filename unknown**: `WebFetch` the homepage (`https://qontobrandassetlibrary.netlify.app/`) and ask the model to enumerate the gallery — every file in every category is listed there. Pick the match for the user's intent, then fetch by raw URL.

**Never invent or redraw a brand asset** when the canonical export exists in the library. If you think an asset is missing, say so — don't improvise.

### Raw asset URL pattern

```
https://qontobrandassetlibrary.netlify.app/api/assets/raw/<Category>/<Filename>
```

- Path is **case-sensitive** — `Card Assets` (capital `C`, capital `A`, single space).
- Spaces in the category or filename must be **percent-encoded** as `%20`.
- Hitting a category root (e.g. `/api/assets/raw/Logo`) returns `500`, not a directory listing — the bucket has no listing endpoint exposed. Browse the homepage gallery instead.
- An unknown filename also returns `500`. **Always confirm the filename via the gallery first if you're not 100 % sure.**

**Example** — fetching the wordmark:
```
GET https://qontobrandassetlibrary.netlify.app/api/assets/raw/Logo/qonto-wordmark.svg
```

**Example** — Card Asset with a space in the category:
```
GET https://qontobrandassetlibrary.netlify.app/api/assets/raw/Card%20Assets/plus-black.png
```

**Don't use the Next.js image-optimized URL** (`/_next/image?url=…&w=…&q=…`) — that path is for the front-end gallery's previews. Always fetch the raw path; the bytes round-trip cleanly into Figma, decks, or HTML.

### Validated fetch pattern — agent flow

End-to-end recipe, tested against the live library. Works with any tool that can issue an HTTP GET (Claude Code with `WebFetch` + `Bash`, Cursor, Claude Desktop, custom agents) — no MCP connector required.

1. **Browse the gallery** to enumerate filenames for the category you need:
   ```
   WebFetch({
     url: 'https://qontobrandassetlibrary.netlify.app/',
     prompt: 'List every file in the Photography category — return filenames only, one per line.'
   })
   ```
2. **Pick a filename** by the convention (see below).
3. **Fetch the raw bytes**:
   ```bash
   curl -s "https://qontobrandassetlibrary.netlify.app/api/assets/raw/Photography/<filename>" -o /tmp/asset.png
   ```
4. **Apply to Figma.** `figma_set_image_fill` takes the `/tmp` file path directly (preferred for large images — avoids parameter truncation). It may report `"Image fill applied to 0 node(s)"` due to a known plugin quirk — **the returned `imageHash` is still valid.** Apply it manually in `figma_execute`:
   ```javascript
   rect.fills = [{ type: 'IMAGE', imageHash: '<returned hash>', scaleMode: 'FILL' }];
   ```
5. **Reuse within the session.** The `imageHash` is now cached for the rest of the session — see "Within a Figma session: reuse by `imageHash`" below.

### Filename conventions

Observed in the live library (sample):

- **`Logo/`** — `qonto-<configuration>-<colour>.svg` / `.png` (wordmark, full lockup, badge, square, symbol).
- **`Icons/`** — `icon_<name>_<style>.svg` for every glyph (Material exports + in-house overrides share the scheme). `<style>` is `outlined` by default, `filled` for the SOT-named fill exceptions. See §Iconography for the rules.
- **`Photography/`** — `{Subject} {Scene/Theme} {Mood}.png` — e.g. `Thomas Tech Office Action.png` (carried forward from the Drive era).
- **`Card Assets/`** — `<feature>-<colour>-<modifier>.png` — e.g. `plus-purple-embossed-front.png`, `virtual-blueberry.png`, `x-graphiteblack-print-back.png`.

When asking a user for a specific photo, request by mood and scene keywords ("a calm, wide shot with negative space in the upper-left") rather than a guessed filename — the user finds the match faster than the agent can. The gallery's also browsable in any browser, so a link to the homepage with a category nudge is often the cleanest hand-off.

### Within a Figma session: reuse by `imageHash`

Once an asset is applied to any node in the current Figma file, the Plugin API returns an `imageHash` (e.g., `bba4a50a88e89a9be31d630b2338de5a81bf46bf`). That hash is reusable for the rest of the session — apply it to new rectangles directly without re-fetching:

```javascript
rect.fills = [{ type: 'IMAGE', imageHash: '<stored hash>', scaleMode: 'FILL' }];
```

Log the hash the first time an asset lands so subsequent uses in the same session skip the download round-trip.

---

## For AI tools

When this skill is in context:

1. Read brand identity first — it shapes tone and decisions.
2. Determine whether the work is marketing or product before picking colors or logos.
3. **For any logo placement**: use the sizing formula in §Logo.4 and the library component keys in §Logo.2. Never draw the logo from shapes.
3a. **For any multi-element layout**: compute `X` first (§Logo.4), then derive headline, subtitle, body, logo, and margins from `X` per §Composition. Pick one headline tier per composition.
4. Before creating anything in Figma, call `search_design_system` to confirm components are available; import via `importComponentByKeyAsync`.
5. **For any brand asset** (logo, icon, photo, card render, Trustpilot badge, UI snapshot) **outside Figma**: consult §Asset library for the canonical export rather than inventing, redrawing, or generating.
6. If a guideline here conflicts with a DS token, trust this file and flag the mismatch to the brand team.
7. When unsure, default to the universal rules and ask for clarification.
