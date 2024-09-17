import React from "react";

const FormImportDataVendor = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col gap-2">
      <span>
        Download sample customer CSV file{" "}
        <a className="btn btn-link p-0" href="/uploads/sample/sample-product.csv" target="_blank">
          Click Here
        </a>
      </span>
      <label className="form-control" htmlFor="">
        <div className="label font-semibold">
          <h1>Select CSV File</h1>
        </div>
        <input
          className="file-input file-input-bordered"
          type="file"
          name=""
          id=""
        />
      </label>
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

export default FormImportDataVendor;
