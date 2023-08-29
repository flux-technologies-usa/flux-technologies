import React, { useEffect, useState } from "react";
import {
  blue,
  black,
  whitetire,
  blacktire,
  darkBg,
  blackCarVW,
  blackCarVB,
  blueCarV,
} from "../../assets/Callback";
const FluxFreedom = () => {
  const [active, setActive] = useState(5);
  const [paintedCar, setPaintedCar] = useState(blackCarVW);
  const [carName, setCarName] = useState("Pearl White Multi-Coatt");
  const [amount, setAmount] = useState("Include");
  const [whiteWheelName, setWhiteWheelName] = useState("18’’ Aero Wheels");
  const [whiteWheelCost, setwhiteWheelCost] = useState("Include");
  const [blackWheelName, setBlackWheelName] = useState("19’’ Black Wheels");
  const [blackWheelCost, setBlackWheelCost] = useState("$300.00");
  const [wheelName, setWheelName] = useState(whiteWheelName);
  const [wheelCost, setWheelCost] = useState(whiteWheelCost);
  const [carWhiteTire, setCarWhiteTire] = useState(blackCarVW);
  const [carBlackTire, setCarBlackTire] = useState(blackCarVB);
  const [tireActive, setTireActive] = useState("ww");
  const [fluxMath, setFluxMath] = useState("65800");
  const [selectedCarCost, setSelectedCarCost] = useState("0");
  const [selectedTireCost, setSelectedTireCost] = useState("0");
  const [wCost, setWCost] = useState("0");
  const [bCost, setBCost] = useState("300");

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

  const bluecar = (event) => {
    setPaintedCar(blueCarV);
    setAmount("$800.00");
    setCarName("Pearl Blue Multi-Coatt");
    setWhiteWheelName("18’’ Aero Wheels");
    setwhiteWheelCost("$800.00");
    setBlackWheelName("19’’ Black Wheels");
    setBlackWheelCost("$800.00");
    setWheelName(whiteWheelName);
    setWheelCost(whiteWheelCost);
    setCarWhiteTire(blueCarV);
    setCarBlackTire(blueCarV);
    setActive(event);
    setTireActive("ww");
    setSelectedCarCost("600");
    setWCost("600");
    setBCost("600");
    setSelectedTireCost("600");
  };
  const blackcar = (event) => {
    setPaintedCar(blackCarVW);
    setAmount("Include");
    setCarName("Pearl White Multi-Coatt");
    setWhiteWheelName("18’’ Aero Wheels");
    setwhiteWheelCost("Include");
    setBlackWheelName("19’’ Black Wheels");
    setBlackWheelCost("$300.00");
    setWheelName(whiteWheelName);
    setWheelCost(whiteWheelCost);
    setCarWhiteTire(blackCarVW);
    setCarBlackTire(blackCarVB);
    setActive(event);
    setTireActive("ww");
    setSelectedCarCost("0");
    setWCost("0");
    setBCost("300");
    setSelectedTireCost("0");
  };

  const [fluxVillageActive, setFluxVillageActive] = useState(11);
  const rearWheelActive = (event) => {
    setFluxVillageActive(event);
    setFluxMath("85000");
  };
  const dualWheelActive = (event) => {
    setFluxVillageActive(event);
    setFluxMath("67900");
  };
  const [checked, setChecked] = useState([]);
  function handleChange(e) {
    if (e.target.checked) {
      const checked = parseInt(e.target.value);
      setChecked(checked);
    } else {
      setChecked("");
    }
  }
  const [checked1, setChecked1] = useState([]);
  function handleCharge(e) {
    if (e.target.checked) {
      const checked1 = parseInt(e.target.value);
      setChecked1(checked1);
    } else {
      setChecked1("");
    }
  }

  const [total, setTotal] = useState();
  useEffect(() => {
    const flux = parseInt(fluxMath);
    const car = parseInt(selectedCarCost);
    const tire = parseInt(selectedTireCost);
    const totalCost = flux+ 300 + car + tire + checked + checked1;
    setTotal(totalCost);
  }, [total, fluxMath, selectedCarCost, selectedTireCost, checked, checked1]);

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
        Flux Freedom
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
            430<span className="text-base">mi</span>
            </span>
            <span className="text-xs">Range(est.)</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl text-white">
            800<span className="text-base">mph</span>
            </span>
            <span className="text-xs">Range(est.)</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl text-white">
            8.5<span className="text-base">sec</span>
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
              <span>Flux Freedom</span>
              <span>$65,800.00</span>
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
              <span>Flux Freedom Fast</span>
              <span>$67,900.00</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Paint</span>
          <div className="flex flex-row items-center gap-3">
          <img
              src={black}
              alt=""
              onClick={() => blackcar(5)}
              className={`rounded-full cursor-pointer w-11 p-[2px] ${
                active === 5 ? "border-2 border-[#ddc861]" : ""
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
            
          </div>
          <span className="text-sm flex gap-1">
            <span className="text-white">{carName}</span>{amount}
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
            <span className="text-white">Black White Int</span>$300.00
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
          <button className="border border-[#ddc861] px-9 py-2 rounded text-white  customCarDesignButton">
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default FluxFreedom;
