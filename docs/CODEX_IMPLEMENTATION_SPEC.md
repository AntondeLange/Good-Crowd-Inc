# Good Crowd Inc Website — Implementation Specification

## Objective
Create a production-quality public website for Good Crowd Inc that expresses the approved brand as warm, golden and alive while remaining fast, accessible, maintainable and credible to councils, government bodies, sponsors, event partners and regional communities.

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

## Brand implementation
Use design tokens rather than scattered literal values. Primary visual ingredients are deep earthy brown, warm peach/sand, warm whites, bold geometric display typography, generous rounded forms, circles/ovals and the Good Crowd infinity motif. Use the supplied logo files; do not trace or recreate the mark.

The default visual experience should be editorial and human, not a conventional NFP/council template. Motion should reinforce gathering, connection and discovery rather than serve as decoration.

## Homepage
Build in this order:
- Immersive hero with approved headline, subheading and Work With Us / Our Story CTAs.
- People / Place / Prosperity interactive card section.
- Full-width mission statement interruption.
- Manifesto/story teaser linking to About.
- Work With Us invitation.
- Good Reads teaser when launch stories are available.

Do not invent impact statistics simply to reproduce the scrolling-number inspiration. Add a reusable stats component only when defensible data exists.

## About
Include the approved opening proposition, organisation story, purpose/vision, values, founding story and not-for-profit commitment. Values should work well as a four-card responsive system.

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

## Contact
Fields:
- Name
- Email
- “I am a…” selector
- Message

Selector options: Community member, Volunteer, Local business, Council, Sponsor, Media, Other.

Do not assume suggested mailbox destinations are operational. Store destinations in configuration/environment variables and confirm before production activation. Add server-side validation, spam protection and a clear privacy statement before launch.

## Interaction direction
Borrow behaviours rather than appearances from reference sites:
- subtle card movement/expansion
- controlled hover colour transitions
- editorial scrolling rhythm
- number animation only when real statistics exist

All motion must respect `prefers-reduced-motion`. Hover states must have keyboard/focus equivalents.

## Accessibility
Target WCAG 2.2 AA. Require semantic landmarks/headings, keyboard operation, visible focus, sufficient contrast, descriptive alt text, labelled form fields, accessible validation and reduced-motion behaviour.

## SEO
Implement route-specific metadata, canonical URLs, Open Graph/Twitter metadata, sitemap, robots, Organization JSON-LD, Article JSON-LD for stories and sensible internal linking. Do not publish unverified organisation/legal metadata.

## Performance
Prioritise server components and static generation. Use `next/image`, responsive image sizes, lazy loading below the fold, minimal font payloads and limited third-party scripts. Avoid animation libraries on sections that CSS can handle cleanly.

## Definition of done for first milestone
The first milestone is not “all pages partly built.” It is:
1. project/tooling baseline builds cleanly;
2. global design tokens and typography established;
3. responsive header/footer complete;
4. Home page production-quality across mobile/tablet/desktop;
5. reusable section/card primitives extracted;
6. lint, typecheck and production build pass;
7. no fabricated content or statistics.
