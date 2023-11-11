import React from "react";
import logo1 from "../assets/logo/logo.svg";


function Logo() {
  return (
    <div className="fixed z-50 flex w-full   justify-between items-center px-14  text-18px  text-accent font-sp-pro-text-regular">
      <div className="flex w-[300px] justify-between items-center">
        <div className="flex items-center w-[16rem] lg:flex-shrink-0 invisible lg:visible p-2 cursor-pointer">
          <img src={logo1} alt="" width={100} height={80} />
          <h1 className="text-center text-2xl font-semibold pt-3 text-text-color">
            Auto<span className="text-primary">Pilot</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Logo;
