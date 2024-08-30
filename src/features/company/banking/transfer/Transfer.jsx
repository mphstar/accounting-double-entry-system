import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineFileDownload } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Transfer = () => {
  const data = [
    {
      date: "Jul 8, 2020",
      fromAccount: "ROUND BANK Benjamin Adams",
      toAccount: "ROUND BANK Benjamin Adams",
      amount: "$1,000.00",
      reference: "Self",
      description: "Giving information on its origins",
    },
    {
      date: "Jul 8, 2020",
      fromAccount: "ROUND BANK Benjamin Adams",
      toAccount: "COBIZ BANK Chisom Latifat",
      amount: "$2,000.00",
      reference: "Self",
      description: "Giving information on its origins",
    },
    {
      date: "Jul 8, 2020",
      fromAccount: "US BANK, NA Earl Hane MD",
      toAccount: "ROUND BANK Benjamin Adams",
      amount: "$5,000.00",
      reference: "Self",
      description: "Giving information on its origins",
    },
    {
      date: "Jul 8, 2020",
      fromAccount: "COBIZ BANK Chisom Latifat",
      toAccount: "US BANK, NA Earl Hane MD",
      amount: "$8,000.00",
      reference: "Self",
      description: "Giving information on its origins",
    },
  ];

  const COLUMN = [
    { value: "Date", className: "" },
    { value: "From Account", className: "" },
    { value: "To Account", className: "" },
    { value: "Amount", className: "" },
    { value: "Reference", className: "" },
    { value: "Description", className: "" },
    { value: "Action", className: "" },
  ];

  const ROW = [
    ...data.map((item) => [
      { value: item.date, className: "" },
      { value: item.fromAccount, className: "" },
      { value: item.toAccount, className: "" },
      { value: item.amount, className: "" },
      { value: item.reference, className: "" },
      { value: item.description, className: "" },
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
        title={"Bank Balance Transfer"}
        breadcrumb={"Bank Balance Transfer"}
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

export default Transfer;
