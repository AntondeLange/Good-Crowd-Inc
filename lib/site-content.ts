export const siteNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "Good Reads", href: "/stories" },
  { label: "Contact", href: "/contact" },
] as const;

export const homeHero = {
  eyebrow: "People. Place. Prosperity.",
  headline: "You haven’t discovered some of Australia’s best kept secrets yet. We’re here to fix that.",
  body: "Good Crowd Inc. brings regional communities together through high-quality events that build belonging, attract visitors and grow local economies.",
  primaryCta: { label: "Work With Us", href: "/work-with-us" },
  secondaryCta: { label: "Our Story", href: "/about" },
} as const;

export const pillars = [
  {
    title: "People",
    copy: "Good Crowd creates moments that bring communities together, building connection, pride and a genuine sense of belonging.",
  },
  {
    title: "Place",
    copy: "Good Crowd celebrates what makes regional places extraordinary and helps put regional areas on the map for visitors and locals alike.",
  },
  {
    title: "Prosperity",
    copy: "Good Crowd designs events that direct economic energy into local businesses, producers and makers.",
  },
] as const;

export const workWithUsAudiences = [
  {
    title: "Local councils & government",
    copy: "Collaborate on high-quality regional events shaped around community connection, visibility and place-based outcomes.",
  },
  {
    title: "Sponsors & corporate partners",
    copy: "Explore partnership opportunities aligned with regional communities, local pride and purposeful participation.",
  },
  {
    title: "Tourism & government bodies",
    copy: "Work with Good Crowd around regional visibility, visitation, connection and destination development.",
  },
  {
    title: "Event partners, suppliers & volunteers",
    copy: "Take part in making Good Crowd events happen through future confirmed participation pathways.",
  },
] as const;

export const values = [
  {
    title: "Goodness",
    copy: "Design and decision-making should reflect legacy, relationships, community pride and positive long-term impact.",
  },
  {
    title: "Connection",
    copy: "Collaboration and connection across communities and boundaries are central to the model.",
  },
  {
    title: "Glee",
    copy: "Good Crowd should make room for genuine enjoyment, energy and celebration without forced hype.",
  },
  {
    title: "Community",
    copy: "People and relationships are fundamental to how Good Crowd defines success.",
  },
] as const;

export const storyCategories = [
  "All Stories",
  "Community Profiles",
  "Event Recaps",
  "Regional Discoveries",
  "Good Crowd News",
] as const;

export type ImpactMetric = {
  label: string;
  value: string;
  unit?: string;
  sourceNote?: string;
};

export type EventStory = {
  slug: string;
  title: string;
  category: "Community Profile" | "Event Recap" | "Regional Discovery" | "Good Crowd News";
  region?: string;
  eventDate?: string;
  excerpt: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  video?: {
    src: string;
    poster: string;
  };
  impactMetrics?: ImpactMetric[];
  acknowledgements?: string[];
};

export const approvedEventStories: EventStory[] = [];

export const approvedPartnerLogos: Array<{
  name: string;
  src: string;
  href?: string;
}> = [];

export const founders = [
  {
    name: "Tamara de Lange",
    role: "Founder",
  },
  {
    name: "Sarah Moore",
    role: "Founder",
  },
] as const;
