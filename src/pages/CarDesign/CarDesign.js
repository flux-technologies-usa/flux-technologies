import React, { useEffect, useState } from "react";
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
} from "../../assets/Callback";
import "./CarDesign.scss";
import { loadStripe } from "@stripe/stripe-js";
const CarDesign = () => {
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

  const whiteW = (event) => {
    setWheelName(whiteWheelName);
    setWheelCost(whiteWheelCost);
    setPaintedCar(carWhiteTire);
    setTireActive(event);
    setSelectedTireCost(wCost);
  };
  const blackW = (event) => {
    setWheelName(blackWheelName);
    setWheelCost(blackWheelCost);
    setPaintedCar(carBlackTire);
    setTireActive(event);
    setSelectedTireCost(bCost);
  };
  const graycar = (event) => {
    setPaintedCar(graycarwt);
    setAmount("$2,000.00");
    setCarName("Gray Multi-Coatt");
    setWhiteWheelName("19’’ Sport Wheels");
    setwhiteWheelCost("$1,000.00");
    setBlackWheelName("18’’ Aero Wheels");
    setBlackWheelCost("Include");
    setWheelName(whiteWheelName);
    setWheelCost(whiteWheelCost);
    setCarWhiteTire(graycarwt);
    setCarBlackTire(graycarbt);
    setActive(event);
    setTireActive("ww");
    setSelectedCarCost("1000");
    setWCost("1000");
    setBCost("");
    setSelectedTireCost("1000");
  };
  const redcar = (event) => {
    setPaintedCar(redcarwt);
    setAmount("$3,000.00");
    setCarName("Midnight Silver Metallict");
    setWhiteWheelName("Sport Wheel");
    setwhiteWheelCost("$1,500.00");
    setBlackWheelName("19’’ Aero Wheels");
    setBlackWheelCost("$1,700.00");
    setWheelName(whiteWheelName);
    setWheelCost(whiteWheelCost);
    setCarWhiteTire(redcarwt);
    setCarBlackTire(redcarbt);
    setActive(event);
    setTireActive("ww");
    setSelectedCarCost("1500");
    setWCost("1000");
    setBCost("1700");
    setSelectedTireCost("1000");
  };
  const whitecar = (event) => {
    setPaintedCar(whitecarwt);
    setAmount("$1,400.00");
    setCarName("Pearl White Multi-Coatt");
    setWhiteWheelName("19’’ Sport Wheels");
    setwhiteWheelCost("$1,300.00");
    setBlackWheelName("18’’ Aero Wheels");
    setBlackWheelCost("$1,300.00");
    setWheelName(whiteWheelName);
    setWheelCost(whiteWheelCost);
    setCarWhiteTire(whitecarwt);
    setCarBlackTire(whitecarbt);
    setActive(event);
    setTireActive("ww");
    setSelectedCarCost("1300");
    setWCost("2000");
    setBCost("1300");
    setSelectedTireCost("2000");
  };
  const bluecar = (event) => {
    setPaintedCar(bluecarwt);
    setAmount("$1,000.00");
    setCarName("Deep Blue Metallict");
    setWhiteWheelName("18’’ Sport Wheel");
    setwhiteWheelCost("$2,000.00");
    setBlackWheelName("18’’ Black Wheel");
    setBlackWheelCost("$3,000.00");
    setWheelName(whiteWheelName);
    setWheelCost(whiteWheelCost);
    setCarWhiteTire(bluecarwt);
    setCarBlackTire(bluecarbt);
    setActive(event);
    setTireActive("ww");
    setSelectedCarCost("2000");
    setWCost("2000");
    setBCost("3000");
    setSelectedTireCost("2000");
  };
  const blackcar = (event) => {
    setPaintedCar(blackcarwt);
    setAmount("$4,000.00");
    setCarName("Solid Blackt");
    setWhiteWheelName("19’’ Sport Wheels");
    setwhiteWheelCost("$2,000.00");
    setBlackWheelName("18’’ Aero Wheels");
    setBlackWheelCost("$2,000.00");
    setWheelName(whiteWheelName);
    setWheelCost(whiteWheelCost);
    setCarWhiteTire(blackcarwt);
    setCarBlackTire(blackcarbt);
    setActive(event);
    setTireActive("ww");
    setSelectedCarCost("2000");
    setWCost("1000");
    setBCost("2000");
    setSelectedTireCost("1000");
  };

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
        <img src={paintedCar} alt="" className="w-[180px] lg:w-[600px]" />
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
            <img
              src={gray}
              alt=""
              onClick={() => graycar(1)}
              className={`rounded-full cursor-pointer w-11 p-[2px] ${
                active === 1 ? "border-2 border-[#ddc861]" : ""
              }`}
            />
            <img
              src={blue}
              alt=""
              onClick={() => bluecar(2)}
              className={`rounded-full cursor-pointer w-11 p-[2px] ${
                active === 2 ? "border-2 border-[#ddc861]" : ""
              }`}
            />
            <img
              src={white}
              alt=""
              onClick={() => whitecar(3)}
              className={`rounded-full cursor-pointer w-11 p-[2px] ${
                active === 3 ? "border-2 border-[#ddc861]" : ""
              }`}
            />
            <img
              src={red}
              alt=""
              onClick={() => redcar(4)}
              className={`rounded-full cursor-pointer w-11 p-[2px] ${
                active === 4 ? "border-2 border-[#ddc861]" : ""
              }`}
            />
            <img
              src={black}
              alt=""
              onClick={() => blackcar(5)}
              className={`rounded-full cursor-pointer w-11 p-[2px] ${
                active === 5 ? "border-2 border-[#ddc861]" : ""
              }`}
            />
          </div>
          <span className="text-sm flex gap-1">
            <span className="text-white">{carName}</span>
            {amount}
          </span>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Wheels</span>
          <div className="flex flex-row items-center gap-3">
            <img
              src={whitetire}
              alt=""
              onClick={() => whiteW("ww")}
              className={`rounded-full cursor-pointer w-11 p-[2px] ${
                tireActive === "ww" ? "border-2 border-[#ddc861]" : ""
              }`}
            />
            <img
              src={blacktire}
              alt=""
              onClick={() => blackW("bw")}
              className={`rounded-full cursor-pointer w-11 p-[2px] ${
                tireActive === "bw" ? "border-2 border-[#ddc861]" : ""
              }`}
            />
          </div>
          <span className="text-sm flex gap-1">
            <span className="text-white">{wheelName}</span>
            {wheelCost}
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

export default CarDesign;
