import React from "react";

const FreedomDetails = ({data,setFluxMath,freedomActive,setfreedomActive}) => {
    const handlePrice =event=>{
        setFluxMath(event)
        setfreedomActive(event.id)
    }
    function currencyFormat(num) {
      return '$' + parseFloat(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
   }
  return (
    <div className="flex flex-col w-full gap-1">
      <span className="md:text-sm lg:text-base">{data.name}</span>
      <button
      onClick={()=>handlePrice(data)}
        className={`flex flex-row justify-between py-2 border rounded px-3 ${
          freedomActive === data.id ? "border border-[#ddc861]" : ""
        }`}
      >
        <span className="md:text-xs lg:text-base">{data.power_name}</span>
        <span className="md:text-xs lg:text-base">{currencyFormat(data.price)}</span>
      </button>
    </div>
  );
};

export default FreedomDetails;