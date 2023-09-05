import React from "react";
import { freedom_car } from "../../assets/Callback";

const Storeheader = () => {
  return (
    <div
      className="h-[50vh] bg-center bg-cover bg-no-repeat w-full text-[#DDC861] flex flex-col justify-center pl-52 gap-5"
      style={{ backgroundImage: `url(${freedom_car})`}}
    >
      <span className="text-6xl font-semibold lg:block hidden">Flux Living</span>
      <span className="text-xs lg:block hidden">Browse a collection of fashion and Lifestyle accessories <br /> as luxurious as our vehicles.</span>
    </div>
  );
};

export default Storeheader;
