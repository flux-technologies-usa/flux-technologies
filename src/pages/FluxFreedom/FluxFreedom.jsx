import React, { useContext } from "react";
import { black, darkBg } from "../../assets/Callback";
import { useState } from "react";
import freedomPaintData from "./freedomcardata";
import freedomdata from "./datafreedom";
import FreedomDetails from "./FreedomDetails";
import FreedomPaint from "./FreedomPaint";
import FreedomWheel from "./FreedomWheel";
import axios from "axios";
import { AuthContext } from "../../context api/UserContext";

const FluxFreedom = () => {
  const [carDetails, setCarDetails] = useState(freedomPaintData);
  const [freedomDetails, setfreedomDetails] = useState(freedomdata);
  const [freedomActive, setfreedomActive] = useState(freedomDetails[0].id);

  const [paintDetails, setPaintDetails] = useState(carDetails[0]);
  const [carWheel, setCarWheel] = useState(carDetails[0].wheels);
  const [wheelDetails, setWheelDetails] = useState(carWheel[0]);

  const [fluxMath, setFluxMath] = useState(freedomDetails[0]);
  const [selectedCarCost, setSelectedCarCost] = useState(paintDetails.price);

  const [selectedTireCost, setSelectedTireCost] = useState(wheelDetails.price);

  const [checkboxSum, setCheckboxSum] = useState("0");

  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const runningTotal = Array.from(checkboxes)
        .filter((i) => i.checked) // remove unchecked checkboxes.
        .map((i) => (i.dataset.amount ??= 0)) //extract the amount, or 0
        .reduce((total, item) => {
          return total + parseFloat(item);
        }, 0);

      setCheckboxSum(runningTotal);
    });
  });

  const total =
    parseFloat(fluxMath.price) +
    parseFloat(selectedCarCost) +
    parseFloat(selectedTireCost) +
    parseFloat(checkboxSum) +
    400;

    const [checkWallId, setCheckWallId] = useState([
      { name: "Wall Charger(not selected)", price: 0 },
    ]);
    const checkHandleWall = (e) => {
      const checked = e.target.checked;
      if (checked === true) {
        setCheckWallId([{ name: "Wall Charger(selected)", price: 600 }]);
      } else {
        setCheckWallId([{ name: "Wall Charger(not selected)", price: 0 }]);
      }
    };
  
    const [checkRemoteId, setCheckRemoteId] = useState([
      { name: "Mobile Charger(not selected)", price: 0 },
    ]);
  
    const checkHandleRemote = (e) => {
      if (e.target.checked === true) {
        setCheckRemoteId([{ name: "Mobile Charger(selected)", price: 450 }]);
      } else {
        setCheckRemoteId([{ name: "Mobile Charger(not selected)", price: 0 }]);
      }
    };

  const fluxFreedom = [
    { name: fluxMath.name, price: fluxMath.price },
    {
      name: paintDetails.name,
      price: paintDetails.price,
      img: wheelDetails.img_wheel,
    },
    {
      name: wheelDetails.name,
      price: wheelDetails.price,
      img: wheelDetails.img,
    },
    {
      name: "Black White Int",
      price: 400,
    },
    {
      name: checkWallId[0].name,
      price: checkWallId[0].price,
    },
    {
      name: checkRemoteId[0].name,
      price: checkRemoteId[0].price,
    },
  ];
  const { user } = useContext(AuthContext);
  // stripe payment
  const paymentBtn = () => {
    axios
      .post(
        "https://flux-car.onrender.com/api/v1/freedom/create-checkout-session",
        {
          fluxFreedom,
          userEmail: user.email,
        }
      )
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  // stripe payment

  const [active, setActive] = useState(paintDetails.id);
  const [activeWheel, setActiveWheel] = useState(carWheel[0].id);
  return (
    <div className="mt-28 md:ml-10 px-2 md:px-0 md:flex md:flex-row">
      <div
        className="flex items-center justify-center rounded h-[200px] md:h-screen mb-16 w-full md:w-[78%]"
        style={{ backgroundImage: `url("${darkBg}")` }}>
        <img
          src={wheelDetails.img_wheel}
          alt=""
          className="w-[180px] md:w-[900px]"
        />
      </div>
      <div className="flex flex-col gap-3 md:px-10 overflow-y-scroll max-h-screen mb-16 md:w-[22%]">
        <span className="text-4xl text-white text-center md:mt-10">
          Flux Freedom
        </span>
        <span className=" text-sm text-white text-center">
          Est. Delivery: TBA
        </span>
        <div className="w-full bg-[#808080] py-2 rounded text-center">
          <span className="bg-[#ddc861] px-10 py-1 rounded text-black font-semibold">
            Purchase Price
          </span>
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
          {freedomDetails.map((data) => (
            <FreedomDetails
              data={data}
              setFluxMath={setFluxMath}
              freedomActive={freedomActive}
              setfreedomActive={setfreedomActive}
              key={data.id}
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Paint</span>
          <div className="flex flex-row items-center gap-3">
            {carDetails.map((data) => (
              <FreedomPaint
                key={data.id}
                setSelectedCarCost={setSelectedCarCost}
                setWheelDetails={setWheelDetails}
                setPaintDetails={setPaintDetails}
                setCarWheel={setCarWheel}
                setActiveWheel={setActiveWheel}
                setActive={setActive}
                active={active}
                data={data}
              />
            ))}
          </div>
          <span className="text-sm flex gap-1">
            <span className="text-white flex gap-1">
              {paintDetails.name}
              {paintDetails.price === "00" ? (
                <span className="text-gray-400">include</span>
              ) : (
                <span className="text-gray-400">${paintDetails.price}.00</span>
              )}
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Wheels</span>
          <div className="flex flex-row items-center gap-3">
            {carWheel.map((data) => (
              <FreedomWheel
                key={data.id}
                setWheelDetails={setWheelDetails}
                setSelectedTireCost={setSelectedTireCost}
                activeWheel={activeWheel}
                setActiveWheel={setActiveWheel}
                data={data}
              />
            ))}
          </div>
          <span className="text-sm flex gap-1">
            <span className="text-white">{wheelDetails.name}</span>
            {wheelDetails.price === "00" ? (
              <span className="text-gray-400">include</span>
            ) : (
              <span className="text-gray-400">${wheelDetails.price}.00</span>
            )}
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
            <span className="text-white">Black White Int</span>$400.00
          </span>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Charging</span>
          <div className="form-control justify-between flex-row items-center w-full">
            <label className="label cursor-pointer gap-2">
              <input
                onChange={checkHandleWall}
                type="checkbox"
                data-amount="600"
                className="checkbox checkbox-primary border-[#ddc861] rounded"
              />
              <span className="label-text">Wall Charger</span>
            </label>
            <span>$600.00</span>
          </div>
          <div className="form-control justify-between flex-row items-center w-full">
            <label className="label cursor-pointer gap-2">
              <input
                onChange={checkHandleRemote}
                type="checkbox"
                className="checkbox checkbox-primary border-[#ddc861] rounded"
                data-amount="450"
              />
              <span className="label-text">Mobile Charger</span>
            </label>
            <span>$450.00</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Order Your Flux freedom</span>
          <span className="text-white font-semibold">
            Total Price :<span className="text-[#ddc861]"> ${total}.00</span>
          </span>
          <span className="text-white font-semibold">
            Est. Delivery: TBA
          </span>
          <button
            type="button"
            onClick={()=>paymentBtn()}
            className="border border-[#ddc861] px-9 py-2 rounded text-white  customCarDesignButton">
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default FluxFreedom;
