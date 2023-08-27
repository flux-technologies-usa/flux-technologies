import React, { useState } from "react";
import {
  red,
  white,
  blue,
  gray,
  black,
  graycarwt,
  graycarbt,
  bluecarwt,
  bluecarbt,
  whitecarwt,
  whitecarbt,
  whitetire,
  redcarwt,
  redcarbt,
  blackcarwt,
  blackcarbt,
  blacktire,
} from "../../assets/Callback";

const CarDesign = () => {
  const [paintedCar, setPaintedCar] = useState(graycarwt);
  const [carName, setCarName] = useState('Gray Multi-Coatt')
  const [amount, setAmount] = useState('$2,000.00')
  const [whiteWheelName, setWhiteWheelName] = useState('19’’ Sport Wheels')
  const [whiteWheelCost, setwhiteWheelCost] = useState('$1,000.00')
  const [blackWheelName, setBlackWheelName] = useState('18’’ Aero Wheels')
  const [blackWheelCost, setBlackWheelCost] = useState('Include')
  const [wheelName, setWheelName] = useState(whiteWheelName)
  const [wheelCost, setWheelCost] = useState(whiteWheelCost)
  const redcar = () => {
    setPaintedCar(redcarwt);
    setAmount('$3,000.00')
    setCarName('Midnight Silver Metallict')
    setWhiteWheelName('Sport Wheel')
    setwhiteWheelCost('$1,500.00')
    setBlackWheelName('19’’ Aero Wheels')
    setBlackWheelCost('$1,700.00')
    setWheelName(whiteWheelName)
    setWheelCost(whiteWheelCost)
  };
  const whiteW =()=>{
setWheelName(whiteWheelName)
setWheelCost(whiteWheelCost)
  }
  const blackW =()=>{
setWheelName(blackWheelName)
setWheelCost(blackWheelCost)
  }
  const whitecar = () => {
    setPaintedCar(whitecarwt);
    setAmount('$1,400.00')
    setCarName('Pearl White Multi-Coatt')
    setWhiteWheelName('19’’ Sport Wheels')
    setwhiteWheelCost('$1,300.00')
    setBlackWheelName('18’’ Aero Wheels')
    setBlackWheelCost('$1,300.00')
    setWheelName(whiteWheelName)
    setWheelCost(whiteWheelCost)
  };
  const bluecar = () => {
    setPaintedCar(bluecarwt);
    setAmount('$1,000.00')
    setCarName('Deep Blue Metallict')
    setWhiteWheelName('18’’ Sport Wheel')
    setwhiteWheelCost('$2,000.00')
    setBlackWheelName('18’’ Black Wheel')
    setBlackWheelCost('$3,000.00')
    setWheelName(whiteWheelName)
    setWheelCost(whiteWheelCost)
  };
  const blackcar = () => {
    setPaintedCar(blackcarwt);
    setAmount('$4,000.00')
    setCarName('Solid Blackt')
    setWhiteWheelName('19’’ Sport Wheels')
    setwhiteWheelCost('$2,000.00')
    setBlackWheelName('18’’ Aero Wheels')
    setBlackWheelCost('$2,000.00')
    setWheelName(whiteWheelName)
    setWheelCost(whiteWheelCost)
  };
  const graycar = () => {
    setPaintedCar(graycarwt);
    setAmount('$2,000.00')
    setCarName('Gray Multi-Coatt')
    setWhiteWheelName('19’’ Sport Wheels')
    setwhiteWheelCost('$1,000.00')
    setBlackWheelName('18’’ Aero Wheels')
    setBlackWheelCost('Include')
    setWheelName(whiteWheelName)
    setWheelCost(whiteWheelCost)
  };

  return (
    <div className="mt-28 ml-10 flex">
      <div
        className="flex items-center justify-center bg-black rounded h-screen"
        style={{ width: "78%" }}
      >
        <img src={paintedCar} alt="" />
      </div>
      <div className="flex flex-col gap-3 px-10" style={{ width: "22%" }}>
        <span className="text-4xl text-white text-center mt-10">
          Flux Village
        </span>
        <span className=" text-sm text-white text-center">
          Est. Delivery: Oct - Dec 2022
        </span>
        <div className="w-full bg-[#808080] py-2 rounded text-center">
          <button className="bg-[#ddc861] px-10 py-1 rounded text-black font-semibold">
            Purchase Price
          </button>
        </div>
        <div className="flex flex-row items-center justify-between gap-8 pt-5">
          <div className="flex flex-col items-center">
            <span className="text-xl text-white">
              560<span className="text-base">mi</span>
            </span>
            <span className="text-xs">Range(est.)</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl text-white">
              1600<span className="text-base">mph</span>
            </span>
            <span className="text-xs">Range(est.)</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl text-white">
              6.4<span className="text-base">sec</span>
            </span>
            <span className="text-xs">Range(est.)</span>
          </div>
        </div>
        <div className="flex flex-col text-white gap-2 pt-5">
          <div className="flex flex-col w-full gap-1">
            <span>Rear-Wheel Drive</span>
            <div className="flex flex-row justify-between py-2 border rounded px-3">
              <span>Flux Village</span>
              <span>$85,000.00</span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Dual Motor All-Wheel Drive</span>
            <div className="flex flex-row justify-between py-2 border rounded px-3">
              <span>Flux Village Power</span>
              <span>$110,000.00</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Paint</span>
          <div className="flex flex-row items-center gap-3">
            <img
              src={gray}
              alt=""
              onClick={graycar}
              className="rounded-full w-10"
            />
            <img
              src={blue}
              alt=""
              onClick={bluecar}
              className="rounded-full w-10"
            />
            <img
              src={white}
              alt=""
              onClick={whitecar}
              className="rounded-full w-10"
            />
            <img
              src={red}
              alt=""
              onClick={redcar}
              className="rounded-full w-10"
            />
            <img
              src={black}
              alt=""
              onClick={blackcar}
              className="rounded-full w-10"
            />
          </div>
          <span className="text-sm flex gap-1"><span className="text-white">{carName}</span>{amount}</span>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Wheels</span>
          <div className="flex flex-row items-center gap-3">
            <img src={whitetire} alt="" onClick={whiteW} className="rounded-full w-10"/>
            <img src={blacktire} alt="" onClick={blackW} className="rounded-full w-10"/>
          </div>
          <span className="text-sm flex gap-1"><span className="text-white">{wheelName}</span>{wheelCost}</span>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
        <span className="text-2xl text-white">Interior</span>
        <img src={black} alt="" className="rounded-full w-10"/>
        <span className="text-sm flex gap-1"><span className="text-white">Black White Int</span>$1,000.00</span>
        </div>
      </div>
    </div>
  );
};

export default CarDesign;
