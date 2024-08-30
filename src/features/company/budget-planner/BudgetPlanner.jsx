import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport, BiShow } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineFileDownload } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const BudgetPlanner = () => {
  const data = [
    {
      name: "Shad Kidd",
      from: 2019,
      budgetPeriod: "Monthly",
    },
    {
      name: "Jared Martin",
      from: 2023,
      budgetPeriod: "Monthly",
    },
    {
      name: "Casey Irwin",
      from: 2024,
      budgetPeriod: "Quarterly",
    },
    {
      name: "Kay Martinez",
      from: 2024,
      budgetPeriod: "Yearly",
    },
  ];

  const COLUMN = [
    { value: "Name", className: "" },
    { value: "From", className: "" },
    { value: "Budget Period", className: "" },
    { value: "Action", className: "" },
  ];

  const ROW = [
    ...data.map((item) => [
      { value: item.name, className: "" },
      { value: item.from, className: "" },
      { value: item.budgetPeriod, className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Show">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-orange-400 hover:bg-orange-500 text-white"
              >
                <BiShow />
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
        title={"Manage Budget Planner"}
        breadcrumb={"Budget Planner"}
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

export default BudgetPlanner;
