import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleOrder from "./SingleOrder";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context api/UserContext";
import FreedomOrders from "./FreedomOrders/FreedomOrders";
import VillageOrders from "./VillageOrders/VillageOrders";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  const [freedomOrder, setFreedomOrder] = useState([]);
  // const [productOrders, setProductOrders] = useState();

  const [villageOrders, setVillageOrders] = useState([]);

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

  useEffect(() => {
      axios
        .get("https://flux-car.onrender.com/api/v1/village/village-orders", {
          params: {
            Email: user.email,
          },
        })
        .then(function (response) {
          setVillageOrders(response.data.cartData);
        });
  }, [user.email]);

  useEffect(() => {
    axios
      .get("https://flux-car.onrender.com/api/v1/freedom/freedom-orders", {
        params: {
          userEmail: user.email,
        },
      })
      .then(function (response) {
        setFreedomOrder(response.data.cartData);
      });
  }, [user.email]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/api/v1/store/product-orders", {
  //       params: {
  //         userEmail: user.email,
  //       },
  //     })
  //     .then(function (response) {
  //       setProductOrders(response.data);
  //     });
  // }, [user.email]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="flex md:flex-row flex-col md:px-10 mx-auto py-32 md:gap-3 gap-8">
      <div className="md:w-[20%] w-full pt-10">
        <button
          onClick={() => handleVillageOrder(1)}
          className={` w-full py-2 text-white md:text-start text-center pl-5 border-b border-black font-semibold hover:bg-black ${
            orderRow === 1 ? "bg-black" : "bg-base"
          }`}
        >
          FluxVillage Orders
        </button>
        <button
          onClick={() => handleFreedomOrder(2)}
          className={` w-full py-2 text-white md:text-start text-center pl-5 border-b border-black font-semibold hover:bg-black ${
            orderRow === 2 ? "bg-black" : "bg-base"
          }`}
        >
          FluxFreedom Orders
        </button>
        <button
          onClick={() => handleProductOrder(3)}
          className={` w-full py-2 text-white md:text-start text-center pl-5 border-b border-black font-semibold hover:bg-black ${
            orderRow === 3 ? "bg-black" : "bg-base"
          }`}
        >
          FluxProduct Orders
        </button>
      </div>
      <div className="flex flex-col gap-3 md:w-[80%] w-full">
        {/* {orderRow === 1 ? (
          <>
            {villageOrders ? (
              <div className="flex flex-col justify-center gap-3">
                <span className="">You don't have any order</span>{" "}
                <button className="btn btn-primary">
                  <Link to="/village">Order Now</Link>
                </button>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            <span className=" text-white md:text-start text-center font-semibold text-xl">
              Flux Village Orders
            </span>
            {villageOrders.map((villagedata, id) => (
              <VillageOrders villagedata={villagedata} key={id} />
            ))}
          </>
        )} */}

        {orderRow === 2 ? (
          <>
            {freedomOrder === "" ? (
              <div className="flex flex-col justify-center gap-3">
                <span>You don't have any order</span>{" "}
                <button className="btn btn-primary">
                  <Link to="/freedom">Order Now</Link>
                </button>
              </div>
            ) : (
              <>
                <span className=" text-white md:text-start text-center font-semibold text-xl">
                  Flux Freedom Orders
                </span>
                {freedomOrder.map((data, id) => (
                  <FreedomOrders data={data} key={id} />
                ))}
              </>
            )}
          </>
        ) : (
          ""
        )}

        {orderRow === 3 ? (
          <>
            <span className=" text-white md:text-start text-center font-semibold text-xl">
              Product Orders
            </span>
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
                  {orders?.map((order) => (
                    <SingleOrder key={order.id} order={order} />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Orders;
