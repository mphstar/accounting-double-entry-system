import React, { useRef, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const SeoSettings = () => {
  const [image, setImage] = useState();
  const inputImage = useRef(null);

  return (
    <section id="seo">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Seo Settings</h1>
            {/* <p className="text-xs">
              (How to Get Google reCaptcha Site and Secret key)
            </p> */}
          </div>

          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Meta Keywords</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"AccountGo SaaS"}
              />
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Meta Description</span>
              <textarea
                className="textarea textarea-bordered"
                defaultValue={
                  "AccountGo SaaS is an account management software that facilitates ease in revenue calculation by keeping a tab on all the accountancy matters of business."
                }
              ></textarea>
            </label>
          </div>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Meta Description</span>
            <img
              className="w-full md:w-80"
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://demo.workdo.io/accountgo-saas/storage/uploads/metaevent//1681971772_meta_image.png?1728568529"
              }
              alt=""
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              name=""
              className="hidden"
              id=""
              ref={inputImage}
            />
            <button
              onClick={() => inputImage.current.click()}
              className="btn btn-success text-white w-fit"
            >
              <MdOutlineFileUpload /> Choose File Here
            </button>
          </label>
        </div>

        <div className="flex justify-end w-full mt-6 gap-3">
          <button className="btn btn-success text-white w-fit">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeoSettings;
