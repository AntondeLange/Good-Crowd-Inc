import { InfinityJourney } from "@/components/motion/infinity-journey";
import { HomeHero } from "@/components/sections/home-hero";
import { PeoplePlaceProsperity } from "@/components/sections/people-place-prosperity";
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
    <div className="home-page relative overflow-hidden">
      <InfinityJourney />
      <div className="relative">
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
      </div>
    </div>
  );
}
