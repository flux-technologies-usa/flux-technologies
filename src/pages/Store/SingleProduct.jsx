import React from "react";
import "./Store.scss";
const SingleProduct = ({ single }) => {
  const { img, name, price } = single;
  console.log(img);
  return (
    <div className="single-product w-[320px] h-[300px] bg-white single-product hover:bg-[#707070] relative">
      <div className="div">
        <div className="single-product-img h-[200px]">
          <img
            className="w-[200px] h-auto mx-auto pt-[50px]"
            src={img}
            alt={name}
          />
        </div>
        <div className="single-product-details text-black font-semibold mt-[25px] ml-3  opacity-80">
          <div className="product-price pb-1">${price}.00</div>
          <div className="product-name ">{name}</div>
        </div>
      </div>
      <button className="btn absolute border-none top-[40%] right-[30%] rounded-none button">Add to cart</button>
    </div>
  );
};

export default SingleProduct;
