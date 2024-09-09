import React, { useState } from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import FilterCard from "@/components/Cards/FilterCard";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";

import { MdOutlineFileDownload } from "react-icons/md";
const Cashflow = () => {
  const [selected, setSelected] = useState(0);

  const DataRevenue = [];
  const DataInvoice = [
    {
      category: "Business profits",
      january: "$0.00",
      february: "$0.00",
      march: "$0.00",
      april: "$0.00",
      may: "$0.00",
      june: "$290.00",
      july: "$0.00",
      august: "$0.00",
      september: "$0.00",
      october: "$0.00",
      november: "$0.00",
      december: "$0.00",
    },
  ];

  const DataPayment = [];
  const DataBill = [
    {
      category: "",
      january: "$0.00",
      february: "$0.00",
      march: "$0.00",
      april: "$0.00",
      may: "$0.00",
      june: "$290.00",
      july: "$0.00",
      august: "$0.00",
      september: "$0.00",
      october: "$0.00",
      november: "$0.00",
      december: "$0.00",
    },
  ];

  const COLUMN = [];

  const ROW = [
    [
      {
        colSpan: 13,
        value: "Income",
        className: "font-semibold text-xl",
      },
    ],
    [
      {
        value: "Category",
        className: "font-semibold",
      },
      {
        value: "January",
        className: "font-semibold",
      },
      {
        value: "February",
        className: "font-semibold",
      },
      {
        value: "March",
        className: "font-semibold",
      },
      {
        value: "April",
        className: "font-semibold",
      },
      {
        value: "May",
        className: "font-semibold",
      },
      {
        value: "June",
        className: "font-semibold",
      },
      {
        value: "July",
        className: "font-semibold",
      },
      {
        value: "August",
        className: "font-semibold",
      },
      {
        value: "September",
        className: "font-semibold",
      },
      {
        value: "October",
        className: "font-semibold",
      },
      {
        value: "November",
        className: "font-semibold",
      },
      {
        value: "December",
        className: "font-semibold",
      },
    ],
    [
      {
        colSpan: 13,
        value: "Revenue: ",
        className: "font-semibold",
      },
    ],
    ...DataRevenue.map((item) => [
      {
        value: item.category,
      },
      {
        value: item.january,
      },
      {
        value: item.february,
      },
      {
        value: item.march,
      },
      {
        value: item.april,
      },
      {
        value: item.may,
      },
      {
        value: item.june,
      },
      {
        value: item.july,
      },
      {
        value: item.august,
      },
      {
        value: item.september,
      },
      {
        value: item.october,
      },
      {
        value: item.november,
      },
      {
        value: item.december,
      },
    ]),

    [
      {
        colSpan: 13,
        value: "Invoice: ",
        className: "font-semibold",
      },
    ],

    ...DataInvoice.map((item) => [
      {
        value: item.category,
      },
      {
        value: item.january,
      },
      {
        value: item.february,
      },
      {
        value: item.march,
      },
      {
        value: item.april,
      },
      {
        value: item.may,
      },
      {
        value: item.june,
      },
      {
        value: item.july,
      },
      {
        value: item.august,
      },
      {
        value: item.september,
      },
      {
        value: item.october,
      },
      {
        value: item.november,
      },
      {
        value: item.december,
      },
    ]),
    [
      {
        value: "Income = Revenue + Invoice",
        className: "font-semibold",
        colSpan: 13,
      },
    ],
    [
      {
        value: "Total",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
    ],

    [
      {
        colSpan: 13,
        value: "Expense",
        className: "font-semibold text-xl",
      },
    ],
    [
      {
        value: "Category",
        className: "font-semibold",
      },
      {
        value: "January",
        className: "font-semibold",
      },
      {
        value: "February",
        className: "font-semibold",
      },
      {
        value: "March",
        className: "font-semibold",
      },
      {
        value: "April",
        className: "font-semibold",
      },
      {
        value: "May",
        className: "font-semibold",
      },
      {
        value: "June",
        className: "font-semibold",
      },
      {
        value: "July",
        className: "font-semibold",
      },
      {
        value: "August",
        className: "font-semibold",
      },
      {
        value: "September",
        className: "font-semibold",
      },
      {
        value: "October",
        className: "font-semibold",
      },
      {
        value: "November",
        className: "font-semibold",
      },
      {
        value: "December",
        className: "font-semibold",
      },
    ],
    [
      {
        colSpan: 13,
        value: "Payment: ",
        className: "font-semibold",
      },
    ],
    ...DataPayment.map((item) => [
      {
        value: item.category,
      },
      {
        value: item.january,
      },
      {
        value: item.february,
      },
      {
        value: item.march,
      },
      {
        value: item.april,
      },
      {
        value: item.may,
      },
      {
        value: item.june,
      },
      {
        value: item.july,
      },
      {
        value: item.august,
      },
      {
        value: item.september,
      },
      {
        value: item.october,
      },
      {
        value: item.november,
      },
      {
        value: item.december,
      },
    ]),

    [
      {
        colSpan: 13,
        value: "Bill: ",
        className: "font-semibold",
      },
    ],

    ...DataBill.map((item) => [
      {
        value: item.category,
      },
      {
        value: item.january,
      },
      {
        value: item.february,
      },
      {
        value: item.march,
      },
      {
        value: item.april,
      },
      {
        value: item.may,
      },
      {
        value: item.june,
      },
      {
        value: item.july,
      },
      {
        value: item.august,
      },
      {
        value: item.september,
      },
      {
        value: item.october,
      },
      {
        value: item.november,
      },
      {
        value: item.december,
      },
    ]),
    [
      {
        value: "Expense = Payment + Bill",
        className: "font-semibold",
        colSpan: 13,
      },
    ],
    [
      {
        value: "Total",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
    ],

    [
      {
        value: "NET PROFIT = TOTAL INCOME - TOTAL EXPENSE",
        className: "font-semibold",
        colSpan: 13,
      },
    ],
    [
      {
        value: "Net Profit",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
      {
        value: "$0.00",
        className: "font-semibold",
      },
    ],
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Cashflow"}
        breadcrumb={"Cashflow"}
        actions={
          <div className="flex gap-2 items-center">
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
        noTitle
        actions={
          <div className="flex flex-row w-full gap-3 items-center flex-wrap xl:flex-nowrap">
            <div className="flex w-full gap-1 cursor-pointer">
              <div
                onClick={() => setSelected(0)}
                className={`px-2 py-1 ${
                  selected == 0 ? "bg-primary text-white" : "hover:bg-base-300"
                } rounded`}
              >
                Monthly
              </div>
              <div
                onClick={() => setSelected(1)}
                className={`px-2 py-1 ${
                  selected == 1 ? "bg-primary text-white" : "hover:bg-base-300"
                } rounded`}
              >
                Quarterly
              </div>
            </div>
            {/* year */}
            <div className="flex items-end gap-3 ">
              <label className="form-control w-fit md:w-full">
                <span className="label-text">Year</span>
                <select className="select select-bordered" name="" id="">
                  <option value="">2024</option>
                  <option value="">2023</option>
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
          </div>
        }
      />

      <CustomTable withoutAction={true} column={COLUMN} rows={ROW} />
    </div>
  );
};

export default Cashflow;
