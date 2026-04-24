---
name: qonto-brand-design-skill
version: 2.2
description: "Qonto brand as code. Apply Qonto's brand guidelines — logo, composition, color, typography, tone, photography — to any output (Figma, HTML, social, print). Pulls ground truth from the Brand Kit SOT Figma file. Always uses Figma library components — never recreates from scratch."
---

# Qonto Brand Design Skill

> Version: 2.2 · Last updated: 2026-04-24 · Status: living document
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
- Generous whitespace. Corner-radius language is split: **structural objects are sharp (0); rounded corners are reserved for floating content** (product cards, small image tiles, icon bounding boxes). Exact radii land with the Object Styles section.
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
| In Figma (AI-agent-led) | Recommend the plugin to the designer in your reply; link the community URL. If the plugin or the Drive export is unreachable, leave the surface without the gradient and flag the gap — do not substitute a native `GRADIENT_LINEAR`/`GRADIENT_RADIAL` fill, not even labelled "placeholder". | A §Composition.9b-style scrim is a compositional mechanic, not a brand gradient. |
| Outside Figma (decks, HTML, email, print, Canva) | Pull exported PNG / SVG assets from the brand asset library's `Gradients/` folder — see §Asset library. *(Folder pending creation; same access model as `Logo/`.)* | Same conventions as the logo export pipeline. |
| Raw spec fallback | **There isn't one.** If you cannot reach the plugin or the Drive folder, say so and stop — do not invent stops, and do not render a vector fallback (Figma native gradient, CSS `linear-gradient`, SVG `<linearGradient>`). Vector references get mistaken for canon and drift the brand. | Intentional: gradients are sealed exports, not reconstructable from memory. |

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
- Do not reconstruct a canonical Qonto gradient by hand — use the plugin or the Drive export.
- Do not render a gradient as a native/vector fill (`GRADIENT_LINEAR`, `GRADIENT_RADIAL`, CSS `linear-gradient`, SVG `<linearGradient>`) — not as a placeholder, not as a reference, not as an approximation. Vector references get mistaken for canon and drift the brand; omit the gradient until the plugin export exists.
- Do not apply any color to typography beyond `primary/black` and `primary/white`.
- Do not invert white-led to black-led without a brief signal or an editorial rationale that stands up to scrutiny.
- Do not use pure `#000000` — Qonto black is `#050505`.
- Do not let a structural color element (gradient, dark block, photography, scrim) bleed into the bottom 2X band where the full lockup sits. The lockup must rest on a single color — see §Logo.5.

### 11. For AI agents — color checklist

Before applying color to any output, walk this list:

1. **Marketing or product?** Marketing → black + white + grayscale. Product → full palette available. Ambiguous → ask.
2. **If marketing and color appears** — is it dataviz or a UI shot? Yes → narrow exception (§5 or §8) applies. No → strip the color.
3. **If using a gradient** — is the surface Qonto AI / agent-related? Then the four `Ai Agent - *` gradients are candidates. Otherwise use Golden Hour / Lavender Rise / Morning Veil / Daybreak. Acquire via the plugin or the Drive export, never by hand-rolling stops.
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
   - `X` ≥ 54 px on screen (or equivalent — see §Logo.4 scalability floor), AND
   - The entry-points block can be read at 12 px minimum.
2. **Wordmark + entry points** — when the full lockup would be forced to collapse its auto gap (symbol and cluster touching the minimum). Keeps the service descriptor; drops the symbol.
3. **Wordmark alone** — when entry points can no longer fit at 12 px, or when the audience already has full brand context.
4. **Symbol only** (squircle multiplier or circular badge) — compact/functional contexts, or when the canvas is too small for the wordmark at 24 px height.

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
| Light (white or near-white) | Fill `primary/black` = `#050505` | Black container, white flower glyph |
| Dark (`#050505` or near-black) | Fill `primary/white` = `#ffffff` | Black container + **white 1px stroke around the container** |

