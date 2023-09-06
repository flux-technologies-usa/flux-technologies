import React from "react";

const CarDetails = ({data,setCarWheel,setPaintDetails}) => {
    const paintHandle = data =>{
        setPaintDetails(data);
        setCarWheel(data.wheels)
    }
  return (
    <img
    onClick={()=>paintHandle(data)}
      src={data.paint}
      alt=""
      className={`rounded-full cursor-pointer w-11 p-[2px]}`}
    />
  );
};

export default CarDetails;
