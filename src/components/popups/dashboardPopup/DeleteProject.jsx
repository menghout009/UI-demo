import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import deleteIcon from "../../../assets/popup-icon/Delete2.svg";
import { useDispatch } from "react-redux";
import { removeProject } from "../../../redux/service/projectService";

export default function DeleteProject({
    isDeleteProject,
    setDeleteProject,
    projectId
}) {
//   let [isOpen, setIsOpen] = useState(true);
const dispatch=useDispatch();
  function deleteCloseModal() {
    dispatch(removeProject(projectId))
    setDeleteProject(false);
  }
  function cencelCloseModal() {
   
    setDeleteProject(false);
  }

  // console.log(newData)

  return (
    <>
      <Transition appear show={isDeleteProject} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={cencelCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full font-sp-pro-text-regular max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <div className="flex flex-col  text-text-color ">
                      <div className="flex justify-center ">
                        <img src={deleteIcon} alt="" className="h-24" />
                      </div>
                      <div className="text-center flex flex-col gap-y-2 text-text-color">
                        <p className="font-sp-pro-text-semibold">
                          Are you sure to delete Project ?
                        </p>
                        <p className="text-sm">
                          All deployment in project will be delete .
                        </p>
                      </div>

                      <div className="font-sp-pro-text-regular flex gap-x-6 justify-center py-3 mt-8">
                        <button
                          type="button"
                          className="inline-flex  text-sm rounded-md border border-transparent outline outline-1
                           outline-border-color  px-7 py-1.5 text-text-color font-sp-pro-text-medium hover:bg-slate-100"
                          onClick={cencelCloseModal}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="inline-flex  text-sm rounded-md border border-transparent bg-[#FFC5C5] outline-1 outline outline-red-button 
                            px-7 py-1.5 text-red-600 font-sp-pro-text-medium hover:bg-[#EE1D52] focus:outline-none hover:text-white"
                          onClick={deleteCloseModal}
                          data-te-ripple-init
                          data-te-ripple-color="red"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
