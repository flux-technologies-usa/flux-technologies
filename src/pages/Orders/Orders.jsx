import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context api/UserContext";
import VillageOrders from "./VillageOrders/VillageOrders";
import { Link } from "react-router-dom";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [villageLoading, setvillageLoading] = useState(false);
  const [villageOrders, setVillageOrders] = useState([]);

  // village get data
  useEffect(() => {
    setvillageLoading(true);
    axios
      .get(
        "https://flux-technologies.onrender.com/stripe/orders",
        {
          params: {
            Email: user.email,
          },
        }
      )
      .then(function (response) {
        setVillageOrders(response.data.cartData);
        setvillageLoading(false);
      });
  }, [user.email]);


  // loader div
  const loading = (
    <div
      role="status"
      class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
      <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg
          class="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div class="w-full">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  );

  return (
    <div className="flex flex-col md:px-10 mx-auto py-32 md:gap-3 gap-8">
        
            <span className=" text-white text-center font-semibold text-3xl pb-5">
              MY ORDERS
            </span>
            {villageLoading === false ? (
              <>
                {villageOrders ? (
                  <>
                    {villageOrders?.map((villagedata, id) => (
                      <VillageOrders villagedata={villagedata} key={id} />
                    ))}
                  </>
                ) : (
                  <div className="flex flex-col justify-center gap-3 mt-52">
                    <span className="flex justify-center text-white text-xl font-semibold">
                      You don't have any order
                    </span>{" "}
                    <button className="btn btn-primary w-[50%] mx-auto">
                      <Link to="/village">Order Now</Link>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <>{loading}</>
                <>{loading}</>
                <>{loading}</>
              </>
            )}
      </div>
  );
};

export default Orders;
