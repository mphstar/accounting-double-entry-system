import CustomTable from "@/components/TablePage/CustomTable";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdOutlineContentCopy, MdOutlineDeleteOutline } from "react-icons/md";

const GuideLine = () => {
  return (
    <section id="guide-line">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <h1 className="font-semibold">Guide Line</h1>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col w-full">
            <h1 className="font-semibold mb-6">
              Refer AccountGo SaaS and earn $10 per paid signup!
            </h1>
            <tr>
              <td>1.</td>
              <td>
                Refer new users to us and earn $10 for each successful referral.
                 ($10 - set commission amount)
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Share your link and start earning today!</td>
            </tr>
          </div>
          <div className="flex flex-col w-full items-center mt-6 md:mt-0">
            <h1 className="font-semibold">Share Your Link</h1>

            <a className="btn btn-link px-0"
              href="https://demo.workdo.io/accountgo-saas/register/792140"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://demo.workdo.io/accountgo-saas/register/792140
            </a>

            <CopyToClipboard text="https://demo.workdo.io/accountgo-saas/register/792140">
              <button className="btn btn-square bg-transparent">
                <MdOutlineContentCopy />
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideLine;
