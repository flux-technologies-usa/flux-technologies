import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context api/AddToCartContext";

const CartProduct = () => {
  // context api
  const { products } = useContext(CartContext);
  console.log(products)

  return (
    <div className="border1">
      <div>
        <img src={products[0].product.img} alt="" />
      </div>
    </div>
  );
};

export default CartProduct;
