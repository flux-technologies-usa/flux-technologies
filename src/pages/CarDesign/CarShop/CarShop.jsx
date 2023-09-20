import React, { useContext } from "react";
import { black, darkBg } from "../../../assets/Callback";
import { useState } from "react";
import CarDetails from "./CarDetails";
import CarWheel from "./CarWheel";
import data from "./cardesign";
import dataVillage from "./fluxvillage";
import FluxDetails from "./FluxDetails";
import "../CarDesign.scss";
import axios from "axios";
import { AuthContext } from "../../../context api/UserContext";

const CarShop = () => {
  const [carDetails, setCarDetails] = useState(data);
  const [villageDetails, setVillageDetails] = useState(dataVillage);
  const [villageActive, setVillageActive] = useState(villageDetails[0].id);

  const [paintDetails, setPaintDetails] = useState(carDetails[0]);
  const [carWheel, setCarWheel] = useState(carDetails[0].wheels);
  const [wheelDetails, setWheelDetails] = useState(carWheel[0]);

  const [fluxMath, setFluxMath] = useState(villageDetails[0]);
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
    1000;

  const [checkWallId, setCheckWallId] = useState([
    { name: "Wall Charger(not selected)", price: 0 },
  ]);
  const checkHandleWall = (e) => {
    const checked = e.target.checked;
    if (checked === true) {
      setCheckWallId([{ name: "Wall Charger(selected)", price: 5000 }]);
    } else {
      setCheckWallId([{ name: "Wall Charger(not selected)", price: 0 }]);
    }
  };

  const [checkRemoteId, setCheckRemoteId] = useState([
    { name: "Remote Charger(not selected)", price: 0 },
  ]);

  const checkHandleRemote = (e) => {
    if (e.target.checked === true) {
      setCheckRemoteId([{ name: "Remote Charger(selected)", price: 5000 }]);
    } else {
      setCheckRemoteId([{ name: "Remote Charger(not selected)", price: 0 }]);
    }
  };

  const fluxVillage = [
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
      price: 1000,
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

  // user uid
  const { user } = useContext(AuthContext);
  // stripe payment
  const paymentBtn = () => {
    axios
      .post("http://localhost:8080/api/v1/flux/create-checkout-session", {
        fluxVillage,
        userId: user.uid,
      })
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
    <div className="mt-28 lg:ml-10 px-2 lg:px-0 lg:flex lg:flex-row">
      <div
        className="flex items-center justify-center rounded h-[200px] lg:h-screen mb-16 w-full lg:w-[78%]"
        style={{ backgroundImage: `url("${darkBg}")` }}
      >
        <img
          src={wheelDetails.img_wheel}
          alt=""
          className="w-[180px] lg:w-[600px]"
        />
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
          {villageDetails.map((data) => (
            <FluxDetails
              data={data}
              setFluxMath={setFluxMath}
              villageActive={villageActive}
              setVillageActive={setVillageActive}
              key={data.id}
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Paint</span>
          <div className="flex flex-row items-center gap-3">
            {carDetails.map((data) => (
              <CarDetails
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
            <span className="text-white">{paintDetails.name}</span>$
            {paintDetails.price}.00
          </span>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Wheels</span>
          <div className="flex flex-row items-center gap-3">
            {carWheel.map((data) => (
              <CarWheel
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
            <span className="text-white">Black White Int</span>$1,000.00
          </span>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="text-2xl text-white">Charging</span>
          <div className="form-control justify-between flex-row items-center w-full">
            <label className="label cursor-pointer gap-2">
              <input
                onChange={checkHandleWall}
                type="checkbox"
                data-amount="5000"
                className="checkbox checkbox-primary border-[#ddc861] rounded"
              />
              <span className="label-text">Wall Charger</span>
            </label>
            <span>$5,000.00</span>
          </div>
          <div className="form-control justify-between flex-row items-center w-full">
            <label className="label cursor-pointer gap-2">
              <input
                onChange={checkHandleRemote}
                type="checkbox"
                className="checkbox checkbox-primary border-[#ddc861] rounded"
                data-amount="5000"
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
            onClick={() => paymentBtn()}
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
