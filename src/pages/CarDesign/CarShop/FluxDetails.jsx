import React from "react";

const FluxDetails = ({data,setFluxMath}) => {
    const handlePrice =event=>{
        setFluxMath(event)
    }
  return (
    <div className="flex flex-col w-full gap-1">
      <span>{data.name}</span>
      <button
      onClick={()=>handlePrice(data.price)}
        className={`flex flex-row justify-between py-2 border rounded px-3`}
      >
        <span>{data.power_name}</span>
        <span>${data.price}</span>
      </button>
    </div>
  );
};

export default FluxDetails;
