import { HeroSection, HeroTitle, HeroDescription } from "./styled";

function Hero() {
  return (
    <HeroSection>
      <HeroTitle>Are you as good of an FPL manager as your mates?</HeroTitle>
      <HeroDescription>
        FPL Transfers compares your gameweek performance to your mates&apos; to
        see who makes the better transfers.
      </HeroDescription>
    </HeroSection>
  );
}

export default Hero;
