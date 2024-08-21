import React from "react";

const ModalFormCreatePlan = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Name</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter Plan Name"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Price</span>
          </div>
          <input
            type="number"
            className="input input-bordered w-full"
            placeholder="Enter Plan Price"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Duration</span>
          </div>
          <select className="select select-bordered" name="" id="">
            <option value="">Lifetime</option>
            <option value="">Per Month</option>
            <option value="">Per Year</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Maximum Users</span>
          </div>
          <input type="number" className="input input-bordered w-full" />
          <div className="label">
            <span className="label-text-alt text-xs">
              Note: "-1" for Unlimited
            </span>
          </div>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Maximum Customers</span>
          </div>
          <input type="number" className="input input-bordered w-full" />
          <div className="label">
            <span className="label-text-alt text-xs">
              Note: "-1" for Unlimited
            </span>
          </div>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Maximum Vendors</span>
          </div>
          <input type="number" className="input input-bordered w-full" />
          <div className="label">
            <span className="label-text-alt text-xs">
              Note: "-1" for Unlimited
            </span>
          </div>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Storage Limit</span>
          </div>
          <div className="input input-bordered flex items-center gap-2">
            <input type="number" className="w-full grow" />
            <p className="border-l-2 pl-2">MB</p>
          </div>
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Description</span>
          </div>
          <textarea className="textarea textarea-bordered w-full h-24"></textarea>
        </label>
        <label className="flex w-full flex-row items-center gap-2">
          <span className="font-semibold flex-1">Trial is enable(on/off)</span>
          <input type="checkbox" className="toggle toggle-primary" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Trial Days</span>
          </div>
          <input
            type="number"
            className="input input-bordered w-full"
            placeholder="Enter Plan Price"
          />
        </label>
        <label className="flex w-full flex-row items-center gap-2">
          <span className="font-semibold flex-1">Chat GPT</span>
          <input type="checkbox" className="toggle toggle-primary" />
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

export default ModalFormCreatePlan;
