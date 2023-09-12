import React from "react";
import Form from "../../../components/Form/Form";

const AboutForm = () => {
  return (
    <div className="pt-[50px] pb-[50px] md:pt-[110px]  md:pb-[125px] bg-[black] flex flex-col md:flex-row md:px-[10%]">
      <div className="md:w-1/2 md:flex md:items-center ">
        <h1 className="text-white text-[20px] text-center md:text-3xl  md:text-right">
          Stay up to speed on the latest at Flux.
        </h1>
      </div>
      <div className="  md:w-1/2 md:pl-[50px]">
        <Form></Form>
      </div>
    </div>
  );
};

export default AboutForm;
