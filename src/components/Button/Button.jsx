import React from "react";
import "./../components.scss";

const Button = ({ value, left, width, bg, text, wight, color }) => {
  return (
    <div className="relative">
      <div
        className={`customBorder ${left} ${width} ${bg} ${text} ${wight} ${color} customButton`}>
        <span className="z-50">{ value }</span>
      </div>
    </div>
  );
};

export default Button;
