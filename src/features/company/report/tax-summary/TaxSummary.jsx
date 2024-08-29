import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import FilterCard from "@/components/Cards/FilterCard";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";

const TaxSummary = () => {
  const DataIncome = [
    {
      tax: "CSGT",
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
    {
      tax: "SGST",
      january: "$0.00",
      february: "$0.00",
      march: "$0.00",
      april: "$0.00",
      may: "$0.00",
      june: "$70.00",
      july: "$0.00",
      august: "$0.00",
      september: "$0.00",
      october: "$0.00",
      november: "$0.00",
      december: "$0.00",
    },
  ];

  const DataExpense = [];

  const COLUMN = [];

  const ROW = [
    [
      {
        value: "Income",
        className: "font-semibold",
      },
    ],
    [
      {
        value: "Tax",
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
    ...DataIncome.map((iem) => [
      {
        value: iem.tax,
      },
      {
        value: iem.january,
      },
      {
        value: iem.february,
      },
      {
        value: iem.march,
      },
      {
        value: iem.april,
      },
      {
        value: iem.may,
      },
      {
        value: iem.june,
      },
      {
        value: iem.july,
      },
      {
        value: iem.august,
      },
      {
        value: iem.september,
      },
      {
        value: iem.october,
      },
      {
        value: iem.november,
      },
      {
        value: iem.december,
      },
    ]),
    [
      {
        value: "Expense",
        className: "font-semibold",
      },
    ],
    [
      {
        value: "Tax",
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
    DataExpense.length == 0
      ? [
          {
            value: "Expense tax not found",
            className: "text-center",
            colSpan: 13,
          },
        ]
      : DataExpense.map((iem) => [
          {
            value: iem.tax,
          },
          {
            value: iem.january,
          },
          {
            value: iem.february,
          },
          {
            value: iem.march,
          },
          {
            value: iem.april,
          },
          {
            value: iem.may,
          },
          {
            value: iem.june,
          },
          {
            value: iem.july,
          },
          {
            value: iem.august,
          },
          {
            value: iem.september,
          },
          {
            value: iem.october,
          },
          {
            value: iem.november,
          },
          {
            value: iem.december,
          },
        ]),
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Tax Summary"}
        breadcrumb={"Tax Summary"}
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
        title={""}
        actions={
          <div className="flex flex-col w-full md:flex-row gap-3 items-end">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Year</span>
              </div>
              <select className="select select-bordered w-full" name="" id="">
                <option value="">Select Years</option>
                {/* 10 tahun kebelakang dari tahun ini */}
                {Array.from({ length: 10 }).map((_, index) => (
                  <option key={index} value={2022 - index}>
                    {2022 - index}
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

      <CustomTable withoutAction={true} column={COLUMN} rows={ROW} />
    </div>
  );
};

export default TaxSummary;
