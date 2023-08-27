import React from "react";
import { freedom_car } from "../../assets/Callback";

const Storeheader = () => {
  return (
    <div className="storeheader">
      <div className="headerimg">
        <img
          src={freedom_car}
          alt="headerimg"
          className="md:w-full md:h-[500px]
       md:object-cover h-[280px] object-cover
       "
        />
      </div>
      <div className="headertag md:text-[#ddc861] md:block hidden">
        <h1 className="md:text-[60px] md:font-semibold">Flux Living</h1>
        <p className="md:pt-[18px]">
          Browse a collection of fashion and Lifestyle accessories
          <br />
          as luxurious as our vehicles.
        </p>
      </div>
    </div>
  );
};

export default Storeheader;
