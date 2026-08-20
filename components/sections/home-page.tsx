import { HomeHero } from "@/components/sections/home-hero";
import { PeoplePlaceProsperity } from "@/components/sections/people-place-prosperity";
import { PageCta } from "@/components/sections/secondary-page-primitives";
import {
  EventMotionReel,
  EventStoryArchitecture,
  FounderSection,
  GoodReadsSection,
  MissionManifesto,
  PartnerCommunitySection,
  StoryTeaser,
  ValuesBand,
  WorkWithUsSection,
} from "@/components/sections/homepage-story-sections";

export function HomePage() {
  return (
    <div className="home-page relative">
      <HomeHero />
      <PeoplePlaceProsperity />
      <MissionManifesto />
      <StoryTeaser />
      <EventMotionReel />
      <EventStoryArchitecture />
      <PartnerCommunitySection />
      <GoodReadsSection />
      <WorkWithUsSection />
      <ValuesBand />
      <FounderSection />
      <PageCta
        eyebrow="Start a conversation"
        title="Ready to bring a good crowd together?"
        body="Talk with Good Crowd about regional events, partnerships, community participation or the opportunity you want to create."
        href="/contact"
        label="Contact Good Crowd"
      />
    </div>
  );
}
