[color.md](https://github.com/user-attachments/files/26928008/color.md)
# Color

> **Owner:** Brand Creative Direction
> **Last updated:** 2026-04-17
> **Status:** Live
> **Source:** Figma Brand Kit SOT — Color section + Qonto Gradient Tool plugin

Our palette is deliberately reduced to black and white. Black and white signals confidence, clarity, and focus. This isn't a limitation — it's a statement. It lets our product, photography, and content do the talking without visual noise.

---

## Primary palette

The brand lives in two colors only.

| Name | HEX | Usage |
|---|---|---|
| Primary black | `#050505` | Default text, backgrounds, UI elements |
| Primary white | `#FFFFFF` | Default text on dark, backgrounds, space |

---

## Grayscale

Our grayscale palette exists to support accessibility and usability. These neutral grays provide the range needed for UI hierarchy, borders, disabled states, and secondary text — without introducing color. Use these values to ensure sufficient contrast ratios across all touchpoints. They extend our black-and-white foundation into the functional details where nuance matters.

| Token | HEX |
|---|---|
| Neutral gray 900 | `#1A1A1A` |
| Neutral gray 800 | `#262626` |
| Neutral gray 700 | `#3D3D3D` |
| Neutral gray 600 | `#616161` |
| Neutral gray 500 | `#8F8F8F` |
| Neutral gray 400 | `#B8B8B8` |
| Neutral gray 300 | `#CCCCCC` |
| Neutral gray 200 | `#E0E0E0` |
| Neutral gray 100 | `#E8E8E8` |
| Neutral gray 50 | `#F5F5F5` |
| Neutral gray 25 | `#F9F9F9` |

---

## Rules — marketing

### Color in marketing

Marketing communications use **black and white only**. No product colors, no accent color. Gradients are the only exception — they provide a pop of color without anchoring the brand to any specific hex value.

### Color in typography

Always black or white. Never use any other color in typography.

### Gradients in marketing

Gradients are the perfect complement of a pure black and white brand framework. They provide a pop of color without anchoring the brand with any specific hex value. They should be used strategically and always as a supporting element — never as the primary visual.

---

## Rules — product

### Product color palette

This color palette is designed exclusively for product use. It serves functional purposes like highlighting key content, data visualization, and communicating status. Each color family supports a specific role within the interface — from semantic states like success, warning, and error to categorical distinctions in charts, graphs, and dashboards.

These colors are **never meant to be used in marketing or brand communications** unless they are leveraged for dataviz touch points.

#### Blueberry (accent family)

| Token | HEX | Role |
|---|---|---|
| Blueberry 1000 | `#163470` | Darkest — deep backgrounds |
| Blueberry 900 | `#2450B0` | Dark — emphasis |
| Blueberry 800 | `#3468D8` | **Accent** — key hero moments |
| Blueberry 100 | `#9CB8EC` | Light — subtle fills |
| Blueberry 50 | `#E0EAFB` | Lightest — backgrounds |

#### Mint

| Token | HEX |
|---|---|
| Mint 1000 | `#085C58` |
| Mint 900 | `#0E9088` |
| Mint 800 | `#18BEB0` |
| Mint 100 | `#70DCD0` |
| Mint 50 | `#D0F2EE` |

#### Plum

| Token | HEX |
|---|---|
| Plum 1000 | `#441E80` |
| Plum 900 | `#6A34BB` |
| Plum 800 | `#8C52E0` |
| Plum 100 | `#C49CE4` |
| Plum 50 | `#EEE0FA` |

#### Sakura

| Token | HEX |
|---|---|
| Sakura 1000 | `#7C1232` |
| Sakura 900 | `#B82050` |
| Sakura 800 | `#E03868` |
| Sakura 100 | `#F098B4` |
| Sakura 50 | `#FAE0E8` |

#### Peach

| Token | HEX |
|---|---|
| Peach 1000 | `#7C3600` |
| Peach 900 | `#B85000` |
| Peach 800 | `#E06808` |
| Peach 100 | `#F0AD68` |
| Peach 50 | `#FAE6D2` |

#### Mustard

| Token | HEX |
|---|---|
| Mustard 1000 | `#686000` |
| Mustard 900 | `#A89800` |
| Mustard 800 | `#D0C000` |
| Mustard 100 | `#E4DC58` |
| Mustard 50 | `#F8F5C8` |

#### Semantic colors

| Family | 1000 | 900 | 800 | 100 | 50 |
|---|---|---|---|---|---|
| Success | `#086430` | `#0E964A` | `#1CC060` | `#68DC9C` | `#D0F4DE` |
| Warning | `#704806` | `#B06A04` | `#E08A10` | `#F0C468` | `#FAF0DA` |
| Error | `#7C1C14` | `#BA2C22` | `#E44038` | `#F09890` | `#FAE0DC` |

### Accent color

The accent color is **Blueberry 800** (`#3468D8`). It should only be used in key hero moments that truly define the Qonto experience, like when completing a transfer or when typing a specific amount. Do not use it broadly.

### Colors in illustration

Illustrations represent specific UI components and flows — they should stay true to the actual experience instead of inventing abstract conventions. Color should follow the same direction, sticking to the source components. Embrace black, white, and grayscale; use status colors when needed; and use gradients to drive attention to any specific element.

Illustration palette: full grayscale (Neutral gray 25–900) + one gradient (Morning Veil) for focal attention.

---

## Gradients

Gradients are the perfect complement of a pure black and white brand framework. They provide a pop of color without anchoring the brand with any specific hex value.

They should be used strategically and always as a supporting element.

### Named palettes

Each gradient uses 5 curated color stops, blended in Oklab perceptual color space via simplex noise for organic, dawn-inspired results.

#### General use (brand, marketing, product)

| Name | Stops | CSS fallback |
|---|---|---|
| Golden Hour | `#7C1C14` → `#BA2C22` → `#E06808` → `#F098B4` → `#FAE6D2` | `linear-gradient(135deg, #7C1C14, #BA2C22, #E06808, #F098B4, #FAE6D2)` |
| Lavender Rise | `#441E80` → `#8C52E0` → `#E06808` → `#F098B4` → `#FAE0E8` | `linear-gradient(135deg, #441E80, #8C52E0, #E06808, #F098B4, #FAE0E8)` |
| Morning Veil | `#163470` → `#2450B0` → `#3468D8` → `#C49CE4` → `#EEE0FA` | `linear-gradient(135deg, #163470, #2450B0, #3468D8, #C49CE4, #EEE0FA)` |
| Daybreak | `#163470` → `#8C52E0` → `#E03868` → `#F0AD68` → `#FAE6D2` | `linear-gradient(135deg, #163470, #8C52E0, #E03868, #F0AD68, #FAE6D2)` |

#### AI-only (Qonto AI and AI agents — not for other uses)

| Name | Stops | CSS fallback |
|---|---|---|
| First Light | `#3468D8` → `#52A2D4` → `#70DCD0` → `#A0E7DF` → `#D0F2EE` | `linear-gradient(135deg, #3468D8, #52A2D4, #70DCD0, #A0E7DF, #D0F2EE)` |
| Solstice | `#E06808` → `#D89404` → `#D0C000` → `#E0B634` → `#F0AD68` | `linear-gradient(135deg, #E06808, #D89404, #D0C000, #E0B634, #F0AD68)` |
| Dusk Bloom | `#8C52E0` → `#B645A4` → `#E03868` → `#AE254D` → `#7C1232` | `linear-gradient(135deg, #8C52E0, #B645A4, #E03868, #AE254D, #7C1232)` |
| Afterglow | `#E44038` → `#E25420` → `#E06808` → `#E88A38` → `#F0AD68` | `linear-gradient(135deg, #E44038, #E25420, #E06808, #E88A38, #F0AD68)` |

### Gradient rendering

The canonical rendering uses WebGL with Oklab perceptual blending and simplex noise domain warping. The CSS `linear-gradient` values above are fallbacks only — they approximate the look but lack the organic noise texture.

For high-fidelity output, use the **Qonto Gradient Tool** Figma plugin, which provides:

- WebGL rendering with Oklab color interpolation
- Simplex noise for organic, non-linear color distribution
- Optional film grain texture
- Export at 512, 1024, 2048, or 1920×1080
- Randomization (shuffle) and animation (multiplier sweep)

### Gradient usage rules

**Do:**
- Use gradients as supporting visual elements (backgrounds, accents, hero embellishments)
- Keep gradients secondary to content — they complement, never dominate
- Use the CSS fallback when WebGL rendering isn't available
- Use Morning Veil as the gradient for illustration focal points

**Don't:**
- Use First Light, Solstice, Dusk Bloom, or Afterglow outside of Qonto AI / AI agent contexts
- Apply gradients to text
- Use gradients as the primary visual — they're always supporting
- Create custom gradients outside the 8 named palettes
- Anchor the brand to a specific hex value — gradients exist precisely to avoid this

---

## Negative cues (never do this)

- Using product colors in marketing (unless dataviz)
- Using any color other than black or white for typography
- Using accent color broadly — it's reserved for key hero moments only
- Creating custom gradients outside the 8 named palettes
- Using AI-reserved gradients (First Light, Solstice, Dusk Bloom, Afterglow) for non-AI purposes
- Adding color to illustrations beyond grayscale, status colors, and gradients
- Using pure `#000000` instead of `#050505` for black

---

## Tokens

```
Primary:
- black: #050505
- white: #FFFFFF

Grayscale:
- neutral-gray-900: #1A1A1A
- neutral-gray-800: #262626
- neutral-gray-700: #3D3D3D
- neutral-gray-600: #616161
- neutral-gray-500: #8F8F8F
- neutral-gray-400: #B8B8B8
- neutral-gray-300: #CCCCCC
- neutral-gray-200: #E0E0E0
- neutral-gray-100: #E8E8E8
- neutral-gray-50: #F5F5F5
- neutral-gray-25: #F9F9F9

Accent:
- accent: #3468D8 (Blueberry 800)

Product families: blueberry, mint, plum, sakura, peach, mustard
Semantic families: success, warning, error
Scale: 1000, 900, 800, 100, 50

Gradients (general):
- golden-hour: #7C1C14, #BA2C22, #E06808, #F098B4, #FAE6D2
- lavender-rise: #441E80, #8C52E0, #E06808, #F098B4, #FAE0E8
- morning-veil: #163470, #2450B0, #3468D8, #C49CE4, #EEE0FA
- daybreak: #163470, #8C52E0, #E03868, #F0AD68, #FAE6D2

Gradients (AI-only):
- first-light: #3468D8, #52A2D4, #70DCD0, #A0E7DF, #D0F2EE
- solstice: #E06808, #D89404, #D0C000, #E0B634, #F0AD68
- dusk-bloom: #8C52E0, #B645A4, #E03868, #AE254D, #7C1232
- afterglow: #E44038, #E25420, #E06808, #E88A38, #F0AD68

Gradient rendering:
- color-space: oklab
- noise: simplex-2d
- tool: Qonto Gradient Tool (Figma plugin)

Rules:
- marketing: black + white only, gradients as exception
- product: full palette, accent reserved for hero moments
- typography: black or white only, no exceptions
- illustration: grayscale + status colors + Morning Veil gradient
- AI-only gradients: First Light, Solstice, Dusk Bloom, Afterglow
```

---

## Source references

- Figma: [Color section — Brand Kit SOT](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT?node-id=2-18028)
- Tool: [Qonto Gradient Tool](https://github.com/qonto/qonto-gradient-tool) — Figma plugin for gradient generation
