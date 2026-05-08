# Qonto Brand — Figma Production Guide

> Companion to `SKILL.md`. This file contains everything Figma-specific: component keys, build recipes, API patterns, slide deck specs, and reference compositions.
>
> **The brand foundations are in `SKILL.md`.** This file assumes you have read it. Rules don't repeat here — only the Figma-specific implementation of those rules does.
>
> Version: 1.0 · Last updated: 2026-05-07

---

## Logo — Figma specifics

### Library components — always import, never redraw

When working in Figma, always use `figma.importComponentByKeyAsync(key)` and instantiate via `.createInstance()`. Never draw the logo as text or vector shapes.

Before placing any logo, call `search_design_system` with the file's `fileKey` to confirm the component is subscribed and get the latest key.

**Logos Library — `Logos - Library`** (brand/marketing context):

| Component | Key |
|---|---|
| Qonto logo wordmark | `ea8c642aa816c04f75bb326581c12a90e51c833e` |
| Qonto logo flower | `feb4e263f9976e7c1ffb788e22ecf45942707eee` |
| Qonto logo badge | `d137cbe69ebbac55c1e9f4307da8bfe5aed91afb` |
| Qonto logo square | `8aa7d855955618d4b44821f577443de9de00a0eb` |

Sub-brand lockups: `Qonto facturation logo`, `Qonto creation logo` — search via `search_design_system`.

**In-app assets Library — `In-app assets`** (product UI context):

| Component | Key |
|---|---|
| qonto wordmark | `edb4e3f7ac7687c59adcc1eaf643796199d22ce2` |
| qonto_flower | `6351139248035c632f0f3bbbfb635e7389ff975a` |

Use the In-app components inside product UI surfaces; use the Logos Library components in marketing/brand outputs.

**Component set handling.** `Qonto logo wordmark` and `Qonto logo square` are component sets. Use `importComponentSetByKeyAsync`, then pick the variant by name (`color=black` / `color=white`). Using `importComponentByKeyAsync` on a component set returns "not found".

### Logos are vector, never raster

Always use `figma.createNodeFromSvg(svgString)` so the result is a vector node. Never rasterise the SVG to PNG and apply via `figma_set_image_fill`.

```javascript
// ✅ Vector — correct
const svg = await fetch(LOCKUP_URL).then(r => r.text());
const lockup = figma.createNodeFromSvg(svg);
lockup.resize(targetW, targetH);

// ❌ Raster — do not
figma_set_image_fill(lockup, '/tmp/lockup.png');
```

Photography and decorative images stay raster (PNG / JPG via `figma_set_image_fill`). Brand assets (logos, symbols, wordmarks, lockups, icons) stay vector.

**Inlining large SVGs in `figma_execute`:** use `JSON.stringify(svgContent)` to escape cleanly:

```python
import json
svg = open('/tmp/q-lockup-h-EN.svg').read()
script = f'const SVG = {json.dumps(svg)};\nconst lockup = figma.createNodeFromSvg(SVG);\n…'
```

### Build recipe — wordmark placement

```javascript
const canvasW = 1080;
const canvasH = 1080;
const MEDIUM  = 'digital';                                    // 'digital' or 'print'
const shortest = Math.min(canvasW, canvasH);
const X = Math.round(shortest * 0.08);                       // 86 at 1080
const wordmarkH = X;
const wordmarkW = Math.round(X * (492 / 138));               // 308

const WORDMARK_SET_KEY = 'ea8c642aa816c04f75bb326581c12a90e51c833e';
const set = await figma.importComponentSetByKeyAsync(WORDMARK_SET_KEY);
const bgIsDark = false;
const variant = set.children.find(c => c.name === (bgIsDark ? 'color=white' : 'color=black'));
const instance = variant.createInstance();

instance.resize(wordmarkW, wordmarkH);
instance.x = X;                                              // bottom-left placement
instance.y = canvasH - X - wordmarkH;
```

### Build recipe — full lockup

