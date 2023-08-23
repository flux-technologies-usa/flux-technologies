import React from "react";
import "./../components.scss";

const Button = ({ value, left }) => {
  return (
    <div className="relative">
      <div
        className={`customBorder ${left} customButton`}>
        {value}
      </div>
    </div>
  );
};

export default Button;
