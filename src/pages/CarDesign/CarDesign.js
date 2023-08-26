import React from "react";
import {red, white, blue, gray} from '../../assets/Callback'
const CarDesign = () => {
  return (
    <div className="mt-28 ml-10 flex">
      <div className="border w-4/5 h-screen"></div>
      <div className=" w-1/5 flex flex-col gap-3 px-10">
        <span className="text-4xl text-white text-center mt-10">Flux Village</span>
        <span className=" text-sm text-white text-center">
          Est. Delivery: Oct - Dec 2022
        </span>
        <div className="w-full bg-[#808080] py-2 rounded text-center">
          <button className="bg-[#ddc861] px-10 py-1 rounded text-black font-semibold">
            Purchase Price
          </button>
        </div>
        <div className="flex flex-row items-center justify-between gap-8 pt-5">
          <div className="flex flex-col items-center">
            <span className="text-xl text-white">560<span className="text-base">mi</span></span>
            <span className="text-xs">Range(est.)</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl text-white">1600<span className="text-base">mph</span></span>
            <span className="text-xs">Range(est.)</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl text-white">6.4<span className="text-base">sec</span></span>
            <span className="text-xs">Range(est.)</span>
          </div>
        </div>
        <div className="flex flex-col text-white gap-2 pt-5">
          <div className="flex flex-col w-full gap-1">
            <span>Rear-Wheel Drive</span>
            <div className="flex flex-row justify-between py-2 border rounded px-3">
              <span>Flux Village</span>
              <span>$85,000.00</span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Dual Motor All-Wheel Drive</span>
            <div className="flex flex-row justify-between py-2 border rounded px-3">
              <span>Flux Village Power</span>
              <span>$110,000.00</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Paint</span>
          <div className="flex flex-row items-center gap-3">
            <img
              src={gray}
              alt=""
              className="rounded-full w-10"             
            />
            <img
              src={blue}
              alt=""
              className="rounded-full w-10"
            />
            <img
              src={white}
              alt=""
              className="rounded-full w-10"
            />
            <img
              src={red}
              alt=""
              className="rounded-full w-10"
            />            
          </div>
          <span className="text-white text-sm">Gray Multi-Coatt $2,000.00</span>
        </div>
      </div>
    </div>
  );
};

export default CarDesign;
