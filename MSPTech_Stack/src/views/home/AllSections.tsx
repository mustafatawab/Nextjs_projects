import Wrapper from "@/components/Wrapper/wrapper";
import React from "react";
import Services from "./services";
import Marketplace from "./marketplace";
import EdgeEnablement from "./edgeEnablement";
import ScheduleDemo from "./scheduleDemo";
import AiNetOps from "./AiNetOps";
import GoToMarket from "./goToMarket";
import News from "./news";
import TalktoUs from "./talkToUs";
import SmallSection from "./smallSection";
import CloudToEdge from "./cloudToEdge";
import HeroSection from "./hersection";
const Main = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection />

      {/* Section 1 - Cloud To Edge */}
      <CloudToEdge />

      {/* Section 2 - Services */}
      <Services />

      {/* Section 3 - Marketplace */}
      <Marketplace />

      {/* section 4 - why edge enablement is needed */}
      <EdgeEnablement />

      {/* Section 5 - Schedule a Demo */}
      <ScheduleDemo />

      {/* Section 6 - MSPTech Stack AINetOps */}
      <AiNetOps />

      {/*Section 7 - The easiest way to accelerate your go-to-market reach */}
      <GoToMarket />

      {/* Section 8 */}
      <SmallSection />

      {/* Section 9 - News */}
      <News />

      {/* Section 10 - Talk To Us */}
      <TalktoUs />
    </Wrapper>
  );
};

export default Main;
