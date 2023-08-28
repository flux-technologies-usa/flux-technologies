import React from "react";

const StayUpdate = () => {
  return (
    <div>
      <div className="h-[50vh] flex items-center">
        <h1 className="text-[33px] text-[#ddc861] px-[8%]">
          Stay up to speed on the latest at Flux.
        </h1>
      </div>
      <div className="h-[70vh] bg-[#141414] px-[9%]">
        <form className="text-white bg-[#141414] pt-[8%]">
          <div>
            <h1 className="text-[18px] text-[#ddc861]">EMAIL</h1>
            <input
              className=" p-5 bg-white text-[#40423f] w-[50%] rounded-none  placeholder:text-[18px] placeholder:text-[#40423f] placeholder:opacity-80 "
              type="email"
              placeholder="jsmith@example.com"
              required
            />
          </div>
          <div className="check flex gap-4 w-[50%] mt-[4%]">
            <input type="checkbox" id="yes" name="yes" value="permittion" className="cursor-pointer"/>
            <label for="yes" className="text-white">
              Join our mailing list for early access to product announcements,
              special events in your area, promotions, and more.
            </label>
          </div>
          <button className="FormCustomButton">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default StayUpdate;
