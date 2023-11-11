import React, { useEffect, useState } from "react";
import NavbarDashboard from "../../components/navbarDashboard/NavbarDashboard";
import projectIcon from "../../assets/icon/porject.svg";
import CreateNewProject from "./modalAllProject/CreateNewProject";
import JoinTeamProject from "./modalAllProject/JoinTeamProject";
import doneIcon from "../../assets/images/tickLogo.svg";
import { SlOptions } from "react-icons/sl";
import logoProject from "../../assets/images/projectLogo/K.svg";
import memberProject from "../../assets/images/projectLogo/member.svg";
import { MdChangeCircle } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { BsTrash3 } from "react-icons/bs";
import { PiFolderNotchPlusDuotone } from "react-icons/pi";
import { HiPlusSm } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import LogoDashboard from "../../assets/logo/logo.svg";
import userProfile from "../../assets/images/projectLogo/userProfile.svg";
import { TbLogout2 } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allProject, removeProject } from "../../redux/service/projectService";
import SearchProject from "./SearchProject";
import userPf1 from "../../assets/UserProfile/userPf1.svg";
import { currentUser } from "../../redux/service/userService";
import CopyToClipboard from "react-copy-to-clipboard";
import { MdDone } from "react-icons/md";
import DeleteProject from "../../components/popups/dashboardPopup/DeleteProject";
import { MdOutlineFileCopy } from "react-icons/md";
import emtyProjectIcon from "../../assets/images/projectLogo/Empty_Project.svg";
import addProjectIcon from "../../assets/images/projectLogo/addEmptyProject.svg";
import LoadingMyproject from "./LoadingMyproject";

