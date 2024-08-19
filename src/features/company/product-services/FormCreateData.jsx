import React from "react";
import { expenseAccounts } from "./dummyData";
import Select from "react-select";

const FormCreateData = ({ extraObject, closeModal }) => {
  const TaxOption = [
    {
      value: "CGST",
      label: "CGST",
    },
    {
      value: "Effective Tax",
      label: "Effective Tax",
    },
    {
      value: "Service Tax",
      label: "Service Tax",
    },
    {
      value: "SGST",
      label: "SGST",
    },
  ];

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
            <span className="label-text font-semibold">SKU</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Sale Price</span>
          </div>
          <input type="number" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Income Account</span>
          </div>
          <select
            name="sale_chartaccount_id"
            className="select select-bordered"
            required="required"
          >
            <option value="0" className="">
              Select Account
            </option>
            <option value="50" className="">
              4010 - Sales Income
            </option>
            <option value="51" className="">
              4020 - Service Income
            </option>
            <option value="52" className="">
              4430 - Shipping and Handling
            </option>
            <option value="53" className="">
              4435 - Sundry Income
            </option>
            <option value="54" className="">
              4440 - Interest Received
            </option>
            <option value="55" className="">
              4450 - Foreign Exchange Gain
            </option>
            <option value="56" className="">
              4500 - Unallocated Income
            </option>
            <option value="57" className="">
              4510 - Discounts Received
            </option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Purchase Price</span>
          </div>
          <input type="number" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Expense Account</span>
          </div>
          <select className="select select-bordered" name="" id="">
            {expenseAccounts.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="form-control w-full col-span-2 md:col-span-1">
          <div className="label">
            <span className="label-text font-semibold">Tax</span>
          </div>
          <Select
            className="my-react-select-container"
            classNamePrefix="my-react-select"
            isMulti={true}
            options={TaxOption}
          />
        </label>
        <label className="form-control w-full col-span-2 md:col-span-1">
          <div className="label">
            <span className="label-text font-semibold">Category</span>
          </div>
          <select className="select select-bordered" name="" id="">
            <option>Medical</option>
            <option>Clothing</option>
          </select>
          <div className="label">
            <div className="text-xs leading-none label-text">
              Please add constant category{" "}
              <a className="btn btn-link p-0" href="#">
                here
              </a>
            </div>
          </div>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Unit</span>
          </div>
          <select className="select select-bordered" name="" id="">
            <option value="">Inch</option>
            <option value="">PC</option>
            <option value="">Meter</option>
            <option value="">Piece</option>
            <option value="">Set</option>
            <option value="">Mass</option>
            <option value="">KG</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Quantity</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Type</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input
                className="radio radio-primary"
                type="radio"
                name="type"
                id="type_product"
                defaultChecked
              />
              <label htmlFor="type_product">Product</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="radio radio-primary"
                type="radio"
                name="type"
                id="type_service"
              />
              <label htmlFor="type_service">Service</label>
            </div>
          </div>
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered w-full"
            rows="3"
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
          Create
        </button>
      </div>
    </div>
  );
};

export default FormCreateData;
