import React from "react";
import HeadPage from "../../../../components/HeadPage/HeadPage";
import CustomTable from "../../../../components/TablePage/CustomTable";
import Paginate from "../../../../components/Paginate/Paginate";
import { LEDGERCOLUMN, LEDGERROW } from "./dummyData";
import { IoSearchOutline } from "react-icons/io5";
import FilterCard from "../../../../components/Cards/FilterCard";
import { MdOutlineFileDownload } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

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

      <CustomTable column={LEDGERCOLUMN} rows={LEDGERROW} />

      <Paginate showData={LEDGERROW.length} totalData={LEDGERROW.length} />
    </div>
  );
};

export default LedgerSummary;
