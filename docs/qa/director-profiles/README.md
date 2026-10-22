# Director profile verification — 22 October 2026

Validated against a local Next.js production build, served on port 3101.

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; About remains statically prerendered.
- `git diff --check`: passed.
- Headless Chromium at 320, 390, 768 and 1440 CSS pixels: all eight profiles
  open, portrait images decode, empty bios show their pending message, close
  receives focus, Tab stays within the dialog, Escape closes, focus returns to
  the opener and page scroll is restored.
- Initial composition checked at all four widths: Chairperson centred, director 8
  behind left, director 2 behind right, exactly three visible portraits, and
  smaller side portraits at 50% opacity. Centre alignment verified geometrically.
- Previous/next navigation and wraparound passed at all four widths with
  reduced motion enabled. Keyboard navigation and simulated touch-swipe handlers
  passed. No horizontal page overflow or browser runtime errors.
- Browser clock checks: no change before 3 seconds, advance at 3 seconds,
  all eight automatic rotations wrap to the Chairperson, hover pauses and exit
  resumes, Pause/Play works, focus and an open profile suspend rotation, and
  switching to reduced motion stops automatic rotation.
- Popup close-button/backdrop dismissal was checked in the original feature;
  this revision rechecked all eight popup profiles with Escape and focus restore.
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

## Hover-only profile label follow-up

Lint, typecheck and production build passed. Local production browser checks at
320, 390, 768 and 1440px confirm that the central “View profile” overlay starts
hidden, appears on portrait hover, hides on pointer exit, and appears on visible
keyboard focus. Enter still opens the profile. A separate mobile touch emulation
check confirms tapping the portrait opens its profile. The carousel screenshots
were refreshed to show the default state without the overlay.
