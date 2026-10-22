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
  all eight automatic rotations wrap to the Chairperson, rotation continues under the pointer, Pause/Play works with focus retained,
  keyboard focus and an open profile suspend rotation, and
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

## Automatic rotation preview fix

Reproduced on the authenticated Vercel branch preview before the fix: the central
name advanced Nadia → Sharon without hover, stayed Sharon for 3.3 seconds while
hovered, and stayed Sharon after Pause followed by Play with focus retained.

Removed the broad mouse-hover pause. Pointer clicks no longer count as keyboard
focus pauses, and explicit Play clears the focus pause. Keyboard focus, an open
profile, manual Pause, reduced motion, offscreen and hidden-tab conditions are
retained. Local lint/typecheck/build passed. Browser-clock regression checks
confirmed three-second timing, all eight directors looping, continued rotation
under hover, and immediate Play resumption with pointer/focus retained. All eight
profiles and layout checks passed again at 320/390/768/1440px.

## Anton and Matt full-width portraits

Anton and Matt use top-aligned `object-fit: cover` in both the carousel and popup
so their taller source images fill the available width without side gaps.
Browser checks passed at 320/390/768/1440px, including image decoding, cover fit,
top alignment, popup opening and no horizontal page overflow. Mobile and desktop
screenshots are saved as `anton-filled-*`, `matt-filled-*`,
`anton-profile-filled-*` and `matt-profile-filled-*`. Visual review confirmed faces
and the top Good Crowd logos remain visible. Lint, typecheck and build passed.
