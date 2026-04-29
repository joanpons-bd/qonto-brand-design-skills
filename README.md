# Qonto Brand Design Skill

An [agent skill](https://docs.claude.com/en/docs/claude-code/skills) that puts Qonto's brand guidelines directly into your AI workflow. Ask Claude to build a poster, social post, flyer, or deck — and it will follow the rules from the Brand Kit SOT by default.

This is the **master brand skill**. Future skills covering the product design system, marketing pages, and motion will live in their own repositories, independent of this one.

**Quick links** — [SKILL.md](SKILL.md) (the rules) · [WORKFLOW.md](WORKFLOW.md) (how the Skill is maintained) · [ONBOARDING.md](ONBOARDING.md) (designer-facing intro)

## Installation

The default command runs an interactive prompt that asks which agent to install into and whether to install globally:

```bash
npx skills add joanpons-bd/qonto-brand-design-skill
```

Once installed, the skill auto-loads whenever your agent detects a relevant task.

### Install variations

Pick the flavour that matches your setup — all of them install the same skill content.

| Goal | Command |
| --- | --- |
| Install into **all detected agents** in the current project (no prompts) | `npx skills add joanpons-bd/qonto-brand-design-skill --all` |
| Install into **Claude Code only** | `npx skills add joanpons-bd/qonto-brand-design-skill -a claude` |
| Install **globally** for your user (available in every project) | `npx skills add joanpons-bd/qonto-brand-design-skill -g` |
| **Copy** the skill files instead of symlinking (useful when sharing a checkout) | `npx skills add joanpons-bd/qonto-brand-design-skill --copy` |
| Install **globally into Claude Code only**, copied | `npx skills add joanpons-bd/qonto-brand-design-skill -g -a claude --copy` |

Supported agents: Claude Code (`claude`), Claude Desktop (`claude-desktop`), Cursor (`cursor`), and any other agent the [`skills` CLI](https://github.com/obra/skills) detects.

### Updating

Re-run the same install command to pull the latest version. If you installed with `--copy`, re-running overwrites the local copy.

## What's inside

Brand guidelines for marketing, social graphics, decks, flyers, and any external-facing visual content.

- **Logo** — five canonical configurations (wordmark, wordmark + entry points, full lockup, symbol, circular avatar), the 5 % sizing rule, priority placement, library component keys, and a tested Figma build recipe.
- **Composition** — headline tiers (small / medium / large) with sizes scaled from the logo X multiplier, placement rules, and alignment grammar.
- **Color** — marketing is white-led with black as secondary and grayscale for content hierarchy; product uses the full expressive palette; gradients come from the Qonto Gradient plugin as sealed image exports, never hand-rolled or rendered as vector fills.
- **Typography** — Qonto Sans (proprietary, 5 weights × italics) with the X-scaled hierarchy, sentence-case default, 45–75 ch line-length rule, black/white-only ink, Manrope → Arial Latin fallbacks, and per-platform fallbacks for scripts Qonto Sans doesn't cover.
- **Source of truth** — every rule is measured from the [Qonto Brand Kit — SOT Figma file](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT). When a design-system token disagrees with the hex in the skill, the skill wins (the DS is mid-migration to match the SOT).

## Usage

The skill loads automatically whenever it is relevant. You can also invoke it explicitly.

### Example prompts

```
Create a 1080×1350 Instagram post announcing our Q2 results. Medium headline.
```

```
Build a flyer promoting our new invoicing feature. Use the full Qonto lockup.
```

```
What's the right logo size for a 1920×1080 deck slide?
```

```
Is it OK to put the Qonto wordmark at the top-right of this layout?
```

## Contributing

This skill is a living document. If you spot a rule that disagrees with the [Brand Kit SOT](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT), open an issue or a PR. Rule edits should cite the SOT node ID they come from.

## License

MIT
