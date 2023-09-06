import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const AddToCartContext = ({ children }) => {
  // all state
  const [products, setProducts] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  useState(() => {
    const productData = JSON.parse(localStorage.getItem("cart"));
    setProducts(productData);
    setCartLength(productData.length);
  }, [cartLength, products]);

  const contextValue = { products, setProducts, cartLength, setCartLength };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default AddToCartContext;
