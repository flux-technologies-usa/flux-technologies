import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const AddToCartContext = ({ children }) => {
  // all state
  const [products, setProducts] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const productData = JSON.parse(localStorage.getItem("cart"));
      setProducts(productData);
    } else {
      setProducts([]);
      setCartLength(0);
    }
  }, [cartLength]);

  const contextValue = { products, setProducts, cartLength, setCartLength };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default AddToCartContext;
