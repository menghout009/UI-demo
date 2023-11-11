import React, { useEffect, useState } from "react";
import TickLogo from "../../../assets/images/tickLogo.svg";
import reactLogo from "../../../assets/icon/DashboardPageLogo/languages/react.svg";
import springLogo from "../../../assets/icon/DashboardPageLogo/languages/spring.svg";
import angularLogo from "../../../assets/icon/DashboardPageLogo/languages/angular.svg";
import btnEdit from "../../../assets/icon/DashboardPageLogo/languages/editIcon.svg";
import btnDelete from "../../../assets/icon/DashboardPageLogo/languages/deleteIcon.svg";
import failLogo from "../../../assets/icon/DashboardPageLogo/languages/fail.svg";
import { SlOptions } from "react-icons/sl";
import { SlLockOpen } from "react-icons/sl";
import DeleteDeployment from "../../popups/dashboardPopup/DeleteDeployment";
import PaginationControlled from "./PaginationControlled";

function DisplayDeploymentTable({ deployments, setDeployments }) {
  // let data = JSON.parse(localStorage.getItem("deployments"));
  // const [data, setData] = useState([
  //   // {
  //   //   id: "1",
  //   //   applicationName: "my reactApp",
  //   //   languages: "ReactJS",
  //   //   logoLanguages: reactLogo,
  //   //   ipaddress: "192.74.193.125:3000",
  //   //   domain: <SlOptions size={18} />,
  //   //   https: <SlLockOpen size={20} />,
  //   //   status: TickLogo,
  //   //   actionEdit: btnEdit,
  //   //   actionDelete: btnDelete,
  //   // },
  //   // {
  //   //   id: "2",
  //   //   applicationName: "Spring App",
  //   //   languages: "Spring",
  //   //   logoLanguages: springLogo,
  //   //   ipaddress: "192.74.193.125:3000",
  //   //   domain: <SlOptions size={18} />,
  //   //   https: <SlLockOpen size={20} />,
  //   //   status: TickLogo,
  //   //   actionEdit: btnEdit,
  //   //   actionDelete: btnDelete,
  //   // },
  //   // {
  //   //   id: "3",
  //   //   applicationName: "Angular App",
  //   //   languages: "Angular",
  //   //   logoLanguages: angularLogo,
  //   //   ipaddress: "192.74.193.125:3000",
  //   //   domain: <SlOptions size={18} />,
  //   //   https: <SlLockOpen size={20} />,
  //   //   status: TickLogo,
  //   //   actionEdit: btnEdit,
  //   //   actionDelete: btnDelete,
  //   // },
  //   // {
  //   //   id: "4",
  //   //   applicationName: "Test ReactApp",
  //   //   languages: "ReactJS",
  //   //   logoLanguages: reactLogo,
  //   //   ipaddress: "192.74.193.125:3000",
  //   //   domain: <SlOptions size={18} />,
  //   //   https: <SlLockOpen size={20} />,
  //   //   status: TickLogo,
  //   //   actionEdit: btnEdit,
  //   //   actionDelete: btnDelete,
  //   // },
  //   // {
  //   //   id: "5",
  //   //   applicationName: "Angular App",
  //   //   languages: "Angular",
  //   //   logoLanguages: angularLogo,
  //   //   ipaddress: "192.74.193.125:3000",
  //   //   domain: <SlOptions size={18} />,
  //   //   https: <SlLockOpen size={20} />,
  //   //   status: TickLogo,
  //   //   actionEdit: btnEdit,
  //   //   actionDelete: btnDelete,
  //   // },
  //   // {
  //   //   id: "6",
  //   //   applicationName: "Test ReactApp",
  //   //   languages: "ReactJS",
  //   //   logoLanguages: reactLogo,
  //   //   ipaddress: "192.74.193.125:3000",
  //   //   domain: <SlOptions size={18} />,
  //   //   https: <SlLockOpen size={20} />,
  //   //   status: TickLogo,
  //   //   actionEdit: btnEdit,
  //   //   actionDelete: btnDelete,
  //   // },
  // ]);

  // localStorage.setItem('deployments', JSON.stringify(deployments));

  const [isId, setisId] = useState();
  // ------------------------------------
  const [isDeleteDeploy, setDeleteDeploy] = useState(false);
  function openModal(id) {
    setDeleteDeploy(true);
    setisId(id);
  }

  // const data = JSON.parse(localStorage.getItem('deployments'));

  return (
    <div className="flex flex-col gap-y-6 font-sp-pro-text-regular">
      {/*  Table */}
      <div>
        <table className="w-full text-sm text-left table-auto ">
          <thead className="font-sp-pro-text-regular text-text-color capitalize bg-deployment-bgColor  rounded-md">
            <tr>
              <th scope="col" className="px-6 py-6">
                No.
              </th>
              <th scope="col" className="px-14 py-6">
                Deployment
              </th>
              <th scope="col" className="px-16 py-6">
                Framework
              </th>
              <th scope="col" className="px-16 py-6">
                IP Address
              </th>
              <th scope="col" className="px-20 py-6">
                Domain
              </th>
              <th className="px-10">HTTPS</th>
              <th scope="col" className="px-10 py-6 text-center">
                Status
              </th>
              <th scope="col" className="px-16 py-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="font-sp-pro-text-regular">
            {deployments?.map((item, key) => (
              <tr
                className={
                  key % 2 === 0 ? "bg-white border" : "bg-[#f4f7fa] border"
                }
                key={key}
              >
                <td className="px-6 py-3 font-medium text-myText whitespace-nowrap">
                  {item?.id}
                </td>
                <td className="px-14 py-3">{item?.applicationName}</td>
                <td className="px-10 py-3 ">
                  <div className="flex fle-row items-center gap-x-3">
                    <img
                      src={item?.logoLanguages}
                      alt=""
                      className=" object-scale-down w-[40px] h-[40px] items-center"
                    />
                    <p className="">{item?.languages}</p>
                  </div>
                </td>
                <td className="px-10 py-3"> {item?.ipaddress}</td>
                <td className="px-24 py-3">
                  <span className="text-slate-500 cursor-pointer hover:text-deployment-iconColor">
                  <SlOptions size={18} />
                  </span>
                </td>
                <td className="px-14 py-3">
                  <div className="text-primary cursor-pointer hover:text-https-iconColor">
                  <SlLockOpen size={20} />
                  </div>
                </td>
                <td className="px-10 py-3">
                  <div className="text-white flex justify-center items-center mr- p-2">
                    <img className="h-5" src={TickLogo} alt="" />
                  </div>
                </td>
                <td className="px-16 py-3">
                  <div className="flex flex-row gap-x-6">
                    <div
                      className="hover:bg-red-200 py-2 px-2 rounded-full cursor-pointer"
                      onClick={() => openModal(item?.id)}
                    >
                      <img
                        src={btnDelete}
                        alt=""
                        className=" object-scale-down w-[24px] h-[24px] items-center"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="flex justify-between py-8 px-4">
        <p className="flex justify-center items-center  px-2 text-[14px] font-sp-pro-text-regular">
          Showing data 1 to 7 of all deployment
        </p>
        <div className="flex justify-center items-center">
          <PaginationControlled />
        </div>
      </div> */}

      {/* delete deploy popup */}
      <DeleteDeployment
        isDeleteDeploy={isDeleteDeploy}
        setDeleteDeploy={setDeleteDeploy}
        deployments={deployments}
        setDeployments={setDeployments}
        isId={isId}
      />
    </div>
  );
}

export default DisplayDeploymentTable;
