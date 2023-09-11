import React from "react";
import '../Cart.scss'

const Cart = () => {
  return (
    <div className=" md:mx-20 mx-6 md:mt-0 mt-20 h-full">
      <h1 className="text-2xl ">Summary</h1>
      <div>
        <div className="flex justify-between font-bold text-[17px] pt-3">
          <h1 className="">Total Items :</h1>
          <h1>3</h1>
        </div>
        <div className="w-full h-[1px] bg-black mt-1" />
      </div>
      <div>
        <div className="flex justify-between font-bold text-[17px] pt-3">
          <h1 className="">Order Total :</h1>
          <h1>100$</h1>
        </div>
        <div className="w-full h-[1px] bg-black mt-1" />
      </div>
      <div className="mt-4 bg-[#dbc861] text-center text-white p-[8px] text-[17px] font-semibold cursor-pointer chackoutborder hover:text-black hover:bg-white duration-[.4s] ease-in">
        Checkout
      </div>
    </div>
  );
};

export default Cart;
