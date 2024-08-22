import HeadPage from "@/components/HeadPage/HeadPage";
import Paginate from "@/components/Paginate/Paginate";
import CustomTable from "@/components/TablePage/CustomTable";
import React from "react";
const DetailCoupon = () => {
  const data = [
    {
      user: "Rajodiya Infotech",
      date: "2020-07-08 04:45:16",
    },
  ];

  const column = [
    { value: "User", className: "" },
    { value: "Date", className: "" },
  ];

  const ROW = [
    ...data.map((item, index) => [
      { value: item.user, className: "" },
      { value: item.date, className: "" },
    ]),
  ];

  return (
    <div className="flex flex-col">
      <HeadPage title={"Manage Coupon Details"} breadcrumb={"Coupon Detail"} />
      <CustomTable column={column} rows={ROW} />
      <Paginate showData={ROW.length} totalData={ROW.length} />
    </div>
  );
};

export default DetailCoupon;
