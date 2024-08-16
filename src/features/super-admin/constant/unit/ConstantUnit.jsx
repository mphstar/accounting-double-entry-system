import React from "react";
import HeadPage from "../../../../components/HeadPage/HeadPage";
import CustomTable from "../../../../components/TablePage/CustomTable";
import Paginate from "../../../../components/Paginate/Paginate";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openModal } from "../../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../../utils/globalConstantUtil";

const ConstantUnit = () => {
  const COLUMN = [
    { value: "Unit", className: "" },
    { value: "Action", className: "" },
  ];

  const data = ["Inch", "PC", "Meter", "Piece", "Set", "Mass", "KG"];

  const ROW = [
    ...data.map((item) => [
      { title: "Unit", value: item, className: "w-full" },

      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() =>
                  OpenFormModal({
                    title: "Edit Unit",
                  })
                }
                className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white"
              >
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
    ]),
  ];

  const dispatch = useDispatch();

  const OpenFormModal = ({ title }) => {
    dispatch(
      openModal({
        bodyType: MODAL_BODY_TYPES.FORM_CREATE_CONSTANT_UNIT,
        title: title,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Unit"}
        breadcrumb={"Unit"}
        actions={
          <button
            onClick={() => OpenFormModal({ title: "Create Unit" })}
            className="btn btn-square btn-primary btn-sm"
          >
            +
          </button>
        }
      />

      <CustomTable column={COLUMN} rows={ROW} />

      <Paginate showData={ROW.length} totalData={ROW.length} />
    </div>
  );
};

export default ConstantUnit;
