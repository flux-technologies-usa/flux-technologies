import React from "react";
import "./AboutAndContact.scss";
import { chargeCar, fluxFreedomCar } from "../../../assets/Callback";
const AboutAndContact = () => {
  return (
    <div className="mx-5 py-20 md:py-24 md:mx-0 md:flex md:items-center md:justify-center md:p-16 md:gap-8">
      <div className=" relative overflow-hidden md:w-1/2 ">
        <img
          src={fluxFreedomCar}
          alt=""
          className="w-full h-[200px] md:h-[500px] image"
        />
        <div className="absolute bottom-10 left-10 z-10 flex flex-col">
          <span className="text-white">Flux</span>
          <span className="text-white text-xl border-b">About Us</span>
        </div>
      </div>
      <div className="md:w-1/2 mt-2 md:mt-0 relative overflow-hidden">
        <img src={chargeCar} alt="" className="w-full h-[200px] md:h-[500px] image" />
        <div className="absolute bottom-10 left-10 z-10 flex flex-col">
          <span className="text-white">Flux</span>
          <span className="text-white text-xl border-b">About Us</span>
        </div>
      </div>
    </div>
  );
};

export default AboutAndContact;