**Do not invert the flower's colors on dark backgrounds.** Keep the `color=black` variant (black container + white glyph) and add a 1 px white stroke around the container to make its edges legible. This is a deliberate brand choice from the SOT. For the Figma code, see the `bgIsDark` branch in §Logo.8's full-lockup recipe — stroke goes on the inner `square` frame, `strokeAlign: 'INSIDE'`.

No gradients, no brand palette colors, no outlines (except the dark-background stroke rule above), no effects.

**Figma color tokens**
- Primitive (always exact, no theming): `primary/black` (`#050505`), `primary/white` (`#ffffff`) — from `Colors - Library`, collection "Primitive colors".
- Semantic (prefer for product contexts): `content/primary-a` (`#050505`), `content/primary-b`, `border/primary` — from `Product Foundations`, collection "Semantic colors".

**DS vs SOT:** if a DS token value disagrees with a hex in this file, the hex wins (the DS is mid-migration to match the SOT). Flag the mismatch to the brand team. Confirmed in-sync as of 2026-04-22: `content/primary-a` = `primary/black` = `#050505`.

### 4. Sizing — the 5% rule

This is the rule from the SOT that replaces the old vague "x-height of wordmark" guidance.

> **Wordmark height = clear space = layout margin = 5% of the shortest side of the canvas.**

Call this value `X`. Every logo dimension is derived from `X`.

**Verification against SOT.** The reference layout in the Brand Kit SOT is 2000 px wide; its wordmark is rendered at 100 × 356. That matches X = 100 (5% of 2000), wordmark height = X, wordmark width = X × (492 / 138) = 356. Trust this ratio.

| Canvas | Shortest side | `X` (margin, clear space, wordmark height) | Wordmark width |
|---|---|---|---|
| 1080 × 1080 (square social) | 1080 | **54 px** | 193 px |
| 1080 × 1350 (portrait social) | 1080 | 54 px | 193 px |
| 1920 × 1080 (16:9 slide / OOH) | 1080 | 54 px | 193 px |
| 1200 × 630 (OG / link card) | 630 | 32 px | 114 px |
| 2480 × 3508 (A4 @ 300dpi) | 2480 | 124 px | 442 px |
| A4 print (210 × 297 mm) | 210 mm | 10.5 mm | 37.4 mm |

**Margin** — every edge of the canvas has `X` of padding. Do not place anything (logo, text, image) closer to the edge than `X`.

**Clear space** — `X` on all four sides of the logo. Nothing (text, image, other logo, shape) may enter this zone.

**Logo dimensions** — the wordmark component (`Qonto logo wordmark`, source 492 × 138, aspect ratio 3.57 : 1):

```
wordmark_height = X
wordmark_width  = X × (492 / 138) ≈ X × 3.57
```

The logo is intentionally small — at 1080 px it is ~18 % of canvas width. It anchors the composition; it does not dominate it.

After instantiating the component in Figma, call `instance.resize(wordmark_width, wordmark_height)`. The component preserves its internal proportions.

**Symbol (flower) dimensions** — when used standalone (app icon, avatar, favicon) or as part of the full lockup: `symbol_size = X × X` (square). The symbol's container handles its own internal padding.

**Full lockup spacing** (symbol + entry points + divider + wordmark): each piece has height `X`. The lockup stretches the full layout width — the gap between the **symbol** and the **(entry points + divider + wordmark) cluster** is **auto** (it fills the remaining width between margins). Inside the cluster, gaps are fixed at `X / 2`: entry points → divider = `X/2`, divider → wordmark = `X/2`. Vertical divider: height `X`, 1 px stroke. Squircle corner radius on the symbol's inner `square` frame ≈ `X × 0.22`.

Minimum auto gap — if the gap would compress below `X`, the full lockup no longer fits: drop to wordmark + entry points per §Logo.1. See §Logo.8 for the exact recipe.

