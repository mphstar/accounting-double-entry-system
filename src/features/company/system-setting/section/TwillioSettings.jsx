import React from "react";

const TwillioSettings = () => {
  return (
    <section id="twillio">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Twillio Settings</h1>
            <p className="text-xs">Edit your company twilio setting details</p>
          </div>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Twilio SID</span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Twilio Token</span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Twilio From</span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
            />
          </label>
        </div>
        <h1 className="mt-6 text-xl font-semibold mb-4">Module Settings</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <CardModule title="New Customer" />
          <CardModule title="New Invoice" />
          <CardModule title="New Bill" />
          <CardModule title="New Vendor" />
          <CardModule title="New Revenue" />
          <CardModule title="New Proposal" />
          <CardModule title="New Payment" />
          <CardModule title="New Reminder" />
        </div>
        <div className="flex justify-end w-full mt-6 gap-3">
        
          <button className="btn btn-success text-white w-fit">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

const CardModule = ({ title }) => {
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

export default TwillioSettings;
