import React from "react";

const CarWheel = ({
  data,
  setWheelDetails,
  setSelectedTireCost,
  activeWheel,
  setActiveWheel,
}) => {
  const handleWheel = (event) => {
    setWheelDetails(event);
    setSelectedTireCost(event.price);
    setActiveWheel(event.id)
  };
  return (
    <img
      onClick={() => handleWheel(data)}
      src={data.img}
      alt={data.name}
      className={`rounded-full cursor-pointer w-11 p-[2px] ${
        activeWheel === data.id ? "border-2 border-[#ddc861]" : ""
      }`}
    />
  );
};

export default CarWheel;
