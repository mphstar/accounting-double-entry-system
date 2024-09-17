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

  const expenseAccounts = [
    { value: "", label: "Select Account", className: "subAccount" },
    { value: "58", label: "5005 - Cost of Sales- On Services", className: "subAccount" },
    { value: "59", label: "5010 - Cost of Sales - Purchases", className: "subAccount" },
    { value: "60", label: "5015 - Operating Costs", className: "subAccount" },
    { value: "61", label: "5020 - Material Usage Varaiance", className: "subAccount" },
    { value: "62", label: "5025 - Breakage and Replacement Costs", className: "subAccount" },
    { value: "63", label: "5030 - Consumable Materials", className: "subAccount" },
    { value: "64", label: "5035 - Sub-contractor Costs", className: "subAccount" },
    { value: "65", label: "5040 - Purchase Price Variance", className: "subAccount" },
    { value: "66", label: "5045 - Direct Labour - COS", className: "subAccount" },
    { value: "67", label: "5050 - Purchases of Materials", className: "subAccount" },
    { value: "68", label: "5060 - Discounts Received", className: "subAccount" },
    { value: "69", label: "5100 - Freight Costs", className: "subAccount" },
    { value: "70", label: "5410 - Salaries and Wages", className: "subAccount" },
    { value: "71", label: "5415 - Directors Fees & Remuneration", className: "subAccount" },
    { value: "72", label: "5420 - Wages - Overtime", className: "subAccount" },
    { value: "73", label: "5425 - Members Salaries", className: "subAccount" },
    { value: "74", label: "5430 - UIF Payments", className: "subAccount" },
    { value: "75", label: "5440 - Payroll Taxes", className: "subAccount" },
    { value: "76", label: "5450 - Workers Compensation ( Coida )", className: "subAccount" },
    { value: "77", label: "5460 - Normal Taxation Paid", className: "subAccount" },
    { value: "78", label: "5470 - General Benefits", className: "subAccount" },
    { value: "79", label: "5510 - Provisional Tax Paid", className: "subAccount" },
    { value: "80", label: "5520 - Inc Tax Exp - State", className: "subAccount" },
    { value: "81", label: "5530 - Taxes - Real Estate", className: "subAccount" },
    { value: "82", label: "5540 - Taxes - Personal Property", className: "subAccount" },
    { value: "83", label: "5550 - Taxes - Franchise", className: "subAccount" },
    { value: "84", label: "5560 - Taxes - Foreign Withholding", className: "subAccount" },
    { value: "85", label: "5610 - Accounting Fees", className: "subAccount" },
    { value: "86", label: "5615 - Advertising and Promotions", className: "subAccount" },
    { value: "87", label: "5620 - Bad Debts", className: "subAccount" },
    { value: "88", label: "5625 - Courier and Postage", className: "subAccount" },
    { value: "89", label: "5660 - Depreciation Expense", className: "subAccount" },
    { value: "90", label: "5685 - Insurance Expense", className: "subAccount" },
    { value: "91", label: "5690 - Bank Charges", className: "subAccount" },
    { value: "92", label: "5695 - Interest Paid", className: "subAccount" },
    { value: "93", label: "5700 - Office Expenses - Consumables", className: "subAccount" },
    { value: "94", label: "5705 - Printing and Stationary", className: "subAccount" },
    { value: "95", label: "5710 - Security Expenses", className: "subAccount" },
    { value: "96", label: "5715 - Subscription - Membership Fees", className: "subAccount" },
    { value: "97", label: "5755 - Electricity, Gas and Water", className: "subAccount" },
    { value: "98", label: "5760 - Rent Paid", className: "subAccount" },
    { value: "99", label: "5765 - Repairs and Maintenance", className: "subAccount" },
    { value: "100", label: "5770 - Motor Vehicle Expenses", className: "subAccount" },
    { value: "101", label: "5771 - Petrol and Oil", className: "subAccount" },
    { value: "102", label: "5775 - Equipment Hire - Rental", className: "subAccount" },
    { value: "103", label: "5780 - Telephone and Internet", className: "subAccount" },
    { value: "104", label: "5785 - Travel and Accommodation", className: "subAccount" },
    { value: "105", label: "5786 - Meals and Entertainment", className: "subAccount" },
    { value: "106", label: "5787 - Staff Training", className: "subAccount" },
    { value: "107", label: "5790 - Utilities", className: "subAccount" },
    { value: "108", label: "5791 - Computer Expenses", className: "subAccount" },
    { value: "109", label: "5795 - Registrations", className: "subAccount" },
    { value: "110", label: "5800 - Licenses", className: "subAccount" },
    { value: "111", label: "5810 - Foreign Exchange Loss", className: "subAccount" },
    { value: "112", label: "9990 - Profit and Loss", className: "subAccount" },
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
