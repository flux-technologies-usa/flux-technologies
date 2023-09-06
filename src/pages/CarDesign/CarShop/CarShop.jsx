import React from "react";
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
  darkBg,
} from "../../../assets/Callback";
import { useState } from "react";
import { useEffect } from "react";
import CarDetails from "./CarDetails";
import CarWheel from "./CarWheel";

const CarShop = () => {
    const [active, setActive] = useState(1);
    const [paintedCar, setPaintedCar] = useState(graycarwt);
    const [carName, setCarName] = useState("Gray Multi-Coatt");
    const [amount, setAmount] = useState("$2,000.00");
    const [whiteWheelName, setWhiteWheelName] = useState("19’’ Sport Wheels");
    const [whiteWheelCost, setwhiteWheelCost] = useState("$1,000.00");
    const [blackWheelName, setBlackWheelName] = useState("18’’ Aero Wheels");
    const [blackWheelCost, setBlackWheelCost] = useState("Include");
    const [wheelName, setWheelName] = useState(whiteWheelName);
    const [wheelCost, setWheelCost] = useState(whiteWheelCost);
    const [carWhiteTire, setCarWhiteTire] = useState(graycarwt);
    const [carBlackTire, setCarBlackTire] = useState(graycarbt);
    const [tireActive, setTireActive] = useState("ww");
    const [fluxMath, setFluxMath] = useState("85000");
    const [selectedCarCost, setSelectedCarCost] = useState("2000");
    const [selectedTireCost, setSelectedTireCost] = useState("1000");
    const [wCost, setWCost] = useState("1500");
    const [bCost, setBCost] = useState("0");

    const [carDetails, setCarDetails] = useState([])
    useEffect(()=>{
        fetch('cardesign.json')
        .then(res=>res.json())
        .then((data)=>setCarDetails(data))
    },[])

    const [paintDetails, setPaintDetails] = useState([])
    const [carWheel, setCarWheel] = useState([])
    const [wheelDetails, setWheelDetails] = useState([])

    console.log(paintDetails)
    
    const [fluxVillageActive, setFluxVillageActive] = useState(11);
    const rearWheelActive = (event) => {
      setFluxVillageActive(event);
      setFluxMath("85000");
    };
    const dualWheelActive = (event) => {
      setFluxVillageActive(event);
      setFluxMath("110000");
    };
    const [checked, setChecked] = useState();
    function handleChange(e) {
      if (e.target.checked) {
        const checked = parseInt(e.target.value);
        setChecked(checked);
      } else {
        setChecked("");
      }
    }
    const [checked1, setChecked1] = useState();
    function handleCharge(e) {
      if (e.target.checked) {
        const checked1 = parseInt(e.target.value);
        setChecked1(checked1);
      } else {
        setChecked1("");
      }
    }
    console.log(checked1, checked);
  
    const [total, setTotal] = useState();
    useEffect(() => {
      const flux = parseInt(fluxMath);
      const car = parseInt(selectedCarCost);
      const tire = parseInt(selectedTireCost);
      const totalCost = flux + car + tire;
      setTotal(totalCost);
    }, [total, fluxMath, selectedCarCost, selectedTireCost]);
  

  return (
    <div className="mt-28 lg:ml-10 px-2 lg:px-0 lg:flex lg:flex-row">
      <div
        className="flex items-center justify-center rounded h-[200px] lg:h-screen mb-16 w-full lg:w-[78%]"
        style={{ backgroundImage: `url("${darkBg}")` }}
      >
        <img src={wheelDetails.img_wheel} alt="" className="w-[180px] lg:w-[600px]" />
      </div>
      <div className="flex flex-col gap-3 lg:px-10 overflow-y-scroll max-h-screen mb-16 lg:w-[22%]">
        <span className="text-4xl text-white text-center lg:mt-10">
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
            <button
              onClick={() => rearWheelActive(11)}
              className={`flex flex-row justify-between py-2 border rounded px-3 ${
                fluxVillageActive === 11 ? "border-[#ddc861]" : ""
              }`}
            >
              <span>Flux Village</span>
              <span>$85,000.00</span>
            </button>
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Dual Motor All-Wheel Drive</span>
            <button
              onClick={() => dualWheelActive(12)}
              className={`flex flex-row justify-between py-2 border rounded px-3 ${
                fluxVillageActive === 12 ? "border-[#ddc861]" : ""
              }`}
            >
              <span>Flux Village Power</span>
              <span>$110,000.00</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Paint</span>
          <div className="flex flex-row items-center gap-3">
            {
                carDetails.map(data=><CarDetails key={data.id} setPaintDetails={setPaintDetails} setCarWheel={setCarWheel} data={data}/>)
            }
            
          </div>
          <span className="text-sm flex gap-1">
            <span className="text-white">{paintDetails.name}</span>
            {paintDetails.price}
          </span>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Wheels</span>
          <div className="flex flex-row items-center gap-3">
            
            {
                carWheel.map((data, i)=><CarWheel key={i} setWheelDetails={setWheelDetails} data={data}/>)
            }
          </div>
          <span className="text-sm flex gap-1">
            <span className="text-white">{wheelDetails.name}</span>
            {wheelDetails.price}
          </span>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Interior</span>
          <img
            src={black}
            alt=""
            className="rounded-full cursor-pointer w-11 p-[2px] border-2 border-[#ddc861]"
          />
          <span className="text-sm flex gap-1">
            <span className="text-white">Black White Int</span>$1,000.00
          </span>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Charging</span>
          <div className="form-control justify-between flex-row items-center w-full">
            <label className="label cursor-pointer gap-2">
              <input
                type="checkbox"
                value="5000"
                className="checkbox border-[#ddc861] rounded"
                onChange={handleChange}
              />
              <span className="label-text">Wall Charger</span>
            </label>
            <span>$5,000.00</span>
          </div>
          <div className="form-control justify-between flex-row items-center w-full">
            <label className="label cursor-pointer gap-2">
              <input
                type="checkbox"
                value="5000"
                className="checkbox checkbox-primary border-[#ddc861] rounded"
                onChange={handleCharge}
              />
              <span className="label-text">Remote Chrager</span>
            </label>
            <span>$5,000.00</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Order Your Flux Village</span>
          <span className="text-white font-semibold">
            Total Price :<span className="text-[#ddc861]"> ${total}.00</span>
          </span>
          <span className="text-white font-semibold">
            Est. Delivery: Dec 2022 - Apr 2023
          </span>
          <button
            type="button"
            className="border border-[#ddc861] px-9 py-2 rounded text-white  customCarDesignButton"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarShop;
