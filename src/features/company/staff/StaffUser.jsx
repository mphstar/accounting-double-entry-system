import React from "react";
import HeadPage from "../../../components/HeadPage/HeadPage";
import { IoAddOutline, IoCloseCircleOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import { VscKebabVertical } from "react-icons/vsc";
import { MdLockReset, MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";
import { openModal } from "../../common/modalSlice";
import { Link } from "react-router-dom";

const DATA = [
  {
    avatar:
      "https://demo.workdo.io/accountgo-saas/storage/uploads/avatar/user_3.jpg",
    name: "John",
    email: "john@example.com",
    role: "Accountan",
  },
  {
    avatar:
      "https://demo.workdo.io/accountgo-saas/storage/uploads/avatar/user_6.jpg",
    name: "Keanu",
    email: "keanu2006@gmail.com",
    role: "Accountan",
  },
  {
    avatar:
      "https://demo.workdo.io/accountgo-saas/storage/uploads/avatar/user_7.jpg",
    name: "Stefanie",
    email: "stefanie1989@example.com",
    role: "Accountan",
  },
  {
    avatar:
      "https://demo.workdo.io/accountgo-saas/storage/uploads/avatar/user_7.jpg",
    name: "Fuller Prince",
    email: "kujumi@mailinator.com",
    role: "Accountan",
  },
  {
    avatar:
      "https://demo.workdo.io/accountgo-saas/storage/uploads/avatar/user_8.jpg",
    name: "Dennis Leonard",
    email: "jatebiqixy@mailinator.com",
    role: "Accountan",
  },
];

const StaffUser = () => {
  const dispatch = useDispatch();

  const AddUser = () => {
    dispatch(
      openModal({
        title: "Create New User",
        bodyType: MODAL_BODY_TYPES.FORM_STAFF_USER,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Companies"}
        breadcrumb={"Companies"}
        actions={
          <div className="flex items-center gap-1">
            <button
              onClick={() => AddUser()}
              className="btn btn-square btn-success btn-sm"
            >
              <IoAddOutline />
            </button>
            <Link to={"/app/company/staff/user/logs"}>
              <button className="btn btn-square btn-primary btn-sm">
                <FiUserCheck />
              </button>
            </Link>
          </div>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {DATA.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ avatar, name, email, role }) => {
  return (
    <div className="flex flex-col bg-base-100 rounded-md drop-shadow p-4 items-center">
      <div className="flex items-center justify-between w-full">
        <div className="px-2 py-1 bg-slate-800 text-white rounded-md w-fit text-sm">
          {role}
        </div>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-square shadow-none bg-transparent"
          >
            <VscKebabVertical />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <div className="flex items-center gap-2">
                <MdOutlineModeEdit />
                Edit
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <RiDeleteBin7Line />
                Delete
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <MdLockReset />
                Reset Password
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <IoCloseCircleOutline />
                <span className="text-red-500">Login Disable</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <img
        className="rounded-full object-cover w-16 mt-4"
        src={avatar}
        alt="Image Picture"
      />
      <h1 className="font-medium mt-4">{name}</h1>
      <p className="mb-4 text-gray-500">{email}</p>
    </div>
  );
};

export default StaffUser;
