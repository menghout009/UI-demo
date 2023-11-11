import React, { useState } from "react";
import iconKey from "../../../assets/icon/Key.svg";
import vector from "../../../assets/icon/Vector.svg";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../components/Logo";
import DoneResetPassword from "../../../components/popups/donePopup/DoneResetPassword";

function ResetPasswordForm() {
  // pop up done
  let [isDoneCreate, setDoneCreate] = useState(false);

  function openDoneCreate() {
    setDoneCreate(true);
  }

  // const handleClick = () => {
  //   // Call both actions when the button is clicked
  //   closeModal();
  //   openDoneCreate();
  // };
  return (
    <div>
      <NavLink to={"/signin"}>
        <Logo />
      </NavLink>

      <div className="h-screen flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0 bg-background-color">
        <div className="w-full p-10 bg-white shadow-md md:mt-0 sm:max-w-md sm:p-8 rounded-xl">
          <div className="m-auto">
            <div className="flex justify-center">
              <img src={iconKey} width={60} height={60} alt="" />
            </div>
            <h2 className="mb-1 text-xl font-sp-pro-text-semibold leading-tight text-primary md:text-2xl text-center pt-4">
              New Password
            </h2>
            <p className="text-center text-sm text-text-color font-sp-pro-text-regular pt-1">
              Please enter your email address.
            </p>

            {/* form */}
            <form action="" className="font-sp-pro-text-regular">
              <div className="md:space-y-5 pt-5">
                <div className="text-left">
                  <label className="block mb-2 ml-1 text-sm">
                    New password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="text-sm bg-background-color placeholder:text-gray-400 border-[#E1E9EE] placeholder-black placeholder-opacity-20  border rounded-lg block w-full py-2.5 px-4 mb-1 outline-none focus:border-primary out"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="text-left">
                  <label className="block mb-2 ml-1  text-text-color" >
                    Confirm password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="text-sm bg-background-color placeholder:text-gray-400 border-[#E1E9EE] 
                      border rounded-lg block w-full py-2.5 px-4 mb-1 outline-none focus:border-primary out"
                    placeholder="Enter new password"
                  />
                </div>

                <div className="pt-2">
    
                    <button
                      type="button"
                      className="hover:bg-pending-hover w-full rounded-lg bg-primary px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white"
                      onClick={openDoneCreate}
                    >
                      Send
                    </button>
                  
                </div>
              </div>
              <div className="py-2 text-sm text-center text-text-color hover:text-text-color font-sp-pro-text-medium mt-6">
                <Link to={"/signin"}>
                  <p>
                    {" "}
                    Remember password ?
                    <span className="text-primary"> Sign in</span>
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <DoneResetPassword isDoneCreate={isDoneCreate} setDoneCreate={setDoneCreate}/>

    </div>
  );
}

export default ResetPasswordForm;
