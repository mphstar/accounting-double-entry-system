import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const FormModalSignature = ({ extraObject, closeModal }) => {
  const signature = useRef(null);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-[300px] w-full">
        <SignatureCanvas
          ref={signature}
          penColor="black"
          canvasProps={{ className: "sigCanvas w-full" }}
        />
      </div>
      <div className="flex items-center justify-between w-full mt-8 gap-2">
        <button
          onClick={() => {
            signature.current.clear();
          }}
          className="btn"
        >
          Clear
        </button>
        <div className="flex gap-2">
          <button onClick={() => closeModal()} className="btn">
            Cancel
          </button>
          <button
            onClick={() => {
              const url = signature.current.getTrimmedCanvas().toDataURL();
              const link = document.createElement("a");
              link.href = url;
              link.download = "signature.png";
              link.click();
            }}
            className="btn btn-success text-white"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModalSignature;
