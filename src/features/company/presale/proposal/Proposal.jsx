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

const Proposal = () => {
  const proposals = [
    {
      proposalId: "#PRO00001",
      customer: "Kaire",
      category: "Insurance",
      issueDate: "May 19, 2023",
      amount: 0.0,
      status: "Open",
      alreadyConverted: false,
      convertedTo: "-",
    },
    {
      proposalId: "#PRO00002",
      customer: "Kaire",
      category: "Insurance",
      issueDate: "Jan 8, 2023",
      amount: 173.25,
      status: "Accepted",
      alreadyConverted: true,
      convertedTo: "Invoice",
    },
    {
      proposalId: "#PRO00003",
      customer: "Kaire",
      category: "Inventory",
      issueDate: "Nov 9, 2022",
      amount: 0.0,
      status: "Draft",
      alreadyConverted: true,
      convertedTo: "Retainer",
    },
    {
      proposalId: "#PRO00004",
      customer: "Kaire",
      category: "Inventory",
      issueDate: "Jun 15, 2012",
      amount: 0.0,
      status: "Declined",
      alreadyConverted: false,
      convertedTo: "-",
    },
    {
      proposalId: "#PRO00005",
      customer: "Kaire",
      category: "Inventory",
      issueDate: "Nov 10, 2008",
      amount: 0.0,
      status: "Close",
      alreadyConverted: false,
      convertedTo: "-",
    },
  ];

  const ColumnProposal = [
    { value: "Proposal", className: "" },
    { value: "Customer", className: "" },
    { value: "Category", className: "" },
    { value: "Issue Date", className: "" },
    { value: "Amount", className: "" },
    { value: "Status", className: "" },
    { value: "Converted To", className: "" },
    { value: "Action", className: "" },
  ];

  const cekStatus = (status) => {
    if (status === "Open") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-green-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Accepted") {
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
    } else if (status === "Declined") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-red-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Close") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-gray-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Paid") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-green-500 w-fit text-white rounded-md">
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

  const RowProposal = [
    ...proposals.map((item) => [
      {
        value: (
          <Link
            to={`/app/company/presale/proposal/${btoa(item.proposalId)}`}
            className="link"
          >
            <button className="btn btn-primary btn-outline">
              {item.proposalId}
            </button>
          </Link>
        ),
        className: "",
      },
      { value: item.customer, className: "" },
      { value: item.category, className: "" },
      { value: item.issueDate, className: "" },
      { value: item.amount, className: "" },
      { value: cekStatus(item.status), className: "" },
      { value: item.convertedTo, className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            {item.alreadyConverted && (
              <>
                <div className="tooltip" data-tip="Convert Into Retainer">
                  <button
                    onClick={() => {}}
                    className="btn btn-square btn-sm bg-green-400 hover:bg-green-500 text-white"
                  >
                    <TfiReload />
                  </button>
                </div>
                <div className="tooltip" data-tip="Convert Into Invoice">
                  <button
                    onClick={() => {}}
                    className="btn btn-square btn-sm bg-orange-400 hover:bg-orange-500 text-white"
                  >
                    <TfiReload />
                  </button>
                </div>
              </>
            )}
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
        title={"Manage Proposal"}
        breadcrumb={"Proposal"}
        actions={<div></div>}
      />

      <FilterCard
        noTitle
        actions={
          <div className="flex flex-row w-full gap-3 items-end flex-wrap xl:flex-nowrap">
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Customer</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Customer</option>
                <option value="">Kaire</option>
                <option value="">Protiong</option>
              </select>
            </label>
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Category</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Category</option>
                <option value="">Insurance</option>
                <option value="">Inventory</option>
              </select>
            </label>
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
              <span className="label-text">Status</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Status</option>
                <option value="">Draft</option>
                <option value="">Open</option>
                <option value="">Accepted</option>
                <option value="">Decline</option>
                <option value="">Close</option>
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

      <CustomTable column={ColumnProposal} rows={RowProposal} />

      <Paginate showData={RowProposal.length} totalData={RowProposal.length} />
    </div>
  );
};

export default Proposal;
