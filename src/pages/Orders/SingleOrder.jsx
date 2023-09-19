import React from "react";
const SingleOrder = ({ order }) => {
  const { img, name, price, quantity } = order;
  return (
    <tr>
      <th className="md:block hidden">
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <span>{name}</span>
      </td>
      <td>
        <span>{quantity}</span>
      </td>
      <td>${price}</td>
      <th>Approved</th>
      <th><button className="btn">Cancel</button></th>
    </tr>
  );
};

export default SingleOrder;
