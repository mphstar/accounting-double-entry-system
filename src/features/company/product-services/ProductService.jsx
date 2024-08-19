import React from "react";
import HeadPage from "../../../components/HeadPage/HeadPage";
import FilterCard from "../../../components/Cards/FilterCard";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import CustomTable from "../../../components/TablePage/CustomTable";
import { COLUMN, ROW } from "./dummyData";
import Paginate from "../../../components/Paginate/Paginate";
import { TbFileExport, TbFileImport } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { openModal } from "../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";

const ProductService = () => {
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
            <button
              onClick={() => ModalImport({ title: "Import Product CSV" })}
              className="btn btn-square btn-primary btn-sm"
            >
              <TbFileImport />
            </button>
            <button
              onClick={() => {}}
              className="btn btn-square btn-warning btn-sm"
            >
              <TbFileExport />
            </button>
            <button
              onClick={() => ModalForm({title: "Create Product & Services"})}
              className="btn btn-square btn-success text-white btn-sm"
            >
              +
            </button>
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
