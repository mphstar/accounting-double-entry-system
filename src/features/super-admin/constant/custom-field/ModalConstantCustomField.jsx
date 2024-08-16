import React from "react";

const ModalConstantField = ({ extraObject, closeModal }) => {
  const type = ["Text", "Email", "Number", "Date", "Textarea"];
  const module = [
    "User",
    "Customer",
    "Vendor",
    "Product",
    "Proposal",
    "Invoice",
    "Bill",
    "Account",
    "Retainer",
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-3">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Custom Field Name</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Type</span>
          </div>
          <select className="select select-bordered" name="" id="">
            {type.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Module</span>
          </div>
          <select className="select select-bordered" name="" id="">
            {module.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>
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

export default ModalConstantField;
