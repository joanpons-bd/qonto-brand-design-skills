# Onboarding — getting started with the Qonto Brand Design Skill

> For designers, marketers, and anyone shipping Qonto-branded work.

This is the short version. The full operating model lives in [WORKFLOW.md](WORKFLOW.md); the rules live in [SKILL.md](SKILL.md).

## What this is

The **Qonto Brand Design Skill** is an installable rule set for AI design tooling (Claude Code, Claude Desktop, Cursor). Once you have it, you can ask your AI agent to:

- *"Build a 1080×1080 Instagram post announcing our Q2 results."*
- *"Make a flyer for the new invoicing feature."*
- *"What's the right logo size for a 1920×1080 deck slide?"*

…and the agent applies Qonto brand rules automatically — logo sizing, lockup placement, colour rules, type hierarchy, card hierarchy, image-overlay scrims, the lot.

It also reviews work you've already shipped against the rules, and tells you what's aligned, what's off, and what looks intentional but isn't covered yet.

## Install

```bash
npx skills add joanpons-bd/qonto-brand-design-skill
```

The interactive prompt asks which agent to install into. Pick yours. For other variants (global install, Claude-only, copy mode), see [README.md](README.md).

**Prerequisites:** Node.js 18+, an AI agent installed locally (Claude Code, Claude Desktop, or Cursor).

## Try it (5 minutes)

Open your AI agent and try a prompt:

```
Create a 1080×1080 Instagram post announcing our Q2 results.
Use the small headline tier. Place a portrait photo on the left
and a feature card on the right with a paperclip icon.
```

The agent will fetch SOT colour values, place a Qonto wordmark at the right size, build the cards using the v3.5 canvas/card pairing rule, and lay everything out per the X-system. If you have the Figma MCP plugin connected, it'll build directly in Figma.

Check the result against the v3.12 reference compositions in `SKILL.md` §Reference compositions.

## Before you build a slide deck

Slide decks have one extra setup step. **Fresh Figma Slides files don't auto-subscribe to brand libraries**, and component imports (the wordmark, multiplier, KPI cards, photo cards, pills, footer block — per `SKILL.md` §Slide deck §18) will silently fail without them.

One-time setup per Slides file:

1. Open the Figma Slides file
2. Open the **Assets panel** (left sidebar)
3. Click the **"Libraries"** button
4. Enable the libraries below.

| Library | File | Why |
|---|---|---|
| **Logos - Library** | (brand library) | Wordmark, flower, badge, square logos |
| **Qonto Brand Kit — SOT** | `9MBP81zVpoj7hlLS8gf4eV` | All slide-deck components (KPI cards, photo card, semantic pill, date pill, footer block, gradients) — see SKILL §Slide deck §18 |
| **In-app assets** *(optional)* | (product library) | Only needed if your deck includes product UI screenshots |

Without the SOT subscription, any AI agent placing a slide-deck component will fail with `Could not find a published component with the key …`. The libraries themselves are accessible from any account signed into Qonto's Figma workspace.

## Reviewing your own work

Once the skill is installed, you have access to a built-in subagent: **`brand-reviewer`**. It takes a Figma node and produces a structured report — what's aligned, what's off, what looks intentional but the Skill doesn't cover.

```
Review Figma node mNVOGF8.../117:260 against the Skill.
```

The report has three sections:

- **✓ Aligned** — what's correct, with rule references
- **✗ Violations** — what breaks a rule, with the specific fix
- **⚠ Flagged drift** — what looks intentional but doesn't match the Skill — for the brand team to evaluate

The third section is gold. **If the agent says "this feels right but isn't in the Skill"**, that's a candidate for a rule update. File it as feedback (see below).

## Giving feedback

Two paths, depending on what you spotted:

### A. The Skill says X, your work needs Y, and Y is right

File a `rule-change` issue on the [GitHub repo](https://github.com/joanpons-bd/qonto-brand-design-skill/issues/new/choose). The template asks for:

- The current rule
- The proposed change
- Evidence (Figma frames, screenshots)
- Why it matters

Brand owner reviews. Accepted changes become Skill versions.

### B. The Skill is unclear or wrong on something

Same path — file an issue. Don't worry about being polite. The Skill is meant to be sharpened by real shipped work.

If you're not sure whether to file an issue, run the `brand-reviewer` agent on the comp first. The agent's "⚠ Flagged drift" section often surfaces exactly the question you'd file.

## What to expect over time

- **Per-design** — the agent reviews on request. Catches violations and surfaces drift.
- **Weekly** — the brand team reviews the week's flagged drift items. Some become Skill updates; most are one-offs.
- **Monthly** — bigger Skill audits. Sections that aren't getting used get pruned; sections that produce repeated drift get rewritten.
- **Versioned** — every Skill change is committed and tagged on the [GitHub repo](https://github.com/joanpons-bd/qonto-brand-design-skill). The latest is `v3.5.0`.

The Skill is a **living document**. It's expected to evolve. The version on your machine is what mattered the day you installed it; re-run the install command monthly (or whenever you want the latest) to update.

## Where things live

| Resource | Where | What for |
|---|---|---|
| `SKILL.md` | [GitHub repo](https://github.com/joanpons-bd/qonto-brand-design-skill) | The rules, canonical |
| Brand Kit SOT | [Figma](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT) | Source of truth in Figma — colour, typography specimens, layout diagrams |
| Notion mirror | [🧠 Brand Design Master Skill (WIP)](https://www.notion.so/32f31ee4c69681eba603fbdf353f502d) | Narrative summary + install instructions, refreshed after every release |
| Asset library | [Qonto Brand Asset Library](https://qontobrandassetlibrary.netlify.app/) | Public exports — logos as SVG, photos / cards / UI snapshots as PNG |
| Workflow | [WORKFLOW.md](WORKFLOW.md) | How the Skill is maintained — three loops, three personas, cadence calendar |

## Getting help

- Questions about a specific rule? Run the `brand-reviewer` agent first; if still unclear, ping Joan ([joan.pons@qonto.com](mailto:joan.pons@qonto.com)).
- Bug or rule disagreement? File an issue.
- Big strategic question (new media surface, brand direction shift)? DM Joan or the brand team.

That's it. Install the skill, build something, run the reviewer on it, file feedback when you spot drift. The system gets sharper every time someone does that.
