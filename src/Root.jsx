import React from "react";
import NavbarDashboard from "./components/navbarDashboard/NavbarDashboard";
import SidebarDashboard from "./components/sidebarDashboard/SidebarDashboard";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="bg-bg-dashboard">
      <div className=" relative">
        <NavbarDashboard />
      </div>
      <div className="grid grid-cols-12 ">

        <div className="col-span-2 ">
          <SidebarDashboard />
        </div>
        <div className="col-span-10  p-6">
            <div className="bg-background-color h-[800px] overflow-y-auto rounded-lg w-full px-6 shadow-lg relative">
              <Outlet/>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Root;
