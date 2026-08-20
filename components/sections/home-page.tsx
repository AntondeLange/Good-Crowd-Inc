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
    </div>
  );
}
