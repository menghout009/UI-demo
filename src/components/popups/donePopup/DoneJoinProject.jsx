import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import doneIcon from "../../../assets/popup-icon/done.svg";
import teamProjectImg from "../../../assets/images/projectLogo/Discussion-bro.svg";

export default function DoneJoinProject({ isDoneCreate, setDoneCreate }) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setDoneCreate(false);
  }

  return (
    <>
      <Transition appear show={isDoneCreate} as={Fragment}>
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
                      <div className="flex justify-center pb-4">
                        <img src={doneIcon} alt="" className="h-20" />
                      </div>
                      <div className="text-center flex flex-col gap-y-2 text-text-color">
                        <p className="font-sp-pro-text-medium text-lg">
                          Joined project successfully
                        </p>
                        <div className="flex justify-center">
                          <img
                            src={teamProjectImg}
                            alt=""
                            className="h-24 w-32"
                          />
                        </div>
                      </div>

                      <div className="font-sp-pro-text-regular flex gap-x-10 justify-center py-3 mt-8">
                        <button
                          type="button"
                          className="inline-flex  text-sm rounded-md border border-transparent outline outline-1
                           font-sp-pro-text-semibold outline-[#00AC4F] text-[#00AC4F] px-12 py-1.5 bg-[#BFEBD3]  hover:bg-slate-100 "
                          onClick={closeModal}
                        >
                          Done
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
