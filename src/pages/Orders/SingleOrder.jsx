import React from "react";
import SingleDetails from "./singleDetails";
const SingleOrder = ({ order }) => {
  const { img, } = order;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      {order.products.map((data, id) => (
        <SingleDetails data={data} key={id} />
      ))}
      <th>{order.delivery_status}</th>
      <th>
        <button className="btn">Cancel</button>
      </th>
    </tr>
  );
};

export default SingleOrder;
