# Good Crowd Inc — Web Brand Guide

## Purpose
This document translates the approved Good Crowd Inc brand material into implementation guidance for the website. It does not replace original brand assets. Where an approved asset or source document conflicts with this summary, stop and flag the discrepancy rather than inventing a resolution.

## Brand character
Good Crowd Inc should feel warm, golden and alive. The public website should be regional, human, editorial and purposeful — not a generic not-for-profit template, council microsite, government portal or event-production agency website.

The core narrative is community development through high-quality regional events: bringing people together, strengthening place and creating local economic and social benefit.

## Core expression
Standardise the website expression on:

**People. Place. Prosperity.**

Do not silently change this to “Places” or another variation.

## Values
Use the approved values:
- Goodness
- Connection
- Glee
- Community

Preserve the approved website copy for the explanatory text associated with each value.

## Colour palette
Approved web direction uses these brand colours:
- Deep earthy brown: `#602E17`
- Secondary earthy brown: `#9F785A`
- Warm peach / sand: `#F4D4B7`
- Warm white: `#FBF9F4`
- Soft white: `#F8F8F8`

Implement these as semantic design tokens rather than scattering literal values throughout components. Verify contrast for every text/background pairing against WCAG 2.2 AA.

## Typography
The brand material specifies Avenir for display/headline use and Aptos for body copy.

Do not download, scrape or commit unlicensed font files. If properly licensed webfont assets are not supplied, use a legally embeddable or system fallback that preserves the intended geometric, approachable character. Keep the font stack configurable so licensed fonts can be introduced later without component rewrites.

## Logo
- Use supplied Good Crowd logo assets.
- Do not trace, redraw or recreate the logo in CSS, SVG or typography.
- The stacked logo is the preferred/default treatment where space permits.
- Use the appropriate light/reversed logo on dark brown surfaces and dark/brown treatment on light surfaces.
- Preserve clear space and aspect ratio.
- Do not add effects, shadows, outlines or recolouring outside approved variants.

## Graphic language
Primary visual ingredients:
- infinity motif from the Good Crowd identity;
- circles and ovals;
- generous rounded corners;
- warm colour fields;
- editorial image crops;
- restrained overlapping/layered geometry.

The infinity motif should signal connection and gathering. Do not repeat it so often that it becomes background decoration without meaning.

### Continuous infinity journey
The preferred signature homepage interaction is a continuous line/path derived from the infinity motif. It should appear to originate from the Good Crowd identity/hero and travel down the page as the visitor scrolls, visually connecting people, place, stories, partnerships and outcomes.

Do not distort or continuously morph the production logo itself. Preserve the supplied logo asset and implement the travelling line as a separate decorative SVG/path derived from the same geometric language. The line should support the content hierarchy rather than cross important text or controls.

Prefer a lightweight SVG path/progress implementation. Do not introduce WebGL, canvas or a heavy animation framework merely for novelty. The experience must degrade gracefully and provide a static/reduced-motion treatment.

## Photography
Photography should feel candid, regional, warm and human. Prioritise:
- real community gatherings;
- regional landscapes and town character;
- local makers, producers and businesses;
- people interacting naturally;
- golden-hour / warm natural light where appropriate;
- details and “in-between” moments rather than staged corporate poses.

Avoid generic corporate stock photography. Do not pull arbitrary internet photography into production. If approved photography is unavailable, use controlled placeholders and clearly flag the asset gap.

## Video
Event video can become a major editorial device when approved footage exists. Video should feel documentary and experiential rather than like a corporate background loop.

Requirements:
- muted by default where autoplay is used;
- plays inline;
- no essential message depends on audio;
- compressed and appropriately sized;
- poster image supplied;
- lazy-load below-the-fold video where practical;
- reduced-motion/static alternative available;
- do not add unapproved/generated event footage to production.

## Tone of voice
Copy should be welcoming, purposeful, confident and joyful without forced hype. It should speak credibly to communities, councils, government bodies, sponsors and partners while remaining recognisably human.

Avoid:
- government/press-release language;
- unnecessary corporate terminology such as “deliverables” and “stakeholders” where ordinary language works better;
- unsupported superlatives;
- sarcasm;
- forced excitement;
- invented claims, statistics or outcomes.

Approved website copy is authoritative. Do not rewrite it merely to make a layout easier.

## Interaction references
Borrow behaviours and principles from the following websites. Do not copy their visual identities, source code, content or proprietary assets.

### The Conference Group
Reference: https://theconferencegroup.com.au/not-for-profit/

Use for:
- clean contemporary not-for-profit presentation;
- editorial hierarchy;
- generous spacing;
- confident mission-led sections;
- clear content progression.

### Event Society
Reference: https://eventsociety.com.au/our-team/

Use for:
- scrolling / animated number treatment;
- editorial scrolling rhythm;
- personality-led presentation.

Important: Good Crowd currently has no approved achieved impact statistics in the supplied launch website material. Do not invent numbers to reproduce this reference. A reusable animated-stat component may be built for later use, but it must not publish fabricated values. Strategic targets must never be presented as achieved outcomes.

