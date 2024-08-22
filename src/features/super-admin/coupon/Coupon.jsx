import React from "react";
import HeadPage from "../../../components/HeadPage/HeadPage";
import { openModal } from "../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";
import CustomTable from "../../../components/TablePage/CustomTable";
import { FaCheck, FaPlus, FaRegEdit } from "react-icons/fa";
import { IoClose, IoEyeOutline } from "react-icons/io5";
import Paginate from "../../../components/Paginate/Paginate";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Coupon = () => {
  const data = [
    {
      name: "FreeCoupon",
      code: "A8BJL4SPYG",
      discount: 100,
      limit: 10,
      used: 3,
    },
    {
      name: "DiscountCoupon",
      code: "A8BJL4SPYG",
      discount: 50,
      limit: 10,
      used: 3,
    },
  ];

  const column = [
    { value: "Name", className: "" },
    { value: "Code", className: "" },
    { value: "Discount (%)", className: "" },
    { value: "Limit", className: "" },
    { value: "Used", className: "" },
    { value: "Action", className: "" },
  ];

  const ROW = [
    ...data.map((item, index) => [
      { value: item.name, className: "" },
      { value: item.code, className: "" },
      { value: item.discount, className: "" },
      { value: item.limit, className: "" },
      { value: item.used, className: "" },
      {
        value: (
          <div className="flex gap-1">
            <Link to={`/app/super-admin/coupon/${index}`}>
              <button className="btn btn-square bg-orange-500 hover:bg-orange-600 btn-sm text-white">
                <IoEyeOutline />
              </button>
            </Link>
            <button
              onClick={() => {
                dispatch(
                  openModal({
                    bodyType: MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_COUPON,
                    title: "Edit Coupon",
                  })
                );
              }}
              className="btn btn-square bg-blue-500 hover:bg-blue-600 btn-sm text-white"
            >
              <FaRegEdit />
            </button>
            <button className="btn btn-square bg-red-500 hover:bg-red-600 btn-sm text-white">
              <MdOutlineDeleteOutline />
            </button>
          </div>
        ),
        className: "",
      },
    ]),
  ];

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Coupon"}
        breadcrumb={"Coupon"}
        actions={
          <div className="flex gap-1">
            <button
              onClick={() => {
                dispatch(
                  openModal({
                    bodyType: MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_COUPON,
                    title: "Create Coupon",
                  })
                );
              }}
              className="btn btn-primary btn-square btn-sm"
            >
              <FaPlus />
            </button>
          </div>
        }
      />
      <CustomTable column={column} rows={ROW} />
      <Paginate showData={ROW.length} totalData={ROW.length} />
    </div>
  );
};

export default Coupon;
