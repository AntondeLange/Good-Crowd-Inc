# Good Crowd Inc — Codex Instructions

## Required reading before material changes
Before implementing or redesigning the website, read:
1. `AGENTS.md`
2. `docs/CODEX_IMPLEMENTATION_SPEC.md`
3. `docs/content/WEBSITE_COPY.md`
4. `docs/brand/BRAND_GUIDE.md`
5. `docs/context/ORGANISATIONAL_CONTEXT.md`
6. `docs/design/homepage-direction.png` if present
7. approved assets under `public/brand` and `public/images`

Treat the copy and brand documents as source-of-truth repository guidance. Use the organisational context document to distinguish public facts from internal strategy, future targets and governance material. The visual direction image is concept direction only and must not override approved copy or brand rules.

## Project intent
Build and maintain the official Good Crowd Inc website from the approved website brief, copy and brand system. Do not invent claims, impact statistics, partner names, event data, contact details or downloadable collateral.

## Product principles
- Warm, golden and alive; never generic corporate or government styling.
- Regional Australia, community connection and purposeful events are the core narrative.
- Use the launch information architecture: Home, About, Work With Us, Good Reads, Contact.
- Treat Events, Impact and Get Involved as future pages unless explicitly approved.
- Standardise the web expression on “People. Place. Prosperity.” unless explicitly directed otherwise.
- Use supplied brand assets rather than recreating the logo.
- Photography should feel candid, regional, human and editorial rather than stock-corporate.

## Reference-site rules
Borrow interaction principles, not visual identities, code, copy or assets:
- The Conference Group NFP page: editorial hierarchy, spacing and mission-led presentation.
- Event Society team page: scrolling/animated-number behaviour and editorial rhythm. Do not invent Good Crowd statistics.
- Interchange WA: moving/layered cards and controlled colour-changing hover states, particularly as inspiration for People / Place / Prosperity and Values.

Hover behaviour must have keyboard/focus equivalents. Touch behaviour must not depend on hover. All animation must respect `prefers-reduced-motion`.

## Engineering principles
- Next.js App Router + TypeScript.
- Static/server components by default; add client components only where interaction requires them.
- Keep content separate from reusable presentation components.
- Semantic HTML and WCAG 2.2 AA as the baseline.
- Avoid unnecessary dependencies and client-side JavaScript.
- Optimise images and Core Web Vitals.
- Do not commit secrets.
- Do not source or commit unlicensed commercial font files.
- Do not pull arbitrary internet photography into production.

## Content integrity
Approved source copy is authoritative. Preserve its meaning and voice. Do not fabricate missing content. Mark unresolved operational details as TODO/configuration rather than publishing assumptions.

Strategic targets in organisational planning documents are not achieved impact statistics. A reusable stats component may be prepared for later approved data, but future targets or fabricated values must never appear as production achievements.

## Asset integrity
Use real supplied Good Crowd logos. Do not trace or reconstruct them. Production web assets belong under `public/brand` (logos/brand marks) and `public/images` (approved photography). Concept/reference design images belong under `docs/design`.

If assets have been uploaded elsewhere in the repository, relocate/reference them into the correct structure before implementation rather than coding against accidental root-level paths.

Generated visual concepts are not approved photography. They may guide composition and hierarchy only.

## Workflow
Work on focused feature branches and open pull requests against main. Keep commits coherent and run lint, typecheck and production build before requesting review.

For significant tasks:
1. inspect the existing implementation;
2. state/understand the intended scope;
3. make focused changes;
4. run relevant checks;
5. report files changed, commands/checks run, unresolved issues and recommended next step.

The first design milestone is a production-quality Home page and global design system, not five partially redesigned pages.
