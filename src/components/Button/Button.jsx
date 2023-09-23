import React from "react";
import "./../components.scss";
import { Link } from "react-router-dom";

const Button = ({ value, left, width, bg, text, wight, color, to, hiden }) => {
  return (
    <Link to={to} className="relative">
      <div
        className={`customBorder ${left} ${width} ${bg} ${text} ${wight} ${color} customButton ${
          hiden ? "hidden md:flex" : ""
        } `}>
        <span className="z-50">{value}</span>
      </div>
    </Link>
  );
};

export default Button;
