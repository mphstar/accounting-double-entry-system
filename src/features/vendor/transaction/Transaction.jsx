import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { MdDeleteOutline, MdOutlineFileDownload } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import FilterCard from "@/components/Cards/FilterCard";
import { TbFileExport } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";

const Transaction = () => {
  const data = [
    {
      date: "Jul 8, 2020",
      amount: "$150.00",
      account: "ROUNDBANK Benjamin Adams",
      type: "Partial",
      category: "Bill",
      description: "Repellendus Error i",
    },
    {
      date: "Jul 8, 2020",
      amount: "$500.00",
      account: "US BANK, NA Earl Hane MD",
      type: "Partial",
      category: "Bill",
      description: "Officiis quia lorem",
    },
    {
      date: "Jul 8, 2020",
      amount: "$1,500.00",
      account: "ROUNDBANK Benjamin Adams",
      type: "Partial",
      category: "Bill",
      description: "Debitis nostrud ea a",
    },
  ];

  const ColumnPayment = [
    { value: "Date", className: "" },
    { value: "Amount", className: "" },
    { value: "Account", className: "" },
    { value: "Type", className: "" },
    { value: "Category", className: "" },
    { value: "Description", className: "" },
  ];

  const RowPayment = [
    ...data.map((item) => [
      { value: item.date, className: "" },
      { value: item.amount, className: "" },
      { value: item.account, className: "" },
      { value: item.type, className: "" },
      { value: item.category, className: "" },
      { value: item.description, className: "" },
    ]),
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Transaction"}
        breadcrumb={"Transaction"}
        actions={<div></div>}
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
              <span className="label-text">Category</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Category</option>
                <option value="">Bussiness Profit</option>
                <option value="">Dividents</option>
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

      <CustomTable column={ColumnPayment} rows={RowPayment} />

      <Paginate showData={RowPayment.length} totalData={RowPayment.length} />
    </div>
  );
};

export default Transaction;
