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

const SystemSettings = () => {
  const [richTextEditorHtml, setRichTextEditorHtml] = useState(
    "Thank you for your business."
  );
  const handleChange = (content) => {
    setRichTextEditorHtml(content);
  };

  return (
    <section id="system">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">System Settings</h1>
            <p className="text-xs">Edit your system details</p>
          </div>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
          <label className="form-control gap-2">
            <span className="label-text font-semibold required">Currency</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"USD"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold required">
              Currency Symbol
            </span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"$"}
            />
          </label>
          <label className="form-control gap-2 w-full">
            <span className="label-text font-semibold w-full">
              Currency Symbol Position
            </span>
            <div className="flex gap-2 w-full">
              <label className="flex gap-2 items-center w-full" htmlFor="">
                <input
                  type="radio"
                  name="position"
                  className="radio radio-primary"
                  id="position"
                />
                <span>Pre</span>
              </label>
              <label className="flex gap-2 items-center w-full" htmlFor="">
                <input
                  type="radio"
                  name="position"
                  className="radio radio-primary"
                  id="position"
                />
                <span>Post</span>
              </label>
            </div>
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Date Format</span>
            <select className="select select-bordered" name="" id="">
              <option value="dd-mm-yyyy">dd-mm-yyyy</option>
              <option value="mm-dd-yyyy">mm-dd-yyyy</option>
              <option value="yyyy-mm-dd">yyyy-mm-dd</option>
            </select>
          </label>
          {/* time format */}
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Time Format</span>
            <select className="select select-bordered" name="" id="">
              <option value="">10:30 PM</option>
              <option value="">10:30 pm</option>
              <option value="">22:30</option>
            </select>
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Invoice Prefix</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"#INVO"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Invoice Starting Number
            </span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"11"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Proposal Prefix</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"#PROP"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Proposal Starting Number
            </span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"14"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Bill Prefix</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"#BILL"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Bill Starting Number
            </span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"18"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Retainer Prefix</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"#RET"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Retainer Starting Number
            </span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"1"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Customer Prefix</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"#CUST"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Vendor Prefix</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"#VEND"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Invoice/Bill Footer Title
            </span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"Payment Information"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Decimal Number Format
            </span>
            <input
              type="number"
              className="input input-bordered"
              defaultValue={"2"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Journal Prefix</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"#JUR"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Display Shipping in Proposal / Invoice / Bill
            </span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Invoice/Bill Footer Notes
            </span>
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
          </label>
        </div>
        <div className="flex justify-end w-full mt-6">
          <button className="btn btn-success text-white w-fit">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

export default SystemSettings;
