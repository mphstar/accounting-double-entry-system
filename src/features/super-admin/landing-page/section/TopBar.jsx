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

const TopBar = () => {
  const [richTextEditorHtml, setRichTextEditorHtml] = useState(
    "70% Special Offer. Don’t Miss it. The offer ends in 72 hours."
  );

  const handleChange = (content) => {
    setRichTextEditorHtml(content);
  };

  return (
    <section id="top-bar">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center ">
          <h1 className="font-semibold">Top Bar</h1>
          <input
            type="checkbox"
            name=""
            className="toggle toggle-primary"
            id=""
          />
        </div>
        <div className="sun-editor-dark-mode mt-6">
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
        <div className="flex w-full justify-end mt-12">
          <button className="btn btn-success text-white">Save Changes</button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