function ListAllProject() {
  const { data, loading, success } = useSelector((state) => state.project);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // copy code
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  console.log("do we have new data", data);
  useEffect(() => {
    dispatch(allProject());
    dispatch(currentUser());
  }, [success]);
  const signOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("token");
    navigate("/signin");
  };
  const remove = (id) => {
    dispatch(removeProject(id));
  };
  // open create project
  const [isProject, setProject] = useState(false);

  function openModal() {
    setProject(true);
  }

  //Open join project

  const [isJoinPorject, setJoinPorject] = useState(false);

  function openModalJoinProject() {
    setJoinPorject(true);
  }

  const handleClickOnCard = (id) => {
    navigate(`/allproject/${id}/dashboard`);
  };

  function createProject() {
    setProject(false);
  }

  // delete project
  const [isDeleteProject, setDeleteProject] = useState(false);

  const [projectId, setProjectId] = useState();

  function openModalDeleteProject(id) {
    setProjectId(id);
    //console.log("project id",id);
    setDeleteProject(true);
  }

  return (
    <div className="bg-background-color h-screen w-full">
      <div className="w-full ">
        <div className="drawer border-[#E1E9EE] border">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          {/* Navbar */}
          <div className=" drawer-content flex flex-col">
            <div className="w-full navbar bg-background-color px-8">
              {/* logo navbar */}
              <div className=" font-bold text-2xl flex-1">
                <img src={LogoDashboard} alt="" className="w-20 " />
                Auto <div className="text-blue-600">Pilot</div>
              </div>

              {/* dropdown navbar */}
              <div className="">
                <div className=" dropdown dropdown-end pt-1">
                  <label tabIndex={0} className="  rounded-btn">
                    <div className="flex gap-x-4 justify-center text-center items-center px-6 cursor-pointer font-sp-pro-text-semibold">
                      <div className="h-12 w-12 rounded-full ">
                        <img className="" src={userProfile} alt="" />
                      </div>
                      <div className="flex gap-x-1 ">
                        <p className="text-text-color">{user?.username}</p>
                        <RiArrowDropDownLine size={20} />
                      </div>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 py-3 shadow  rounded-box w-52 mt-4  bg-background-color"
                  >
                    <li className="px-4 pb-2">
                      <div
                        className="flex gap-x-4 font-sp-pro-text-medium"
                        onClick={openModalJoinProject}
                      >
                        <FaUserPlus size={20} className="text-primary" />
                        Join Project
                      </div>
                    </li>
                    <li className="px-4">
                      <div className="flex gap-x-4 font-sp-pro-text-medium">
                        <TbLogout2 className="text-red-button" size={18} />
                        <a onClick={signOut}>Sign out</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-20 py-3 mt-20  bg-background-color">
        <div className="flex gap-x-2">
          <div>
            <h1 className="text-2xl text-text-color font-semibold ">
              All <span className="text-database-iconColor">Project</span> list
            </h1>
            <p className="font-sp-pro-text-regular text-sm text-https-iconColor py-1 px-2">
              Active projects
            </p>
          </div>

          <div className="">
            <img src={projectIcon} alt="" className="h-16  " />
          </div>
        </div>

        {/* search */}

        <div className="flex gap-x-3">
          <div className="px-2">
            <SearchProject />
          </div>
          <div className="">
            <button
              onClick={openModalJoinProject}
              type="button"
              class="py-2 px-5 mr-2 mb-2 text-sm font-sp-pro-text-regular
                 text-primary focus:outline-none bg-white rounded-xl border border-primary hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-primary  transition-none"
            >
              <div className="flex gap-x-1">
                <HiPlusSm size={20} className="" />
                <p>Join Project</p>
              </div>
            </button>
          </div>

          <div className="">
            <button
              onClick={openModal}
              type="button"
              class="py-2 px-5 mr-2 mb-2 text-sm font-sp-pro-text-regular text-primary focus:outline-none bg-white
                 rounded-xl border border-primary hover:bg-blue-100 
                 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-primary  transition-none"
            >
              <div className="flex gap-x-2">
                <PiFolderNotchPlusDuotone size={20} />
                <p>Create project</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-x-12 gap-y-12 px-20 pb-20 mt-20 w-full overflow-hidden bg-background-color cursor-pointer">
        {/* card 1 */}
        {loading ? (
          <div>
            <LoadingMyproject loading />
          </div>
        ) : (
          data?.map((item) => (
            <div className="w-full bg-background-color shadow border border-1 border-border-color rounded-xl h-80">
              <div className="flex justify-between p-6">
                <div>
                  <img src={doneIcon} alt="" className="h-5" />
                </div>
                {/* option */}
                <div className="dropdown dropdown-right cursor-pointer bg-background-color">
                  <label tabIndex={0} className="cursor-pointer">
                    <SlOptions size={16} />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu  shadow  rounded-box w-44  bg-background-color p-2"
                  >
                    <li className="">
                      <div className="flex gap-x-3 font-sp-pro-text-medium pb-3 text-[13px]">
                        <MdChangeCircle size={16} className="text-primary" />
                        <p>Change logo</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-x-3 font-sp-pro-text-bold pb-3 text-[13px]">
                        <CopyToClipboard
                          text={item.project_code}
                          onCopy={handleCopy}
                        >
                          <div className="cursor-pointer flex gap-x-3">
                            <MdOutlineFileCopy
                              size={16}
                              className="text-primary hover:text-gray-600"
                            />
                            <span className="font-sp-pro-text-nold">
                              {copied ? (
                                <div className="flex gap-x-2">
                                  <p className="text-green-600">Copied</p>
                                  <MdDone
                                    size={20}
                                    className="text-green-600"
                                  />
                                </div>
                              ) : (
                                item.project_code
                              )}
                            </span>
                          </div>
                        </CopyToClipboard>
                      </div>
                    </li>
                    <li>
                      <dev
                        className="flex gap-x-3 font-sp-pro-text-medium"
                        onClick={() =>
                          openModalDeleteProject(`${item.project_id}`)
                        }
                        // onClick={() => remove(`${item.project_id}`)}
                      >
                        <BsTrash3 size={14} className="text-red-button" />
                        <p className="text-[13px]">Delete</p>
                      </dev>
                    </li>
                  </ul>
                </div>
              </div>

              {/* logo project */}
              <Link to={`/allproject/${item.project_id}/dashboard`}>
                <div
                  className="flex justify-center items-center "
                  key={item.project_id}
                >
                  <div className="flex flex-col gap-y-3">
                    {/* <img src={logoProject} alt="" className="h-12" /> */}
                    <div className="flex justify-center">
                      <h1
                        style={{ background: `#${item.color}` }}
                        className={`text-black-600 w-14 h-14 rounded-full flex justify-center items-center text-2xl text-background-color font-sp-pro-text-semibold uppercase`}
                      >
                        {item.name[0]}
                      </h1>
                    </div>

                    <p className="font-sp-pro-text-semibold text-lg flex justify-center">
                      {item.name}
                    </p>
                    <div>
                      <p className="font-sp-pro-text-semibold text-[12px] py-1 flex justify-center pb-2">
                        {item.members?.length} Members
                      </p>
                      <div className="flex  justify-center items-center  ">
                        {item.members?.map((user) => (
                          <div className=" h-7 w-7 rounded-full ml-[-433x]">
                            <img src={userPf1} alt="" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="font-sp-pro-text-semibold inline-flex justify-center text-[12px] 
                  rounded-md border border-transparent outline outline-1 outline-border-color 
                   px-12 py-1 text-text-color hover:bg-slate-200 mt-3 "
                    >
                      Joined
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
        {/* card 1 */}
      </div>

      {data.length === 0 ? (
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-y-4">
            <img src={emtyProjectIcon} alt="" className="h-44" />
            <div
              className="flex flex-col gap-y-2 cursor-pointer"
              onClick={openModal}
            >
              <img src={addProjectIcon} alt="" className="h-10" />
              <p className="flex justify-center items-center text-sm text-primary">
                Create New project
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* create new project */}
      <CreateNewProject
        isProject={isProject}
        setProject={setProject}
        createProjects={createProject}
      />
      {/* Join team project */}
      <JoinTeamProject
        isJoinPorject={isJoinPorject}
        setJoinPorject={setJoinPorject}
      />

      {/* popup delete project */}

      <DeleteProject
        isDeleteProject={isDeleteProject}
        setDeleteProject={setDeleteProject}
        projectId={projectId}
      />
    </div>
  );
}

export default ListAllProject;
