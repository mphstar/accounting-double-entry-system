import HeadPage from "@/components/HeadPage/HeadPage";
import Paginate from "@/components/Paginate/Paginate";
import CustomTable from "@/components/TablePage/CustomTable";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { useDispatch } from "react-redux";

const Order = () => {
  const data = [
    {
      orderId: "666833CCD8232289317101",
      date: "11 Jun 2024",
      name: "Rajodiya Infotech",
      platName: "	Platinum",
      price: "USD500000",
      paymentType: "Authorizenet",
      status: "Success",
      coupon: "-",
      invoice: "https://www.google.com",
    },
    {
      orderId: "6666BFF42838F402940847",
      date: "10 Jun 2024",
      name: "Rajodiya Infotech",
      platName: "	Gold",
      price: "USD4000",
      paymentType: "Authorizenet",
      status: "Success",
      coupon: "-",
      invoice: "https://www.google.com",
    },
    {
      orderId: "648A8211542D9523313083",
      date: "15 Jun 2023",
      name: "Rajodiya Infotech",
      platName: "Business Builder Plan",
      price: "USD5000",
      paymentType: "STRIPE",
      status: "Succeeded",
      coupon: "-",
      invoice: "https://www.google.com",
    },
    {
      orderId: "647880931CCFF748280917",
      date: "01 Jun 2023",
      name: "Rajodiya Infotech",
      platName: "Platinum",
      price: "USD5000",
      paymentType: "Bank Transfer",
      status: "pending",
      coupon: "-",
      invoice: "",
    },
    {
      orderId: "64787D279D43C045491390",
      date: "01 Jun 2023",
      name: "Rajodiya Infotech",
      platName: "Silver",
      price: "USD200",
      paymentType: "Bank Transfer",
      status: "pending",
      coupon: "-",
      invoice: "",
    },
  ];

  const column = [
    { value: "Order ID", className: "" },
    { value: "Date", className: "" },
    { value: "Name", className: "" },
    { value: "Plan Name", className: "" },
    { value: "Price", className: "" },
    { value: "Payment Type", className: "" },
    { value: "Status", className: "" },
    { value: "Coupon", className: "" },
    { value: "Invoice", className: "" },
    { value: "Action", className: "" },
  ];

  const ROW = [
    ...data.map((item, index) => [
      { value: item.orderId, className: "" },
      { value: item.date, className: "" },
      { value: item.name, className: "" },
      { value: item.platName, className: "" },
      { value: item.price, className: "" },
      { value: item.paymentType, className: "" },
      {
        value: (
          <div
            className={`rounded-full btn btn-sm ${
              item.status == "pending"
                ? "bg-orange-300 hover:bg-orange-300"
                : item.status == "Success"
                ? "bg-green-500 hover:bg-green-500"
                : "bg-[#2ED4A0] hover:bg-[#2ED4A0]"
            } text-white`}
          >
            {item.status}
          </div>
        ),
        className: "",
      },
      { value: item.coupon, className: "" },
      {
        value:
          item.invoice !== "" ? (
            <button className="btn btn-square btn-sm">
              <TbFileInvoice />
            </button>
          ) : (
            "-"
          ),
        className: "",
      },
      {
        value: (
          <div className="flex gap-1">
            {item.status == "pending" && (
              <button
                onClick={() => {
                  dispatch(
                    openModal({
                      bodyType: MODAL_BODY_TYPES.SUPERADMIN_ORDER_DETAIL,
                      extraObject: item,
                      title: "Payment Status",
                    })
                  );
                }}
                className="btn btn-square bg-orange-500 hover:bg-orange-600 btn-sm text-white"
              >
                <GoInfo />
              </button>
            )}
            <button className="btn btn-square bg-red-500 hover:bg-red-600 btn-sm text-white">
              <RiDeleteBinLine />
            </button>
            {item.status != "pending" && (
              <button className="btn bg-orange-500 hover:bg-orange-600 btn-sm text-white">
                Refund
              </button>
            )}
          </div>
        ),
        className: "",
      },
    ]),
  ];

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <HeadPage title={"Manage Order"} breadcrumb={"Order"} />
      <CustomTable column={column} rows={ROW} />
      <Paginate showData={ROW.length} totalData={ROW.length} />
    </div>
  );
};

export default Order;