**Scalability floor** — never render below these sizes:
- Wordmark alone or wordmark+symbol: minimum 24 px height on screen, 0.25 in print.
- Below 24 px on screen, switch to **symbol only** (favicon/app icon).
- With entry points: the entry-point text size is the floor — 12 px screen, 8 pt print. If the layout cannot fit 12 px entry-point text, drop the entry points.

**Entry-points typography** — from the SOT (measured on node 220:51724):
- Family: **Qonto Sans** (not Inter). Always use this family name. Some SOT nodes currently carry the intermediate label `Qonto Sans v4` — treat that as a naming artefact and use `Qonto Sans` in all output.
- Weight: **Regular**.
- Size: `round(X × 0.245)` px — at X=54 that's 13 px; at X=100 that's 24 px. Hard floor of 12 px (drop the entry points if the computed value falls below).
- Line-height: `round(X × 0.36)` px — at X=54 that's 19 px; at X=100 that's 36 px.
- Color: same as the divider and wordmark — `#050505` on light, `#ffffff` on dark.
- **Alignment: left within the text block.** Lines start flush left; the block's right edge sits `X/2` from the divider. The ragged right edge (Invoicing shorter than Business Account) is intentional — don't right-align.
- Three lines maximum: `Business Account\nCompany Creation\nInvoicing` is the canonical copy. Translate per market; keep to three short lines.

### 5. Placement

**Priority placement (use this first).** The full lockup is **edge-anchored along the bottom of the canvas and stretches the full layout width**:

- Symbol (squircle) anchored at bottom-left, `X` from the left edge and `X` from the bottom.
- Entry points + divider + wordmark anchored as a tight cluster at bottom-right, `X` from the right edge, same `X` from the bottom.
- The horizontal space between the symbol and the cluster is **auto** — it fills whatever width remains between them. The cluster stays tight (`X/2` between its pieces); the symbol does not drift rightward.
- Vertically, the whole lockup sits at one baseline at height `X`, with `X` of clear space above it.

Reference: Brand Kit SOT node [220:51714](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=220-51714). Use this for posters, flyers, portrait social, OOH, document covers — any long-lived branded artefact with a clear bottom edge.

**Also valid.** All other placements in the SOT Placement section ([node 220:52561](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=220-52561)) are acceptable when the priority placement does not serve the composition. They follow the same rules — `X` margin on all sides, height `X`, tight cluster, auto gap when both symbol and cluster appear:

- **Top edge-anchored, full width.** Mirror of the priority: symbol top-left, cluster top-right. For headers and editorial.
- **Bottom-right cluster only** (no symbol). Use when the wordmark or wordmark+entry configuration is chosen.
- **Bottom-left cluster only** (no symbol). Mirror of the above.
- **Top-right / top-left cluster only.** Same, anchored to the top edge.

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
const shortest = Math.min(canvasW, canvasH);
const X = Math.round(shortest * 0.05);            // 54
const wordmarkH = X;                              // 54
const wordmarkW = Math.round(X * (492 / 138));    // 193

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

**Full lockup recipe** — symbol (squircle) anchored at bottom-left margin `X`, (entry points + divider + wordmark) cluster anchored at bottom-right margin `X`, with **auto space filling between them**. All pieces share height `X`. Squircle multiplier is not a single library component; compose it from `Qonto logo square` with a corner-radius override on its inner `square` frame.

Before running: check the configuration actually fits (§Logo.1 decision rule). If canvas width < `8 × X`, fall back to wordmark + entry points.

