# Good Crowd Inc — Codex Instructions

## Project intent
Build and maintain the official Good Crowd Inc website from the approved website brief, copy and brand system. Do not invent claims, impact statistics, partner names, event data, contact details or downloadable collateral.

## Product principles
- Warm, golden and alive; never generic corporate or government styling.
- Regional Australia, community connection and purposeful events are the core narrative.
- Use the launch information architecture: Home, About, Work With Us, Good Reads, Contact.
- Treat Events, Impact and Get Involved as future pages unless explicitly approved.
- Standardise the web expression on “People. Place. Prosperity.” unless directed otherwise.
- Use supplied brand assets rather than recreating the logo.
- Photography should feel candid, regional, human and editorial rather than stock-corporate.

## Engineering principles
- Next.js App Router + TypeScript.
- Static/server components by default; add client components only where interaction requires them.
- Keep content separate from reusable presentation components.
- Semantic HTML and WCAG 2.2 AA as the baseline.
- All animation must respect prefers-reduced-motion.
- Avoid unnecessary dependencies and client-side JavaScript.
- Optimise images and Core Web Vitals.
- Do not commit secrets.

## Content integrity
Approved source copy is authoritative. Preserve its meaning and voice. Do not fabricate missing content. Mark unresolved operational details as TODO/configuration rather than publishing assumptions.

## Workflow
Work on focused feature branches and open pull requests against main. Keep commits coherent and run lint/typecheck/build before requesting review.
