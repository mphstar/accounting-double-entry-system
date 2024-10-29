import React from "react";
import HeadPage from "../../../../components/HeadPage/HeadPage";
import CustomTable from "../../../../components/TablePage/CustomTable";
import Paginate from "../../../../components/Paginate/Paginate";
import { LEDGERCOLUMN, LEDGERROW } from "./dummyData";
import { IoSearchOutline } from "react-icons/io5";
import FilterCard from "../../../../components/Cards/FilterCard";
import { MdOutlineFileDownload } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FaDollarSign } from "react-icons/fa";

const LedgerSummary = () => {
  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Ledger Summary"}
        breadcrumb={"Ledger Summary"}
        actions={
          <button className="btn btn-square btn-primary btn-sm">
            <MdOutlineFileDownload />
          </button>
        }
      />

      <FilterCard
        title={"Filter Date"}
        actions={
          <div className="flex flex-col w-full md:flex-row gap-3 items-end">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Start Date</span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full input-sm"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">End Date</span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full input-sm"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Account</span>
              </div>
              <select
                className="select select-bordered w-full select-sm"
                name=""
                id=""
              >
                <option value="">Checking Account</option>
                <option value="">Petty Cash</option>
                <option value="">Inventory</option>
              </select>
            </label>
            <div className="flex gap-1">
              <button className="btn btn-primary btn-square btn-sm">
                <IoSearchOutline />
              </button>
              <button className="btn btn-error btn-square btn-sm">
                <GrPowerReset />
              </button>
            </div>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card
          title="Total Credit"
          value={"$245.00"}
          bgColor="bg-green-500"
          textColor="text-green-500"
        />
        <Card
          title="Total Debit"
          value={"$100.00"}
          bgColor="bg-blue-500"
          textColor="text-blue-500"
        />
        <Card
          title="Total Balance"
          value={"$345.00"}
          bgColor="bg-orange-500"
          textColor="text-orange-500"
        />
      </div>

      <CustomTable column={LEDGERCOLUMN} rows={LEDGERROW} />

      <Paginate showData={LEDGERROW.length} totalData={LEDGERROW.length} />
    </div>
  );
};

const Card = ({ title, value, bgColor, textColor }) => {
  return (
    <div className="flex flex-row items-center gap-2 bg-base-100 p-4 rounded-md drop-shadow">
      <div className="flex flex-col flex-1">
        <h1 className="font-medium">{title}</h1>
        <p className={`font-medium text-xl mt-4 ${textColor}`}>{value}</p>
      </div>
      <div className={`p-2 rounded-full ${bgColor} text-white`}>
        <FaDollarSign />
      </div>
    </div>
  );
};

export default LedgerSummary;
