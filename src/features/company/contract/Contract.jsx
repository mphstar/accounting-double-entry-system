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
import { PiHandshakeLight } from "react-icons/pi";

const Contract = () => {
  const data = [
    {
      id: "#CON00010",
      subject: "Quos dolor",
      customer: "Keire",
      type: "Planning",
      value: "$32.00",
      startDate: "Sep 22, 2022",
      endDate: "Aug 25, 1988",
      status: "Decline",
    },
    {
      id: "#CON00011",
      subject: "Non Voluptas",
      customer: "Keire",
      type: "Marketing",
      value: "$33.00",
      startDate: "Sep 23, 2022",
      endDate: "Oct 1, 2022",
      status: "Accept",
    },
    {
      id: "#CON00012",
      subject: "Nihil Sint",
      customer: "Keire",
      type: "Planning",
      value: "$83.00",
      startDate: "Oct 4, 2022",
      endDate: "Oct 8, 2022",
      status: "Accept",
    },
    {
      id: "#CON00014",
      subject: "Iste aspernatur tota",
      customer: "Protiong",
      type: "Marketing",
      value: "$5.00",
      startDate: "May 19, 2023",
      endDate: "Jun 23, 2023",
      status: "Accept",
    },
  ];

  const Column = [
    { value: "ID", className: "" },
    { value: "subject", className: "" },
    { value: "Customer", className: "" },
    { value: "Type", className: "" },
    { value: "Value", className: "" },
    { value: "Start Date", className: "" },
    { value: "End Date", className: "" },
    { value: "Status", className: "" },
    { value: "Action", className: "" },
  ];

  const cekStatus = (status) => {
    if (status === "Decline") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-red-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Accept") {
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

  const SummaryContract = {
    totalContract: "$153.00",
    thisMonthTotalContract: "$65.00",
    thisWeekTotalContract: "$0.00",
    last30DaysTotalContract: "$0.00",
  };

  const Row = [
    ...data.map((item) => [
      {
        value: (
          <Link to={`/app/company/contract/${btoa(item.id)}`}>
            <button className="btn btn-primary btn-outline">{item.id}</button>
          </Link>
        ),
        className: "",
      },
      { value: item.subject, className: "" },
      { value: item.customer, className: "" },
      { value: item.type, className: "" },
      { value: item.value, className: "" },
      { value: item.startDate, className: "" },
      { value: item.endDate, className: "" },
      { value: cekStatus(item.status), className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            {item.status === "Accept" && (
              <div className="tooltip" data-tip="Duplicate">
                <button
                  onClick={() => {}}
                  className="btn btn-square btn-sm bg-slate-600 hover:bg-slate-700 text-white"
                >
                  <FaRegCopy />
                </button>
              </div>
            )}
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
        title={"Manage Contract"}
        breadcrumb={"Contract"}
        actions={
          <div className="flex gap-2 items-center">
            <div className="tooltip" data-tip="Add">
              <button
                onClick={() => {}}
                className="btn btn-square btn-success text-white btn-sm"
              >
                <IoAddOutline />
              </button>
            </div>
          </div>
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <CardContract
          title="Total Contract"
          value={SummaryContract.totalContract}
          bgColor="bg-green-500"
          textColor="text-green-500"
        />
        <CardContract
          title="This Month Total Contract"
          value={SummaryContract.thisMonthTotalContract}
          bgColor="bg-blue-500"
          textColor="text-blue-500"
        />
        <CardContract
          title="This Week Total Contract"
          value={SummaryContract.thisWeekTotalContract}
          bgColor="bg-yellow-500"
          textColor="text-yellow-500"
        />
        <CardContract
          title="Last 30 Days Total Contract"
          value={SummaryContract.last30DaysTotalContract}
          bgColor="bg-red-500"
          textColor="text-red-500"
        />
      </div>

      <CustomTable column={Column} rows={Row} />

      <Paginate showData={Row.length} totalData={Row.length} />
    </div>
  );
};

const CardContract = ({ title, value, bgColor, textColor }) => {
  return (
    <div className="flex flex-row items-center gap-2 bg-base-100 p-4 rounded-md drop-shadow">
      <div className="flex flex-col flex-1">
        <h1 className="font-medium">{title}</h1>
        <p className={`font-medium text-xl mt-4 ${textColor}`}>{value}</p>
      </div>
      <div className={`p-2 rounded-full ${bgColor} text-white`}>
        <PiHandshakeLight />
      </div>
    </div>
  );
};

export default Contract;
