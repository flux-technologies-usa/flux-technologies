import React from "react";

const CarDesign2 = () => {
  const makePayment = async () => {
    // const stripe = await loadStripe(
    //   "pk_test_51NmhimDBfEUXxFmszR5Ul1n3zANWL4vjEF6RkWwQ2ENvg385lIQuYLkzn72AH55vy4CCJ5A0IQsnACn1oD38sZXu00QpPGV4G7"
    // );
    console.log("checkout");
    fetch("http://localhost:8000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
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
    <div>
      <button className="mt-32 btn btn-primary" onClick={makePayment}>
        checkout
      </button>
    </div>
  );
};

export default CarDesign2;
