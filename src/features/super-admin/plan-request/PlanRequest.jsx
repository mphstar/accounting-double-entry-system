import React from "react";
import HeadPage from "../../../components/HeadPage/HeadPage";
import { openModal } from "../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";
import CustomTable from "../../../components/TablePage/CustomTable";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Paginate from "../../../components/Paginate/Paginate";

const PlanRequest = () => {
  const data = [
    {
      name: "Rajodiya Infotech",
      plan: "Platinum",
      totalUser: 5,
      totalCustomer: 500,
      totalVendor: 500,
      duration: "One Year",
      date: "03 Aug 2022 21:39 PM",
    },
  ];

  const column = [
    { value: "Name", className: "" },
    { value: "Plan Name", className: "" },
    { value: "Total User", className: "" },
    { value: "Total Customer", className: "" },
    { value: "Total Vendor", className: "" },
    { value: "Duration", className: "" },
    { value: "Date", className: "" },
    { value: "Action", className: "" },
  ];

  const ROW = [
    ...data.map((item, index) => [
      { value: item.name, className: "" },
      { value: item.plan, className: "" },
      { value: item.totalUser, className: "" },
      { value: item.totalCustomer, className: "" },
      { value: item.totalVendor, className: "" },
      { value: item.duration, className: "" },
      { value: item.date, className: "" },
      {
        value: (
          <div className="flex gap-1">
            <button className="btn btn-square bg-green-500 hover:bg-green-600 btn-sm text-white">
              <FaCheck />
            </button>
            <button className="btn btn-square bg-red-500 hover:bg-red-600 btn-sm text-white">
              <IoClose />
            </button>
          </div>
        ),
        className: "",
      },
    ]),
  ];

  return (
    <div className="flex flex-col">
      <HeadPage title={"Plan Request"} breadcrumb={"Plan Request"} />
      <CustomTable column={column} rows={ROW} />
      <Paginate showData={ROW.length} totalData={ROW.length} />
    </div>
  );
};

export default PlanRequest;
