import React, { useState } from "react";
import httpsDashboard from "../../assets/icon/DashboardPageLogo/httpsDashboard.svg";
import newHTTPSIcon from "../../assets/icon/DashboardPageLogo/PlusHTTPS.svg";
import CreateHTTPS from "../../pages/HTTPS/modalCreateHTTPS/CreateHTTPS";

function DashboardHTTPS() {
  let [isOpenHTTPS, setHTTPS] = useState(false);

  function openModal() {
    setHTTPS(true);
  }
  return (
    <div className="flex px-10 items-center text-center justify-between h-full w-full gap-x-4">
      <div className="w-[60%] flex flex-col gap-y-5">
        <p className="text-sm text-text-color font-sp-pro-text-semibold">
          HTTPS
        </p>
        <div className="flex justify-center items-center text-secondary space-x-4">
          <h1 className="text-2xl font-sp-pro-text-bold">0</h1>
          <p className="text-xl font-sp-pro-text-bold">Applications</p>
        </div>

        {/* create model */}
        <div className="flex justify-center items-center text-https-iconColor space-x-3 mr-16 cursor-pointer" onClick={openModal}>
          <img src={newHTTPSIcon} alt="" className="h-5 hover:animate-ping" />
          <p className="text-lg font-sp-pro-text-semibold ">HTTPS</p>
        </div>
      </div>

      {/* img */}
      <div className="w-[40%] flex justify-center items-center ml-3">
        <img src={httpsDashboard} alt="" className="animate-none" />
      </div>

      {/* form  */}
      <CreateHTTPS isOpenHTTPS={isOpenHTTPS} setHTTPS={setHTTPS} />
    </div>
  );
}

export default DashboardHTTPS;
