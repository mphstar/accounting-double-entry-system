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

const SectionStorageStatus = () => {
  // window apex to dark mode

  const options = {
    chart: {
      type: "radialBar",
      offsetY: -20,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // space between the chart and the outer circle
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "16px",
            offsetY: -10,
          },
          value: {
            fontSize: "22px",
            offsetY: 10,
            formatter: function (val) {
              return `${val}%`;
            },
          },
        },
      },
    },
    fill: {
      colors: ["#28a745"], // color for the filled part
    },
    labels: ["Used"], // Label di bagian bawah chart
    series: [75],
  };

  return (
    <>
      <div className="flex gap-2">
        <h1 className="font-medium pb-4 flex-1">Storage Status (500MB / 2000MB)</h1>
      </div>
      <div className="flex w-full h-full pb-6 flex-col items-center justify-center">
        <ReactApexChart
          options={options}
          series={options.series}
          type="radialBar"
          width={"100%"}
        />
      </div>
    </>
  );
};

export default SectionStorageStatus;
