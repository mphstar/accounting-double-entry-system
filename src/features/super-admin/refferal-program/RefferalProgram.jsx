import HeadPage from "@/components/HeadPage/HeadPage";
import React from "react";
import TemplatePage from "./TemplatePage";
import Transaction from "./section/Transaction";
import PayoutRequest from "./section/PayoutRequest";
import Settings from "./section/Settings";

const RefferalProgram = () => {
  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Landing Page"}
        breadcrumb={"Landing Page"}
        actions={<div className="flex gap-2"></div>}
      />

      <TemplatePage>
        <div className="flex flex-col w-full gap-3">
          <Transaction />
          <PayoutRequest />
          <Settings />
        </div>
      </TemplatePage>
    </div>
  );
};

export default RefferalProgram;
