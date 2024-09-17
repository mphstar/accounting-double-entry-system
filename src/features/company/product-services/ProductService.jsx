import React from "react";
import HeadPage from "../../../components/HeadPage/HeadPage";
import FilterCard from "../../../components/Cards/FilterCard";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import CustomTable from "../../../components/TablePage/CustomTable";
import Paginate from "../../../components/Paginate/Paginate";
import { TbFileExport, TbFileImport } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { openModal } from "../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const ProductService = () => {
  const COLUMN = [
    {
      value: "Name",
      className: "",
    },
    {
      value: "SKU",
      className: "",
    },
    {
      value: "Sale Price",
      className: "",
    },
    {
      value: "Purchase Price",
      className: "",
    },
    {
      value: "TAX",
      className: "",
    },
    {
      value: "Category",
      className: "",
    },
    {
      value: "Unit",
      className: "",
    },
    {
      value: "Quantity",
      className: "",
    },
    {
      value: "Type",
      className: "",
    },
    {
      value: "Action",
      className: "",
    },
  ];
  
  const ROW = [
    [
      { value: "Women Bag", className: "" },
      { value: "P100", className: "" },
      { value: "$350.00", className: "" },
      { value: "$300.00", className: "" },
      { value: "CGST SGST", className: "" },
      { value: "Business profits", className: "" },
      { value: "PC", className: "" },
      { value: "101", className: "" },
      { value: "Product", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button onClick={() => ModalForm({ title: "Edit Product & Services" })} className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ],
    [
      { value: "Clock", className: "" },
      { value: "00711", className: "" },
      { value: "$200.00", className: "" },
      { value: "$200.00", className: "" },
      { value: "SGST", className: "" },
      { value: "Medical", className: "" },
      { value: "Inch", className: "" },
      { value: "400", className: "" },
      { value: "Product", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button onClick={() => ModalForm({ title: "Edit Product & Services" })} className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ],
    [
      { value: "Oven", className: "" },
      { value: "TRG520", className: "" },
      { value: "$500.00", className: "" },
      { value: "$500.00", className: "" },
      { value: "CGST", className: "" },
      { value: "Medical", className: "" },
      { value: "Inch", className: "" },
      { value: "701", className: "" },
      { value: "Product", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button onClick={() => ModalForm({ title: "Edit Product & Services" })} className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ],
    [
      { value: "Shoes", className: "" },
      { value: "00152", className: "" },
      { value: "$5.00", className: "" },
      { value: "$416.00", className: "" },
      { value: "SGST Service Tax", className: "" },
      { value: "Business profits", className: "" },
      { value: "Meter", className: "" },
      { value: "-30", className: "" },
      { value: "Product", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button onClick={() => ModalForm({ title: "Edit Product & Services" })} className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ],
    [
      { value: "Purse", className: "" },
      { value: "001452", className: "" },
      { value: "$410.00", className: "" },
      { value: "$495.00", className: "" },
      { value: "SGST Service Tax", className: "" },
      { value: "Medical", className: "" },
      { value: "PC", className: "" },
      { value: "49", className: "" },
      { value: "Product", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button onClick={() => ModalForm({ title: "Edit Product & Services" })} className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ],
    [
      { value: "T-Shirt", className: "" },
      { value: "BC008A74", className: "" },
      { value: "$628.00", className: "" },
      { value: "$338.00", className: "" },
      { value: "SGST Service Tax", className: "" },
      { value: "Medical", className: "" },
      { value: "PC", className: "" },
      { value: "20", className: "" },
      { value: "Product", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button onClick={() => ModalForm({ title: "Edit Product & Services" })} className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ],
    [
      { value: "Car", className: "" },
      { value: "SKU123", className: "" },
      { value: "$100.00", className: "" },
      { value: "$100.00", className: "" },
      { value: "SGST", className: "" },
      { value: "Medical", className: "" },
      { value: "Inch", className: "" },
      { value: "-20", className: "" },
      { value: "Product", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button onClick={() => ModalForm({ title: "Edit Product & Services" })} className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ],
    [
      { value: "Bicycle Clothing", className: "" },
      { value: "BC008AC1", className: "" },
      { value: "$10,000.00", className: "" },
      { value: "$1,000.00", className: "" },
      { value: "SGST", className: "" },
      { value: "Clothing", className: "" },
      { value: "Inch", className: "" },
      { value: "48", className: "" },
      { value: "Product", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button onClick={() => ModalForm({ title: "Edit Product & Services" })} className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ],
    [
      { value: "Teagan Forbes", className: "" },
      { value: "BC008ACC", className: "" },
      { value: "$2.00", className: "" },
      { value: "$866.00", className: "" },
      { value: "CGST SGST", className: "" },
      { value: "Clothing", className: "" },
      { value: "Inch", className: "" },
      { value: "12", className: "" },
      { value: "Product", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button onClick={() => ModalForm({ title: "Edit Product & Services" })} className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ],
    [
      { value: "Helmet", className: "" },
      { value: "HL005MET", className: "" },
      { value: "$50.00", className: "" },
      { value: "$30.00", className: "" },
      { value: "CGST SGST", className: "" },
      { value: "Business profits", className: "" },
      { value: "Inch", className: "" },
      { value: "-6", className: "" },
      { value: "Service", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button onClick={() => ModalForm({ title: "Edit Product & Services" })} className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ],
  ];
  
  
  
    
  const dispatch = useDispatch();

  const ModalImport = ({ title }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: MODAL_BODY_TYPES.FORM_IMPORT_PRODUCT,
      })
    );
  };

  const ModalForm = ({ title }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: MODAL_BODY_TYPES.FORM_CREATE_PRODUCT,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        hideTitle={true}
        title={"Product & Services"}
        breadcrumb={"Product & Services"}
        actions={
          <div className="flex gap-2">
            <div className="tooltip tooltip-bottom" data-tip="Import">
              <button
                onClick={() => ModalImport({ title: "Import Product CSV" })}
                className="btn btn-square btn-primary btn-sm"
              >
                <TbFileImport />
              </button>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Export">
              <button
                onClick={() => {}}
                className="btn btn-square btn-warning btn-sm"
              >
                <TbFileExport />
              </button>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Add Data">
              <button
                onClick={() =>
                  ModalForm({ title: "Create Product & Services" })
                }
                className="btn btn-square btn-success text-white btn-sm"
              >
                +
              </button>
            </div>
          </div>
        }
      />

      <FilterCard
        title={"Filter"}
        actions={
          <div className="flex flex-col w-full md:flex-row gap-3 items-end">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                className="select select-bordered w-full select-sm"
                name=""
                id=""
              >
                <option value="">Select Category</option>
                <option value="">Medical</option>
                <option value="">Clothing</option>
                <option value="">Bussiness Profit</option>
                <option value="">Insurance</option>
                <option value="">Inventory</option>
                <option value="">Accounts Payable</option>
                <option value="">Tresury Stock</option>
                <option value="">Raw Materials</option>
                <option value="">Dividents</option>
                <option value="">Employee Benefits</option>
              </select>
            </label>
            <div className="flex gap-1">
              <button className="btn btn-primary btn-square btn-sm">
                <IoSearchOutline />
              </button>
              <button className="btn btn-error btn-square btn-sm">
                <GrPowerReset />
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

export default ProductService;
