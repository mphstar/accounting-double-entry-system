import HeadPage from "@/components/HeadPage/HeadPage";
import React from "react";
import TemplatePage from "./TemplatePage";
import BrandSettings from "./section/BrandSettings";
import SystemSettings from "./section/SystemSettings";
import CompanySettings from "./section/CompanySettings";
import EmailSettings from "./section/EmailSettings";
import ProposalPrintSettings from "./section/ProposalPrintSettings";
import RetainerPrintSettings from "./section/RetainerPrintSettings";
import InvoicePrintSettings from "./section/InvoicePrintSettings";
import BillPrintSettings from "./section/BillPrintSettings";
import PaymentSettings from "./section/PaymentSettings";
import TwillioSettings from "./section/TwillioSettings";
import EmailNotificationSettings from "./section/EmailNotificationSettings";
import WebhookSettings from "./section/WebhookSettings";

const SystemSetting = () => {
  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Refferal Program"}
        breadcrumb={"Refferal Program"}
        actions={<div className="flex gap-2"></div>}
      />

      <TemplatePage>
        <div className="flex flex-col w-full gap-3">
          <BrandSettings />
          <SystemSettings />
          <CompanySettings />
          <EmailSettings />
          <ProposalPrintSettings />
          <RetainerPrintSettings />
          <InvoicePrintSettings />
          <BillPrintSettings />
          <PaymentSettings />
          <TwillioSettings />
          <EmailNotificationSettings />
          <WebhookSettings />
        </div>
      </TemplatePage>
    </div>
  );
};

export default SystemSetting;
