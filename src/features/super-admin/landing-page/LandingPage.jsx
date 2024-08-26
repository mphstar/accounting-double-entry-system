import HeadPage from "@/components/HeadPage/HeadPage";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import TemplatePage from "./TemplatePage";
import TopBar from "./section/TopBar";
import CustomPage from "./section/CustomPage";
import HomeSection from "./section/HomeSection";

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
        </div>
      </TemplatePage>
    </div>
  );
};

export default LandingPage;
