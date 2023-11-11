import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import jarLogo from "../../assets/icon/DashboardPageLogo/languages/jar.svg";
import warLogo from "../../assets/icon/DashboardPageLogo/languages/war.svg";

const packageSpring = [
  { logo: jarLogo, package: "Jar File" },
  { logo: warLogo, package: "War File" },
];

export default function SelectPackageSpring() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg outline outline-[1.5px] outline-[#E2E8F0] bg-white py-2 pl-3 pr-10 text-left focus:outline-primary focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            {selected === "" ? (
              <span className="text-sm text-gray-500 px-1">
                select packages
              </span>
            ) : (
              <span className="block truncate text-base">
                <div className="flex gap-x-4  px-2">
                  <img src={selected.logo} alt="" className="h-6" />
                  <p className="text-sm mt-1">{selected.package}</p>
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
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {packageSpring.map((packageSpring, packageSpringIdx) => (
                <Listbox.Option
                  key={packageSpringIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-slate-100 text-deployment-iconColor"
                        : "text-gray-900"
                    }`
                  }
                  value={packageSpring}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-base ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        <div className="flex gap-x-3 ">
                          <img
                            src={packageSpring.logo}
                            alt=""
                            className="h-6"
                          />
                          <p className="text-sm"> {packageSpring.package}</p>
                        </div>
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
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
