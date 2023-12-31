import React from "react";
import { Link } from "react-router-dom";
import "./../components.scss";
import { useState } from "react";
import { useContext } from "react";
import { routeContext } from "../../context api/NavbarContex";

const CustomLink = ({ route, value, routeName }) => {
  // context api
  const { setRoutePath } = useContext(routeContext);
  // all state
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={() => {
        setRoutePath(routeName);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className=" ml-[40px] py-[40px] relative font-semibold">
      <div
        className={`w-full bg-[#ddc861] h-[1px] absolute top-2  ${
          hover
            ? "opacity-100 duration-500 ease-in"
            : "opacity-0 duration-500 ease-in"
        }`}></div>
      <Link
        className={`py-[30px] font-semibold hover:text-[#ddc861] duration-500 ease-in`}
        to={route}>
        {value}
      </Link>
    </div>
  );
};

export default CustomLink;
