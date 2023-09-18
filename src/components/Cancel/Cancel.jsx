import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
      <img
        src="https://i.postimg.cc/76sXVkTC/404-cancel-removebg-preview.png"
        alt=""
        className="md:max-w-[500px]"
      />
      <Link to='/' className='text-blue-600 underline font-semibold'>Back to Home</Link>
    </div>
  );
};

export default Cancel;
