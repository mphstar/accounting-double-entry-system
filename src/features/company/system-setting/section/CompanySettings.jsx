import CustomTable from "@/components/TablePage/CustomTable";
import React from "react";
import { FaCheck, FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";

const CompanySettings = () => {
  return (
    <section id="company">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Company Settings</h1>
            <p className="text-xs">Edit your company details</p>
          </div>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
          <label className="form-control gap-2">
            <span className="label-text font-semibold required">
              Company Name
            </span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"Globex Corporation"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Address</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={
                "198 , Bombay Talkies Compd, Himanshurai Road, Malad (west)"
              }
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">City</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"Mumbai"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">State</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"Maharashtra"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Zip/Post Code</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"400064"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Country</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"India"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Telephone</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"02228896140"}
            />
          </label>

          <label className="form-control gap-2">
            <span className="label-text font-semibold required">
              Company Registration Number
            </span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"CMP12345"}
            />
          </label>
          <label className="flex items-center gap-5" htmlFor="">
            <span>Tax Number</span>
            <input
              type="checkbox"
              name=""
              className="toggle toggle-primary"
              id=""
            />
          </label>
          <div className="form-control gap-2">
            <div className="flex items-center gap-2">
              <label className="flex gap-2 items-center w-full" htmlFor="">
                <input
                  type="radio"
                  name="vatgst"
                  className="radio radio-primary"
                  id="vatgst"
                />
                <span>VAT Number</span>
              </label>
              <label className="flex gap-2 items-center w-full" htmlFor="">
                <input
                  type="radio"
                  name="vatgst"
                  className="radio radio-primary"
                  id="vatgst"
                />
                <span>GST Number</span>
              </label>
            </div>
            <input
              className="input input-bordered"
              defaultValue={"GST456"}
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex justify-end w-full mt-6">
          <button className="btn btn-success text-white w-fit">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanySettings;
