import React from "react";

const CartProductSingle = ({ product }) => {
  console.log(product);
  const { img, name } = product.product;
  return (
    <div>
      <div className="w-[100px]">
        <img src={img} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
        <div>Remove</div>
      </div>
      <div>
        <h1>Quantity :</h1>
        <div>
          <div>+</div>
          <div>1</div>
          <div>-</div>
        </div>
      </div>
      <div>
        <h1>Price :</h1>
        <h1>1000.00</h1>
      </div>
    </div>
  );
};

export default CartProductSingle;
