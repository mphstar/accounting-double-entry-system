import React from "react";
import SectionDashboard from "./components/SectionDashboard";
import SectionAccountBalance from "./components/SectionAccountBalance";
import SectionCashFlow from "./components/SectionCashFlow";
import SectionIncomeVsExpense from "./components/SectionIncomeVsExpense";
import SectionIncomeAndExpense from "./components/SectionIncomeAndExpense";
import SectionIncomeByCategory from "./components/SectionIncomeByCategory";
import SectionExpenseByCategory from "./components/SectionExpenseByCategory copy";
import SectionLatestIncome from "./components/SectionLatestIncome";
import SectionLatestExpense from "./components/SectionLatestExpense";
import SectionStorageStatus from "./components/SectionStorageStatus";
import SectionRecentInvoice from "./components/SectionRecentInvoice";
import SectionInvoiceStatistik from "./components/SectionInvoiceStatistik";
import SectionRecentBill from "./components/SectionRecentBill";
import SectionBillStatistik from "./components/SectionBillStatistik";
import SectionGoal from "./components/SectionGoal";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full w-full">
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

      <div className="flex flex-col md:flex-row h-full mt-8 gap-4">
        <div className="flex flex-col w-full md:w-[60%] h-[400px] bg-base-100 drop-shadow rounded-md p-4">
          <SectionIncomeAndExpense />
        </div>
        <div className="flex flex-col flex-1 h-[400px] bg-base-100 drop-shadow rounded-md p-4">
          <SectionIncomeByCategory />
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full mt-8 gap-4">
        <div className="flex flex-col w-full md:w-[60%] h-[400px] bg-base-100 drop-shadow rounded-md p-4">
          <SectionLatestIncome />
        </div>
        <div className="flex flex-col flex-1 h-[400px] bg-base-100 drop-shadow rounded-md p-4">
          <SectionExpenseByCategory />
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full mt-8 gap-4">
        <div className="flex flex-col w-full md:w-[60%] h-[400px] bg-base-100 drop-shadow rounded-md p-4">
          <SectionLatestExpense />
        </div>
        <div className="flex flex-col flex-1 h-[400px] bg-base-100  drop-shadow rounded-md p-4">
          <SectionStorageStatus />
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-full mt-8 gap-4">
        <div className="flex flex-col w-full md:w-[60%] h-[400px] bg-base-100 drop-shadow rounded-md p-4">
          <SectionRecentInvoice />
        </div>
        <div className="flex flex-col flex-1 h-[400px] bg-base-100  drop-shadow rounded-md p-4">
          <SectionInvoiceStatistik />
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full mt-8 gap-4">
        <div className="flex flex-col w-full md:w-[60%] h-[400px] bg-base-100 drop-shadow rounded-md p-4">
          <SectionRecentBill />
        </div>
        <div className="flex flex-col flex-1 h-[400px] bg-base-100  drop-shadow rounded-md p-4">
          <SectionBillStatistik />
        </div>
      </div>


      <div className="flex flex-col md:flex-row h-full mt-8 gap-4">
        <div className="flex flex-col w-full h-fit bg-base-100 drop-shadow rounded-md p-4">
          <SectionGoal />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
