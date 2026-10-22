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

The carousel supports native horizontal touch/trackpad scrolling, previous/next
buttons with wraparound, and Left/Right/Home/End keys while a profile button is
focused. Enter/Space opens the profile. The modal supports Escape, its close
button and backdrop dismissal, locks page scrolling and restores opener focus.
Reduced motion disables animated scrolling and portrait hover transforms.
