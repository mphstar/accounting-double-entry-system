import React from "react";
import { FiFilter } from "react-icons/fi";
import { TbFileExport } from "react-icons/tb";
import { MdOutlinePrint } from "react-icons/md";
import HeadPage from "../../../../components/HeadPage/HeadPage";

const BalanceSheet = () => {
  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Balance Sheet"}
        breadcrumb={"Balance Sheet"}
        actions={
          <div className="flex items-center gap-1">
            <button className="btn btn-square btn-accent btn-sm">
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

      <div className="flex w-full justify-center">
        <div className="flex flex-col px-6 md:px-12 py-6 drop-shadow rounded-md bg-base-100 w-full overflow-x-auto md:overflow-x-hidden">
          <h1>
            Balance Sheet of Rajodiya Infotech as of 2024-01-01 to 2024-08-09
          </h1>
          <table className="mt-6">
            <thead>
              <tr>
                <th className="text-start">Account</th>
                <th className="text-start">Account Code</th>
                <th className="text-end">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="font-semibold py-2 pt-6">
                  Assets
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="font-semibold pl-4">
                  Inventory Asset
                </td>
              </tr>
              <tr>
                <td className="pl-8 text-primary">
                  <a href="#">Petty Cash</a>
                </td>
                <td>1065</td>
                <td className="text-end text-primary">$90.00</td>
              </tr>

              <tr>
                <td colSpan={2} className="font-semibold pl-4 pb-3">
                  Total Current Asset
                </td>
                <td className="text-end font-bold">$90.00</td>
              </tr>

              <tr>
                <td colSpan={4} className="font-semibold pl-4">
                  Inventory Asset
                </td>
              </tr>
              <tr>
                <td className="pl-8 text-primary">
                  <a href="#">Inventory</a>
                </td>
                <td>1510</td>
                <td className="text-end text-primary">$-50.00</td>
              </tr>

              <tr>
                <td colSpan={2} className="font-semibold pl-4 pb-3">
                  Total Inventory Asset
                </td>
                <td className="text-end font-bold">$-50.00</td>
              </tr>

              <tr>
                <td className="h-8"></td>
              </tr>

              <tr>
                <td colSpan={3}>
                  <div className="h-[1px] w-full bg-base-300 mb-2"></div>
                </td>
              </tr>

              <tr>
                <th colSpan={2} className="text-start">
                  Total for Assets
                </th>
                <th className="text-end">$40.00</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheet;
