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

type EditorialImage = {
  src: string;
  alt: string;
};

type Pillar = {
  title: "People" | "Place" | "Prosperity";
  copy: string;
  image?: EditorialImage;
};

export const pillars: readonly Pillar[] = [
  {
    title: "People",
    copy: "Good Crowd creates moments that bring communities together, building connection, pride and a genuine sense of belonging.",
    image: {
      src: "/images/community/community-market-branded.jpeg",
      alt: "A Good Crowd-branded community market scene with stalls and visitors.",
    },
  },
  {
    title: "Place",
    copy: "Good Crowd celebrates what makes regional places extraordinary and helps put regional areas on the map for visitors and locals alike.",
    image: {
      src: "/images/place/canola-field-treeline.jpeg",
      alt: "A canola field and mature treeline in a regional landscape.",
    },
  },
  {
    title: "Prosperity",
    copy: "Good Crowd designs events that direct economic energy into local businesses, producers and makers.",
    image: {
      src: "/images/events/garden-event-dining-branded.jpeg",
      alt: "A Good Crowd-branded outdoor dining event setting with tables under lights.",
    },
  },
];

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
    copy: "Connect with Good Crowd about participating in regional events as plans and opportunities are confirmed.",
  },
] as const;

export const missionVision = {
  mission:
    "To gather good crowds in regional Australia through purposeful events and experiences that leave lasting pride, visibility and prosperity behind.",
  vision:
    "A future where the communities of regional Australia are no longer the best kept secret — they are the destination.",
} as const;

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

export type StoryCategory = (typeof storyCategories)[number];
export type PublishableStoryCategory = Exclude<StoryCategory, "All Stories">;

export type GoodReadArticle = {
  slug: string;
  title: string;
  category: PublishableStoryCategory;
  excerpt: string;
  region?: string;
  publishedAt?: string;
  heroImage?: {
    src: string;
    alt: string;
  };
};

export const approvedGoodReads: GoodReadArticle[] = [];

export const contactEnquiryOptions = [
  "Community member",
  "Volunteer",
  "Local business",
  "Council",
  "Sponsor",
  "Media",
  "Other",
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
