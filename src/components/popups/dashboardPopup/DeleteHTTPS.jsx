import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import deleteIcon from "../../../assets/popup-icon/Delete2.svg";

export default function DeleteHTTPS({
  isDeleteHTTPS,
  setDeleteHTTPS,
  data,
  setData,
  isId,
}) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setDeleteHTTPS(false);
  }
  const handleDelete = () => {
    const newData = data.filter((d) => d.id !== isId);
    setData(newData);
    closeModal()
  };
  return (
    <>
      <Transition appear show={isDeleteHTTPS} as={Fragment}>
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
                          Are you sure to delete ?
                        </p>
                        <p className="text-sm">
                          Remove HTTPS from <span>AutopilotReact</span>{" "}
                          deployment{" "}
                          <span className="font-bold text-xl text-yellow-500">
                            !
                          </span>
                        </p>
                      </div>

                      <div className="font-sp-pro-text-regular flex gap-x-10 justify-center py-3 mt-8">
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
                          className="inline-flex  text-sm rounded-md border border-transparent bg-[#FFC5C5] outline-1 outline outline-red-button 
                            px-7 py-1.5 text-red-600 font-sp-pro-text-medium hover:bg-[#EE1D52] focus:outline-none hover:text-white"
                            onClick={() => handleDelete()}
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
