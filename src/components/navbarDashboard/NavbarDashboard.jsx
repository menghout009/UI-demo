import React, { useState } from "react";
import LogoDashboard from "../../assets/logo/logo.svg";
import HrdLogoDashboard from "../../assets/images/hrd.jpeg";
import GraphLogoDashboard from "../../assets/logo/graph.svg";
import CopyLogoDashboard from "../../assets/logo/copy.svg";
import deleteLogoDashboard from "../../assets/logo/delete.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { BiSolidCopyAlt } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
import { MdSwapHorizontalCircle } from "react-icons/md";
import JoinTeamProject from "../../pages/myProjectPage/modalAllProject/JoinTeamProject";

export default function NavbarDashboard() {
  //Open join pro ject

  const [isJoinPorject, setJoinPorject] = useState(false);

  function openModalJoinProject() {
    setJoinPorject(true);
  }
  return (
    <div className="drawer border-[#E1E9EE] border">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      {/* Navbar */}
      <div className=" drawer-content flex flex-col">
        <div className="w-full navbar bg-background-color px-8">
          {/* logo navbar */}
          <NavLink to={"/allproject"} className=" font-bold text-2xl flex-1">
            <img src={LogoDashboard} alt="" className="w-20 " />
            Auto <div className="text-blue-600">Pilot</div>
          </NavLink>

          {/* search navbar */}
          <div className="flex-1 pt-2 mx-2">
            <div className="items-end relative text-sm border-[#E1E9EE]  placeholder-black placeholder-opacity-20 bg-[#F9FBFF]  border rounded-lg block w-80 py-2 px-1 mb-1  focus:border-primary">
              <div className=" absolute inset-y-0 flex items-center pl-2">
                <svg
                  className="w-5 h-5 text-primary"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                className="w-full pl-10 pr-2 bg-transparent text-text placeholder-gray-600 border-0 rounded-md  focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input placeholder:font-sp-pro-text-regular"
                type="text"
                name="search"
                placeholder="Search here..."
              />
            </div>
          </div>

          {/* dropdown navbar */}
          <div className="">
            {/* <NavLink to={"/allproject/:id/alert"}>
              <div className="items-center px-6">
                <img src={notification} alt="" />
              </div>
            </NavLink> */}

            <div className=" dropdown dropdown-end pt-1">
              <label tabIndex={0} className="  rounded-btn">
                <div className="flex gap-x-4 justify-center text-center items-center px-6 cursor-pointer font-sp-pro-text-semibold">
                  <img className="h-10" src={HrdLogoDashboard} alt="" />
                  <div className="flex gap-x-1 ">
                    <p className="text-text-color">KSHRD</p>
                    <RiArrowDropDownLine size={20} />
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 py-3 shadow  rounded-box w-52 mt-4  bg-background-color"
              >
                <NavLink to={"/allproject"}>
                  <li className="px-4 pb-2">
                    <div className="flex gap-x-4 font-sp-pro-text-medium">
                      <MdSwapHorizontalCircle
                        size={20}
                        className="text-database-iconColor"
                      />
                      Swap project
                    </div>
                  </li>
                </NavLink>

                <li className="px-4 pb-2" onClick={openModalJoinProject}>
                  <div className="flex gap-x-4 font-sp-pro-text-medium">
                    <FaUserPlus
                      size={20}
                      className="text-primary"
                    />
                    Join Project
                  </div>
                </li>
                <li className="px-4">
                  <div className="flex gap-x-4 font-sp-pro-text-medium">
                    <BiSolidCopyAlt className="text-primary" size={18} />
                    <a>zx0412</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Join team project */}
      <JoinTeamProject
        isJoinPorject={isJoinPorject}
        setJoinPorject={setJoinPorject}
      />
    </div>
  );
}
