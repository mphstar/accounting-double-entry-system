import React from "react";

const FormEditProductStock = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full">
          <div className="">
            <span className="label-text font-semibold">Product</span>
          </div>
          <p>{extraObject.name}</p>
        </label>
        <label className="form-control w-full">
          <div className="">
            <span className="label-text font-semibold">SKU</span>
          </div>
          <p>{extraObject.sku}</p>
        </label>
        
        <label className="form-control w-full flex-row items-center gap-2">
          <input type="radio" name="qty" id="qty" className="radio radio-primary radio-sm w-full" />
          <div className="label">
            <span className="label-text font-semibold">Add Quantity</span>
          </div>
        </label>
        
        <label className="form-control w-full flex-row items-center gap-2">
          <input type="radio" name="qty" id="qty" className="radio radio-primary radio-sm w-full" />
          <div className="label">
            <span className="label-text font-semibold">Less Quantity</span>
          </div>
        </label>
        
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className="label-text font-semibold">Quantity</span>
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

export default FormEditProductStock;
