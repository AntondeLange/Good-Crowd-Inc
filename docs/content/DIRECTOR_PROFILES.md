# Editing director profiles

The About page carousel reads `boardMembers` in `lib/site-content.ts`.
Each director has a `bio` array: add one approved paragraph per quoted string.

```ts
bio: [
  "First approved biography paragraph.",
  "Second approved biography paragraph.",
],
```

Leave `bio: []` until approved copy is supplied. The profile then displays
“Biography coming soon.” Text is rendered as plain text, with no HTML required.
This is repository-based editing; there is no public editing form or CMS.
Commit the content change and release through the normal review workflow.

Keep names, roles and order in the same content file. Existing names and roles
were retained for this image/interaction update. Confirm any changes against
current Board records before publication.

The supplied October 2026 portraits are optimised WebP files in
`public/images/directors/`. The full supplied composition, including its logo,
is preserved. Bronwyn's supplied illustration remains explicitly marked as a
photo placeholder. Matt's new supplied portrait replaces his old placeholder.
The homepage founder portraits use the same new Tamara and Sarah images.

The carousel starts with the Chairperson (director 1) centred at full opacity.
Director 8 sits smaller behind on the left and director 2 behind on the right,
both at 50% opacity. Each rotation brings the next director to the centre and
wraps continuously from 8 back to 1.

Automatic rotation advances every 3 seconds while the carousel is in view.
Pause/Play controls provide an explicit stop/resume choice. Hovering or clicking
the navigation controls does not pause rotation. Play resumes immediately,
including while the Play control retains focus. Rotation also pauses
on keyboard focus, an open profile, a hidden browser tab or when
the carousel is outside the viewport. Reduced-motion users receive manual
navigation with no carousel transitions or hover scaling. Autoplay changes are
not announced by live regions.

Previous/next buttons wrap in both directions. Horizontal touch swipes move one
director; vertical page scrolling remains available. Left/Right/Home/End keys
work while the central profile button is focused. Enter/Space opens the profile.
The modal supports Escape, its close button and backdrop dismissal, locks page
scrolling and restores opener focus. Biographies remain plain-text paragraphs.

The “View profile” overlay is hidden by default and appears on hover or visible
keyboard focus on the central portrait. The portrait itself remains clickable
and tappable to open a profile without needing the overlay.
