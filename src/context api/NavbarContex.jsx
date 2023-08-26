import React from "react";
import { useState } from "react";
import { createContext } from "react";

const routeContext = createContext();

const NavbarContex = ({ children }) => {
  // all state
  const [route, setRoute] = useState("Home");

//   context value
  const value = { route, setRoute };
  return (
    <routeContext.Provider value={value}>{children}</routeContext.Provider>
  );
};

export default NavbarContex;
