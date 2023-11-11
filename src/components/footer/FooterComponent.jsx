import React from "react";
import element from "../../assets/images/element.png";
import footer from "../../assets/images/bg-footer.jpg";
import logo_footer from "../../assets/logo/white_logo_nobackground.png";
export default function FooterComponent() {
  return (
    <div>
      <div className=" w-full h-52 flex relative">
        <div className=" absolute top-0 right-32">
          <img width={130} src={element} alt="" />
        </div>
      </div>
      <div
        className=" w-full bg-cover bg-no-repeat flex justify-center px-40 py-20 relative"
        style={{ backgroundImage: `url(${footer})` }}
      >
        <div className=" absolute bottom-0 left-0">
          <img width={120} src={element} alt="" />
        </div>
        <div className=" w-3/6">
          <div className="flex">
            <img className=" inline-block w-11 h-12" src={logo_footer} alt="" />
            <h1 className=" font-sp-pro-text-bold ml-4 mt-2 text-white text-3xl ">
              AutoPilot
            </h1>
          </div>
          <div className=" w-2/3 text-white text-md mt-4 font-sp-pro-text-light">
            <div className="flex gap-y-2">
              <p>
                AutoPilot provides automation deploy application improve your
                development and delivery app quickly for customer
              </p>
            </div>
            <p className="mt-2">
              You don’t need to make many changes to an application in order to
              run it on Autopilot. 
            </p>
          </div>
        </div>

        <div className=" w-1/6">
          <h1 className=" text-white text-ld font-sp-pro-text-semibold">
            Documentation
          </h1>
          <a
            className=" text-white font-sp-pro-text-light text-md mt-4 block leading-10"
            href="http://"
          >
            Deploy application
          </a>
          <a
            className=" text-white font-sp-pro-text-light text-md block leading-10"
            href="http://"
          >
            Deploy database
          </a>
          <a
            className=" text-white font-sp-pro-text-light text-md block leading-10"
            href="http://"
          >
            Monitoring application
          </a>
          <a
            className=" text-white font-sp-pro-text-light text-md block leading-10"
            href="http://"
          >
            App
          </a>
        </div>
        <div className=" w-1/6"></div>
        <div className=" w-1/6">
          <h1 className=" text-white text-xl font-sp-pro-text-semibold">
            Region
          </h1>
          <p className="text-white font-sp-pro-text-light text-md mt-4 block leading-10">
            Indonesia
          </p>
          <p className="text-white font-sp-pro-text-light text-md block leading-10">
            Hong Kong
          </p>
          <p className="text-white font-sp-pro-text-light text-md block leading-10">
            Singapor
          </p>
          <p className="text-white font-sp-pro-text-light text-md block leading-10">
            Canada
          </p>
        </div>
        <div className=" w-1/6">
          <h1 className=" text-white text-xl font-sp-pro-text-semibold">
            Help
          </h1>
          <a
            className=" text-white font-sp-pro-text-light text-md mt-4 block leading-10"
            href="http://"
          >
            Help center
          </a>
          <a
            className=" text-white font-sp-pro-text-light text-md block leading-10"
            href="http://"
          >
            Contact support
          </a>
          <a
            className=" text-white font-sp-pro-text-light text-md block leading-10"
            href="http://"
          >
            Instructions
          </a>
          <a
            className=" text-white font-sp-pro-text-light text-md block leading-10"
            href="http://"
          >
            How it works
          </a>
        </div>
      </div>
    </div>
  );
}
