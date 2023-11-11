import React from "react";
import iconMail from "../../../assets/icon/Mail.svg";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../components/Logo";

function EmailSending() {
  return (
    <div>
      <NavLink to={"/signin"}>
        <Logo />
      </NavLink>

      <div className="h-screen flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0 bg-background-color">
        <div className="w-full p-10 bg-white shadow-md md:mt-0 sm:max-w-md sm:p-8 rounded-xl">
          <div className="m-auto">
            <div className="flex justify-center">
              <img src={iconMail} width={80} height={80} alt="" />
            </div>
            <h2 className="mb-1 text-xl font-sp-pro-text-semibold leading-tight text-primary md:text-2xl text-center pt-4">
              Check your email
            </h2>
            <p className="text-center text-sm text-text-color font-sp-pro-text-regular pt-1 pb-1">
              We send a password reset link to
            </p>
            <p className="text-center text-sm text-text-color font-sp-pro-text-regular pb-6">
              sokphakphol@gmail.com
            </p>
            <div className="py-5">
              <NavLink
                to={"/reset-password"}
                className="hover:bg-blue-500 font-sp-pro-text-semibold flex justify-center gap-3 w-full text-center rounded bg-primary px-7 pt-3 pb-2.5 text-sm  text-white"
              >
                {/* <BiArrowBack className="text-xl" /> */}
                Continue
              </NavLink>
            </div>
            <p className="mt-2 mb-0 pt-1  text-center text-text-color">
              Din't recieve the email ?
              <button className="pl-3 text-primary hover:text-pending-hover font-sp-pro-text-semibold">Click to resend</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSending;
