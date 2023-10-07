import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleOrder from "./SingleOrder";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context api/UserContext";
import FreedomOrders from "./FreedomOrders/FreedomOrders";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  const [freedomOrder, setFreedomOrder] = useState();
  const [productOrders, setProductOrders] = useState();
  console.log(productOrders)

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/freedom/freedom-orders", {
        params: {
          userEmail: user.email,
        },
      })
      .then(function (response) {
        setFreedomOrder(response.data.cartData);
      });
  }, [user.email]);



  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/store/freedom-product-orders", {
        params: {
          userEmail: user.email,
        },
      })
      .then(function (response) {
        setProductOrders(response.data.cartData);
      });
  }, [user.email]);

  

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const [orderRow, setOrderRow] = useState(1);
  const handleVillageOrder = (e) => {
    setOrderRow(e);
  };
  const handleFreedomOrder = (e) => {
    setOrderRow(e);
  };
  const handleProductOrder = (e) => {
    setOrderRow(e);
  };

  return (
    <div className="flex flex-row md:px-10 mx-auto py-32 gap-3">
      <div className="w-[20%] pt-10">
        <button
          onClick={() => handleVillageOrder(1)}
          className={` w-full py-2 text-white text-start pl-5 border-b border-black font-semibold hover:bg-black ${
            orderRow === 1 ? "bg-black" : "bg-base"
          }`}
        >
          FluxVillage Orders
        </button>
        <button
          onClick={() => handleFreedomOrder(2)}
          className={` w-full py-2 text-white text-start pl-5 border-b border-black font-semibold hover:bg-black ${
            orderRow === 2 ? "bg-black" : "bg-base"
          }`}
        >
          FluxFreedom Orders
        </button>
        <button
          onClick={() => handleProductOrder(3)}
          className={` w-full py-2 text-white text-start pl-5 border-b border-black font-semibold hover:bg-black ${
            orderRow === 3 ? "bg-black" : "bg-base"
          }`}
        >
          FluxProduct Orders
        </button>
      </div>
      <div className="flex flex-col gap-3 w-[80%]">

        {orderRow === 3 ? (
          <>
          <span className=" text-white font-semibold text-xl">Product Orders</span>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <SingleOrder key={order.id} order={order} />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          ""
        )}
        {orderRow === 2 ? <>
          <span className=" text-white font-semibold text-xl">Flux Freedom Orders</span>
        {freedomOrder.map((data, id)=><FreedomOrders data={data} key={id}/>)}
        </> : ""}
      </div>
    </div>
  );
};

export default Orders;
