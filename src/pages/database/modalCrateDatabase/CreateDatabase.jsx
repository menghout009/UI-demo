import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import deploymentDashboard from "../../../assets/icon/DashboardPageLogo/databaseDashboard.svg";
import { BsDatabaseAdd } from "react-icons/bs";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import SelectTypeDatabase from "./SelectTypeDatabase";
import DoneCreateDatabase from "../../../components/popups/donePopup/DoneCreateDatabase";
import btnEdit from "../../../assets/icon/DashboardPageLogo/languages/editIcon.svg";
import btnDelete from "../../../assets/icon/DashboardPageLogo/languages/deleteIcon.svg";
import failLogo from "../../../assets/icon/DashboardPageLogo/languages/fail.svg";
import postgresLogo from "../../../assets/icon/DashboardPageLogo/databaseDisplayIcon/postgres.svg";
import mysqlLogo from "../../../assets/icon/DashboardPageLogo/databaseDisplayIcon/mysql.svg";
import mongoLogo from "../../../assets/icon/DashboardPageLogo/databaseDisplayIcon/mongodb.svg";
import TickLogo from "../../../assets/images/tickLogo.svg";

function CreateDatabase({
  isOpenDatabase,
  setIsOpenDatabase,
  databases,
  setDatabases,
}) {
  const [formData, setFormData] = useState({
    databasename: "",
    username: "",
    password: "",
  });
  const [selectDatabase, setSelectDatabase] = useState();

  function closeModal() {
    setIsOpenDatabase(false);
  }

  function selectTypeDatabase(selectDatabase) {
    setSelectDatabase(selectDatabase);
  }

  // pop up done
  let [isDoneCreate, setDoneCreate] = useState(false);

  function openDoneCreate() {
    setDoneCreate(true);
  }

  const handleClick = () => {
    // Call both actions when the button is clicked
    closeModal();
    openDoneCreate();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createDatabase = () => {
    setDatabases([
      ...databases,
      {
        ...formData,
        id: databases.length + 1,
        connection_host: "192.74.193.125",
        type: selectDatabase.logo,
        port: "5432",
        status: TickLogo,
        actionEdit: btnEdit,
        actionDelete: btnDelete,
      },
    ]);
    closeModal();
    openDoneCreate();
  };

  return (
    <>
      <Transition appear show={isOpenDatabase} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl h-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex  w-80 text-center gap-x-2 p-4">
                      <h1 className="font-sp-pro-text-semibold text-2xl text-secondary mt-2">
                        Create Database
                      </h1>
                      <img
                        src={deploymentDashboard}
                        alt=""
                        className="h-8 mt-2"
                      />
                    </div>
                  </Dialog.Title>
                  {/* Form Create Deployment */}
                  <form className="flex flex-col gap-y-7 text-text-color p-6 ">
                    <div className="flex flex-col gap-y-3">
                      <label className="">Database Name</label>
                      <input
                        type="text"
                        name="databasename"
                        placeholder="database name"
                        className="outline outline-1 outline-[#E2E8F0] bg-background-color focus:outline-primary focus:ring-primary  px-5 py-2 rounded-md placeholder:text-sm"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <label className="">Select type Database</label>
                      <SelectTypeDatabase
                        selectTypeDatabase={selectTypeDatabase}
                      />
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <label className="">Username</label>
                      <input
                        type="text"
                        name="username"
                        placeholder="username"
                        className="outline outline-1 outline-[#E2E8F0] bg-background-color focus:outline-primary focus:ring-primary  px-5 py-2 rounded-md placeholder:text-sm"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <label className="">Password</label>
                      <input
                        type="text"
                        name="password"
                        placeholder="password"
                        className="outline outline-1 outline-[#E2E8F0] bg-background-color focus:outline-primary focus:ring-primary  px-5 py-2 rounded-md placeholder:text-sm"
                        onChange={handleChange}
                      />
                    </div>
                  </form>

                  <div className="mt-4 pb-4 flex justify-end items-center gap-x-5 font-sp-pro-text-regular">
                    <button
                      type="button"
                      className="inline-flex  text-sm rounded-md border border-transparent outline outline-1
                           outline-border-color  px-7 py-1.5 text-text-color font-sp-pro-text-medium hover:bg-slate-100"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex  text-sm rounded-md border border-transparent outline outline-1
                      outline-border-color bg-primary px-7 py-1.5 text-background-color font-sp-pro-text-medium hover:outline-primary hover:bg-slate-100 hover:text-primary"
                      onClick={createDatabase}
                    >
                      Create
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <DoneCreateDatabase
        isDoneCreate={isDoneCreate}
        setDoneCreate={setDoneCreate}
      />
    </>
  );
}

export default CreateDatabase;
