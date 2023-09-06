import React from "react";
import CartProduct from "./CartProduct/CartProduct";
import Cart from "./Cart/Cart";

const CartMain = () => {
  return (
    <div className="pt-[200px] h-[950px]  flex flex-row bg-white text-black ">
      {/* left side cart product */}
      <div className="w-8/12">
        <CartProduct></CartProduct>
      </div>

      {/* right side cart menu */}
      <div className="w-4/12">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default CartMain;
