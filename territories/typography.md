[typography.md](https://github.com/user-attachments/files/26927969/typography.md)
# Typography

> **Owner:** Brand Creative Direction
> **Last updated:** 2026-03-26
> **Status:** Live

Qonto Sans is our proprietary typeface. It should not be combined with legacy versions or alternative typefaces unless explicitly defined in a specific guideline. This territory covers the font system, hierarchy rules, composition principles, and craft quality standards.

---

## Principles

- **Accessibility first** — improved clarity makes our content and financial data easier to read
- **Balanced brand voice** — warmer details feel more human while staying professional
- **Design flexibility** — 5 weights and rich glyphs enable better hierarchy and flexibility
- **Confidence, not loudness** — hierarchy should feel assured, never overloaded with signals

---

## Rules — shared

### Font family

**Primary:** Qonto Sans (proprietary, internal use only, `.otf` format)
**Fallback 1:** Manrope (Google Font) — use when Qonto Sans is unavailable
**Fallback 2:** Arial — system font, last resort

**Weights:** 5 weights, each with roman and italic:

| Weight | Name | CSS value | Usage |
|---|---|---|---|
| Light | Qonto Sans Light | 300 | Subtle UI elements, captions |
| Regular | Qonto Sans Regular | 400 | Default body text |
| SemiBold | Qonto Sans SemiBold | 600 | Emphasis, labels, navigation |
| Bold | Qonto Sans Bold | 700 | Section headings, strong emphasis |
| Black | Qonto Sans Black | 900 | Hero headlines, display text |

**Color:** Black-and-white palette. Primary text color is `#050505` (HEX) / CMYK 50 50 50 100.

### Character set

Qonto Sans includes: Latin letters (full European language support), numbers, punctuation, currency symbols, math symbols, arrows, and the Qonto Multiplier glyph.

### Case

**Sentence case is the default.** Capitalize only the first word and proper nouns. This applies everywhere — headlines, body, UI labels, navigation.

**Do:**
- "A brand to serve small businesses with big ideas."
- "Get started with Qonto"

**Don't:**
- "A Brand To Serve Small Businesses With Big Ideas." (title case)
- "GET STARTED WITH QONTO" (all caps)

---

## Rules — marketing

### Hierarchy roles

A clear system prevents arbitrary decisions. Adjustments to adapt to different media are fine, but the overall look and hierarchy should remain consistent.

| Role | Weight | Line height | Letter spacing | Usage |
|---|---|---|---|---|
| Headline | Bold / Black | 98% | +0.5% | Hero text, campaign headlines, display |
| Subtitle | SemiBold | 110% | +0.5% | Section intros, supporting headlines |
| Body | Regular | 130% | 0% | Running text, descriptions, long-form |
| Caption | Light / Regular | 130% | 0% | Labels, metadata, fine print |

### Line lengths

Reading comfort is influenced by rhythm. On large screens, avoid excessively wide text blocks.

**Optimal:** 45–75 characters per line, including spaces.

Too short (under 45) creates choppy reading. Too long (over 75) causes eye fatigue.

### Alignment

**Left-aligned text** is the most readable for Western languages. This is the default.

- Headlines: left or center alignment
- Body text: always left-aligned
- Right alignment: avoid (only for specific design contexts like pull quotes or callouts)

---

## Rules — product

Product typography follows the same font family and case rules. Specific type scales, line heights, and component-specific rules are defined in the Qonto Design System.

- Default body weight: Regular (400)
- Minimum body size: 14px
- UI labels: SemiBold (600)

---

## Composition

### Line height and letter spacing

| Context | Line height | Letter spacing |
|---|---|---|
| Headline | 98% | +0.5% |
| Subtitle | 110% | +0.5% |
| Body | 130% | 0% |

### General padding

Follow padding specs to ensure content has the right amount of space and feels balanced. Adjustments for different media are fine, but the overall look should remain consistent.

---

## Craft and quality control

### Kerning

Kerning improves the visual balance between letters, making brand typography look more polished, legible, and professionally crafted. Watch for: letters too close (cramped), balanced distance (correct), and letters too far (loose).

### Rags, orphans, and widows

Good typography requires compositional care. Manual adjustments are encouraged in editorial contexts.

**Rags:** Avoid awkward right-edge shapes in left-aligned text. The right edge should feel organic but not jagged.

**Orphans:** Avoid first lines left alone at the bottom of a page or column.

**Widows:** Avoid single words isolated at the end of paragraphs. Adjust line breaks or copy to prevent them.

### Stacked headlines

Use intentional line breaks, keep meaningful words together, and rely on weight contrast to create structured, cohesive stacked headlines. Don't let line breaks split ideas mid-thought.

### Belt and suspenders

Avoid reinforcing hierarchy with too many signals at once. Don't combine bold + large + underline + color on the same element. Pick one or two differentiation methods. Hierarchy should feel confident, not loud.

---

## Negative cues (never do this)

- Never mix Qonto Sans with legacy font versions or alternative typefaces in the same context
- Never use all caps for body text or headings (sentence case only)
- Never use right-aligned body text
- Never exceed 75 characters per line in body text
- Never stack more than two hierarchy signals on the same text (e.g., bold + size is fine; bold + size + underline + color is too much)
- Never use Light weight for primary body text — it's too thin for extended reading
- Never apply letter spacing to body text — only headlines and subtitles get +0.5%

---

## Tokens

```css
/* Font family */
--font-primary: 'Qonto Sans', 'Manrope', Arial, sans-serif;

/* Font weights */
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-black: 900;

/* Line heights */
--line-height-headline: 0.98;
--line-height-subtitle: 1.10;
--line-height-body: 1.30;

/* Letter spacing */
--letter-spacing-headline: 0.005em;
--letter-spacing-subtitle: 0.005em;
--letter-spacing-body: 0;

/* Text color */
--color-text-primary: #050505;

/* Line length */
--line-length-min: 45ch;
--line-length-max: 75ch;

/* Minimum body size */
--font-size-body-min: 14px;
```

---

## Examples

### Good: marketing headline

A large hero headline in Qonto Sans Black, left-aligned, sentence case, with 98% line height and +0.5% letter spacing. Clean stacked lines where each break preserves a complete thought. Body text below in Regular weight, 130% line height, left-aligned within a 45-75 character measure.

### Bad: what to avoid

A headline in bold + italic + underlined + colored text. Title case applied ("Every Word Capitalized Like This"). Body text set at 100 characters per line, making it hard to track back to the start of the next line. A single word "services." sitting alone as the last line of a paragraph (widow).

---

## Resources

| Resource | Description |
|---|---|
| `assets/QontoSans-Light.otf` | Qonto Sans Light (300) |
| `assets/QontoSans-Regular.otf` | Qonto Sans Regular (400) |
| `assets/QontoSans-SemiBold.otf` | Qonto Sans SemiBold (600) |
| `assets/QontoSans-Bold.otf` | Qonto Sans Bold (700) |
| `assets/QontoSans-Black.otf` | Qonto Sans Black (900) |
| [Manrope (Google Fonts)](https://fonts.google.com/specimen/Manrope) | Fallback font — free download |

## Source references

- Notion: [Qonto Sans Typography Guide](https://qonto.notion.site/Qonto-Sans-Typography-Guide-2cffb3fd229143b5b72a7e29f90ecdd3)
