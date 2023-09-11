import React from "react";
import '../Cart.scss'
const CartProductSingle = ({ product }) => {
  console.log(product);
  const { img, name } = product.product;
  return (
    <div className="flex md:flex-row flex-col md:justify-between md:items-center md:gap-0 gap-4 md:w-full md:border-none border-b border-[#dbc861] md:p-0 pb-5">
      <div className="flex md:flex-row md:gap-28 gap-10">
      <div className="flex flex-row items-start gap-8">
        <img src={img} alt="" className="md:max-w-[110px] max-w-[70px]"/>
        <div className="flex flex-col gap-2">
          <span className="md:text-base text-sm">{name}</span>
          <button className="md:px-5 md:py-2 px-3 py-1 border border-black bg-black hover:bg-white hover:text-black text-white md:text-base md:font-normal font-bold text-sm cart-btn">Remove</button>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <span className="font-bold md:text-base text-sm">Quintity:</span>
        <div className="flex flex-row items-center">
          <button className="border border-black bg-black hover:bg-white text-white hover:text-black md:px-3 md:py-3 px-1 py-2 font-bold text-lg cart-btn">+</button>
          <span className="md:px-3 md:py-3 px-1 py-2 border-t border-b border-black text-lg font-bold">1</span>
          <button className="border border-black bg-black hover:bg-white text-white hover:text-black md:px-3 md:py-3 px-1 py-2 font-bold text-lg cart-btn">-</button>
        </div>
      </div>
      </div>
        <div>
        <div className="flex flex-row items-center justify-center gap-3">
        <span className="font-bold md:text-lg text-xs">Price :</span>
        <span className="md:font-medium md:text-base text-xs">$500.00</span>
        </div>
        </div>
    </div>
  );
};

export default CartProductSingle;
