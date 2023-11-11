import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import postgresLogo from "../../../assets/icon/DashboardPageLogo/databaseDisplayIcon/postgres.svg";
import mysqlLogo from "../../../assets/icon/DashboardPageLogo/databaseDisplayIcon/mysql.svg";
import reactLogo from "../../../assets/icon/DashboardPageLogo/languages/react.svg";
import springLogo from "../../../assets/icon/DashboardPageLogo/languages/spring.svg";
import angularLogo from "../../../assets/icon/DashboardPageLogo/languages/angular.svg";

const chooseApp = [
  { logo: reactLogo, appName: "autopilot React " },
  { logo: springLogo, appName: " fintrak Spring" },
  { logo: angularLogo, appName: " fintrak Angular" },
];

function SelectAppSetDomain() {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <div className="flex flex-col gap-y-3 ">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg  py-2.5 pl-3 pr-10 text-left outline outline-1 outline-[#E2E8F0] bg-background-color focus:outline-primary focus:ring-primary focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              {selected === "" ? (
                <span className="text-sm text-gray-500 px-1">
                  select deployment
                </span>
              ) : (
                <span className="block truncate text-base">
                  <div className="flex gap-x-4  px-2">
                    <img src={selected.logo} alt="" className="h-5 " />
                    <p className="text-sm font-sp-pro-text-regular text-text-color">
                      {" "}
                      {selected.appName}
                    </p>
                  </div>
                </span>
              )}
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="cursor-pointer relative mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {chooseApp.map((application, applicationIdx) => (
                  <Listbox.Option
                    key={applicationIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-slate-100 text-database-iconColor"
                          : "text-text-color"
                      }`
                    }
                    value={application}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected
                              ? "font-sp-pro-text-regular"
                              : "font-normal"
                          }`}
                        >
                          <div className="flex gap-x-5 ">
                            <img
                              src={application.logo}
                              alt=""
                              className="h-6"
                            />
                            <p className="text-sm"> {application.appName}</p>
                          </div>
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-60 flex items-center pl-3 text-green-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}

export default SelectAppSetDomain;
