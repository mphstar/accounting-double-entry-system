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
import { useDispatch } from "react-redux";
import { showNotification } from "@/features/common/headerSlice";

const Retainers = () => {
  const dataRetainer = [
    {
      retainer: "#RET00001",
      customer: "Keire",
      category: "Insurance",
      issueDate: "Aug 17, 2022",
      status: "Partially Paid",
    },
    {
      retainer: "#RET00002",
      customer: "Protiong",
      category: "Insurance",
      issueDate: "Aug 17, 2022",
      status: "Paid",
    },
    {
      retainer: "#RET00003",
      customer: "Keire",
      category: "Insurance",
      issueDate: "Aug 17, 2022",
      status: "Partially Paid",
    },
    {
      retainer: "#RET00004",
      customer: "Keire",
      category: "Insurance",
      issueDate: "Aug 17, 2022",
      status: "Sent",
    },
    {
      retainer: "#RET00005",
      customer: "Keire",
      category: "Inventory",
      issueDate: "Aug 17, 2022",
      status: "Partially Paid",
    },
    {
      retainer: "#RET00006",
      customer: "Keire",
      category: "Insurance",
      issueDate: "Nov 9, 2022",
      status: "Sent",
    },
    {
      retainer: "#RET00007",
      customer: "Protiong",
      category: "Inventory",
      issueDate: "Nov 9, 2022",
      status: "Sent",
    },
  ];

  const ColumnRetainers = [
    { value: "Retainer", className: "" },
    { value: "Customer", className: "" },
    { value: "Category", className: "" },
    { value: "Issue Date", className: "" },
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
    ...dataRetainer.map((item) => [
      {
        value: (
          <Link
            to={`/app/customer/presale/retainers/${btoa(item.retainer)}`}
            className="link"
          >
            <button className="btn btn-primary btn-outline">
              {item.retainer}
            </button>
          </Link>
        ),
        className: "",
      },
      { value: item.customer, className: "" },
      { value: item.category, className: "" },
      { value: item.issueDate, className: "" },
      { value: cekStatus(item.status), className: "" },
      
    ]),
  ];

  const dispatch = useDispatch()

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Retainer"}
        breadcrumb={"Retainer"}
        actions={
          <div className="flex gap-2 items-center">
            <div className="tooltip" data-tip="Export">
              <button
                onClick={() => {
                  dispatch(showNotification({
                    message: "Export retainer",
                    status: 1
                  }))
                }}
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

export default Retainers;
