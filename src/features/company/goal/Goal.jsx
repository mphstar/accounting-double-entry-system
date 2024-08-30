import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport, BiShow } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineFileDownload } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Goal = () => {
  const data = [
    {
      name: "Invoice Goal",
      type: "Invoice",
      from: "2020-07",
      to: "2020-08",
      amount: 5000.0,
      isDashboardDisplay: true, // Kita asumsikan 'Yes' berarti true
    },
    {
      name: "Bill Goal",
      type: "Bill",
      from: "2020-07",
      to: "2020-09",
      amount: 3000.0,
      isDashboardDisplay: true,
    },
    {
      name: "Revenue Goal",
      type: "Revenue",
      from: "2020-07",
      to: "2020-09",
      amount: 3000.0,
      isDashboardDisplay: true,
    },
    {
      name: "Payment Goal",
      type: "Payment",
      from: "2020-07",
      to: "2020-08",
      amount: 5000.0,
      isDashboardDisplay: true,
    },
  ];

  const COLUMN = [
    { value: "Name", className: "" },
    { value: "Type", className: "" },
    { value: "From", className: "" },
    { value: "To", className: "" },
    { value: "Amount", className: "" },
    { value: "Is Dashboard Display", className: "" },
    { value: "Action", className: "" },
  ];

  const ROW = [
    ...data.map((item) => [
      { value: item.name, className: "" },
      { value: item.type, className: "" },
      { value: item.from, className: "" },
      { value: item.to, className: "" },
      { value: item.amount, className: "" },
      {
        value: item.isDashboardDisplay ? "Yes" : "No",
        className: "",
      },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white"
              >
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
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
        title={"Manage Goal"}
        breadcrumb={"Goal"}
        actions={
          <div className="flex gap-2 items-center">
            <div className="tooltip" data-tip="Add">
              <button
                onClick={() => {}}
                className="btn btn-square btn-success btn-sm"
              >
                <IoAddOutline />
              </button>
            </div>
          </div>
        }
      />

      <CustomTable column={COLUMN} rows={ROW} />

      <Paginate showData={ROW.length} totalData={ROW.length} />
    </div>
  );
};

export default Goal;
