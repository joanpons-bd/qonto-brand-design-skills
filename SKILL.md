---
name: qonto-brand-design-skill
version: 3.10
description: "Qonto brand as code. Apply Qonto's brand guidelines — logo, composition, color, typography, tone, photography — to any output (Figma, HTML, social, print, slide decks). Pulls ground truth from the Brand Kit SOT Figma file. Always uses Figma library components — never recreates from scratch."
---

# Qonto Brand Design Skill

> Version: 3.10 · Last updated: 2026-05-04 · Status: living document
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
- **Build with auto-layout.** When constructing a composition in Figma, use auto-layout for every structural band that stacks content predictably — text-blocks (headline + subtitle), card internals (icon-box + title + body), lockup bands (symbol + cluster with `SPACE_BETWEEN`), grid rows (cards-row with `0.5X` itemSpacing). Auto-layout makes the layout reflow when copy changes, mirrors how human designers work in Figma, and produces files that are editable by hand without breaking. **Reserve absolute positioning** for two cases only: (a) canvas-level placement of the bands themselves (where 1080-class compositions sit comfortably with hard pixel coordinates), and (b) text overlays on full-bleed photo cards (where the overlay floats independently of any stack). Recipes throughout §Reference compositions follow this hybrid pattern — explicit auto-layout where natural, explicit absolute positioning where overlays demand it.

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

**Canvas is white (or black). Cards are tinted off it.** Two — and only two — valid pairings for **secondary-tier cards** (per §Object styles.6 — flat solid fills, no shadow):

- **White canvas + gray-50 (`#F5F5F5`) cards** — the default. The canvas stays canonical white; cards register as distinct surfaces via tonal contrast.
- **Black canvas (`#050505`) + gray-800 (`#262626`) cards** — for hero / announcement / dark-mode contexts. Same logic, inverted.

**Never** the inverse pairings: don't tint the canvas with gray-50 and put white cards on it, and don't put gray-800 cards on a gray-50 canvas. The brand canvas is always one of the two canonical primaries (white or black); the gray steps are reserved for the *cards floating on that canvas*. This keeps the brand's white-led identity intact while still allowing flat secondary cards to read as distinct surfaces without a shadow.

The tonal contrast between card and canvas does the work that a shadow would otherwise provide — keeping shadow scoped to the primary tier (special occasions only — see §Object styles.6).

**Nested elements inside cards.** When a gray-50 card on a white canvas needs an icon-box or badge, the inner tile reverts to **white** (matches the canvas, "punches through" visually). When a gray-800 card on a black canvas needs the same, the inner tile reverts to **black** (`#050505`). The rule is symmetric: the inner tile mirrors the canvas, the card sits between them tonally.

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

> **`X = 0.08 × min(canvas_w, canvas_h)`** — for every medium. Mnemonic: **X is 8 — for everything.**

`X` is the single brand unit. Every spec in §Logo, §Composition, §Typography, and §Object styles resolves to a multiple of `X`. One canvas, one anchor, one number — across print, digital, and DOOH.

**Why one rule.** The earlier 5/8 split ("5 for ink, 8 for screens") was an artefact of an older brand presence calibration tied to billboard-scale print. In practice, most actual print surfaces (A4 posters, brochures, flyers, deck PDFs) felt under-anchored at 5 %: the lockup looked timid on the page. Going 8 % across the board gives the brand consistent presence at every scale; viewing distance corrections that the 5 % rule was supposed to compensate for turn out not to need a separate anchor. Simpler rule, more confident output.

**Verification against SOT.** The reference layout in the Brand Kit SOT is 2000 px wide and frames a brand artefact; its wordmark renders at 100 × 356. That matches `X = 100` (5 % of 2000) — but the SOT was sized to the older 5 % anchor. Under v3.4 the same 2000-wide canvas would render at `X = 160`, wordmark `160 × 571`. The SOT itself will catch up; until then, the values in this file are the source of truth.

| Canvas | Min dim | `X` | Wordmark width |
|---|---|---|---|
| 1080 × 1080 IG square | 1080 | **86** | 308 |
| 1080 × 1350 IG portrait | 1080 | **86** | 308 |
| 1080 × 1920 IG Story | 1080 | **86** | 308 |
| 1200 × 1200 LinkedIn organic post | 1200 | **96** | 343 |
| 1920 × 1080 deck slide | 1080 | **86** | 308 |
| 1200 × 627 LinkedIn paid ad | 627 | **50** | 179 — but EP < 20 floor → drop EP unless bisected-canvas |
| 1240 × 1754 A4 print one-pager | 1240 | **99** | 354 |
| 2480 × 3508 A4 brochure (300 dpi) | 2480 | **198** | 707 |
| 2880 × 1620 OOH | 1620 | **130** | 464 |
| A4 print (210 × 297 mm) | 210 mm | **16.8 mm** | 60 mm |

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

