import React from "react";
import "../Cart.scss";
import { useContext } from "react";
import { CartContext } from "../../../context api/AddToCartContext";
import { calculateTotal } from "../../../components/CalculateTotal/CalculateTotal";
import axios from "axios";
import { AuthContext } from "../../../context api/UserContext";
import { useState } from "react";

const Cart = () => {
  // conntext api
  const { products } = useContext(CartContext);
  console.log(products)

  const { user } = useContext(AuthContext);
  // calculate total
  const totalPrice = calculateTotal(products);

  const product = products.map((items) => ({
    name: items.product.name,
    price: items.product.price,
    quantity: items.quentity,
    image: `https://flux-technologies.onrender.com/api/v1/product/product-photo/${items.product._id}`
  }));
  const [storeLoader, setStoreLoader] = useState(false);

  const paymentBtn = () => {
    setStoreLoader(false);
    axios
      .post("https://flux-technologies.onrender.com/stripe/create-checkout-session", {
        'FluxData': product,
        Email: user.email,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
        setStoreLoader(true);
      })
      .catch((err) => console.log(err.message));
  };

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
      <div
        className="mt-4 bg-[#dbc861] text-center text-white p-[8px] text-[17px] font-semibold cursor-pointer chackoutborder hover:text-black hover:bg-white duration-[.4s] ease-in"
        onClick={() => paymentBtn()}
      >
        {storeLoader === false ? (
          <span>Checkout</span>
        ) : (
          <span className="loading loading-spinner text-warning"></span>
        )}
      </div>
    </div>
  );
};

export default Cart;
