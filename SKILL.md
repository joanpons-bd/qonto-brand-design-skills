---
name: qonto-design-skills
description: "The single source of truth for the Qonto brand. Contains brand personality, universal rules, the marketing/product split, and a routing table to territory-specific guideline files. Load this skill for any work involving Qonto's brand — visual, written, or product-related."
---

# Qonto design skills

> Version: 1.0 | Last updated: 2026-03-26 | Status: living document

You are working for Qonto. This skill is the single source of truth for the Qonto brand. It contains the universal rules that apply to everything, and a routing table that points to detailed territory files for specific domains.

Always load this file first. Then load the relevant territory file(s) for the task at hand.

---

## Brand identity

### Who we are

Qonto is the European leader in business finance management for SMEs and freelancers. We serve over 500,000 businesses across France, Germany, Italy, and Spain.

### Brand personality

Every piece of work for Qonto should feel like it comes from the same person — confident, clear, and warm without being casual.

- **To the point** — clear, concise, no unnecessary jargon. Every word earns its place.
- **Playful and spirited** — professional yet approachable. We don't take ourselves too seriously but we take our craft seriously.
- **At ease** — calm, smooth, frictionless. The opposite of anxious or cluttered.
- **Always attentive** — empathetic and contextually aware. We understand what our users are going through.

### The marketing / product split

This is the most important architectural rule in the brand:

- **Marketing and brand communications** use black, white, and the gray scale only. Restraint is the strategy. In a world of visual noise, Qonto stands out by stripping back.
- **Product** uses the full expressive palette — Blueberry, Mint, Plum, Sakura, Peach, Mustard — plus semantic colors for UI feedback.

Product colors should never appear in brand communications. Marketing's black-and-white palette should not limit product's expressive range. When in doubt about which context you're in, ask.

---

## Universal rules

These apply to every output, regardless of territory.

### Typography

- **Primary font:** Qonto Sans (custom typeface)
- **Fallback:** Manrope, then Arial
- **Default weight:** Regular (400)
- **Case:** Always sentence case. Never ALL CAPS except for short category labels (e.g., small uppercase labels above a main title)
- **Minimum body size:** 14px

### Layout principles

- Generous white space — never overcrowd elements
- Rounded corners on cards, images, and containers (16-24px radius)
- Clear grid alignment with consistent padding
- Group related content with subtle gray backgrounds

### Anti-patterns (never do this)

- No ALL CAPS headings
- No busy backgrounds or decorative patterns
- No sharp/square corners on cards or images
- No colors outside the defined palette
- No pure `#000000` backgrounds in product (use `#1A1A1A`)
- No generic stock photography — always warm, diverse, real business situations
- No Qonto wordmark + symbol displayed side by side
- No accent lines under titles

---

## Routing table

Load the relevant territory file(s) based on the task. Multiple files can be loaded simultaneously if the task spans territories.

| Territory | File | Load when |
|---|---|---|
| Color | `territories/color.md` | Any work involving color decisions, palettes, tokens, or accessibility |
| Photography | `territories/photography.md` | Selecting, directing, reviewing, or generating photography (includes AI generation prompts) |
| Typography | `territories/typography.md` | Type scale, font usage, hierarchy, or typographic layout |
| Logo | `territories/logo.md` | Logo usage, clear space, sizing, co-branding, or placement |
| Tone of voice | `territories/tone.md` | Writing copy, headlines, UI text, error messages, or any written content |
| Iconography | `territories/iconography.md` | Icon selection, creation, sizing, or usage |
| Object style | `territories/object-style.md` | 3D objects, card design, shape primitives, or gradient rules |
| UI snapshots | `territories/ui-snapshots.md` | Product UI representations in marketing, device mockups, or feature showcases |
| Composition | `territories/composition.md` | Layout grids, spacing, image placement, or visual hierarchy |
| Motion | `territories/motion.md` | Animation, transitions, video, or any moving content |

### Temporary / campaign territories

These are time-bound and can be added or removed without touching the core.

| Territory | File | Active |
|---|---|---|
| *(example)* Q4 2026 campaign | `campaigns/q4-2026.md` | Oct–Dec 2026 |

### How to add a new territory

1. Create a new `.md` file following the territory template (`templates/territory-template.md`)
2. Add a row to the routing table above
3. For campaigns, add to the "temporary / campaign territories" table with active dates
4. To deprecate, remove the row from the routing table. The file stays in Git history.

---

## For AI tools

When you receive this skill as context, follow these rules:

1. Read the brand personality section — it shapes tone and decision-making for everything.
2. Check the marketing / product split — determine which context you're working in before making any visual or tonal decisions.
3. Look at the routing table and load the territory file(s) relevant to the current task.
4. Apply the universal rules (typography, layout, anti-patterns) to all outputs.
5. If the task spans multiple territories, load all relevant files. Conflicts between territories should be resolved in favor of the more specific rule.
6. If you're unsure which territory applies, default to the universal rules and ask for clarification.
