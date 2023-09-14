import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context api/AddToCartContext";
import CartProductSingle from "./CartProductSingle";

const CartProduct = () => {
  // context api
  const { products } = useContext(CartContext);

  console.log(products);
  return (
    <div className="flex flex-col items-center gap-14 w-full px-5">
      {products.map((product) => (
        <CartProductSingle
          product={product}></CartProductSingle>
      ))}
    </div>
  );
};

export default CartProduct;
