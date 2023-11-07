import React from 'react';
import VillageSingle from './VillageSingle';
import { useState } from 'react';
import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiFillCaretRight,
  } from "react-icons/ai";

const VillageOrders = ({villagedata}) => {


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
        <div className="flex flex-col w-full bg-slate-700 rounded text-white">
      <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col items-center sm:gap-5 lg:gap-0 md:gap-0 xl:gap-0 gap-5 justify-between w-full py-10 px-10">
        <div className="bg-black p-5 rounded">
          <img
            src={villagedata?.product[1]?.img}
            alt=""
            className="lg:max-w-[400px] md:max-w-[200px]"
          />
        </div>
        <div className="flex flex-row gap-10 lg:flex-col xl:flex-col md:flex-col sm:flex-row sm:gap-10 lg:gap-2 md:gap-2 xl:gap-2">
          <span className="lg:text-xl font-medium md:text-base">
            {villagedata?.product[0]?.name}
          </span>
          <span className='lg:text-lg font-medium md:text-sm'>{villagedata?.product[1]?.name}</span>
        </div>
        <div className="flex flex-row gap-10 lg:flex-col xl:flex-col md:flex-col sm:flex-row sm:gap-10 lg:gap-2 md:gap-2 xl:gap-2">
          <span>
            <span className="lg:text-xl font-medium md:text-base">Subtotal:</span> $
            {villagedata?.subtotal}
          </span>
          <span>
            <span className="lg:text-xl font-medium md:text-base">Total:</span> ${villagedata?.total}
          </span>
        </div>
        <div>
          <span>{villagedata?.delivery_status}</span>
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
            <span>{villagedata?.createdAt}</span>
          </span>
          <span className="flex flex-row justify-between">
            payment_status
            <span>{villagedata?.payment_status}</span>
          </span>

          {/* car details */}
          <div
            onClick={() => handleToggle()}
            className="flex flex-row items-center gap-1 cursor-pointer"
          >
            {toggle === true ? <AiFillCaretRight /> : <AiFillCaretDown />}
            <span className='text-lg font-semibold'>Product Details</span>
          </div>
          <div
            className={`flex flex-col px-5 gap-1 ${
              toggle === false ? "block" : "hidden"
            }`}
          >
            {villagedata?.product.map((village) => (
              <VillageSingle key={village._id} village={village} />
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
            <span className='text-lg font-semibold'>Shipping</span>
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
              <span className='text-lg font-semibold'>Address</span>
            </div>
            <div
              className={`flex flex-col px-5 gap-1 ${
                addressToggle === false ? "block" : "hidden"
              }`}
            >
              <span className="flex flex-row justify-between">
                City: <span>{villagedata?.shipping.address.city}</span>
              </span>
              <span className="flex flex-row justify-between">
                Country: <span>{villagedata?.shipping.address.country}</span>
              </span>
              <span className="flex flex-row justify-between">
                line1 : <span>{villagedata?.shipping.address.line1}</span>
              </span>
              <span className="flex flex-row justify-between">
                line2 : <span>{villagedata?.shipping.address.line2}</span>
              </span>
              <span className="flex flex-row justify-between">
                postal_code : <span>{villagedata?.shipping.address.postal_code}</span>
              </span>
            </div>
            <span className="flex flex-row justify-between">
              PaymentEmail: <span>{villagedata?.shipping.email}</span>
            </span>
            <span className="flex flex-row justify-between">
              Name: <span>{villagedata?.shipping.name}</span>
            </span>
            <span className="flex flex-row justify-between">
              Phone: <span>{villagedata?.shipping.phone}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default VillageOrders;