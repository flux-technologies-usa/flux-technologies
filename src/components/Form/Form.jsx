import React from "react";
import { useEffect, useState } from "react";
import "./../components.scss";

const Form = () => {
  //  all state
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (email?.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [email?.length]);

  return (
    <div className="w-full">
      <form className="text-white">
        <div>
          <h1 className="text-[17px]">EMAIL</h1>
          <input
            onChange={(e) => {
              setEmail(e?.target?.value);
            }}
            className="w-full p-5 bg-white text-[#40423f]  placeholder:text-[18px] placeholder:text-[#40423f] placeholder:opacity-80 rounded-none"
            type="email"
            placeholder="Johndoe@example.com"
            required
          />
        </div>
        <div className={`${show ? "block" : "hidden"}`}>
          <div className="pt-[30px]">
            <h1 className="text-[17px] ">FIRST NAME</h1>
            <input
              className="w-full p-5 bg-white text-[#40423f]  placeholder:text-[18px] placeholder:text-[#40423f] rounded-none placeholder:opacity-80"
              type="text"
              name="first"
              placeholder="John"
              required
            />
          </div>
          <div className="pt-[30px]">
            <h1 className="text-[17px] ">LAST NAME</h1>
            <input
              className="w-full p-5 bg-white text-[#40423f]  placeholder:text-[18px] placeholder:text-[#40423f] rounded-none placeholder:opacity-80"
              type="text"
              name="last"
              placeholder="Doe"
              required
            />
          </div>
          <div className="pt-[30px]">
            <h1 className="text-[17px] ">POSTAL CODE</h1>
            <input
              className="w-full p-5 bg-white text-[#40423f]  placeholder:text-[18px] placeholder:text-[#40423f] rounded-none placeholder:opacity-80"
              type="text"
              name="last"
              placeholder="12345-1234"
              required
            />
          </div>
          <div>
            <button className="FormCustomButton">Subscribe</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

