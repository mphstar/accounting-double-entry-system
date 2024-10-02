import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import { IoEyeOutline, IoMailOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaPlus, FaRegCopy } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import QRCode from "react-qr-code";
import { IoIosSend } from "react-icons/io";
import { useDispatch } from "react-redux";
import { showNotification } from "@/features/common/headerSlice";

const ProposalDetail = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Proposal Detail"}
        breadcrumb={"#PRO00001"}
        actions={
          <div className="flex gap-2">
            <div
              className="tooltip tooltip-left"
              data-tip="Already convert to invoice"
            >
              <Link to={"/app/company/income/invoice/1"}>
                <button className="btn btn-warning btn-sm btn-square">
                  <IoEyeOutline />
                </button>
              </Link>
            </div>
            <div className="tooltip tooltip-left" data-tip="Copy Proposal">
              <button
                onClick={() => {
                  dispatch(
                    showNotification({
                      message: "Copy proposal",
                      status: 1,
                    })
                  );
                }}
                className="btn btn-primary btn-sm btn-square"
              >
                <MdContentCopy />
              </button>
            </div>
          </div>
        }
      />

      <div className="flex flex-row gap-3 flex-wrap mb-6 justify-end">
        <button
          onClick={() => {
            dispatch(
              showNotification({
                message: "Download proposal",
                status: 1,
              })
            );
          }}
          className="btn btn-success text-white"
        >
          Download
        </button>
      </div>

      <InvoiceSummary />
    </div>
  );
};

const InvoiceSummary = () => {
  return (
    <div className="flex flex-col bg-base-100 p-6 rounded-md mb-4 drop-shadow">
      <div className="flex">
        <h1 className="flex-1 font-semibold text-xl">Proposal</h1>
        <p>#PROP00001</p>
      </div>
      <div className="flex justify-end flex-col text-sm mt-6">
        <div className="flex justify-end items-end flex-col">
          <h1 className="font-medium">Issue Date</h1>
          <p>Feb 18, 2019</p>
        </div>
        <div className="flex justify-end items-end flex-col">
          <h1 className="font-medium">Due Date</h1>
          <p>Feb 18, 2019</p>
        </div>
      </div>
      <div className="flex flex-row gap-3 text-sm mt-6 flex-wrap">
        <div className="flex flex-col">
          <h1 className="font-medium">Billed To:</h1>
          <p>Scarlet Holman</p>
          <p>Totam magni libero c</p>
          <p>Minus quis quia culp, Quaerat provident h 94007</p>
          <p>Sit iusto voluptas a</p>
          <p>+1 (426) 605-6235</p>
          <p>Tax Number : 565</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-medium">Shipped To:</h1>
          <p>Scarlet Holman</p>
          <p>Totam magni libero c</p>
          <p>Minus quis quia culp, Quaerat provident h 94007</p>
          <p>Sit iusto voluptas a</p>
          <p>+1 (426) 605-6235</p>
          <p>Tax Number : 565</p>
        </div>
        <div className="flex-1  flex justify-end">
          <QRCode value="hello world" size={100} />
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <h1 className="font-medium">Status :</h1>
        <div className="rounded-full bg-green-500 text-white text-xs px-3 w-fit py-2">
          Draft
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <h1 className="font-medium">Product Summary</h1>
        <p>All items here cannot be deleted.</p>
      </div>

      <div className="flex mt-6 w-full overflow-x-auto text-base">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Discount</th>
              <th>Tax</th>
              <th>Description</th>
              <th>
                <div className="flex flex-col">
                  <h1>Price</h1>
                  <p className="text-red-500">before tax & discount</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <td>1</td>
              <td>Bicycle parts</td>
              <td>1 (Inch)</td>
              <td>$150.00</td>
              <td>$0.00</td>
              <td>
                <div className="flex flex-col">
                  <p>CGST (10%) $15.00</p>
                  <p>SGST (5.5%) $8.25</p>
                </div>
              </td>
              <td></td>
              <td>$150.00</td>
            </tr>
            <tr className="hover">
              <td></td>
              <td className="font-medium">Total</td>
              <td className="font-medium">1</td>
              <td className="font-medium">$150.00</td>
              <td className="font-medium">$0.00</td>
              <td className="font-medium" colSpan={3}>
                $23.25
              </td>
            </tr>
            <tr className="hover">
              <td colSpan={6}></td>
              <td className="font-medium">Sub Total</td>
              <td>$10,000.00</td>
            </tr>
            <tr className="hover">
              <td colSpan={6}></td>
              <td className="font-medium">Discount</td>
              <td>$0.00</td>
            </tr>
            <tr className="hover">
              <td colSpan={6}></td>
              <td className="font-medium">CGST</td>
              <td>$15.00</td>
            </tr>
            <tr className="hover">
              <td colSpan={6}></td>
              <td className="font-medium">SGST</td>
              <td>$8.25</td>
            </tr>
            <tr className="hover">
              <td colSpan={6}></td>
              <td className="font-medium">Total</td>
              <td>$173.25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

function TimelineItem({ icon, label, status, action }) {
  return (
    <li className="flex flex-col items-center h-fit justify-center w-full text-center">
      {icon}
      <div className="flex items-center mt-3">
        <p className="font-medium">{label}</p>
      </div>
      <p className="text-sm text-gray-500 mb-4">{status}</p>
      {action} 
    </li>
  );
}

function Timeline() {
  const dispatch = useDispatch();

  const data = [
    {
      icon: <FaPlus size={24} />,
      label: "Create Proposal",
      status: "Created on Feb 18, 2019",
      action: (
        <Link
          to={"/app/company/presale/proposal/create?id=1"}
          className="btn btn-success btn-sm text-white"
        >
          <FiEdit /> Edit
        </Link>
      ),
    },
    {
      icon: <IoMailOutline size={24} />,
      label: "Send Proposal",
      status: "Status : Not Sent",
      action: (
        <button
          onClick={() => {
            dispatch(
              showNotification({ message: "Success sent proposal", status: 1 })
            );
          }}
          className="btn btn-warning btn-sm text-white"
        >
          <IoIosSend /> Send
        </button>
      ),
    },
    {
      icon: <HiOutlineCurrencyDollar size={24} />,
      label: "Proposal Status",
      // status: "Status : Awaiting payment",
      action: (
        <div className="bg-green-500 text-white py-2 px-4 rounded-full">
          Draft
        </div>
      ),
    },
  ];

  return (
    <ol className="flex flex-col md:flex-row bg-base-100 border-base-300 py-12 px-12 md:px-24 rounded-md mb-4 justify-center items-center border gap-3">
      {data.map((item, index) => (
        <>
          <TimelineItem key={index} {...item} />
          {/* // tambah garis */}
          {index !== data.length - 1 && (
            <div className="flex flex-col justify-center items-center w-full">
              <div className="w-[2px] md:w-full h-[50px] md:h-[2px] bg-base-300 rounded-full"></div>
            </div>
          )}
        </>
      ))}
    </ol>
  );
}

export default ProposalDetail;
