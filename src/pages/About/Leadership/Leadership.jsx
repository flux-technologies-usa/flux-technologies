import React from "react";
import {  tang } from "../../../assets/Callback";
import "../About.scss";

const Leadership = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="w-1/2">
        <img className="w-full h-[100vh] bg-cover " src={tang} alt="" />
      </div>
      <div className="w-[44%] bg-[#1b1b1b] mr-[6%] h-[92%] mb-[8%]">
        <div className="text-[#dbd4c5] px-[15%]">
          <h1 className="mt-[25%] text-[26px] font-semibold text-[#ddc85f]">
            Leadership
          </h1>
          <p className="mt-[10%] text-[18px] ">
            Flux’s leadership team brings to our Silicon Valley headquarters an
            extraordinary depth of knowledge and experience from the automotive
            and technology industries. They’re leading us forward to a more
            sustainable future as we use proprietary electric vehicle technology
            to reinvent the category for each type of car we build.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
