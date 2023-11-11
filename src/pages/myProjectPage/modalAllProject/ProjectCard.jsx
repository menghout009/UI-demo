import React from 'react'
import doneIcon from "../../assets/images/tickLogo.svg";
import { SlOptions } from "react-icons/sl";
import logoProject from "../../assets/images/projectLogo/K.svg";
import memberProject from "../../assets/images/projectLogo/member.svg";
import { MdChangeCircle } from "react-icons/md";
import { RiFileCopy2Fill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function 
() {
  return (
    <div>
             <div className="w-full bg-background-color shadow border border-1 border-border-color rounded-xl h-96">
            <div className="flex justify-between p-6">
              <div>
                <img src={doneIcon} alt="" />
              </div>
              {/* option */}
              <div className="dropdown dropdown-right cursor-pointer">
                <label tabIndex={0} className="cursor-pointer">
                  <SlOptions size={20} />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 px-4 py-4"
                >
                  <li>
                    <div className="flex gap-x-3 font-sp-pro-text-medium pb-3">
                      <MdChangeCircle size={18} className="text-primary" />
                      <p>Change logo</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-x-3 font-sp-pro-text-medium pb-3">
                      <RiFileCopy2Fill size={18} className="text-primary" />
                      <p>
                        Code:{" "}
                        <span className="font-sp-pro-text-semibold">
                          12ZXF6
                        </span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-x-3 font-sp-pro-text-medium ">
                      <RiDeleteBin5Fill size={18} className="text-red-button" />
                      <p>Delete</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* logo project */}
            <div className="flex justify-center items-center ">
              <div className="flex flex-col gap-y-7">
                <img src={logoProject} alt="" className="h-14" />
                <p className="font-sp-pro-text-semibold text-xl flex justify-center">
                  KB Projects
                </p>

                <div>
                  <p className="font-sp-pro-text-semibold text-md py-1 flex justify-center">
                    8 Members
                  </p>
                  <img src={memberProject} alt="" className="h-10" />
                </div>

                <button
                  type="button"
                  className="font-sp-pro-text-semibold inline-flex justify-center tex-[14px] 
                  rounded-md border border-transparent outline outline-1 outline-border-color 
                   px-7 py-1.5 text-text-color hover:bg-slate-200"
                >
                  Joined
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}
