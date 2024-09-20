import React from "react";

const FormCreatePayment = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Date</span>
          </div>
          <input type="date" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Amount</span>
          </div>
          <input type="number" className="input input-bordered w-full" />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Account</span>
          </div>
          <select name="" className="select select-bordered" id="">
            <option value="">Select Account</option>
            <option value="">Round Bank</option>
            <option value="">Cobiz Bank</option>
            <option value="">US Bank</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Vendor</span>
          </div>
          <select name="" className="select select-bordered" id="">
            <option value="">Select Vendor</option>
            <option value="">Mphstar</option>
            <option value="">Kaire</option>
          </select>
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
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Category</span>
          </div>
          <select name="" className="select select-bordered" id="">
            <option value="">Select Category</option>
            <option value="">Inventory</option>
            <option value="">Insurrance</option>
          </select>
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Reference</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Payment Receipt</span>
          </div>
          <input type="file" className="file-input file-input-bordered w-full" />
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

export default FormCreatePayment;
