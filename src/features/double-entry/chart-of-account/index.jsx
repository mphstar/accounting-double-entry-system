import React from "react";
import HeadPage from "../../../components/HeadPage/HeadPage";
import CustomTable from "../../../components/TablePage/CustomTable";
import Paginate from "../../../components/Paginate/Paginate";
import { ASSETSCOLUMN, ASSETSROW } from "./dummyData";
import FilterCard from "../../../components/Cards/FilterCard";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";

const ChartOfAccount = () => {
  return (
    <div className="flex flex-col">
      {/* head pages */}
      <HeadPage
        title={"Manage Chart of Account"}
        breadcrumb={"Chart of Account"}
        actions={
          <button className="btn btn-square btn-primary btn-sm">+</button>
        }
      />

      <FilterCard
        title={"Filter Date"}
        actions={
          <div className="flex flex-col w-full md:w-fit md:flex-row gap-3 items-end">
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

      {/* table */}
      <div className="flex flex-col gap-6">
        <div>
          <CustomTable
            title={"Assets"}
            column={ASSETSCOLUMN}
            rows={ASSETSROW}
          />
          <Paginate showData={ASSETSROW.length} totalData={ASSETSROW.length} />
        </div>

        <div>
          <CustomTable
            title={"Liabilities"}
            column={ASSETSCOLUMN}
            rows={ASSETSROW}
          />
          <Paginate showData={ASSETSROW.length} totalData={ASSETSROW.length} />
        </div>

        <div>
          <CustomTable
            title={"Equity"}
            column={ASSETSCOLUMN}
            rows={ASSETSROW}
          />
          <Paginate showData={ASSETSROW.length} totalData={ASSETSROW.length} />
        </div>

        <div>
          <CustomTable
            title={"Income"}
            column={ASSETSCOLUMN}
            rows={ASSETSROW}
          />
          <Paginate showData={ASSETSROW.length} totalData={ASSETSROW.length} />
        </div>
        <div>
          <CustomTable
            title={"Costs of Goods Sold"}
            column={ASSETSCOLUMN}
            rows={ASSETSROW}
          />
          <Paginate showData={ASSETSROW.length} totalData={ASSETSROW.length} />
        </div>
        <div>
          <CustomTable
            title={"Expenses"}
            column={ASSETSCOLUMN}
            rows={ASSETSROW}
          />
          <Paginate showData={ASSETSROW.length} totalData={ASSETSROW.length} />
        </div>
      </div>
    </div>
  );
};

export default ChartOfAccount;
