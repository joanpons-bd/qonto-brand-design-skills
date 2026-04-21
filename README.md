# Qonto Design Skills

Modular, AI-native brand skill system for Qonto. Machine-readable `.md` files that serve as the single source of truth for the Qonto brand — consumed by Claude Projects, Claude Code, and internal tools.

## Quick start

### Claude Projects (claude.ai)
1. Paste `SKILL.md` as custom instructions
2. Upload territory `.md` files as project knowledge
3. Start prompting — Claude knows the brand

### Claude Code
```bash
git clone https://github.com/qonto/qonto-design-skills.git
cd qonto-design-skills
```
Claude Code reads the `.md` files directly from the folder.

### Install (planned)
```bash
npx skills add qonto/design-skills
```

## What's inside

```
qonto-design-skills/
├── SKILL.md                        ← Orchestrator (always loaded)
├── generate-tokens.js              ← .md → CSS generator
├── territories/
│   ├── photography.md              ← Live
│   ├── typography.md               ← Live
│   ├── tone.md                     ← Live
│   ├── logo.md                     ← Live
│   ├── color.md                    ← Live
│   └── (iconography, visual...)    ← Coming
├── assets/
│   ├── qonto-brand-tokens.css      ← Auto-generated
│   └── QontoSans-*.otf             ← Fonts (to add)
└── templates/
    └── territory-template.md
```

## Territories

| Territory | Status | Source |
|---|---|---|
| Photography | Live | Figma Brand Creative Direction |
| Typography | Live | Notion Qonto Sans Guide |
| Tone of voice | Live | Figma Brand Kit SOT + Notion Wiki |
| Logo | Live | Figma Brand Kit SOT |
| Color | Live | Figma Brand Kit SOT + Gradient Tool |
| Iconography | Coming | — |
| Visual language | Coming | — |
| Object style | Coming | — |
| Composition | Coming | — |
| Motion | Coming | — |

## CSS tokens

The territory files generate a CSS custom properties file for use in tool outputs (not tool UIs).

```bash
node generate-tokens.js
```

Reads `color.md` + `typography.md` → outputs `assets/qonto-brand-tokens.css`.

Or via Claude Code: ask "Regenerate the brand tokens CSS file."

## Architecture

**SKILL.md** is the orchestrator — it's always loaded and routes to the right territory file based on the topic. Each territory is a self-contained `.md` file covering one brand domain (color, typography, tone, etc.) with a consistent structure: rules, tokens, examples, source references.

The `.md` files are the API contract between brand rules and every consumer: Claude Projects, Claude Code, internal tools (Print Lab, Asset Creator, Social Studio, One Pager Builder), and the CSS tokens file.

## Source

- [Figma Brand Kit SOT](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT)
- [Notion WIP hub](https://www.notion.so/qonto/Brand-skill-system-WIP-32f31ee4c69681eba603fbdf353f502d)

## Contributing

1. Copy `templates/territory-template.md`
2. Follow the structure of `territories/photography.md` as reference
3. Extract content from Figma or Notion source
4. Test in a Claude Project
5. Submit a PR