```javascript
const canvasW = 1080;
const canvasH = 1350;
const MEDIUM  = 'digital';
const minDim  = Math.min(canvasW, canvasH);
const X       = Math.round(minDim * 0.08);
const epFloor = MEDIUM === 'digital' ? 20 : 12;
const cornerR    = Math.round(X * 0.22);
const clusterGap = Math.round(X * 0.5);
const wordmarkW  = Math.round(X * (492 / 138));
const bgIsDark   = false;

const SQUARE_SET_KEY   = '8aa7d855955618d4b44821f577443de9de00a0eb';
const WORDMARK_SET_KEY = 'ea8c642aa816c04f75bb326581c12a90e51c833e';

const squareSet   = await figma.importComponentSetByKeyAsync(SQUARE_SET_KEY);
const wordmarkSet = await figma.importComponentSetByKeyAsync(WORDMARK_SET_KEY);
const inkRGB = bgIsDark ? { r: 1, g: 1, b: 1 } : { r: 0.02, g: 0.02, b: 0.02 };

// 1. Symbol — always color=black; add white stroke on dark bg
const sym = squareSet.children.find(c => c.name === 'color=black').createInstance();
sym.resize(X, X);
const innerSq = sym.findOne(n => n.type === 'FRAME' && n.name === 'square');
if (innerSq) {
  innerSq.cornerRadius = cornerR;
  if (bgIsDark) {
    innerSq.strokes = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    innerSq.strokeWeight = 1;
    innerSq.strokeAlign = 'INSIDE';
  }
}

// 2. Entry-points text
const entrySize = Math.max(epFloor, Math.round(X * 0.245));
const entryLH   = Math.round(X * 0.36);
await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Regular' });
const entry = figma.createText();
entry.fontName = { family: 'Qonto Sans', style: 'Regular' };
entry.fontSize = entrySize;
entry.lineHeight = { unit: 'PIXELS', value: entryLH };
entry.characters = 'Business Account\nCompany Creation\nInvoicing';
entry.fills = [{ type: 'SOLID', color: inkRGB }];
entry.textAlignHorizontal = 'LEFT';
entry.resize(entry.width, X);

// 3. Divider
const divider = figma.createRectangle();
divider.resize(1, X);
divider.fills = [{ type: 'SOLID', color: inkRGB }];

// 4. Wordmark
const wmVariant = wordmarkSet.children.find(c => c.name === (bgIsDark ? 'color=white' : 'color=black'));
const wordmark = wmVariant.createInstance();
wordmark.resize(wordmarkW, X);

// 5. Compose — symbol at left canvas margin, cluster at right, auto gap between
const baselineY = canvasH - X - X;

sym.x = X;
sym.y = baselineY;

const rightEdge = canvasW - X;
wordmark.x = rightEdge - wordmarkW;
wordmark.y = baselineY;
divider.x = wordmark.x - clusterGap - 1;
divider.y = baselineY;
entry.x = divider.x - clusterGap - entry.width;
entry.y = baselineY;

// Sanity: verify auto gap hasn't collapsed
const autoGap = entry.x - (sym.x + X);
if (autoGap < X) {
  console.warn(`Full lockup does not fit: auto gap = ${autoGap}px < X (${X}). Drop to wordmark + entry points.`);
}
```

**Key pitfalls:**
- Auto gap, not fixed gap — symbol anchors left-margin; cluster anchors right-margin.
- Squircle: `instance.cornerRadius = N` on the top-level is silently ignored. Reach the inner `square` frame via `findOne`.
- Dark background: keep `color=black` for the symbol + add 1 px white stroke. Never use `color=white` for the symbol.

### Manual lockup — entry-points as Figma text node

The asset-library entry-points cluster SVG ships entry-points as vector path data, which renders fuzzy at ~21 px. For Figma marketing comps, build the lockup manually with entry-points as a Figma TEXT node.

**Bottom-right cluster (horizontal-left):**

```javascript
await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Regular' });

const X     = Math.round(Math.min(canvasW, canvasH) * 0.08);
const halfX = Math.round(X / 2);
const ink   = bgIsDark ? { r: 1, g: 1, b: 1 } : { r: 0.02, g: 0.02, b: 0.02 };

// 1. Wordmark — vector
const wordmark = figma.createNodeFromSvg(WORDMARK_SVG);
wordmark.resize(Math.round(X * 82 / 24), X);
wordmark.x = canvasW - X - wordmark.width;
wordmark.y = canvasH - X - X;
parent.appendChild(wordmark);

// 2. Divider — 1 × X rectangle (NOT a Figma LINE)
const divider = figma.createRectangle();
divider.resize(1, X);
divider.fills = [{ type: 'SOLID', color: ink }];
divider.x = wordmark.x - halfX - 1;
divider.y = wordmark.y;
parent.appendChild(divider);

// 3. Entry-points — Figma text node (NOT vector path data)
const epText = figma.createText();
epText.fontName = { family: 'Qonto Sans', style: 'Regular' };
epText.characters = 'Business account\nFinance management\nCompany creation';
epText.fontSize = Math.max(20, Math.round(X * 0.245));
epText.lineHeight = { unit: 'PIXELS', value: Math.round(X * 0.36) };
epText.fills = [{ type: 'SOLID', color: ink }];
epText.textAutoResize = 'WIDTH_AND_HEIGHT';
epText.textAlignHorizontal = 'LEFT';
parent.appendChild(epText);
epText.x = divider.x - halfX - epText.width;
epText.y = wordmark.y + Math.round((X - epText.height) / 2);
```

