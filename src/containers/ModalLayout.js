import { useEffect } from "react";
import { MODAL_BODY_TYPES } from "../utils/globalConstantUtil";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/common/modalSlice";
import AddLeadModalBody from "../features/leads/components/AddLeadModalBody";
import ConfirmationModalBody from "../features/common/components/ConfirmationModalBody";
import FormModalUser from "../features/super-admin/staff/FormModalUser";
import FormModalRole from "../features/super-admin/staff/FormModalRole";
import FormImportData from "../features/super-admin/product-services/FormImportData";
import FormCreateData from "../features/super-admin/product-services/FormCreateData";
import ModalConstantTaxes from "../features/super-admin/constant/taxes/ModalConstantTaxes";
import ModalConstantCategory from "../features/super-admin/constant/category/ModalConstantCategory";

function ModalLayout() {
  const { isOpen, bodyType, size, extraObject, title } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  const close = (e) => {
    dispatch(closeModal(e));
  };

  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <div className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className={`modal-box  ${size === "lg" ? "max-w-5xl" : ""}`}>
          <div className="flex items-center mb-4">
            <h3 className="font-semibold text-base text-start flex-1">
              {title}
            </h3>
            <button className="btn btn-sm btn-circle" onClick={() => close()}>
              ✕
            </button>
          </div>

          {/* Loading modal body according to different modal type */}
          {
            {
              [MODAL_BODY_TYPES.LEAD_ADD_NEW]: (
                <AddLeadModalBody
                  closeModal={close}
                  extraObject={extraObject}
                />
              ),
              [MODAL_BODY_TYPES.CONFIRMATION]: (
                <ConfirmationModalBody
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Staff
              [MODAL_BODY_TYPES.FORM_STAFF_USER]: (
                <FormModalUser extraObject={extraObject} closeModal={close} />
              ),
              [MODAL_BODY_TYPES.FORM_STAFF_ROLE]: (
                <FormModalRole extraObject={extraObject} closeModal={close} />
              ),

              // Product & Service
              [MODAL_BODY_TYPES.FORM_IMPORT_PRODUCT]: (
                <FormImportData extraObject={extraObject} closeModal={close} />
              ),
              [MODAL_BODY_TYPES.FORM_CREATE_PRODUCT]: (
                <FormCreateData extraObject={extraObject} closeModal={close} />
              ),

              // Constant
              [MODAL_BODY_TYPES.FORM_CREATE_CONSTANT_TAXES]: (
                <ModalConstantTaxes
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              // Constant
              [MODAL_BODY_TYPES.FORM_CREATE_CONSTANT_CATEGORY]: (
                <ModalConstantCategory
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              [MODAL_BODY_TYPES.DEFAULT]: <div></div>,
            }[bodyType]
          }
        </div>
      </div>
    </>
  );
}

export default ModalLayout;
