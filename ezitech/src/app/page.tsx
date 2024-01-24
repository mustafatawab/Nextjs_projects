import React from "react";
import HeroSection from "./views/heroSection/HeroSection";
import Header from "./views/header/Header";
import Services from "./views/services/Services";
import Portfolio from "./views/portfolio/Portfolio";
import MoreAbout from "./views/MoreAbout/MoreAbout";
import Feedback from "./views/feedback/Feedback";
import Work from "./views/workTogether/Work";
import SideIcons from "./views/sideIcons/SideIcons";

function HomePage() {
  return (
    <>
      <HeroSection />
      <SideIcons />
      <Services />

      <Portfolio />
      <MoreAbout />
      <Feedback />
      <Work />
    </>
  );
}

export default HomePage;
