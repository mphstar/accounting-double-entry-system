import React from "react";

const FormModalUser = ({ extraObject, closeModal }) => {


  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Name</span>
          </div>
          <input
            type="text"
            placeholder="Enter User Name"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Email</span>
          </div>
          <input
            type="text"
            placeholder="Enter User Email"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">User Role</span>
          </div>
          <select className="select select-bordered w-full">
            <option value="admin">Admin</option>
            <option value="accountan">Accountan</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold"> </span>
          </div>
          <div className="flex w-full mt-4">
            <span className="label-text font-semibold flex-1">Login is Enable</span>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Password</span>
          </div>
          <input
            type="password"
            placeholder="Enter Company Password"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Date Of Birth</span>
          </div>
          <input
            type="date"
            className="input input-bordered  w-full"
          />
        </label>
      </div>
      <div className="flex items-center justify-end w-full mt-8 gap-2">
        <button onClick={closeModal} className="btn">Cancel</button>
        <button onClick={closeModal} className="btn btn-success text-white">Create</button>
      </div>
    </div>
  );
};

export default FormModalUser;
