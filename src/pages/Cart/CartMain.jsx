import React from "react";
import CartProduct from "./CartProduct/CartProduct";
import Cart from "./Cart/Cart";

const CartMain = () => {
  return (
    <div className="mt-[105px] pt-[100px] h-[950px] max-w-full bg-white text-black">
      <div className="max-w-[1350px] mx-auto flex md:flex-row flex-col">
      {/* left side cart product */}
      <div className="md:w-7/12 w-full">
        <CartProduct></CartProduct>
      </div>

      {/* right side cart menu */}
      <div className="md:w-5/12 w-full">
        <Cart></Cart>
      </div>
      </div>
    </div>
  );
};

export default CartMain;
