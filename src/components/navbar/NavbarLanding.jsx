import React from "react";
import logo from "../../../src/assets/logo/auto-pilot_no_bg1.png";
import iconDoc from "../../assets/icon/Document.svg";
import iconSpp from "../../assets/icon/User.svg";
import { NavLink } from "react-router-dom";

function NavbarLanding() {
  return (
    <div className="fixed z-50 flex w-full   justify-between items-center px-14  text-18px  text-accent bg-background-color shadow font-sp-pro-text-regular py-2">
      <div className="flex w-[300px] justify-between items-center">
        <NavLink to={"/"}>
          <div className="flex items-center w-[16rem] lg:flex-shrink-0 invisible lg:visible p-2 cursor-pointer">
            <img src={logo} alt="" className="w-[50px] h-[50px]" />
            <h1 className="text-center text-2xl font-semibold ml-4 text-text-color">
              Auto<span className="text-primary">Pilot</span>
            </h1>
          </div>
        </NavLink>

        {/* Document */}
        <div className="relative">
          <ul className="flex justify-center items-center gap-x-8 font-sp-pro-text-semibold text-[14px] cursor-pointer  text-text-color">
            <li className="hover:text-primary">
              <span className="flex gap-x-2 items-center text-lg lg:text-[14px]">
                <img src={iconDoc} alt="" className="w-12 h-5" />
                Document
              </span>
            </li>
            <NavLink to={"/support"}>
              <li className="hover:text-primary transition hover:duration-300 text-lg lg:text-[14px]">
                <span className="flex gap-x-2 items-center">
                  <img src={iconSpp} alt="" className="w-12 h-6" />
                  Support
                </span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>

      {/* sign in sign up */}
      <div className="text-[14px] ">
        <ul className="flex justify-center items-center gap-x-8  font-sp-pro-text-semibold transition duration-0 hover:duration-300 cursor-pointer  ">
          <NavLink to={"/signin"}>
            <li className="text-primary py-2 px-6 hover:text-secondary cursor-pointer transition hover:duration-300 text-[16px] lg:text-[14px]">
              Sign in
            </li>
          </NavLink>

          <NavLink to={"/signup"}>
            {/* <li className="outline outline-[1.8px] py-2 px-6  rounded-2xl hover:outline-none hover:text-white hover:bg-pending-hover  transition duration-0 hover:duration-300 cursor-pointer ">
              Sign up
            </li> */}
            <li class="group relative py-1 px-6 overflow-hidden  text-center items-center text-lg outline-primary outline outline-2 rounded-3xl hover:outline-none ">
              <div class="absolute inset-0 w-[0.1px] bg-primary  transition-all duration-[300ms] ease-out group-hover:w-full"></div>
              <span class="relative text-primary group-hover:text-white text-[16px] lg:text-[14px]">
                Sign up
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default NavbarLanding;
