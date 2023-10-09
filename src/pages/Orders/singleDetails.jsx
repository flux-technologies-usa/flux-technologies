import React from "react";

const singleDetails = ({data}) => {
  return (
    <>
      <td>
        <span>{data.product.name}</span>
      </td>
      <td>
        <span>{data.quentity}</span>
      </td>
      <td>${data.product.price}</td>
    </>
  );
};

export default singleDetails;
