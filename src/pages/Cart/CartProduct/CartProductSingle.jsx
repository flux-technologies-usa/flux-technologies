import React from "react";
import "../Cart.scss";
import {
  handleQuantityDecrease,
  handleQuantityIncrease,
  handleRemove,
} from "../../../components/LocalStorage/LocalStorage";
import { useContext } from "react";
import { CartContext } from "../../../context api/AddToCartContext";
const CartProductSingle = ({ product }) => {
  const { img, name, price } = product.product;

  // context api
  const { products, setCartLength, cartLength } = useContext(CartContext);
  // functions
  const handleRemoveButton = () => {
    handleRemove(products, product);
    setCartLength(cartLength - 1);
  };

  const handleQuantityIncreaseButton = () => {
    handleQuantityIncrease(products, product);
    setCartLength(cartLength + 1);
  };
  const handleQuantityDecreaseButton = () => {
    handleQuantityDecrease(products, product);
    setCartLength(cartLength - 1);
  };
  return (
    <div className="flex md:flex-row flex-col md:justify-between md:items-center md:gap-0 gap-4 md:w-full md:border-none border-b border-[#dbc861] md:p-0 pb-5">
      <div className="flex md:flex-row md:gap-28 gap-10">
        <div className="flex flex-row items-start gap-8">
          <img src={img} alt="" className="md:max-w-[110px] max-w-[70px]" />
          <div className="flex flex-col gap-2">
            <span className="md:text-base text-sm">{name}</span>
            <div
              onClick={handleRemoveButton}
              className="md:px-5 md:py-2 px-3 py-1 border border-black bg-black hover:bg-white hover:text-black text-white md:text-base md:font-normal font-bold text-sm cart-btn cursor-pointer select-none">
              Remove
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <span className="font-bold md:text-base text-sm">Quantity:</span>
          <div className="flex flex-row items-center">
            <div
              onClick={handleQuantityIncreaseButton}
              className="border border-black bg-black hover:bg-white text-white hover:text-black md:px-3 md:py-3 px-1 py-2 font-bold text-lg cart-btn cursor-pointer select-none">
              +
            </div>
            <span className="md:px-3 md:py-3 px-1 py-2 border-t border-b border-black text-lg font-bold">
              {product.quentity}
            </span>
            <div
              onClick={handleQuantityDecreaseButton}
              className="border border-black bg-black hover:bg-white text-white hover:text-black md:px-3 md:py-3 px-1 py-2 font-bold text-lg cart-btn cursor-pointer select-none">
              -
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center justify-center gap-3">
          <span className="font-bold md:text-lg text-xs">Price :</span>
          <span className="md:font-medium md:text-base text-xs">{price} $</span>
        </div>
      </div>
    </div>
  );
};

export default CartProductSingle;
