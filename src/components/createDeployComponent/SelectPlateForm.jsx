import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import reactLogo from "../../assets/icon/DashboardPageLogo/languages/react.svg";
import springLogo from "../../assets/icon/DashboardPageLogo/languages/spring.svg";
import angularLogo from "../../assets/icon/DashboardPageLogo/languages/angular.svg";
import vueLogo from "../../assets/icon/DashboardPageLogo/languages/vue.svg";
import djangoLogo from "../../assets/icon/DashboardPageLogo/languages/django.svg";
import flaskLogo from "../../assets/icon/DashboardPageLogo/languages/flask.svg";

const plateForm = [
  { logo: springLogo, language: "Spring Boot" },
  { logo: reactLogo, language: "ReactJs" },
  { logo: angularLogo, language: "Angular" },
  { logo: vueLogo, language: "VueJs" },
  { logo: djangoLogo, language: "Django" },
  { logo: flaskLogo, language: "Flask" },
];

export default function SelectPlateForm({ selectPlateForm }) {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg  outline outline-[1.5px] outline-[#E2E8F0] bg-white py-2 pl-3 pr-10 text-left focus:outline-primary focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            {selected === "" ? (
              <span className="text-sm text-gray-500 px-1">
                select framework
              </span>
            ) : (
              <span className="block truncate text-base">
                <div className="flex gap-x-4  px-2">
                  <img src={selected.logo} alt="" className="h-5" />
                  <p className="text-sm"> {selected.language}</p>
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
            <Listbox.Options className="relative z-30 mt-1 max-h-80 w-full overflow-auto rounded-md bg-white py-2 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {plateForm.map((plateForm, plateFormIdx) => (
                <Listbox.Option
                  key={plateFormIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-slate-100 text-deployment-iconColor"
                        : "text-text-color"
                    }`
                  }
                  value={plateForm}
                  onClick={() => {
                    selectPlateForm(plateForm);
                  }}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={` truncate text-base flex gap-x-4  ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        <div className="flex gap-x-5 ">
                          <img src={plateForm.logo} alt="" className="h-6" />
                          <p className="text-sm"> {plateForm.language}</p>
                        </div>
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 right-28 flex items-center  text-green-600 ">
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
    </>
  );
}
