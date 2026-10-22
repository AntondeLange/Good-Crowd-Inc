# Director profile verification — 22 October 2026

Validated against a local Next.js production build, served on port 3100.

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; About remains statically prerendered.
- `git diff --check`: passed.
- Headless Chromium at 320, 390, 768 and 1440 CSS pixels: all eight profiles
  open, portrait images decode, empty bios show their pending message, close
  receives focus, Tab stays within the dialog, Escape closes, focus returns to
  the opener and page scroll is restored.
- Previous/next navigation and wraparound passed at all four widths with
  reduced motion enabled. No horizontal page overflow or browser runtime errors.
- Normal-motion navigation, Home/End/Right arrow/Enter, close-button and backdrop
  dismissal were checked separately on desktop.
- Screenshots: `board-{width}.png` and `profile-{width}.png`.

This is browser emulation, not physical-device or screen-reader testing.
No approved director biographies were provided; bio arrays are empty.
Names and roles are retained from the existing implementation.

Dependency installation reported 14 existing audit vulnerabilities: 2 moderate,
11 high and 1 critical, including the installed Next.js package. No dependency
versions or lockfile were changed by this feature. These advisories require a
separate applicability review and dependency update.

Rollback: revert the director-profile feature commit to restore the prior board
grid and image references. No schema, service or environment changes are needed.
