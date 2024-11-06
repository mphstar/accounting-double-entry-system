import HeadPage from "@/components/HeadPage/HeadPage";
import React from "react";
import TemplatePage from "./TemplatePage";
import General from "./section/General";
import { IoMailOutline } from "react-icons/io5";
import { GoCopy, GoDownload } from "react-icons/go";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TfiPencil } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import Attachment from "./section/Attachment";
import Comment from "./section/Comment";
import Notes from "./section/Notes";

const DetailContract = () => {
  const dispatch = useDispatch();

  const ModalForm = ({ title, data }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: MODAL_BODY_TYPES.FORM_MODAL_SIGNATURE,
        extraObject: data,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Detail Contract"}
        breadcrumb={"Detail Contract"}
        actions={
          <div className="flex gap-2 items-center">
            <div className="tooltip" data-tip="Send Mail">
              <button
                onClick={() => {}}
                className="btn btn-square btn-success text-white btn-sm"
              >
                <IoMailOutline />
              </button>
            </div>
            <div className="tooltip" data-tip="Duplicate">
              <button
                onClick={() => {}}
                className="btn btn-square btn-success text-white btn-sm"
              >
                <GoCopy />
              </button>
            </div>
            <div className="tooltip" data-tip="Download">
              <button
                onClick={() => {}}
                className="btn btn-square btn-success text-white btn-sm"
              >
                <GoDownload />
              </button>
            </div>
            <div className="tooltip" data-tip="Preview">
              <button
                onClick={() => {}}
                className="btn btn-square btn-success text-white btn-sm"
              >
                <MdOutlineRemoveRedEye />
              </button>
            </div>
            <div className="tooltip" data-tip="Signature">
              <button
                onClick={() => {
                  ModalForm({
                    title: "Signature",
                  });
                }}
                className="btn btn-square btn-success text-white btn-sm"
              >
                <TfiPencil />
              </button>
            </div>
          </div>
        }
      />

      <TemplatePage>
        <div className="flex flex-col w-full gap-3">
          <General />
          <Attachment />
          <Comment />
          <Notes />
        </div>
      </TemplatePage>
    </div>
  );
};

export default DetailContract;
