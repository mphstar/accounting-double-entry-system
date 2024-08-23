import React from "react";

const ModalDetailOrder = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col gap-2">
      <table className="table ">
        <tr className="hover border-b-2">
          <th>Order ID</th>
          <td>Note: Discount in Percentage</td>
        </tr>
        <tr className="hover border-b-2">
          <th>Plan Name</th>
          <td>Silver</td>
        </tr>
        <tr className="hover border-b-2">
          <th>Plan Price</th>
          <td>200</td>
        </tr>
        <tr className="hover border-b-2">
          <th>Payment Type</th>
          <td>Bank Transfer</td>
        </tr>
        <tr className="hover border-b-2">
          <th>Payment Status</th>
          <td>Pending</td>
        </tr>
        <tr className="hover border-b-2">
          <th>Bank Details</th>
          <td>
            Bank : Bank of Amerika<br /> Bank Holder Name : AccountGo<br /> Account Name :
            0123456789<br /> IFSC Code : ABC123<br /> Swift Code : 123456
          </td>
        </tr>
      </table>
      <div className="flex items-center justify-end w-full mt-8 gap-2">
        <button
          onClick={() => closeModal()}
          className="btn btn-success text-white"
        >
          Approve
        </button>
        <button onClick={() => closeModal()} className="btn btn-error text-white">
          Reject
        </button>
      </div>
    </div>
  );
};

export default ModalDetailOrder;
