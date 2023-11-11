import React, { useEffect, useState } from "react";
import DashboardDeployment from "../../components/dashboardPageComponents/DashboardDeployment";
import DashboardDatabase from "../../components/dashboardPageComponents/DashboardDatabase";
import DashboardDomain from "../../components/dashboardPageComponents/DashboardDomain";
import DashboardHTTPS from "../../components/dashboardPageComponents/DashboardHTTPS";
import deploymentDashboard from "../../assets/icon/DashboardPageLogo/deploymentDashboard.svg";
import DisplayDeploymentTable from "../../components/dashboardPageComponents/displayTableList/DisplayDeploymentTable";
import DisplayDatabaseTable from "../../components/dashboardPageComponents/displayTableList/DisplayDatabaseTable";
import databaseDashboard from "../../assets/icon/DashboardPageLogo/databaseDashboard.svg";
import DisplayDomainTable from "../../components/dashboardPageComponents/displayTableList/DisplayDomainTable";
import domainDashboard from "../../assets/icon/DashboardPageLogo/dpmainDashboard.svg";
import DisplayHTTPS from "../../components/dashboardPageComponents/displayTableList/DisplayHTTPS";
import httpsDashboard from "../../assets/icon/DashboardPageLogo/httpsDashboard.svg";
import iconDashboard from "../../assets/icon/DashboardPageLogo/dashboard.svg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProjectById } from "../../redux/service/projectService";

function DashboardPage() {
  const { id } = useParams();
  const { project } = useSelector((state) => state.project);
  let [deployments, setDeployments] = useState([]);

  // console.log("Project", project);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectById(id));
  }, []);
  return (
    <div className="p-12 pb-12">
      <div className="flex gap-x-2 pb-14">
        <h1 className="text-2xl font-sp-pro-text-semibold mt-1 text-secondary ">
          Dashboard
        </h1>
        <img src={iconDashboard} alt="" className="pb-4" />
      </div>

      <div className="grid xl:grid-cols-12  h-48 gap-x-8 ">
        <div className="col-span-3  bg-deployment-bgColor rounded-2xl">
          <DashboardDeployment
            deployments={deployments}
            setDeployments={setDeployments}
          />
        </div>
        <div className="col-span-3 bg-database-bgColor rounded-2xl">
          <DashboardDatabase />
        </div>
        <div className="col-span-3 bg-domain-bgColor rounded-2xl">
          <DashboardDomain />
        </div>
        <div className="col-span-3 bg-https-bgColor rounded-2xl">
          <DashboardHTTPS />
        </div>
      </div>

      {/* display database list */}
      {/* <div className="mt-28">
        <div className="flex pl-2 text-center gap-x-2 pb-8">
          <h1 className="font-sp-pro-text-semibold text-xl text-secondary mt-2">
            Deployment List
          </h1>
          <img
            src={deploymentDashboard}
            alt=""
            className="h-10 mt-1 animate-bounce"
          />
        </div>

        <DisplayDeploymentTable
          deployments={deployments}
          setDeployments={setDeployments}
        />
      </div> */}
      {/* display deployment list */}
      {/* <div className="mt-20">
        <div className="flex pl-2 text-center gap-x-2 pb-8">
          <h1 className="font-sp-pro-text-semibold text-xl text-secondary mt-2">
            Database List
          </h1>
          <img
            src={databaseDashboard}
            alt=""
            className="h-10 mt-1 animate-bounce"
          />
        </div>

        <DisplayDatabaseTable />
      </div> */}
      {/* display domain list */}
      {/* <div className="mt-20">
        <div className="flex pl-2 text-center gap-x-2 pb-8">
          <h1 className="font-sp-pro-text-semibold text-xl text-secondary mt-2">
            Domain List
          </h1>
          <img
            src={domainDashboard}
            alt=""
            className="h-10 mt-1 animate-bounce"
          />
        </div>

        <DisplayDomainTable />
      </div> */}
      {/* display domain list */}
      {/* <div className="mt-20">
        <div className="flex pl-2 text-center gap-x-2 pb-8">
          <h1 className="font-sp-pro-text-semibold text-xl text-secondary mt-2">
            HTTPS List
          </h1>
          <img
            src={httpsDashboard}
            alt=""
            className="h-10 mt-1 animate-bounce"
          />
        </div>

        <DisplayHTTPS />
      </div> */}
      {/* table */}
    </div>
  );
}

export default DashboardPage;
