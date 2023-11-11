import React from "react";
import logo from "../../../src/assets/logo/white_logo_nobackground.png";
import iconDoc from "../../assets/icon/navbarAuth/Document.svg";
import iconSpp from "../../assets/icon/navbarAuth/User.svg";
import { NavLink } from "react-router-dom";

function NavbarAuth() {
  return (
    <div className="fixed z-50 flex w-screen px-12 py-8 lg:py-6   justify-between items-centerpx-14  text-18px  text-accent bg-[#] font-sp-pro-text-regular">
      <div className="flex w-[300px] justify-between items-center">
        <NavLink to={"/"}>
          <div className="flex items-center 2xl:w-[16rem]  xl:w-[12rem] lg:flex-shrink-0 invisible lg:visible p-2 cursor-pointer">
            <img src={logo} alt="" className="2xl:w-[50px] 2xl:h-[50px] xl:w-[40px] xl:h-[40px] w-[30px] h-[30px]" />
            <h1 className="text-center 2xl:text-2xl xl:text-xl font-semibold ml-4 text-background-color font-sp-pro-text-bold">
              AutoPilot
            </h1>
          </div>
        </NavLink>

        {/* Document */}
        <div className="relative">
          <ul className="flex justify-center items-center 2xl:gap-x-12 xl:gap-x-10 font-sp-pro-text-semibold 2xl:text-[14px] xl:text-sm cursor-pointer text-background-color">
            <li className="hover:text-secondary">
              <span className="flex gap-x-2 items-center transition hover:duration-300 2xl:text-[16px] xl:text-[14px]">
                <img src={iconDoc} alt="" className="2xl:h-4  xl:h-3" />
                Document
              </span>
            </li>
            <NavLink to={"/support"}>
              <li className="hover:text-secondary transition hover:duration-300 ">
                <span className="flex gap-x-2 items-center 2xl:text-[16px] xl:text-[14px]">
                  <img src={iconSpp} alt="" className="2xl:h-4  xl:h-3" />
                  Support
                </span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
      {/* sign in sign up */}
      <div className="text-[14px] ">
        <ul className="flex justify-center items-center gap-x-8 text-background-color font-sp-pro-text-semibold transition duration-0 hover:duration-300 cursor-pointer  ">
          <NavLink to={"/signin"}>
            <li className="2xl:py-2 2xl:px-62 py-2 px-6 hover:text-secondary cursor-pointer transition hover:duration-300 text-[16px] lg:text-[14px]">
              Sign in
            </li>
          </NavLink>

          <NavLink to={"/signup"}>
            {/* <li className="outline outline-[1.8px] py-2 px-6  rounded-2xl hover:outline-none hover:text-white hover:bg-pending-hover  transition duration-0 hover:duration-300 cursor-pointer ">
              Sign up
            </li> */}
            <li class="group relative 2xl:py-1 xl:py-1 2xl:px-6 xl:px-5 overflow-hidden  text-center items-center text-lg outline outline-2 rounded-3xl hover:outline-none ">
              <div class="absolute inset-0 w-[0.1px] bg-white  transition-all duration-[300ms] ease-out group-hover:w-full"></div>
              <span class="relative text-background-color group-hover:text-primary text-[16px] lg:text-[14px]">
                Sign up
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default NavbarAuth;