**Figma vs non-Figma:**

| Surface | Lockup construction |
|---|---|
| Figma marketing comps | Manual: wordmark SVG + divider rect + entry-points TEXT node |
| HTML / React | Single asset-library cluster SVG |
| Decks, Canva, exported PDFs | Single asset-library cluster SVG |
| Print exports | Single asset-library cluster SVG |

---

## Composition archetypes

Six canonical patterns. Every Qonto marketing composition belongs to one. Brand foundations and shared rules in `SKILL.md § Composition`.

| Archetype | Pattern | Best for |
|---|---|---|
| **A. Stack — text then visual** | Text band top → `1X` → visual band → `2X` → lockup | Message-first product announcements, feature reveals |
| **B. Stack — visual then text** | Visual band top → `1X` → text band → `2X` → lockup | Visual sells, headline punctuates |
| **C. Split — text ↔ visual** | Landscape: text half / visual half. Portrait: collapses to A or B. `2X` clearance before the lockup applies to both halves. | KPI + supporting image, testimonial + face |
| **D. Overlay — text on full-bleed image** | Image bleeds edge-to-edge; text block + lockup sit on top within `X` margins. Dark scrim mandatory where copy lands. **Subject-aware:** copy never crosses a recognisable face. D-classic = copy top, lockup bottom. D-reversed = lockup top, copy bottom. | Atmospheric, photo-led campaigns |
| **E. Overlay — text card on bleed image** | Image full-bleed; solid-colour card (white) with headline + lockup, `X` margin and `X` internal padding. Card is structural → `cornerRadius = 0`. | Photo + crisp readable message |
| **F. Layered — floating objects + text** | Text top → `2X` → three overlapping cascading objects → `2X` → lockup | Editorial, object-of-the-week, feature-rich storytelling |

**Shared rules:**
- Outer margin `X` on all sides (full-bleed images in D and E are the exception — images bleed, text and lockup do not).
- Every content band ends at `lockupY − ≥1X` (default `2X`).
- Photography from the asset library — don't generate or swap in arbitrary imagery.
- If a photo is activity-dense with no calm region for text, move to A, B, or C — don't force D or E.
- Copy on photo always gets a dark gradient scrim where copy lands.
- Structural objects sharp; floating content objects rounded.

---

## Composition — Figma build recipes

### Archetype D — scrim recipe (full-bleed photo with copy)

```javascript
// Place photo full-bleed first, then add scrim and text on top
const photo = figma.createRectangle();
photo.resize(canvasW, canvasH);
// figma_set_image_fill handles the raster photo

// Scrim — dark gradient over the text zone
const scrim = figma.createRectangle();
scrim.resize(canvasW, Math.round(canvasH * 0.6));   // covers top 60%
scrim.x = 0;
scrim.y = 0;
scrim.fills = [{
  type: 'GRADIENT_LINEAR',
  gradientTransform: [[0, 1, 0], [-1, 0, 1]],     // top → bottom
  gradientStops: [
    { position: 0,   color: { r: 0.02, g: 0.02, b: 0.02, a: 0.7 } },
    { position: 1,   color: { r: 0.02, g: 0.02, b: 0.02, a: 0 } },
  ]
}];
// Text and lockup sit above scrim layer
```

### Archetype — composition with headline, subtitle, and full lockup

