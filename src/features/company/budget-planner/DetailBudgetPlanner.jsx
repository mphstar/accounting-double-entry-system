import React, { useState } from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import FilterCard from "@/components/Cards/FilterCard";

const DetailBudgetPlanner = () => {
  const monthly = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const quarterly = ["Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"];
  const halfYearly = ["Jan-Jun", "Jul-Dec"];
  const yearly = ["Jan-Dec"];

  const [budgetPeriod, setBudgetPeriod] = useState("quarterly");

  const [valueBusinessProfit, setValueBusinessProfit] = useState({
    monthly: monthly.map(() => ""),
    quarterly: quarterly.map(() => ""),
    halfYearly: halfYearly.map(() => ""),
    yearly: yearly.map(() => ""),
  });

  const [valueDividends, setValueDividends] = useState({
    monthly: monthly.map(() => ""),
    quarterly: quarterly.map(() => ""),
    halfYearly: halfYearly.map(() => ""),
    yearly: yearly.map(() => ""),
  });

  const [valueInsurance, setValueInsurance] = useState({
    monthly: monthly.map(() => ""),
    quarterly: quarterly.map(() => ""),
    halfYearly: halfYearly.map(() => ""),
    yearly: yearly.map(() => ""),
  });
  const [valueEmployeeProfit, setValueEmployeeProfit] = useState({
    monthly: monthly.map(() => ""),
    quarterly: quarterly.map(() => ""),
    halfYearly: halfYearly.map(() => ""),
    yearly: yearly.map(() => ""),
  });

  const onChangeInput = (e, index, arr, budgetPeriod, option) => {
    const value = e.target.value;
    const temp = [...arr[budgetPeriod]];
    temp[index] = value;

    if (option === "businessProfit")
      setValueBusinessProfit({ ...arr, [budgetPeriod]: temp });

    if (option === "dividends")
      setValueDividends({ ...arr, [budgetPeriod]: temp });

    if (option === "insurance")
      setValueInsurance({ ...arr, [budgetPeriod]: temp });

    if (option === "employeeProfit")
      setValueEmployeeProfit({ ...arr, [budgetPeriod]: temp });
  };

  const getTotalPerCategory = (arr) => {
    let total = 0;

    arr[budgetPeriod].map((item) => {
      const value = item === "" ? 0 : item;

      total += parseFloat(value);
    });
    return total;
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Budget Vs Actual: Casey Irwin"}
        breadcrumb={"Budget Planner"}
        actions={<div className="flex gap-2 items-center"></div>}
      />
      <FilterCard
        noTitle={true}
        title={""}
        actions={
          <div className="flex flex-col w-full font-semibold md:flex-row gap-3 items-end">
            Year : 2024
          </div>
        }
      />

      <div className="flex flex-col w-full overflow-x-auto bg-base-100 p-6 drop-shadow rounded-md">
        <table className="table">
          <thead>
            <tr>
              <td rowSpan={2}>Category</td>
              {budgetPeriod === "monthly" &&
                monthly.map((item, index) => (
                  <td colSpan={3} key={index}>
                    {item}
                  </td>
                ))}
              {budgetPeriod === "quarterly" &&
                quarterly.map((item, index) => (
                  <td
                    className="text-center bg-base-200"
                    colSpan={3}
                    key={index}
                  >
                    {item}
                  </td>
                ))}
              {budgetPeriod === "halfYearly" &&
                halfYearly.map((item, index) => (
                  <td colSpan={3} key={index}>
                    {item}
                  </td>
                ))}
              {budgetPeriod === "yearly" &&
                yearly.map((item, index) => (
                  <td colSpan={3} key={index}>
                    {item}
                  </td>
                ))}
            </tr>
            <tr>
              {quarterly.map((item, index) => (
                <>
                  <td className="text-center bg-base-200 w-32" key={index}>
                    Budget
                  </td>
                  <td className="text-center bg-base-200 w-32" key={index}>
                    Actual
                  </td>
                  <td className="text-center bg-base-200 w-32" key={index}>
                    Over Budget
                  </td>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={"2"} className="font-semibold">
                Income :{" "}
              </td>
            </tr>
            <tr>
              <td>Business Profit</td>
              <td>$36.00</td>
              <td>0</td>
              <td>
                <div className="flex flex-col">
                  <p>$36.00</p>
                  <p>(-100.00%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>Dividends</td>
              <td>$36.00</td>
              <td>0</td>
              <td>
                <div className="flex flex-col">
                  <p>$36.00</p>
                  <p>(-100.00%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>Total : </td>
              <td>$36.00</td>
              <td>0</td>
              <td>
                <div className="flex flex-col">
                  <p>$36.00</p>
                  <p>(-100.00%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td colSpan={"2"} className="font-semibold">
                Expense :{" "}
              </td>
            </tr>
            <tr>
              <td>Insurance</td>
              <td>$36.00</td>
              <td>0</td>
              <td>
                <div className="flex flex-col">
                  <p>$36.00</p>
                  <p>(-100.00%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee benefits</td>
              <td>$36.00</td>
              <td>0</td>
              <td>
                <div className="flex flex-col">
                  <p>$36.00</p>
                  <p>(-100.00%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>Total : </td>
              <td>$36.00</td>
              <td>0</td>
              <td>
                <div className="flex flex-col">
                  <p>$36.00</p>
                  <p>(-100.00%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
            </tr>

            <tr className="font-semibold bg-base-200"> 
              <td>NET PROFIT : </td>
              <td>$36.00</td>
              <td>0</td>
              <td>
                <div className="flex flex-col">
                  <p>$36.00</p>
                  <p>(-100.00%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
              <td>$136.00</td>
              <td>
                <div className="flex flex-col">
                  <p>$105.50</p>
                  <p>(-77.57%)</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p>$-30.50</p>
                  <p>(-22.43%)</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailBudgetPlanner;
