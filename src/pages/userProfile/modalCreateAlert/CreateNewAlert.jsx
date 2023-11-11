import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import deploymentDashboard from "../../../assets/icon/DashboardPageLogo/httpsDashboard.svg";
import { BsDatabaseAdd } from "react-icons/bs";
import teamProjectImg from "../../../assets/images/alertImg.svg";
import SelectSocail from "./SelectSocail";
import notificationIcon from "../../../assets/popup-icon/notification.svg";
import DoneCreateAlert from "../../../components/popups/donePopup/DoneCreateAlert";

function CreateNewAlert({ isOpenAlert, setAlert }) {
  function closeModal() {
    setAlert(false);
  }

  const [selected, setSelected] = useState();
  function selectSocial(social) {
    setSelected(social);
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
      <Transition appear show={isOpenAlert} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="pt-2">
                    <div className="flex gap-x-4 px-2">
                      <img src={notificationIcon} alt="" className="h-12 " />
                      <h1 className="flex justify-center items-center text-xl font-sp-pro-text-semibold text-[#324C5B]">
                        Alert Notiicaion
                      </h1>
                    </div>
                  </div>
                  <form className="flex flex-col gap-y-7 text-text-color px-6 py-8 ">
                    <div className="flex flex-col gap-y-3">
                      <label className="text-sm">Alert Name</label>
                      <input
                        type="text"
                        name="project"
                        placeholder="Enter name for alert"
                        className="outline outline-1  outline-[#E2E8F0] bg-background-color focus:outline-primary focus:ring-primary  px-5 py-2 rounded-md placeholder:text-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-y-3">
                      <label className="text-sm">
                        Choose platform to send Notification
                      </label>
                      <SelectSocail selectSocial={selectSocial} />
                    </div>
                  </form>

                  <div className="mt-4  flex justify-end items-center gap-x-5 font-sp-pro-text-regular py-4">
                    <button
                      type="button"
                      className="inline-flex justify-center text-sm rounded-md border border-transparent outline outline-1 outline-border-color  px-7 py-1.5 text-text-color "
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="text-sm inline-flex justify-center rounded-md border border-transparent bg-primary px-7 py-1.5 text-white hover:bg-database-iconColor "
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
      <DoneCreateAlert isDoneCreate={isDoneCreate} setDoneCreate={setDoneCreate}/>

    </>
  );
}

export default CreateNewAlert;
