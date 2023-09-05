import React from 'react'
import './Store.scss'
const SingleProduct = ({single}) => {
    const {img, name, price, id} = single;
    console.log(img)
  return (
    <div className="single-product w-[320px] h-[300px] bg-white single-product hover:bg-[#707070]">
          <div className="div">
          <div className="single-product-img h-[200px]">
            <img
              className="w-[200px] h-auto mx-auto pt-[40px]"
              src={img}
              alt={name}
            />
          </div>
          <div className="single-product-details mt-[25px] ml-3 font-medium opacity-80">
            <div className="product-price pb-1">${price}.00</div>
            <div className="product-name ">{name}</div>
          </div>
          </div>
          <div className="cartbtn">
            <div className="btn pt-4">Add to cart</div>
          </div>
        </div>
  )
}

export default SingleProduct