import React, { useEffect, useState } from "react";
import NavbarAuth from "../../components/navbar/NavbarAuth";
import background from "../../assets/background/bg.svg";
import githubIcon from "../../assets/icon/github.svg";
import googleIcon from "../../assets/icon/google.svg";
import leftImg from "../../assets/images/login-left.svg";
import rightImg from "../../assets/images/login-rigth.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmEmail,
  userLogin,
} from "../../redux/service/authenticationService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { onchangError } from "../../redux/slice/authSlice";
function SignInPage() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const { success, error } = useSelector((state) => state.auth);
  const handlerLogin = async (event) => {
    event.preventDefault();
    console.log(userData);
    // dispatch(userLogin(userData))
  };
  const { search } = useLocation();
  useEffect(() => {
    const token = new URLSearchParams(search).get("token");
    if (token) {
      dispatch(confirmEmail(token));
    }
    if (accessToken != null) {
      navigate("/allproject");
    }
  }, [success]);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("* Please provide your username"),
      password: Yup.string()
        .required("* Password is a required field")
        .min(4, "Password must have more than 4 characters "),
    }),
    onSubmit: (values) => {
      dispatch(userLogin(values));
      // console.log(values);
    },
  });
  return (
    <div className="w-full bg-background-color">
      <div className="w-full relative flex justify-center">
        <img src={background} alt="" className="w-full " />
        <div className="absolute top-0 left-0 ">
          <NavbarAuth />
        </div>
      </div>

      {/* form */}
      <div className="absolute top-0 left-0 flex justify-center inset-0 2xl:top-48 xl:top-24 ">
        <div className="flex flex-col xl:gap-y-6">
          <div className="text-border-color font-sp-pro-text-regular">
            <h1 className="2xl:text-3xl xl:text-2xl text-lg  font-sp-pro-text-bold 2xl:pb-3 xl:pb-2 flex justify-center">
              Welcome Back!
            </h1>
            <p className=" font-sp-pro-text-regular 2xl:text-[16px]   xl:text-[14px] flex justify-center pb-1">
              Use these awesome form to login account for auto
            </p>
            <p className="font-sp-pro-text-regular 2xl:text-[16px]   xl:text-[14px] flex justify-center pb-1 ">
              deploy your application with
              <span className="font-semibold px-1"> AutoPilot</span>
            </p>
          </div>

          <div>
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white  2xl:px-12 2xl:py-10 xl:p-8 flex flex-col justify-center 2xl:gap-y-6 xl:gap-y- rounded-xl lg:shadow-lg "
            >
              <div className="xs:p-0 mx-auto w-[380px] md:max-w-md">
                <h1 className="font-sp-pro-text-regular text-center text-text-color text-[16px] max-sm:pt-5 max-sm:text-2xl">
                  Login with
                </h1>
                <div className="flex justify-center items-center gap-x-4 pt-8 pb-2 cursor-pointer">
                  <div
                    className="border-border-color border-[1px] 2xl:w-16 2xl:h-16 xl:w-14 xl:h-14 2xl:rounded-2xl  xl:rounded-xl flex 
                  justify-center items-center hover:bg-slate-200 transition-all duration-300"
                  >
                    <a href="">
                      <img
                        src={githubIcon}
                        alt="icon"
                        className="2xl:h-10 xl:h-8"
                      />
                    </a>
                  </div>
                  <div
                    className="border-border-color border-[1px] 2xl:w-16 2xl:h-16 xl:w-14 xl:h-14 2xl:rounded-2xl  xl:rounded-xl
                   flex justify-center items-center  hover:bg-slate-200 transition-all duration-300"
                  >
                    <a href="">
                      <img
                        src={googleIcon}
                        alt="icon"
                        className="2xl:h-10 xl:h-8"
                      />
                    </a>
                  </div>
                </div>
                <span className="flex justify-center items-center 2xl:text-lg xl:text-md font-sp-pro-text-regular">
                  or
                </span>
                {/* input */}
                <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary 2xl:pb-4 xl:pb-2 xl:px-2 2xl:px-0">
                  <label className="font-sp-pro-text-regular text-sm  block pb-2  text-text-color">
                    Username
                  </label>
                  <input
                    className="border-[#E2E8F0]  bg-background-color focus:border-primary focus:ring-primary  border text-18px
                                        rounded-lg 2xl:px-2 2xl:py-3 xl:px-0.5 xl:py-2.5 px-2 py-3  max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full 
                                         text-gray-700 mr-3  leading-tight focus:outline-none placeholder:px-3 placeholder:text-sm"
                    type="text"
                    placeholder="Username"
                    aria-label="Full name"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onFocus={() => dispatch(onchangError())}
                  />
                  <div className="lg:h-6  h-3 ">
                    {formik.touched.username && formik.errors.username ? (
                      <div className="text-[14px] font-medium text-red-600 ">
                        {formik.errors.username}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary 2xl:pb-4 xl:pb-2 xl:px-2 2xl:px-0">
                  <label className="font-sp-pro-text-regular text-sm  block pb-2  text-text-color">
                    Password
                  </label>
                  <input
                    className="border-[#E2E8F0]  bg-background-color focus:border-primary focus:ring-primary  border text-18px
                    rounded-lg 2xl:px-2 2xl:py-3 xl:px-0.5 xl:py-2.5 px-2 py-3  max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full 
                     text-gray-700 mr-3  leading-tight focus:outline-none placeholder:px-3 placeholder:text-sm"
                    
                    type="password"
                    placeholder="Password"
                    aria-label="Full name"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onFocus={() => dispatch(onchangError())}
                  />
                  <div className="lg:h-6  h-3 ">
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-[14px] font-medium text-red-600 ">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  {error != null ? (
                    <div className="text-[14px] font-medium text-red-600 ">
                      {error?.payload.response.data.detail}
                    </div>
                  ) : null}
                </div>
                <div className="w-full flex justify-between font-sp-pro-text-regular 2xl:pb-4 xl:pb-2 xl:px-2 2xl:px-0">
                  <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary pb-6">
                    <label class="relative inline-flex items-center cursor-pointer ">
                      <input
                        type="checkbox"
                        value=""
                        class="sr-only peer  bg-background-color"
                      />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-pending-hover  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      <span class="ml-3 text-sm font-sp-pro-text-regular">
                        Remember me
                      </span>
                    </label>
                  </div>
                  <NavLink to={"/forgotpassword"}>
                    <div className="underline">
                      <a href="">Forgot Password ?</a>
                    </div>
                  </NavLink>
                </div>

                <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary pb-4 2xl:pb-4 xl:pb-2 xl:px-2 2xl:px-0">
                  <button
                    className="hover:bg-blue-500 2xl:px-2 2xl:py-3 xl:px-0.5 xl:py-2.5  border-[#E2E8F0] font-sp-pro-text-semibold focus:border-btn-primary focus:ring-btn-primary border text-18px rounded-lg px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-background-color mr-3  leading-tight focus:outline-none placeholder:px-3 bg-primary"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary  justify-center flex items-center">
                  <p className="font-sp-pro-text-medium text-text-color 2xl:text-sm xl:text-[14px 2xl:mt-0 xl:mt-1">
                    Don't have an account ?
                    <NavLink to={"/signup"}>
                      <a className="text-primary cursor-pointer pl-1">
                        Sign up
                      </a>
                    </NavLink>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-between 2xl:p-12 xl:px-14 2xl:mt-8 xl:mt-24">
        <div>
          <img src={leftImg} alt="" className="xl:h-60 2xl:h-80"/>
        </div>
        <div>
          <img src={rightImg} alt="" className="xl:h-60 2xl:h-80 mt-2"/>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
