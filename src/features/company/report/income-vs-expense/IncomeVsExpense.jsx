import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import FilterCard from "@/components/Cards/FilterCard";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
import { data } from "autoprefixer";
import ReactApexChart from "react-apexcharts";

window.Apex = {
  chart: {
    foreColor: "#a1a1a1",
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
};

const IncomeVsExpense = () => {
  const option = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        name: "Profit",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
      },
    ],
    xaxis: {
      categories: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
    },
  };

  const DataIncome = [
    {
      category: "Revenue",
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
      category: "Invoice",
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
  const DataExpense = [
    {
      category: "Payment",
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
      category: "Bill",
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
        value: "Type",
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
        value: "Income: ",
        className: "font-semibold",
      },
    ],
    ...DataIncome.map((item) => [
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
        value: "Expense: ",
        className: "font-semibold",
      },
    ],

    ...DataExpense.map((item) => [
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
        value: "Profit = Income - Expense",
        className: "font-semibold",
        colSpan: 13,
      },
    ],
    [
      {
        value: "Profit",
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
        title={"Expense Summary"}
        breadcrumb={"Expense Summary"}
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
          <div className="flex flex-row w-full gap-3 items-end flex-wrap xl:flex-nowrap">
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Periode</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Monthly</option>
                <option value="">Quarterly</option>
                <option value="">Half Yearly</option>
                <option value="">Yearly</option>
              </select>
            </label>
            {/* year */}
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Year</span>
              <select className="select select-bordered" name="" id="">
                <option value="">2024</option>
                <option value="">2023</option>
              </select>
            </label>
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Category</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Category</option>
                <option value="">Business Profit</option>
                <option value="">Dividends</option>
              </select>
            </label>
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Customer</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Customer</option>
                <option value="">Kaire</option>
                <option value="">Protiong</option>
              </select>
            </label>
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Vendor</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Vendor</option>
                <option value="">Kaire</option>
                <option value="">Protiong</option>
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

      <div className="w-full bg-base-100 h-[400px] mb-4 flex flex-col drop-shadow rounded-md p-4">
        <h1>Expense</h1>
        <div className="flex w-full h-full pb-6  flex-col">
          <ReactApexChart
            options={option}
            series={option.series}
            type="line"
            height={"100%"}
            width={"100%"}
          />
        </div>
      </div>

      <CustomTable withoutAction={true} column={COLUMN} rows={ROW} />
    </div>
  );
};

export default IncomeVsExpense;
