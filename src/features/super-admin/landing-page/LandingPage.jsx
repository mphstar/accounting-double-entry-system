import HeadPage from "@/components/HeadPage/HeadPage";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import TemplatePage from "./TemplatePage";
import TopBar from "./section/TopBar";
import CustomPage from "./section/CustomPage";
import HomeSection from "./section/HomeSection";
import Features from "./section/Features";
import Discover from "./section/Discover";
import Screenshot from "./section/Screenshoot";
import PricingPlan from "./section/PricingPlan";
import Faq from "./section/Faq";
import Testimoni from "./section/Testimoni";
import JoinUs from "./section/JoinUs";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Landing Page"}
        breadcrumb={"Landing Page"}
        actions={<div className="flex gap-2"></div>}
      />

      <TemplatePage>
        <div className="flex flex-col w-full gap-3">
          <TopBar />
          <CustomPage />
          <HomeSection />
          <Features />
          <Discover />
          <Screenshot />
          <PricingPlan />
          <Faq />
          <Testimoni />
          <JoinUs />
        </div>
      </TemplatePage>
    </div>
  );
};

export default LandingPage;