```javascript
const canvasW = 1080;
const canvasH = 1350;
const tier = 'medium';    // 'small' | 'medium' | 'large'
const bgIsDark = false;

const X = Math.round(Math.min(canvasW, canvasH) * 0.08);
const inkRGB = bgIsDark ? { r: 1, g: 1, b: 1 } : { r: 0.02, g: 0.02, b: 0.02 };

const multipliers = { small: 1, medium: 1.25, large: 1.5 };
const headlineSize = Math.round(X * multipliers[tier]);
const subtitleSize = Math.round(X * 0.5);

await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Bold' });
await figma.loadFontAsync({ family: 'Qonto Sans', style: 'Regular' });

const textWidth = canvasW - 2 * X;

const headline = figma.createText();
headline.fontName = { family: 'Qonto Sans', style: 'Bold' };
headline.fontSize = headlineSize;
headline.lineHeight = { unit: 'PERCENT', value: 98 };
headline.letterSpacing = { unit: 'PERCENT', value: 0.5 };
headline.resize(textWidth, headline.height);
headline.x = X;
headline.y = X;
headline.fills = [{ type: 'SOLID', color: inkRGB }];

const subtitle = figma.createText();
subtitle.fontName = { family: 'Qonto Sans', style: 'Regular' };
subtitle.fontSize = subtitleSize;
subtitle.lineHeight = { unit: 'PERCENT', value: 110 };
subtitle.resize(textWidth, subtitle.height);
subtitle.x = X;
subtitle.y = headline.y + headline.height + Math.round(X * 0.5);
subtitle.fills = [{ type: 'SOLID', color: inkRGB }];
// Then place the lockup per §Logo build recipe above
```

---

## Object styles — Figma build recipe

See the full archetype F recipe (layered floating objects + Beautiful Shadows shadow stack) in the session archive. The shadow stack for primary-tier cards:

| Layer | Y offset | Blur | Opacity |
|---|---|---|---|
| 1 | 10 | 23 | 10% |
| 2 | 41 | 41 | 9% |
| 3 | 93 | 56 | 5% |
| 4 | 166 | 66 | 1% |
| 5 | 259 | 73 | 0% |

All layers `#050505`, spread `0`. Calibrated for a `370 × 370` reference tile — regenerate with the Beautiful Shadows plugin when the object size changes significantly.

---

## Iconography — Figma build

### Icon decision ladder

Walk top-down. Stop at the first rule that resolves.

1. Look up the icon in `Icons/` by composing `icon_<action>_outlined.svg` (or `_filled` if the SOT-named fill exception applies). If the file exists, use it.
2. Filename doesn't resolve? Browse the gallery for the closest semantic match. If no version exists, name the gap — don't substitute.
3. Pick the render size: 16 / 24 / 40 / 48 / 64 px. Verify against X and the adjacent type size.
4. Pick the ink: black on light, white on dark. Match the surrounding type's ink.
5. Icon needs a frame? Wrap in app-square at `2 ×` icon size, fill `neutral/200` or transparent, `cornerRadius = 0.14 × short_side`.
6. Outside Figma? Fetch from `Icons/` in the asset library.
7. Material doesn't fit and no in-house override exists? Say so, name the gap, stop.

### Figma recipe — icon sizing + bounding box

```javascript
await figma.loadAllPagesAsync();
let page = figma.root.children.find(p => p.name === 'Iconography Test');
if (!page) { page = figma.createPage(); page.name = 'Iconography Test'; }
await figma.setCurrentPageAsync(page);

const canvasW = 1080, canvasH = 1350, X = 86;

const section = figma.createSection();
section.name = 'Iconography Test';
section.x = 0; section.y = 0;
section.resizeWithoutConstraints(1200, 1500);
page.appendChild(section);

// Fetch icon SVG from asset library, then:
const iconNode = figma.createNodeFromSvg(SVG_STRING);
iconNode.resize(40, 40);   // pick from 16/24/40/48/64 scale

// Bounding box (app-square)
const box = figma.createFrame();
const boxSize = 40 * 2;   // icon-to-box ratio 0.5×
box.resize(boxSize, boxSize);
box.cornerRadius = Math.round(0.14 * boxSize);
box.cornerSmoothing = 0;
box.fills = [{ type: 'SOLID', color: { r: 0.96, g: 0.96, b: 0.96 } }]; // neutral/200
box.appendChild(iconNode);
iconNode.x = (boxSize - 40) / 2;
iconNode.y = (boxSize - 40) / 2;
```

---

## Slide deck

A 16:9 internal-working medium. **Surface:** 1920 × 1080 px.

