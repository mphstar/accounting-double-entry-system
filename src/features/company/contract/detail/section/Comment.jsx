import React, { useRef, useState } from "react";
import {
  MdDeleteOutline,
  MdOutlineDeleteOutline,
  MdOutlineFileDownload,
} from "react-icons/md";
import { VscSend } from "react-icons/vsc";

import Swal from "sweetalert2";

const Comment = () => {
  const [listComment, setListComment] = useState([
    {
      name: "Mphstar",
      comment: "Qui cupiditate paria",
      time: "2 years ago",
    },
    {
      name: "Mphstar",
      comment: "Aut mollitia recusan",
      time: "2 years ago",
    },
  ]);

  const inputRef = useRef(null);

  const handleSend = () => {
    const comment = inputRef.current.value;

    setListComment([
      ...listComment,
      {
        name: "Guest",
        comment: comment,
        time: "Just now",
      },
    ]);

    inputRef.current.value = "";
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
        const newList = listComment.filter((item, i) => i !== index);
        setListComment(newList);
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
          <h1 className="font-semibold">Comment</h1>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>

        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            placeholder="Add Comment.."
            className="textarea textarea-bordered w-full"
          ></textarea>
          <div className="tooltip" data-tip="Kirim">
            <button
              onClick={() => {
                handleSend();
              }}
              className="btn btn-square bg-green-400 hover:bg-green-500 text-white"
            >
              <VscSend />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-8">
          {listComment.reverse().map((item, index) => (
            <Card
              key={index}
              id={index + 1}
              title={item.name}
              comment={item.comment}
              time={item.time}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ id, title, comment, time, url, onDelete }) => {
  return (
    <div className="flex gap-4 items-center">
      <img
        className="w-12 h-12 rounded-full  object-cover"
        src={`https://picsum.photos/id/${id}/200/300`}
        alt=""
      />
      <div className="flex flex-col w-full text-sm">
        <p className="font-semibold text-primary">{title}</p>
        <p>{comment}</p>
        <p className="mt-2">{time}</p>
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
      </div>
    </div>
  );
};

export default Comment;
