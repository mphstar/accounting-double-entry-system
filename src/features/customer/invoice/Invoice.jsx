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

const Invoice = () => {
  const dataInvoice = [
    {
      invoice: "#INVO0001",
      customer: "Aurora O'Neil",
      issueDate: "Feb 18, 1919",
      dueDate: "Sep 6, 1988",
      amountDue: 9700.0,
      status: "Partially Paid",
    },
    {
      invoice: "#INVO0002",
      customer: "Keire",
      issueDate: "Apr 22, 2022",
      dueDate: "Nov 21, 2009",
      amountDue: 0.0,
      status: "Paid",
    },
    {
      invoice: "#INVO0003",
      customer: "Karleigh Mitchell",
      issueDate: "Jan 8, 1986",
      dueDate: "Oct 8, 2005",
      amountDue: 101.62,
      status: "Paid",
    },
    {
      invoice: "#INVO0004",
      customer: "Ida F. Mullen",
      issueDate: "Nov 15, 1983",
      dueDate: "Jun 23, 2017",
      amountDue: -493.94,
      status: "Paid",
    },
    {
      invoice: "#INVO0005",
      customer: "Ida F. Mullen",
      issueDate: "Nov 9, 2022",
      dueDate: "Nov 9, 2022",
      amountDue: 0.0,
      status: "Paid",
    },
    {
      invoice: "#INVO0006",
      customer: "Teresa R McRae",
      issueDate: "Nov 9, 2022",
      dueDate: "Nov 9, 2022",
      amountDue: -0.1,
      status: "Paid",
    },
    {
      invoice: "#INVO0011",
      customer: "Teresa R McRae",
      issueDate: "Nov 19, 1986",
      dueDate: "Jan 27, 1993",
      amountDue: -40020.75,
      status: "Paid",
    },
    {
      invoice: "#INVO0012",
      customer: "Barclay Dean",
      issueDate: "Sep 9, 1970",
      dueDate: "Mar 30, 2014",
      amountDue: 404.25,
      status: "Sent",
    },
    {
      invoice: "#INVO0013",
      customer: "Barclay Dean",
      issueDate: "Apr 21, 1976",
      dueDate: "Sep 20, 1995",
      amountDue: 105.5,
      status: "Sent",
    },
  ];

  const ColumnRetainers = [
    { value: "Invoice", className: "" },
    { value: "Customer", className: "" },
    { value: "Issue Date", className: "" },
    { value: "Due Date", className: "" },
    { value: "Amount Due", className: "" },
    { value: "Status", className: "" },
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

  const RowRetainer = [
    ...dataInvoice.map((item) => [
      {
        value: (
          <Link to={`/app/customer/invoice/${btoa(item.invoice)}`}>
            <button className="btn btn-primary btn-outline">
              {item.invoice}
            </button>
          </Link>
        ),
        className: "",
      },
      { value: item.customer, className: "" },
      { value: item.issueDate, className: "" },
      { value: item.dueDate, className: "" },
      { value: item.amountDue, className: "" },
      { value: cekStatus(item.status), className: "" },
      
    ]),
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Invoice"}
        breadcrumb={"Invoice"}
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

      <CustomTable column={ColumnRetainers} rows={RowRetainer} />

      <Paginate showData={RowRetainer.length} totalData={RowRetainer.length} />
    </div>
  );
};

export default Invoice;
