import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import FilterCard from "@/components/Cards/FilterCard";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";

const AccountStatement = () => {
  const categories = ["Bill", "Invoice"];
  const accounts = [
    "Stripe / Paypal",
    "Cash",
    "Bank",
    "Credit Card",
    "Partial",
  ];

  const DATA = [
    {
      date: "Jan 28, 2023",
      amount: "$100.00",
      descrption: "Amet quis dolorem s",
    },
    {
      date: "Jan 28, 2023",
      amount: "$100.00",
      descrption: "Ut ipsum fugiat ull",
    },
    {
      date: "Jan 28, 2023",
      amount: "$100.00",
      descrption: "Consequatur Tenetur",
    },
  ];

  const COLUMN = [
    { value: "Date", className: "" },
    { value: "Amount", className: "" },
    { value: "Description", className: "" },
  ];

  const ROW = [
    ...DATA.map((_) => [
      { title: "Date", value: _.date, className: "" },
      { title: "Amount", value: _.amount, className: "" },
      { title: "Description", value: _.descrption, className: "" },
    ]),
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Account Statement Summary"}
        breadcrumb={"Account Statement Summary"}
        actions={
          <div className="flex gap-2 items-center">
            <div className="tooltip" data-tip="Export">
              <button
                onClick={() => {}}
                className="btn btn-square btn-primary btn-sm"
              >
                <BiExport />
              </button>
            </div>
            <div className="tooltip" data-tip="Download">
              <button
                onClick={() => {}}
                className="btn btn-square btn-primary btn-sm"
              >
                <MdOutlineFileDownload />
              </button>
            </div>
          </div>
        }
      />

      <FilterCard
        noTitle={true}
        title={""}
        actions={
          <div className="flex flex-col w-full md:flex-row gap-3 items-end">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Start Month</span>
              </div>
              <input
                type="month"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">End Month</span>
              </div>
              <input
                type="month"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Account</span>
              </div>
              <select className="select select-bordered w-full" name="" id="">
                <option value="">Select Account</option>
                {accounts.map((account, index) => (
                  <option key={index} value={account}>
                    {account}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select className="select select-bordered w-full" name="" id="">
                <option value="">Select Category</option>
                {categories.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
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

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mb-4 gap-3">
        <CardAccount title="Benjamin Adams - ROUNDBANK" value="$4,891.87" />
        <CardAccount title="Chisom Latifat - COBIZ BANK" value="$5,489.20" />
        <CardAccount title="Earl Hane MD - US BANK, NA" value="$9,202.20" />
        <CardAccount title="Stripe / Paypal" value="$1,398.72" />
      </div>

      <CustomTable column={COLUMN} rows={ROW} />

      <Paginate showData={ROW.length} totalData={ROW.length} />
    </div>
  );
};

const CardAccount = ({ title, value }) => {
  return (
    <div className="flex flex-col gap-1 p-4 rounded drop-shadow bg-base-100">
      <h1 className="font-semibold text-base">{title}</h1>
      <h1 className="text-base">{value}</h1>
    </div>
  );
};

export default AccountStatement;
