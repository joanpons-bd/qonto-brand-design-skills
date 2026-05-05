# brand-design

Qonto's brand design system as code. Apply Qonto's visual identity — logo, color, typography, composition, slide deck conventions — to anything Claude Code helps you build, from Figma comps to slide decks to web pages.

## What's inside

- **`agents/qonto-brand-design.md`** — the canonical brand rules.
- **`agents/brand-reviewer.md`** — subagent that audits any Figma node against the brand. Returns `✓ Aligned / ✗ Violations / ⚠ Drift`.
- **`agents/weekly-brand-pulse.md`** — dormant subagent for weekly brand-drift digests (cron-triggered).
- **`hooks/hooks.json`** — Figma session safety: blocks REST screenshots at scale > 1 and redirects the official Figma MCP screenshot tool to the size-capped `figma_capture_screenshot` (prevents the 2000 px image-budget crash that breaks long Figma sessions).

## Use it

Once installed via the marketplace, ask Claude in plain language:

```
Create a 1080×1080 Instagram post announcing our Q3 results. Small headline. Photo left, feature card right.
```

Claude reads `SKILL.md` and applies every brand rule end-to-end.

To audit existing work:

```
Review Figma node 15MmXB5MyAhfNDRIVv6eF3/231:6309 against the brand-design Skill.
```

## Working in slide decks

Slide decks have one extra setup step per file — see [`ONBOARDING.md`](./ONBOARDING.md) for the library subscription instructions. The full slide-deck specification (12 canonical text styles, 9 reusable components, 6-color palette) lives in [`agents/qonto-brand-design.md` § Slide deck](./agents/qonto-brand-design.md).

## Versioning + contributing

The skill follows semver. Changelog at the bottom of `SKILL.md`. Contribution model in [`WORKFLOW.md`](./WORKFLOW.md): drift → rule-change issue → version bump → PR.

Owner: Brand team — Joan Pons.
