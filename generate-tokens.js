#!/usr/bin/env node

/**
 * generate-tokens.js
 * 
 * Reads territory .md files and generates qonto-brand-tokens.css
 * Run: node generate-tokens.js
 * 
 * The direct line: .md → this script → .css
 * Every time a territory file is updated, run this to regenerate.
 */

const fs = require('fs');
const path = require('path');

// ── Config ──────────────────────────────────────────────────────────

const TERRITORIES_DIR = path.join(__dirname, 'territories');
const OUTPUT_FILE = path.join(__dirname, 'assets', 'qonto-brand-tokens.css');

// ── Parsers ─────────────────────────────────────────────────────────

function readFile(name) {
  const filepath = path.join(TERRITORIES_DIR, name);
  if (!fs.existsSync(filepath)) {
    console.warn(`⚠  ${name} not found, skipping`);
    return '';
  }
  return fs.readFileSync(filepath, 'utf-8');
}

/**
 * Extract token block from a territory file.
 * Looks for ```...``` after a ## Tokens heading.
 */
function extractTokenBlock(content) {
  const match = content.match(/## Tokens\s*\n```[\s\S]*?\n([\s\S]*?)```/);
  return match ? match[1] : '';
}

/**
 * Parse key: value pairs from a token block line.
 * Supports "- key: value" format.
 */
function parseTokenLine(line) {
  const m = line.match(/^-\s+(.+?):\s+(.+)$/);
  return m ? { key: m[1].trim(), value: m[2].trim() } : null;
}

// ── Color parser ────────────────────────────────────────────────────

function parseColorTokens(content) {
  const tokens = extractTokenBlock(content);
  const result = {
    primary: {},
    grayscale: {},
    product: {},
    semantic: {},
    accent: null,
    gradients: { general: {}, ai: {} },
  };

  let section = '';
  for (const line of tokens.split('\n')) {
    const trimmed = line.trim();

    // Detect sections
    if (trimmed.startsWith('Primary:')) { section = 'primary'; continue; }
    if (trimmed.startsWith('Grayscale:')) { section = 'grayscale'; continue; }
    if (trimmed.startsWith('Accent:')) { section = 'accent'; continue; }
    if (trimmed.startsWith('Gradients (general):')) { section = 'gradients-general'; continue; }
    if (trimmed.startsWith('Gradients (AI-only):')) { section = 'gradients-ai'; continue; }
    if (trimmed.startsWith('Gradient rendering:')) { section = 'rendering'; continue; }
    if (trimmed.startsWith('Product families:')) { section = 'skip'; continue; }
    if (trimmed.startsWith('Semantic families:')) { section = 'skip'; continue; }
    if (trimmed.startsWith('Scale:')) { section = 'skip'; continue; }
    if (trimmed.startsWith('Rules:')) { section = 'rules'; continue; }

    const parsed = parseTokenLine(trimmed);
    if (!parsed) continue;

    switch (section) {
      case 'primary':
        result.primary[parsed.key] = parsed.value;
        break;
      case 'grayscale':
        result.grayscale[parsed.key] = parsed.value;
        break;
      case 'accent':
        result.accent = parsed.value.match(/#[0-9A-Fa-f]{6}/)?.[0] || parsed.value;
        section = 'skip';
        break;
      case 'gradients-general':
        result.gradients.general[parsed.key] = parsed.value.split(',').map(s => s.trim());
        break;
      case 'gradients-ai':
        result.gradients.ai[parsed.key] = parsed.value.split(',').map(s => s.trim());
        break;
    }
  }

  // Parse product palette from tables (more reliable than token block)
  const families = ['blueberry', 'mint', 'plum', 'sakura', 'peach', 'mustard', 'success', 'warning', 'error'];
  for (const family of families) {
    const regex = new RegExp(`${family}\\s+(\\d+)\\s*\\|\\s*\`(#[0-9A-Fa-f]{6})\``, 'gi');
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (!result.product[family]) result.product[family] = {};
      result.product[family][match[1]] = match[2];
    }
  }

  return result;
}

// ── Typography parser ───────────────────────────────────────────────

function parseTypographyTokens(content) {
  const tokens = extractTokenBlock(content);
  const result = {
    fontFamily: "'Qonto Sans', 'Manrope', Arial, sans-serif",
    weights: {},
    lineHeights: {},
    letterSpacing: {},
    textColor: '#050505',
    lineLength: { min: '45ch', max: '75ch' },
    bodyMin: '14px',
  };

  for (const line of tokens.split('\n')) {
    const trimmed = line.trim();
    const parsed = parseTokenLine(trimmed);
    if (!parsed) continue;

    // Font weights
    if (parsed.key.startsWith('--font-weight-')) {
      const name = parsed.key.replace('--font-weight-', '');
      result.weights[name] = parsed.value.replace(';', '');
    }
    // Line heights
    if (parsed.key.startsWith('--line-height-')) {
      const name = parsed.key.replace('--line-height-', '');
      result.lineHeights[name] = parsed.value.replace(';', '');
    }
    // Letter spacing
    if (parsed.key.startsWith('--letter-spacing-')) {
      const name = parsed.key.replace('--letter-spacing-', '');
      result.letterSpacing[name] = parsed.value.replace(';', '');
    }
  }

  // Fallback: parse from CSS block if present
  const cssBlock = content.match(/```css\n([\s\S]*?)```/);
  if (cssBlock) {
    const css = cssBlock[1];
    const cssVars = {};
    for (const line of css.split('\n')) {
      const m = line.match(/--([\w-]+):\s*(.+?);/);
      if (m) cssVars[m[1]] = m[2].trim();
    }
    if (cssVars['font-primary']) result.fontFamily = cssVars['font-primary'];
    for (const w of ['light', 'regular', 'semibold', 'bold', 'black']) {
      if (cssVars[`font-weight-${w}`]) result.weights[w] = cssVars[`font-weight-${w}`];
    }
    for (const r of ['headline', 'subtitle', 'body']) {
      if (cssVars[`line-height-${r}`]) result.lineHeights[r] = cssVars[`line-height-${r}`];
      if (cssVars[`letter-spacing-${r}`]) result.letterSpacing[r] = cssVars[`letter-spacing-${r}`];
    }
    if (cssVars['color-text-primary']) result.textColor = cssVars['color-text-primary'];
    if (cssVars['line-length-min']) result.lineLength.min = cssVars['line-length-min'];
    if (cssVars['line-length-max']) result.lineLength.max = cssVars['line-length-max'];
    if (cssVars['font-size-body-min']) result.bodyMin = cssVars['font-size-body-min'];
  }

  return result;
}

// ── CSS Generator ───────────────────────────────────────────────────

function generateCSS(color, typo) {
  const timestamp = new Date().toISOString().split('T')[0];
  
  let css = `/* ═══════════════════════════════════════════════════════════════════
   QONTO BRAND TOKENS — CSS Custom Properties
   Auto-generated from territory .md files by generate-tokens.js
   Generated: ${timestamp}
   
   PURPOSE: Ensure the assets and outputs created by internal tools
   (Print Lab, Asset Creator, Social Media Studio, One Pager Builder)
   follow brand guidelines automatically. This file governs the
   OUTCOME — the flyers, social posts, one-pagers, and branded
   assets these tools produce — not the tool interfaces themselves.
   
   USAGE:
   - Embed in tool output templates via @import 'qonto-brand-tokens.css'
   - Reference tokens in generated HTML/CSS assets
   - Regenerate: node generate-tokens.js
   
   SOURCE FILES:
   - territories/color.md   → colors, gradients
   - territories/typography.md → fonts, hierarchy, spacing
   ═══════════════════════════════════════════════════════════════════ */\n\n`;

  // Primary
  css += `\n/* ─── PRIMARY ─────────────────────────────────────────────────────── */\n\n:root {\n`;
  for (const [key, val] of Object.entries(color.primary)) {
    css += `  --qonto-${key}: ${val};\n`;
  }
  css += `}\n`;

  // Grayscale
  css += `\n\n/* ─── GRAYSCALE ───────────────────────────────────────────────────── */\n\n:root {\n`;
  for (const [key, val] of Object.entries(color.grayscale)) {
    const cssKey = key.replace(/\s+/g, '-').toLowerCase();
    css += `  --qonto-${cssKey}: ${val};\n`;
  }
  css += `}\n`;

  // Product palette
  css += `\n\n/* ─── PRODUCT PALETTE ──────────────────────────────────────────────── */\n/* Product use only — never in marketing unless for dataviz.          */\n\n:root {\n`;
  for (const [family, stops] of Object.entries(color.product)) {
    css += `\n  /* ${family.charAt(0).toUpperCase() + family.slice(1)} */\n`;
    for (const [stop, hex] of Object.entries(stops)) {
      const label = family === 'blueberry' && stop === '800' ? '  /* Accent */' : '';
      css += `  --qonto-${family}-${stop}: ${hex};${label}\n`;
    }
  }
  css += `}\n`;

  // Accent
  css += `\n\n/* ─── ACCENT ──────────────────────────────────────────────────────── */\n/* Hero moments only: completing a transfer, typing an amount.        */\n\n:root {\n`;
  css += `  --qonto-accent: var(--qonto-blueberry-800);\n`;
  css += `}\n`;

  // Gradients
  css += `\n\n/* ─── GRADIENTS ───────────────────────────────────────────────────── */\n/* CSS fallbacks — canonical rendering uses Oklab + simplex noise     */\n\n:root {\n`;
  css += `  /* General use */\n`;
  for (const [name, stops] of Object.entries(color.gradients.general)) {
    const cssName = name.replace(/\s+/g, '-').toLowerCase();
    css += `  --qonto-gradient-${cssName}: linear-gradient(135deg, ${stops.join(', ')});\n`;
  }
  css += `\n  /* AI-only — Qonto AI and AI agents only */\n`;
  for (const [name, stops] of Object.entries(color.gradients.ai)) {
    const cssName = name.replace(/\s+/g, '-').toLowerCase();
    css += `  --qonto-gradient-${cssName}: linear-gradient(135deg, ${stops.join(', ')});\n`;
  }
  css += `}\n`;

  // Typography
  css += `\n\n/* ─── TYPOGRAPHY ──────────────────────────────────────────────────── */\n\n:root {\n`;
  css += `  /* Font family */\n`;
  css += `  --qonto-font-primary: ${typo.fontFamily};\n`;
  css += `  --qonto-font-fallback-1: 'Manrope', Arial, sans-serif;\n`;
  css += `  --qonto-font-fallback-2: Arial, sans-serif;\n\n`;
  css += `  /* Weights */\n`;
  for (const [name, val] of Object.entries(typo.weights)) {
    css += `  --qonto-font-weight-${name}: ${val};\n`;
  }
  css += `\n  /* Hierarchy: line height */\n`;
  for (const [name, val] of Object.entries(typo.lineHeights)) {
    css += `  --qonto-line-height-${name}: ${val};\n`;
  }
  css += `\n  /* Hierarchy: letter spacing */\n`;
  for (const [name, val] of Object.entries(typo.letterSpacing)) {
    css += `  --qonto-letter-spacing-${name}: ${val};\n`;
  }
  css += `\n  /* Text color */\n`;
  css += `  --qonto-color-text-primary: var(--qonto-black);\n`;
  css += `  --qonto-color-text-inverse: var(--qonto-white);\n\n`;
  css += `  /* Line length */\n`;
  css += `  --qonto-line-length-min: ${typo.lineLength.min};\n`;
  css += `  --qonto-line-length-max: ${typo.lineLength.max};\n\n`;
  css += `  /* Minimum body size */\n`;
  css += `  --qonto-font-size-body-min: ${typo.bodyMin};\n`;
  css += `}\n`;

  // Semantic aliases
  css += `\n\n/* ─── SEMANTIC ALIASES ────────────────────────────────────────────── */\n\n:root {\n`;
  css += `  /* Surfaces */\n`;
  css += `  --qonto-surface-primary:   var(--qonto-white);\n`;
  css += `  --qonto-surface-inverse:   var(--qonto-black);\n`;
  css += `  --qonto-surface-subtle:    var(--qonto-gray-25);\n`;
  css += `  --qonto-surface-muted:     var(--qonto-gray-50);\n\n`;
  css += `  /* Borders */\n`;
  css += `  --qonto-border-default:    var(--qonto-gray-200);\n`;
  css += `  --qonto-border-strong:     var(--qonto-gray-400);\n`;
  css += `  --qonto-border-subtle:     var(--qonto-gray-100);\n\n`;
  css += `  /* Text */\n`;
  css += `  --qonto-text-primary:      var(--qonto-black);\n`;
  css += `  --qonto-text-secondary:    var(--qonto-gray-600);\n`;
  css += `  --qonto-text-tertiary:     var(--qonto-gray-500);\n`;
  css += `  --qonto-text-disabled:     var(--qonto-gray-400);\n`;
  css += `  --qonto-text-inverse:      var(--qonto-white);\n\n`;
  css += `  /* Status */\n`;
  css += `  --qonto-status-success:    var(--qonto-success-800);\n`;
  css += `  --qonto-status-warning:    var(--qonto-warning-800);\n`;
  css += `  --qonto-status-error:      var(--qonto-error-800);\n`;
  css += `  --qonto-status-info:       var(--qonto-blueberry-800);\n\n`;
  css += `  /* Status backgrounds */\n`;
  css += `  --qonto-status-success-bg: var(--qonto-success-50);\n`;
  css += `  --qonto-status-warning-bg: var(--qonto-warning-50);\n`;
  css += `  --qonto-status-error-bg:   var(--qonto-error-50);\n`;
  css += `  --qonto-status-info-bg:    var(--qonto-blueberry-50);\n`;
  css += `}\n`;

  // Dark mode
  css += `\n\n/* ─── DARK MODE ───────────────────────────────────────────────────── */\n\n`;
  css += `@media (prefers-color-scheme: dark) {\n  :root {\n`;
  css += `    --qonto-surface-primary:   var(--qonto-black);\n`;
  css += `    --qonto-surface-inverse:   var(--qonto-white);\n`;
  css += `    --qonto-surface-subtle:    var(--qonto-gray-900);\n`;
  css += `    --qonto-surface-muted:     var(--qonto-gray-800);\n\n`;
  css += `    --qonto-border-default:    var(--qonto-gray-700);\n`;
  css += `    --qonto-border-strong:     var(--qonto-gray-500);\n`;
  css += `    --qonto-border-subtle:     var(--qonto-gray-800);\n\n`;
  css += `    --qonto-text-primary:      var(--qonto-white);\n`;
  css += `    --qonto-text-secondary:    var(--qonto-gray-400);\n`;
  css += `    --qonto-text-tertiary:     var(--qonto-gray-500);\n`;
  css += `    --qonto-text-disabled:     var(--qonto-gray-600);\n`;
  css += `    --qonto-text-inverse:      var(--qonto-black);\n`;
  css += `  }\n}\n`;

  return css;
}

// ── Main ────────────────────────────────────────────────────────────

function main() {
  console.log('🔄 Reading territory files...');

  const colorContent = readFile('color.md');
  const typoContent = readFile('typography.md');

  if (!colorContent && !typoContent) {
    console.error('❌ No territory files found. Run from the skill root directory.');
    process.exit(1);
  }

  console.log('📐 Parsing tokens...');
  const colorTokens = parseColorTokens(colorContent);
  const typoTokens = parseTypographyTokens(typoContent);

  console.log(`   Colors: ${Object.keys(colorTokens.primary).length} primary, ${Object.keys(colorTokens.grayscale).length} grayscale, ${Object.keys(colorTokens.product).length} families`);
  console.log(`   Gradients: ${Object.keys(colorTokens.gradients.general).length} general, ${Object.keys(colorTokens.gradients.ai).length} AI-only`);
  console.log(`   Typography: ${Object.keys(typoTokens.weights).length} weights, ${Object.keys(typoTokens.lineHeights).length} hierarchy roles`);

  console.log('🎨 Generating CSS...');
  const css = generateCSS(colorTokens, typoTokens);

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, css, 'utf-8');
  console.log(`✅ Written to ${OUTPUT_FILE}`);
  console.log(`   ${css.split('\n').length} lines, ${(Buffer.byteLength(css) / 1024).toFixed(1)}KB`);
}

main();