| Canvas | X | cluster_height | cluster_width | wordmark glyph in render |
|---|---|---|---|---|
| 1080 × 1080 / 1080 × 1350 / 1080 × 1920 (IG square / portrait / Story) | 86 | 97 | 575 | 86 |
| 1200 × 1200 (LinkedIn organic post) | 96 | 108 | 643 | 96 |
| 1200 × 627 (LinkedIn paid ad) | 50 | 56 | 333 | 50 — but EP < 20 floor → drop EP unless bisected-canvas pattern overrides |
| 1920 × 1080 (deck slide) | 86 | 97 | 575 | 86 |
| 1240 × 1754 (A4 print one-pager) | 99 | 111 | 663 | 99 |
| 2880 × 1620 (OOH) | 130 | 146 | 871 | 130 |

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
- **Bisected-canvas placement (content on one half, image on the other).** Reference: SOT [node 564:7739](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=564-7739). When the canvas is split into a content half and an image half (archetype C — common for landscape ads, banners, page-width hero strips), the lockup spans the **full content half** and reverses to read into the image:
  - **Wordmark at the canvas-edge margin** (left half: at the canvas left, `X` from edge; right half: mirror).
  - **Divider + entry-points** to the right of the wordmark inside the cluster (so the cluster reads wordmark → entry-points, left-to-right, like the top placement).
  - **Symbol at the half-canvas divide**, `X` inset from the centre line (the inner edge of the content half — i.e. the boundary between content and image).
  - **Auto gap** between the cluster's right edge and the symbol's left edge fills the remaining width.
  - **Reading-path rationale:** the symbol sits exactly at the canvas's horizontal midpoint, acting as a brand "seal" at the threshold between content and image. The eye reads wordmark → entry-points → symbol → image — brand → service descriptor → mark → subject. This is the canonical pattern for left-half-content / right-half-image compositions and inverts cleanly when the halves swap.
  - **Per §Logo.5b**, use the `horizontal-right-<LANG>` cluster orientation (wordmark on the left of the divider, entry-points on the right) so the cluster reads outward from the canvas edge.
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
- **Do not clone a bottom-lockup band and place it at the top without flipping the order.** Bottom (priority) = symbol-left + cluster-right. Top (reversed) = cluster-left (wordmark with or without entry points) + symbol-right. The reading direction matters: at the top we open with the wordmark (the reader sees the brand name first); at the bottom we close with the wordmark (the reader's eye lands on the brand mark last). Reference: [SOT node 220:52561](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=220-52561). When cloning a lockup band across surfaces, swap the auto-layout child order if you're moving from bottom to top placement.

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
- **Gap between the last content band and the bottom lockup: `≥ 1X` (prefer `2X`).** The lockup gets generous breathing room by default. **Default: `2X`** for text-led compositions where the lockup needs to feel anchored. **Relax to `1X`** for dense card-heavy compositions (cards-row + lockup, where the wider X already supplies enough breathing room and `2X` would push the cards too far up). Don't go below `1X` — the lockup must visibly separate from the content above it.

Worked examples — `1080 × 1080` IG square (X = 86) and `1240 × 1754` A4 print one-pager (X = 99):

| Element | IG square (X = 86) | A4 (X = 99) | In X |
|---|---|---|---|
| Canvas margin (all 4 sides) | 86 | 99 | `1X` |
| Content column width | 908 | 1042 | `canvas_w − 2X` |
| Adjacent-band gap | 86 | 99 | `1X` |
| Last-band → lockup gap (text-led, default) | 172 | 198 | `2X` |
| Last-band → lockup gap (cards-led, relaxed) | 86 | 99 | `1X` |
| Lockup strip height (symbol / wordmark / cluster glyph) | 86 | 99 | `1X` |
| Grid gutter (§Composition.3) | 43 | 50 | `0.5X` |

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
- **Every last content band ends at `lockupY − ≥1X`** (prefer `2X` for text-led compositions; relax to `1X` for cards-led layouts where the row would push too far up). This holds for text bands (A), visual bands (B), both halves of a split (C), overlay text blocks (D), and cards (E). Never go below `1X` — see §Composition.2.
- Text block honours horizontal (§Composition.5) and vertical (§Composition.6) alignment rules.
- Headline tier (§Composition.1) picked for the archetype, not per element.
- Grid (§Composition.3) as a reference, especially when splitting (C) or sizing the text card (E).
- **Sharp grounds, rounded accents.** Structural objects (backing cards, scrims, bands, hero images, full-bleed rectangles) are always sharp (`cornerRadius = 0`). Rounded corners belong to content-scale objects that float *inside* the structure — product covers, small image tiles, icon bounding boxes, avatars, chips — picked from the four atomic shapes in §Object styles.1. Full rules in §Object styles.
- **Copy never crosses a recognisable face** (archetype D, and any photo-overlay variant). When the subject's face occupies the canvas zone where copy would naturally land, do not let the copy cross it — pivot to archetype D's reversed variant (**lockup at the top per §Logo.5 reversed-top placement, copy at the bottom**) or move to archetype B / C where text and image have their own bands. The photo subject is the brief's protagonist; the copy supports them, never obscures them.
- **Image-bg overlay always — copy over photo gets a scrim.** Whenever copy sits on top of an image — whether a full-bleed archetype D canvas, an archetype E text card on a bleed image, or a **card-scale image background** (a tertiary-tier card per §Object styles.6) — apply a dark gradient scrim where the copy lands. The scrim is mandatory; ship copy on photo without one only when readability is *extremely clear* (rare — assume it isn't). Recipe in §Composition.9b; opacity tuned per scene per the same rules. White text on a yellow shirt is not "extremely clear" — add the scrim.

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
- Do not use band gaps that are not multiples of X (§Composition.2). Adjacent bands = `1X`, last band to lockup = `≥ 1X` (default `2X`, relax to `1X` for cards-led), margins = `X`.
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

See §Typography.4 for the full type system. In brief: every non-headline/subtitle text role anchors in `X` with a hard pixel floor — **paragraph body** at `max(16 px, round(X × 0.45))`, **card titles** at `max(22 px, round(X × 0.55))`, **captions / metadata / entry-points** at `max(12 px, round(X × 0.245))` (entry-points additionally bounded by their `20 px digital / 12 px print` floor per §Logo.4). Do not introduce sizes that sit between the defined ratios.

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
| **Card title** (sub-headline inside cards / panels / blocks) | Qonto Sans **Bold** | `max(22 px, round(X × 0.55))` | 110 % | 0 % |
| **Body / paragraph copy** | Qonto Sans **Regular** | `max(16 px, round(X × 0.45))` | 130 % | 0 % |
| **Caption / metadata / label / entry-points** | Qonto Sans **Regular** | `max(12 px, round(X × 0.245))` | 130 % | 0 % |

- Headlines are set **sub-leading (98 % LH)** — lines crowd into each other so the type block reads as one dense shape; +0.5 % tracking opens the counters back up at display sizes so the crowding doesn't fight legibility.
- Body uses 130 % LH because reading-mode wants air; tracking stays at 0 — Qonto Sans is already tuned for it.
- **12 px is the absolute floor for body / caption / metadata.** Never ship type smaller, even for legal footnotes — pick a larger canvas instead.
- **Entry-points share the caption row's formula** (`max(12 px, round(X × 0.245))`) but carry an additional medium-specific floor of `20 px digital / 12 px print` because they ship brand information inside the lockup — see §Logo.4. When the formula falls below the entry-points floor, the lockup drops to wordmark-alone (§Logo.1).
- **Why two body-side rows.** Paragraph copy (the "read this to understand" tier) and captions (the "glance at this for orientation" tier) had collapsed into one row in earlier versions, which let card body land at 12–16 px on social canvases — illegible at phone scale. Splitting the rows and anchoring paragraph copy at `0.45 X` lifts body copy to a thumb-readable size at digital `X = 86` (`39 px`) and stays at the floor on tiny surfaces like a `1200 × 627` LinkedIn ad (`23 → 16 px floor`).

**Reading the X-anchored sizes by surface.** Walk a few canonical examples to build intuition (X = 8 % of min(W, H), every medium):

| Surface | X | Headline (M) | Subtitle | Card title | Body min | Caption min |
|---|---|---|---|---|---|---|
| `1080 × 1080` IG square | 86 | 108 | 43 | 47 | 39 | 21 |
| `1080 × 1350` IG portrait | 86 | 108 | 43 | 47 | 39 | 21 |
| `1080 × 1920` IG Story | 86 | 108 (M) / 129 (L) | 43 | 47 | 39 | 21 |
| `1200 × 1200` LinkedIn organic post | 96 | 96 (S) / 120 (M) | 48 | 53 | 43 | 24 |
| `1200 × 627` LinkedIn paid ad | 50 | 63 | 25 | 28 | 23 | 12 |
| `1920 × 1080` deck slide | 86 | 108 | 43 | 47 | 39 | 21 |
| `1240 × 1754` A4 print one-pager | 99 | 124 (M) / 149 (L) | 50 | 54 | 45 | 24 |
| `2880 × 1620` OOH | 130 | 163 | 65 | 72 | 59 | 32 |

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

### 6. Style and effect — the three-tier card model

From the SOT style-and-effect spec ([node 521:52763](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=521-52763)):

> *"On floating objects we allow full flat black or white backgrounds as well as transparent options with background blur. We recommend Beautiful Shadows plugin to generate subtle and rich drop shadows on objects when needed."*

Cards have a **hierarchy**. Pick the tier that matches the moment, not the look. The three tiers compose the four background treatments below into a strategic ladder, with shadow scoped to the top tier only.

| Tier | Treatment | When to use |
|---|---|---|
| **Primary** | Solid fill (white or black) **+ Beautiful Shadows 5-layer stack** | **Special occasions only** — hero cards, lifted moments, the one card that needs to feel like it floats off the page. Shadow signals *"this is the one"*. |
| **Secondary** | Flat solid fill, tonally offset from the canvas — **gray-50 (`#F5F5F5`) cards on white canvas**, or **gray-800 (`#262626`) cards on black canvas** (`#050505`). No shadow. See §Color.3 for the canvas/card pairing rule. | **DEFAULT.** Most cards on most surfaces. The tonal contrast between card and canvas does the work; shadow is unnecessary. |
| **Tertiary** | Full-bleed media + dark gradient scrim where copy lands — see §Composition.7 overlay rule | Image-led cards (photo + headline overlay). The scrim is mandatory; never ship copy on photo without one. |

**Default flow.** Reach for **secondary** first. Promote to **primary** only when a single card must be lifted off the page. Use **tertiary** when the message lives on top of an image. A composition with three primary cards in a row defeats the whole hierarchy — pick one to elevate.

**Four background treatments** are still the underlying alphabet. Cards in the secondary tier draw from these; the primary tier adds the shadow stack on top; the tertiary tier replaces the fill with media + scrim.

| Treatment | Fill | Extras |
|---|---|---|
| **Flat white** | Solid `#FFFFFF` | No blur, no stroke |
| **Flat black** | Solid `#050505` (Qonto's near-black, never `#000000`) | No blur, no stroke |
| **Blur white** | Transparent fill | Background blur radius `52` over a light scene |
| **Blur black** | Transparent fill (dark tint) | Background blur radius `52` over a dark scene |

Blur treatments require a **visually varied backing** (a photo, a gradient, a busy composition). Over a flat colour, the blur reads as a washed tint and loses its purpose — use flat white or flat black instead.

**Drop shadows via Beautiful Shadows — primary tier only.** Do not hand-roll single-layer shadows, and do not apply shadows by default to every card. Use the [Beautiful Shadows](https://www.figma.com/community/plugin/1038073952378169144) plugin to generate a rich multi-layer stack on cards in the primary tier only. The SOT canonical shadow on a `370×370` tile is a five-layer stack:

| Layer | Y offset | Blur | Opacity |
|---|---|---|---|
| 1 | `10` | `23` | `10 %` |
| 2 | `41` | `41` | `9 %` |
| 3 | `93` | `56` | `5 %` |
| 4 | `166` | `66` | `1 %` |
| 5 | `259` | `73` | `0 %` |

All layers `#050505`, spread `0`. Regenerate with the plugin when the object size changes — these values are calibrated for the SOT's `370×370` reference and don't linearly scale. Run the plugin on the actual object rather than copying this stack verbatim to a wildly different size.

**Card padding — one rule, uniform internally (v3.5).**

> **`card_pad = round(0.08 × min(cardW, cardH))`** — minimum spacing for everything inside a card.

The rule applies **uniformly** to:
- All four card edges (top, right, bottom, left) — the same value on every side.
- Major element gaps inside the card (e.g. icon-box ↔ text frame).

It does **not** apply to:
- Within-text-block typography spacing (title ↔ body inside a single auto-layout text frame). Those gaps are typographic — driven by line-height and visual hierarchy, typically `12–16 px` regardless of card scale.

**Worked numbers across the v3.4 / v3.5 surfaces:**

| Card | min(W, H) | `card_pad` |
|---|---|---|
| IG Square cards 432 × 392 | 392 | **31** |
| Deck slide cards 554 × 454 | 454 | **36** |
| LinkedIn organic post cards 480 × 378 | 378 | **30** |

`0.08` is the same anchor as the canvas-X formula (`X = 0.08 × min(W, H)` per §Logo.4), applied at card scale instead of canvas scale. Cards become self-consistent: the same number drives top, right, bottom, left, AND the gap between icon-box and text. Visual rhythm reads as intentional, not residual.

**Concentric-radius consequence.** With the v3.4 model, the card's outer radius (`X/2`) and the icon-box radius (`X/4`) were optically nested via the concentric formula `outer_r = inner_r + gap` (where `gap = X/4`). Under v3.5 the gap becomes `card_pad`, which doesn't generally equal `X/4` — so the formula no longer resolves cleanly. Cards still read as well-composed; the corner-curvature parallel just drifts. We accept that trade-off for padding consistency. Icon-box radius stays at `X/4` (canvas-derived); card radius stays at `X/2`.

**Auto-layout vs NONE.** When a card carries **both** an icon-box (or nested tile) and a text block, it needs `layoutMode = NONE` so each child gets explicitly positioned at `card_pad`. Cards with text only can run auto-layout (`paddingTop = paddingBottom = paddingLeft = paddingRight = card_pad`). The cards-row, lockup-row, cluster, and headline+subtitle stack are *always* auto-layout (see §Universal rules and §Reference compositions). The card itself is the one place where the auto-layout-first rule relaxes, and only when the two-element case (nested tile + text) applies or overlay layering is needed.

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
- **A card is never the composition.** Don't build a layout where a single card fills the canvas and serves as the entire composition (e.g. an email banner where one white-card-with-shadow holds the whole message). Cards are content-scale objects that *float inside* a composition — they need a canvas, headline, and lockup around them to make sense. When the canvas is small, drop the card and use a normal text-and-photo archetype (A, B, C, D, E from §Composition.7) at the canvas scale. The card-as-whole-composition pattern flattens the brand's compositional hierarchy and produces output that reads as a UI component, not a brand surface.
- **Inverting the canvas/card pairing.** Don't put white cards on a gray-50 canvas, and don't put gray-800 cards on a gray-50 canvas. The canvas is always one of the two canonical primaries (white `#FFFFFF` or black `#050505`); cards tint *off* the canvas (gray-50 cards on white, gray-800 cards on black). See §Color.3 and the secondary-tier definition above.

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

## Slide deck

A 16:9 internal-working medium with its own conventions. Marketing slide decks (full-bleed photo covers, polished end cards, etc.) are out of scope for this section — they will live in a future § Marketing slide deck.

**Surface:** 1920 × 1080 px.
**Margin anchor:** **`slide_M = 0.03 × min(W, H) = 32 px`** at 1920×1080. Distinct from canvas-X (`0.08 × min(W, H) = 86 px`). Slide deck is the only medium that overrides the universal X-system anchor.
**Canon:** the 2026 template (file `N59gmGWEzDfEab5byfnCoY`). The 235-series and v1 templates are deprecated.

> The full slide-deck type scale, corner-radius system, and component library will be formalised in the templatization sprint queued after v3.7. Until then, sizes below are anchored to what the 2026 template uses.

### 1. Slide types

Six archetypes. Surface, footer treatment, and composition flow from the type.

| Type | Surface | Wordmark | Composition |
|---|---|---|---|
| **Cover** | White | Bottom-left | Display headline + date pill. One per deck. |
| **Section divider** | Black | None | Number-left + title-right at top edge. |
| **Agenda** | White | None | Numbered list of sections. |
| **Content master** | White | None | Narrative split-panel, photo split-panel, single-column. |
| **KPI grid** | White | None | 3- or 4-column metric cards. |
| **Statement** | White or black | None | Full-bleed typographic moment. |

A **template-cover** (a meta-slide that identifies the .fig file itself, like "TEMPLATE - 2026" in a pill) sits OUTSIDE this taxonomy. Template-covers are not subject to slide-deck rules — they are file-identification chrome.

### 2. Margin

Every slide element respects a **32 px margin** from each canvas edge — `slide_M = 0.03 × min(W, H)`. No header band, no footer separator rule. The margin and the content, nothing else.

### 3. Logo placement

| Slide type | Bottom-left | Bottom-right |
|---|---|---|
| **Cover** | Qonto wordmark | Multiplier |
| **All other slides** | "Qonto \| confidential" | Multiplier |

The cover grounds the deck with the wordmark. Subsequent slides drop the wordmark — the multiplier alone carries brand presence.

**Sizing (slide-deck specific).** Logo height = `slide_M = 32 px`. Wordmark width derives from native 3.57:1 aspect ratio. Multiplier is `32 × 32 px` squircle with `cornerRadius = round(32 × 0.22) = 7 px` per §Logo.1. Slide deck overrides the universal X-based logo sizing in §Logo.4 alongside its margin override.

**Color inversion.** The multiplier (and any wordmark presence) inverts by canvas:
- White canvas → `#050505`
- Black canvas → `#FFFFFF`

In practice this affects section dividers and statement slides — the only types using black canvas.

### 4. Footer

The footer is the bottom-corner pair from §3. Two variants:

- **Cover footer:** wordmark BL + multiplier BR.
- **All-other footer:** "Qonto \| confidential" BL + multiplier BR.

"Qonto \| confidential" specifics: Qonto Sans Regular, **20 px**, neutral/300 (`#CCCCCC`). No "©", no period. Lowercase "confidential".

### 5. Display tier

Reserved for **cover headlines, section divider titles, and statement slides** only. Not used on agenda, content masters, or KPI grids.

- **Size:** 160–200 px.
- **Weight:** Qonto Sans **Regular** (not Bold, not Light).
- **Color:** `#050505` on white, `#FFFFFF` on black.

Body headlines on content slides cap at tier 3 (1.5X = 129 px) per §Composition.1. Display tier is the slide-deck extension above tier 3.

### 6. Type scale

Slide deck uses six tiers, all Qonto Sans Regular, all `#050505` on white / `#FFFFFF` on black:

| Tier | Size | Use |
|---|---|---|
| Footer | 20 px | "Qonto \| confidential" only (per §4); team · role on photo cards (per §10) |
| Caption | 26 px | Person name on photo cards in tight-column layouts (per §10) |
| Body | 36 px | Body copy, date pill text, slide-section labels on simple slide types |
| List / subhead | 72 px | Agenda items, list rows, slide-section labels — the band between body and headlines |
| Tier 1 | 86 px | Content-master headlines — small |
| Tier 2 | 108 px | Content-master headlines — medium |
| Tier 3 | 129 px | Content-master headlines — large |
| Display | 160–200 px | Cover headline, section divider title, statement, gradient-panel year text (per §5, §10) |

Distinct from the canvas-X body floor in §Typography.4 — slide deck has its own scale, calibrated to 1920×1080 reading distance.

**Bold exception:** §9 KPI hero numbers use Qonto Sans **Bold** at display tier. This is the only place Bold appears at headline scale on slide deck.

### 7. Section divider layout

Black canvas (`#050505`). Two-element top band, both on one baseline:

- **Number** (e.g. "01", "02") at `x = 32, y = 32`. Qonto Sans Regular, 160 px, white.
- **Title** right-aligned to canvas-right minus 32 px margin. Same size, weight, color.

The visual gap between number and title flexes with title length — this is intentional, not drift. Both elements occupy the top band; the body of the divider is empty.

No number ghost, no descriptor, no decorative bar. The number + title alone carries the divider.

### 8. Pill / chip — labeling primitive

A rounded-rectangle label used for date stamps on covers, category labels, and comparison badges.

- **Fill:** `#F5F5F5` (neutral/50) for neutral chips. Product-semantic fills (Success `#2BAD5F`, Error `#E04545`) permitted only in dataviz / comparison contexts per §Color.5.
- **Shape:** fully rounded — `cornerRadius` set to half the chip height (full pill).
- **Type inside:** Qonto Sans Regular at body size (36 px) or smaller. Color stays `#050505` or `#FFFFFF` only — no tinted text.
- **Roles:** date label below cover headline, category label, comparison badge.

### 9. KPI / metric cards — hero number type tier

When a numeric value IS the hero content of a card, it sizes per **headline tiers** — not the card-title cap.

- **KPI hero number:** up to display tier (200 px), Qonto Sans Bold, `#050505`.
- **The 0.55X card-title cap (§Typography.4) does not apply** to KPI hero numbers — only to label text within the same card.

**Card padding still follows `round(0.08 × min(cardW, cardH))`** per §Object styles.6 — computed at card scale, never substituted with canvas-X or `slide_M`. **The card_pad rule applies to text and icon-box content within cards.** **Centred media frames** (product screenshots, hero images, product shots inside comparison cards) are a separate placement pattern — they sit visually centred within the card, not edge-padded by `card_pad`. The rule still governs the surrounding text-tier content.

**Card surfaces** on white canvas — three variants permitted side-by-side on the same slide:

- Gray-50 (`#F5F5F5`) — default.
- Black (`#050505`) — accent.
- Gradient (per §Color.7) — special-occasion.

Corner radius: 10–20 px by content density (compact metric cards lean larger; tall KPI cards lean smaller). The templatization sprint will codify the radius scale.

### 10. People & celebration slides

Slides celebrating people — welcome / farewell / Qontoversaries. White canvas. Slide-section label top-left at 36 px Regular. Optional **emoji top-right** at 36 px (mirrors the slide-label position, e.g. 🎉 welcome, 👋 farewell) — celebration accent only, content-driven choice.

**Photo card unit** (vertical auto-layout):

- Square photo placeholder, full column width, `cornerRadius = 10 px`, IMAGE fill.
- 22 px gap below photo.
- **Person name** at caption tier (26 px Regular, `#050505`).
- **Team · role** at footer tier (20 px Regular, neutral/300 `#CCCCCC`).

**Grid variants:**

| Variant | Use | Layout |
|---|---|---|
| **4-up horizontal row** | Welcome / new joiners | 4 photo cards in a horizontal auto-layout, 1856 px wide, 32 px gap, each card 440 px wide |
| **1-up centred** | Farewell | Single photo card horizontally centred on canvas |
| **1-person right-panel** | Qontoversary 1-year | Gradient panel left + single 283×352 person block right (photo 283×283, `cornerRadius = 0`) |
| **2 × 2 grid right-panel** | Qontoversary 3-year+ | Gradient panel left + 2×2 person grid right; col gap 32 px (= `slide_M`), row gap 38 px |

**Gradient panel** (left column on Qontoversary slides):

- Width = 912 px (≈ half canvas), height = 1019 px (canvas − 2 × `slide_M`), positioned at (32, 32).
- **`cornerRadius = 0`** — structural element per §Object styles.2 ("sharp grounds, rounded accents").
- Filled with a named SOT gradient ("Golden Hour") via plugin-generated IMAGE fill per §Color.7.
- Slide-section label inside panel: `slide_M` from panel-left, ≈22 px from panel-top, list/subhead tier (72 px) Regular, white.
- Year / milestone text bottom-left of panel: display tier (200 px) Regular, white, with ≈68 px clearance to panel bottom.
- **No scrim** — gradient backgrounds are designed for contrast (per §13, §Color.7).

### 11. Device mockup slides

Slides showcasing product UI on a device (MacBook, iPhone, etc.). White canvas. Slide-section label top-left at 36 px Regular. The device mockup is the slide's primary content.

- **Device sits directly on the canvas** — no card wrapper, no gray backing, no border.
- Use Qonto's device library components — never re-create.
- Device height ≈ **75–80%** of canvas height (e.g., 810 px MacBook, 858 px iPhone on a 1080 canvas).
- **1-up:** centre horizontally on canvas.
- **n-up:** equal gaps between devices, row centred. Reference value: 108 px gap between iPhones in the canonical 3-up layout.

### 12. Comparison cards

Two-column comparison layout — each column presents a parallel option, treatment, or product comparison. White canvas.

**Bare-text variant** — for short side-by-side comparisons:

- Two columns, each 755 px wide, 189 px gap between them at canvas centre.
- Each column: title (Bold, 36 px) + body list (Regular, 36 px).
- No card surface, no media.

**Card-surface variant** — for visual comparisons with media:

- Two cards on white canvas, each 912 × 949 px, `cornerRadius = 10`, gray-50 fill (`#F5F5F5`).
- 32 px gap between cards (= `slide_M`).
- Card content:
  - **Centred media frame** at top: e.g., 468 × 535 product screenshot, `cornerRadius = 10`. Visually centred horizontally per §9 card-padding rule (centred media is exempt from `card_pad`).
  - **Semantic pill label** below media: 76 px tall, full-radius (`cornerRadius` ≥ height/2), 40 px Qonto Sans Light white text.

**Semantic pill colors** (scoped extension of §Color.5):

| Use | Fill | Text |
|---|---|---|
| **"Don't"** / negative comparison | `#E04545` (Error) | white `#FFFFFF` |
| **"Do"** / positive comparison | `#2BAD5F` (Success) | white `#FFFFFF` |

This is the only place in slide deck rules where non-grayscale, non-gradient color appears. Pill colors are confined to chip components in comparison/decision contexts — never on body text or headlines.

### 13. Color, surface, and scrim

- White canvas — default for all content slides.
- Black canvas — section dividers (canonical), statement slides (variant).
- Card surfaces follow §9 (three variants on white).

Typography stays `#050505` or `#FFFFFF` only.

**Scrim:** required only when copy lands on **photography**. Gradient backgrounds (per §Color.7 plugin-generated) do **not** require scrim — gradients are designed for contrast.

### 14. Vertical rhythm

Element-to-element spacing on slide deck uses multiples of `slide_M = 32 px`:

| Multiplier | Value | Use |
|---|---|---|
| 1× | 32 px | Within-block / element-to-element (default) |
| 3× | 96 px | Section break (e.g., slide-section label → first content row) |
| 4× | 128 px | Cluster gap — rare, for separating major content groups |

Card padding follows §Object styles.6 (`round(0.08 × min(cardW, cardH))`, computed at card scale), not slide_M.

### 15. No decorative bars

Slides do not use vertical accent bars, heading-indicator bars, or section accent rules. Sharp/structural elements only when they serve a defined content purpose.

### 16. Anti-patterns

- **Wordmark top-left on covers.** v3.6 placement; v3.7+ moved it to bottom-left.
- **Running header band** — section name top-left + date top-right + separator rule. v3.6 pattern; removed in v3.7+.
- **Date in top-right corner.** Now lives in a chip below the headline.
- **"© Qonto | Confidential" footer string.** v3.6 string; v3.7+ uses "Qonto \| confidential" (no "©", lowercase).
- **White section dividers.** Black is canonical.
- **Bold display headlines.** Regular for display tier (160–200 px). Bold is reserved for KPI hero numbers per §9.
- **86 px slide margin.** v3.6 used canvas-X; v3.7+ uses 32 px.
- **Body tier (36 px) for agenda / list items.** Reads anemic at 1920×1080 reading distance — use list/subhead tier (72 px) per §6.
- **"Qonto Sans Semi Bold" weight.** Doesn't exist in the Qonto Sans family (per §Typography). Silently falls back. Use **Bold** instead.
- **Rounded gradient panels.** Gradient panels on Qontoversary slides are structural — keep them sharp (`cornerRadius = 0`) per §Object styles.2. Card-tier elements (KPI cards, comparison cards) keep their 10–20 px radius.
- **Pill semantic colors on body text or headlines.** The Don't/Do red/green colors are scoped to chip components in comparison/decision contexts (§12) — never on regular text or headlines.
- **Ghost section numbers** at neutral/200 — still violates §Typography.8.
- **Decorative bars** anywhere — still off.
- **Marketing-deck layouts** (full-bleed photo covers, polished end cards) — out of scope for this section. Future surface.

### 17. For AI agents — slide-deck decision ladder

1. **Identify slide type.** Cover, section divider, agenda, content master, KPI grid, statement, **people / celebration**, **device mockup**, **comparison**.
2. **Pick the surface.** White (default), black (section divider canonical, statement variant).
3. **Apply the margin.** 32 px from every canvas edge.
4. **Apply the footer.**
   - Cover: wordmark BL + multiplier BR.
   - All others: "Qonto \| confidential" BL + multiplier BR.
   - Logo height = `slide_M = 32 px`; multiplier color inverts by canvas (§3).
5. **Compose body** using the type scale in §6:
   - **Cover:** display tier headline (160–200 px) + date pill at body tier (36 px) below.
   - **Section divider:** display tier number + right-aligned title at top, on black.
   - **Agenda:** "Agenda" label at list/subhead tier (72 px) + numbered items at list/subhead tier (72 px).
   - **Content master:** body (36 px) + slide-section labels at list/subhead (72 px) + headlines at tier 1–3.
   - **KPI grid:** hero numbers Bold at display tier per §9. Centred media inside a card sits centred — not edge-padded by `card_pad`.
   - **Statement:** display tier headline only, white or black canvas.
   - **People / celebration:** photo card unit per §10 — square photo (`cornerRadius = 10`) + name at caption tier (26 px) + role at footer tier (20 px). Optional emoji top-right (36 px). Gradient panel (when used) is sharp (`cornerRadius = 0`); year/milestone text bottom-left at display tier (200 px) white.
   - **Device mockup:** device on white canvas at ≈75–80% canvas height, no card wrapper. Centre 1-up; equal-gap n-up (108 px reference for iPhones).
   - **Comparison:** bare-text 2-column OR card-surface 2-column with semantic pill (`#E04545` Don't, `#2BAD5F` Do, white Light text at 40 px, full-radius pill at 76 px tall). Pill colors confined to chip components only — never on body text or headlines.
6. **Apply vertical rhythm** per §14 — multiples of `slide_M = 32 px` between elements.
7. **Verify:** no decorative bars; no wordmark on non-cover slides; no running header band; no white section dividers; no scrim on gradients (only on photography); no body-tier text in lists; card padding computed at card scale and only for text/icon-box content (centred media is exempt); no "Semi Bold" weight (use Bold); gradient panels are sharp; pill semantic colors only on chip components.

### 18. Component library — slide deck

All slide-deck components live in the **Qonto Brand Creative Direction** Figma file (`fileKey: 15MmXB5MyAhfNDRIVv6eF3`, page "Components" at node `231:6309`). Subscribe the published library and import components via `figma.importComponentByKeyAsync(key)` per §Logo.2.

| Component | Key | Type | Properties | Use |
|---|---|---|---|---|
| **`qonto-multiplier`** | `8758271834495741567abb58f77bae8bbb9778e7` | COMPONENT | — | Brand mark squircle. Natural size 67×67. **Rescale to 32×32 for slide-deck footer** via `instance.rescale(32/67)` to preserve squircle ratio (don't `resize()` — cornerRadius would stay at 16 and render as a circle on a 32 px square). |
| **`metric-1`** | `d88617cb9384c8dab56b670a19e9c4e772086530` | COMPONENT_SET | `Theme` (Light/Dark/Gradient), `Percentage` (TEXT), `Subhead` (TEXT) | Compact KPI card 596×356. Use in 3-card or 4-card grids per §9. |
| **`metric-2`** | `d06d38dee5789842d2e50006d9e499b30bbf044a` | COMPONENT_SET | `Theme` (Light/Dark/Gradient), `Header` (TEXT), `Percentage` (TEXT), `Subhead` (TEXT), `Value` (TEXT) | Larger KPI card 596×371 with extra Header + Value rows. |
| **`Gradient background`** | `a836da9324bc72fd5799a8cc1f22e64b242c8ab3` | COMPONENT_SET | `Gradient` (variant) | **Nested inside KPI cards** when `Theme=Gradient`. **Never use standalone** — surface always lives inside a metric card. |
| **`Photo card`** | `483514b61722c29f25f60dc151e41b8906460159` | COMPONENT | — (text editable inline) | People / celebration slides per §10. Replace photo placeholder fill via `figma_set_image_fill`; edit name + role inline. |
| **`Semantic pill`** | `360e2d296c18dd64ebd0918c82470bef9ec6f643` | COMPONENT_SET | `Variant` (Don't / Do), `Label` (TEXT) | Comparison cards per §12. Switch `Variant` for fill color (red `#E04545` / green `#2BAD5F`); edit `Label` for the pill text. |
| **`Date pill`** | `04dd7e6f209ba03180b1f03928f6b1cf39264292` | COMPONENT | `Date` (TEXT, default "Month YYYY") | Cover slides only per §1, §8. |
| **`Footer block`** | `3ddf5adba6f6134787088ba1f1bf5cac4b52e256` | COMPONENT | — | "Qonto \| confidential" + multiplier instance. Drop at `(32, 1016)` on non-cover slides per §3, §4. **For black canvas** (section dividers, statement variant): manually swap the multiplier instance fill to `#FFFFFF`. |

**Approved gradients** (`Gradient background` variants — used inside KPI cards via `Theme=Gradient`):

| Name | Use |
|---|---|
| Morning Veil | Default — calm, neutral surface for KPI cards |
| Daybreak 1 | Warmer variant |
| Daybreak 2 | Cooler variant |
| Lavender Rise | Cool/purple — celebration accent |
| Golden Hour | Warm/orange — celebration accent (canonical for Qontoversary slides) |

These are the canonical SOT gradients. New gradients require a SOT update before use (per §Color.7).

**Anti-pattern reminder.** Don't recreate any of these as plain frames or shapes — always import the component (per §Logo.2). The whole point of the library is consistent updates: when the brand owner ships a new version of `qonto-multiplier` or `metric-1`, every subscribing deck inherits the change automatically.

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
| Deck slide | `1920 × 1080` (16:9) | ✓ release-confidence test (v3.4) |
| LinkedIn organic post (square) | `1200 × 1200` (1:1) | ✓ release-confidence test (v3.4) |
| A4 print one-pager (portrait) | `1240 × 1754` (≈ A4 4:3) | ✓ release-confidence test (v3.4) |
| Portrait Instagram post | `1080 × 1350` (4:5) | queued |
| YouTube thumbnail | `1280 × 720` (16:9) | queued |
| OOH / billboard | varies | queued |
|  ~~Email banner~~ | ~~`1200 × 600`~~ | **rejected — card-as-composition anti-pattern (see §Object styles.7)** |

### 1. Square Instagram post — two-card row + full horizontal lockup

A `1080 × 1080` Instagram-square promo with **two** feature cards (per §Composition.3's mobile content-cell rule). **One photo card + one icon card** so the composition demonstrates §Photography next to §Iconography. **Brief**: announce the breadth of Qonto's offering with breathing room and full-lockup brand presence. **Build pattern**: auto-layout for the structural bands (text-block, lockup, Card 2 internal stack); absolute positioning at the canvas level and inside Card 1 (where text overlays a full-bleed photo).

**Rules exercised:**

- §Composition — **unified X = 86** (8 % of `min(W, H)`), small headline tier (1X = 86). **Two cards per row** per §Composition.3 mobile rule. Grid gutter `0.5X = 43`. **Cards 432 × 392** (cardH derived: cards fill the vertical real-estate between the text-block and lockup with a 1X gap on each side, all expressed as `canvasH − 5X − textBlock.h`). **1X gap above lockup** (cards-led — the wider X already supplies enough breathing room).
- §Typography — Bold headline at `X × 1 = 86` (small tier, LH 98 % / +0.5 %), Regular subtitle at `X × 0.5 = 43` (LH 110 % / +0.5 %), **card titles at `max(22, X × 0.55) = 47`**. Bodies at `max(16, X × 0.45) = 39` (LH 130 %). Sentence case throughout.
- §Color — **white canvas + gray-50 (`#F5F5F5`) cards** per the v3.4 canvas/card pairing rule (§Color.3). Card 1 is tertiary tier (full-bleed photo + scrim — the photo *is* the card surface, no fill colour applies). Card 2 is secondary tier (gray-50 fill on white canvas — the tonal contrast does the work that a shadow would otherwise provide). The icon-box inside Card 2 reverts to **white** (matches the canvas, "punches through" visually). Black ink throughout.
- §Object styles — two rounded content tiles at the **default X-bracketed radius (`X / 2 = 43`)** per §Object styles.3, sharp structural canvas. Card 2's icon-box at the **small bracket (`X / 4 = 22`)**. **Card padding (v3.5): uniform `card_pad = round(0.08 × min(cardW, cardH)) = 31`** on all four sides + as the gap between icon-box and text frame. Card 1's overlay text and Card 2's icon-box + text frame both inset 31 px from every edge they touch — same number, every side, every card on the canvas. Card 2 is the **secondary tier**; Card 1 is the **tertiary tier** (full-bleed photo + scrim) — see §Object styles.6.
- §Iconography — Material Symbols Outlined glyph at the canonical 72 px size in a 144 px app-square box (0.5× ratio), white fill (icon-box), black ink (glyph).
- §Photography — Sarah Freelancer Studio Portrait full-bleed inside Card 1 (scaleMode FILL), with title + body **white text overlaid** on the photo's lower portion. This is archetype-D-style applied to a card — photo carries the warmth, text overlays for label.
- §Logo — **full lockup at bottom** per §Logo.5 priority: symbol-multiplier bottom-left + **horizontal-left** wordmark + entry-points cluster bottom-right, auto gap between (built as a SPACE_BETWEEN auto-layout HORIZONTAL frame). Lockup keys off the unified `X = 86`: cluster `h = 1.125 × X = 97`, symbol `X × X = 86 × 86`, entry-points text at `round(86 × 0.245) = 21 px`.
- §Asset library — photo, cluster lockup, symbol-multiplier all fetched from netlify. Logos as vector via `figma.createNodeFromSvg`; photo via `figma_set_image_fill`.

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

// --- 2. Constants ---
const canvasW = 1080, canvasH = 1080;
const MEDIUM = 'digital';                                                // §Logo.4
const X        = Math.round(Math.min(canvasW, canvasH) * (MEDIUM === 'digital' ? 0.08 : 0.05));   // 86
const halfX    = Math.round(X / 2);                                      // 43 — gutter, intra-cluster gap
const quarterX = Math.round(X / 4);                                      // 22 — card padding, icon inset
const cardR    = halfX;                                                  // 43 — X/2 default content-tile radius
const iconBoxSize = 144, iconSize = 72;
const iconBoxR = cardR - quarterX;                                       // 21 — concentric per §Object styles.4
const cardTitleSize = 48;                                                // visual override; below X × 0.65 = 56
const bodySize = Math.max(16, Math.round(X * 0.45));                     // 39
const headlineSize = X;                                                  // 86 — small tier 1X
const subtitleSize = halfX;                                              // 43 — single-tier 0.5X

const black   = { r: 0.02, g: 0.02, b: 0.02 };
const white   = { r: 1, g: 1, b: 1 };
const gray50  = { r: 0.96, g: 0.96, b: 0.96 };  // canvas background

// --- 3. Canvas — gray-50 background, no canvas-level auto-layout (manages absolute positioning) ---
const canvas = figma.createFrame();
canvas.name = 'IG Square canvas (1080×1080)';
canvas.resize(canvasW, canvasH);
canvas.cornerRadius = 0; canvas.cornerSmoothing = 0;
canvas.fills = [{ type: 'SOLID', color: gray50 }];
canvas.clipsContent = true;
section.appendChild(canvas);

// --- 4. Text block (auto-layout VERTICAL, headline + subtitle) ---
const textBlock = figma.createFrame();
textBlock.name = 'Text block';
textBlock.fills = [];
textBlock.layoutMode = 'VERTICAL';
textBlock.primaryAxisSizingMode = 'AUTO';        // hug vertical
textBlock.counterAxisSizingMode = 'FIXED';
textBlock.itemSpacing = halfX;                   // 0.5X subtitle gap (§Composition.1)
canvas.appendChild(textBlock);
textBlock.resize(canvasW - 2 * X, textBlock.height);
textBlock.x = X; textBlock.y = X;

const headline = figma.createText();
headline.fontName = { family: 'Qonto Sans', style: 'Bold' };
headline.characters = 'Everything your business needs';
headline.fontSize = headlineSize;
headline.lineHeight = { unit: 'PERCENT', value: 98 };
headline.letterSpacing = { unit: 'PERCENT', value: 0.5 };
headline.fills = [{ type: 'SOLID', color: black }];
headline.textAutoResize = 'HEIGHT';
textBlock.appendChild(headline);
headline.layoutSizingHorizontal = 'FILL';

const subtitle = figma.createText();
subtitle.fontName = { family: 'Qonto Sans', style: 'Regular' };
subtitle.characters = 'Banking, invoicing, expenses.';
subtitle.fontSize = subtitleSize;
subtitle.lineHeight = { unit: 'PERCENT', value: 110 };
subtitle.letterSpacing = { unit: 'PERCENT', value: 0.5 };
subtitle.fills = [{ type: 'SOLID', color: black }];
subtitle.textAutoResize = 'HEIGHT';
textBlock.appendChild(subtitle);
subtitle.layoutSizingHorizontal = 'FILL';

// --- 5. Card geometry derived from layout constraints ---
//   cardH = canvasH − 5X − textBlock.h
//   (top X + textBlock + 1X gap + cardH + 1X gap + lockup X + bottom X = canvasH; solve for cardH)
//   Card width = (canvasW − 2X margins − 0.5X gutter) / 2 ≈ 432
const cardsRowY = textBlock.y + textBlock.height + X;                          // 1X gap below text-block
const lockupY   = canvasH - X - X;                                              // X canvas margin + X lockup height
const cardH     = lockupY - X - cardsRowY;                                      // X gap above lockup
const cardW     = Math.floor((canvasW - 2 * X - halfX) / 2);                    // 432

// --- 6. Card 1 (no card-internal auto-layout — full-bleed photo with absolute white text overlay) ---
const card1 = figma.createFrame();
card1.name = 'Card · Banking (photo)';
card1.resize(cardW, cardH);
card1.cornerRadius = cardR; card1.cornerSmoothing = 0;
card1.fills = [{ type: 'SOLID', color: white }];
card1.clipsContent = true;
canvas.appendChild(card1);
card1.x = X; card1.y = cardsRowY;

const photo = figma.createRectangle();
photo.name = 'Card photo (Banking)';
photo.fills = [{ type: 'SOLID', color: gray50 }];   // placeholder — replace via figma_set_image_fill
card1.appendChild(photo);
photo.x = 0; photo.y = 0;
photo.resize(cardW, cardH);                          // full-bleed
const photoPlaceholderId = photo.id;

// White overlay text — auto-layout VERTICAL, absolutely positioned inside non-autolayout card1.
const overlay = figma.createFrame();
overlay.name = 'Card 1 overlay text';
overlay.fills = [];
overlay.layoutMode = 'VERTICAL';
overlay.primaryAxisSizingMode = 'AUTO';
overlay.counterAxisSizingMode = 'AUTO';
overlay.itemSpacing = 8;                             // tight title→body
card1.appendChild(overlay);
overlay.x = halfX; overlay.y = 188;                  // bottom-third overlay region

const card1Title = figma.createText();
card1Title.fontName = { family: 'Qonto Sans', style: 'Bold' };
card1Title.characters = 'Banking';
card1Title.fontSize = cardTitleSize;
card1Title.lineHeight = { unit: 'PERCENT', value: 110 };
card1Title.fills = [{ type: 'SOLID', color: white }];
card1Title.textAutoResize = 'WIDTH_AND_HEIGHT';
overlay.appendChild(card1Title);

const card1Body = figma.createText();
card1Body.fontName = { family: 'Qonto Sans', style: 'Regular' };
card1Body.characters = 'Move money fast.';
card1Body.fontSize = bodySize;
card1Body.lineHeight = { unit: 'PERCENT', value: 130 };
card1Body.fills = [{ type: 'SOLID', color: white }];
card1Body.textAutoResize = 'WIDTH_AND_HEIGHT';
overlay.appendChild(card1Body);

// --- 7. Card 2 (auto-layout VERTICAL — icon-box + text-stack, X/4 padding-top, X/4 itemSpacing) ---
const card2 = figma.createFrame();
card2.name = 'Card · Invoicing (icon)';
card2.cornerRadius = cardR; card2.cornerSmoothing = 0;
card2.fills = [{ type: 'SOLID', color: white }];
card2.clipsContent = true;
card2.layoutMode = 'VERTICAL';
card2.primaryAxisSizingMode = 'FIXED';
card2.counterAxisSizingMode = 'FIXED';
card2.primaryAxisAlignItems = 'MIN';
card2.paddingLeft = quarterX;                        // X/4 — matches icon-box concentric inset
card2.paddingRight = halfX;                          // X/2 — text right-padding (looser than left)
card2.paddingTop = quarterX;                         // X/4
card2.paddingBottom = quarterX;
card2.itemSpacing = quarterX;                        // X/4 between icon-box and text-stack
canvas.appendChild(card2);
card2.resize(cardW, cardH);
card2.x = X + cardW + halfX; card2.y = cardsRowY;    // 0.5X gutter

const iconBox = figma.createFrame();
iconBox.name = 'Icon box';
iconBox.fills = [{ type: 'SOLID', color: gray50 }];
iconBox.cornerRadius = iconBoxR; iconBox.cornerSmoothing = 0;
iconBox.layoutMode = 'VERTICAL';
iconBox.primaryAxisSizingMode = 'FIXED';
iconBox.counterAxisSizingMode = 'FIXED';
iconBox.primaryAxisAlignItems = 'CENTER';
iconBox.counterAxisAlignItems = 'CENTER';
card2.appendChild(iconBox);
iconBox.resize(iconBoxSize, iconBoxSize);
const ic = makeIcon(ICONS.attachment, iconSize, black);   // helper from §1.4 below
ic.layoutPositioning = 'AUTO';
iconBox.appendChild(ic);

const card2TextStack = figma.createFrame();
card2TextStack.name = 'Card 2 text';
card2TextStack.fills = [];
card2TextStack.layoutMode = 'VERTICAL';
card2TextStack.primaryAxisSizingMode = 'AUTO';
card2TextStack.itemSpacing = 8;
card2.appendChild(card2TextStack);
card2TextStack.layoutSizingHorizontal = 'FILL';

const card2Title = figma.createText();
card2Title.fontName = { family: 'Qonto Sans', style: 'Bold' };
card2Title.characters = 'Invoicing';
card2Title.fontSize = cardTitleSize;
card2Title.lineHeight = { unit: 'PERCENT', value: 110 };
card2Title.fills = [{ type: 'SOLID', color: black }];
card2Title.textAutoResize = 'HEIGHT';
card2TextStack.appendChild(card2Title);
card2Title.layoutSizingHorizontal = 'FILL';

const card2Body = figma.createText();
card2Body.fontName = { family: 'Qonto Sans', style: 'Regular' };
card2Body.characters = 'All in one place.';
card2Body.fontSize = bodySize;
card2Body.lineHeight = { unit: 'PERCENT', value: 130 };
card2Body.fills = [{ type: 'SOLID', color: black }];
card2Body.textAutoResize = 'HEIGHT';
card2TextStack.appendChild(card2Body);
card2Body.layoutSizingHorizontal = 'FILL';

// --- 4 (helpers continued at top of script) ---
function makeIcon(svg, size, color) {
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
}

// --- 8. Full lockup at bottom — auto-layout HORIZONTAL with SPACE_BETWEEN ---
//   Per §Logo.5 priority placement. SPACE_BETWEEN distributes symbol left, cluster right,
//   auto-gap fills the middle. The lockup band itself is X tall (one unit), placed at
//   bottom-X of the canvas.
const lockupBand = figma.createFrame();
lockupBand.name = 'Lockup band';
lockupBand.fills = [];
lockupBand.layoutMode = 'HORIZONTAL';
lockupBand.primaryAxisSizingMode = 'FIXED';
lockupBand.counterAxisSizingMode = 'AUTO';
lockupBand.primaryAxisAlignItems = 'SPACE_BETWEEN';
lockupBand.counterAxisAlignItems = 'CENTER';
canvas.appendChild(lockupBand);
lockupBand.resize(canvasW - 2 * X, X);
lockupBand.x = X; lockupBand.y = canvasH - X - X;            // 908

// Symbol — placeholder; replace with vector via createNodeFromSvg in a follow-up call.
const symbolPh = figma.createFrame();
symbolPh.name = 'Symbol placeholder (replace with vector)';
symbolPh.fills = [{ type: 'SOLID', color: black }];
symbolPh.cornerRadius = Math.round(X * 0.22);                // squircle radius
symbolPh.cornerSmoothing = 0.8;                              // logo-only exception per §Object styles.5
lockupBand.appendChild(symbolPh);
symbolPh.resize(X, X);

// Cluster — auto-layout HORIZONTAL with X/2 itemSpacing, hugs content.
//   Order: entry-points text → divider → wordmark (= horizontal-LEFT cluster orientation per §Logo.5b).
const cluster = figma.createFrame();
cluster.name = 'Cluster';
cluster.fills = [];
cluster.layoutMode = 'HORIZONTAL';
cluster.primaryAxisSizingMode = 'AUTO';
cluster.counterAxisSizingMode = 'AUTO';
cluster.counterAxisAlignItems = 'CENTER';
cluster.itemSpacing = halfX;                                 // X/2 between cluster pieces
lockupBand.appendChild(cluster);

const entryPoints = figma.createText();
entryPoints.fontName = { family: 'Qonto Sans', style: 'Regular' };
entryPoints.characters = 'Business account\nFinance management\nCompany creation';
entryPoints.fontSize = Math.round(X * 0.245);                // 21 (above 20 digital floor)
entryPoints.lineHeight = { unit: 'PIXELS', value: Math.round(X * 0.36) };
entryPoints.fills = [{ type: 'SOLID', color: black }];
entryPoints.textAutoResize = 'WIDTH_AND_HEIGHT';
entryPoints.textAlignHorizontal = 'LEFT';
cluster.appendChild(entryPoints);

const divider = figma.createRectangle();
divider.fills = [{ type: 'SOLID', color: black }];
cluster.appendChild(divider);
divider.resize(1, X);
divider.layoutSizingVertical = 'FIXED';

const wordmarkPh = figma.createFrame();
wordmarkPh.name = 'Wordmark placeholder (replace with vector)';
wordmarkPh.fills = [{ type: 'SOLID', color: black }];
cluster.appendChild(wordmarkPh);
wordmarkPh.resize(Math.round(X * 492 / 138), X);             // 308 wide

// Return: { photoId: photoPlaceholderId, symbolPhId, wordmarkPhId } for follow-up vector swap.
```

**Logos as vector via `createNodeFromSvg` — swap-into-auto-layout pattern.** Per §Logo.9b, brand assets stay vector. The build script creates the lockup with auto-layout placeholders; a follow-up `figma_execute` call **swaps the placeholders for vector imports**. This way the SPACE_BETWEEN distribution stays intact — when you swap a child of an auto-layout frame, the parent re-distributes around the new node automatically.

```javascript
// figma_execute, call N+1: swap symbol placeholder + wordmark placeholder for vectors.
const symbolPh   = figma.getNodeById('<symbolPhId>');
const wordmarkPh = figma.getNodeById('<wordmarkPhId>');
const lockupBand = symbolPh.parent;
const cluster    = wordmarkPh.parent;

// Symbol — black squircle + white flower + always-on white stroke (per §Logo.3)
const SYMBOL_SVG = `<svg width="138" height="138" …>…</svg>`;
const symbol = figma.createNodeFromSvg(SYMBOL_SVG);
symbol.resize(86, 86);                              // X × X
symbol.layoutPositioning = 'AUTO';                  // re-engage auto-layout
lockupBand.insertChild(0, symbol);                  // first child of SPACE_BETWEEN row
symbolPh.remove();
// Always-on white stroke on the squircle path (§Logo.3)
const dark = (n) => Array.isArray(n.fills) && n.fills.some(f => f.type === 'SOLID' && f.color.r < 0.1);
const all = symbol.findAll(n => n.type === 'VECTOR' && dark(n));
all.sort((a, b) => (b.width * b.height) - (a.width * a.height));
const squirclePath = all[0];
squirclePath.strokes = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
squirclePath.strokeWeight = 1;
squirclePath.strokeAlign = 'INSIDE';

// Wordmark — vector, swap into cluster
const WORDMARK_SVG = `<svg width="492" height="138" …>…</svg>`;
const wordmark = figma.createNodeFromSvg(WORDMARK_SVG);
wordmark.resize(Math.round(86 * 492 / 138), 86);    // 308 × 86
wordmark.layoutPositioning = 'AUTO';
cluster.appendChild(wordmark);                       // appended after divider
wordmarkPh.remove();

// Photo — image fill replaces the placeholder rect's solid fill.
const photo = figma.getNodeById('<photoPlaceholderId>');
photo.fills = [{ type: 'IMAGE', imageHash: '<photo hash>', scaleMode: 'FILL' }];
```

**Generating the inlined SVG strings.** Read the SVG file, JSON-encode it (handles all the escaping cleanly), and paste the result as a string literal:

```python
import json
svg = open('/tmp/q-lockup-h-EN.svg').read()
print(f'const CLUSTER_SVG = {json.dumps(svg)};')
```

The earlier "rasterise with sips, apply via image-fill" workflow is **deprecated** for logos — see §Logo.9b. It remains valid only as an escape hatch when SVG inlining genuinely fails (e.g. agent runtime caps script length below the SVG size).

**Why two cards, not three.** Three feature cards on a `1080 × 1080` canvas crushes each card to ≈ 288 px. Card body falls below comfortable phone-reading scale and photos read as thumbnails. Per §Composition.3's mobile content-cell rule, mobile / social canvases (`min(W, H) ≤ 1080`) cap at 2 cells per row. Two cards at ≈ 459 px give photo and copy room to breathe — empirically validated against Joan's review (2026-04-28).

*Empirically validated at `1080 × 1080` in file `mNVOGF8yvrXXMXTVt6cKkr`, page "Square Instagram Post Test", node `107:1197` (auto-layout build). Screenshot verified **unified `X = 86`** (digital 8 %): canvas background `gray-50` (`#F5F5F5`), canvas margin = 86, grid gutter = 0.5X = 43, two cards 432 × 392 at `cardR = X / 2 = 43`. **Card 1 full-bleed photo** with white `Banking` (48 px) + `Move money fast.` (39 px) overlay text. **Card 2 icon-box** at `(22, 22)` with `r = X / 4 ≈ 21`, paperclip glyph centred, `Invoicing` + `All in one place.` text-stack with X/4 itemSpacing. Headline `Everything your business needs` at small tier (1 × X = 86 px), subtitle at 0.5 × X = 43 px. Full lockup at the same X (cluster 575 × 97, symbol 86 × 86, EP 21 px). **Auto-layout structure**: text-block (vertical, FILL h, hug v), Card 2 (vertical, X/4 padding, X/4 itemSpacing), lockup-band (horizontal, SPACE_BETWEEN). Card 1 and the canvas itself stay non-autolayout (overlay-on-photo + canvas-level absolute placement). Reference comparison: Joan's manual edit (`107:1155`) and the original v3.0 (`90:788`) sit alongside for visual baseline.*

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
- §Composition — archetype C split: text occupies the left half, photo the right half. Each half observes its own X margins (so text has X-margin from the canvas left and from the half boundary). Headline at medium tier per §Composition.1. **Subtitle stretches the full content-area width** (`textW = halfW − 2X = 500`) — earlier iterations capped the subtitle at 70 % of textW for "B2B copy density," but the unbroken full-width subtitle reads more confidently and uses the available real-estate. Unified `X = 50` (digital 8% of min=627).
- §Typography — Bold headline at `1.25 × X = 63 px` (LH 98 / +0.5%), Regular subtitle at `0.5 × X = 25 px` (LH 110 / +0.5%) at full content-area width. At this small canvas (X = 50) most of §Typography.4's pixel floors win over the X-multipliers — body sizes hit `16 px` floor and caption hits `12 px` before the ratios kick in.
- §Color — white left half, photographic right half — no product palette.
- §Photography — right-half photo (`Lisa Cs Office Action.png`) at `scaleMode: 'FILL'` cropped to the half. Picked for B2B warmth — a real moment of customer-facing work.
- §Logo — **bisected-canvas placement** per §Logo.5 (SOT [node 564:7739](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=564-7739)): the lockup spans the full content (left) half. **Wordmark at canvas-left margin** (`50` × `171`) → divider (`1 × 50`) → **entry-points** text → auto gap → **symbol at the half-canvas centre** (`50 × 50`, x = `halfW − X − X = 500`, with always-on 1 px white stroke per §Logo.3). The whole lockup reads wordmark → entry-points → symbol → photo, with the symbol sitting at the canvas horizontal centre as the threshold between content and image. **Entry-points exception**: at this canvas's `X = 50`, the EP size of `12 px` is below the standard 20 px digital floor; the SOT bisected-canvas pattern overrides the floor here because the wordmark/EP/symbol reading-path is the brand-comprehension benefit, and the EP at 12 px remains readable on retina screens at intimate viewing distance. Use the `horizontal-right-EN` cluster orientation per §Logo.5b.
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
  X, headline.y + headline.height + Math.round(X * 0.5), textW, 0.5
);                                                                // subtitle stretches full content-area width
canvas.appendChild(subtitle);

// Lockup — BISECTED-CANVAS PLACEMENT per §Logo.5 (SOT 564:7739).
// Spans the full left (content) half: wordmark at canvas-left → divider → entry-points →
// auto gap → symbol at half-canvas centre. Reading-path: wordmark → EP → symbol → photo.
//
// EP exception: at X = 50, EP = round(50 × 0.245) = 12 px — below the 20 px digital floor.
// The SOT bisected-canvas pattern explicitly shows entry-points at this scale; the reading-
// path benefit overrides the floor here. EP stays readable on retina at intimate distance.
const halfL    = Math.round(X / 2);                    // 25 — intra-cluster gap
const baseY    = canvasH - X - X;                       // 527 — lockup baseline
const ink      = { r: 0.02, g: 0.02, b: 0.02 };

// 1. Wordmark — anchored at canvas-left X margin
const WORDMARK_SVG = `<svg width="82" height="24" …>…</svg>`;
const wordmark = figma.createNodeFromSvg(WORDMARK_SVG);
const wordmarkW = Math.round(X * 82 / 24);             // 171
wordmark.resize(wordmarkW, X);                          // 171 × 50
wordmark.x = X;                                         // 50 — canvas-left margin
wordmark.y = baseY;
canvas.appendChild(wordmark);

// 2. Divider — to the right of wordmark with X/2 gap
const divider = figma.createRectangle();
divider.resize(1, X);                                   // 1 × 50
divider.fills = [{ type: 'SOLID', color: ink }];
divider.x = wordmark.x + wordmarkW + halfL;            // 50 + 171 + 25 = 246
divider.y = baseY;
canvas.appendChild(divider);

// 3. Entry-points — Qonto Sans Regular text node, X/2 right of divider
await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Regular' });
const epText = figma.createText();
epText.fontName = { family: 'Qonto Sans', style: 'Regular' };
epText.characters = 'Business account\nFinance management\nCompany creation';
epText.fontSize = Math.round(X * 0.245);               // 12 — sub-floor exception per bisected-canvas pattern
epText.lineHeight = { unit: 'PIXELS', value: Math.round(X * 0.36) };   // 18
epText.fills = [{ type: 'SOLID', color: ink }];
epText.textAutoResize = 'WIDTH_AND_HEIGHT';
epText.textAlignHorizontal = 'LEFT';
canvas.appendChild(epText);
epText.x = divider.x + 1 + halfL;                      // 246 + 1 + 25 = 272
epText.y = baseY + Math.round((X - epText.height) / 2);   // vertically centre on baseline

// 4. Symbol — black canonical + always-on white stroke (§Logo.3), at the half-canvas centre
const SYMBOL_SVG = `<svg width="138" height="138" …>…</svg>`;     // black squircle + white inner Q
const symbol = figma.createNodeFromSvg(SYMBOL_SVG);
symbol.resize(X, X);                                    // 50 × 50 — symbol = X × X
symbol.x = halfW - X - X;                               // 600 - 50 - 50 = 500 — right edge of left half
symbol.y = baseY;
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

*Empirically validated at `1200 × 627` in file `mNVOGF8yvrXXMXTVt6cKkr`, page "LinkedIn Paid Ad Test". Screenshot verified **unified `X = 50`** (digital 8 % of 627): medium-tier headline at 1.25 × X = 63 px wraps to 3 lines, subtitle at 0.5 × X = 25 px capped at 70 % width, Lisa office photo on the right half at FILL, **bisected-canvas lockup placement** per §Logo.5 / SOT 564:7739: wordmark (171 × 50) at canvas-left X margin → divider (1 × 50) at X/2 gap → entry-points text at 12 px (sub-floor exception per bisected-canvas pattern) → auto gap (108 px) → symbol-multiplier-black with always-on white stroke (50 × 50) at the half-canvas centre (x = 500). Reading-path: wordmark → entry-points → symbol → photo, with the symbol acting as the brand "seal" at the threshold between content and image.*

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

## Changelog

| Version | Date | Highlights |
|---|---|---|
| **3.10** | 2026-05-04 | **Slide-deck component library catalogued (§18)** — published Figma components for the slide-deck system now have a single home in SKILL.md. Built / extracted during the templatization sprint kickoff (Phase 2 of work in `Qonto Brand Creative Direction` file `15MmXB5MyAhfNDRIVv6eF3`). **New components built this version:** Photo card (`483514b6…`), Semantic pill set with Don't/Do variants + Label TEXT prop (`360e2d29…`), Date pill with Date TEXT prop (`04dd7e6f…`), Footer block with rescaled multiplier instance (`3ddf5adb…`). **Catalogued from existing components:** `qonto-multiplier` squircle, `metric-1` (compact 596×356) and `metric-2` (taller 596×371) KPI sets each with Light/Dark/Gradient themes, `Gradient background` (nested inside KPI cards). **Approved gradient names** documented for the first time: Morning Veil, Daybreak 1, Daybreak 2, Lavender Rise, Golden Hour. **Build-recipe gotcha** captured: rescaling multiplier from 67×67 → 32×32 must use `instance.rescale(32/67)`, NOT `resize(32, 32)` (the latter keeps cornerRadius at 16, rendering as a perfect circle on a 32 px square). **Anti-pattern reinforced** — Gradient background is never used standalone, only nested inside KPI cards. **Phase 1 cleanup** also landed in the 2026 template: 21 nodes converted from "Qonto Sans Semi Bold" to Bold (slides 16, 17, 25, 30, 31), and slide 11 gradient panel `cornerRadius` 10 → 0 to match §Object styles.2 sharp-grounds rule. **Out of scope (deferred to Phase 3+ of the templatization sprint):** Slide Templates per archetype (Figma Slides feature), locked chrome + placeholders, library publish, "How to use" doc + ONBOARDING.md update. |
| **3.9** | 2026-05-04 | **Slide-deck slide types extended** — three new clusters codified from patterns the brand-reviewer extracted from the 2026 template that v3.7 + v3.8 deferred. **§10 People & celebration slides (new)** — photo card unit (square photo `cornerRadius = 10` + 22 px gap + name at caption tier + role at footer tier), four grid variants (4-up / 1-up centred / 1-person right-panel / 2×2 right-panel), gradient panel as a structural left column (`cornerRadius = 0` per §Object styles.2, "Golden Hour" named SOT gradient, white display-tier year text bottom-left, no scrim). Optional emoji top-right at 36 px on celebration slides. **§11 Device mockup slides (new)** — device on white canvas at ≈75–80% canvas height, no card wrapper, centred or equal-gapped (108 px reference for 3-up iPhones). **§12 Comparison cards (new)** — two-variant pattern (bare-text 2-column / card-surface 2-column), with **semantic pill labels** in card-surface variant: "Don't" `#E04545` / "Do" `#2BAD5F` at 40 px Light white in a full-radius pill. Scoped extension of the §Color.5 dataviz exception — pill colors confined to chip components only. **§6 Type scale** — caption tier (26 px Regular) added between footer (20) and body (36) for tight-column person names on photo cards. **§9 card-padding clarified** — `round(0.08 × min(cardW, cardH))` applies to text + icon-box content; **centred media frames** (product screenshots, hero images) are a separate placement pattern (visually centred, not edge-padded). **§16 Anti-patterns** — three new entries: "Qonto Sans Semi Bold" weight (doesn't exist in family — caught a silent fallback in slide 18 of the 2026 template; use Bold), rounded gradient panels (gradient panels are structural — sharp), pill semantic colors used outside chip contexts. Sections renumbered: §10 Color → §13, §11 Rhythm → §14, §12 Bars → §15, §13 Anti-patterns → §16, §14 AI agents → §17. Decision ladder (§17) refreshed with the three new slide types. |
| **3.8** | 2026-05-04 | **Slide-deck type scale + logo sizing + vertical rhythm** — based on a clean-room test (file `MIk7vRlm9IegAPCYpiiLGT`) where a 7-slide deck was built from v3.7 alone, surfacing 24 detail-level gaps. **Additive (no breaking changes):** **(1) §6 Type scale** — replaced the single-tier body rule with a six-tier table (footer 20, body 36, list/subhead 72, tier 1–3 86/108/129, display 160–200). All Regular except KPI hero numbers (Bold at display per §9). The new **list/subhead tier (72 px)** fills the previous gap between body (36) and headlines (86+) — agenda items, list rows, and slide-section labels now have a defined tier. **(2) §3 logo sizing** — slide-deck wordmark and multiplier sized at `logo_h = slide_M = 32 px` (squircle with 22% corner radius). Slide deck overrides the universal X-based logo sizing alongside its margin override. **Multiplier color inverts by canvas** (white → `#050505`, black → `#FFFFFF`) — affects section dividers and statement slides. **(3) §11 Vertical rhythm (new section)** — element-to-element spacing as multiples of `slide_M`: 1× (32) for within-block / default, 3× (96) for section breaks, 4× (128) for cluster gaps. Card padding still uses §Object styles.6 formula at card scale. **(4) Anti-pattern added** — body tier (36 px) for agenda / list items reads anemic at 1920×1080 reading distance; use list/subhead tier (72 px). **§14 decision ladder** updated to reference the new type scale + rhythm + logo sizing. **Process:** ONBOARDING.md gains a "Before you build a new slide deck" checklist (subscribe Logos library — fresh Slides files don't auto-subscribe). **Out of scope (deferred to v3.9 + templatization sprint):** split-panel ratios + gutters, KPI card aspect presets, gradient name catalogue, statement vertical alignment, agenda active/inactive number colors, image-area corner-radius rules. |
| **3.7** | 2026-05-01 | **§ Slide deck rewritten** based on the 2026 template (file `N59gmGWEzDfEab5byfnCoY`). Joan's manual revamp surfaced systematic divergence from v3.6's slide-deck rules. **Breaking changes vs. v3.6:** (1) **cover wordmark moves bottom-left** (was top-left); (2) **running header band removed entirely** — no section name top-left, no date top-right, no separator rule; (3) **section dividers are black canvas** with number-left + title-right at the top edge (was white canvas with headline + descriptor); (4) **display headlines use Regular weight** at 160–200 px (was Bold capped at tier 3 = 129 px); (5) **slide margin = 32 px** (`slide_M = 0.03 × min(W, H)`) instead of canvas-X (86 px) — slide deck is the only medium that overrides the universal X anchor. **Additive:** (6) **pill / chip primitive** formalised as labeling component with `#F5F5F5` fill and full-radius rounding, used for date labels and category labels; (7) **scrim rule clarified** — required for copy over photography only, not gradients (§10); (8) **card surfaces** — three variants permitted side-by-side on white canvas (gray-50 / black / gradient, §9); (9) **template-cover** (file-identification meta-slide) explicitly excluded from slide-deck rules. **Scope:** internal working decks only. Marketing slide-deck rules are a future surface. **Templatization sprint** (queued) will formalise the full slide-deck type scale and corner-radius system. v3.6's § Slide deck only existed for ~1 day; no production work depends on it, so the rewrite is non-breaking in practice. |
| **3.6** | 2026-04-30 | **§ Slide deck** added — new top-level section codifying slide-deck conventions calibrated against the 2025 Qonto Slide template (45-slide test deck `N59gmGWEzDfEab5byfnCoY`). Decisions: **(1) logo cover-only** — no wordmark on section dividers, content masters, or end slides; **(2) running header** = section name top-left + date top-right at 21 px / neutral/500, with thin neutral/200 separator rule below; **(3) footer** = "© Qonto \| Confidential" bottom-left, single line; **(4) no decorative bars** anywhere — vertical accents, heading indicators, and section bars all retired; **(5) section dividers** = headline + descriptor only, no number and no ghost text — §Typography.8 (black or white only) enforced with no exemption; **(6) KPI hero number tier** — when a metric IS the hero content of a card, it sizes per headline tiers up to 1.5X, bypassing the 0.55X card-title cap; **(7) card padding** clarification — `round(0.08 × min(cardW, cardH))` is computed at *card scale*, never substituted with canvas-X (caught a systematic build-recipe error in the test deck where canvas-X/2 = 43 px was used as a shortcut on cards that should have used 32 px). 235-series template is canonical; v1 deprecated. |
| **3.5** | 2026-04-28 | **Uniform card padding rule** in §Object styles.6 — `card_pad = round(0.08 × min(cardW, cardH))` on every card edge AND between major elements (icon-box ↔ text frame). Replaces the v3.3/v3.4 dual rule (text at `X/2`, nested tile at `X/4`) which produced visibly inconsistent insets across the v3.4 release-confidence cards (top icon-box at one number, side text at another, bottom margin accidental). The new rule uses the same `0.08` anchor as the canvas-X formula but applied at card scale: cards are self-consistent — every inside-the-card distance is the same number. Trade-off: the icon-box concentric-radius formula (outer = inner + gap) no longer resolves; accepted because padding consistency wins over corner-curvature optical purity. Within-text-block typography spacing (title ↔ body) stays at typographic default. All v3.4 surfaces re-rendered (IG Square, deck slide, LinkedIn organic post) at the new rule. |
| **3.4** | 2026-04-28 | **Unified X = 0.08 × min(W, H)** for every medium. Drops the 5/8 print/digital split — one anchor, simpler mental model, more confident brand presence on print. Mnemonic: *"X is 8 — for everything."* **Canvas/card pairing rule** rewritten in §Color.3: only two valid pairings — *white canvas + gray-50 cards* OR *black canvas + gray-800 cards*. Inverse pairings (gray-50 canvas + white cards) explicitly rejected. **§Object styles.6 secondary tier** updated to match. New anti-patterns: *"a card is never the composition"* (§Object styles.7) and *"don't clone a bottom-lockup at the top without flipping order"* (§Logo.7) — **top lockup is cluster-left + symbol-right**, bottom is symbol-left + cluster-right. §Reference compositions §1 IG Square recipe updated; new release-confidence tests shipped (deck slide, LinkedIn organic post, A4 print one-pager). Email banner rejected as a reference surface. |
| **3.3** | 2026-04-28 | **Three-tier card model** in §Object styles.6 (primary/secondary/tertiary) with shadow scoped to primary tier only. **Card padding rule** explicit: text `X/2`, nested rounded tile `X/4`. **Image-bg overlay scrim generalised** in §Composition.7 — applies to any card-scale image background, not just full-bleed archetype D. **Card title formula** `× 0.55` (down from `× 0.65`) in §Typography.4 + §Composition.10. **Lockup gap relaxed** in §Composition.2 to `≥ 1X` (default `2X`, relax to `1X` for cards-led layouts). |
| **3.2** | 2026-04-28 | Auto-layout build pattern (Universal rules). IG Square refinements: gray-50 canvas, 432×392 cards, full-bleed archetype-D photo card, X gap above lockup. LinkedIn H2 stretches full content-area width. |
| **3.1** | 2026-04-27 | Bisected-canvas lockup placement (SOT 564:7739). EP sub-floor exception scoped to bisected-canvas. |
| **3.0** | 2026-04-27 | Unified X-system (5% print / 8% digital). Single anchor for margins, gutter, lockup, type, radii. Headline tiers `1 / 1.25 / 1.5 X`. Subtitle single tier `0.5X`. Grid gutter `0.5X`. |
| 2.18 | 2026-04-26 | X_logo dual anchor (5% print / 8% digital) + dual EP floor (12 px print / 20 px digital). Reverted in 3.0 (single X). |
| 2.17 | 2026-04-25 | Object styles X-bracketed radius scale + concentric icon-box derivation. |
| 2.0 | 2026-04-22 | Consolidated single-file SKILL.md. Inline color, typography, tone, logo. |
| 1.0 | 2026-03-26 | Initial multi-file orchestrator + territory files. |

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
