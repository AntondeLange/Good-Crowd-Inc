# Good Crowd Inc Website — Implementation Specification

## Objective
Create a production-quality public website for Good Crowd Inc that expresses the approved brand as warm, golden and alive while remaining fast, accessible, maintainable and credible to councils, government bodies, sponsors, event partners and regional communities.

The site should feel deliberately designed rather than template-driven. Its signature interaction concept is **one continuous line connecting people, place and outcomes**: an infinity-derived visual journey that begins around the hero identity and progresses through the homepage as the visitor scrolls.

## Launch information architecture
1. `/` — Home
2. `/about` — About
3. `/work-with-us` — Work With Us
4. `/stories` — Good Reads
5. `/contact` — Contact

Future only unless separately approved: Events, Impact, Get Involved.

## Technical baseline
- Next.js App Router
- TypeScript with strict mode
- Tailwind CSS
- Motion for React only where meaningful interaction warrants it
- Vercel deployment
- Static-first rendering
- MDX or typed local content for initial Good Reads content
- Consider Sanity only when an actual non-technical publishing workflow is required

Use the framework/tooling versions actually established on the current branch/main. Do not downgrade framework dependencies to match older documentation examples.

## Brand implementation
Use design tokens rather than scattered literal values. Primary visual ingredients are deep earthy brown, warm peach/sand, warm whites, bold geometric display typography, generous rounded forms, circles/ovals and the Good Crowd infinity motif. Use the supplied logo files; do not trace or recreate the mark.

The default visual experience should be editorial and human, not a conventional NFP/council template. Motion should reinforce gathering, connection and discovery rather than serve as decoration.

## Signature infinity scroll system
Create the homepage around a separate infinity-derived SVG/path that visually progresses down the page with scroll.

Requirements:
- preserve the supplied production logo unchanged;
- do not morph/deform the logo itself;
- the animated path is a separate decorative asset/component inspired by the brand geometry;
- it should appear to originate from or visually continue the hero identity without pretending to be part of the logo file;
- connect major homepage sections through position, path progression or framing;
- prefer SVG/CSS/scroll progress over WebGL/canvas;
- no scroll-jacking;
- no essential content depends on the line;
- provide a reduced-motion/static state;
- prevent the line from interfering with text readability, controls or focus indication;
- keep implementation modular so individual sections do not tightly depend on one giant client component.

Treat this as the signature interaction, not one animation among dozens. Other motion should be quieter so the page remains coherent.

## Homepage scroll architecture
Use this as the preferred composition, adapting where approved launch content/assets are unavailable:

### 1. Hero
- Good Crowd logo/identity using supplied production assets.
- Approved headline, supporting copy and Work With Us / Our Story CTAs.
- Strong warm editorial composition.
- Infinity journey originates visually here.

### 2. People / Place / Prosperity
- Three prominent interactive cards/fields.
- Draw from Interchange WA for moving/layered card behaviour and colour-state transitions.
- Avoid small generic icon cards.
- Infinity path may pass behind/between the cards.
- Hover has equivalent focus behaviour; mobile does not depend on hover.

### 3. Mission / manifesto interruption
- Large typography and strong colour field.
- Deliberately calmer interaction moment.
- Use the infinity journey to lead into/out of the section rather than adding another unrelated effect.

### 4. Event motion reel
- Provide architecture for cinematic approved event footage inspired by Jaéco.
- If approved footage does not exist at implementation time, use a controlled poster/image placeholder rather than fabricated/generated event video.
- Video must be performance- and accessibility-conscious.

### 5. Event / impact story system
This section may remain unpublished/placeholder-free until real completed-event content exists.

Build reusable architecture capable of supporting:
- video/poster or feature image;
- event name;
- region/date;
- short editorial narrative;
- approved measured statistics;
- supporting imagery;
- full Event Story CTA.

Potential measured fields include attendance, visitor origin, local spend, local suppliers, volunteer participation and media/social reach only when substantiated and approved.

Do not present Business Plan targets, projections or development placeholders as achieved outcomes.

### 6. Partners / communities / supporters
- Prepare a partner-logo system.
- On sufficiently wide desktop layouts, it may become a slow vertical scrolling rail inspired by Ascend and Verticalloop.
- On tablet/mobile, use horizontal, wrapped or conventional grid presentation.
- Do not publish placeholder organisations/logos.
- Hide/omit the section when approved content does not exist rather than fabricating social proof.

### 7. Good Reads
- Editorial treatment rather than a generic corporate three-card blog.
- Support Community Profiles, Event Recaps/Event Stories, Regional Discoveries and Good Crowd News.
- Use real approved content only.

### 8. Work With Us
- Distinct pathways for councils/government, sponsors/corporate partners, tourism/government bodies and event partners/suppliers/volunteers.
- Keep the section visually clear after more expressive storytelling sections.

### 9. Team / founders
- Use an editorial, connected-collective treatment inspired by Infinity Constellation rather than generic equal-sized employee cards.
- Use approved portraits and biographies only.
- Portraits may use oval/circular crops and layered infinity geometry.
- Focus/hover may subtly foreground a profile; mobile stacks cleanly.

### 10. Footer
- Complete navigation/contact/legal structure.
- Where visually appropriate, allow the infinity journey to resolve into or near the footer identity without altering the supplied logo.

