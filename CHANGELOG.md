# Changelog

All notable changes to the **Autumn Serenity** theme are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/).

## [1.1.0] - 2026-09-18

### Added
- Pumpkin orange (`#d97757`) as primary accent: links, badges, progress bars, cursor, quick-pick highlights, extension buttons and remote indicators — everything that previously fell back to VS Code's default blue.
- Cream (`#ffecd0`) for UI text: titles, icons, menus, terminal, quick input and welcome page.
- Two cool counterpoints in the palette: fern green (`#9db386`) for functions and lichen (`#9cbab1`) for types, classes and interfaces.
- 28 TextMate rules (was 13) covering operators, decorators, CSS, JSON, Markdown, diffs and regex, plus `semanticTokenColors`.
- Full 16-colour terminal ANSI palette and six-level bracket pair colours, all from the palette.
- `editorError.foreground`, full `gitDecoration.*` set (added, untracked, deleted, conflicting, ignored, submodule).
- Theme is now generated from a named palette (`src/palette.js`) via `npm run build`.

### Changed
- Keywords use pumpkin (`#d97757`) instead of rust: 4.1:1 contrast vs 3.3:1.
- Comments use mocha (`#b89273`, 4.5:1) in italics instead of clay (3.5:1).
- Structural borders (sidebar, panel, tabs, status/title bar) use a near-background seam (`#4e3d33`) instead of the loud driftwood; floating widgets keep the visible border.
- Active activity-bar icon and indicator use the pumpkin accent; badge text uses the darkest brown.
- `editorWarning` is now orange and `editorInfo` amber (previously red/orange, inconsistent with the rest of the theme).
- Broader TextMate scopes for functions, types, keywords and constants.
- Theme file renamed internally from "Autumn Season" to "Autumn Serenity".

### Fixed
- README and CHANGELOG were excluded from the published package.
- Empty `LICENSE.txt` now contains the MIT licence.
- Removed a token rule that painted `meta.object.value` in the background colour.

## [1.0.4] - 2024-09-20
- Initial public releases (1.0.0 – 1.0.4): palette, syntax colours and README.
