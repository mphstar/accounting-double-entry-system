import React from "react";

const FormCreateBankingAccount = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Account</span>
          </div>
          <select name="" className="select select-bordered" id="">
            <option value="">Select Account</option>
            <option value="">1060 - Checking Account</option>
            <option value="">1065 - Prety Cash</option>
            <option value="">1200 - Account Transfer</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Bank Holder Name</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Bank Name</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Account Number</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Opening Balance</span>
          </div>
          <input type="number" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Contact Number</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Bank Address</span>
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

export default FormCreateBankingAccount;
