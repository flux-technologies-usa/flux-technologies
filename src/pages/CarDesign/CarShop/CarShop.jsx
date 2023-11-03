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
import { Link, Navigate, useNavigate } from "react-router-dom";
import PrivateRoutes from "../../Routes/PrivateRoutes";

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

  const navigate = useNavigate();

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
    parseFloat(checkboxSum);

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
    { name: "Remote Charger(not selected)", price: 0 },
  ]);

  const checkHandleRemote = (e) => {
    if (e.target.checked === true) {
      setCheckRemoteId([{ name: "Remote Charger(selected)", price: 450 }]);
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
      price: 0,
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
    if (!user?.email) {
      return navigate("/login");
    } else {
      axios
        .post(
          "https://flux-server-lu38.onrender.com/api/v1/village/create-checkout-session",
          {
            fluxVillage,
            villageEmail: user.email,
          }
        )
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
          }
        })
        .catch((err) => console.log(err.message));
    }
  };
  // stripe payment
  function currencyFormat(num) {
    return (
      "$" +
      parseFloat(num)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  }
  const [active, setActive] = useState(paintDetails.id);
  const [activeWheel, setActiveWheel] = useState(carWheel[0].id);
  return (
    <div className="mt-28 md:ml-10 px-2 md:px-0 md:flex md:flex-row">
      <div
        className="flex items-center justify-center rounded h-[200px] md:h-screen mb-16 w-full md:w-[70%]"
        style={{ backgroundImage: `url("${darkBg}")` }}
      >
        <img
          src={wheelDetails.img_wheel}
          alt=""
          className="w-[180px] md:w-[600px]"
        />
      </div>
      <div className="flex flex-col gap-3 lg:px-10 md:px-3 overflow-y-scroll max-h-screen mb-16 md:w-[30%]">
        <span className="lg:text-4xl md:text-2xl text-white text-center md:mt-10">
          Flux Village
        </span>
        <span className=" lg:text-sm md:text-xs text-white text-center">
          Est. Delivery: TBA
        </span>
        <div className="w-full bg-[#808080] py-2 rounded text-center">
          <span className="bg-[#ddc861] md:text-sm md:px-5 lg:px-8 px-10 py-1 rounded text-black font-semibold">
            Purchase Price
          </span>
        </div>
        <div className="flex flex-row items-center justify-between pt-5">
          <div className="flex flex-col items-center">
            <span className="lg:text-xl md:text-xs text-white">
              400+<span className="lg:text-base md:text-xs pl-1">mi</span>
            </span>
            <span className="lg:text-xs md:text-[0.5rem]">Range(est.)</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="lg:text-xl md:text-xs text-white">
              0-100<span className="lg:text-base md:text-xs pl-1">mph</span>
            </span>
            <span className="lg:text-xs md:text-[0.5rem]">Range(est.)</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="lg:text-xl md:text-xs text-white">
              5.8<span className="lg:text-base md:text-xs pl-1">sec</span>
            </span>
            <span className="lg:text-xs md:text-[0.5rem]">Range(est.)</span>
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
            <span className="text-white">{paintDetails.name}</span>
            {paintDetails.price === "00" ? (
              <span className="text-white">Included</span>
            ) : (
              <span className="text-white">
                ${currencyFormat(paintDetails.price)}
              </span>
            )}
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
              <span className="text-white">Included</span>
            ) : (
              <span className="text-white">
                {currencyFormat(wheelDetails.price)}
              </span>
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
            <span className="text-white">Black</span>{" "}
            <span className="text-white">Included</span>
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
              <span className="label-text md:text-xs lg:text-base text-white">
                Wall Charger
              </span>
            </label>
            <span className="md:text-xs lg:text-base text-white">$600.00</span>
          </div>
          <div className="form-control justify-between flex-row items-center w-full">
            <label className="label cursor-pointer gap-2">
              <input
                onChange={checkHandleRemote}
                type="checkbox"
                className="checkbox checkbox-primary border-[#ddc861] rounded"
                data-amount="450"
              />
              <span className="label-text md:text-xs lg:text-base text-white">
                Remote Charger
              </span>
            </label>
            <span className="md:text-xs lg:text-base text-white">$450.00</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 pt-16">
          <span className="lg:text-2xl md:text-lg text-white">
            Order Your Flux Village
          </span>
          <span className="text-white font-semibold md:text-sm lg:text-base">
            Total Price :
            <span className="text-[#ddc861]"> {currencyFormat(total)}</span>
          </span>
          <span className="text-white font-semibold md:text-sm lg:text-base">
            Est. Delivery: TBA
          </span>
            <button
              type="button"
              onClick={() => paymentBtn()}
              className="border border-[#ddc861]  lg:px-9 py-2 rounded text-white  customCarDesignButton"
            >
              Continue to Payment
            </button>
        </div>
      </div>
    </div>
  );
};

export default CarShop;
