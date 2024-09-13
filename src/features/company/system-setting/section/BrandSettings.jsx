import CustomTable from "@/components/TablePage/CustomTable";
import React, { useRef, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BsWindowSidebar } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";
import {
  MdOutlineContentCopy,
  MdOutlineDeleteOutline,
  MdOutlineFileUpload,
} from "react-icons/md";

const BrandSettings = () => {
  return (
    <section id="brand">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Brand Settings</h1>
            <p className="text-xs">Edit your brand details</p>
          </div>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <CardLogo title={"Logo dark"} />
          <CardLogo title={"Logo light"} />
          <CardLogo title={"Favicon"} />
        </div>
        <div className="flex flex-col w-full md:flex-row mt-6  gap-4">
          <label className="form-control gap-2 w-full" htmlFor="">
            <h1 className="label-text font-medium">Title Text</h1>
            <input
              className="input input-bordered"
              defaultValue={"AccountGo SaaS"}
              type="text"
            />
          </label>
          <label className="form-control gap-2 w-56" htmlFor="">
            <h1 className="label-text font-medium">Enable RTL</h1>
            <input
              className="toggle toggle-primary"
              defaultValue={"AccountGo SaaS"}
              type="checkbox"
            />
          </label>
          <label className="form-control gap-2 w-full" htmlFor="">
            <h1 className="label-text font-medium">Default Language</h1>
            <select className="select select-bordered" name="" id="">
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
          </label>
        </div>
        <h1 className="font-semibold text-lg mt-6">Theme Customizer</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center"><FiCreditCard /> Primary color settings</div>
            <div className="flex items-center gap-3 w-full">
              <div className="flex flex-wrap gap-2 w-full">
                <div className="h-6 w-6 bg-primary"></div>
                <div className="h-6 w-6 bg-red-500"></div>
                <div className="h-6 w-6 bg-green-500"></div>
                <div className="h-6 w-6 bg-blue-500"></div>
                <div className="h-6 w-6 bg-yellow-500"></div>
                <div className="h-6 w-6 bg-purple-500"></div>
                <div className="h-6 w-6 bg-slate-500"></div>

              </div>
              <input className="h-20 w-20" defaultValue={"#ffff00"} type="color" name="" id="" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center"><BsWindowSidebar /> Sidebar settings</div>
            <label className="flex items-center gap-2" htmlFor="">
              <input type="checkbox" name="" className="toggle toggle-primary toggle-sm" id="" />
              <p>Transparant Layout</p>
            </label>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center"><IoSunnyOutline /> Layout settings</div>
            <label className="flex items-center gap-2" htmlFor="">
              <input type="checkbox" name="" className="toggle toggle-primary toggle-sm" id="" />
              <p>Dark Layout</p>
            </label>
          </div>
        </div>
        <div className="flex justify-end w-full mt-6">
          <button className="btn btn-success text-white w-fit">Save Changes</button>
        </div>
      </div>
    </section>
  );
};

const CardLogo = ({ title }) => {
  const inputRef = useRef(null);
  const [image, setImage] = useState();

  return (
    <div className="flex flex-col w-full">
      <h1 className="font-medium">{title}</h1>
      <img
        className="h-32 mt-4"
        src={image || "https://placehold.co/600x400"}
        alt="placeholder"
      />
      <div className="w-full flex justify-center">
        <button
          onClick={() => {
            inputRef.current.click();
          }}
          className="btn btn-primary w-full mt-4"
        >
          <MdOutlineFileUpload /> Choice file here
        </button>
        <input
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]));
          }}
          ref={inputRef}
          className="hidden"
          type="file"
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default BrandSettings;
