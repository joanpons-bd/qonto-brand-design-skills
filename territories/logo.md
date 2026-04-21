# Logo, symbol & lockup

> **Owner:** Brand Creative Direction
> **Last updated:** 2026-04-17
> **Status:** Live

The Qonto wordmark is our primary brand identifier. It represents the product wherever Qonto shows up — across interfaces, marketing, documentation, and partnerships. The logo system includes the wordmark, the symbol (multiplier), and entry point configurations.

---

## Principles

- **Simplicity** — the logo should be instantly recognizable, even at small sizes
- **Consistency** — use only the approved configurations; never modify, recreate, or improvise
- **Legibility first** — when in doubt, choose the simpler configuration over the more complex one
- **Restraint** — the logo does not need to be the loudest element on the page

---

## Identity

### Wordmark

The Qonto wordmark is the primary expression of the brand. It should be used wherever space allows and is the default choice across product, marketing, and documentation.

**Versions:**
- Black wordmark on white/light backgrounds
- White wordmark on black/dark backgrounds

No other color variations are permitted.

### Symbol (multiplier)

The Qonto multiplier (flower symbol) is derived from the brand identity. As a standalone mark, it represents Qonto in compact or functional contexts.

**Usage contexts:**
- App icon (always in app-shaped container with dark background)
- Favicon
- Social media avatars
- Compact UI elements where the wordmark doesn't fit

The symbol always appears in an app-shaped container (rounded square with dark background). It is never used as a freestanding shape without the container in production contexts.

### Entry points

Entry points are service descriptors that appear alongside the logo to communicate specific Qonto offerings: Business Account, Company Creation, Invoicing, etc.

**Configuration:** Symbol + Entry points text + Divider + Wordmark

We recommend using entry points in all external-facing materials where the audience may not know what Qonto does.

---

## Rules — shared

### Clear space

Clear space is the required amount of space around the logo to maximize its visibility and impact.

**Wordmark clear space:** Use the x-height of the wordmark as the minimum clear space on all sides. The x-height is measured from the baseline to the top of flat lowercase letters (like the "o" in Qonto).

**Symbol clear space:** Use the same principle — the clear space around the symbol equals the padding defined by the container.

Never place other elements (text, images, other logos) within the clear space zone.

### Scalability

When scaling the logo, always ensure the legibility is not compromised.

**Logo and Logo + symbol**

Minimum size:
- On screen: logo height is 24px
- In print: logo height is 0.25 in

These minimums apply to both the wordmark alone and the wordmark + symbol lockup. Below 24px on screen, use the symbol only (favicon, app icon).

**Entry points**

When the logo includes entry points, the entry point text becomes the legibility constraint. The logo and symbol resize proportionally based on the entry point minimum font size.

Minimum size:
- On screen: entry point font size is 12px
- In print: entry point font size is 8pt

The logo and symbol scale proportionally — their size is always derived from the entry point text size, maintaining the fixed ratio defined in the lockup.

If the layout cannot accommodate 12px entry point text, drop the entry points and use the logo or logo + symbol configuration instead.

### Color

The logo exists in two color modes only:

- **Black (#050505)** on white or light backgrounds
- **White (#FFFFFF)** on black or dark backgrounds

No gradients, no brand colors, no outlines, no effects. The logo is always solid, single-color.

### Placement

The logo is typically placed in corners (bottom-left, bottom-right) or centered at the top of layouts. Placement depends on the composition, but the clear space rules always apply regardless of position.

---

## Rules — marketing

- Use the wordmark as the primary logo in all marketing materials
- Entry points should appear in external-facing materials where audience context is needed
- On dark backgrounds (OOH, campaigns), use the white version
- The logo should never compete with the headline — it anchors the composition, it doesn't dominate it
- In co-branding situations, ensure equal visual weight between the Qonto logo and the partner logo

### Co-branding

When the Qonto logo appears alongside a partner brand:
- Maintain equal visual weight (similar height)
- Separate with a vertical divider or adequate spacing
- Both logos follow their own clear space rules
- Never lock the logos into a single combined mark

---

## Rules — product

- Use the symbol (multiplier) in the app icon, loading states, and compact UI contexts
- The wordmark appears in navigation bars and headers where space allows
- In the product, the logo follows the same black/white rule — no colored versions
- Favicon uses the symbol only, at the smallest sizes

---

## Negative cues (never do this)

- Never rotate the logo
- Never apply effects (shadows, glows, outlines, 3D)
- Never slant, stretch, or skew
- Never apply multiple colors
- Never use in low resolution
- Never combine the symbol and wordmark side by side (use the approved lockup configurations only)
- Never modify or redraw the letterforms
- Never place the logo on busy or low-contrast backgrounds where legibility is compromised
- Never use the symbol without its app-shaped container in production

---

## Tokens

```
Logo specifications:
- wordmark-color-light: #050505
- wordmark-color-dark: #FFFFFF
- symbol-container-bg: #050505
- symbol-container-radius: app-shaped (iOS-style squircle)
- min-height-screen: 24px
- min-height-print: 0.25in
- entry-point-min-font-screen: 12px
- entry-point-min-font-print: 8pt
- clear-space: x-height of wordmark
```

---

## Resources

| Resource | Description |
|---|---|
| `assets/qonto-wordmark.svg` | Wordmark in black (SVG) |
| `assets/qonto-flower.svg` | Symbol/multiplier in white (SVG) |
| [Figma — Logo page](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=2-17876) | Full visual reference with all configurations and examples |

## Source references

- Figma: [Qonto Brand Kit SOT — Logo](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=2-17876)
