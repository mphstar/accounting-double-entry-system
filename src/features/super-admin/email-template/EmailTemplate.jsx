import HeadPage from "@/components/HeadPage/HeadPage";
import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import {
  align,
  fontColor,
  fontSize,
  formatBlock,
  hiliteColor,
  horizontalRule,
  lineHeight,
  list,
  paragraphStyle,
  table,
  template,
  textStyle,
  image,
  link,
} from "suneditor/src/plugins";

const EmailTemplate = () => {
  const [richTextEditorHtml, setRichTextEditorHtml] = useState(
    "<p>Hi, {payment_name}</p><p>Welcome to {app_name}</p><p>We are writing to inform you that we has sent your {payment_bill} payment.</p><p>We has sent your amount {payment_amount} payment for {payment_bill} submited on date {payment_date} via {payment_method}.</p><p>Thank You very much and have a good day !!!!</p><p>{company_name}</p><p>{app_url}</p>"
  );
  const handleChange = (content) => {
    setRichTextEditorHtml(content);
  };

  const template = [
    "New Bill Payment",
    "Customer Invoice Sent",
    "Bill Sent",
    "New Invoice Payment",
    "Invoice Sent",
    "Payment Reminder",
    "Proposal Sent",
    "User Created",
    "Vendor Bill Sent",
    "New Contract",
    "Retainer Sent",
    "Customer Retainer Sent",
    "New Retainer Payment",
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"New Bill Payment"}
        breadcrumb={"Email Template"}
        actions={
          <div className="flex gap-2">
            <select className="select select-bordered" name="" id="">
              {template.map((item, index) => (
                <option key={index} value={index}>{item}</option>
              ))}
            </select>
          </div>
        }
      />
      <div className="bg-base-100 drop-shadow p-4 rounded-md flex flex-col">
        <h1 className="label-text font-semibold">Place Holder</h1>
        <div className="p-3 border-2 grid grid-col-1 md:grid-cols-3 gap-3 text-sm mt-4">
          <ItemKeterangan title={"App Name"} value={"{app_name}"} />
          <ItemKeterangan title={"Company Name"} value={"{company_name}"} />
          <ItemKeterangan title={"APP URL"} value={"{app_url}"} />
          <ItemKeterangan title={"Payment Name"} value={"{payment_name}"} />
          <ItemKeterangan title={"Payment Bill"} value={"{payment_bill}"} />
          <ItemKeterangan title={"Payment Amount"} value={"{payment_amount}"} />
          <ItemKeterangan title={"Payment Date"} value={"{payment_date}"} />
          <ItemKeterangan title={"Payment Method"} value={"{payment_method}"} />
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Subject</span>
            </div>
            <input type="text" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">From</span>
            </div>
            <input type="text" className="input input-bordered w-full" />
          </label>
        </div>

        <div className="mt-6">
          <h1 className="label-text font-semibold mb-4">Email Message</h1>
          <div>
            <SunEditor
              autoFocus={true}
              lang="en"
              setOptions={{
                showPathLabel: false,
                defaultStyle: "font-family: Arial;",
                minHeight: "50vh",
                maxHeight: "50vh",
                placeholder: "Enter your text here!!!",
                plugins: [
                  align,
                  fontColor,
                  fontSize,
                  formatBlock,
                  hiliteColor,
                  horizontalRule,
                  lineHeight,
                  list,
                  paragraphStyle,
                  table,
                  template,
                  textStyle,
                  image,
                  link,
                ],
                buttonList: [
                  ["undo", "redo"],
                  ["fontSize", "formatBlock"],
                  ["paragraphStyle"],
                  [
                    "bold",
                    "underline",
                    "italic",
                    "strike",
                    "subscript",
                    "superscript",
                  ],
                  ["fontColor", "hiliteColor"],
                  ["removeFormat"],
                  "/", // Line break
                  ["outdent", "indent"],
                  ["align", "horizontalRule", "list", "lineHeight"],
                  ["table", "link", "image"],
                ],
                formats: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
                font: [
                  "Arial",
                  "Calibri",
                  "Comic Sans",
                  "Courier",
                  "Garamond",
                  "Georgia",
                  "Impact",
                  "Lucida Console",
                  "Palatino Linotype",
                  "Segoe UI",
                  "Tahoma",
                  "Times New Roman",
                  "Trebuchet MS",
                ],
              }}
              defaultValue={richTextEditorHtml}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex w-full mt-8 justify-end">
          <button className="btn btn-success text-white">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

const ItemKeterangan = ({ title, value }) => {
  return (
    <div className="flex gap-2 items-center">
      <p>{title}</p>
      <p>:</p>
      <p className="text-green-500">{value}</p>
    </div>
  );
};

export default EmailTemplate;
