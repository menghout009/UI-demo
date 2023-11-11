import React, { useState } from "react";
import deploymentDashboard from "../../assets/icon/DashboardPageLogo/databaseDashboard.svg";
import newDatabaseIcon from "../../assets/icon/DashboardPageLogo/PlusDatabase.svg";
import CreateDatabase from "../../pages/database/modalCrateDatabase/CreateDatabase";

function DashboardDatabase() {
  let [isOpenDatabase, setIsOpenDatabase] = useState(false);

  function openModal() {
    setIsOpenDatabase(true);
  }
  return (
    <div className="flex px-10 items-center text-center justify-between h-full w-full gap-x-4">
      <div className="w-[60%] flex flex-col gap-y-5">
        <p className="text-sm text-text-color font-sp-pro-text-semibold">
          Database
        </p>
        <div className="flex justify-center items-center text-secondary space-x-4">
          <h1 className="text-2xl font-sp-pro-text-bold">0</h1>
          <p className="text-xl font-sp-pro-text-bold">Applications</p>
        </div>

        {/* create model */}
        <div className="flex justify-center items-center text-database-iconColor space-x-3 mr-12 cursor-pointer" onClick={openModal}>
          <img src={newDatabaseIcon} alt="" className="h-5 hover:animate-ping" />
          <p className="text-lg font-sp-pro-text-semibold">Database</p>
        </div>
      </div>

      {/* img */}
      <div className="w-[40%] flex justify-center items-center ml-3 ">
        <img src={deploymentDashboard} alt="" className="hover:animate-pulse cursor-pointer" />
      </div>

      {/* form  */}
      <CreateDatabase
        isOpenDatabase={isOpenDatabase}
        setIsOpenDatabase={setIsOpenDatabase}
      />
    </div>
  );
}

export default DashboardDatabase;
