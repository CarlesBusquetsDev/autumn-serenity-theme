/**
 * Generates `themes/autumn-serenity-theme.json` from `src/theme.js`.
 *
 *   node scripts/build.js          write the file
 *   node scripts/build.js --check  exit 1 if the committed file is out of date
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { theme } from '../src/theme.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outFile = resolve(root, 'themes/autumn-serenity-theme.json');
const output = `${JSON.stringify(theme, null, 2)}\n`;

validate(theme);

if (process.argv.includes('--check')) {
  let current = '';
  try {
    current = readFileSync(outFile, 'utf8');
  } catch {
    // missing file is reported below
  }
  if (current !== output) {
    console.error(`✗ ${outFile} is out of date. Run \`npm run build\`.`);
    process.exit(1);
  }
  console.log('✓ theme JSON is up to date');
} else {
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, output);
  console.log(`✓ wrote ${outFile} (${Object.keys(theme.colors).length} colours, ${theme.tokenColors.length} token rules)`);
}

/** Fail fast on values that VS Code would silently ignore. */
function validate({ colors, tokenColors }) {
  const hex = /^#[0-9a-f]{6}([0-9a-f]{2})?$/;
  const problems = [];

  for (const [key, value] of Object.entries(colors)) {
    if (!hex.test(value)) problems.push(`colors["${key}"] = ${value}`);
  }
  for (const rule of tokenColors) {
    const { foreground } = rule.settings;
    if (foreground && !hex.test(foreground)) problems.push(`tokenColors "${rule.name}" foreground = ${foreground}`);
    if (foreground === colors['editor.background']) problems.push(`tokenColors "${rule.name}" is invisible (same as editor.background)`);
  }

  if (problems.length) {
    console.error('✗ invalid colour values:\n  ' + problems.join('\n  '));
    process.exit(1);
  }
}
