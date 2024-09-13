
import React from "react";

const EmailSettings = () => {
  return (
    <section id="email">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Email Settings</h1>
            <p className="text-xs">
              This SMTP will be used for system-level email sending.
              Additionally, if a company user does not set their SMTP, then this
              SMTP will be used for sending emails.
            </p>
          </div>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Mail Driver</span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Mail Host</span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Mail Port</span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Mail Username</span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Mail Password</span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Mail Encryption</span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Mail From Address</span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Mail From Name</span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
            />
          </label>
        </div>
        <div className="flex justify-end w-full mt-6 gap-3">
          <button className="btn btn-success text-white w-fit">
            Send Test Mail
          </button>
          <button className="btn btn-success text-white w-fit">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailSettings;
