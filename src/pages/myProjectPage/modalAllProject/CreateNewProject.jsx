import React, { useEffect } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import projectIcon from "../../../assets/icon/porject.svg";
import teamProjectImg from "../../../assets/images/projectLogo/newProject1.svg";
import DoneCreateProject from "../../../components/popups/donePopup/DoneCreateProject";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../../redux/service/projectService";
import JoinProject from "../../../assets/images/projectLogo/Discussion-bro.svg";


export default function CreateNewProject({
  isProject,
  setProject,
  createProjects,
}) {
  function closeModal() {
    setProject(false);
  }
  const { createSuccess } = useSelector(state => state.project)
  useEffect(() => {
    { createSuccess ? setDoneCreate(true) : setDoneCreate(false) }

  }, [createSuccess])
  // pop up done
  let [isDoneCreate, setDoneCreate] = useState(false);
  const dispatch = useDispatch()

  const [projects, setProjects] = useState();

  const handleClick = () => {
    dispatch(createProject(projects))
    closeModal();
    //
  };
  return (
    <>
      <Transition appear show={isProject} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="pt-2">
                    <div className="flex gap-x-3   px-2">
                      <img src={projectIcon} alt="" className="h-14 " />
                      <h1 className="flex justify-center items-center text-xl font-sp-pro-text-semibold text-[#324C5B]">
                        Create new project
                      </h1>
                    </div>
                  </div>
                  <form className="flex flex-col gap-y-7 text-text-color px-8 py-8 ">
                    <div className="flex flex-col gap-y-3">
                      <label className="text-sm">Project Name</label>
                      <input
                        type="text"
                        name="project"
                        placeholder="Enter project name"
                        onChange={(e) => setProjects(e.target.value)}
                        className="outline outline-1  outline-[#E2E8F0] bg-background-color focus:outline-primary focus:ring-primary  px-5 py-2 rounded-md placeholder:text-sm"
                      />
                    </div>
                  </form>
  
                  <div className="flex justify-center p-6 ">
                    <img src={teamProjectImg} alt="" className="h-32" />
                  </div>
                  <div className="mt-4  flex justify-end items-center gap-x-5 font-sp-pro-text-regular py-4">
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

      <DoneCreateProject isDoneCreate={isDoneCreate} setDoneCreate={setDoneCreate} />

    </>
  );
}
