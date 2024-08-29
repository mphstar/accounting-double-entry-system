import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";

const ProductStock = () => {
  const DATA = [
    {
      date: "15 Mar 2022",
      productName: "T-Shirt",
      quantity: 10,
      type: "Manually",
      description: "10 quantity added manually",
    },
    {
      date: "20 Mar 2022",
      productName: "Jeans",
      quantity: 5,
      type: "Automatically",
      description: "5 quantity added automatically by system",
    },
    {
      date: "25 Mar 2022",
      productName: "Jacket",
      quantity: 7,
      type: "Manually",
      description: "7 quantity added manually by admin",
    },
    {
      date: "30 Mar 2022",
      productName: "Shoes",
      quantity: 3,
      type: "Automatically",
      description: "3 quantity added automatically by system",
    },
    {
      date: "05 Apr 2022",
      productName: "Hat",
      quantity: 8,
      type: "Manually",
      description: "8 quantity added manually by staff",
    },
  ];

  const COLUMN = [
    { value: "Date", className: "" },
    { value: "Product Name", className: "" },
    { value: "Quantity", className: "" },
    { value: "Type", className: "" },
    { value: "Description", className: "" },
  ];

  const ROW = [
    ...DATA.map((item) => [
      { title: "Date", value: item.date, className: "" },
      { title: "Product Name", value: item.productName, className: "" },
      { title: "Quantity", value: item.quantity, className: "" },
      { title: "Type", value: item.type, className: "" },
      { title: "Description", value: item.description, className: "" },
    ]),
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Product Stock"}
        breadcrumb={"Product Stock"}
        actions={
          <div className="flex gap-2 items-center">
            <div className="tooltip" data-tip="Export">
              <button
                onClick={() => {}}
                className="btn btn-square btn-primary btn-sm"
              >
                <BiExport />
              </button>
            </div>
            
          </div>
        }
      />

      <CustomTable column={COLUMN} rows={ROW} />

      <Paginate showData={ROW.length} totalData={ROW.length} />
    </div>
  );
};

export default ProductStock;
