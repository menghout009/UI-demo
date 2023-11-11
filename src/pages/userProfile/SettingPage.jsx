import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import hiIcon from "../../assets/icon/profileIcon/hi.png";
import interestIcon from "../../assets/icon/profileIcon/interest.png";
import learnIcon from "../../assets/icon/profileIcon/learn.png";
import collaborateIcon from "../../assets/icon/profileIcon/lookingFor.png";
import manPf from "../../assets/icon/profileIcon/manPf.jpg";
import { TfiEmail } from "react-icons/tfi";

import doneIcon from "../../assets/images/tickLogo.svg";
import { SlOptions } from "react-icons/sl";
import { MdChangeCircle } from "react-icons/md";
import { RiFileCopy2Fill } from "react-icons/ri";
import { BsTrash3 } from "react-icons/bs";
import logoProject from "../../assets/images/projectLogo/K.svg";
import userPf1 from "../../assets/UserProfile/userPf1.svg";
import userPf2 from "../../assets/UserProfile/userPf2.svg";
import userPf3 from "../../assets/UserProfile/userPf3.svg";
import userPf4 from "../../assets/UserProfile/userPf4.svg";
import { AiOutlineHome } from "react-icons/ai";
import { HiMiniChevronRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function SettingPage() {
  return (
    <div className="p-6">
      <div className="flex  gap-x-2">
        <AiOutlineHome size={18} />
        <div>Home</div>
        <HiMiniChevronRight size={18} />
        <NavLink to={"/allproject/:id/profile"}>
          <div>Profile</div>
        </NavLink>
        <HiMiniChevronRight size={18} />
        <NavLink to={"/allproject/:id/profile"}>
          <div className="text-primary">Setting</div>
        </NavLink>
      </div>
      <div className="grid grid-cols-12 h-full py-4">
        <div className="col-span-6 bg-background-color py-8 px-12">
          <div className="flex flex-col">
            <div>
              <img
                src={manPf}
                alt=""
                className="w-40 h-40 bg-blue-400 rounded-full object-cover cursor-pointer"
              />
            </div>
            <p className="text-2xl pt-2 font-sp-pro-text-semibold  ">DemPo.P</p>

            <div className="flex mt-2 ">
              <div className="flex gap-x-2 font-sp-pro-text-medium">
                <TfiEmail size={16} className="mt-0.5" />
                <p className="flex gap-x-3 text-sm"> Email: </p>
              </div>
              <p>sokphakphol@gmail.com</p>
            </div>
          </div>
          <div className="border-1 border-b w-full py-14"></div>
          <div className="grid grid-cols-1 gap-x-8 py-14">
            <div className=" h-80 text-text-color ">
              <div className="flex  gap-x-8 pb-3">
                <p className="text-lg  font-sp-pro-text-medium pb-12">
                  Dempo / README <span className="text-gray-500">.md</span>
                </p>
                <div
                  className="h-8 w-8 bg-slate-200 hover:bg-database-bgColor 
        cursor-pointer flex justify-center items-center rounded-full"
                >
                  <MdOutlineModeEditOutline size={20} />
                </div>
              </div>
              <div className="flex flex-col gap-y-3 font-sp-pro-text-medium">
                <div className="flex gap-x-5">
                  <img src={hiIcon} alt="" className="h-6" />
                  <p>
                    Hi, I'm{" "}
                    <span className="font-sp-pro-text-semibold">@Dempo</span>
                  </p>
                </div>
                <div className="flex gap-x-5">
                  <img src={interestIcon} alt="" className="h-6" />
                  <p>I'm interested in Full Stack Developer</p>
                </div>
                <div className="flex gap-x-5">
                  <img src={learnIcon} alt="" className="h-6" />
                  <p>I'm currently learning Spring, Angular...</p>
                </div>
                <div className="flex gap-x-5">
                  <img src={collaborateIcon} alt="" className="h-6" />
                  <p>Hi, I'm looking to collaborate on...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* left comntent */}
        <div className="col-span-6 bg-background-color ">
          <div className="grid grid-cols-1 gap-x-8 p-8 ">
            <p className="text-lg font-sp-pro-text-medium">Dempo/ Projects</p>
            <div className=" h-auto text-text-color p-2 w-full overflow-hidden py-6">
              <div className="flex flex-col gap-y-4">
                <div className="flex justify-between gap-4">
                  {/* card 1 */}
                  <div className=" w-1/2 h-20 rounded-lg border border-border-color border-.5">
                    <div className="flex justify-between p-8">
                      <p className="text-sm font-sp-pro-text-medium">
                        Autopilot Project
                      </p>
                      {/* option */}
                      <div className="dropdown dropdown-right cursor-pointer bg-background-color">
                        <label tabIndex={0} className="cursor-pointer">
                          <p className="text-[12px] text-https-iconColor border px-2 py-0.5 rounded-xl">
                            Active
                          </p>
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52 px-4 py-4 bg-background-color"
                        >
                          <li>
                            <div className="flex gap-x-3 font-sp-pro-text-medium pb-3">
                              <MdChangeCircle
                                size={18}
                                className="text-primary"
                              />
                              <p>Change logo</p>
                            </div>
                          </li>
                          <li>
                            <div className="flex gap-x-3 font-sp-pro-text-medium pb-3">
                              <RiFileCopy2Fill
                                size={18}
                                className="text-primary"
                              />
                              <p>
                                Code:{" "}
                                <span className="font-sp-pro-text-semibold">
                                  ZXF123
                                </span>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="flex gap-x-3 font-sp-pro-text-medium ">
                              <BsTrash3 size={16} className="text-red-button" />
                              <p>Delete</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* card 1 */}
                  <div className=" w-1/2 h-20 rounded-lg border border-border-color border-.5">
                    <div className="flex justify-between p-8">
                      <p className="text-sm font-sp-pro-text-medium">
                        Fintrack Project
                      </p>
                      {/* option */}
                      <div className="dropdown dropdown-right cursor-pointer bg-background-color">
                        <label tabIndex={0} className="cursor-pointer">
                          <p className="text-[12px] text-https-iconColor border px-2 py-0.5 rounded-xl">
                            Active
                          </p>
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52 px-4 py-4 bg-background-color"
                        >
                          <li>
                            <div className="flex gap-x-3 font-sp-pro-text-medium pb-3">
                              <MdChangeCircle
                                size={18}
                                className="text-primary"
                              />
                              <p>Change logo</p>
                            </div>
                          </li>
                          <li>
                            <div className="flex gap-x-3 font-sp-pro-text-medium pb-3">
                              <RiFileCopy2Fill
                                size={18}
                                className="text-primary"
                              />
                              <p>
                                Code:{" "}
                                <span className="font-sp-pro-text-semibold">
                                  ZXF123
                                </span>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="flex gap-x-3 font-sp-pro-text-medium ">
                              <BsTrash3 size={16} className="text-red-button" />
                              <p>Delete</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  {/* card 1 */}
                  <div className=" w-1/2 h-20 rounded-lg border border-border-color border-.5">
                    <div className="flex justify-between p-8">
                      <p className="text-sm font-sp-pro-text-medium">
                        CertLock Project
                      </p>
                      {/* option */}
                      <div className="dropdown dropdown-right cursor-pointer bg-background-color">
                        <label tabIndex={0} className="cursor-pointer">
                          <p className="text-[12px] text-https-iconColor border px-2 py-0.5 rounded-xl">
                            Active
                          </p>
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52 px-4 py-4 bg-background-color"
                        >
                          <li>
                            <div className="flex gap-x-3 font-sp-pro-text-medium pb-3">
                              <MdChangeCircle
                                size={18}
                                className="text-primary"
                              />
                              <p>Change logo</p>
                            </div>
                          </li>
                          <li>
                            <div className="flex gap-x-3 font-sp-pro-text-medium pb-3">
                              <RiFileCopy2Fill
                                size={18}
                                className="text-primary"
                              />
                              <p>
                                Code:{" "}
                                <span className="font-sp-pro-text-semibold">
                                  ZXF123
                                </span>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="flex gap-x-3 font-sp-pro-text-medium ">
                              <BsTrash3 size={16} className="text-red-button" />
                              <p>Delete</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* card 1 */}
                  <div className=" w-1/2 h-20 rounded-lg border border-border-color border-.5">
                    <div className="flex justify-between p-8">
                      <p className="text-sm font-sp-pro-text-medium">
                        KSHRD Project
                      </p>
                      {/* option */}
                      <div className="dropdown dropdown-right cursor-pointer bg-background-color">
                        <label tabIndex={0} className="cursor-pointer">
                          <p className="text-[12px] text-https-iconColor border px-2 py-0.5 rounded-xl">
                            Active
                          </p>
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52 px-4 py-4 bg-background-color"
                        >
                          <li>
                            <div className="flex gap-x-3 font-sp-pro-text-medium pb-3">
                              <MdChangeCircle
                                size={18}
                                className="text-primary"
                              />
                              <p>Change logo</p>
                            </div>
                          </li>
                          <li>
                            <div className="flex gap-x-3 font-sp-pro-text-medium pb-3">
                              <RiFileCopy2Fill
                                size={18}
                                className="text-primary"
                              />
                              <p>
                                Code:{" "}
                                <span className="font-sp-pro-text-semibold">
                                  ZXF123
                                </span>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="flex gap-x-3 font-sp-pro-text-medium ">
                              <BsTrash3 size={16} className="text-red-button" />
                              <p>Delete</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="flex justify-center pt-10">see more</p>
            </div>

            {/* joined project */}
            <div className=" h-auto text-text-color p-3">
              <div className="flex justify-between pb-8">
                <p className="text-lg  font-sp-pro-text-medium pb-4 ">
                  Member joined projects
                </p>
              </div>

              <div className="flex flex-col gap-y-5 font-sp-pro-text-medium">
                <div className="flex justify-between">
                  <div className="flex gap-x-5 ">
                    <img src={userPf1} alt="" className="h-12" />
                    <div className="flex flex-col ">
                      <p className="">Somnag P.</p>
                      <p className="text-[12px]">Awsome work, Can you..</p>
                    </div>
                  </div>
                  <p className="font-sp-pro-text-semibold text-red-button">
                    Remove
                  </p>
                </div>

                {/* 2 */}
                <div className="flex justify-between">
                  <div className="flex gap-x-5 ">
                    <img src={userPf3} alt="" className="h-12" />
                    {/* <div className="h-12 w-12 bg-red-700 rounded-full"></div> */}
                    <div className="flex flex-col ">
                      <p className="">Somnag P.</p>
                      <p className="text-[12px]">Awsome work, Can you..</p>
                    </div>
                  </div>
                  <p className="font-sp-pro-text-semibold text-red-button">
                    Remove
                  </p>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-x-5 ">
                    <img src={userPf2} alt="" className="h-12" />
                    <div className="flex flex-col ">
                      <p className="">Somnag P.</p>
                      <p className="text-[12px]">Awsome work, Can you..</p>
                    </div>
                  </div>
                  <p className="font-sp-pro-text-semibold text-red-button">
                    Remove
                  </p>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-x-5 ">
                    <img src={userPf4} alt="" className="h-12" />
                    <div className="flex flex-col ">
                      <p className="">Somnag P.</p>
                      <p className="text-[12px]">Awsome work, Can you..</p>
                    </div>
                  </div>
                  <p className="font-sp-pro-text-semibold text-red-button">
                    Remove
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingPage;
