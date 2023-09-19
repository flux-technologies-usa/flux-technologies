import React from "react";
import {mounten } from "../../../assets/Callback";
import "../About.scss";

const Sustainability = () => {
  return (
    <div className=" flex flex-col md:w-[100vw] md:h-[80vh] md:flex-row">
      <div className="md:w-1/2">
        <img
          className="w-full h-[520px]  bg-cover md:h-[100vh]"
          src={mounten}
          alt=""
        />
      </div>
      {/* for big device */}
      <div className="md:w-1/2 bg-[#1b1b1b]  hidden md:block">
        <div className="text-[#dbd4c5] px-[15%]">
          <h1 className="mt-[25%] text-[26px] font-semibold text-[#ddc85f]">
            Sustainability
          </h1>
          <p className="mt-[10%] text-[18px] ">
            We aim to create sustainable mobility without compromise in cars
            that are intuitive, liberating, and designed for all the ways people
            get around. At Flux, we place an exceptionally high priority on
            efficiency — our cars must make the best possible use of the world’s
            resources. So, every Flux delivers exceptional range without
            sacrificing high performance or sublime comfort.
          </p>
        </div>
      </div>
      {/* for small device */}
      <div className=" bg-[#1b1b1b] block md:hidden">
        <div className="text-[#dbd4c5] px-[5%] pb-[30%]">
          <h1 className="mt-[25%] text-[26px] font-semibold text-[#ddc85f]">
            Sustainability
          </h1>
          <p className="mt-[10%] text-[18px] ">
            We aim to create sustainable mobility without compromise in cars
            that are intuitive, liberating, and designed for all the ways people
            get around. At Flux, we place an exceptionally high priority on
            efficiency — our cars must make the best possible use of the world’s
            resources. So, every Flux delivers exceptional range without
            sacrificing high performance or sublime comfort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;

