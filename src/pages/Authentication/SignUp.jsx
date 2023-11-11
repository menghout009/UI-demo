import React, { useEffect, useState } from "react";
import NavbarAuth from "../../components/navbar/NavbarAuth";
import background from "../../assets/background/bg.svg";
import githubIcon from "../../assets/icon/github.svg";
import googleIcon from "../../assets/icon/google.svg";
import leftImg from "../../assets/images/signup-left.svg";
import rightImg from "../../assets/images/signup-right.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../redux/service/authenticationService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { changesuccess } from "../../redux/slice/authSlice";

function SignUp() {
  const { success, error, data } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("* Please provide your username "),
      password: Yup.string()
        .required("* Password is a required field")
        .min(8, "Password must have more than 8 characters "),
      email: Yup.string()
        .matches(
          "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
          "Email should be 'example@somthing.com'"
        )
        .required("* Please provide your email address"),
    }),
    onSubmit: (values) => {
      dispatch(userRegister(values));
    },
  });
  //console.log("success",success);
  useEffect(() => {
    if (success) {
      dispatch(changesuccess());
      navigate("/signin");
    }
  }, [success]);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handlerRegister = async (event) => {
    event.preventDefault();
    dispatch(userRegister(userData));
  };
  return (
    <div className="w-full  bg-background-color">
      <div>
        <div className="absolute top-0 left-0">
          <NavbarAuth />
        </div>
        <div className="w-full relative flex justify-center">
          <img src={background} alt="" className="w-full " />
        </div>
      </div>

      {/* form */}
      <div className="absolute top-0 left-0 flex justify-center inset-0 2xl:top-44 xl:top-28 ">
        <div className="flex flex-col gap-y-3">
          <div className="2xl:pb-4 xl:pb-1 text-background-color">
            <h1 className="2xl:text-3xl xl:text-2xl text-lg  font-sp-pro-text-bold 2xl:pb-3 xl:pb-2 flex justify-center">
              Welcome !
            </h1>
            <p className="font-sp-pro-text-regular 2xl:text-[16px]   xl:text-[14px] flex justify-center pb-1">
              Use these awesome form to register account for auto
            </p>
            <p className="font-sp-pro-text-regular text-[14px] flex justify-center ">
              deploy your application with
              <span className="font-semibold px-1"> AutoPilot</span>
            </p>
          </div>
          <div>
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white  2xl:px-12 2xl:py-10 xl:px-12 xl:py-10 flex flex-col justify-center 2xl:gap-y-6 xl:gap-y-2 rounded-xl lg:shadow-lg "
            >
              <div className=" xs:p-0 mx-auto 2xl:w-[380px] xl:w-[330px] w-[380px] ">
                <h1 className="font-sp-pro-text-regular text-center text-text-color text-[16px] max-sm:pt-5 max-sm:text-2xl">
                  Register with
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
                <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary ">
                  <label className="font-sp-pro-text-regular 2xl:text-sm xl:text-[14px]  block pb-2  text-text-color">
                    Username
                  </label>
                  <input
                    className="border-[#E2E8F0]  bg-background-color focus:border-primary focus:ring-primary  border text-18px
                     rounded-lg 2xl:px-2 2xl:py-3 xl:px-1.5 xl:py-2.5 px-2 py-3  max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full 
                      text-gray-700 mr-3  leading-tight focus:outline-none placeholder:px-3 placeholder:text-sm"
                    type="text"
                    placeholder="Username"
                    aria-label="Full name"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                  <div className="lg:h-6  h-3 ">
                    {formik.touched.username && formik.errors.username ? (
                      <div className="text-[14px] font-medium text-red-600 ">
                        {formik.errors.username}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary ">
                  <label className="font-sp-pro-text-regular  2xl:text-sm xl:text-[14px]  text-sm  block pb-2  text-text-color">
                    Email
                  </label>
                  <input
                    className="border-[#E2E8F0]  bg-background-color focus:border-primary focus:ring-primary border text-18px 
                rounded-lg 2xl:px-2 2xl:py-3 xl:px-1.5 xl:py-2.5 px-2 py-3  max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  
                leading-tight focus:outline-none placeholder:px-3 placeholder:text-sm"
                    type="email"
                    placeholder="Email"
                    aria-label="Full name"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  <div className="lg:h-6  h-3 ">
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-[14px] font-medium text-red-600 ">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary  ">
                  <label className="font-sp-pro-text-regular 2xl:text-sm xl:text-[14px] block pb-2  text-text-color">
                    Password
                  </label>
                  <input
                    className="border-[#E2E8F0]  bg-background-color focus:border-primary
                     focus:ring-primary border text-18px rounded-lg 2xl:px-2 2xl:py-3 xl:px-1.5 xl:py-2.5 px-2 py-3 
                     max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none placeholder:px-3 placeholder:text-sm"
                    type="password"
                    placeholder="Password"
                    aria-label="Full name"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
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
                      {error.payload.response.data.detail}
                    </div>
                  ) : null}
                  {data?.error != null ? (
                    <div className="text-[14px] font-medium text-red-600 ">
                      {data.error}
                    </div>
                  ) : null}
                </div>
                <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary pb-6">
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-pending-hover  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-sp-pro-text-regular">
                      Remember me
                    </span>
                  </label>
                </div>

                <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary pb-4">
                  <button
                    className="border-[#E2E8F0] focus:border-btn-primary focus:ring-btn-primary border text-18px 
                    rounded-lg 2xl:px-2 2xl:py-3 xl:px-1.5 xl:py-2.5 px-2 py-3  max-sm:appearance-none max-sm:bg-transparent
                     max-sm:border-none w-full font-sp-pro-text-medium
                     text-background-color mr-3  leading-tight focus:outline-none placeholder:px-3 bg-primary hover:bg-blue-500"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
                <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary  justify-center flex items-center">
                  <p className="font-sp-pro-text-medium text-text-color 2xl:text-sm xl:text-[14px]">
                    Already have an account ?
                    <NavLink to={"/signin"}>
                      <a className="text-primary cursor-pointer pl-1">
                        Sign in
                      </a>
                    </NavLink>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-between 2xl:p-12 xl:px-14 2xl:mt-8 xl:mt-32">
        <div>
          <img src={leftImg} alt="" className="xl:h-60 2xl:h-80" />
        </div>
        <div>
          <img src={rightImg} alt="" className="xl:h-60 2xl:mt-6 xl:mt-0" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
