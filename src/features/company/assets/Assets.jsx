import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport, BiShow } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineFileDownload } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Assets = () => {
  const data = [
    {
      name: "Isabelle Dillon",
      purchaseDate: "Jul 8, 2020",
      supportedDate: "Aug 12, 2020",
      amount: 1000.0,
      description: "Giving information on its origins",
    },
    {
      name: "Aladdin Smith",
      purchaseDate: "Jul 8, 2020",
      supportedDate: "Jul 31, 2020",
      amount: 5000.0,
      description: "Iste excepturi bland",
    },
  ];

  const COLUMN = [
    { value: "Name", className: "" },
    { value: "Purchase Date", className: "" },
    { value: "Supported Date", className: "" },
    { value: "Amount", className: "" },
    { value: "Description", className: "" },
    { value: "Action", className: "" },
  ];

  const ROW = [
    ...data.map((item) => [
      { value: item.name, className: "" },
      { value: item.purchaseDate, className: "" },
      { value: item.supportedDate, className: "" },
      { value: item.amount, className: "" },
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
        title={"Manage Assets"}
        breadcrumb={"Assets"}
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

export default Assets;
