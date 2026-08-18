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

## Photography
Photography should feel candid, regional, warm and human. Prioritise:
- real community gatherings;
- regional landscapes and town character;
- local makers, producers and businesses;
- people interacting naturally;
- golden-hour / warm natural light where appropriate;
- details and “in-between” moments rather than staged corporate poses.

Avoid generic corporate stock photography. Do not pull arbitrary internet photography into production. If approved photography is unavailable, use controlled placeholders and clearly flag the asset gap.

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

Important: Good Crowd currently has no approved impact statistics in the supplied website material. Do not invent numbers to reproduce this reference. A reusable animated-stat component may be built for later use, but it must not publish fabricated values.

### Interchange WA
Reference: https://interchangewa.org.au/

Use for:
- moving/layered cards inspired by the “Our Approach” treatment;
- controlled colour-changing tile states on hover;
- tactile card interaction;
- responsive card behaviour.

Translate these interaction principles primarily into People / Place / Prosperity and/or the Good Crowd Values. Hover behaviour must have keyboard/focus equivalents and sensible touch-device behaviour.

## Motion principles
Motion should reinforce gathering, connection and discovery. Appropriate patterns include subtle card movement, layered reveals, controlled colour transitions and restrained line/infinity movement.

Requirements:
- respect `prefers-reduced-motion`;
- no essential information may depend on animation;
- avoid excessive parallax or scroll-jacking;
- avoid animation that delays navigation or reading;
- favour CSS where it provides the same result cleanly;
- use Motion for React only where interaction genuinely benefits from it.

## Visual direction image
If `docs/design/homepage-direction.png` is present, treat it as concept direction only. It is not a pixel-perfect specification and may contain generated imagery or illustrative decisions that are not approved production content. Brand rules and approved copy remain authoritative.

## Accessibility and quality
The visual system must support WCAG 2.2 AA, visible keyboard focus, semantic structure, readable line lengths, sufficient contrast, touch-friendly controls and reduced-motion behaviour. A visually expressive result is not an excuse for inaccessible interaction.
