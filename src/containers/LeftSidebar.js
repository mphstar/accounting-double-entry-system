import { NavLink, Routes, Link, useLocation } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { useDispatch } from "react-redux";
import { SiPlanetscale } from "react-icons/si";
import {
  routesCompany,
  routesCustomer,
  routesSuperAdmin,
  routesVendor,
} from "../routes/sidebar";

function LeftSidebar() {
  const location = useLocation();

  const dispatch = useDispatch();

  const close = (e) => {
    document.getElementById("left-sidebar-drawer").click();
  };

  const level = localStorage.getItem("level");

  return (
    <div className="drawer-side z-30  ">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu active:bg-base-100 pt-2 w-80 bg-base-100 min-h-full text-base-content">
        <button
          className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={() => close()}
        >
          <XMarkIcon className="h-5 inline-block w-5" />
        </button>

        <li className="mb-2 font-semibold text-xl">
          <Link to={"/app/welcome"}>
            <SiPlanetscale className="mask mask-squircle w-10" />
            Accountify
          </Link>{" "}
        </li>


        {level === "superadmin" &&
          routesSuperAdmin.map((route, k) => {
            return (
              <li className="" key={k}>
                {route.submenu ? (
                  <SidebarSubmenu {...route} />
                ) : (
                  <NavLink
                    end
                    to={route.path}
                    className={({ isActive }) =>
                      `${
                        isActive ? "font-semibold  bg-base-200 " : "font-normal"
                      } flex flex-row items-center gap-0`
                    }
                  >
                    <div className="pr-3">{route.icon}</div>
                    <span className="">{route.name}</span>
                    {location.pathname === route.path ? (
                      <span
                        className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                        aria-hidden="true"
                      ></span>
                    ) : null}
                  </NavLink>
                )}
              </li>
            );
          })}

        {level === "company" &&
          routesCompany.map((route, k) => {
            return (
              <li className="" key={k}>
                {route.submenu ? (
                  <SidebarSubmenu {...route} />
                ) : (
                  <NavLink
                    end
                    to={route.path}
                    className={({ isActive }) =>
                      `${
                        isActive ? "font-semibold  bg-base-200 " : "font-normal"
                      } flex flex-row items-center gap-0`
                    }
                  >
                    <div className="pr-3">{route.icon}</div>
                    <span className="">{route.name}</span>
                    {location.pathname === route.path ? (
                      <span
                        className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                        aria-hidden="true"
                      ></span>
                    ) : null}
                  </NavLink>
                )}
              </li>
            );
          })}

        {level === "customer" &&
          routesCustomer.map((route, k) => {
            return (
              <li className="" key={k}>
                {route.submenu ? (
                  <SidebarSubmenu {...route} />
                ) : (
                  <NavLink
                    end
                    to={route.path}
                    className={({ isActive }) =>
                      `${
                        isActive ? "font-semibold  bg-base-200 " : "font-normal"
                      } flex flex-row items-center gap-0`
                    }
                  >
                    <div className="pr-3">{route.icon}</div>
                    <span className="">{route.name}</span>
                    {location.pathname === route.path ? (
                      <span
                        className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                        aria-hidden="true"
                      ></span>
                    ) : null}
                  </NavLink>
                )}
              </li>
            );
          })}

        {level === "vendor" &&
          routesVendor.map((route, k) => {
            return (
              <li className="" key={k}>
                {route.submenu ? (
                  <SidebarSubmenu {...route} />
                ) : (
                  <NavLink
                    end
                    to={route.path}
                    className={({ isActive }) =>
                      `${
                        isActive ? "font-semibold  bg-base-200 " : "font-normal"
                      } flex flex-row items-center gap-0`
                    }
                  >
                    <div className="pr-3">{route.icon}</div>
                    <span className="">{route.name}</span>
                    {location.pathname === route.path ? (
                      <span
                        className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                        aria-hidden="true"
                      ></span>
                    ) : null}
                  </NavLink>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default LeftSidebar;
