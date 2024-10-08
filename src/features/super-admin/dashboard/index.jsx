import React from "react";
import SectionDashboard from "./components/SectionDashboard";
import SectionCashFlow from "./components/SectionCashFlow";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-semibold">Dashboard</h1>
      <div className="w-full flex flex-col gap-4 mt-4 h-full">
        <div className="flex w-full flex-col gap-4 h-full">
          <SectionDashboard />
        </div>
        <div className="flex-1 flex flex-col w-full gap-4">
          <SectionCashFlow />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
