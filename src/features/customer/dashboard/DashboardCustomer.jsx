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

const DashboardCustomer = () => {
  const option = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        name: "Unpaid",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
      },
      {
        name: "Paid",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
      },
      {
        name: "Partial Paid",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
      },
      {
        name: "Due",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
      },
    ],
    xaxis: {
      categories: [
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
      ],
    },
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-semibold">Dashboard</h1>
      <div className="w-full flex flex-col gap-4 mt-4 h-full">
        <div className="flex w-full flex-col gap-4 h-full bg-base-100 p-5 drop-shadow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ProgressBar progress={20} label="Unpaid" color={"text-red-500"} />
            <ProgressBar progress={30} label="Paid" color={"text-green-500"} />
            <ProgressBar
              progress={10}
              label="Partial Paid"
              color={"text-blue-500"}
            />
            <ProgressBar progress={70} label="Due" color={"text-orange-500"} />
          </div>
        </div>
        <div className="flex-1 flex flex-col w-full gap-4">
          <h1 className="font-semibold">Recent Order</h1>
          <div className="w-full bg-base-100 h-[500px] flex flex-col drop-shadow rounded-md p-4">
            <div className="flex w-full h-full pb-6  flex-col">
              <ReactApexChart
                options={option}
                series={option.series}
                type="area"
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ progress, label, color }) => {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium dark:text-white">
          {clampedProgress.toFixed(2)}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${clampedProgress}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1 text-sm">
        <span className={`${color} font-semibold`}>{label}</span>
        <span>0/0</span>
      </div>
    </div>
  );
};

export default DashboardCustomer;
