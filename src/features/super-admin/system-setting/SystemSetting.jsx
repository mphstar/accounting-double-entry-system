import HeadPage from "@/components/HeadPage/HeadPage";
import React from "react";
import TemplatePage from "./TemplatePage";
import BrandSettings from "./section/BrandSettings";
import EmailSettings from "./section/EmailSettings";
import PaymentSettings from "./section/PaymentSettings";
import ReCaptchaSettings from "./section/ReCaptchaSettings";
import StorageSettings from "./section/StorageSettings";
import SeoSettings from "./section/SeoSettings";
import CookieSettings from "./section/CookieSettings";
import CacheSettings from "./section/CacheSettings";
import ChatGptSettings from "./section/ChatGptSettings";

const SystemSetting = () => {
  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Settings"}
        breadcrumb={"Settings"}
        actions={<div className="flex gap-2"></div>}
      />

      <TemplatePage>
        <div className="flex flex-col w-full gap-3">
          <BrandSettings />
          <EmailSettings />
          <PaymentSettings />
          <ReCaptchaSettings />
          <StorageSettings />
          <SeoSettings />
          <CookieSettings />
          <CacheSettings />
          <ChatGptSettings />
        </div>
      </TemplatePage>
    </div>
  );
};

export default SystemSetting;
