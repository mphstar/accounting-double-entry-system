import React from "react";
import SectionDashboard from "./components/SectionDashboard";
import SectionAccountBalance from "./components/SectionAccountBalance";
import SectionCashFlow from "./components/SectionCashFlow";
import SectionIncomeVsExpense from "./components/SectionIncomeVsExpense";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-semibold">Dashboard</h1>
      <div className="w-full flex flex-col md:flex-row gap-4 mt-4 h-full md:h-[600px]">
        <div className="flex w-full flex-col gap-4 md:w-[60%] h-full">
          <SectionDashboard />
          <SectionAccountBalance />
        </div>
        <div className="flex-1 flex flex-col w-full gap-4">
          <SectionCashFlow />
          <SectionIncomeVsExpense />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
