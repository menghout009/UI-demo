import React, { useState } from 'react'
import domainDashboard from "../../assets/icon/DashboardPageLogo/dpmainDashboard.svg";
import newDomainIcon from "../../assets/icon/DashboardPageLogo/PlusDomain.svg";
import CreateDomianName from '../../pages/domain/modalCreateDomain/CreateDomianName';

function DashboardDomain() {
  let [isOpenDomain, setIsDomain] = useState(false);


  function openModal() {
    setIsDomain(true);
  }
  return (
    <div className="flex px-10 items-center text-center justify-between h-full w-full gap-x-4">
      <div className="w-[60%] flex flex-col gap-y-5">
        <p className="text-sm text-text-color font-sp-pro-text-semibold">Domain</p>
        <div className="flex justify-center items-center text-secondary space-x-4">
          <h1 className="text-2xl font-sp-pro-text-bold">0</h1>
          <p className="text-xl font-sp-pro-text-bold">Applications</p>
        </div>

        {/* create model */}
        <div className="flex justify-center items-center hover:text-purple-500 text-domain-iconColor space-x-3 mr-16   cursor-pointer" onClick={openModal}>
          <img src={newDomainIcon} alt="" className="h-5 hover:animate-ping"/>
          <p className="text-lg font-sp-pro-text-semibold ">Domain</p>
        </div>
      </div>

      {/* img */}
      <div className="w-[40%] flex justify-center items-center ml-3">
        <img src={domainDashboard} alt="" className="hover:animate-spin cursor-pointer" />
      </div>

      {/* form  */}
      <CreateDomianName
        isOpenDomain={isOpenDomain}
        setIsDomain={setIsDomain}
      />
    </div>
  )
}

export default DashboardDomain
