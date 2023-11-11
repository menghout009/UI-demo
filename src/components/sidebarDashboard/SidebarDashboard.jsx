import React, { useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import dashboardLogo from "../../assets/logo/dashboard-logo.svg";
import logo from "../../../src/assets/logo/auto-pilot_no_bg1.png";
import myproIcon from "../../assets/icon/dasboard-icon/Category.svg";
import deployIcon from "../../assets/icon/dasboard-icon/deployment.svg";
import databaseIcon from "../../assets/icon/dasboard-icon/database.svg";
import domainIcon from "../../assets/icon/dasboard-icon/domainIcon.svg";
import httpsIcon from "../../assets/icon/dasboard-icon/httpsIcon.svg";
import userIcon from "../../assets/icon/dasboard-icon/userPf.svg";
import docIcon from "../../assets/icon/Document.svg";
import sppIcon from "../../assets/icon/User.svg";
import settingIcon from "../../assets/icon/dasboard-icon/setting.svg";
import SignOutIcon from "../../assets/icon/dasboard-icon/signout.svg";
import myprojectIcon from "../../assets/icon/dasboard-icon/white-icon/myproject.svg";
import myprojectIconWhite from "../../assets/icon/dasboard-icon/white-icon/myprojectWhite.svg";
import deployIconWhite from "../../assets/icon/dasboard-icon/white-icon/deployment.svg";
import databaseIconWhite from "../../assets/icon/dasboard-icon/white-icon/database.svg";
import domainIconWhite from "../../assets/icon/dasboard-icon/white-icon/domain.svg";
import httpsIconWhite from "../../assets/icon/dasboard-icon/white-icon/https.svg";
import docIconWhite from "../../assets/icon/dasboard-icon/white-icon/Document.svg";
import sppIconWhite from "../../assets/icon/dasboard-icon/white-icon/User.svg";
import notification from "../../assets/icon/dasboard-icon/notification.svg";
import whiteNotification from "../../assets/icon/dasboard-icon/white-icon/notification.svg";
import dashboardIcon from "../../assets/icon/dasboard-icon/myDashoard.svg";
import dashboardWhiteIcon from "../../assets/icon/dasboard-icon/white-icon/dasboard.svg";
import { useSelector } from "react-redux";






// const [navLink, setNavLink] = useState();

function SidebarDashboard() {
  const {user}=useSelector(state=>state.user)
  const {id}=useParams()
  const navigate=useNavigate()
  const signOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("token");
    navigate("/signin");
  };
  const [navLink, setNavlink] = useState([
    {
      to: "/allproject",
      label: "MyProject",
      icon: myprojectIcon,
      activeIcon: myprojectIconWhite,
      active: false,
    },
    {
      to: `/allproject/${id}/dashboard`,
      label: "Dashboard",
      icon: dashboardIcon,
      activeIcon: dashboardWhiteIcon,
      active: true,
    },
    {
      to: `/allproject/${id}/deployment`,
      label: "Deployment",
      icon: deployIcon,
      activeIcon: deployIconWhite,
      active: false,
    },
    {
      to: `/allproject/${id}/database`,
      label: "Database",
      icon: databaseIcon,
      activeIcon: databaseIconWhite,
      active: false,
    },
    {
      to: `/allproject/${id}/domain`,
      label: "Domain",
      icon: domainIcon,
      activeIcon: domainIconWhite,
      active: false,
    },
    {
      to: `/allproject/${id}/https`,
      label: "HTTPS",
      icon: httpsIcon,
      activeIcon: httpsIconWhite,
      active: false,
    },
    {
      to: `/allproject/${id}/alert`,
      label: "Notification",
      icon: notification,
      activeIcon: whiteNotification,
      active: false,
    },

  ]);

  const [guideDoc, setGuideDoc] = useState([
    {
      to: "/allproject/:id/document",
      label: "Document",
      icon: docIcon,
      activeIcon: docIconWhite,
      active: false,
    },
    {
      to: "/allproject/:id/support",
      label: "Support",
      icon: sppIcon,
      activeIcon: sppIconWhite,
      active: false,
    },
  ]);

  const handleNavLinkClick = (index) => {
    const updatedNavLinks = [...navLink];
    updatedNavLinks.forEach((link, i) => {
      link.active = i === index;
    });
    setNavlink(updatedNavLinks);
  };
  const handleDocClick = (index) => {
    const updatedNavDoc = [...guideDoc];
    updatedNavDoc.forEach((link, i) => {
      link.active = i === index;
    });
    setGuideDoc(updatedNavDoc);
  };

  return (
    <div className="  xl:h-[830px] lg:h-[800px] md:h-[800px] h-[700px] overflow-y-auto bg-white border-r rounded-lg rtl:border-r-0 rtl:border-l font-sp-pro-text-regular shadow-lg ">
      <div class="flex flex-col px-12 py-2">
        <div class="flex flex-col justify-between flex-1 mt-2 font-sp-pro-text-medium ">
          <nav class="flex-1 -mx-3 space-y-6  cursor-pointer">
            {navLink.map((link, index) => {
              return (
                <div onClick={() => handleNavLinkClick(index)}>
                  <NavLink to={link.to}>
                    <div
                      className={
                        link.active
                          ? "text-bg-dashboard  font-sp-pro-text-semibold py-3 my-2 bg-primary transition-colors duration-300 transform rounded-xl"
                          : "hover:text-text-color hover:bg-slate-100 py-3 my-2 bg-white transition-colors duration-300 transform rounded-xl"
                      }
                    >
                      <div class="flex  gap-x-4 items-center px-3">
                        <div>
                          <img
                            src={link.active ? link.activeIcon : link.icon}
                            alt=""
                            className="w-5 h-5 "
                          />
                        </div>

                        <span class="mx-2 text-[14px]  ">{link.label}</span>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </nav>

          {/* user pf */}
          <div className="mt-28 flex-1 -mx-3 space-y-  cursor-pointer">
            <div className="pb-4">
              <NavLink to={"/allproject/:id/setting"}>
                <div class="flex  gap-x-4 items-center px-1 py-2 text-text-color transition-colors duration-300 transform rounded-lg hover:bg-blue-100 ">
                  <div>
                    <img src={settingIcon} alt="" className="ml-1" />
                  </div>

                  <span class=" text-sm font-medium ">Setting</span>
                </div>
              </NavLink>
            </div>
            <div className="pb-4">
              <NavLink to={"/signin"}>
                <div class="flex  gap-x-4 items-center px-2 py-2 text-text-color transition-colors duration-300 transform rounded-lg hover:bg-blue-100 ">
                  <div>
                    <img src={SignOutIcon} alt="" className=" h-6" />
                  </div>

                  <span class=" text-sm font-medium " onClick={()=>signOut()}>Sign out</span>
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/allproject/:id/profile"}>
                <div class="flex  gap-x-4 items-center  py-2 text-text-color transition-colors duration-300 transform rounded-lg hover:bg-blue-100 ">
                  <NavLink className={"/allproject/:id/profile"}>
                    <div>
                      <img src={userIcon} alt="" />
                    </div>
                  </NavLink>

                  <div>
                    <span class="text-sm font-medium ">{user?.username}</span>
                    <p className="text-gray-500">{user?.email}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarDashboard;
