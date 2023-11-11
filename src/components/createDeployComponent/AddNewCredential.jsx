import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { FaJenkins } from "react-icons/fa";

export default function AddNewCredential({
  isAddCredential,
  setAddCredential,
  setIsOpenDeploy,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isAddCredential) {
      setIsOpen(true);
    }
  }, [isAddCredential]);

  function closeCredential() {
    setAddCredential(false);
    setIsOpenDeploy(true);
    setIsOpen(false);
  }

  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(true);
          }}
        >
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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex w-80 text-center gap-x-2 p-4">
                    <h1 className="font-sp-pro-text-semibold text-lg text-text-color mt-2">
                      Add Credentials
                    </h1>

                    <FaJenkins size={23} className="mt-2" />
                  </div>

                  {/* Form Create Deployment */}
                  <form className="flex flex-col gap-y-4 text-text-color p-4">
                    <div className="flex flex-col gap-y-2">
                      <label className="text-[14px]">Username</label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Git username"
                        className="outline outline-1 outline-[#E2E8F0] bg-background-color
                         focus:outline-primary focus:ring-primary  px-5 py-1.5 rounded-md placeholder:text-[12px]"
                        tabIndex="0" 
                      />
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <label className="text-[14px]">Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Git password"
                        className="outline outline-1 outline-[#E2E8F0] bg-background-color
                         focus:outline-primary focus:ring-primary  px-5 py-1.5 rounded-md placeholder:text-[12px]"
                        tabIndex="0" 
                      />
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <label className="text-[14px]">ID</label>
                      <input
                        type="text"
                        name="id"
                        placeholder="Enter ID name"
                        className="outline outline-1 outline-[#E2E8F0] bg-background-color
                         focus:outline-primary focus:ring-primary  px-5 py-1.5 rounded-md placeholder:text-[12px]"
                        tabIndex="0" 
                      />
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <label className="text-[14px]">Description</label>
                      <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        className="outline outline-1 outline-[#E2E8F0] bg-background-color
                         focus:outline-primary focus:ring-primary  px-5 py-1.5 rounded-md placeholder:text-[12px]"
                        tabIndex="0" 
                      />
                    </div>
                  </form>

                  <div className="mt-4 pb-4 flex justify-start items-center gap-x-4 font-sp-pro-text-regular px-5">
                    <button
                      type="button"
                      className="inline-flex   text-[12px] rounded-md border border-transparent outline outline-1
                      outline-border-color bg-primary px-5 py-1 text-background-color font-sp-pro-text-medium hover:outline-primary hover:bg-slate-100 hover:text-primary"
                      onClick={closeCredential}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="inline-flex  text-[12px] rounded-md border border-transparent outline outline-1
                           outline-border-color px-3 py-1 text-text-color font-sp-pro-text-medium hover:bg-slate-100"
                      onClick={closeCredential}
                    >
                      Cancel
                    </button>
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
