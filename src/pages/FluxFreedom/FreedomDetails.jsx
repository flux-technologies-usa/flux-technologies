import React from "react";

const FreedomDetails = ({data,setFluxMath,villageActive,setVillageActive}) => {
    const handlePrice =event=>{
        setFluxMath(event)
        setVillageActive(event.id)
    }
  return (
    <div className="flex flex-col w-full gap-1">
      <span>{data.name}</span>
      <button
      onClick={()=>handlePrice(data)}
        className={`flex flex-row justify-between py-2 border rounded px-3 ${
          villageActive === data.id ? "border border-[#ddc861]" : ""
        }`}
      >
        <span>{data.power_name}</span>
        <span>${data.price}</span>
      </button>
    </div>
  );
};

export default FreedomDetails;