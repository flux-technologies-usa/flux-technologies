import React from "react";
import "../Cart.scss";
import { useContext } from "react";
import { CartContext } from "../../../context api/AddToCartContext";
import { calculateTotal } from "../../../components/CalculateTotal/CalculateTotal";
import { AuthContext } from "../../../context api/UserContext";

const Cart = () => {
  // conntext api
  const { products } = useContext(CartContext);
  console.log(products);

  const {user} = useContext(AuthContext)
  console.log(user)

  // calculate total
  const totalPrice = calculateTotal(products);
  const makePayment = async () => {
    console.log("checkout");
    fetch("http://localhost:8080/api/v1/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ id: 1, quantity: 1 }],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
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
        onClick={makePayment}
      >
        Checkout
      </div>
    </div>
  );
};

export default Cart;
