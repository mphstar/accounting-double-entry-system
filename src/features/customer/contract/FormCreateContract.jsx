import React from "react";

const FormCreateContract = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control col-span-2 w-full">
          <div className="label">
            <span className="label-text font-semibold">Subject</span>
          </div>
          <input type="number" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Customer</span>
          </div>
          <select name="" className="select select-bordered" id="">
            <option value="">Select Customer</option>
            <option value="">Kaire</option>
            <option value="">Sze</option>
            <option value="">Mphstar</option>
          </select>
        </label>
        <label className="form-control w-full col-span-1">
          <div className="label">
            <span className="label-text font-semibold">Contract Type</span>
          </div>
          <select name="" className="select select-bordered" id="">
            <option value="">Select Contract Type</option>
            <option value="">Planning</option>
            <option value="">Marketting</option>
          </select>
        </label>
        <label className="form-control col-span-1 w-full">
          <div className="label">
            <span className="label-text font-semibold">Contract Value</span>
          </div>
          <input type="number" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Start Date</span>
          </div>
          <input type="date" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">End Date</span>
          </div>
          <input type="date" className="input input-bordered w-full" />
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

export default FormCreateContract;
