import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaRegComment } from "react-icons/fa";
import { LuStickyNote, LuUserPlus } from "react-icons/lu";
import { MdOutlineContentCopy, MdOutlineDeleteOutline } from "react-icons/md";
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

const CardLogo = ({ title, value, icon, color, className }) => {
  return (
    <div
      className={`flex flex-col p-6 bg-base-100 rounded-md drop-shadow gap-2 h-full`}
    >
      <div className={`${color} p-3 rounded-md w-fit text-white`}>{icon}</div>
      <h1>{title}</h1>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

const General = () => {
  const [richTextEditorHtml, setRichTextEditorHtml] = useState(
    `<p><strong>The standard Lorem Ipsum passage, used since the 1500s</strong></p>

<p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>

<p><strong>Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;, written by Cicero in 45 BC</strong></p>

<p>&quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&quot;</p>

<p><strong>1914 translation by H. Rackham</strong></p>

<p>&quot;But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?&quot;</p>

<p><strong>Section 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;, written by Cicero in 45 BC</strong></p>

<p>&quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.&quot;</p>
`
  );
  const handleChange = (content) => {
    setRichTextEditorHtml(content);
  };

  return (
    <section id="guide-line">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
          <div>
            <CardLogo
              title={"Attachment"}
              value={2}
              icon={<LuUserPlus />}
              color={"bg-green-500"}
            />
          </div>
          <div>
            <CardLogo
              title={"Comment"}
              value={3}
              icon={<FaRegComment />}
              color={"bg-blue-500"}
            />
          </div>
          <div className="sm:col-span-2 xl:col-span-1 h-full">
            <CardLogo
              title={"Notes"}
              value={4}
              icon={<LuStickyNote />}
              color={"bg-orange-500"}
            />
          </div>
          <div className="bg-base-100 drop-shadow h-full p-6 text-sm sm:col-span-2">
            <table>
              <tbody>
                <tr>
                  <td className="font-semibold pr-6">Customer Name</td>
                  <td>Kaire</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-6">Subject</td>
                  <td>Quos dolor</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-6">Value</td>
                  <td>$32.00</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-6">Type</td>
                  <td>Planning</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-6">Start Date</td>
                  <td>Kaire</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-6">End Date</td>
                  <td>Kaire</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-6">Status</td>
                  <td>Kaire</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow mt-6">
        <div className="flex gap-2 justify-between items-center mb-4">
          <h1 className="font-semibold">Description</h1>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <label className="form-control gap-2">
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
                  ["table", "link", "image", "preview", "codeView"],
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
        <div className="flex justify-end w-full mt-6">
          <button onClick={() => {
            console.log(richTextEditorHtml);
            
          }} className="btn btn-success text-white w-fit">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

export default General;
