# Workflow — maintaining and sharpening the Qonto Brand Skill

> Status: living document · Last updated: 2026-04-29

This document describes how the Qonto Brand Design Skill is maintained, reviewed, and evolved. The Skill itself ([SKILL.md](SKILL.md)) is the *what*. This file is the *how*.

## The mental model

The Skill works because three roles do their part on different cadences:

| Role | Person/agent | Cadence | Output |
|---|---|---|---|
| **Designer (operator)** | Qonto designers, marketers, agencies | continuous | shipped work + edge-case feedback |
| **Reviewer (agent)** | `brand-reviewer` subagent | per design + scheduled weekly | alignment reports + drift flags |
| **Brand owner (human)** | Joan + brand team | weekly triage + monthly audit | accept/reject drift, evolve the Skill |

The agent is the connective tissue. Without it, every design review is a manual lookup against 2,600 lines — designers won't do it, drift accumulates, the Skill goes stale.

## The three loops

### Loop 1 — per-design review

**Trigger.** A designer (or another agent) wants to verify alignment of a Figma comp.

**Action.** Invoke the `brand-reviewer` subagent:

```
"Review Figma node mNVOGF8.../117:260 against SKILL.md."
```

**Output.** Structured Markdown report — ✓ Aligned / ✗ Violations / ⚠ Flagged drift. Detail at [.claude/agents/brand-reviewer.md](.claude/agents/brand-reviewer.md).

**What to do with it.**
- ✗ Violations → designer fixes inline before shipping
- ⚠ Flagged drift → designer notes it, brand owner triages weekly

### Loop 2 — weekly brand-team triage

**Trigger.** Monday morning. Cron-fired `weekly-brand-pulse` agent (Step 2 below) OR manual review of accumulated drift items.

**Action.** Brand owner walks the week's flagged drift:

1. **Accept as Skill update** — drift reflects a pattern that should become a rule. File a `rule-change` issue on the GitHub repo.
2. **Reject as one-off** — drift was a creative call, not a pattern. Note in the triage log; no Skill change.
3. **Investigate** — drift is genuinely uncertain. Schedule a deeper look (e.g., re-test on a fresh comp, ask the designer).

**Output.** A short triage log per week (Notion page) + 0–N `rule-change` GitHub issues queued for the next Skill version.

### Loop 3 — monthly Skill audit

**Trigger.** First Monday of the month.

**Action.** Brand owner walks the Skill:

1. Which sections shipped this month? Which never get used?
2. Did the SOT (Brand Kit Figma file) move? Run a SOT-vs-Skill diff (see "SOT drift detection" below).
3. Are there `rule-change` issues open for >30 days? Resolve, escalate, or close.
4. Are there sections that produced repeated drift (a sign the rule itself is wrong)? Propose a rewrite.

**Output.** Either a patch / minor / major Skill version bump, or a clean audit log if nothing needs to change.

## The trigger ladder

We're building proactivity step by step. Each step depends on the previous one being stable.

| Step | Description | Status |
|---|---|---|
| **1** | `brand-reviewer` subagent (request-driven). Foundation. | ✓ shipped (this commit) |
| **2** | Weekly Monday digest via cron. `weekly-brand-pulse` agent dispatches `brand-reviewer` over a list of recent shipped Figma frames; posts to Slack/Notion. | ⚙ agent shipped, cron not yet wired |
| **3** | Daily SOT-Skill drift check via cron. Diffs SOT cited nodes against what the Skill says about them; opens GitHub issue if drift detected. | ⏳ planned |
| **4** | Slack bot (event-driven). Designer drops a Figma URL in `#design-reviews`, bot replies with the report. | ⏳ planned |
| **5** | Figma webhooks (event-driven, debounced + folder-filtered to a "Reviews" folder). | ⏳ planned |
| **6** | Ambient rule discovery with curated watchlist. | ⏳ planned |

### Wiring Step 2 (weekly digest)

When you're ready to fire the Monday digest:

```
# Schedule the cron via the scheduled-tasks MCP server (or CronCreate in Claude Code)
# Cadence: every Monday at 09:00 local time
# Action: invoke the `weekly-brand-pulse` agent with the week's shipped node list
# Output destination: configured Slack channel (e.g., #brand-pulse) or Notion page
```

The agent itself is in [.claude/agents/weekly-brand-pulse.md](.claude/agents/weekly-brand-pulse.md). Until the cron is wired, it's dormant — invoke it manually if you want to test or run an off-cycle pulse.

**Inputs the cron task should provide each Monday:**

- A list of Figma node IDs (from a designated Figma section, Drive folder, or manual collection)
- The output destination (Slack channel ID, Notion page ID, or "stdout")

If the input list is empty, the agent skips silently.

### Wiring Step 3 (SOT drift detection)

Daily cron, low-noise. Compares specific SOT nodes the Skill cites against what the Skill currently says about them. Opens a GitHub issue if drift is detected. Specific nodes to monitor (extract from `SKILL.md`):

- `220:52554` — Logo placement diagram
- `220:52561` — Lockup orientation reference
- `420:50784` — Headline size block
- `428:51357` — Horizontal spacing
- `450:51608` — Grid
- `450:52523` — Layouts (archetypes)
- `516:52728` — Nested-frames concentric radii
- `521:52763` — Style and effect (card tiers)
- `564:7739` — Bisected-canvas pattern

To be implemented as a separate agent — `sot-drift-watcher` — when ready.

## Rule-change proposals

When drift becomes a Skill update, file a GitHub issue using the `rule-change` template ([.github/ISSUE_TEMPLATE/rule-change.yml](.github/ISSUE_TEMPLATE/rule-change.yml)).

The template asks for:

1. **Current rule** — the §section in `SKILL.md` (cite the version)
2. **Proposed change** — what should it become
3. **Evidence** — links to shipped work that supports the change (Figma URLs, screenshots)
4. **SOT reference** — which SOT node justifies the change (or "no SOT change — interpretation update")
5. **Impact** — which other sections / surfaces would be affected

Brand owner reviews, accepts, modifies, or rejects. Accepted issues become commits on `main` and bump the Skill version per semver:

- **Patch** (3.5.0 → 3.5.1) — typo, clarification, no semantic change
- **Minor** (3.5.0 → 3.6.0) — additive rule, new surface, new section
- **Major** (3.5.0 → 4.0.0) — rule reversal, breaking change, removed section

## Versioning discipline

- Every commit to `SKILL.md` updates the frontmatter version + adds a changelog row.
- Every release tag (`v3.5.0`, `v3.6.0`, etc.) lives in the GitHub Releases page.
- Notion mirror page (id `32f31ee4-c696-81eb-a603-fbdf353f502d`) refreshed full-body after every push.
- Memory files in `~/.claude/projects/.../memory/` updated when persistent rules change.

## Onboarding new contributors

See [ONBOARDING.md](ONBOARDING.md) for the designer-facing version of this doc.

For brand-team contributors (people who edit the Skill directly), the entry path is:

1. Clone the repo
2. Read this file (you're here)
3. Read `SKILL.md` end-to-end (yes, all of it — once)
4. Watch a `brand-reviewer` run on one of the reference compositions to internalise the report format
5. Pick the smallest `rule-change` issue in the queue and ship it

## Anti-patterns in the workflow itself

Things to avoid as we evolve the workflow:

- **Per-event Slack pings** without aggregation. Will produce noise; designers tune out.
- **Auto-fixing violations** by an agent. The agent reports; humans (or designers in real time) decide and act.
- **Skipping the changelog** on Skill updates. The version history is the long-term audit trail.
- **Notion as the source of truth.** It mirrors `SKILL.md`; the repo is canonical. If they disagree, repo wins; refresh Notion.
- **Adding rules without evidence.** Drift items become rule-changes only when the evidence is concrete (Figma frames, real shipped work). Speculative rules accumulate dead weight.
- **Letting the Skill grow forever.** Periodic prune passes (monthly audit) remove sections nobody uses.
