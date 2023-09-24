import React from "react";
import { black, darkBg } from "../../assets/Callback";
import { useState } from "react";
import freedomPaintData from "./freedomcardata";
import freedomdata from "./datafreedom";
import FreedomDetails from "./FreedomDetails";
import FreedomPaint from "./FreedomPaint";
import FreedomWheel from "./FreedomWheel";

const FluxFreedom = () => {
  const [carDetails, setCarDetails] = useState(freedomPaintData);
  const [villageDetails, setVillageDetails] = useState(freedomdata);
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
    400;

  const [checkWallId, setCheckWallId] = useState(12345);

  const checkHandleWall = (e) => {
    const checked = e.target.checked;
    if (checked === true) {
      setCheckWallId(e.target.value);
    } else {
      setCheckWallId(12344);
    }
  };

  const [checkRemoteId, setCheckRemoteId] = useState(123445);

  const checkHandleRemote = (e) => {
    if (e.target.checked === true) {
      setCheckRemoteId(e.target.value);
    } else {
      setCheckRemoteId(123445);
    }
  };

  // stripe payment
  // const makePayment = async () => {
  //   console.log("checkout");
  //   fetch("http://localhost:8080/api/v1/create-checkout-session", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       items: [
  //         { id: fluxMath.id, quantity: 1 },
  //         { id: paintDetails.id, quantity: 1 },
  //         { id: wheelDetails.id, quantity: 1 },
  //         { id: 1234567, quantity: 1 },
  //         { id: Math.floor(checkWallId), quantity: 1 },
  //         { id: Math.floor(checkRemoteId), quantity: 1 },
  //       ],
  //     }),
  //   })
  //     .then((res) => {
  //       if (res.ok) return res.json();
  //       return res.json().then((json) => Promise.reject(json));
  //     })
  //     .then(({ url }) => {
  //       window.location = url;
  //     })
  //     .catch((e) => {
  //       console.error(e.error);
  //     });
  // };
  // stripe payment

  const [active, setActive] = useState(paintDetails.id);
  const [activeWheel, setActiveWheel] = useState(carWheel[0].id);
  return (
    <div className="mt-28 lg:ml-10 px-2 lg:px-0 lg:flex lg:flex-row">
      <div
        className="flex items-center justify-center rounded h-[200px] lg:h-screen mb-16 w-full lg:w-[78%]"
        style={{ backgroundImage: `url("${darkBg}")` }}>
        <img
          src={wheelDetails.img_wheel}
          alt=""
          className="w-[180px] lg:w-[600px]"
        />
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
          {villageDetails.map((data) => (
            <FreedomDetails
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
                value="9778285"
                data-amount="700"
                className="checkbox checkbox-primary border-[#ddc861] rounded"
              />
              <span className="label-text">Wall Charger</span>
            </label>
            <span>$700.00</span>
          </div>
          <div className="form-control justify-between flex-row items-center w-full">
            <label className="label cursor-pointer gap-2">
              <input
                onChange={checkHandleRemote}
                type="checkbox"
                value="4403379"
                className="checkbox checkbox-primary border-[#ddc861] rounded"
                data-amount="1100"
              />
              <span className="label-text">Mobile Charger</span>
            </label>
            <span>$1,100.00</span>
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
            // onClick={makePayment}
            className="border border-[#ddc861] px-9 py-2 rounded text-white  customCarDesignButton">
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default FluxFreedom;
