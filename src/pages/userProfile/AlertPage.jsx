import React, { useState } from "react";

import alertDashboard from "../../assets/icon/DashboardPageLogo/alert.svg";
import { TbBellPlus } from "react-icons/tb";
import CreateNewAlert from "./modalCreateAlert/CreateNewAlert";
import DisplayAlertNotification from "../../components/dashboardPageComponents/displayTableList/DisplayAlertNotification";
import notificationIcon from "../../assets/popup-icon/notification.svg";
import PaginationControlled from "../../components/dashboardPageComponents/displayTableList/PaginationControlled";




function AlertPage() {
  let [isOpenAlert, setAlert] = useState(false);

  function openModal() {
    setAlert(true);
  }
  return (
    <>
      <div className="py-6 flex justify-between  px-6 mt-6">
        <div className="flex px-2 gap-x-2 pb-8">
          <h1 className="font-sp-pro-text-semibold text-xl text-secondary mt-2 pr-2">
            Notification
          </h1>
          <img src={notificationIcon} alt="" className="h-10 mt-1 " />
        </div>
        <div className="flex gap-x-6">
          {/* search */}
          <div className="md:flex md:flex-row justify-start gap-10">
            <div className="mb-4 md:mb-0 lg:mb-0 xl:mb-0">
              <div className="relative text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  bg-[#F9FBFF]  border rounded-lg block w-full py-2 px-1 mb-1 ">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <svg
                    className="w-5 h-5 text-primary"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  className="w-full pl-10 pr-2 bg-transparent text-text-color placeholder-text-color placeholder:font-sp-pro-text-regular  border-0 rounded-md  focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                  type="text"
                  name="search"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
          <div className="mr-4">
            <div className="">
              <button
                onClick={openModal}
                type="button"
                class="py-2 px-5 mr-2 mb-2 text-sm font-sp-pro-text-regular
                 text-primary focus:outline-none bg-white rounded-xl border border-primary hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-primary  transition-none"
              >
                <div className="flex gap-x-2">
                  <TbBellPlus size={20} className="" />
                  <p className="font-sp-pro-text-medium"> Create Alert</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* form  */}
      <CreateNewAlert isOpenAlert={isOpenAlert} setAlert={setAlert} />

      <div className="px-8 mt-4">
        <DisplayAlertNotification />
      </div>

      <div className="flex justify-between py-8 px-10 absolute bottom-0 w-[98%]">
          <p className="flex justify-center items-center text-[14px] font-sp-pro-text-regular">
            Showing data 1 to 7 of all deployment
          </p>
          <div className="">
            <PaginationControlled />
          </div>
        </div>

    </>
  );
}

export default AlertPage;
