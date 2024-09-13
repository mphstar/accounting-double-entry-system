import HeadPage from "@/components/HeadPage/HeadPage";
import React from "react";
import TemplatePage from "./TemplatePage";
import Settings from "./section/Payout";
import GuideLine from "./section/GuideLine";
import RefferalTransaction from "./section/RefferalTransaction";
import Payout from "./section/Payout";

const RefferalProgram = () => {
  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Refferal Program"}
        breadcrumb={"Refferal Program"}
        actions={<div className="flex gap-2"></div>}
      />

      <TemplatePage>
        <div className="flex flex-col w-full gap-3">
          <GuideLine />
          <RefferalTransaction />
          <Payout />
        </div>
      </TemplatePage>
    </div>
  );
};

export default RefferalProgram;
