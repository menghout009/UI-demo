import React from "react";
import logo from "../assets/logo/auto-pilot_no_bg1.png";
import iconDoc from "../assets/icon/Document.svg";
import banner from "../assets/images/support/support_banner.svg";
import hero from "../assets/images/support/heros.svg"
import coner from "../assets/images/support/coner.svg";
import phone from "../assets/images/support/phone.svg";
import chat from "../assets/images/support/chat.svg";
import mail from "../assets/images/support/mail.svg";
import contact from "../assets/images/support/contact.svg";
import bg from "../assets/images/support/bg.svg";
import mails from "../assets/images/support/icon/mails.svg";
import facebook from "../assets/images/support/icon/facebook.png";
import call from "../assets/images/support/icon/call.svg";
import card from "../assets/images/support/coner_card.svg";
import telegram from "../assets/images/support/icon/telegram.svg";
import nang from "../assets/images/support/profile/nang.jpg";
import hout from "../assets/images/support/profile/hout.jpg";
import tong from "../assets/images/support/profile/tong.jpg";
import po from "../assets/images/support/profile/po.jpg";
import rum from "../assets/images/support/profile/rum.jpg";
import meng from "../assets/images/support/profile/meng.jpg";
import { NavLink } from "react-router-dom";
import FooterComponent from "../components/footer/FooterComponent";
import NavbarLanding from "../components/navbar/NavbarLanding";
export default function () {
  return (
    <div className=" flex flex-col">
      <div className="w-full relative overflow-hidden">
        <div className="absolute top-0 left-0">
          <NavbarLanding />
        </div>
        <img
          className=" w-[100px] absolute top-0 right-0 2xl:w-[1000px] xl:w-[900px]"
          src={coner}
          alt=""
        />
          <div class="  font-open-sans py-24" >
            <div class="container mx-auto px-8 py-8 lg:py-40 relative flex flex-col lg:flex-row items-center">
              <div class="lg:w-1/2 flex flex-col items-center lg:items-start">
                <h1 class="text-center lg:text-left text-3xl sm:text-4xl font-sp-pro-text-medium text-text-color leading-tight mb-7">
                Welcome to <span className=" text-primary">AutoPilot</span> !{" "}
                  <p class="font-sp-pro-text-medium text-2xl sm:text-3xl block pt-3">
                    Auto<span className=" text-primary">Pilot</span> offer support
                  </p>
                  <p class="font-sp-pro-text-medium text-primary text-2xl sm:text-3xl block pt-2">
                    for all types of teams, 
                  </p>
                </h1>
                <p class=" font-sp-pro-text-regular text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">
                  We provides a variety of technical support features to 
                </p>
                <p class=" font-sp-pro-text-regular text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">
                  assist users with their technical issues.
                </p>
                <a
                  href="#"
                  class="bg-blue-400 hover:bg-blue-500 mt-8 py-2 px-6 text-lg rounded-full font-sp-pro-text-bold uppercase text-white tracking-widest"
                >
                  Contact Us
                </a>
                
              </div>
              <div class="w-full sm:w-2/3 lg:absolute top-0 right-0 bottom-0 mt-16 lg:mr-8 flex justify-end">
                <img width={650} src={banner} alt="" />
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
      <div className=" w-full overflow-hidden flex flex-col  items-center pt-14 pb-24 bg-no-repeat bg-cover px-52 border-gray-200 border-solid border-y-2">
        <div className=" w-1/3 text-center">
          <h2 className=" font-sp-pro-text-semibold text-text-color text-[27px] 2xl:text-[25px]">
            We are here to help you
          </h2>
        </div>
        {/* <div className=" w-full  py-10 flex pt-7 2xl:space-x-[150px]  justify-around overflow-hidden">
          <div className=" bg-[#F0F0FF] w-1/3  flex flex-col justify-center items-center   rounded-lg">
            <img className=" w-[100px] 2xl:w-[70px]" src={phone} alt="" />
            <h1 className=" pt-3 text font-sp-pro-text-semibold text-primary text-base">
              Call Us
            </h1>
            <span className=" font-sp-pro-text-regular text-text-color text-sm">
              8AM-8PM
            </span>
            <span className=" font-sp-pro-text-regular text-text-color text-sm">
              Tel: 012 888 888
            </span>
          </div>
          <div className=" bg-[#F0F0FF] w-1/3  flex flex-col justify-center items-center p-5  rounded-lg">
            <img className=" w-[150px] 2xl:w-[100px]" src={chat} alt="" />
            <h1 className=" pt-3 text font-sp-pro-text-semibold text-primary text-base">
              Live Chat
            </h1>
            <span className=" font-sp-pro-text-regular text-text-color text-sm">
              Online and Always available, we are
            </span>
            <span className=" font-sp-pro-text-regular text-text-color text-sm">
              here to answer your questions 24/7.
            </span>
            <span className=" font-sp-pro-text-regular text-text-color text-sm">
              contact us via telegram
            </span>
          </div>
          <div className=" bg-[#F0F0FF] w-1/3  flex flex-col justify-center items-center p-5  rounded-lg">
            <img className=" w-[150px] 2xl:w-[100px]" src={mail} alt="" />
            <h1 className=" pt-3 text font-sp-pro-text-semibold text-primary text-base">
              Email Us
            </h1>
            <span className=" font-sp-pro-text-regular text-text-color text-sm">
              Email us, 24/7, we’re always{" "}
            </span>
            <span className=" font-sp-pro-text-regular text-text-color text-sm">
              responding
            </span>
          </div>
        </div> */}
        <div class="py-20 px-36">
          <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
            <div class="mx-auto grid gap-x-16 md:w-3/4 lg:w-full lg:grid-cols-3">
              <div class="bg-[#F0F0FF] rounded-xl shadow-xl px-8 py-10 sm:px-12 lg:px-8 flex flex-col items-center">
                <div class="mb-12 flex flex-col items-center">
                  <h3 class="text-xl font-semibold text-primary mb-2">
                    Call Us
                  </h3>
                  <span>8AM-8PM</span>
                  <span class=" font-sp-pro-text-regular text-sm">
                    Tel: 012 888 888
                  </span>
                </div>
                <img src={phone} class="w-1/4  -mb-12"></img>
              </div>
              <div class="bg-[#F0F0FF] rounded-xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 flex flex-col items-center">
                <div class="mb-12 flex flex-col items-center">
                  <h3 class="text-xl font-semibold text-primary">Live Chat</h3>
                  <span>Online and Always available, we are</span>
                  <span>here to answer your questions 24/7. </span>
                  <span>contact us via telegram</span>
                </div>
                <img src={chat} class="w-2/5 " alt="illustration"></img>
              </div>
              <div class="bg-[#F0F0FF] rounded-xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 flex flex-col items-center">
                <div class="mb-12 flex flex-col items-center">
                  <h3 class="text-xl font-semibold text-primary">Email Us</h3>
                  <span className=" font-sp-pro-text-regular">
                    Email us, 24/7, we’re always{" "}
                  </span>
                  <span className=" font-sp-pro-text-regular">responding</span>
                </div>
                <img src={mail} class="w-1/2 " alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center">
        <div className=" w-full flex items-center overflow-hidden ">
          <div className=" w-2/5 flex justify-center  rounded-br-[100px] rounded-tl-[100px] bg-cover p-10">
            <img className=" w-[400px] 2xl:w-[400px]" src={contact} alt="" />
          </div>
          <div className="w-1/2 flex flex-col  items-center">
            <div className=" w-full flex justify-center font-sp-pro-text-semibold text-text-color text-3xl 2xl:text-2xl">
              <h1>Contact Us</h1>
            </div>
            {/* <div className=" w-full flex justify-evenly pt-14 2xl:pt-12">
              <div className=" flex flex-col justify-center items-center bg-[#F0F0FF] px-16 py-3">
                <img className=" w-[40px] 2xl:w-[30px]" src={facebook} alt="" />
                <h2 className=" font-sp-pro-text-semibold text-lg pt-2 2xl:text-sm">
                  Facebook
                </h2>
                <p className=" font-sp-pro-text-regular text-xs">AutoPilot</p>
              </div>
              <div className=" flex flex-col justify-center items-center bg-[#F0F0FF] px-16 py-3 2xl:px-8">
                <img className=" w-[40px] 2xl:w-[30px]" src={mails} alt="" />
                <h2 className=" font-sp-pro-text-semibold text-lg pt-2 2xl:text-sm">
                  Email
                </h2>
                <p className=" font-sp-pro-text-regular text-xs">
                  autopilot@gmail.com
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center bg-[#F0F0FF] px-16 py-3">
                <img className=" w-[40px] 2xl:w-[30px]" src={call} alt="" />
                <h2 className=" font-sp-pro-text-semibold text-lg pt-2 2xl:text-sm">
                  Phone
                </h2>
                <p className=" font-sp-pro-text-regular text-xs">012 345 678</p>
              </div>
            </div> */}
            <div class="container flex flex-col mx-auto bg-white">
              <div class="w-full draggable">
                <div class="container flex flex-col items-center gap-16 mx-auto my-10">
                  <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                      <span>
                        <img width={40} src={mails} alt="" />
                      </span>
                      <p class="text-2xl font-sp-pro-text-semibold text-dark-grey-900">
                        Email
                      </p>
                      <p class="text-base font-sp-pro-text-regular leading-7 text-dark-grey-600">
                        Contact us at
                      </p>
                      <a
                        class="text-lg font-sp-pro-text-medium text-purple-blue-500"
                        href="mailto: hello@loopple.com"
                      >
                        autopilot@gmail.com
                      </a>
                    </div>
                    <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                      <span>
                        <img width={40} src={call} alt="" />
                      </span>
                      <p class="text-2xl font-sp-pro-text-semibold text-dark-grey-900">
                        Phone
                      </p>
                      <p class="text-base font-sp-pro-text-regular leading-7 text-dark-grey-600">
                        Reach out to us by phone
                      </p>
                      <a
                        class="text-lg font-sp-pro-text-medium text-purple-blue-500"
                        href="tel:+516-486-5135"
                      >
                        +516-486-5135
                      </a>
                    </div>
                    <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                      <span>
                        <img width={40} src={facebook} alt="" />
                      </span>
                      <p class="text-2xl font-sp-pro-text-semibold text-dark-grey-900">
                        Facebook
                      </p>
                      <p class="text-base font-sp-pro-text-regular leading-7 text-dark-grey-600">
                        Find us on social media
                      </p>
                      <a
                        class="text-lg font-sp-pro-text-medium text-purple-blue-500"
                        target="_blank"
                        href="https://www.facebook.com"
                      >
                        AutoPilots
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team */}
      <div className=" w-full pt-20 flex flex-col justify-center items-center pb-2.5">
        <div className=" flex flex-col justify-center items-center">
          <div>
            <h1 className=" text-2xl font-sp-pro-text-regular text-text-color 2xl:text-[22px]">
              Contact our Team members
            </h1>
          </div>
          <div className=" h-1 w-20 mt-1 rounded bg-primary"></div>
        </div>
      </div>
      {/* <div className=" w-full grid grid-cols-3 gap-y-16 px-24 py-10">
        <div class="flex flex-col justify-center items-center ">
          <div class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[270px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover">
              <div className=" bg-primary w-full rounded-2xl"></div>
              <div class="absolute -bottom-12 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                <img class="h-full w-full rounded-full" src={tong} alt="" />
              </div>
            </div>
            <div class="mt-16 flex flex-col items-center">
              <h4 class="text-xl font-sp-pro-text-bold text-navy-700 dark:text-white">
                Hang Yeaktong
              </h4>
              <p class="text-base font-sp-pro-text-regular text-gray-600">
                Student at KSHRD
              </p>
            </div>
            <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={telegram} alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={facebook} alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={mails} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center ">
          <div class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[270px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover">
              <div className=" bg-primary w-full rounded-2xl"></div>
              <div class="absolute -bottom-12 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                <img class="h-full w-full rounded-full" src={po} alt="" />
              </div>
            </div>
            <div class="mt-16 flex flex-col items-center">
              <h4 class="text-xl font-sp-pro-text-bold text-navy-700 dark:text-white">
                Phol Sophak
              </h4>
              <p class="text-base font-sp-pro-text-regular text-gray-600">
                Student at KSHRD
              </p>
            </div>
            <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={telegram} alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={facebook} alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={mails} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center ">
          <div class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[270px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover">
              <div className=" bg-primary w-full rounded-2xl"></div>
              <div class="absolute -bottom-12 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                <img class="h-full w-full rounded-full" src={nang} alt="" />
              </div>
            </div>
            <div class="mt-16 flex flex-col items-center">
              <h4 class="text-xl font-sp-pro-text-bold text-navy-700 dark:text-white">
                Pho Somnang
              </h4>
              <p class="text-base font-sp-pro-text-regular text-gray-600">
                Student at KSHRD
              </p>
            </div>
            <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={telegram} alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={facebook} alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={mails} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center ">
          <div class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[270px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover">
              <div className=" bg-primary w-full rounded-2xl"></div>
              <div class="absolute -bottom-12 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                <img class="h-full w-full rounded-full" src={hout} alt="" />
              </div>
            </div>
            <div class="mt-16 flex flex-col items-center">
              <h4 class="text-xl font-sp-pro-text-bold text-navy-700 dark:text-white">
                Keng Menghout
              </h4>
              <p class="text-base font-sp-pro-text-regular text-gray-600">
                Student at KSHRD
              </p>
            </div>
            <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={telegram} alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={facebook} alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={mails} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center ">
          <div class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[270px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover">
              <div className=" bg-primary w-full rounded-2xl"></div>
              <div class="absolute -bottom-12 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                <img class="h-full w-full rounded-full" src={meng} alt="" />
              </div>
            </div>
            <div class="mt-16 flex flex-col items-center">
              <h4 class="text-xl font-sp-pro-text-bold text-navy-700 dark:text-white">
                Chhoeun Yimeng
              </h4>
              <p class="text-base font-sp-pro-text-regular text-gray-600">
                Student at KSHRD
              </p>
            </div>
            <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={telegram} alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={facebook} alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={mails} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center ">
          <div class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[270px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover">
              <div className=" bg-primary w-full rounded-2xl"></div>
              <div class="absolute -bottom-12 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                <img class="h-full w-full rounded-full" src={rum} alt="" />
              </div>
            </div>
            <div class="mt-16 flex flex-col items-center">
              <h4 class="text-xl font-sp-pro-text-bold text-navy-700 dark:text-white">
                Rin Phearum
              </h4>
              <p class="text-base font-sp-pro-text-regular text-gray-600">
                Student at KSHRD
              </p>
            </div>
            <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={telegram} alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={facebook} alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <img className=" w-[35px]" src={mails} alt="" />
              </div>
            </div>
          </div>
        </div>

      </div> */}

      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-primary rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={tong}
                alt=""
              ></img>

              <h1 class="mt-4 text-2xl font-sp-pro-text-medium text-gray-700 capitalize dark:text-white group-hover:text-white">
                Han Yeaktong
              </h1>

              <p class="mt-2 text-gray-500 text-base font-sp-pro-text-regular capitalize dark:text-gray-300 group-hover:text-gray-300">
                Team leader
              </p>

              <div class="flex mt-3 -mx-2">
                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Reddit"
                >
                  <img class="w-8 h-8 fill-current" src={call} alt="" />
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Facebook"
                >
                  <img class="w-8 h-8 fill-current" src={mails} alt="" />
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                >
                  <img class="w-8 h-8 fill-current" src={telegram} alt="" />
                </a>
              </div>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-primary rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={po}
                alt=""
              ></img>

              <h1 class="mt-4 text-2xl font-sp-pro-text-medium text-gray-700 capitalize dark:text-white group-hover:text-white">
                Phol Sophak
              </h1>

              <p class="mt-2 text-gray-500 text-base font-sp-pro-text-regular capitalize dark:text-gray-300 group-hover:text-gray-300">
                Member
              </p>

              <div class="flex mt-3 -mx-2">
                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Reddit"
                >
                  <img class="w-8 h-8 fill-current" src={call} alt="" />
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Facebook"
                >
                  <img class="w-8 h-8 fill-current" src={mails} alt="" />
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                >
                  <img class="w-8 h-8 fill-current" src={telegram} alt="" />
                </a>
              </div>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-primary rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={nang}
                alt=""
              ></img>

              <h1 class="mt-4 text-2xl font-sp-pro-text-medium text-gray-700 capitalize dark:text-white group-hover:text-white">
                Pho Somnang
              </h1>

              <p class="mt-2 text-gray-500 text-base font-sp-pro-text-regular capitalize dark:text-gray-300 group-hover:text-gray-300">
                Member
              </p>

              <div class="flex mt-3 -mx-2">
                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Reddit"
                >
                  <img class="w-8 h-8 fill-current" src={call} alt="" />
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Facebook"
                >
                  <img class="w-8 h-8 fill-current" src={mails} alt="" />
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                >
                  <img class="w-8 h-8 fill-current" src={telegram} alt="" />
                </a>
              </div>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-primary rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={hout}
                alt=""
              ></img>

              <h1 class="mt-4 text-2xl font-sp-pro-text-medium text-gray-700 capitalize dark:text-white group-hover:text-white">
                Keng Menghout
              </h1>

              <p class="mt-2 text-gray-500 text-base font-sp-pro-text-regular capitalize dark:text-gray-300 group-hover:text-gray-300">
                Member
              </p>

              <div class="flex mt-3 -mx-2">
                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Reddit"
                >
                  <img class="w-8 h-8 fill-current" src={call} alt="" />
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Facebook"
                >
                  <img class="w-8 h-8 fill-current" src={mails} alt="" />
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                >
                  <img class="w-8 h-8 fill-current" src={telegram} alt="" />
                </a>
              </div>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-primary rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={meng}
                alt=""
              ></img>

              <h1 class="mt-4 text-2xl font-sp-pro-text-medium text-gray-700 capitalize dark:text-white group-hover:text-white">
                Chhoeun Yimeng
              </h1>

              <p class="mt-2 text-gray-500 text-base font-sp-pro-text-regular capitalize dark:text-gray-300 group-hover:text-gray-300">
                Member
              </p>

              <div class="flex mt-3 -mx-2">
                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Reddit"
                >
                  <img class="w-8 h-8 fill-current" src={call} alt="" />
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Facebook"
                >
                  <img class="w-8 h-8 fill-current" src={mails} alt="" />
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                >
                  <img class="w-8 h-8 fill-current" src={telegram} alt="" />
                </a>
              </div>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-primary rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={rum}
                alt=""
              ></img>

              <h1 class="mt-4 text-2xl font-sp-pro-text-medium text-gray-700 capitalize dark:text-white group-hover:text-white">
                Rin Phearum
              </h1>

              <p class="mt-2 text-gray-500 text-base font-sp-pro-text-regular capitalize dark:text-gray-300 group-hover:text-gray-300">
                Member
              </p>

              <div class="flex mt-3 -mx-2">
                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Reddit"
                >
                  <img class="w-8 h-8 fill-current" src={call} alt="" />
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Facebook"
                >
                  <img class="w-8 h-8 fill-current" src={mails} alt="" />
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                >
                  <img class="w-8 h-8 fill-current" src={telegram} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}
