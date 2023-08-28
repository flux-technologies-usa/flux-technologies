import React from "react";
import { mount } from "../../../assets/Callback";
import "../About.scss";

const Sustainability = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="w-1/2">
        <img className="w-full h-[100vh] bg-cover " src={mount} alt="" />
      </div>
      <div className="w-[44%] bg-[#1b1b1b] mr-[6%] h-[92%] mb-[8%]">
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
    </div>
  );
};

export default Sustainability;

