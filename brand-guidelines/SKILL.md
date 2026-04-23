---
name: qonto-brand-design-skill
version: 2.1
description: "Qonto brand as code. Apply Qonto's brand guidelines — logo, composition, color, typography, tone, photography — to any output (Figma, HTML, social, print). Pulls ground truth from the Brand Kit SOT Figma file. Always uses Figma library components — never recreates from scratch."
---

# Qonto Brand Design Skill

> Version: 2.1 · Last updated: 2026-04-22 · Status: living document
>
> Single source of truth: [Qonto Brand Kit — SOT (Figma)](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT) · `fileKey: 9MBP81zVpoj7hlLS8gf4eV`

You are creating work for Qonto. This skill is the consolidated source for Qonto's brand. Apply it to every visual or written output — Figma frames, HTML, social posts, flyers, decks, dashboards.

When the output lives in Figma, **never draw logos, colors, or type as shapes or hard-coded values**. Pull design system components and tokens from the linked Figma libraries.

---

## Brand identity

Qonto is the European leader in business finance management for SMEs and freelancers — 500,000+ businesses across France, Germany, Italy, and Spain.

**Brand personality** — every piece of work should feel like it came from the same hand:
- **To the point** — clear, concise, no jargon.
- **Playful and spirited** — professional yet approachable.
- **At ease** — calm, smooth, frictionless.
- **Always attentive** — empathetic, contextually aware.

**The marketing / product split** — the most important architectural rule:
- **Marketing & brand communications** use black, white, and gray only. Restraint is the strategy.
- **Product** uses the full expressive palette (Blueberry, Mint, Plum, Sakura, Peach, Mustard) plus semantic UI colors.

When unclear which context applies, ask.

---

## Universal rules

- Primary typeface: **Qonto Sans** (custom). Fallback: Manrope → Arial.
- Default weight: Regular (400). Sentence case only — never ALL CAPS.
- Minimum body size: 14px.
- Generous whitespace. Rounded corners (16–24px) on cards and containers.
- Never use pure `#000000` — Qonto's black is `#050505` (token `primary/black`).

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
- Do not combine the wordmark and symbol side-by-side outside the approved full lockup.
- Do not use over busy backgrounds or photography without contrast protection.
- Do not use the logo below the minimum size.
- Do not pair with the old Qonto logotype (pre-rebrand) — only the current wordmark.

### 8. Figma build recipe — copy this

Paste this into `use_figma` when placing a logo in a new Figma layout. Adjust `canvasW`, `canvasH`, and the desired variant.

The `Qonto logo wordmark` is a **component set** with one variant property — `color` (`black` or `white`). Use `importComponentSetByKeyAsync`, then pick the variant via its name (`color=black` / `color=white`). Using `importComponentByKeyAsync` on a component set returns "not found".

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

- **HTML / React**: serve the wordmark SVG asset (from the Logos library export) — never typeset "Qonto" as HTML text styled to look like the logo. Apply `fill: #050505` or `#ffffff`. Set height via CSS; width is auto.
- **Print / PDF**: embed the SVG or a high-res PNG at the computed size; respect the 5% margin rule relative to the trim box.
- **Social exports**: compute `X` from the export dimensions, not from the design canvas.

---

## Composition

Composition ties everything in a layout — headline, subtitle, body, logo — to one ratio. That ratio is `X` (the logo multiplier from §Logo.4 = 5% of the shortest canvas side). Every type size, every margin, every clear-space decision is a multiple of `X`. This is what makes Qonto layouts feel like a system rather than a collection.

### 1. Headline + subtitle tiers — all scaled from X

Three canonical tiers, measured from the SOT "Headline size" section ([node 420:50784](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=420-50784)). Pick one tier per composition.

| Tier | Headline (Qonto Sans **Bold**) | Subtitle (Qonto Sans **Regular**) |
|---|---|---|
| **Small** | `1.37 × X` @ 110% line-height | `0.78 × X` @ 110% line-height |
| **Medium** | `2.22 × X` @ 110% line-height | `0.93 × X` @ 110% line-height |
| **Large** | `2.76 × X` @ 110% line-height | `1.37 × X` @ 110% line-height |

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
| **C. Split — text ↔ visual** | Landscape: text one half, visual other half. Portrait: collapses to A or B. | KPI + supporting image, testimonial + face, equal-weight pairs |
| **D. Overlay — text on full-bleed image** | Image bleeds edge-to-edge; text block + lockup sit on top within `X` margins | Atmospheric, photo-led campaigns |
| **E. Overlay — text card on bleed image** | Image full-bleed; solid-colour card (usually white) with headline + lockup, card honours `X` margin and `X` internal padding | Photo + crisp readable message, landing-page hero |
| **F. Layered — floating objects + text** | Text at top → `2X` → three overlapping cascading objects (§Composition.2 floating-object rule) → `2X` → lockup | Editorial, object-of-the-week, feature-rich storytelling |

**Picking the right archetype:**

- Does the message or the image lead? → A (message) or B (image)
- Are the two elements equal weight? → C
- Do you want the viewer inside the image? → D
- Photo background but the copy must pop? → E
- Multiple objects or a progression? → F

**Rules shared across all archetypes:**

- Outer margin `X` on all sides (§Composition.2), except for full-bleed images in D and E, which bleed past the margin but never the text block or the lockup.
- Lockup sits at the bottom X strip (§Logo.5). In archetype E it sits inside the card, not at the canvas bottom.
- Text block honours horizontal (§Composition.5) and vertical (§Composition.6) alignment rules.
- Headline tier (§Composition.1) picked for the archetype, not per element.
- Grid (§Composition.3) as a reference, especially when splitting (C) or sizing the text card (E).

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
headline.lineHeight = { unit: 'PERCENT', value: 110 };
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

### 10. Body copy and other type sizes

Beyond the headline/subtitle tiers, any additional type in a composition (captions, metadata, small labels) should follow the same X-scaled logic. The entry-points text already established this: Qonto Sans Regular at `max(12, round(X × 0.245))`. For layout captions or legal footnotes, use the same 12 px floor / `0.245 × X` target. Do not introduce type sizes that sit between these defined ratios.

---

## Photography

See [`references/photography.md`](references/photography.md) for AI generation prompts and photo-selection rules.

<!-- Expansion territories (to be nailed next, same approach as logo + composition: pull from SOT, write concrete specs, test against Figma library components):
     - Color
     - Typography (full type system beyond headline/subtitle)
     - Tone of voice
     - Iconography
     - Object style (3D, gradients, cards)
     - UI snapshots (product in marketing)
     - Motion
-->

---

## For AI tools

When this skill is in context:

1. Read brand identity first — it shapes tone and decisions.
2. Determine whether the work is marketing or product before picking colors or logos.
3. **For any logo placement**: use the sizing formula in §Logo.4 and the library component keys in §Logo.2. Never draw the logo from shapes.
3a. **For any multi-element layout**: compute `X` first (§Logo.4), then derive headline, subtitle, body, logo, and margins from `X` per §Composition. Pick one headline tier per composition.
4. Before creating anything in Figma, call `search_design_system` to confirm components are available; import via `importComponentByKeyAsync`.
5. If a guideline here conflicts with a DS token, trust this file and flag the mismatch to the brand team.
6. When unsure, default to the universal rules and ask for clarification.
