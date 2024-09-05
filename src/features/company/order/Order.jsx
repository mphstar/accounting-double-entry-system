import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport, BiShow } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineFileDownload } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Order = () => {
  const data = [
    {
      orderId: "6608E79332033021329702",
      date: "04 Sep 2024",
      name: "Rajodiya Infotech",
      planName: "Gold",
      price: "USD4000",
      paymentType: "Manually Upgrade By Super Admin",
      status: "Succeeded",
      coupon: "-",
      invoice: "-",
    },
    {
      orderId: "666833CCD8232289317101",
      date: "11 Jun 2024",
      name: "Rajodiya Infotech",
      planName: "Platinum",
      price: "USD50000",
      paymentType: "Authorizenet",
      status: "Success",
      coupon: "-",
      invoice: "-",
    },
    {
      orderId: "66666F4C28464058446447",
      date: "13 Jun 2024",
      name: "Rajodiya Infotech",
      planName: "Child",
      price: "USD4000",
      paymentType: "Authorizenet",
      status: "Success",
      coupon: "-",
      invoice: "-",
    },
    {
      orderId: "177169",
      date: "07 Jun 2024",
      name: "Rajodiya Infotech",
      planName: "Platinum",
      price: "USD5000",
      paymentType: "Tap",
      status: "Success",
      coupon: "-",
      invoice: "-",
    },
    {
      orderId: "54A8021428332933 5893",
      date: "15 Jun 2023",
      name: "Rajodiya Infotech",
      planName: "Business Builder Plan",
      price: "USD5000",
      paymentType: "STRIPE",
      status: "Succeeded",
      coupon: "-",
      invoice: "",
    },
  ];

  const COLUMN = [
    { value: "Order ID", className: "" },
    { value: "Date", className: "" },
    { value: "Name", className: "" },
    { value: "Plan Name", className: "" },
    { value: "Price", className: "" },
    { value: "Payment Type", className: "" },
    { value: "Status", className: "" },
    { value: "Coupon", className: "" },
    { value: "Invoice", className: "" },
  ];

  const ROW = [
    ...data.map((item) => [
      {
        value: item.orderId,
        className: "",
      },
      {
        value: item.date,
        className: "",
      },
      {
        value: item.name,
        className: "",
      },
      {
        value: item.planName,
        className: "",
      },
      {
        value: item.price,
        className: "",
      },
      {
        value: item.paymentType,
        className: "",
      },
      {
        value: item.status,
        className: "",
      },
      {
        value: item.coupon,
        className: "",
      },
      {
        value: item.invoice,
        className: "",
      },
    ]),
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Order"}
        breadcrumb={"Order"}
        actions={
          <div className="flex gap-2 items-center">
            
          </div>
        }
      />

      <CustomTable column={COLUMN} rows={ROW} />

      <Paginate showData={ROW.length} totalData={ROW.length} />
    </div>
  );
};

export default Order;
