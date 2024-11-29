import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { Control, FabricImage, util } from "fabric";
import React, { useRef } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { SiPlanetscale } from "react-icons/si";
import HeadPage from "@/components/HeadPage/HeadPage";
import html2canvas from "html2canvas-pro";

const PreviewContract = () => {
  const { editor, onReady } = useFabricJSEditor();

  const inputFile = useRef(null);

  const deleteIcon =
    "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

  const cloneIcon =
    "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 55.699 55.699' width='100px' height='100px' xml:space='preserve'%3E%3Cpath style='fill:%23010002;' d='M51.51,18.001c-0.006-0.085-0.022-0.167-0.05-0.248c-0.012-0.034-0.02-0.067-0.035-0.1 c-0.049-0.106-0.109-0.206-0.194-0.291v-0.001l0,0c0,0-0.001-0.001-0.001-0.002L34.161,0.293c-0.086-0.087-0.188-0.148-0.295-0.197 c-0.027-0.013-0.057-0.02-0.086-0.03c-0.086-0.029-0.174-0.048-0.265-0.053C33.494,0.011,33.475,0,33.453,0H22.177 c-3.678,0-6.669,2.992-6.669,6.67v1.674h-4.663c-3.678,0-6.67,2.992-6.67,6.67V49.03c0,3.678,2.992,6.669,6.67,6.669h22.677 c3.677,0,6.669-2.991,6.669-6.669v-1.675h4.664c3.678,0,6.669-2.991,6.669-6.669V18.069C51.524,18.045,51.512,18.025,51.51,18.001z M34.454,3.414l13.655,13.655h-8.985c-2.575,0-4.67-2.095-4.67-4.67V3.414z M38.191,49.029c0,2.574-2.095,4.669-4.669,4.669H10.845 c-2.575,0-4.67-2.095-4.67-4.669V15.014c0-2.575,2.095-4.67,4.67-4.67h5.663h4.614v10.399c0,3.678,2.991,6.669,6.668,6.669h10.4 v18.942L38.191,49.029L38.191,49.029z M36.777,25.412h-8.986c-2.574,0-4.668-2.094-4.668-4.669v-8.985L36.777,25.412z M44.855,45.355h-4.664V26.412c0-0.023-0.012-0.044-0.014-0.067c-0.006-0.085-0.021-0.167-0.049-0.249 c-0.012-0.033-0.021-0.066-0.036-0.1c-0.048-0.105-0.109-0.205-0.194-0.29l0,0l0,0c0-0.001-0.001-0.002-0.001-0.002L22.829,8.637 c-0.087-0.086-0.188-0.147-0.295-0.196c-0.029-0.013-0.058-0.021-0.088-0.031c-0.086-0.03-0.172-0.048-0.263-0.053 c-0.021-0.002-0.04-0.013-0.062-0.013h-4.614V6.67c0-2.575,2.095-4.67,4.669-4.67h10.277v10.4c0,3.678,2.992,6.67,6.67,6.67h10.399 v21.616C49.524,43.26,47.429,45.355,44.855,45.355z'/%3E%3C/svg%3E%0A";

  function deleteObject(_eventData, transform) {
    const canvas = transform.target.canvas;
    canvas.remove(transform.target);
    canvas.requestRenderAll();
  }

  const deleteImg = document.createElement("img");
  deleteImg.src = deleteIcon;

  const cloneImg = document.createElement("img");
  cloneImg.src = cloneIcon;

  function cloneObject(_eventData, transform) {
    const canvas = transform.target.canvas;
    transform.target.clone().then((cloned) => {
      cloned.left += 10;
      cloned.top += 10;
      cloned.controls.deleteControl = transform.target.controls.deleteControl;
      cloned.controls.cloneControl = transform.target.controls.cloneControl;
      canvas.add(cloned);
    });
  }

  function renderIcon(icon) {
    return function (ctx, left, top, _styleOverride, fabricObject) {
      const size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(icon, -size / 2, -size / 2, size, size);
      ctx.restore();
    };
  }

  const addDeleteControl = (img) => {
    // Override kontrol Fabric.js untuk menambahkan kontrol hapus
    img.controls.deleteControl = new Control({
      x: 0.5,
      y: -0.5,
      offsetY: -16,
      offsetX: 16,
      cursorStyle: "pointer",
      mouseUpHandler: deleteObject,
      render: renderIcon(deleteImg),
      cornerSize: 24,
    });

    img.controls.cloneControl = new Control({
      x: -0.5,
      y: -0.5,
      offsetY: -16,
      offsetX: -16,
      cursorStyle: "pointer",
      mouseUpHandler: cloneObject,
      render: renderIcon(cloneImg),
      cornerSize: 24,
    });
  };

  const content = useRef(null);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeadPage
        title={"Preview Contract"}
        breadcrumb={"Preview Contract"}
        actions={
          <div className="flex gap-2 items-center">
            {/* <div className="tooltip tooltip-left" data-tip="Download">
              <button
                onClick={() => {
                  html2canvas(content.current, {
                    useCORS: true,
                    scale: 2,
                  }).then((canvas) => {
                    // download set width an height and set image type
                    const link = document.createElement("a");
                    link.download = "contract.png";
                    link.href = canvas.toDataURL("image/png");
                    link.click();

                  });
                }}
                className="btn btn-square btn-success text-white btn-sm"
              >
                <GoDownload />
              </button>
            </div> */}
          </div>
        }
      />
      <input
        onChange={async (e) => {
          const image = await FabricImage.fromURL(
            URL.createObjectURL(e.target.files[0])
          );
          addDeleteControl(image);

          editor.canvas.add(image);

          editor.canvas.setActiveObject(image);

          e.target.value = null;
        }}
        ref={inputFile}
        className="hidden"
        type="file"
        name=""
        id=""
      />
      <div className="fixed bottom-5 right-5 gap-3 flex items-center z-[200]">
        <div className="tooltip tooltip-left" data-tip="Insert Image">
          <button
            onClick={() => {
              inputFile.current.click();
            }}
            className="btn btn-circle btn-primary "
          >
            <MdOutlineFileUpload />
          </button>
        </div>
        <div className="tooltip tooltip-left" data-tip="Download">
          <button
            onClick={() => {
              html2canvas(content.current, {
                useCORS: true,
                scale: 2,
              }).then((canvas) => {
                // download set width an height and set image type
                const link = document.createElement("a");
                link.download = "contract.png";
                link.href = canvas.toDataURL("image/png");
                link.click();
              });
            }}
            className="btn btn-circle btn-success text-white"
          >
            <GoDownload />
          </button>
        </div>
      </div>
      <div
        ref={content}
        className=" w-[800px] mx-auto p-8 bg-base-100 shadow-lg flex flex-col relative"
      >
        <FabricJSCanvas
          className="sample-canvas absolute top-0 left-0 w-full h-full"
          onReady={onReady}
        />
        {/* Header */}
        <div className="flex justify-between items-start mb-8 w-full">
          <div>
            <p className="flex flex-row items-center gap-2 font-semibold">
              <SiPlanetscale className="mask mask-squircle" />
              Accountify
            </p>{" "}
            <div className="mt-4">
              <div className="flex gap-2">
                <span className="font-semibold">Type:</span>
                <span>Planning</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Value:</span>
                <span>$32.00</span>
              </div>
              <div className="mt-2">
                <span>Repellendus Qui ver</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-gray-700">#CON00010</div>
            <div className="mt-2">
              <div className="flex gap-2 justify-end">
                <span className="font-semibold">Start Date:</span>
                <span>Sep 22, 2022</span>
              </div>
              <div className="flex gap-2 justify-end">
                <span className="font-semibold">End Date:</span>
                <span>Aug 25, 1988</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p>
            <strong>
              The standard Lorem Ipsum passage, used since the 1500s
            </strong>
          </p>

          <p>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.&quot;
          </p>

          <p>
            <strong>
              Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
              written by Cicero in 45 BC
            </strong>
          </p>

          <p>
            &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?&quot;
          </p>

          <p>
            <strong>1914 translation by H. Rackham</strong>
          </p>

          <p>
            &quot;But I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give you a
            complete account of the system, and expound the actual teachings of
            the great explorer of the truth, the master-builder of human
            happiness. No one rejects, dislikes, or avoids pleasure itself,
            because it is pleasure, but because those who do not know how to
            pursue pleasure rationally encounter consequences that are extremely
            painful. Nor again is there anyone who loves or pursues or desires
            to obtain pain of itself, because it is pain, but because
            occasionally circumstances occur in which toil and pain can procure
            him some great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?&quot;
          </p>

          <p>
            <strong>
              Section 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;,
              written by Cicero in 45 BC
            </strong>
          </p>

          <p>
            &quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.&quot;
          </p>
        </div>

        {/* Signatures */}
        <div className="flex justify-between mt-12 pt-16 border-t">
          <div className="text-center">
            {/* <img
              src="/api/placeholder/100/40"
              alt="Company Signature"
              className="mb-2"
            /> */}
            <p className="text-sm font-medium">Company Signature</p>
          </div>
          <div className="text-center">
            {/* <img
              src="/api/placeholder/100/40"
              alt="Customer Signature"
              className="mb-2"
            /> */}
            <p className="text-sm font-medium">Customer Signature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewContract;
