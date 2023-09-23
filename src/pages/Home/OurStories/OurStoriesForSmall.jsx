import React from "react";
import {
  bridge,
  carBack,
  carUp,
  office,
  phone,
} from "../../../assets/Callback";

const OurStoriesForSmall = () => {
  return (
    <div className="flex md:hidden">
      {/* start */}
      <div className="h-[405px] w-[380px] relative ">
        <div className="flex justify-between">
          <div className=" w-[300px] h-[220px] ml-[5%] overflow-hidden">
            <img className="customStoryImg scale-[1.2]" src={carBack} alt="" />
          </div>
          <div className="h-[320px] w-[1px] bg-[#302f2f] ml-[40px] mr-3 md:mr-0" />
        </div>
        <div className=" absolute top-[58%] ml-[5%] mr-10 ">
          <h1 className="text-[20px]">
            The pinnacle of electric performance.
          </h1>
          <h1 className="text-[17px] font-semibold mt-5">
            AUGUST 19, 2022 / ENGINEERING
          </h1>
        </div>
      </div>
      {/* start */}
      <div className="h-[405px] w-[380px] relative ">
        <div className="flex justify-between">
          <div className=" w-[300px] h-[220px] ml-[10%] overflow-hidden">
            <img className="customStoryImg scale-[1.2]" src={carUp} alt="" />
          </div>
          <div className="h-[320px] w-[1px] bg-[#302f2f] ml-[40px]" />
        </div>
        <div className=" absolute top-[58%] mx-10">
          <h1 className="text-[20px]">Embrace the dark side</h1>
          <h1 className="text-[17px] font-semibold mt-5">
            AUGUST 08, 2022 / ENGINEERING
          </h1>
        </div>
      </div>
      {/* start */}
      <div className="h-[405px] w-[380px] relative ">
        <div className="flex justify-between">
          <div className=" w-[300px] h-[220px] ml-[10%] overflow-hidden">
            <img className="customStoryImg scale-[1.2]" src={office} alt="" />
          </div>
          <div className="h-[320px] w-[1px] bg-[#302f2f] ml-[40px]" />
        </div>
        <div className=" absolute top-[58%] mx-10">
          <h1 className="text-[20px]">
            Next-level collaboration. Next-generation innovation.
          </h1>
          <h1 className="text-[17px] font-semibold mt-5">
            MAY 04, 2022 / DESIGN
          </h1>
        </div>
      </div>
      {/* start */}
      <div className="h-[405px] w-[380px] relative ">
        <div className="flex justify-between">
          <div className=" w-[300px] h-[220px] ml-[10%] overflow-hidden">
            <img className="customStoryImg scale-[1.2]" src={carBack} alt="" />
          </div>
          <div className="h-[320px] w-[1px] bg-[#302f2f] ml-[40px]" />
        </div>
        <div className=" absolute top-[58%] mx-10">
          <h1 className="text-[20px]">
            Company Flux Freedom Touring has arrived.
          </h1>
          <h1 className="text-[17px] font-semibold mt-5">
            APRIL 12, 2022 / COMPANY
          </h1>
        </div>
      </div>
      <div className="h-[405px] w-[380px] relative ">
        <div className="flex justify-between">
          <div className=" w-[300px] h-[220px] ml-[10%] overflow-hidden">
            <img className="customStoryImg scale-[1.2]" src={phone} alt="" />
          </div>
          <div className="h-[320px] w-[1px] bg-[#302f2f] ml-[40px]" />
        </div>
        <div className=" absolute top-[58%] mx-10">
          <h1 className="text-[20px]">
            The Flux app keeps your car at your fingertips.
          </h1>
          <h1 className="text-[17px] font-semibold mt-5">
            MARCH 31, 2022 / ENGINEERING
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OurStoriesForSmall;
