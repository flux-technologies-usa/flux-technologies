import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./UserContext";

export const CartContext = createContext();

const AddToCartContext = ({ children }) => {
  // context
  const { user } = useContext(AuthContext);
  // all state
  const [products, setProducts] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    fetch(`https://flux-car.onrender.com/api/v1/cart?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.cartData));
  }, [cartLength, user]);

  const contextValue = { products, setProducts, cartLength, setCartLength };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default AddToCartContext;
