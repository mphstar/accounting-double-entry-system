import { MODAL_BODY_TYPES } from "../utils/globalConstantUtil";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/common/modalSlice";
import AddLeadModalBody from "../features/leads/components/AddLeadModalBody";
import ConfirmationModalBody from "../features/common/components/ConfirmationModalBody";
import FormModalUser from "../features/company/staff/FormModalUser";
import FormModalRole from "../features/company/staff/FormModalRole";
import FormImportData from "../features/company/product-services/FormImportData";
import FormCreateData from "../features/company/product-services/FormCreateData";
import ModalConstantTaxes from "../features/company/constant/taxes/ModalConstantTaxes";
import ModalConstantCategory from "../features/company/constant/category/ModalConstantCategory";
import ModalConstantUnit from "../features/company/constant/unit/ModalConstantUnit";
import ModalConstantField from "../features/company/constant/custom-field/ModalConstantCustomField";
import ModalConstantContract from "../features/company/constant/contract-type/ModalConstantContract";
import ModalCompany from "../features/super-admin/company/ModalCompany";
import ModalCompanyResetPassword from "../features/super-admin/company/ModalResetPassword";
import ModalUpgradePlan from "../features/super-admin/company/ModalUpgradePlan";
import ModalAdminHub from "../features/super-admin/company/ModalAdminHub";
import ModalFormCreatePlan from "../features/super-admin/plan/ModalFormCreatePlan";
import ModalFormCoupon from "@/features/super-admin/coupon/ModalFormCoupon";
import ModalDetailOrder from "@/features/super-admin/Order/ModalDetailOrder";
import FormEditProductStock from "@/features/company/product-stock/FormEditProductStock";
import FormImportDataCustomer from "@/features/company/customer/FormImportDataCustomer";
import FormCreateDataCustomer from "@/features/company/customer/FormCreateDataCustomer";
import FormImportDataVendor from "@/features/company/vendor/FormImportDataVendor";
import FormCreateDataVendor from "@/features/company/vendor/FormCreateDataVendor";
import FormCreateBankingAccount from "@/features/company/banking/account/FormCreateBankingAccount";
import FormCreateBankingTransfer from "@/features/company/banking/transfer/FormCreateBankingTransfer";
import FormCreateCreditNoteInvoice from "@/features/company/income/invoice/detail/FormCreateCreditNoteInvoice";
import FormCreateRevenue from "@/features/company/income/revenue/FormCreateRevenue";
import FormCreateCreditNote from "@/features/company/income/credit-note/FormCreateCreditNote";
import FormCreateDebitNoteBill from "@/features/company/expense/bill/detail/FormCreateDebitNoteBill";
import FormCreatePayment from "@/features/company/expense/payment/FormCreatePayment";
import FormCreateDebitNote from "@/features/company/expense/debit-note/FormCreateDebitNote";
import FormCreateChartOfAccount from "@/features/company/double-entry/chart-of-account/FormCreateChartOfAccount";
import FormCreateGoal from "@/features/company/goal/FormCreateGoal";
import FormCreateAsset from "@/features/company/assets/FormCreateAsset";
import FormCreateMenuBar from "@/features/super-admin/landing-page/section/FormCreateMenuBar";
import FormCreateFeaturesList from "@/features/super-admin/landing-page/section/FormCreateFeaturesList";
import FormCreateFeaturesBlockList from "@/features/super-admin/landing-page/section/FormCreateFeaturesBlockList";
import FormDetailLogUser from "@/features/company/staff/logs/FormDetailLogUser";
import FormModalSignature from "@/features/company/contract/detail/section/FormModalSignature";

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
        <div
          className={`modal-box   ${size === "lg" ? "max-w-5xl w-11/12" : ""}`}
        >
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

              [MODAL_BODY_TYPES.FORM_DETAIL_LOG_USER]: (
                <FormDetailLogUser
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // ContraCt
              [MODAL_BODY_TYPES.FORM_MODAL_SIGNATURE]: (
                <FormModalSignature
                  extraObject={extraObject}
                  closeModal={close}
                />
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

              // Product Stock
              [MODAL_BODY_TYPES.FORM_EDIT_PRODUCT_STOCK]: (
                <FormEditProductStock
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Customer
              [MODAL_BODY_TYPES.FORM_IMPORT_CUSTOMER]: (
                <FormImportDataCustomer
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              [MODAL_BODY_TYPES.FORM_CREATE_CUSTOMER]: (
                <FormCreateDataCustomer
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Vendor
              [MODAL_BODY_TYPES.FORM_IMPORT_VENDOR]: (
                <FormImportDataVendor
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.FORM_CREATE_VENDOR]: (
                <FormCreateDataVendor
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Banking Account
              [MODAL_BODY_TYPES.FORM_CREATE_BANKING_ACCOUNT]: (
                <FormCreateBankingAccount
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Banking Transfer
              [MODAL_BODY_TYPES.FORM_CREATE_BANKING_TRANSFER]: (
                <FormCreateBankingTransfer
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Invoice
              [MODAL_BODY_TYPES.FORM_CREATE_CREDIT_NOTE_INVOICE]: (
                <FormCreateCreditNoteInvoice
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Revenue
              [MODAL_BODY_TYPES.FORM_CREATE_REVENUE]: (
                <FormCreateRevenue
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Credit Note
              [MODAL_BODY_TYPES.FORM_CREATE_CREDIT_NOTE]: (
                <FormCreateCreditNote
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Bill
              [MODAL_BODY_TYPES.FORM_CREATE_DEBIT_NOTE_BILL]: (
                <FormCreateDebitNoteBill
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Payment
              [MODAL_BODY_TYPES.FORM_CREATE_PAYMENT]: (
                <FormCreatePayment
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Debit Note
              [MODAL_BODY_TYPES.FORM_CREATE_DEBIT_NOTE]: (
                <FormCreateDebitNote
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Chart Of Account
              [MODAL_BODY_TYPES.FORM_CREATE_CHART_OF_ACCOUNT]: (
                <FormCreateChartOfAccount
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              // Goal
              [MODAL_BODY_TYPES.FORM_CREATE_GOAL]: (
                <FormCreateGoal extraObject={extraObject} closeModal={close} />
              ),
              // Assets
              [MODAL_BODY_TYPES.FORM_CREATE_ASSET]: (
                <FormCreateAsset extraObject={extraObject} closeModal={close} />
              ),

              // Constant
              [MODAL_BODY_TYPES.FORM_CREATE_CONSTANT_TAXES]: (
                <ModalConstantTaxes
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.FORM_CREATE_CONSTANT_CATEGORY]: (
                <ModalConstantCategory
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.FORM_CREATE_CONSTANT_UNIT]: (
                <ModalConstantUnit
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.FORM_CREATE_CONSTANT_CUSTOM_FIELD]: (
                <ModalConstantField
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              [MODAL_BODY_TYPES.FORM_CREATE_CONSTANT_CONTRACT_TYPE]: (
                <ModalConstantContract
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // SUPERADMIN
              // COMPANY
              [MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_COMPANY]: (
                <ModalCompany extraObject={extraObject} closeModal={close} />
              ),
              [MODAL_BODY_TYPES.SUPERADMIN_FORM_RESET_PASSWORD_COMPANY]: (
                <ModalCompanyResetPassword
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              [MODAL_BODY_TYPES.SUPERADMIN_FORM_UPGRADE_PLAN_COMPANY]: (
                <ModalUpgradePlan
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.SUPERADMIN_FORM_ADMIN_HUB_COMPANY]: (
                <ModalAdminHub extraObject={extraObject} closeModal={close} />
              ),

              // PLAN
              [MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_PLAN]: (
                <ModalFormCreatePlan
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // COUPON
              [MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_COUPON]: (
                <ModalFormCoupon extraObject={extraObject} closeModal={close} />
              ),

              // ORDER
              [MODAL_BODY_TYPES.SUPERADMIN_ORDER_DETAIL]: (
                <ModalDetailOrder
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              // Menu Bar
              [MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_MENU_BAR]: (
                <FormCreateMenuBar
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              // Features List
              [MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_FEATURES_LIST]: (
                <FormCreateFeaturesList
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              // Features Block List
              [MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_FEATURES_BLOCK_LIST]: (
                <FormCreateFeaturesBlockList
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
