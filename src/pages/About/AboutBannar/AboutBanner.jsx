import React from "react";
import "./../About.scss";
import { carVideo } from "../../../assets/Callback";

const AboutBanner = () => {
  return (
    <div className="relative">
      <div className="-z-10">
        <video
          src={carVideo}
          // src="https://streamable.com/e5w0fu"
          className="customVideo"
          autoPlay
          loop
          muted></video>
      </div>
      <div className="absolute top-[47%] left-[7%] md:top-[46%] md:left-[35.5%]">
        <div className="w-full text-center">
          <h1 className="text-[#ddb655]  text-[30px] mx-5  md:text-5xl">
            FLUX TECHNOLOGIES
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
