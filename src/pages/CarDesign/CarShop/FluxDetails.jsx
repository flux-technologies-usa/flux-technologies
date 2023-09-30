import React from "react";

const FluxDetails = ({data,setFluxMath,villageActive,setVillageActive}) => {
    const handlePrice =event=>{
        setFluxMath(event)
        setVillageActive(event.id)
    }
  return (
    <div className="flex flex-col w-full gap-1">
      <span className="md:text-sm lg:text-base">{data.name}</span>
      <button
      onClick={()=>handlePrice(data)}
        className={`flex flex-row justify-between py-2 border rounded px-3 ${
          villageActive === data.id ? "border border-[#ddc861]" : ""
        }`}
      >
        <span className="md:text-xs lg:text-base">{data.power_name}</span>
        <span className="md:text-xs lg:text-base">${data.price}</span>
      </button>
    </div>
  );
};

export default FluxDetails;
