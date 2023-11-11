import React, { useState } from "react";
import TickLogo from "../../../assets/images/tickLogo.svg";

import btnEdit from "../../../assets/icon/DashboardPageLogo/languages/editIcon.svg";
import btnDelete from "../../../assets/icon/DashboardPageLogo/languages/deleteIcon.svg";
import failLogo from "../../../assets/icon/DashboardPageLogo/languages/fail.svg";
import postgresLogo from "../../../assets/icon/DashboardPageLogo/databaseDisplayIcon/postgres.svg";
import mysqlLogo from "../../../assets/icon/DashboardPageLogo/databaseDisplayIcon/mysql.svg";
import mongoLogo from "../../../assets/icon/DashboardPageLogo/databaseDisplayIcon/mongodb.svg";
import DeleteDatabase from "../../popups/dashboardPopup/DeleteDatabase";
import PaginationControlled from "./PaginationControlled";

function DisplayDatabaseTable({databases, setDatabases}) {
  // const  [data, setData] = useState([
  //   {
  //     id: "1",
  //     databasename: "autopilot DB",
  //     username: "postgrest",
  //     password: "123456",
  //     connection_host: "192.74.193.125",
  //     type: postgresLogo,
  //     port: "5432",
  //     status: TickLogo,
  //     actionEdit: btnEdit,
  //     actionDelete: btnDelete,
  //   },
  //   {
  //     id: "2",
  //     databasename: "fintrack DB",
  //     connection_host: "192.74.193.125",
  //     type: mysqlLogo,
  //     username: "mysql",
  //     password: "123456",
  //     port: "5432",
  //     status: TickLogo,
  //     actionEdit: btnEdit,
  //     actionDelete: btnDelete,
  //   },
  //   {
  //     id: "3",
  //     databasename: "KSHRD DB",
  //     connection_host: "192.74.193.125",
  //     type: mongoLogo,
  //     username: "mongo",
  //     password: "123456",
  //     port: "5432",
  //     status: TickLogo,
  //     actionEdit: btnEdit,
  //     actionDelete: btnDelete,
  //   },
  //   {
  //     id: "4",
  //     databasename: "autopilot DB",
  //     username: "postgrest",
  //     password: "123456",
  //     connection_host: "192.74.193.125",
  //     type: postgresLogo,
  //     port: "5432",
  //     status: TickLogo,
  //     actionEdit: btnEdit,
  //     actionDelete: btnDelete,
  //   },
  //   {
  //     id: "5",
  //     databasename: "fintrack DB",
  //     connection_host: "192.74.193.125",
  //     type: mysqlLogo,
  //     username: "mysql",
  //     password: "123456",
  //     port: "5432",
  //     status: failLogo,
  //     actionEdit: btnEdit,
  //     actionDelete: btnDelete,
  //   },
  //   {
  //     id: "6",
  //     databasename: "KSHRD DB",
  //     connection_host: "192.74.193.125",
  //     type: mongoLogo,
  //     username: "mongo",
  //     password: "123456",
  //     port: "5432",
  //     status: TickLogo,
  //     actionEdit: btnEdit,
  //     actionDelete: btnDelete,
  //   },
  // ]);


  const [isId,setisId] = useState();
  //  Pop up
  // ------------------------------------
  const [isDeleteDatabase, setDeleteDatabase] = useState(false);
  function openModal(id) {
    setDeleteDatabase(true);
    setisId(id)
  }
  return (
    <div className="flex flex-col gap-y-6 font-sp-pro-text-regular">
      {/*  Table */}
      <div>
        <table className="w-full text-sm text-left table-auto  rounded-sm">
          <thead className="font-sp-pro-text-regular text-text-color capitalize bg-database-bgColor  rounded-sm">
            <tr className="rounded-lg">
              <th scope="col" className="px-6 py-6 ">
                No.
              </th>
              <th scope="col" className="px-14 py-6">
                DatabaseName
              </th>
              <th scope="col" className="px-14 py-6 ">
                ConnectionHost
              </th>
              <th scope="col" className="px-14 py-6">
                Type
              </th>
              <th scope="col" className="px-9 py-6">
                Username
              </th>
              <th scope="col" className="px-8 py-6">
                Password
              </th>
              <th scope="col" className="px-10 py-6">
                Port
              </th>
              <th scope="col" className="px-12 py-6 text-center">
                Status
              </th>
              <th scope="col" className="px-12 py-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="font-sp-pro-text-regular rounded-sm">
            {databases?.map((item, key) => (
              <tr
                className={
                  key % 2 === 0 ? "bg-white border" : "bg-[#f4f7fa] border"
                }
              >
                <td className="px-6 py-3 font-medium text-myText whitespace-nowrap">
                  {item?.id}
                </td>
                <td className="px-14 py-3 ">{item?.databasename}</td>
                <td className="px-14 py-3">{item?.connection_host}</td>
                <td className="px-14 py-3 cursor-pointer ">
                  <img
                    src={item?.type}
                    alt=""
                    className=" object-scale-down w-[40px] h-[40px] items-center bg-slate-200 rounded-full  hover:bg-database-bgColor "
                  />
                </td>

                <td className="px-10 py-3 ">
                  <p>{item?.username}</p>
                </td>
                <td className="px-10 py-3"> {item?.password}</td>
                <td className="px-10 py-3"> {item?.port}</td>
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
{/* 
      <div className="flex justify-between py-8 px-4">
        <p className="flex justify-center items-center  px-2 text-[14px] font-sp-pro-text-medium">
          Showing data 1 to 7 of all deployment
        </p>
        <div className="flex justify-center items-center">
          <PaginationControlled />
        </div>
      </div> */}

      {/* delete deploy popup */}
      <DeleteDatabase
        isDeleteDatabase={isDeleteDatabase}
        setDeleteDatabase={setDeleteDatabase}
        databases={databases} 
        setDatabases={setDatabases}
        isId={isId}
      />
    </div>
  );
}

export default DisplayDatabaseTable;
