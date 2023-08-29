import React from "react";
import "./AboutAndContact.scss";
import { chargeCar, fluxFreedomCar } from "../../../assets/Callback";
const AboutAndContact = () => {
  return (
    <div className="lg:flex items-center justify-center lg:p-16 p-4 gap-8">
      <div className="lg:w-1/2 relative overflow-hidden">
        <img src={fluxFreedomCar} alt="" className="w-full image" />
        <div className="absolute bottom-10 left-10 z-10 flex flex-col">
          <span className="text-white">Flux</span>
          <span className="text-white text-xl border-b">About Us</span>
        </div>
      </div>
      <div className="lg:w-1/2 relative overflow-hidden pt-4">
        <img src={chargeCar} alt="" className="w-full image" />
        <div className="absolute bottom-10 left-10 z-10 flex flex-col">
          <span className="text-white">Flux</span>
          <span className="text-white text-xl border-b">About Us</span>
        </div>
      </div>
    </div>
  );
};

export default AboutAndContact;
