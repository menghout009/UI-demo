import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import reactLogo from "../../assets/icon/DashboardPageLogo/languages/react.svg";
import githubLogo from "../../assets/icon/DashboardPageLogo/languages/github.svg";
import gitlabLogo from "../../assets/icon/DashboardPageLogo/languages/gitlab.svg";
import uplaodLogo from "../../assets/icon/DashboardPageLogo/languages/upload.svg";

const sourceCode = [
  { logo: githubLogo, sourceCode: "GitHub" },
  { logo: gitlabLogo, sourceCode: "GitLab" },
  { logo: uplaodLogo, sourceCode: "Upload Code" },
];

export default function SelectSourceCode({ selectSourceCode }) {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg outline outline-[1.5px] outline-[#E2E8F0] bg-white py-2 pl-3 pr-10 text-left focus:outline-primary focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            {selected === "" ? (
              <span className="text-sm text-gray-500 px-1">
                select source code
              </span>
            ) : (
              <span className="block truncate text-base">
                <div className="flex gap-x-3 ">
                  <img src={selected.logo} alt="" className="h-6" />
                  <p className="text-text-color text-sm">
                    {" "}
                    {selected.sourceCode}
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
            <Listbox.Options className="relative z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-2 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {sourceCode.map((sourceCode, sourceCodeIdx) => (
                <Listbox.Option
                  key={sourceCodeIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-slate-100 text-deployment-iconColor"
                        : " text-gray-900"
                    }`
                  }
                  value={sourceCode}
                  onClick={() => {
                    selectSourceCode(sourceCode.sourceCode);
                  }}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`flex gap-x-4 truncate text-base ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        <img src={sourceCode.logo} alt="" className="h-6" />
                        <p className="text-sm "> {sourceCode.sourceCode}</p>
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