## Motion hierarchy
The page should not behave like a collection of Awwwards demos. Prioritise motion in this order:
1. infinity scroll journey — signature;
2. People / Place / Prosperity card interaction;
3. event video/story transitions when content exists;
4. partner-logo movement when content exists;
5. subtle reveal/count animation for approved measured statistics;
6. minor hover/reveal polish.

If multiple effects compete for attention, remove or simplify the lower-priority effect.

## Event Story content model
Treat Event Stories as a richer subtype/use case within Good Reads rather than creating a new top-level launch route unless later approved.

Suggested typed model:
- slug
- title
- category
- region
- eventDate
- excerpt
- heroImage or video/poster
- body/story content
- impact metrics array with label, value, unit/source note where appropriate
- gallery/media
- optional partner acknowledgements
- publication date

Never fabricate a metric to satisfy the schema. Empty/absent metrics are valid.

## Animated statistics
A reusable statistic component may support viewport reveal/count behaviour inspired by Event Society and Jaéco.

Requirements:
- final value exists as actual text/semantic content;
- animation is enhancement only;
- reduced-motion users receive the final value without counting animation;
- component accepts only supplied data and has no hard-coded Good Crowd claims;
- distinguish measured outcomes from strategic targets at the content-model level if targets are ever intentionally published.

## Partner logo rail
Implement only when approved logos are available.

Desktop behaviour may include a vertical rail that progresses slowly with scroll. Requirements:
- never obstruct navigation or primary content;
- preserve native scrolling;
- pause/static behaviour for reduced motion;
- responsive alternative below the desktop breakpoint;
- no cloned placeholder logos in production;
- maintain accessible names and brand integrity.

## About
Include the approved opening proposition, organisation story, purpose/vision, values, founding story and not-for-profit commitment. Values should work well as a four-card responsive system and may reuse the controlled Interchange-inspired movement/colour language without duplicating the exact homepage interaction.

## Work With Us
Create distinct pathways for:
- Local councils & government / host regions
- Sponsors & corporate partners
- Tourism & government bodies
- Event partners / suppliers / volunteers

Each pathway needs a clear CTA. Sponsorship prospectus links must remain disabled/configured as pending until the real asset exists.

## Good Reads
Initial categories:
- All Stories
- Community Profiles
- Event Recaps
- Regional Discoveries
- Good Crowd News

Article cards: category, headline, 25–30 word intro, region/date and Read More. Build a reusable article detail route at `/stories/[slug]` and Article structured data.

Event Recaps may evolve into the richer Event Story presentation described above without changing the launch IA.

## Contact
Fields:
- Name
- Email
- “I am a…” selector
- Message

Selector options: Community member, Volunteer, Local business, Council, Sponsor, Media, Other.

Do not assume suggested mailbox destinations are operational. Store destinations in configuration/environment variables and confirm before production activation. Add server-side validation, spam protection and a clear privacy statement before launch.

## Reference interaction direction
Borrow behaviours rather than appearances from reference sites. `docs/brand/BRAND_GUIDE.md` contains the detailed reference mapping.

Core references:
- The Conference Group — editorial NFP hierarchy and whitespace.
- Event Society — scrolling/animated number behaviour.
- Interchange WA — moving cards and colour-changing hover/focus states.
- Ascend — continuous vertical visual journey and desktop vertical logo rail.
- Jaéco — moving video, project/event storytelling and integrated outcome figures.
- Verticalloop — purpose-led visual restraint, large typography and integrated client/logo movement.
- Infinity Constellation — connected, portrait-led team/founder presentation.

Do not clone layouts, assets or proprietary interaction code.

## Accessibility
Target WCAG 2.2 AA. Require semantic landmarks/headings, keyboard operation, visible focus, sufficient contrast, descriptive alt text, labelled form fields, accessible validation and reduced-motion behaviour.

Every hover-dependent design must have a keyboard/focus equivalent. Touch layouts must expose the same information without hover. Video needs a meaningful poster/static alternative. The infinity path must be decorative to assistive technology unless it communicates approved content explicitly.

## SEO
Implement route-specific metadata, canonical URLs, Open Graph/Twitter metadata, sitemap, robots, Organization JSON-LD, Article JSON-LD for stories and sensible internal linking. Do not publish unverified organisation/legal metadata.

## Performance
Prioritise server components and static generation. Use `next/image`, responsive image sizes, lazy loading below the fold, minimal font payloads and limited third-party scripts. Avoid animation libraries on sections that CSS/SVG can handle cleanly.

Additional requirements for the richer visual direction:
- optimise/compress event video and provide poster images;
- do not autoplay multiple videos simultaneously;
- avoid large above-the-fold video unless it materially improves the hero;
- test scroll-linked effects on mid-range mobile hardware;
- avoid converting the entire homepage to a client component;
- dynamically/lazily load interaction code where sensible;
- monitor Core Web Vitals after motion/video implementation.

## Definition of done for first design milestone
The first design milestone is not “all pages partly built.” It is:
1. project/tooling baseline builds cleanly;
2. global design tokens and typography established;
3. responsive header/footer complete;
4. Home page production-quality across mobile/tablet/desktop;
5. signature infinity-scroll system implemented or convincingly prototyped with graceful reduced-motion behaviour;
6. People / Place / Prosperity interaction complete;
7. event-video and partner-logo sections either use approved assets or are omitted/implemented as reusable architecture without fabricated production content;
8. reusable section/card/motion primitives extracted;
9. lint, typecheck and production build pass;
10. no fabricated content, statistics, partner logos or event media.
