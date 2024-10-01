import React from "react";

const FormCreateChartOfAccount = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Name</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Code</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Account Type</span>
          </div>
          <select name="" className="select select-bordered" id="">
            <option value="">Select</option>
            {/* option group */}
            <optgroup label="Assets">
              <option value="">Current Assets</option>
              <option value="">Inventory Assets</option>
            </optgroup>
            <optgroup label="Liabillities">
              <option value="">Current Liabillities</option>
              <option value="">Inventory Liabillities</option>
            </optgroup>
          </select>
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Is Enabled</span>
          </div>
          <input type="checkbox" className="toggle toggle-primary" />
        </label>

        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Description</span>
          </div>
          <textarea
            type="text"
            className="textarea textarea-bordered h-24 w-full"
          ></textarea>
        </label>
      </div>
      <div className="flex items-center justify-end w-full mt-8 gap-2">
        <button onClick={() => closeModal()} className="btn">
          Cancel
        </button>
        <button
          onClick={() => closeModal()}
          className="btn btn-success text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FormCreateChartOfAccount;
