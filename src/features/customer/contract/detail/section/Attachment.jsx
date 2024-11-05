import React, { useState } from "react";
import {
  MdDeleteOutline,
  MdOutlineFileDownload,
} from "react-icons/md";

import Swal from "sweetalert2";

const Attachment = () => {
  const [listUpload, setListUpload] = useState([]);

  const handleUpload = (e) => {
    const files = e.target.files;

    // console.log(files);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setListUpload([...listUpload, file]);
    }
  };

  const convertSize = (size) => {
    if (size === 0) return "0.00 MB";
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (
      (size / Math.pow(1024, i)).toFixed(2) * 1 +
      " " +
      ["B", "KB", "MB", "GB", "TB"][i]
    );
  };

  const handleDelete = (index) => {
    // SweetAlert confirmation

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newList = listUpload.filter((item, i) => i !== index);
        setListUpload(newList);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Your file has been deleted.",
          confirmButtonColor: "#3085d6",
        });
      }
    });
  };

  return (
    <section id="refferal-transaction">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <h1 className="font-semibold">Attachment</h1>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>

        <div className="flex relative flex-col border-base-300 justify-center h-40 items-center border-[2px] p-4">
          <div className="flex absolute top-0 left-0 h-full w-full justify-center items-center">
            <p>Upload file here</p>
          </div>
          <input
            className="absolute top-0 left-0 h-full opacity-0 w-full"
            type="file"
            onChange={handleUpload}
            multiple
            name=""
            id=""
          />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          {listUpload.map((item, index) => (
            <Card
              key={index}
              title={item.name}
              size={convertSize(item.size)}
              url={URL.createObjectURL(item)}
              onDelete={() => handleDelete(index)}
            />
          ))}

          <Card title={"logo-light (4).png"} size={"0.00 MB"} />
          <Card title={"logo-light (4).png"} size={"0.00 MB"} />
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, size, url, onDelete }) => {
  return (
    <div className="flex gap-1 items-center">
      <div className="flex flex-col w-full text-sm">
        <p className="font-semibold text-primary">{title}</p>
        <p>{size}</p>
      </div>

      <div className="flex flex-row gap-2">
        <div className="tooltip" data-tip="Delete">
          <button
            onClick={onDelete}
            className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white"
          >
            <MdDeleteOutline />
          </button>
        </div>
        <div className="tooltip" data-tip="Download">
          <a target="_blank" href={url}>
            <button className="btn btn-square btn-sm bg-orange-400 hover:bg-orange-500 text-white">
              <MdOutlineFileDownload />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Attachment;
