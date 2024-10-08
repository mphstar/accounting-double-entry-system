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

const FormCreateMenuBar = ({ extraObject, closeModal }) => {
  const [richTextEditorHtml, setRichTextEditorHtml] = useState("content");
  const handleChange = (content) => {
    setRichTextEditorHtml(content);
  };

  const [pageSelected, setPageSelected] = useState(0);

  const handleRadio = (e) => {
    setPageSelected(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control col-span-2 w-full">
          <div className="label">
            <span className="label-text font-semibold">Page Name</span>
          </div>
          <input type="text" className="input input-bordered w-full" />
        </label>
        <label className="flex gap-2 items-center">
          <input
            type="radio"
            name="page"
            className="radio radio-primary radio-sm"
            id="page"
            value={"content"}
            onChange={handleRadio}
          />
          <p>Page Content</p>
        </label>
        <label className="flex gap-2 items-center">
          <input
            type="radio"
            name="page"
            className="radio radio-primary radio-sm"
            id="page"
            value={"url"}
            onChange={handleRadio}
          />
          <p>Page Url</p>
        </label>

        {pageSelected === "content" ? (
          <div className="mt-2 w-full col-span-2">
            <h1 className="label-text font-semibold mb-4">Page Content</h1>
            <div className="sun-editor-dark-mode">
              <SunEditor
                autoFocus={true}
                lang="en"
                setOptions={{
                  showPathLabel: false,
                  defaultStyle: "font-family: Arial;",
                  minHeight: "200px",
                  maxHeight: "200px",
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
        ) : (
          <label className="form-control col-span-2 w-full">
            <div className="label">
              <span className="label-text font-semibold">Page URL</span>
            </div>
            <input type="text" className="input input-bordered w-full" />
          </label>
        )}

        <div className="col-span-2 flex flex-row flex-wrap gap-6 mt-4">
          <label className="flex gap-2 items-center">
            <input type="checkbox" name="" className="toggle toggle-primary toggle-sm" id="" />
            <p>Header</p>
          </label>
          <label className="flex gap-2 items-center">
            <input type="checkbox" name="" className="toggle toggle-primary toggle-sm" id="" />
            <p>Footer</p>
          </label>
          <label className="flex gap-2 items-center">
            <input type="checkbox" name="" className="toggle toggle-primary toggle-sm" id="" />
            <p>Login</p>
          </label>

        </div>
      </div>
      <div className="flex items-center justify-end w-full mt-8 gap-2">
        <button onClick={() => closeModal()} className="btn">
          Cancel
        </button>
        <button
          onClick={() => closeModal()}
          className="btn btn-success text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FormCreateMenuBar;
