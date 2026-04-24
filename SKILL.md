---
name: qonto-brand-design-skills
description: Use when needing Qonto brand resources. Routes to brand guidelines for logo, composition, color, typography, and tone.
metadata:
    author: Qonto Brand Team
    version: "2.1.0"
---

# Qonto Brand Design Skills

A collection of design skills for applying Qonto's brand to any output — Figma, HTML, social, print, decks.

## Available skills

| Skill | Description | Path |
|---|---|---|
| `qonto-brand-design-skill` | Qonto's brand as code. Logo, composition, color, typography, tone — all measured from the Brand Kit SOT. | [brand-guidelines/SKILL.md](brand-guidelines/SKILL.md) |

## When to use which skill

- **`qonto-brand-design-skill`** — Any external-facing visual output: marketing, social, flyers, posters, decks, documents, email. When in doubt, this is the one.

Additional skills (product design system, marketing pages, motion) may be added over time as they stabilise. Each lives in its own folder with a `SKILL.md` file and pulls ground truth from the [Qonto Brand Kit — SOT Figma file](https://www.figma.com/design/9MBP81zVpoj7hlLS8gf4eV/Qonto-Brand-Kit---SOT).

## Structure

```
qonto-brand-design-skill/
├── README.md              # Install command + overview
├── SKILL.md               # This index file
└── brand-guidelines/
    └── SKILL.md           # Qonto brand design skill (logo, composition, …)
```