**Margin anchor:** `slide_M = 0.03 × min(W, H) = 32 px`. Slide deck is the only medium that overrides the universal X-system anchor — this is intentional. Slide deck X = 32 px; canvas-level X would be 86 px, which is too dominant at this reading distance.

**Canon:** the 2026 template (file `N59gmGWEzDfEab5byfnCoY`). The 235-series and v1 templates are deprecated.

### 1. Slide types

| Type | Surface | Wordmark | Composition |
|---|---|---|---|
| **Cover** | White | Bottom-left | Display headline + date pill. One per deck. |
| **Section divider** | Black | None | Number-left + title-right at top edge. |
| **Agenda** | White | None | Numbered list of sections. |
| **Content master** | White | None | Narrative split-panel, photo split-panel, single-column. |
| **KPI grid** | White | None | 3- or 4-column metric cards. |
| **Statement** | White or black | None | Full-bleed typographic moment. |

### 2. Margin

Every slide element respects a **32 px margin** from each canvas edge.

### 3. Logo placement

| Slide type | Bottom-left | Bottom-right |
|---|---|---|
| **Cover** | Qonto wordmark | Multiplier |
| **All other slides** | "Qonto \| confidential" | Multiplier |

**Sizing:** logo height = `slide_M = 32 px`. Wordmark width from 3.57:1 aspect ratio. Multiplier = `32 × 32` squircle with `cornerRadius = 7 px`.

**Color inversion:** white canvas → `#050505`; black canvas → `#FFFFFF`.

### 4. Footer

- **Cover footer:** wordmark BL + multiplier BR.
- **All-other footer:** "Qonto \| confidential" BL + multiplier BR.

"Qonto \| confidential": Qonto Sans Regular, **20 px**, `neutral/300` (`#CCCCCC`). No "©", no period. Lowercase "confidential".

### 5. Display tier

Reserved for cover headlines, section divider titles, and statement slides only.

- **Size:** 160–200 px (canonical: Title style at 200 px).
- **Weight:** Qonto Sans Light (canonical) or Regular — both permitted. Bold and Semi Bold reserved for content headers.
- **Color:** `#050505` on white, `#FFFFFF` on black.

### 6. Type scale — 12 canonical text styles

| Style | Size | Weight | Use |
|---|---|---|---|
| **Note** | 20 px | Regular | Footer "Qonto \| confidential"; team · role on photo cards |
| **Body 3** | 24 px | Regular | Tertiary body copy |
| **Caption** | 26 px | Regular | Person name on photo cards in tight layouts |
| **Body 2** | 30 px | Regular | Secondary body copy |
| **Body 1** | 36 px | Regular | Body copy, date pill text, slide label |
| **Pill text** | 40 px | Light | Semantic pill labels in comparison cards |
| **Header 3** | 48 px | Semi Bold | Smaller emphatic header |
| **Header 2** | 68 px | Semi Bold | Medium emphatic header |
| **List** | 72 px | Regular | Agenda items, section heading, list rows |
| **Header 1** | 100 px | Semi Bold | Large emphatic header |
| **Section title** | 160 px | Regular | Section divider number + right-aligned title |
| **Title** | 200 px | Light | Cover headline, statement (display tier) |

Apply via `node.setTextStyleIdAsync(styleId)` rather than inline font properties.

**Slide label vs Section heading.** Slide label (`Body 1`, top-left, describes slide type — "Agenda", "Product update") vs Section heading (`List`, top-left, names the section — "Q1 Results"). Different sizes, different semantic roles.

### 7. Section divider layout

Full-bleed black canvas. Number (Section title, 160 px) top-left at 32 px margin. Title (Section title, 160 px) right-aligned at 32 px right margin, same vertical baseline.

### 8. Pill / chip

Semantic labels within slides. Pill shape (cornerRadius ≥ half the short axis). Colors from the Qonto Brand Kit SOT component library (`Qonto Brand Kit — SOT`, file `9MBP81zVpoj7hlLS8gf4eV`).

### 9. KPI / metric cards

Hero number uses Header 1 (100 px, Semi Bold). Label beneath uses Body 1 (36 px, Regular). KPI cards sit in a 3- or 4-column grid at 32 px margin and `0.5 × slide_M = 16 px` gutters.

### 10. People & celebration slides

