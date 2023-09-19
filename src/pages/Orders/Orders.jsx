import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleOrder from "./SingleOrder";
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  return (
    <div className="flex flex-col md:px-10 mx-auto py-32 gap-3">
      <span className="text-lg text-white font-semibold">My Orders</span>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="md:block hidden">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders.map((order) => (
              <SingleOrder key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
