import React, { useState } from "react";
import Select from "react-select";

const StorageSettings = () => {
  const [selected, setSelected] = useState("local");

  return (
    <section id="storage">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Storage Settings</h1>
            {/* <p className="text-xs">
              (How to Get Google reCaptcha Site and Secret key)
            </p> */}
          </div>

          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>

        <div className="flex flex-row flex-nowrap overflow-x-auto gap-3">
          <button
            onClick={() => setSelected("local")}
            className={`btn ${
              selected === "local" ? "btn-primary" : "btn-outline"
            }`}
          >
            Local
          </button>
          <button
            onClick={() => setSelected("aws")}
            className={`btn ${
              selected === "aws" ? "btn-primary" : "btn-outline"
            }`}
          >
            AWS S3
          </button>
          <button
            onClick={() => setSelected("wasabi")}
            className={`btn ${
              selected === "wasabi" ? "btn-primary" : "btn-outline"
            }`}
          >
            Wasabi
          </button>
        </div>

        {selected === "aws" && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="form-control gap-2">
              <span className="label-text font-semibold">S3 Key</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"14"}
              />
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">S3 Secret</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"#BILL"}
              />
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">S3 Region</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"1"}
              />
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">S3 Bucket</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"#RET"}
              />
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">S3 URL</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"13"}
              />
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">S3 Endpoint</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"15"}
              />
            </label>
          </div>
        )}

        {selected === "wasabi" && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Wasabi Key</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"#JUR"}
              />
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Wasabi Secret</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"on"}
              />
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Wasabi Region</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"Indonesian"}
              />
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Wasabi Bucket</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"MyBucket"}
              />
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Wasabi URL</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"$"}
              />
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Wasabi Root</span>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={"mphstar"}
              />
            </label>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          <label className="form-control gap-2 col-span-2">
            <span className="label-text font-semibold">Only Upload Files</span>
            <Select
              className="my-react-select-container"
              classNamePrefix="my-react-select"
              isMulti
              options={[
                { value: "3dm", label: "3dm" },
                { value: "3dmf", label: "3dmf" },
                { value: "ai", label: "ai" },
                { value: "bin", label: "bin" },
                { value: "bmp", label: "bmp" },
                { value: "bz2", label: "bz2" },
                { value: "csv", label: "csv" },
                { value: "doc", label: "doc" },
                { value: "docx", label: "docx" },
                { value: "dwg", label: "dwg" },
                { value: "dxf", label: "dxf" },
                { value: "eps", label: "eps" },
                { value: "flv", label: "flv" },
                { value: "gif", label: "gif" },
                { value: "gz", label: "gz" },
                { value: "gzip", label: "gzip" },
                { value: "html", label: "html" },
                { value: "ics", label: "ics" },
                { value: "iso", label: "iso" },
                { value: "jpeg", label: "jpeg" },
                { value: "jpg", label: "jpg" },
                { value: "js", label: "js" },
                { value: "json", label: "json" },
                { value: "midi", label: "midi" },
                { value: "mkv", label: "mkv" },
                { value: "mov", label: "mov" },
                { value: "mp3", label: "mp3" },
                { value: "mp4", label: "mp4" },
                { value: "mpeg", label: "mpeg" },
                { value: "mpg", label: "mpg" },
                { value: "obj", label: "obj" },
                { value: "odp", label: "odp" },
                { value: "ods", label: "ods" },
                { value: "odt", label: "odt" },
                { value: "ogg", label: "ogg" },
                { value: "ogv", label: "ogv" },
                { value: "pdf", label: "pdf" },
                { value: "php", label: "php" },
                { value: "png", label: "png" },
                { value: "ppt", label: "ppt" },
                { value: "pptx", label: "pptx" },
                { value: "ps", label: "ps" },
                { value: "psd", label: "psd" },
                { value: "rar", label: "rar" },
                { value: "rss", label: "rss" },
                { value: "rtf", label: "rtf" },
                { value: "svg", label: "svg" },
                { value: "swf", label: "swf" },
                { value: "tar", label: "tar" },
                { value: "tif", label: "tif" },
                { value: "tiff", label: "tiff" },
                { value: "txt", label: "txt" },
                { value: "wav", label: "wav" },
                { value: "wmv", label: "wmv" },
                { value: "xls", label: "xls" },
                { value: "xlsx", label: "xlsx" },
                { value: "xml", label: "xml" },
                { value: "zip", label: "zip" },
              ]}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Max upload size ( In KB)
            </span>
            <input
              type="number"
              className="input input-bordered"
              defaultValue={"2048000"}
            />
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

export default StorageSettings;