```javascript
const canvasW = 1080;
const canvasH = 1350;
const X = Math.round(Math.min(canvasW, canvasH) * 0.05);   // 54
const cornerR   = Math.round(X * 0.22);                    // 12 — squircle corner
const clusterGap = Math.round(X * 0.5);                    // 27 — intra-cluster gap
const wordmarkW = Math.round(X * (492 / 138));             // 193
const bgIsDark  = false;                                   // flip for dark canvases

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

// 2. Entry-points text — Qonto Sans Regular, scaled from X. Size floors at 12 px.
const entrySize = Math.max(12, Math.round(X * 0.245));    // 13 at X=54, 24 at X=100
const entryLH   = Math.round(X * 0.36);                   // 19 at X=54, 36 at X=100
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

// 5. Compose — symbol at left margin, cluster at right margin, auto gap between.
const baselineY = canvasH - X - X;                         // bottom margin + height X

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

// Sanity: verify the auto gap didn't collapse — if it did, the configuration doesn't fit.
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

- **HTML / React**: serve the wordmark SVG from `Logo/` in the [Asset library](#asset-library) — never typeset "Qonto" as HTML text styled to look like the logo. Apply `fill: #050505` or `#ffffff`. Set height via CSS; width is auto.
- **Print / PDF**: embed the SVG or a high-res PNG (from `Logo/` in the [Asset library](#asset-library)) at the computed size; respect the 5% margin rule relative to the trim box.
- **Social exports**: compute `X` from the export dimensions, not from the design canvas.

---

## Composition

Composition ties everything in a layout — headline, subtitle, body, logo — to one ratio. That ratio is `X` (the logo multiplier from §Logo.4 = 5% of the shortest canvas side). Every type size, every margin, every clear-space decision is a multiple of `X`. This is what makes Qonto layouts feel like a system rather than a collection.

### 1. Headline + subtitle tiers — all scaled from X

Three canonical tiers, measured from the SOT "Headline size" section ([node 420:50784](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=420-50784)). Pick one tier per composition.

| Tier | Headline (Qonto Sans **Bold**) | Subtitle (Qonto Sans **Regular**) |
|---|---|---|
| **Small** | `1.37 × X` @ 98% line-height | `0.78 × X` @ 110% line-height |
| **Medium** | `2.22 × X` @ 98% line-height | `0.93 × X` @ 110% line-height |
| **Large** | `2.76 × X` @ 98% line-height | `1.37 × X` @ 110% line-height |

At X = 54 px (1080-shortest canvas): small = 74 / 42, medium = 120 / 50, large = 149 / 74.

Note the ladder: **the subtitle of the Large tier equals the headline of the Small tier**. Tiers overlap so sizes flow into one system — pick any tier; no size is orphaned.

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

Measured on the SOT 1080×1350 reference (X = 54):

| Element | Value | In X |
|---|---|---|
| Canvas margin (all 4 sides) | 54 px | `1X` |
| Content column width | 972 px | `canvas_w − 2X` |
| Adjacent-band gap | 54 px | `1X` |
| Last-band → lockup gap | 108 px | `2X` |
| Lockup strip height (baseline X for the symbol) | 54 px | `1X` |

**Floating / overlapping objects.** When a composition uses layered imagery (hero object + backing shapes, as in the SOT third variant), the first object starts `2X` below the headline band. Subsequent objects may overlap each other and visual judgment takes over — but nothing crosses the outer `X` margin, and nothing pushes into the `2X` zone above the lockup.

**Why this matters.** Because every gap is a multiple of X, a layout stays coherent whether you scale it to 1080×1350, 1920×1080, or 2048×2048: X recomputes, margins and band gaps scale with it, and all proportional relationships stay intact. A poster and an Instagram post built from the same system read as the same brand.

### 3. Grid — the X column system

Reference: SOT "Grid" ([node 450:51608](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=450-51608)).

§Composition.2 governs the **vertical** axis (band gaps). This section governs the **horizontal** axis (columns). Same unit: X. Together they form an X-grounded lattice that a composition can snap to.

**Universal rules:**

- Outer margins: `X` on all four sides (same boundary as §Composition.2).
- Gutter between columns: `X`.
- All columns are equal width.

**Column count scales with aspect ratio.** Pick the preset that matches the canvas:

| Canvas shape | Aspect ratio (long ÷ short) | Column count | Examples |
|---|---|---|---|
| **Square / portrait** | `≤ 1.5` | **4** | 1080×1080, 1080×1350, A4 portrait |
| **Landscape** | `1.5 < ratio ≤ 2.5` | **8** | 1920×1080 deck, 2048×1152 |
| **Ultra-wide / banner** | `> 2.5` | **12** | 2844×460 web banners, billboards |

**Column width formula:**

```
col_width = (canvas_w − (n + 1) × X) / n
```

where `n` is the column count and `X = 0.05 × min(canvas_w, canvas_h)`. The `(n + 1)` term covers both outer margins plus every gutter between columns.

| Canvas | X | n | col_width |
|---|---|---|---|
| 1080 × 1080 | 54 | 4 | 202.5 px |
| 1080 × 1350 | 54 | 4 | 202.5 px |
| 1920 × 1080 | 54 | 8 | 179.25 px |
| 2844 × 460 | 54 | 12 | ≈ 178.5 px |

**X for extreme aspect ratios.** "5% of the shortest side" is the rule for standard formats (ratio ≤ 2.5). For ultra-wide or ultra-tall canvases (ratio > 2.5), the shortest-side rule produces a margin too small to register (a 2844×460 banner would give X = 23). Instead, anchor X to the **base format the banner is sliced from** — usually a 1080- or 1920-class layout — so brand rhythm stays consistent across the set. Rule of thumb: `X = max(5% × min(canvas_w, canvas_h), 0.028 × max(canvas_w, canvas_h))`. For a 2844×460 frame this yields 79, so round to the nearest existing X in your system (54 if the system is 1080-based).

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
| **D. Overlay — text on full-bleed image** | Image bleeds edge-to-edge; text block + lockup sit on top within `X` margins. **Dark-background recipe:** use the `color=white` logo variants and apply a `1px` white stroke to the symbol (per §Logo.3). Verify contrast: headline and lockup must read cleanly against the busiest region of the photo, not just the calm edge. When the photo's text zone isn't reliably dark, add a scrim — see §Composition.9b for the full Figma build recipe. | Atmospheric, photo-led campaigns |
| **E. Overlay — text card on bleed image** | Image full-bleed; solid-colour card (usually white) with headline + lockup, card honours `X` margin and `X` internal padding. Card uses **sharp corners** (`cornerRadius = 0`) — rounded corners are not Qonto-native. | Photo + crisp readable message, landing-page hero |
| **F. Layered — floating objects + text** | Text at top → `2X` → three overlapping cascading objects (§Composition.2 floating-object rule) → `2X` → lockup | Editorial, object-of-the-week, feature-rich storytelling |

**Picking the right archetype:**

- Does the message or the image lead? → A (message) or B (image)
- Are the two elements equal weight? → C
- Do you want the viewer inside the image? → D
- Photo background but the copy must pop? → E
- Multiple objects or a progression? → F

**Rules shared across all archetypes:**

- Outer margin `X` on all sides (§Composition.2), except for full-bleed images in D and E, which bleed past the margin but never the text block or the lockup.
- **Photography comes from `Photography [Self-server]/` in the [Asset library](#asset-library)** — don't generate or swap in arbitrary imagery for archetypes B, C, D, E.
- **Photo-archetype fit.** D and E place text *over* the photo, so they require shots with generous negative space and tonal uniformity in the text zones (upper-left for headline, lower-X strip for lockup). If the provided photo is activity-dense, crops tightly onto subjects, or has no calm region for text to breathe, **propose switching to A, B, or C** — where the photo gets its own dedicated band and doesn't fight the text. Don't force-fit a busy photo into D or E. This applies even when the user explicitly asks for D/E: name the mismatch and recommend the better archetype.
- Lockup sits at the bottom X strip (§Logo.5). In archetype E it sits inside the card, not at the canvas bottom.
- **Every last content band ends at `lockupY − 2X`**, not at the canvas bottom. This holds for text bands (A), visual bands (B), both halves of a split (C), overlay text blocks (D), and cards (E). The 2X breathing room before the lockup is non-negotiable.
- Text block honours horizontal (§Composition.5) and vertical (§Composition.6) alignment rules.
- Headline tier (§Composition.1) picked for the archetype, not per element.
- Grid (§Composition.3) as a reference, especially when splitting (C) or sizing the text card (E).
- **Sharp corners by default** — cards, frames, and rectangular brand shapes use `cornerRadius = 0`. Rounded corners are not part of the brand language. (Object-style rules are coming; until then, default to sharp.)

**Not a cage.** These six archetypes cover the vast majority of Qonto touch points, but a genuinely novel composition can exist if every underlying rule (X-scaled type, X-margin, band-gap, alignment, colour) holds. If you need a new archetype, measure it against the SOT and propose it as an addition to this section rather than a one-off.

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

*Empirically validated on `Thomas Tech Office Laptop Front.png` at 1920×1080 (file `mNVOGF8yvrXXMXTVt6cKkr`, frame 62:464).*

### 10. Body copy and other type sizes

See §Typography for the full type system. In brief: any non-headline/subtitle type (captions, metadata, labels, legal) is Qonto Sans Regular at `max(12 px, round(X × 0.245))` — same as the entry-points text in §Logo.1. Do not introduce sizes that sit between the defined ratios.

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

### 4. Hierarchy — three roles, all scaled from X

Three typographic roles. Every size is a multiple of `X` (the composition base unit — see §Composition.1).

| Role | Family & weight | Size | Line-height (SOT) | Tracking |
|---|---|---|---|---|
| **Headline** | Qonto Sans **Bold** | Small `1.37 × X` · Medium `2.22 × X` · Large `2.76 × X` — see §Composition.1 | **98 %** | +0.5 % |
| **Subtitle** | Qonto Sans **Regular** | Small `0.78 × X` · Medium `0.93 × X` · Large `1.37 × X` — see §Composition.1 | 110 % | +0.5 % |
| **Body / caption / label / entry-points** | Qonto Sans **Regular** | `max(12 px, round(X × 0.245))` | 130 % | 0 % |

- Headlines are set **sub-leading (98 % LH)** — lines crowd into each other so the type block reads as one dense shape; +0.5 % tracking opens the counters back up at display sizes so the crowding doesn't fight legibility.
- Body uses 130 % LH because reading-mode wants air; tracking stays at 0 — Qonto Sans is already tuned for it.
- **12 px is the floor.** Never ship type smaller, even for legal footnotes — pick a larger canvas instead.

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

<!-- Expansion territories (to be nailed next, same approach as logo + composition + color + typography: pull from SOT, write concrete specs, test against Figma library components):
     - Object style (sharp structure / rounded content — see feedback_sharp_corners)
     - Tone of voice
     - Iconography
     - UI snapshots (product in marketing)
     - Motion
-->

---

## Photography

See [`references/photography.md`](references/photography.md) for AI generation prompts and photo-selection rules. For approved shots, pull from `Photography [Self-server]/` in the [Asset library](#asset-library) — any image in that folder is cleared for use.

---

## Asset library

Canonical exports of the SOT for any context that isn't Figma — decks, docs, email, Canva, Notion, landing pages, social tools.

**Where it lives:** [Qonto Brand Asset Library](https://drive.google.com/drive/folders/1E0HtZCvHVv4K0e-Yx9pTqJi0eYNytbOH) on Google Drive.

**Source vs export.** The Figma SOT is the source of truth; the Drive library is the export pipeline's output. If an asset exists in both, Drive mirrors Figma — if they disagree, Figma wins and the Drive copy is stale. Flag the mismatch to the brand team rather than working around it.

| Folder | What's in it | Use for | Source / cross-link |
|---|---|---|---|
| `Logo/` | SVG and PNG exports of every canonical logo configuration | Any non-Figma surface that needs a logo | SOT [node 399:548](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=399-548) · §Logo |
| `Icons/` | Qonto icon set (single system for marketing and product) | Iconography in any surface | SOT [node 399:1333](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=399-1333) · (full §Iconography rules to come) |
| `Photography [Self-server]/` | Approved photography pool — no gate, self-serve | Full-bleed backgrounds, card imagery (§Composition.7 archetypes D, E) | §Photography |
| `Card Assets/` | Product-card renders | Feature and product-announcement compositions | — |
| `Trustpilot/` | Rating badges and visuals | Social-proof placements | — |
| `UI Snapshots/` | Approved product screenshots | Product-story compositions in marketing | — |

### How the agent reaches it

- **With a Google Drive connector** (Claude Desktop, Claude Code with the Drive MCP, Cursor with Drive access): fetch programmatically — see the validated pattern below.
- **Without a connector**: ask the user for **the specific file** — either a drop into the chat, or a public share link to a single file ("Anyone with the link can view"). Quote the folder path + filename pattern so the user finds it fast. **Do not accept a folder link** as the asset handoff — Google Drive folders require auth to enumerate and WebFetch will hit the login wall; you won't be able to pick the right file yourself.
- **Never invent or redraw a brand asset** when the canonical export exists in the library. If you think an asset is missing, say so — don't improvise.

### Validated fetch pattern — with a Google Drive connector

End-to-end recipe, tested against the Qonto Brand Asset Library. Tool names are from the Google Drive MCP (`search_files`, `download_file_content`) — other connectors may use different names but the steps map 1:1.

1. **Resolve the subfolder ID.** Do not paste a Drive folder URL as a query argument; the connector won't match it. Query by title and mimeType instead:
   ```
   search_files({ query: "title contains 'Photography' and mimeType = 'application/vnd.google-apps.folder'" })
   ```
   The response includes the `id` and the `parentId`. Sanity-check `parentId` against the Brand Asset Library root (`1E0HtZCvHVv4K0e-Yx9pTqJi0eYNytbOH`) so you're not picking up a same-named folder elsewhere in Drive.
2. **List assets by parentId.**
   ```
   search_files({ query: "parentId = '<subfolder_id>' and mimeType contains 'image/'", pageSize: 25 })
   ```
   Pick a file by the filename convention (see "Filename conventions" above).
3. **Download bytes by fileId.**
   ```
   download_file_content({ fileId: "<chosen_id>" })
   ```
   Response shape: `{ content: [{ embeddedResource: { contents: { blob, mimeType } } }] }` where `blob` is base64. **For files larger than ~4 MB, the response exceeds the MCP output cap and is saved to a tool-results file on disk — the error message includes the path.** When that happens, extract and decode via shell:
   ```bash
   jq -r '.content[0].embeddedResource.contents.blob' <saved.txt> | base64 -d > /tmp/asset.png
   ```
4. **Apply to Figma.** `figma_set_image_fill` takes the `/tmp` file path directly (preferred for large images — avoids parameter truncation). It may report `"Image fill applied to 0 node(s)"` due to a known plugin quirk — **the returned `imageHash` is still valid.** Apply it manually in `figma_execute`:
   ```javascript
   rect.fills = [{ type: 'IMAGE', imageHash: '<returned hash>', scaleMode: 'FILL' }];
   ```
5. **Reuse within the session.** The `imageHash` is now cached for the rest of the session — see "Within a Figma session: reuse by `imageHash`" below.

### Filename conventions

Observed library convention: `{Subject} {Scene/Theme} {Mood}.png` — e.g., `Thomas Tech Office Action.png`. When asking a user for a specific photo, request by mood and scene keywords (e.g., "a calm, wide shot with negative space in the upper-left" rather than a specific filename) — the user will find the match faster than the agent can guess.

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
