import React from "react";

const FormDetailLogUser = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full">
          <span className="label-text font-semibold">Status</span>
          <p>Success</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Country</span>
          <p>India</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Country Code</span>
          <p>IN</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Region</span>
          <p>Gj</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Region Name</span>
          <p>Gujarat</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">City</span>
          <p>Surat</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Zip</span>
          <p>395007</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Latitude</span>
          <p>21.1888</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Longitude</span>
          <p>72.8293</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Timezone</span>
          <p>Asia/Kolkata</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">ISP</span>
          <p>Reliance Jio Infocomm Limited</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">ORG</span>
          <p>Reliance Jio Infocomm Limited</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">As</span>
          <p>AS55836 Reliance Jio Infocomm Limited</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Query</span>
          <p>49.36.83.154</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Browser Name</span>
          <p>Chrome</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Os Name</span>
          <p>Linux</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Browser Language</span>
          <p>EN</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Device Type</span>
          <p>Desktop</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Referrer Host</span>
          <p>1</p>
        </label>
        <label className="form-control w-full">
          <span className="label-text font-semibold">Referrer Path</span>
          <p>1</p>
        </label>
      </div>
    </div>
  );
};

export default FormDetailLogUser;
