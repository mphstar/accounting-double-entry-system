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

const SectionExpenseByCategory = () => {
  // window apex to dark mode

  //   menggunakan apexchart
  const options = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"],
    responsive: [
      {
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    series: [32, 44, 23, 55, 31],
  };

  return (
    <>
      <div className="flex gap-2">
        <h1 className="font-medium pb-4 flex-1">Expense By Category</h1>
        <p>Year - 2024</p>
      </div>
      <div className="flex w-full h-full pb-6 flex-col">
        <ReactApexChart
          options={options}
          series={options.series}
          type="donut"
          height={"100%"}
          width={"100%"}
        />
      </div>
    </>
  );
};

export default SectionExpenseByCategory;
