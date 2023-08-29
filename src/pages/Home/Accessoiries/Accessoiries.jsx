import React from "react";
import { solarCar } from "../../../assets/Callback";
import "./../Home.scss";
import Form from "../../../components/Form/Form";

const Accessoiries = () => {
  return (
    <div className="bg-black">
      <h1 className="text-2xl font-semibold text-center text-[#ddc862] pt-[50px]">
        Accessoiries
      </h1>
      <div className="pt-[90px] w-[65%] mx-auto md:w-[20%]">
        <img src={solarCar} alt="" />
      </div>
      <div className="text-center">
        <button className="customAccessoiriesButton   mx-auto mt-[70px] md:mt-[90px]">
          SHOP NOW
        </button>
      </div>
      <div className="pt-[150px] pb-[125px] md:flex ">
        <div className="pb-10  flex items-center justify-center md:justify-end md:w-1/2 md:pb-0">
          <h1 className="text-right text-[20px]  text-white md:text-3xl">
            Stay up to speed on the latest at Flux.
          </h1>
        </div>
        <div className="w-[384px] px-16 md:w-[500px] md:px-0  md:pl-[50px]">
          <Form></Form>
        </div>
      </div>
    </div>
  );
};

export default Accessoiries;
