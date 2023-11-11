import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../assets/images/land_banner.png";
import react from "../assets/images/react.png";
import angular from "../assets/images/angular.png";
import spring from "../assets/images/spring-boot.png";
import vue from "../assets/images/vue.png";
import django from "../assets/images/django.png";
import flask from "../assets/images/flask.png";
import work from "../assets/images/work.png";
import tick from "../assets/images/tickLogo.svg";
import company from "../assets/images/company.png";
import developer from "../assets/images/developer.png";
import student from "../assets/images/student.png";
import building from "../assets/images/building.png";
import github from "../assets/images/github.png";
import gitlab from "../assets/images/gitlab.png";
import feature from "../assets/images/Provide-Feature.jpg";
import NavbarLanding from "../components/navbar/NavbarLanding";
import FooterComponent from "../components/footer/FooterComponent";
import girlimage from "../assets/images/girlimage.png";
import { NavLink, Link } from "react-router-dom";
import developerImg from "../assets/images/developer.jpg";
import studentImg from "../assets/images/student.jpg";
import companyImg from "../assets/images/company.jpg";

import { TypeAnimation } from "react-type-animation";

// import {devImage} from "../assets/images/landingDev.jpg"

export default function LandingPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-background-color overflow-hidden">
      <div className="w-full relative pb-48 bg-background-color">
        <div className="absolute top-0 left-0">
          <NavbarLanding />
        </div>
      </div>
      <div className=" w-full  flex justify-between gap-x-4 px-44 items-center ">
        <div className="w-1/2 ">
          <div>
            <h2 className="font-bold text-[30px] leading-[45px] font-sp-pro-text-bold pb-6">
              Elevate Your Code, <b className=" text-primary">Automate</b> Your
              Success
            </h2>
            <h1 className=" text-[36px] font-sp-pro-text-bold pb-8">
              want anything to be easy with{" "}
              <b className=" text-primary">Auto</b>Pilot
            </h1>
            <div className="font-sp-pro-text-regular text-text-color text-md pb-12 flex flex-col gap-y-2">
              <p> Today every company needs apps to engage their</p>
              <p>customers and run thier business. Step up your ability to</p>
              <p>
                build, manage, and deploy great app with{" "}
                <span className=" text-primary">Auto Pilot</span>
              </p>
            </div>
            <NavLink to={"/signin"}>
              <button
                type="button"
                class="text-white bg-primary hover:bg-blue-700  font-sp-pro-text-semibold rounded-xl text- px-8 py-3 text-center"
              >
                Deploy Now
              </button>
            </NavLink>
          </div>
        </div>
        <div className=" w-1/2 flex justify-end">
          <div className=" w-1/6"></div>
          <div className="w-5/6">
            <img src={banner} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 place-items-center  overflow-hidden mt-8 py-12">
        <div>
          <h1 className=" uppercase font-sp-pro-text-semibold text-sm py-4">
            officially supported languages
          </h1>
        </div>
        <div className=" flex justify-center items-center  rounded-xl bg-background-color shadow-lg p-4 ">
          <div className=" px-8">
            <img width={40} className=" mx-auto" src={react} alt="" />
            <p className=" text-center font-sp-pro-text-regular text-xs">
              React JS
            </p>
          </div>
          <div className=" w-px h-8 bg-slate-400"></div>
          <div className=" px-8">
            <img width={40} className=" mx-auto" src={angular} alt="" />
            <p className=" text-center font-sp-pro-text-regular">Angular</p>
          </div>
          <div className=" w-px h-8 bg-slate-400"></div>
          <div className=" px-8">
            <img width={40} className=" mx-auto" src={spring} alt="" />
            <p className=" text-center font-sp-pro-text-regular">SprinBoot</p>
          </div>
          <div className=" w-px h-8 bg-slate-400"></div>
          <div className=" px-8">
            <img width={40} className=" mx-auto" src={vue} alt="" />
            <p className=" text-center font-sp-pro-text-regular">Vue Js</p>
          </div>
          <div className=" w-px h8 bg-slate-400"></div>
          <div className=" px-8">
            <img width={40} className=" mx-auto" src={django} alt="" />
            <p className=" text-center font-sp-pro-text-regular">Django</p>
          </div>
          <div className=" w-px h-8 bg-slate-400"></div>
          <div className=" px-8">
            <img width={40} className=" mx-auto" src={flask} alt="" />
            <p className=" text-center font-sp-pro-text-regular">Flask</p>
          </div>
        </div>
      </div>
      <div
        className=" w-full flex justify-between items-center px-56 py-20 overflow-hidde bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${feature})` }}
      >
        <div className=" w-1/2 " data-aos="zoom-in-right">
          <img width={400} src={work} alt="" />
        </div>
        <div className=" w-1/2 " data-aos="fade-down-left">
          <h1 className=" font-sp-pro-text-bold text-[#324C5B] text-2xl mb-3">
            We provide many features you can use
          </h1>
          <p className=" font-sp-pro-text-regular text-text-color text-sm">
            The AutoPilot experience developers love with the <br /> enterprise
            features large companies need.
          </p>
          <div className=" mt-5">
            <div className=" flex">
              <img src={tick} alt="" />
              <div className=" capitalize inline-block font-sp-pro-text-heavy text-secondary text-lg ml-3">
                Auto deploy your application
              </div>
            </div>
            <div className=" flex mt-4">
              <img src={tick} alt="" />
              <div className=" capitalize inline-block font-sp-pro-text-heavy text-secondary text-lg ml-3">
                Auto setup HTTPS
              </div>
            </div>
            <div className=" flex mt-4">
              <img src={tick} alt="" />
              <div className=" capitalize inline-block font-sp-pro-text-heavy text-secondary text-lg ml-3">
                Provide your Domain name
              </div>
            </div>
            <div className=" flex mt-4">
              <img src={tick} alt="" />
              <div className=" capitalize inline-block font-sp-pro-text-heavy text-secondary text-lg ml-3">
                Monitoring your Application
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Container for demo purpose --> */}
      <div class="container my-8 mx-auto md:px-6 ">
        <section class="mt-32 text-center">
          {/* <h2 class="mb-3 text-center text-2xl font-sp-pro-text-bold text-secondary">
            Developers, students, and businesses of all sizes use
          </h2> */}

          <h2 class="mb-2 text-center text-3xl font-bold font-sp-pro-text-bold text-text-color">
            What <span className="text-primary">Autopilot</span> can help ?
          </h2>
          <div className="text-lg font-sp-pro-text-bold text-primary mb-20">
            <TypeAnimation
              sequence={[
                2000, // Waits 1s
                "Auto deploy applications ", // Types 'One'
                2000, // Waits 1s
                "Auto setup HTTPS", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Free Domain name !", // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em" }}
            />
          </div>

          <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            <div data-aos="zoom-in-right" class="mb-6 lg:mb-0">
              <div
                class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img src={developerImg} class="w-full" alt="Louvre" />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                </a>
              </div>

              <h5 class="mb-3 text-lg font-bold">Developers</h5>
              <div class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-2 h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
                Freelancer
              </div>
              <p class="mb-6 text-neutral-500 ">
                <small className="text-text-color">
                  Published <u>13.01.2022</u> by
                  <a href="#!"> DemPo</a>
                </small>
              </p>
              <p class="text-text-color font-sp-pro-text-regular text-sm">
                Autopilot manages app deployments with Git, the popular version
                control system. You don’t need to be a Git expert to deploy code
                to Autopilot, but it’s helpful to learn the basics.
              </p>
            </div>

            <div data-aos="zoom-in-right" class="mb-6 lg:mb-0">
              <div
                class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img src={studentImg} class="w-full" alt="Louvre" />
                <a href="#!">
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                </a>
              </div>

              <h5 class="mb-3 text-lg font-bold">Students</h5>
              <div class="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-2 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                  />
                </svg>
                Teams
              </div>
              <p class="mb-6 text-text-color">
                <small>
                  Published <u>31.10.2023</u> by
                  <a href="#!"> Alexa</a>
                </small>
              </p>
              <p class="text-text-color font-sp-pro-text-regular text-sm">
                You don’t need to make many changes to an application in order
                to run it on Auropilot. One requirement is informing the
                platform as to which parts of your application are runnable.
              </p>
            </div>

            <div class="mb-0" data-aos="zoom-in-right">
              <div>
                <div
                  class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={companyImg} class="w-full" alt="Louvre" />
                  <a href="#!">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>

                <h5 class="mb-3 text-lg font-bold">Companies</h5>
                <div class="mb-3 flex items-center justify-center text-sm font-medium text-yellow-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                  Business
                </div>
                <p class="mb-6 text-text-color ">
                  <small>
                    Published <u>31.10.2023</u> by
                    <a href="#!"> Yeak Tong</a>
                  </small>
                </p>
                <p class="text-text-color font-sp-pro-text-regular text-sm">
                  When you deploy a new version of an application, all of the
                  currently executing dynos are killed, and new ones (with the
                  new release) are started to replace them{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}

      <div className=" w-full  overflow-hidden  flex justify-center items-center px-52 pt-28  ">
        <div className=" w-1/2 " data-aos="zoom-out-right">
          <img width={500} src={building} alt="" />
        </div>
        <div className=" w-1/2 " data-aos="zoom-out-left">
          <h1 className=" text-3xl font-sp-pro-text-bold text-black">
            Automation deploy <br /> with Git &nbsp;
            <img className=" inline-block" src={github} alt="" />
            <img className=" inline-block ml-2" src={gitlab} alt="" />
          </h1>
          <div className=" h-1 w-14 bg-black rounded py mt-5"></div>
          <p className=" mt-7 text-text-color font-sp-pro-text-regular text-[14px]">
            AutoPilot manages app deployments with{" "}
            <a className=" underline" href="http://">
              Git
            </a>
            , the popular version control system. You don’t need to be a Git
            expert to deploy code to AuoPilot, but it’s helpful to learn the
            basics.
          </p>
          {/* <button type="button" class=" mt-10 px-9 py-3 text-text-color hover:text-white border border-primary hover:bg-primary font-sp-pro-text-regular rounded-3xl text-lg  text-center">Learn More</button> */}
          <button
            type="button"
            class=" mt-6 inline-block rounded-full border-2 border-primary px-8 py-3 text-xs font-sp-pro-text-regular uppercase leading-normal text-text-color transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700"
            data-te-ripple-init
          >
            Learn more
          </button>
        </div>
      </div>

      <div className="bg-[#F4F4F4] relative py-20 w-full px-20">
        <div
          className="bg-background-color  flex justify-between px-10 "
          data-aos="zoom-out-left"
        >
          <div className=" order-1 ">
            <img src={girlimage} alt="" />
          </div>
          <div className="flex justify-center items-center mx-auto ">
            <div className="mx-auto lg:ml-0 md:ml-16 sm:ml-9 ml-8">
              <div className="3xl:text-4xl text-3xl 3xl:w-[600px] 2xl:w-[500px] xl:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] text-left font-sp-pro-text-bold text-text-color 3xl:pt-[65px] 2xl:pt-[70px] md:pt-[45px] xl:pt-[45px] pt-[45px] ">
                Create your account today and get started for free!
              </div>
              <div className="text-text-color py-3 text-left flex flex-col gap-y-2">
                Auto deploy your Application for a second *
                <div> Delivery your Application to customer quickly .</div>
                <div className="text-primary">
                  {" "}
                  * Aupilot is the best choise for Developer{" "}
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row py-3">
                <div className="lg:ml-0 md:ml-[55px] sm:ml-[30px] ml-[40px]">
                  <NavLink
                    to="/signup"
                    type="button"
                    className=" py-2 rounded-md text-primary   hover:bg-hover-yellow font-medium text-sm px-8 text-center mr-10 border border-pending"
                  >
                    Sign Up
                  </NavLink>
                  <NavLink
                    to="/signin"
                    type="button"
                    className="py-2 rounded-md text-pending bg-white font-medium border border-pending text-sm px-8 text-center mr-10 shadow"
                  >
                    Sign In
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* feature */}
      <div class="container mt-32 mx-auto md:px-6">
        <section class="mb-22">
          <div class="flex flex-wrap" data-aos="zoom-in">
            <div class="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
              <p class="mb-6 font-bold uppercase text-primary dark:text-primary-400">
                Features
              </p>
              <h2 class="mb-6 text-3xl font-bold">
                Why is it so
                <u class="text-primary dark:text-primary-400">great?</u>
              </h2>

              <p class="mb-12 text-text-color font-sp-pro-text-light">
                Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                neque iaculis malesuada. Aenean gravida magna orci, non
                efficitur est porta id. Donec magna diam.
              </p>
            </div>

            <div class="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
              <div class="flex flex-wrap">
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                  <div class="flex">
                    <div class="shrink-0">
                      <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4 grow ">
                      <p class="mb-3 font-bold">Support 24/7</p>
                      <p class="text-text-color font-sp-pro-text-light">
                        Pellentesque mollis, metus nec fringilla aliquam. Donec
                        consequat orci quis volutpat imperdiet.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                  <div class="flex">
                    <div class="shrink-0">
                      <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4 grow">
                      <p class="mb-3 font-bold">Auto setup HTTPS</p>
                      <p class="text-text-color font-sp-pro-text-light">
                        Magna lacus iaculis elit, quis pharetra varius. Aenean
                        lectus ex, placerat id tellus in eros.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                  <div class="flex">
                    <div class="shrink-0">
                      <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4 grow">
                      <p class="mb-3 font-bold">Delivery app quickly</p>
                      <p class="text-text-color font-sp-pro-text-light">
                        Pellentesque varius ex vel consequat quis. Sed mauris
                        ex, imperdiet sit amet nisl ac, ultrices.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                  <div class="flex">
                    <div class="shrink-0">
                      <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4 grow">
                      <p class="mb-3 font-bold">Improve your development</p>
                      <p class="text-text-color font-sp-pro-text-light">
                        Vestibulum gravida iaculis nisl, vel lobortis eros.
                        Praesent vulputate lacus bibendum augue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      <div className="pt-12">
        <FooterComponent />
      </div>
    </div>
  );
}
