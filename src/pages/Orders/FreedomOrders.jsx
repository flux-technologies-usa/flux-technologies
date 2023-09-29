import React from "react";

const FreedomOrders = ({ data }) => {
  const { img } = data.fluxFreedom[1];
  return (
    <div className="flex flex-col w-full border rounded">
      <div className="flex flex-row justify-between w-full py-10 px-10">
        <div className="bg-black p-5 rounded">
        <img src={img} alt="" className="md:max-w-[150px]"/>
        </div>
        <div>
            <span>Flux Freedom</span>
        </div>
      </div>
    </div>
  );
};

export default FreedomOrders;
