import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";

const ProductStock = () => {
  const data = [
    {
      name: "Bicycle parts",
      sku: "BC001CLE",
      currentQuantity: 19,
    },
    {
      name: "Teagan Forbes",
      sku: "BC008ACC",
      currentQuantity: 12,
    },
    {
      name: "Bicycle Clothing",
      sku: "BC008AC1",
      currentQuantity: 48,
    },
    {
      name: "Car",
      sku: "SKU123",
      currentQuantity: -20,
    },
    {
      name: "T-Shirt",
      sku: "BC008A74",
      currentQuantity: 20,
    },
    {
      name: "Purse",
      sku: "001452",
      currentQuantity: 49,
    },
    {
      name: "Shoes",
      sku: "00152",
      currentQuantity: -30,
    },
  ];

  const COLUMN = [
    { value: "Name", className: "" },
    { value: "SKU", className: "" },
    { value: "Current Quantity", className: "" },
    { value: "Action", className: "" },
  ];

  const dispatch = useDispatch();

  const ModalForm = ({ title, data }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: MODAL_BODY_TYPES.FORM_EDIT_PRODUCT_STOCK,
        extraObject: data,
      })
    );
  };

  const ROW = [
    ...data.map((item) => [
      { value: item.name, className: "" },
      { value: item.sku, className: "" },
      { value: item.currentQuantity, className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit321">
              <button
                onClick={() => {
                  ModalForm({ title: "Edit Product Stock", data: item });
                }}
                className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white"
              >
                <FiEdit />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ]),
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Product Stock"}
        breadcrumb={"Product Stock"}
        actions={<div></div>}
      />

      <CustomTable column={COLUMN} rows={ROW} />

      <Paginate showData={ROW.length} totalData={ROW.length} />
    </div>
  );
};

export default ProductStock;
