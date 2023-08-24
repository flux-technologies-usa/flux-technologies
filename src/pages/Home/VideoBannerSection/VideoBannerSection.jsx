import React from "react";
import { carVideo } from "../../../assets/Callback";
import "./../Home.scss";
import Button from "../../../components/Button/Button";
import { useState } from "react";

const VideoBannerSection = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative">
      <div className="customOverlay"></div>
      <div className="-z-10">
        <video
          src={carVideo}
          className="customVideo"
          autoPlay
          loop
          muted></video>
      </div>
      {/* main div */}
      <div className="absolute top-[34%] left-[36%] ">
        {/* button section */}
        <div className="text-center">
          <h1 className="text-5xl font-semibold">Flux Technologies</h1>
          <div className="flex items-center mt-10 justify-center">
            <Button value={"Flux Village"}></Button>
            <div
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className="cursor-pointer ml-3">
              <h1>Contact now</h1>
              <div
                className={`w-full h-[1px] ${
                  hover ? "bg-[#ddc861]" : "bg-white"
                }`}></div>
            </div>
          </div>
        </div>
        {/* info section */}
      </div>
      <div className="">
        <div className="text-center absolute top-[70%] left-[13%] select-none">
          <h1>
            <span className="text-xl">
              Official EPA range to <sup>1</sup>{" "}
            </span>
          </h1>
          <h1 className="text-4xl font-semibold">520 mi</h1>
        </div>
        <div className="text-center absolute top-[70%] left-[45%] select-none">
          <h1>
            <span className="text-xl">
              starting from <sup>2</sup>{" "}
            </span>
          </h1>
          <h1 className="text-4xl font-semibold">$65,500</h1>
        </div>
        <div className="text-center absolute top-[70%] right-[13%] select-none">
          <h1>
            <span className="text-xl">
              Max Power <sup>3</sup>{" "}
            </span>
          </h1>
          <h1 className="text-4xl font-semibold">1200+ hp</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoBannerSection;
