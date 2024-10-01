import React from "react";

const FormCreateGoal = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Name</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Amount</span>
          </div>
          <input type="number" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Type</span>
          </div>
          <select name="" className="select select-bordered" id="">
            <option value="">Select Type</option>
            <option value="">Invoice</option>
            <option value="">Revenue</option>
            <option value="">Bill</option>
            <option value="">Payment</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">From</span>
          </div>
          <input type="date" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">To</span>
          </div>
          <input type="date" className="input input-bordered w-full" />
        </label>

        <label className="flex col-span-2 items-center gap-2">
          <input type="checkbox" name="" className="checkbox-primary checkbox" id="" />
          <div className="label">
            <span className="label-text font-semibold">Display On Dashboard</span>
          </div>
          
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

export default FormCreateGoal;
