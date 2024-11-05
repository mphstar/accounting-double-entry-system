import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";

const ModalFormCoupon = ({ extraObject, closeModal }) => {
  const [code, setCode] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Name</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Type</span>
          </div>
          <select className="select select-bordered w-full" name="" id="">
            <option value="nominal">Nominal</option>
            <option value="percentage">Percentage</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Discount</span>
          </div>
          <input type="number" className="input input-bordered w-full" />
          <div className="label-text">
            <span className="text-xs text-gray-500 label-text-alt">
              Note: Discount in Percentage
            </span>
          </div>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Limit</span>
          </div>
          <input type="number" className="input input-bordered w-full" />
        </label>
        {/* <h1 className="col-span-2 label-text font-semibold">Code</h1>
        <label className="form-control flex-row w-full gap-3">
          <input id="code" name="code" value={"manual"} type="radio" className="radio radio-primary" />
          <span>Manual</span>
        </label>
        <label className="form-control flex-row w-full gap-3">
          <input id="code" name="code" value={"auto"} type="radio" className="radio radio-primary" />
          <span>Auto Generate</span>
        </label> */}

        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Code</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="text"
              className="input input-bordered w-full"
            />
            <button onClick={() => {
              // generate code otomatis
              const randomCode = Math.random().toString(36).substring(3).toUpperCase();
              setCode(randomCode);
            }} className="btn bg-green-500 hover:bg-green-600 text-white btn-square">
              <IoMdRefresh />
            </button>
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

export default ModalFormCoupon;
