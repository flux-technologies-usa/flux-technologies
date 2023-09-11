import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const routeContext = createContext();

const NavbarContex = ({ children }) => {
  // all state
  const [routePath, setRoutePath] = useState("home");

  //   context value
  const value = { routePath, setRoutePath };
  return (
    <routeContext.Provider value={value}>{children}</routeContext.Provider>
  );
};

export default NavbarContex;
