import React from "react";
const FormCreateDataCustomer = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold">Basic Info</h1>
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Name</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Contact</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Email</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>

        <label className="form-control flex-row gap-3 h-full items-center justify-between w-full">
          <div className="label">
            <span className="label-text font-semibold">Login is enable</span>
          </div>
          <input type="checkbox" className="toggle" />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Tax Number</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">
              Alternate Mobile Number
            </span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
      </div>
      <h1 className="font-semibold mt-6">Billing Address</h1>
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Name</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Phone</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Address</span>
          </div>
          <textarea className="textarea textarea-bordered h-24 w-full"></textarea>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">City</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">State</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Country</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Zip Code</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
      </div>
      <div className="flex items-center gap-2 mt-6">
        <h1 className="w-full font-semibold">Shipping Address</h1>
        <button className="btn btn-success text-white btn-sm">
          Shipping Same As Billing
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Name</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Phone</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Address</span>
          </div>
          <textarea className="textarea textarea-bordered h-24 w-full"></textarea>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">City</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">State</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Country</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Zip Code</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
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

export default FormCreateDataCustomer;
