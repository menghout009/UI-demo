import React from "react";
import tick from "../assets/images/tick.svg";

export default function CopySuccess() {
  return (
    <div className="absolute left-0 mt-4 text-accent rounded-lg shadow-md bg-white z-50">
      <div className="flex items-center gap-x-3 rounded-lg">
        <div className="bg-[#DCFFD9] py-2 px-2 rounded-l-lg">
          <img src={tick} />
        </div>
        <p className="pr-2 md:text-14px md:pr-2">Code Copied</p>
      </div>
    </div>
  );
}
