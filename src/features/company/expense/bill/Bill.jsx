import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { IoAddOutline, IoKeyOutline, IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport, BiShow } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineFileDownload } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TfiReload } from "react-icons/tfi";
import { FaRegCopy } from "react-icons/fa";
import FilterCard from "@/components/Cards/FilterCard";
import { TbFileExport } from "react-icons/tb";

const Bill = () => {
  const bills = [
    {
      bill: "#BILL00001",
      vendor: "Adrienne J Reed",
      category: "",
      billDate: "Feb 15, 2022",
      dueDate: "Feb 15, 2022",
      status: "Sent",
    },
    {
      bill: "#BILL00002",
      vendor: "Adrienne J Reed",
      category: "Accounts payable",
      billDate: "Feb 15, 2022",
      dueDate: "Feb 15, 2022",
      status: "Sent",
    },
    {
      bill: "#BILL00003",
      vendor: "Basia Mcclain",
      category: "",
      billDate: "Feb 15, 2022",
      dueDate: "Feb 15, 2022",
      status: "Paid",
    },
    {
      bill: "#BILL00004",
      vendor: "Anthony B Renfroe",
      category: "",
      billDate: "Feb 18, 2022",
      dueDate: "Feb 18, 2022",
      status: "Paid",
    },
    {
      bill: "#BILL00005",
      vendor: "Basia Mcclain",
      category: "",
      billDate: "Mar 14, 2022",
      dueDate: "Mar 14, 2022",
      status: "Draft",
    },
    {
      bill: "#BILL00006",
      vendor: "Pearl W Poole",
      category: "",
      billDate: "Mar 14, 2022",
      dueDate: "Mar 14, 2022",
      status: "Sent",
    },
  ];

  const ColumnBill = [
    { value: "Bill", className: "" },
    { value: "Vendor", className: "" },
    { value: "Category", className: "" },
    { value: "Bill Date", className: "" },
    { value: "Due Due", className: "" },
    { value: "Status", className: "" },
    { value: "Action", className: "" },
  ];

  const cekStatus = (status) => {
    if (status === "Sent") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-green-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Paid") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-blue-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Draft") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-yellow-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Unpaid") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-red-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Partialy Paid") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-gray-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-gray-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    }
  };

  const rowBill = [
    ...bills.map((item) => [
      {
        value: (
          <Link to={`/app/company/expense/bill/${btoa(item.bill)}`}>
            <button className="btn btn-primary btn-outline">{item.bill}</button>
          </Link>
        ),
        className: "",
      },
      { value: item.vendor, className: "" },
      { value: item.category, className: "" },
      { value: item.billDate, className: "" },
      { value: item.dueDate, className: "" },
      { value: cekStatus(item.status), className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Duplicate">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-slate-600 hover:bg-slate-700 text-white"
              >
                <FaRegCopy />
              </button>
            </div>
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white"
              >
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white"
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ]),
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Bill"}
        breadcrumb={"Bill"}
        actions={
          <div className="flex gap-2 items-center">
            <div className="tooltip" data-tip="Export">
              <button
                onClick={() => {}}
                className="btn btn-square btn-warning btn-sm"
              >
                <TbFileExport />
              </button>
            </div>
            <div className="tooltip" data-tip="Add Data">
              <button
                onClick={() => {}}
                className="btn btn-square btn-success text-white btn-sm"
              >
                +
              </button>
            </div>
          </div>
        }
      />

      <FilterCard
        noTitle
        actions={
          <div className="flex flex-row w-full gap-3 items-end flex-wrap xl:flex-nowrap">
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Start Date</span>
              <input
                type="date"
                className="input input-bordered"
                name=""
                id=""
              />
            </label>
            <label className="form-control w-fit md:w-full">
              <span className="label-text">End Date</span>
              <input
                type="date"
                className="input input-bordered"
                name=""
                id=""
              />
            </label>
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Vendor</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Vendor</option>
                <option value="">Pearl</option>
                <option value="">Protiong</option>
              </select>
            </label>
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Status</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Status</option>
                <option value="">Draft</option>
                <option value="">Sent</option>
                <option value="">Unpaid</option>
                <option value="">Particaly Paid</option>
                <option value="">Paid</option>
              </select>
            </label>
            <div className="flex gap-1">
              <button className="btn btn-primary btn-square ">
                <IoSearchOutline />
              </button>
              <button className="btn btn-error btn-square ">
                <GrPowerReset />
              </button>
            </div>
          </div>
        }
      />

      <CustomTable column={ColumnBill} rows={rowBill} />

      <Paginate showData={rowBill.length} totalData={rowBill.length} />
    </div>
  );
};

export default Bill;
