import React, { useEffect } from "react";
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

const SectionCashFlow = () => {
  // window apex to dark mode

  //   menggunakan apexchart
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
        name: "Income",
        data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)),
      },
      {
        name: "Expense",
        data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)),
      },
    ],
    xaxis: {
      categories: [
        "14-May",
        "13-May",
        "12-May",
        "11-May",
        "10-May",
        "09-May",
        "08-May",
      ],
    },
  };

  return (
    <div className="w-full bg-base-100 h-[700px] flex flex-col drop-shadow rounded-md p-4">
      <h1>Cashflow</h1>
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
  );
};

export default SectionCashFlow;
