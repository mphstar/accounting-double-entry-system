import React from "react";

const FormCreateJoinUsList = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control col-span-2 w-full">
          <div className="label">
            <span className="label-text font-semibold">Email</span>
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

export default FormCreateJoinUsList;
