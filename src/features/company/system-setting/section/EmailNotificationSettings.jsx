import React from "react";

const EmailNotificationSettings = () => {
  return (
    <section id="email-notification">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Email Notification Settings</h1>
            <p className="text-xs"></p>
          </div>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          <CardNotification title="New Bill Payment" />
          <CardNotification title="Customer Invoice Sent" />
          <CardNotification title="Bill Sent" />
          <CardNotification title="New Invoice Payment" />
          <CardNotification title="Invoice Sent" />
          <CardNotification title="Payment Reminder" />
          <CardNotification title="Proposal Sent" />
          <CardNotification title="User Created" />
          <CardNotification title="Vendor Bill Sent" />
          <CardNotification title="New Contract" />
          <CardNotification title="Retainer Sent" />
          <CardNotification title="Customer Retainer Sent" />
          <CardNotification title="New Retainer Payment" />
        </div>
        <div className="flex justify-end w-full mt-6">
          <button className="btn btn-success text-white w-fit">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

const CardNotification = ({ title }) => {
  return (
    <label
      className="flex w-full gap-2 p-3 border-2 rounded-md border-base-300"
      htmlFor=""
    >
      <p className="w-full">{title}</p>
      <input type="checkbox" name="" className="toggle toggle-primary" id="" />
    </label>
  );
};

export default EmailNotificationSettings;
