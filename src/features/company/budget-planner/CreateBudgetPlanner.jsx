import React, { useState } from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import FilterCard from "@/components/Cards/FilterCard";

const CreateBudgetPlanner = () => {
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

  const [budgetPeriod, setBudgetPeriod] = useState("monthly");

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
        title={"Create Budget Planner"}
        breadcrumb={"Budget Planner"}
        actions={<div className="flex gap-2 items-center"></div>}
      />
      <FilterCard
        noTitle={true}
        title={""}
        actions={
          <div className="flex flex-col w-full md:flex-row gap-3 items-end">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input type="text" className="input input-bordered w-full " />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Budget Period</span>
              </div>
              <select
                value={budgetPeriod}
                onChange={(e) => setBudgetPeriod(e.target.value)}
                name=""
                id=""
                className="select select-bordered"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="halfYearly">Half Yearly</option>
                <option value="yearly">Yearly</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Year</span>
              </div>
              <select name="" id="" className="select select-bordered">
                <option value="">2021</option>
                <option value="">2022</option>
                <option value="">2023</option>
                <option value="">2024</option>
              </select>
            </label>
          </div>
        }
      />

      <div className="flex flex-col w-full overflow-x-auto bg-base-100 p-6 drop-shadow rounded-md">
        <table className="table">
          <thead>
            <tr>
              <td>Category</td>
              {budgetPeriod === "monthly" &&
                monthly.map((item, index) => <td key={index}>{item}</td>)}
              {budgetPeriod === "quarterly" &&
                quarterly.map((item, index) => <td key={index}>{item}</td>)}
              {budgetPeriod === "halfYearly" &&
                halfYearly.map((item, index) => <td key={index}>{item}</td>)}
              {budgetPeriod === "yearly" &&
                yearly.map((item, index) => <td key={index}>{item}</td>)}
              <td>Total</td>
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
              {budgetPeriod === "monthly" &&
                monthly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueBusinessProfit.monthly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueBusinessProfit,
                          "monthly",
                          "businessProfit"
                        )
                      }
                      className="input input-bordered w-20"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}

              {budgetPeriod === "quarterly" &&
                quarterly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueBusinessProfit.quarterly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueBusinessProfit,
                          "quarterly",
                          "businessProfit"
                        )
                      }
                      className="input input-bordered w-full"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              {budgetPeriod === "halfYearly" &&
                halfYearly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueBusinessProfit.halfYearly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueBusinessProfit,
                          "halfYearly",
                          "businessProfit"
                        )
                      }
                      className="input input-bordered w-full"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              {budgetPeriod === "yearly" &&
                yearly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueBusinessProfit.yearly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueBusinessProfit,
                          "yearly",
                          "businessProfit"
                        )
                      }
                      className="input input-bordered w-full"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              <td>{getTotalPerCategory(valueBusinessProfit).toString()}</td>
            </tr>
            <tr>
              <td>Dividends</td>
              {budgetPeriod === "monthly" &&
                monthly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueDividends.monthly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueDividends,
                          "monthly",
                          "dividends"
                        )
                      }
                      className="input input-bordered w-20"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              {budgetPeriod === "quarterly" &&
                quarterly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueDividends.quarterly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueDividends,
                          "quarterly",
                          "dividends"
                        )
                      }
                      className="input input-bordered w-full"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              {budgetPeriod === "halfYearly" &&
                halfYearly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueDividends.halfYearly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueDividends,
                          "halfYearly",
                          "dividends"
                        )
                      }
                      className="input input-bordered w-full"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              {budgetPeriod === "yearly" &&
                yearly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueDividends.yearly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueDividends,
                          "yearly",
                          "dividends"
                        )
                      }
                      className="input input-bordered w-full"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              <td>{getTotalPerCategory(valueDividends).toString()}</td>
            </tr>
            <tr>
              <td>Total : </td>
              {budgetPeriod === "monthly" &&
                monthly.map((item, index) => (
                  <td key={index}>
                    {parseInt(
                      valueBusinessProfit[budgetPeriod][index] === ""
                        ? 0
                        : valueBusinessProfit[budgetPeriod][index]
                    ) +
                      parseInt(
                        valueDividends[budgetPeriod][index] === ""
                          ? 0
                          : valueDividends[budgetPeriod][index]
                      )}
                  </td>
                ))}
              {budgetPeriod === "quarterly" &&
                quarterly.map((item, index) => (
                  <td key={index}>
                    {parseInt(
                      valueBusinessProfit[budgetPeriod][index] === ""
                        ? 0
                        : valueBusinessProfit[budgetPeriod][index]
                    ) +
                      parseInt(
                        valueDividends[budgetPeriod][index] === ""
                          ? 0
                          : valueDividends[budgetPeriod][index]
                      )}
                  </td>
                ))}
              {budgetPeriod === "halfYearly" &&
                halfYearly.map((item, index) => (
                  <td key={index}>
                    {parseInt(
                      valueBusinessProfit[budgetPeriod][index] === ""
                        ? 0
                        : valueBusinessProfit[budgetPeriod][index]
                    ) +
                      parseInt(
                        valueDividends[budgetPeriod][index] === ""
                          ? 0
                          : valueDividends[budgetPeriod][index]
                      )}
                  </td>
                ))}
              {budgetPeriod === "yearly" &&
                yearly.map((item, index) => (
                  <td key={index}>
                    {parseInt(
                      valueBusinessProfit[budgetPeriod][index] === ""
                        ? 0
                        : valueBusinessProfit[budgetPeriod][index]
                    ) +
                      parseInt(
                        valueDividends[budgetPeriod][index] === ""
                          ? 0
                          : valueDividends[budgetPeriod][index]
                      )}
                  </td>
                ))}
              <td>
                {getTotalPerCategory(valueBusinessProfit) +
                  getTotalPerCategory(valueDividends)}
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
              {budgetPeriod === "monthly" &&
                monthly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueInsurance.monthly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueInsurance,
                          "monthly",
                          "insurance"
                        )
                      }
                      className="input input-bordered w-20"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}

              {budgetPeriod === "quarterly" &&
                quarterly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueInsurance.quarterly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueInsurance,
                          "quarterly",
                          "insurance"
                        )
                      }
                      className="input input-bordered w-full"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              {budgetPeriod === "halfYearly" &&
                halfYearly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueInsurance.halfYearly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueInsurance,
                          "halfYearly",
                          "insurance"
                        )
                      }
                      className="input input-bordered w-full"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              {budgetPeriod === "yearly" &&
                yearly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueInsurance.yearly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueInsurance,
                          "yearly",
                          "insurance"
                        )
                      }
                      className="input input-bordered w-full"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              <td>{getTotalPerCategory(valueInsurance).toString()}</td>
            </tr>
            <tr>
              <td>Employee Benefits</td>
              {budgetPeriod === "monthly" &&
                monthly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueEmployeeProfit.monthly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueEmployeeProfit,
                          "monthly",
                          "employeeProfit"
                        )
                      }
                      className="input input-bordered w-20"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              {budgetPeriod === "quarterly" &&
                quarterly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueEmployeeProfit.quarterly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueEmployeeProfit,
                          "quarterly",
                          "employeeProfit"
                        )
                      }
                      className="input input-bordered w-full"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              {budgetPeriod === "halfYearly" &&
                halfYearly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueEmployeeProfit.halfYearly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueEmployeeProfit,
                          "halfYearly",
                          "employeeProfit"
                        )
                      }
                      className="input input-bordered w-full"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              {budgetPeriod === "yearly" &&
                yearly.map((item, index) => (
                  <td key={index}>
                    <input
                      value={valueEmployeeProfit.yearly[index] ?? ""}
                      onChange={(e) =>
                        onChangeInput(
                          e,
                          index,
                          valueEmployeeProfit,
                          "yearly",
                          "employeeProfit"
                        )
                      }
                      className="input input-bordered w-full"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                ))}
              <td>{getTotalPerCategory(valueEmployeeProfit).toString()}</td>
            </tr>

            <tr>
              <td>Total : </td>
              {budgetPeriod === "monthly" &&
                monthly.map((item, index) => (
                  <td key={index}>
                    {parseInt(
                      valueInsurance[budgetPeriod][index] === ""
                        ? 0
                        : valueInsurance[budgetPeriod][index]
                    ) +
                      parseInt(
                        valueEmployeeProfit[budgetPeriod][index] === ""
                          ? 0
                          : valueEmployeeProfit[budgetPeriod][index]
                      )}
                  </td>
                ))}
              {budgetPeriod === "quarterly" &&
                quarterly.map((item, index) => (
                  <td key={index}>
                    {parseInt(
                      valueInsurance[budgetPeriod][index] === ""
                        ? 0
                        : valueInsurance[budgetPeriod][index]
                    ) +
                      parseInt(
                        valueEmployeeProfit[budgetPeriod][index] === ""
                          ? 0
                          : valueEmployeeProfit[budgetPeriod][index]
                      )}
                  </td>
                ))}
              {budgetPeriod === "halfYearly" &&
                halfYearly.map((item, index) => (
                  <td key={index}>
                    {parseInt(
                      valueInsurance[budgetPeriod][index] === ""
                        ? 0
                        : valueInsurance[budgetPeriod][index]
                    ) +
                      parseInt(
                        valueEmployeeProfit[budgetPeriod][index] === ""
                          ? 0
                          : valueEmployeeProfit[budgetPeriod][index]
                      )}
                  </td>
                ))}
              {budgetPeriod === "yearly" &&
                yearly.map((item, index) => (
                  <td key={index}>
                    {parseInt(
                      valueInsurance[budgetPeriod][index] === ""
                        ? 0
                        : valueInsurance[budgetPeriod][index]
                    ) +
                      parseInt(
                        valueEmployeeProfit[budgetPeriod][index] === ""
                          ? 0
                          : valueEmployeeProfit[budgetPeriod][index]
                      )}
                  </td>
                ))}
              <td>
                {getTotalPerCategory(valueInsurance) +
                  getTotalPerCategory(valueEmployeeProfit)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end w-full mt-8 gap-2">
        <button className="btn">Cancel</button>
        <button className="btn btn-success text-white">Save</button>
      </div>
    </div>
  );
};

export default CreateBudgetPlanner;
