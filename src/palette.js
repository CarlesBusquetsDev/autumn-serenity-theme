/**
 * Autumn Serenity palette — the single source of truth for every colour in the theme.
 *
 * Edit colours here, then run `npm run build` to regenerate
 * `themes/autumn-serenity-theme.json`.
 */

export const palette = {
  // Surfaces (dark → light)
  bark: '#2a2120', // inactive title bar
  soil: '#3d2f26', // editor background, panels, status bar
  cocoa: '#4b3a31', // dropdowns, menus, inactive selection
  walnut: '#5c4b3f', // selection, buttons, notifications
  moss: '#7a6c58', // active tab, hover, active selection
  seam: '#4e3d33', // structural borders (sidebar, panel, tabs) — barely visible on purpose
  driftwood: '#877158', // borders, current line, bracket match

  // Text
  clay: '#a57c5a', // secondary text, line numbers, ignored files
  mocha: '#b89273', // comments (clay lifted to 4.5:1 for readability)
  parchment: '#e1c6b0', // editor text
  cream: '#ffecd0', // UI text (titles, icons, menus)
  sand: '#bda27c', // block punctuation
  wheat: '#d4b98b', // inactive activity bar icons
  straw: '#f3d699', // sidebar / activity bar text

  // Accents
  amber: '#e09b5c', // strings, find match, added lines
  pumpkin: '#d97757', // primary accent: links, badges, progress
  pumpkinLight: '#e8926f', // hover state of the primary accent
  rust: '#d25c3a', // keywords, modified lines, scrollbar
  brick: '#b8482a', // badge backgrounds — dark enough for cream text to pass AA (4.5:1)
  flame: '#ff6735', // constants, warnings
  tangerine: '#ff9334', // variables, tags
  marigold: '#ffb63f', // activity bar active border
  ember: '#ff3b3b', // errors, deleted lines, debugging

  // Cool counterpoints (autumn has green too): desaturated so they sit inside the warm palette
  fern: '#9db386', // functions, methods
  lichen: '#9cbab1', // types, classes, interfaces

  transparent: '#00000000',
};

/**
 * Append an alpha channel to a 6-digit hex colour.
 * @param {string} hex  e.g. '#d97757'
 * @param {string} alpha  two hex digits, e.g. '70'
 */
export const alpha = (hex, alpha) => `${hex.slice(0, 7)}${alpha}`;
