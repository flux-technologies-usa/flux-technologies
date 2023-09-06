import React from 'react';

const CarWheel = ({data,setWheelDetails}) => {
    const handleWheel =(event)=>{
        setWheelDetails(event)
      }
    return (
        <img
        onClick={()=>handleWheel(data)}
              src={data.img}
              alt=""
              className={`rounded-full cursor-pointer w-11 p-[2px]
              }`}
            />
    );
};

export default CarWheel;