import React from "react";

const CartProductSingle = ({ product }) => {
  console.log(product);
  const { img, name } = product.product;
  return (
    <div className=" flex  mx-auto border1">
      <div className=" flex w-4/12">
        <div className="w-[100px]">
          <img src={img} alt="" />
        </div>
        <div>
          <h1>{name}</h1>
          <div>Remove</div>
        </div>
      </div>
      <div className="flex items-center w-4/12">
        <h1>Quantity :</h1>
        <div className="flex pl-2">
          <div className="w-[30px] h-[50px] customquantityBorder text-center text-[23px] font-extrabold pt-[6px]">
            <span className="mt-20">+</span>
          </div>
          <div className="w-[30px] h-[50px] customquantityBorder text-center text-[20px] font-bold pt-[8px]">
            1
          </div>
          <div className="w-[30px] h-[50px] customquantityBorder text-center text-[23px] font-extrabold pt-[6px]">
            <span className="mt-20">-</span>
          </div>
        </div>
      </div>
      <div className="w-4/12">
        <h1>Price :</h1>
        <h1>1000.00</h1>
      </div>
    </div>
  );
};

export default CartProductSingle;
