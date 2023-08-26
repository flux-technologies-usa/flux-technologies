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
      <div className="pt-[90px] w-[20%] mx-auto">
        <img src={solarCar} alt="" />
      </div>
      <div className="text-center">
        <button className="customAccessoiriesButton  mt-[90px] mx-auto">
          SHOP NOW
        </button>
      </div>
      <div className="pt-[150px] flex pb-[125px]">
        <div className="w-1/2 flex items-center justify-end">
          <h1 className="text-right text-3xl text-white">Stay up to speed on the latest at Flux.</h1>
        </div>
        <div className="w-1/2 pl-[50px]">
            <Form></Form>
        </div>
      </div>
    </div>
  );
};

export default Accessoiries;
