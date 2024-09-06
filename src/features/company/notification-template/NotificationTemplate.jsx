import HeadPage from "@/components/HeadPage/HeadPage";
import React, { useEffect, useState } from "react";
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

const NotificationTemplate = () => {
  const [richTextEditorHtml, setRichTextEditorHtml] = useState(
    "New Customer created by {customer_name}"
  );
  const handleChange = (content) => {
    setRichTextEditorHtml(content);
  };

  useEffect(() => {}, []);

  const template = [
    "New Customer",
    "New Invoice",
    "New Bill",
    "New Vendor",
    "New Revenue",
    "New Proposal",
    "New Payment",
    "New Reminder",
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"New Customer"}
        breadcrumb={"Notification Template"}
        actions={
          <div className="flex gap-2">
            <select className="select select-bordered" name="" id="">
              {template.map((item, index) => (
                <option key={index} value={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        }
      />
      <div className="bg-base-100 drop-shadow p-4 rounded-md flex flex-col">
        <h1 className="label-text font-semibold">Place Holder</h1>
        <div className="p-3 border-2 flex flex-col mt-4">
          <h1 className="font-medium mb-4 text-sm">Variables</h1>
          <div className="grid grid-col-1 md:grid-cols-3 gap-3">
            <ItemKeterangan title={"Customer Name"} value={"{customer_name}"} />
            <ItemKeterangan title={"Email"} value={"{email}"} />
            <ItemKeterangan title={"Password"} value={"{password}"} />
            <ItemKeterangan title={"Company Name"} value={"{company_name}"} />
            <ItemKeterangan title={"App Name"} value={"{app_name}"} />
            <ItemKeterangan title={"App Url"} value={"{app_url}"} />
          </div>
        </div>

        <div className="mt-6">
          <h1 className="label-text font-semibold mb-4">
            Notification Message
          </h1>
          <div className="sun-editor-dark-mode">
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

export default NotificationTemplate;
