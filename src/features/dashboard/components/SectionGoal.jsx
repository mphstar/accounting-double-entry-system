import React from "react";

const SectionGoal = () => {
  return (
    <>
      <div className="flex gap-2">
        <h1 className="font-medium pb-4 flex-1">Goal</h1>
        {/* <p>Year - 2024</p> */}
      </div>
      <div className="flex w-full h-full pb-6 flex-col gap-4">
        <div className="grid grid-cols-5 gap-2 p-5 drop-shadow bg-base-100">
          <div className="flex flex-col">
            <p className="text-sm">Name</p>
            <p className="font-medium">Invoice Goal</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Type</p>
            <p className="font-medium">Invoice</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Duration</p>
            <p className="font-medium">2020-07 To 2020-08</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Target</p>
            <p className="font-medium">$0.00 of $5,000.00</p>
          </div>
          <div className="flex flex-col">
            <ProgressBar progress={0} label="Progress" />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 p-5 drop-shadow bg-base-100">
          <div className="flex flex-col">
            <p className="text-sm">Name</p>
            <p className="font-medium">Bill Goal</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Type</p>
            <p className="font-medium">Bill</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Duration</p>
            <p className="font-medium">2020-07 To 2020-08</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Target</p>
            <p className="font-medium">$0.00 of $3,000.00</p>
          </div>
          <div className="flex flex-col">
            <ProgressBar progress={0} label="Progress" />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 p-5 drop-shadow bg-base-100">
          <div className="flex flex-col">
            <p className="text-sm">Name</p>
            <p className="font-medium">Revenue Goal</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Type</p>
            <p className="font-medium">Revenue</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Duration</p>
            <p className="font-medium">2020-07 To 2020-08</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Target</p>
            <p className="font-medium">$6,560.00 of $3,000.00</p>
          </div>
          <div className="flex flex-col">
            <ProgressBar progress={218.67} label="Progress" />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 p-5 drop-shadow bg-base-100">
          <div className="flex flex-col">
            <p className="text-sm">Name</p>
            <p className="font-medium">Payment Goal</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Type</p>
            <p className="font-medium">Payment</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Duration</p>
            <p className="font-medium">2020-07 To 2020-08</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Target</p>
            <p className="font-medium">$7,500.00 of $5,000.00</p>
          </div>
          <div className="flex flex-col">
            <ProgressBar progress={150} label="Progress" />
          </div>
        </div>
      </div>
    </>
  );
};

const ProgressBar = ({ progress, label }) => {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium dark:text-white">
          {label}
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {clampedProgress.toFixed(2)}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${clampedProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SectionGoal;
