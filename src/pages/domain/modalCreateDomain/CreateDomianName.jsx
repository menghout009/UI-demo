import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import deploymentDashboard from "../../../assets/icon/DashboardPageLogo/dpmainDashboard.svg";
import { BsDatabaseAdd } from "react-icons/bs";
import { Listbox } from "@headlessui/react";
import SelectAppSetDomain from "./SelectAppSetDomain";
import DoneCreateDomain from "../../../components/popups/donePopup/DoneCreateDomain";

function CreateDomianName({ isOpenDomain, setIsDomain }) {
  function closeModal() {
    setIsDomain(false);
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

  return (
    <>
      <Transition appear show={isOpenDomain} as={Fragment}>
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
                        Setup Domain
                      </h1>
                      <img
                        src={deploymentDashboard}
                        alt=""
                        className="h-8 mt-2 "
                      />
                    </div>
                  </Dialog.Title>
                  {/* Form Create Deployment */}
                  <form className="flex flex-col gap-y-7 text-text-color p-6 ">
                    <div className="flex flex-col gap-y-3">
                      <label className="">Domain Name</label>
                      <input
                        type="text"
                        name="domainname"
                        placeholder="Enter domain name"
                        className="outline outline-1 outline-[#E2E8F0] bg-background-color focus:outline-primary focus:ring-primary  px-5 py-2 rounded-md placeholder:text-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-y-3">
                      <label className="">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className=" outline outline-1 outline-[#E2E8F0] bg-background-color focus:outline-primary focus:ring-primary  px-5 py-2 rounded-md placeholder:text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <label className="">
                        Choose deployment for set Domain
                      </label>
                      <SelectAppSetDomain />
                    </div>

                    <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary pb-6">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-pending-hover  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-sp-pro-text-medium">
                          Add HTTPS with Domain name
                        </span>
                      </label>
                      <p className="mt-6 text-sm">
                        Note: Please add IP:{" "}
                        <span className="text-primary font-sp-pro-text-medium ">110.192.125</span> to
                        your domain name dashoard and choose type A record
                      </p>
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
                      onClick={handleClick}
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

      <DoneCreateDomain isDoneCreate={isDoneCreate} setDoneCreate={setDoneCreate}/>
      
    </>
  );
}

export default CreateDomianName;
