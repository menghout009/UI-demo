import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import SelectPlateForm from "../../../components/createDeployComponent/SelectPlateForm";
import SelectSourceCode from "../../../components/createDeployComponent/SelectSourceCode";
import SelectPackageSpring from "../../../components/createDeployComponent/SelectPackageSpring";
import SelectDependencySpring from "../../../components/createDeployComponent/SelectDependencySpring";
import SelectCredential from "../../../components/createDeployComponent/SelectCredential";
import deploymentDashboard from "../../../assets/icon/DashboardPageLogo/deploymentDashboard.svg";
import DoneCreateDeployment from "../../../components/popups/donePopup/DoneCreateDeployment";
import AddNewCredential from "../../../components/createDeployComponent/AddNewCredential";
import Toggle from "./Toggle";
import CopyToClipboard from "react-copy-to-clipboard";
import { MdDone } from "react-icons/md";
import { MdOutlineFileCopy } from "react-icons/md";
import TickLogo from "../../../assets/images/tickLogo.svg";
import reactLogo from "../../../assets/icon/DashboardPageLogo/languages/react.svg";
import btnEdit from "../../../assets/icon/DashboardPageLogo/languages/editIcon.svg";
import btnDelete from "../../../assets/icon/DashboardPageLogo/languages/deleteIcon.svg";
import { SlOptions } from "react-icons/sl";
import { SlLockOpen } from "react-icons/sl";
// import {BsFillRocketTakeoffFill} from "react-icons/bs"

