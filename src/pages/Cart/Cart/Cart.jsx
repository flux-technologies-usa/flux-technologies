import React from "react";
import "../Cart.scss";
import { useContext } from "react";
import { CartContext } from "../../../context api/AddToCartContext";
import { calculateTotal } from "../../../components/CalculateTotal/CalculateTotal";

const Cart = () => {
  // conntext api
  const { products } = useContext(CartContext);

  // calculate total
  const totalPrice = calculateTotal(products);
  return (
    <div className=" md:mx-20 mx-6 md:mt-0 mt-20 h-full">
      <h1 className="text-2xl ">Summary</h1>
      <div>
        <div className="flex justify-between font-bold text-[17px] pt-3">
          <h1 className="">Total Items :</h1>
          <h1>{products.length}</h1>
        </div>
        <div className="w-full h-[1px] bg-black mt-1" />
      </div>
      <div>
        <div className="flex justify-between font-bold text-[17px] pt-3">
          <h1 className="">Order Total :</h1>
          <h1>{totalPrice}$</h1>
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
