import React, { lazy } from "react";
import HeadPage from "../../../components/HeadPage/HeadPage";
import { FiFilter } from "react-icons/fi";
import { TbFileExport } from "react-icons/tb";
import { MdOutlinePrint } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import FilterCard from "../../../components/Cards/FilterCard";
import { useDispatch, useSelector } from "react-redux";
import { handleShow } from "./filterSlice";

const TrialBalance = () => {
  const { show } = useSelector((state) => state.trialBalance);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Trial Balance"}
        breadcrumb={"Trial Balance"}
        actions={
          <div className="flex items-center gap-1">
            <button
              onClick={() => dispatch(handleShow())}
              className="btn btn-square btn-accent btn-sm"
            >
              <FiFilter />
            </button>
            <button className="btn btn-square btn-primary btn-sm">
              <TbFileExport />
            </button>
            <button className="btn btn-square btn-secondary btn-sm">
              <MdOutlinePrint />
            </button>
          </div>
        }
      />

      {show && (
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
      )}

      <div className="flex w-full justify-center">
        <div className="flex flex-col px-6 md:px-12 py-6 drop-shadow rounded-md bg-base-100 w-full overflow-x-auto md:overflow-x-hidden">
          <h1>
            Trial Balance of Rajodiya Infotech as of 2024-01-01 to 2024-08-09
          </h1>
          <table className="mt-6">
            <thead>
              <tr>
                <th className="text-start">Account</th>
                <th className="text-start">Account Code</th>
                <th className="text-start">Debit</th>
                <th className="text-end">Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="font-semibold py-2 pt-6">
                  Assets
                </td>
              </tr>
              <tr>
                <td className="pl-4 text-primary">
                  <a href="#">Petty Cash</a>
                </td>
                <td>1065</td>
                <td>$20.00</td>
                <td className="text-end">$110.00</td>
              </tr>
              <tr>
                <td className="pl-4 text-primary">
                  <a href="#">Inventory</a>
                </td>
                <td>1510</td>
                <td>$50.00</td>
                <td className="text-end">$0.00</td>
              </tr>

              <tr>
                <td colSpan={4} className="font-semibold py-2 pt-6">
                  Income
                </td>
              </tr>
              <tr>
                <td className="pl-4 text-primary">
                  <a href="#">PSales Incomeh</a>
                </td>
                <td>4010</td>
                <td>$0.00</td>
                <td className="text-end">$110.00</td>
              </tr>

              <tr>
                <td colSpan={4} className="font-semibold py-2 pt-6">
                  Costs of Goods Sold
                </td>
              </tr>
              <tr>
                <td className="pl-4 text-primary">
                  <a href="#">Cost of Sales- On Services</a>
                </td>
                <td>5005</td>
                <td>$220.25</td>
                <td className="text-end">$0.00</td>
              </tr>

              <tr>
                <td colSpan={4} className="font-semibold py-2 pt-6">
                  Expenses
                </td>
              </tr>
              <tr>
                <td className="pl-4 text-primary">
                  <a href="#">Cost of Sales- On Services</a>
                </td>
                <td>5760</td>
                <td>$200.00</td>
                <td className="text-end">$0.00</td>
              </tr>
              <tr>
                <td className="h-8"></td>
              </tr>

              <tr>
                <td colSpan={4}>
                  <div className="h-[1px] w-full bg-base-300 mb-2"></div>
                </td>
              </tr>

              <tr>
                <th colSpan={2} className="text-start">
                  Total
                </th>
                <th className="text-start">$490.25</th>
                <th className="text-end">$220.00</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrialBalance;
