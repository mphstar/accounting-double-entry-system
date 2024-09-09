import React, { useState } from "react";
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
import { Link } from "react-router-dom";

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

const BillSummary = () => {
  const [selected, setSelected] = useState(0);

  const option = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        name: "Invoice",
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

  const bills = [
    {
      bill: "#B1O00062",
      date: "Jun 7, 2024",
      customer: "Barclay Dean",
      category: "Business profits",
      status: "Sent",
      paidAmount: "$0.00",
      amountDue: "$105.50",
      paymentDate: null,
      amount: "$105.50",
    },
    {
      bill: "#B1O00063",
      date: "Jun 10, 2024",
      customer: "Protiong",
      category: "Dividends",
      status: "Sent",
      paidAmount: "$0.00",
      amountDue: "$550.00",
      paymentDate: null,
      amount: "$550.00",
    },
    {
      bill: "#B1O00065",
      date: "Jun 10, 2024",
      customer: "Joel O Dolan",
      category: "Dividends",
      status: "Sent",
      paidAmount: "$0.00",
      amountDue: "$173.25",
      paymentDate: null,
      amount: "$173.25",
    },
    {
      bill: "#B1O00066",
      date: "Jun 10, 2024",
      customer: "Ida F. Mullen",
      category: "Dividends",
      status: "Sent",
      paidAmount: "$0.00",
      amountDue: "$211.00",
      paymentDate: null,
      amount: "$211.00",
    },
    {
      bill: "#B1O00069",
      date: "Jun 11, 2024",
      customer: "Customer",
      category: "Dividends",
      status: "Sent",
      paidAmount: "$0.00",
      amountDue: "$404.25",
      paymentDate: null,
      amount: "$404.25",
    },
    {
      bill: "#B1O00070",
      date: "Sep 9, 2024",
      customer: "Amila",
      category: "Dividends",
      status: "Sent",
      paidAmount: "$0.00",
      amountDue: "$166.32",
      paymentDate: null,
      amount: "$166.32",
    },
    {
      bill: "#B1O00071",
      date: "Sep 9, 2024",
      customer: "Dilini",
      category: "Business profits",
      status: "Sent",
      paidAmount: "$0.00",
      amountDue: "$161.70",
      paymentDate: null,
      amount: "$161.70",
    },
  ];

  const COLUMN = [
    {
      value: "Bill",
      className: "",
    },
    {
      value: "Date",
      className: "",
    },
    {
      value: "Customer",
      className: "",
    },
    {
      value: "Category",
      className: "",
    },
    {
      value: "Status",
      className: "",
    },
    {
      value: "Paid Amount",
      className: "",
    },
    {
      value: "Amount Due",
      className: "",
    },
    {
      value: "Payment Date",
      className: "",
    },
    {
      value: "Amount",
      className: "",
    },
  ];

  const cekStatus = (status) => {
    if (status === "Sent") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-green-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Paid") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-blue-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Draft") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-yellow-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Unpaid") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-red-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Partialy Paid") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-gray-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-gray-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    }
  };

  const ROW = bills.map((bill) => [
    {
      value: (
        <Link to={`/app/company/expense/bill/${btoa(bill.bill)}`}>
          <button className="btn btn-primary btn-outline">
            {bill.bill}
          </button>
        </Link>
      ),
      className: "",
    },
    {
      value: bill.date,
      className: "",
    },
    {
      value: bill.customer,
      className: "",
    },
    {
      value: bill.category,
      className: "",
    },
    {
      value: cekStatus(bill.status),
      className: "",
    },
    {
      value: bill.paidAmount,
      className: "",
    },
    {
      value: bill.amountDue,
      className: "",
    },
    {
      value: bill.paymentDate,
      className: "",
    },
    {
      value: bill.amount,
      className: "",
    },
  ]);

  const summary = {
    totalBill: "$1,772.02",
    totalPaid: "$0.00",
    totalDue: "$1,772.02",
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Bill Summary"}
        breadcrumb={"Bill Summary"}
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
            <label className="form-control w-full">
              <span className="label-text">Start Date</span>
              <input
                type="date"
                className="input input-bordered"
                name=""
                id=""
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text">End Date</span>
              <input
                type="date"
                className="input input-bordered"
                name=""
                id=""
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text">Customer</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Customer</option>
                <option value="">Kaire</option>
                <option value="">Protiong</option>
              </select>
            </label>
            <label className="form-control w-full">
              <span className="label-text">Status</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Status</option>
                <option value="">Draft</option>
                <option value="">Sent</option>
                <option value="">Unpaid</option>
                <option value="">Particaly Paid</option>
                <option value="">Paid</option>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <Card title="Total Bill" value={summary.totalBill} />
        <Card title="Total Paid" value={summary.totalPaid} />
        <Card title="Total Due" value={summary.totalDue} />
      </div>

      <div className="w-full bg-base-100 min-h-[400px] mb-4 flex flex-col drop-shadow rounded-md p-4">
        {/* <h1>Income</h1> */}
        <div className="flex w-full gap-1 cursor-pointer mb-4">
          <div
            onClick={() => setSelected(0)}
            className={`px-2 py-1 ${
              selected == 0 ? "bg-primary text-white" : "hover:bg-base-300"
            } rounded`}
          >
            Summary
          </div>
          <div
            onClick={() => setSelected(1)}
            className={`px-2 py-1 ${
              selected == 1 ? "bg-primary text-white" : "hover:bg-base-300"
            } rounded`}
          >
            Bills
          </div>
        </div>
        {selected == 0 ? (
          <div className="flex w-full h-full flex-1 pb-6  flex-col">
            <ReactApexChart
              options={option}
              series={option.series}
              type="bar"
              height={"100%"}
              width={"100%"}
            />
          </div>
        ) : (
          <CustomTable
            withoutAction={true}
            column={COLUMN}
            rows={ROW}
            isComponent
          />
        )}
      </div>
    </div>
  );
};

const Card = ({ title, value }) => {
  return (
    <div className="flex flex-col bg-base-100 p-4 rounded-md drop-shadow">
      <h1 className="">{title}</h1>
      <h1 className=" font-semibold">{value}</h1>
    </div>
  );
};

export default BillSummary;