Photo card anatomy: photo (app-square, `cornerRadius ≈ 0.14 × short_side`), name (Caption, 26 px, Regular), role + team (Note, 20 px, Regular). Keep photo cards uniform in size within a row.

### 11. Device mockup slides

Device frame sourced from the SOT component library. Screen content fills the device's viewport area. Maintain the device's native aspect ratio — never stretch.

### 12. Comparison cards

Two-column layout. Semantic pill (green / red / neutral) at top of each column labels the comparison direction. Body copy below. Cards are secondary-tier (flat fill, no shadow).

### 13. Color, surface, and scrim

- Slide surfaces: white (default) or black (section dividers and statements only).
- Photo backgrounds: dark gradient scrim mandatory where copy lands (same rule as marketing).
- Gradient panels: one of the four general-brand gradients as a supporting element only.

### 14. Vertical rhythm

Content bands sit on the 32 px grid. Adjacent bands separated by `slide_M = 32 px`. No arbitrary vertical gaps.

### 15. No decorative bars

No horizontal rules, separators, or decorative bars between content sections. Whitespace does that job.

### 16. Anti-patterns

- Do not use the deprecated 235-series or v1 templates.
- Do not set type outside the 12 canonical styles.
- Do not use the display tier (160/200 px) on content masters, agendas, or KPI grids.
- Do not introduce product palette colors into slides (dataviz exception still applies).
- Do not add shadow to secondary-tier cards.
- Do not use horizontal rules as decorative elements.
- Do not place content outside the 32 px margin.

### 17. Slide-deck decision ladder — for AI agents

1. **What type of slide?** Cover / section divider / agenda / content master / KPI grid / statement → set surface color and logo placement.
2. **What text tier?** Match the slide type to the type scale (§6). Never set a custom size.
3. **What goes in the footer?** Cover → wordmark + multiplier. All others → "Qonto | confidential" + multiplier.
4. **Is there photography?** → Add scrim. No exceptions.
5. **Is the canvas black?** → Invert all ink to white. Keep `color=black` symbol + white stroke.
6. **Does the composition feel overcrowded?** → Remove a content band, not the margin.

### 18. Component library — slide deck

Subscribe to these libraries before placing any slide component (Assets panel → Libraries):

| Library | File / ID | What it covers |
|---|---|---|
| **Logos - Library** | (brand library) | Wordmark, flower, badge, square logos |
| **Qonto Brand Kit — SOT** | `9MBP81zVpoj7hlLS8gf4eV` | KPI cards, photo card, semantic pill, date pill, footer block, gradients |
| **In-app assets** *(optional)* | (product library) | Product UI screenshots (only if deck includes them) |

Without the SOT subscription, any component placement will fail with `Could not find a published component with the key …`.

---

## Reference compositions

These are fully worked Figma builds demonstrating SKILL foundations applied end-to-end. Each composition is also a test: if the build produces a result that doesn't match the SKILL rules, the SKILL has a gap.

### 1. Square Instagram post — two-card row + full horizontal lockup

**Canvas:** 1080 × 1080. **Archetype:** F (layered floating objects + text). **X = 86.**

Build sequence:
1. White canvas frame, `cornerRadius: 0`.
2. Headline (Bold, tier M = 108 px, 98% LH, +0.5% tracking) at `x: X, y: X`.
3. Subtitle (Regular, 43 px, 110% LH) at `y: headline.y + headline.height + X/2`.
4. Two secondary-tier cards (gray-50, `cornerRadius: X/2 = 43`) in a row at `y: subtitle.y + subtitle.height + X`, gutter `0.5X = 43`.
5. Full lockup at bottom per §Logo build recipe.

### 2. Instagram Story — archetype D-reversed (lockup top, copy bottom)

**Canvas:** 1080 × 1920. **Archetype:** D-reversed (subject in upper portion). **X = 86.**

Build sequence:
1. Full-bleed photo.
2. Dark gradient scrim — top 40% (photo header zone).
3. Horizontal lockup at top: cluster top-LEFT (`x: X, y: X`), symbol top-RIGHT (`x: canvasW - X - X, y: X`). White ink.
4. Copy block at bottom: headline (white, tier L = 129 px) at `y: canvasH - X - lockupH - 2X - headlineH`.
5. Safe areas: top 250 px and bottom 350 px kept free.

### 3. LinkedIn paid ad — archetype C split (text + photo) + formal register

