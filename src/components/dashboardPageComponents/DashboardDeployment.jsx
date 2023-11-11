import React, { useState } from "react";
import deploymentDashboard from "../../assets/icon/DashboardPageLogo/deploymentDashboard.svg";
import newDeployIcon from "../../assets/icon/DashboardPageLogo/PlusDeploy.svg";
import CreateDeployment from "../../pages/deployment/modals/CreateDeployment";

function DashboardDeployment({deployments, setDeployments}) {
  let [isOpenDeploy, setIsOpenDeploy] = useState(false);

  function openModal() {
    setIsOpenDeploy(true);
  }
  return (
    <div className="flex px-10 items-center text-center justify-between h-full w-full gap-x-4">
      <div className="w-[60%] flex flex-col gap-y-5 ">
        <p className="text-sm text-text-color font-sp-pro-text-semibold">
          Deployment
        </p>
        <div className="flex justify-center items-center text-secondary space-x-4">
          <h1 className="text-2xl font-sp-pro-text-bold">0</h1>
          <p className="text-xl font-sp-pro-text-bold">Applications</p>
        </div>

        {/* create model */}
        <div
          className="flex justify-center items-center  text-deployment-iconColor space-x-4 mr-6 cursor-pointer"
          onClick={openModal}
        >
          <img src={newDeployIcon} alt="" className="h-5 hover:animate-ping" />
          <p className="text-lg font-sp-pro-text-semibold">Deployment</p>
        </div>
      </div>

      {/* img */}
      <div className="w-[40%] flex justify-center items-center ">
        <img src={deploymentDashboard} alt="" className=" hover:animate-spin" />
      </div>

      {/* form  */}
      <CreateDeployment
        isOpenDeploy={isOpenDeploy}
        setIsOpenDeploy={setIsOpenDeploy}
        deployments={deployments}
        setDeployments={setDeployments}
      />
    </div>
  );
}

export default DashboardDeployment;