### Interchange WA
Reference: https://interchangewa.org.au/

Use for:
- moving/layered cards inspired by the “Our Approach” treatment;
- controlled colour-changing tile states on hover;
- tactile card interaction;
- responsive card behaviour.

Translate these interaction principles primarily into People / Place / Prosperity and/or the Good Crowd Values. Hover behaviour must have keyboard/focus equivalents and sensible touch-device behaviour.

## Extended interaction references
The following Awwwards-discovered references extend the interaction language. They are references for mechanics, rhythm and composition only.

### Ascend
Reference: https://ascendmarketing.xyz/

Use for:
- a strong visual element that progresses vertically with scroll;
- inspiration for the Good Crowd continuous infinity journey;
- a vertical partner/client-logo rail on large desktop layouts;
- maintaining visual continuity between sections rather than treating each section as an isolated block.

Good Crowd translation:
- the infinity-derived SVG line originates at/near the hero identity and continues through the homepage;
- it may pass behind imagery/cards and visually connect major sections;
- a partner/community/supporter logo rail may move vertically on wide screens once real approved logos exist;
- on tablet/mobile, replace the vertical rail with a conventional horizontal or wrapped logo treatment rather than forcing the desktop interaction.

### Jaéco
Reference: https://www.jaeco.fr/

Use for:
- cinematic moving/video project presentation;
- editorial case-study rhythm;
- integrating quantified outcomes into a project/event story rather than displaying disconnected counters;
- immersive transitions between story, footage and results.

Good Crowd translation:
- create a reusable future `EventStory` / `ImpactStory` pattern for approved completed events;
- support video/poster, event name, region/date, short editorial narrative, measured impact figures, imagery and a full-story CTA;
- potential measured fields include attendance, visitor origin, local spend, local suppliers, volunteer participation and reach only when those values have been approved and substantiated;
- do not use Business Plan targets or placeholder numbers as achieved event outcomes.

### Verticalloop — Design for Good
Reference: https://www.verticalloop.com/

Use for:
- overall purpose-led visual restraint;
- oversized editorial typography;
- generous whitespace;
- integrated client/partner scrolling treatments;
- balancing expressive design with social-impact credibility.

Good Crowd translation:
- avoid filling every section with cards, borders or animation;
- use large typography and warm imagery to create rhythm;
- partner/community logos should feel part of the composition rather than a generic sponsor-logo footer wall.

### Infinity Constellation
Reference: https://www.infinityconstellation.com/

Use for:
- team/founder presentation near the lower part of a page;
- treating people as part of a connected collective rather than generic corporate profile cards;
- portrait-led editorial layouts and layered geometry.

Good Crowd translation:
- founder/team presentation may use oversized or oval/circular portrait crops, infinity-derived geometry, role labels and concise approved biographies;
- focus/hover may gently bring one profile forward while maintaining accessible content order;
- mobile treatment should become a clear stacked editorial sequence;
- do not invent team members or biographies.

## Partner/community logo motion
A vertical moving logo rail may be used on wide desktop screens if sufficient approved partner/community/supporter logos exist. It must not become a sticky obstruction or compete with primary content.

Requirements:
- real approved logos only;
- descriptive accessible labelling where needed;
- pause/reduced-motion behaviour;
- no continuous high-speed marquee;
- transform to horizontal/wrapped presentation on smaller viewports;
- preserve logo integrity and adequate contrast.

## Event impact storytelling
Impact should be communicated as evidence attached to a real story, not as decorative numbers. Once measured and approved event data exists, the preferred hierarchy is:
1. event footage or strong imagery;
2. event name, region and date;
3. concise editorial story;
4. measured outcome figures;
5. supporting photo/video moments;
6. link to the full Event Story.

Animated figures may count/reveal when entering the viewport, but the final numeric value must always be available without animation. Strategic targets, projections and ambitions must be clearly distinguished from measured outcomes and should not populate this component by default.

## Motion principles
Motion should reinforce gathering, connection and discovery. Appropriate patterns include subtle card movement, layered reveals, controlled colour transitions, restrained line/infinity movement, video-led editorial transitions and slow partner-logo movement.

Requirements:
- respect `prefers-reduced-motion`;
- no essential information may depend on animation;
- avoid excessive parallax or scroll-jacking;
- preserve native browser scrolling;
- avoid animation that delays navigation or reading;
- avoid excessive simultaneous motion;
- favour CSS and SVG where they provide the same result cleanly;
- use Motion for React only where interaction genuinely benefits from it;
- test performance on mid-range mobile hardware, not only desktop.

## Visual direction image
If `docs/design/homepage-direction.png` is present, treat it as concept direction only. It is not a pixel-perfect specification and may contain generated imagery or illustrative decisions that are not approved production content. Brand rules and approved copy remain authoritative.

## Accessibility and quality
The visual system must support WCAG 2.2 AA, visible keyboard focus, semantic structure, readable line lengths, sufficient contrast, touch-friendly controls and reduced-motion behaviour. A visually expressive result is not an excuse for inaccessible interaction.
