import React, { useState } from "react";

const ModalConstantCategory = ({ extraObject, closeModal }) => {
  const [categoryType, setCategoryType] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-3">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Category Name</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Category Type</span>
          </div>
          <select
            value={categoryType}
            onChange={(e) => {
              setCategoryType(e.target.value);
            }}
            className="select select-bordered"
            name=""
            id=""
          >
            <option value="">Select Category Type</option>
            <option value="product">Product & Service</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
            <option value="Asset">Asset</option>
            <option value="Liability">Liability</option>
            <option value="Equity">Equity</option>
            <option value="Cost of Goods Sold">Cost of Goods Sold</option>
          </select>
        </label>
        {categoryType != "product" && categoryType != "" && (
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Account</span>
            </div>
            <select className="select select-bordered" name="" id="">
              <option value="">Select Account</option>
              <option value="">4010 - Sales</option>
              <option value="">4020 - Service</option>
              <option value="">4030 - Shipping and Handling</option>
            </select>
          </label>
        )}

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Category Color</span>
          </div>
          <input type="color" className="input input-bordered w-full" />
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
          Create
        </button>
      </div>
    </div>
  );
};

export default ModalConstantCategory;
