import React from "react";
import { homeV } from "../../../assets/Callback";
import "./../Home.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { routeContext } from "../../../context api/NavbarContex";

const VideoBannerSection = () => {
  const [hover, setHover] = useState(false);
  const { routePath } = useContext(routeContext);
  return (
    <div className="relative">
      <div className="customOverlay"></div>
      <div className="-z-10">
        <video
          src={homeV}
          className="customVideo"
          autoPlay
          loop
          muted></video>
      </div>
      {/* main div */}
      <div className="absolute w-full top-[40%] text-center">
        {/* button section */}
        <div className="text-center">
          <h1
            onClick={() => {
              console.log(routePath);
            }}
            className="text-[34px] font-semibold ml-3 md:text-5xl md:ml-0">
            Flux Technologies
          </h1>
          <div className="flex items-center mt-10 justify-center flex-col md:flex-row">
            <Link to="/village">
              <button className="videoCustomButton z-20">Flux Village</button>
            </Link>
            <div
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className="cursor-pointer  text-[18px] font-semibold mt-[20px] md:ml-7 md:mt-0">
              <Link to="/contact">Contact now</Link>
              <div
                className={`w-full h-[1px] ${
                  hover ? "bg-[#ddc861]" : "bg-white"
                }`}></div>
            </div>
          </div>
        </div>
      </div>
      {/* info section */}
      <div className="absolute top-[80%] w-full text-[#a6a7a6]">
        <div className="grid grid-cols-3 px-[4px] gap-3 md:px-[8%] md:gap-0">
          <div className="text-center  select-none">
            <h1>
              <span className="md:text-xl">
                Official EPA range to{" "}
              </span>
            </h1>
            <h1 className="text-2xl md:text-[40px] font-semibold">400+ mi</h1>
          </div>
          <div className="text-center select-none">
            <h1>
              <span className="md:text-xl">
                starting from {" "}
              </span>
            </h1>
            <h1 className="text-2xl md:text-[40px] font-semibold">$85,500.00</h1>
          </div>
          <div className="text-center select-none">
            <h1>
              <span className="md:text-xl">
                Max Power {" "}
              </span>
            </h1>
            <h1 className="text-2xl md:text-[40px] font-semibold">600+ hp</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBannerSection;