export default function CreateDeployment({ isOpenDeploy, setIsOpenDeploy, deployments, setDeployments }) {
  const [selected, setSelected] = useState(); // select platform
  const [selectedSourceCode, setSelectedSourceCode] = useState();
  const [inputToken, setInputToken] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false); // toggle
  // const [deployments, setDeployments] = useState([]);

  useEffect(() => {
    if (isOpenDeploy) {
      setIsOpen(true);
    }
  }, [isOpenDeploy]);

  function closeModal() {
    setIsOpenDeploy(false);
    setIsOpen(false);
    setSelectedSourceCode(undefined);
    setSelected(undefined);
  }

  function selectPlateForm(plateForm) {
    setSelected(plateForm);
  }

  function selectSourceCode(SourceCode) {
    setSelectedSourceCode(SourceCode);
  }

  // pop up done
  let [isDoneCreateDeploy, setDoneCreateDeploy] = useState(false);

  const [formData, setFormData] = useState({
    applicationName: "",
    email: "",
    description: "",
    repositoryURL: "",
    branch: "",
  });

  function openDoneCreate() {
    setDoneCreateDeploy(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createDeployment = () => {
    setDeployments([
      ...deployments,
      {
        ...formData,
        id: deployments.length + 1,
        languages: selected.language,
        logoLanguages: selected.logo,
        ipaddress: "192.74.193.125:3000",
        // domain: <SlOptions size={18} />,
        // https: <SlLockOpen size={20} />,
        // status: TickLogo,
        // actionEdit: btnEdit,
        // actionDelete: btnDelete,
      },
    ]);
    closeModal();
    openDoneCreate();
  };

  // add new credential
  const [isAddCredential, setAddCredential] = useState(false);

  function openAddCredential() {
    setAddCredential(true);
  }

  // copied
  // copy code
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(true)}
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
                <Dialog.Panel className="w-full max-w-3xl h-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex  w-80 text-center gap-x-2 p-4">
                      <h1 className="font-sp-pro-text-semibold text-2xl text-secondary mt-2">
                        Create Deployment
                      </h1>
                      <img
                        src={deploymentDashboard}
                        alt=""
                        className="h-8 mt-2"
                      />
                    </div>
                  </Dialog.Title>

                  {/* Form Create Deployment */}
                  <form className="mt-7 flex flex-col gap-y-7 text-text-color px-6 text-sm">
                    <div className="grid grid-cols-2 gap-x-5">
                      <div className="flex flex-col gap-y-3">
                        <label className="">Deployment Name</label>
                        <input
                          type="text"
                          name="applicationName"
                          placeholder="application name"
                          className="outline outline-1 outline-[#E2E8F0] bg-background-color focus:outline-primary focus:ring-primary  px-5 py-2 rounded-lg placeholder:text-sm"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <label>Email</label>
                        <input
                          type="text"
                          name="email"
                          placeholder="email"
                          className="outline outline-1 outline-[#E2E8F0] bg-background-color focus:outline-primary focus:ring-primary  px-5 py-2 rounded-lg placeholder:text-sm"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <label>Description</label>
                      <textarea
                        name="description"
                        cols="30"
                        rows="3"
                        placeholder="Enter your description"
                        className="outline outline-1 outline-[#E2E8F0] bg-background-color focus:outline-primary focus:ring-primary  px-5 py-2 rounded-lg placeholder:text-sm"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-x-5">
                      <div className="flex flex-col gap-y-3">
                        <label>Select Platform</label>
                        <SelectPlateForm selectPlateForm={selectPlateForm} />
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <label>Select Source Code</label>
                        <SelectSourceCode selectSourceCode={selectSourceCode} />
                      </div>
                    </div>

                    {/* check select plateform */}
                    {selected?.language === "Spring Boot" ? (
                      <div className="grid grid-cols-2 gap-x-5">
                        <div className="flex flex-col gap-y-3">
                          <label>Choose Packages For Spring</label>
                          <SelectPackageSpring />
                        </div>
                        <div className="flex flex-col gap-y-3">
                          <label>Choose build tool</label>
                          <SelectDependencySpring />
                        </div>
                      </div>
                    ) : null}

                    {/* check select source code */}
                    {selectedSourceCode !== undefined ? (
                      <div className="flex flex-col gap-y-7">
                        <div className="flex flex-col gap-y-3">
                          <div className="grid grid-cols-3 items-center gap-x-5">
                            <div className="col-span-2 flex flex-col gap-y-3">
                              <label>Your Git RepositoryURL</label>
                              <input
                                type="text"
                                name="repositoryURL"
                                className="px-5 py-2  rounded-lg outline-1 outline  outline-[#E2E8F0] bg-white pl-3 pr-10 text-left focus:outline-primary placeholder:text-sm placeholder:px-3"
                                placeholder="Enter your git repository url"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-span-1 flex flex-col gap-y-3">
                              <label>Git Branch</label>
                              <input
                                type="text"
                                name="branch"
                                className="px-5 py-2  rounded-lg outline-1 outline  outline-[#E2E8F0] bg-white pl-3 pr-10 text-left focus:outline-primary placeholder:text-sm placeholder:px-3"
                                placeholder="Enter your branch"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-y-3">
                          <label>Choose previous credential</label>
                          <div className="grid grid-cols-3 items-center gap-x-5">
                            <div className="col-span-2">
                              <SelectCredential />
                            </div>
                            <div className="col-span-1">
                              <button
                                type="button"
                                className="w-full outline-2 outline  outline-primary bg-white pl-3 text-sm text-blue-500 px-5 py-2 rounded-lg"
                                // onClick={() => setInputToken(!inputToken)}
                                onClick={openAddCredential}
                                tabIndex="0"
                              >
                                Add New Credential
                              </button>
                            </div>
                          </div>
                          <h3 className="text-red-button text-[12px] px-2">
                            To auto deploy your, app please provide us your
                            credential.
                          </h3>
                        </div>

                        <div className="flex gap-x-3">
                          <Toggle enabled={enabled} setEnabled={setEnabled} />

                          <p className="font-sp-pro-text-regular">
                            Enale to add Domain if you have your own domain .
                          </p>
                        </div>

                        {/* Check */}
                        {enabled ? (
                          <div className="grid grid-cols-2 gap-x-5 ">
                            <div className="flex flex-col gap-y-3">
                              <label className="">Domain name</label>
                              <input
                                type="text"
                                name="domainname"
                                placeholder="Enter domain name"
                                className="outline outline-1 outline-[#E2E8F0] bg-background-color focus:outline-primary focus:ring-primary  px-5 py-2 rounded-lg placeholder:text-sm"
                              />
                            </div>

                            <div className="flex flex-col gap-y-3 ">
                              <label>Copy IP Address</label>
                              <div
                                className="flex gap-x-3 font-sp-pro-text-medium pb-3 text-[13px] w-full outline-[#E2E8F0]
                               bg-background-color outline-1 outline focus:outline-primary focus:ring-primary  px-5 py-2 rounded-lg "
                              >
                                <CopyToClipboard
                                  text="167.71.220.235"
                                  onCopy={handleCopy}
                                >
                                  <div className="cursor-pointer flex gap-x-2">
                                    <MdOutlineFileCopy
                                      size={14}
                                      className="text-text-color mt-[1px]"
                                    />
                                    <span className="font-sp-pro-text-nold">
                                      {copied ? (
                                        <div className="flex gap-x-2">
                                          <p className="text-green-600">
                                            Copied
                                          </p>
                                          <MdDone
                                            size={16}
                                            className="text-green-600 "
                                          />
                                        </div>
                                      ) : (
                                        <p>167.71.220.235</p>
                                      )}
                                    </span>
                                  </div>
                                </CopyToClipboard>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </form>

                  <div className="py-12 pb-4 flex justify-end items-center gap-x-5 ">
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
                      onClick={() => createDeployment()}
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

      {/* create success done popup */}
      <DoneCreateDeployment
        isDoneCreateDeploy={isDoneCreateDeploy}
        setDoneCreateDeploy={setDoneCreateDeploy}
      />

      {/* add new credential popup */}
      <AddNewCredential
        isAddCredential={isAddCredential}
        setAddCredential={setAddCredential}
        setIsOpenDeploy={setIsOpenDeploy}
      />
    </>
  );
}
