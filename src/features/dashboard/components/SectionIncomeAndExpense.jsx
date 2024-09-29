import React from "react";
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

const SectionIncomeAndExpense = () => {
  // window apex to dark mode

  //   menggunakan apexchart
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
        name: "Income",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
      },
      {
        name: "Expense",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
      },
    ],
    xaxis: {
      categories: [
        "January",
        "February",
        "March",
        "Aprill",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
    },
  };

  return (
    <>
      <div className="flex gap-2">
        <h1 className="font-medium pb-4 flex-1">Income & Expense</h1>
        <p>Current Year - 2024</p>
      </div>
      <div className="flex w-full h-full pb-6 flex-col">
        <ReactApexChart
          options={option}
          series={option.series}
          type="bar"
          height={"100%"}
          width={"100%"}
        />
      </div>
    </>
  );
};

export default SectionIncomeAndExpense;