**Canvas:** 1200 × 627. **Archetype:** C (split). **X = 50.** EP at 12 px — below 20 px digital floor → wordmark alone (per §Logo.1).

Build sequence:
1. Canvas split at `canvasW / 2 = 600 px`. Left half: white. Right half: photo.
2. Headline (Bold, tier M = 63 px) at `x: X, y: X` within the text half.
3. Subtitle (Regular, 25 px) at `y: headline.y + headline.height + X/2`.
4. Bisected-canvas lockup: wordmark at `x: X, y: canvasH - X - X` (bottom-left of text half). Symbol at `x: 600 - X - X, y: canvasH - X - X` (at the half-canvas divide, `X` inset).
5. Dark scrim on the right half where the image bleeds to the lockup strip.

---

## Asset library

**URL:** [qontobrandassetlibrary.netlify.app](https://qontobrandassetlibrary.netlify.app/)

### Raw asset URL pattern

```
https://qontobrandassetlibrary.netlify.app/api/assets/raw/<percent-encoded-path>
```

Examples:
```
https://qontobrandassetlibrary.netlify.app/api/assets/raw/Logo/qonto-wordmark-black.svg
https://qontobrandassetlibrary.netlify.app/api/assets/raw/Icons/icon_lightbulb_outlined.svg
https://qontobrandassetlibrary.netlify.app/api/assets/raw/Photography/lifestyle-01.jpg
```

Spaces in paths → `%20`. Slashes are literal. The gallery UI lists all available paths.

### Validated fetch pattern

```python
import urllib.request, json

BASE = "https://qontobrandassetlibrary.netlify.app/api/assets/raw/"

def fetch_asset(path: str, dest: str):
    url = BASE + urllib.parse.quote(path, safe='/')
    urllib.request.urlretrieve(url, dest)
    return dest

# Example
fetch_asset("Logo/qonto-wordmark-black.svg", "/tmp/wordmark-black.svg")
```

### Filename conventions

| Folder | Pattern | Examples |
|---|---|---|
| `Logo/` | `qonto-<config>-<color>.svg` | `qonto-wordmark-black.svg`, `qonto-symbol-multiplier-black.svg` |
| `Logo/` (lockup with EP) | `qonto-logo-category-entry-points-<orientation>-<lang>.svg` | `qonto-logo-category-entry-points-horizontal-right-EN.svg` |
| `Icons/` | `icon_<name>_<style>.svg` | `icon_lightbulb_outlined.svg`, `icon_chat_filled.svg` |
| `Photography/` | descriptive slug | `lifestyle-01.jpg` |
| `Gradients/` | `gradient-<name>.png` | `gradient-golden-hour.png` *(folder pending)* |

### Within a Figma session — reuse by imageHash

When you've already placed a photo in the session and need it again, reuse the `imageHash` rather than fetching twice:

```javascript
const existingFill = existingNode.fills.find(f => f.type === 'IMAGE');
if (existingFill) {
  newNode.fills = [{ type: 'IMAGE', imageHash: existingFill.imageHash, scaleMode: 'FILL' }];
}
```

---

## Figma operational notes

### Dynamic-page sessions

```javascript
await figma.loadAllPagesAsync();
await figma.setCurrentPageAsync(targetPage);
const node = await figma.getNodeByIdAsync(id);   // always async
```

Never use synchronous `figma.currentPage.findOne` without first calling `loadAllPagesAsync` and `setCurrentPageAsync`.

### Chunking long builds

A single `figma_execute` that imports multiple component sets **and** builds multiple frames reliably exceeds the 25s plugin timeout. Split it:
1. Setup + import component sets → note returned IDs.
2. Build each frame in its own call using `await figma.getNodeByIdAsync(id)`.

### Screenshot safety

Use `figma_capture_screenshot` (size-capped, safe) not `figma_take_screenshot` (can exceed 2000 px image budget and crash long sessions). The Figma session safety hook in `hooks/hooks.json` blocks the unsafe variants automatically.

### Auto-layout in Figma comps

Use auto-layout for every structural band that stacks content predictably: text-blocks (headline + subtitle), card internals (icon-box + title + body), lockup bands (`SPACE_BETWEEN`), grid rows (`0.5X` itemSpacing). Reserve absolute positioning for: (a) canvas-level placement of bands on 1080-class compositions, and (b) text overlays on full-bleed photo cards.
