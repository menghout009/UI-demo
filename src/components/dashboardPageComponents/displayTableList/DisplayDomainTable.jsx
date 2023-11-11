import React, { useState } from "react";
import TickLogo from "../../../assets/images/tickLogo.svg";
import reactLogo from "../../../assets/icon/DashboardPageLogo/languages/react.svg";
import springLogo from "../../../assets/icon/DashboardPageLogo/languages/spring.svg";
import angularLogo from "../../../assets/icon/DashboardPageLogo/languages/angular.svg";
import djangoLogo from "../../../assets/icon/DashboardPageLogo/languages/django.svg";

import btnEdit from "../../../assets/icon/DashboardPageLogo/languages/editIcon.svg";
import btnDelete from "../../../assets/icon/DashboardPageLogo/languages/deleteIcon.svg";
import failLogo from "../../../assets/icon/DashboardPageLogo/languages/fail.svg";

import { TbLockCheck } from "react-icons/tb";
import { SlLockOpen } from "react-icons/sl";
import DeleteDomain from "../../popups/dashboardPopup/DeleteDomain";
import PaginationControlled from "./PaginationControlled";

function DisplayDomainTable() {
  const  [data, setData] = useState([
    {
      id: "1",
      domainName: "www.autopilot.com",
      appName: "autopilot react",
      language: reactLogo,
      connection_host: "192.74.193.125",
      lockHttps: <SlLockOpen size={20} />,
      status: TickLogo,
      actionEdit: btnEdit,
      actionDelete: btnDelete,
    },
    {
      id: "2",
      domainName: "www.fintrack.com",
      appName: "fintrack spring",
      language: springLogo,
      connection_host: "192.74.193.125",
      lockHttps: <SlLockOpen size={20} />,
      status: TickLogo,
      actionEdit: btnEdit,
      actionDelete: btnDelete,
    },
    {
      id: "3",
      domainName: "www.kshrd.com",
      appName: "kshrd angular",
      language: angularLogo,
      connection_host: "192.74.193.125",
      lockHttps: <SlLockOpen size={20} />,
      status: TickLogo,
      actionEdit: btnEdit,
      actionDelete: btnDelete,
    },
    {
      id: "4",
      domainName: "www.kshrd.com",
      appName: "autopilot react",
      language: reactLogo,
      connection_host: "192.74.193.125",
      lockHttps: <SlLockOpen size={20} />,
      status: TickLogo,
      actionEdit: btnEdit,
      actionDelete: btnDelete,
    },
    {
      id: "5",
      domainName: "www.fintrack.com",
      appName: "fintrack django",
      language: djangoLogo,
      connection_host: "192.74.193.125",
      lockHttps: <SlLockOpen size={20} />,
      status: TickLogo,
      actionEdit: btnEdit,
      actionDelete: btnDelete,
    },
    {
      id: "6",
      domainName: "www.kshrd.com",
      appName: "kshrd angular",
      language: angularLogo,
      connection_host: "192.74.193.125",
      lockHttps: <SlLockOpen size={20} />,
      status: TickLogo,
      actionEdit: btnEdit,
      actionDelete: btnDelete,
    },
  ]);

  const [isId,setisId] = useState();

  //  Pop up
  // ------------------------------------
  const [isDeleteDomain, setDeleteDomain] = useState(false);
  function openModal(id) {
    setDeleteDomain(true);
    setisId(id)
  }
  return (
    <div className="flex flex-col gap-y-6 font-sp-pro-text-regular">
      {/*  Table */}
      <div>
        <table className="w-full text-sm text-left table-auto ">
          <thead className="font-sp-pro-text-regular text-text-color capitalize bg-domain-bgColor rounded-xl">
            <tr className="rounded-xl">
              <th scope="col" className="px-6 py-6">
                No.
              </th>
              <th scope="col" className="px-16 py-6">
                DomainName
              </th>
              <th scope="col" className="px-12 py-6 ">
                App Name
              </th>{" "}
              <th scope="col" className="px-16 py-6 ">
                Languages
              </th>
              <th scope="col" className="px-12 py-6">
                IP Address
              </th>
              <th scope="col" className="px-10 py-6">
                HTTPS
              </th>
              <th scope="col" className="px-12 py-6 text-center">
                Status
              </th>
              <th scope="col" className="px-14 py-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="font-sp-pro-text-regular">
            {data?.map((item, key) => (
              <tr
                className={
                  key % 2 === 0 ? "bg-white border" : "bg-[#f4f7fa] border"
                }
              >
                <td className="px-6 py-3 font-medium text-myText whitespace-nowrap">
                  {item?.id}
                </td>
                <td className="px-14 py-3 text-primary">{item?.domainName}</td>
                <td className="px-10 py-3">{item?.appName}</td>
                <td className="px-10 py-3">
                  <div className="text-white flex justify-center items-center  ">
                    <img
                      className="h-10 bg-slate-100 hover:bg-domain-bgColor p-2 rounded-full cursor-pointer"
                      src={item?.language}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-10 py-3"> {item?.connection_host}</td>
                <td className="px-12 py-3">
                  <span className="text-primary">{item?.lockHttps}</span>
                </td>

                <td className="px-10 py-3">
                  <div className="text-white flex justify-center items-center p-3 ">
                    <img
                      className="h-5 hover:bg-database-bgColor hover:rounded-full cursor-pointer"
                      src={item?.status}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-12 py-3">
                  <div className="flex flex-row gap-x-4">
                    <div
                      className="hover:bg-red-200 py-2 px-2 rounded-full cursor-pointer"
                      onClick={() => openModal(item?.id)}
                    >
                      <img
                        src={item?.actionDelete}
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



      {/* popup delete */}
      <DeleteDomain
        isDeleteDomain={isDeleteDomain}
        setDeleteDomain={setDeleteDomain}
        data={data} 
        setData={setData}
        isId={isId}
      />
    </div>
  );
}

export default DisplayDomainTable;
