import React from "react";

const FreedomPaint = ({data,setCarWheel,setPaintDetails,setWheelDetails,setSelectedCarCost,active,setActive,setActiveWheel}) => {
    const paintHandle = data =>{
        setPaintDetails(data);
        setCarWheel(data.wheels);
        setWheelDetails(data.wheels[0]);
        setActiveWheel(data.wheels[0].id)
        setSelectedCarCost(data.price)
        setActive(data.id)
    }
  return (
    <img
    onClick={()=>paintHandle(data)}
      src={data.paint}
      alt={data.name}
      className={`rounded-full cursor-pointer w-11 p-[2px] ${
        active === data.id ? "border-2 border-[#ddc861]" : ""
      }`}
    />
  );
};

export default FreedomPaint;