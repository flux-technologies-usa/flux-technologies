import React from "react";
import { useState } from "react";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillCaretRight,
} from "react-icons/ai";
import FreedomSingle from "./FreedomSingle";




const FreedomOrders = ({ data }) => {



  const [active, setActive] = useState(false);
  const handleActive = (e) => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const [toggle, setToggle] = useState(true);
  const handleToggle = (e) => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  const [shippingToggle, setShippingToggle] = useState(true);
  const handleShippingToggle = (e) => {
    if (shippingToggle === true) {
      setShippingToggle(false);
    } else {
      setShippingToggle(true);
    }
  };

  const [addressToggle, setAddressToggle] = useState(true);
  const handleAddressToggle = (e) => {
    if (addressToggle === true) {
      setAddressToggle(false);
    } else {
      setAddressToggle(true);
    }
  };

  
  return (
    <div className="flex flex-col w-full bg-slate-700 rounded">
      <div className="flex flex-row justify-between w-full py-10 md:px-10 px-5">
        <div className="bg-black md:p-5 p-5 flex flex-col justify-center rounded">
          <img
            src={data.fluxFreedom[1].img}
            alt=""
            className="md:max-w-[150px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl md:block hidden font-medium">
            {data.fluxFreedom[0].name}
          </span>
          <span className="md:block hidden">{data.fluxFreedom[1].name}</span>
          <span className="md:block hidden">{data.fluxFreedom[2].name}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="md:block hidden">
            <span className="text-lg  font-medium">Subtotal:</span> $
            {data.subtotal / 100}
          </span>
          <span className="md:block hidden">
            <span className="text-lg font-medium">Total:</span> ${data.total / 100}
          </span>
        </div>
        <div className="md:block hidden">
          <span>{data.delivery_status}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div
          onClick={() => handleActive()}
          className="p-3 flex flex-row justify-between cursor-pointer"
        >
          <span>Details</span>
          {active === false ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
        <div
          className={`flex flex-col p-3 border-t gap-1 ${
            active === true ? "block" : "hidden"
          }`}
        >
          <span className="flex flex-row justify-between">
            orderedAt
            <span>{data.createdAt}</span>
          </span>
          <span className="flex flex-row justify-between">
            payment_status
            <span>{data.payment_status}</span>
          </span>

          {/* car details */}
          <div
            onClick={() => handleToggle()}
            className="flex flex-row items-center gap-1 cursor-pointer"
          >
            {toggle === true ? <AiFillCaretRight /> : <AiFillCaretDown />}
            <span>Car Details</span>
          </div>
          <div
            className={`flex flex-col px-5 gap-1 ${
              toggle === false ? "block" : "hidden"
            }`}
          >
            {data.fluxFreedom.map((freedom) => (
              <FreedomSingle key={freedom._id} freedom={freedom} />
            ))}
          </div>
          {/* car detils */}

          <div
            onClick={() => handleShippingToggle()}
            className="flex flex-row items-center gap-1 cursor-pointer"
          >
            {shippingToggle === true ? (
              <AiFillCaretRight />
            ) : (
              <AiFillCaretDown />
            )}
            <span>Shipping</span>
          </div>
          <div
            className={`flex flex-col px-5 gap-1 ${
              shippingToggle === false ? "block" : "hidden"
            }`}
          >
            <div
              onClick={() => handleAddressToggle()}
              className="flex flex-row items-center gap-1 cursor-pointer"
            >
              {addressToggle === true ? (
                <AiFillCaretRight />
              ) : (
                <AiFillCaretDown />
              )}
              <span>Address</span>
            </div>
            <div
              className={`flex flex-col px-5 gap-1 ${
                addressToggle === false ? "block" : "hidden"
              }`}
            >
              <span className="flex flex-row justify-between">
                City: <span>{data.shipping.address.city}</span>
              </span>
              <span className="flex flex-row justify-between">
                Country: <span>{data.shipping.address.country}</span>
              </span>
              <span className="flex flex-row justify-between">
                line1 : <span>{data.shipping.address.line1}</span>
              </span>
              <span className="flex flex-row justify-between">
                line2 : <span>{data.shipping.address.line2}</span>
              </span>
              <span className="flex flex-row justify-between">
                postal_code : <span>{data.shipping.address.postal_code}</span>
              </span>
            </div>
            <span className="flex flex-row justify-between">
              PaymentEmail: <span>{data.shipping.email}</span>
            </span>
            <span className="flex flex-row justify-between">
              Name: <span>{data.shipping.name}</span>
            </span>
            <span className="flex flex-row justify-between">
              Phone: <span>{data.shipping.phone}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreedomOrders;
