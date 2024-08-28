import React, { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";

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

const Settings = () => {
  const [richTextEditorHtml, setRichTextEditorHtml] = useState(
    "70% Special Offer. Don’t Miss it. The offer ends in 72 hours."
  );

  const handleChange = (content) => {
    setRichTextEditorHtml(content);
  };

  return (
    <section id="settings">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center ">
          <h1 className="font-semibold">Settings</h1>
          <input
            type="checkbox"
            name=""
            className="toggle toggle-primary"
            id=""
          />
        </div>
        <div className="grid col-span-1 md:grid-cols-2 gap-3 mt-6">
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Commission Percentage (%)
            </span>
            <div className="flex items-center gap-3 input input-bordered">
              <input type="number" className="grow" defaultValue="10" />
            </div>
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              10 Minimum Threshold Amount
            </span>
            <div className="flex items-center gap-3 input input-bordered">
              <BsCurrencyDollar />
              <input type="number" className="grow" defaultValue="10" />
            </div>
          </label>

          <div className="form-control gap-2 md:col-span-2">
            <h1 className="label-text font-semibold">GuideLines</h1>
            <div className="sun-editor-dark-mode mt-2">
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
        </div>

        <div className="flex w-full justify-end mt-12">
          <button className="btn btn-success text-white">Save Changes</button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
