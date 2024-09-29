import React, { useState } from "react";

const SectionInvoiceStatistik = () => {
  const [tabSelected, setTabSelected] = useState(0);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex md:flex-row flex-wrap gap-2 flex-col">
        <button
          onClick={() => setTabSelected(0)}
          className={`btn btn-sm ${
            tabSelected === 0 ? "btn-primary text-white" : "text-primary"
          }`}
        >
          Invoice Weekly Statistics
        </button>
        <button
          onClick={() => setTabSelected(1)}
          className={`btn btn-sm ${
            tabSelected === 1 ? "btn-primary text-white" : "text-primary"
          }`}
        >
          Invoice Monthly Statistics
        </button>
      </div>
      <div className="overflow-y-auto">
        <table className="table mt-6">
          <tr className="hover">
            <td>
              <div className="flex flex-col">
                <p className="font-medium">Total</p>
                <p>Invoice Generated</p>
              </div>
            </td>
            <td>$0.00</td>
          </tr>
          <tr className="hover">
            <td>
              <div className="flex flex-col">
                <p className="font-medium">Total</p>
                <p>Paid</p>
              </div>
            </td>
            <td>$0.00</td>
          </tr>
          <tr className="hover">
            <td>
              <div className="flex flex-col">
                <p className="font-medium">Total</p>
                <p>Due</p>
              </div>
            </td>
            <td>$0.00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SectionInvoiceStatistik;
