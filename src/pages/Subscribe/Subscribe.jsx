import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe bg-black">
        <div className="sub-header">
          <div className="sub-header w-full h-[320px] bg-[#1b1b1b] ">
            <div className="text-3xl text-[#ddc861] ml-[5%] pt-[170px]">
              Stay up to speed on the latest at Flux.
            </div>
          </div>
        </div>
        <div className="sub-body w-full pt-14 md:ml-[5%]">
          <form className="flex flex-col gap-8 w-auto mx-[5%] md:w-[500px] md:mx-0">
            <label className="flex flex-col mb-3">
              <p className="text-white">email</p>
              <input
                type="email"
                placeholder="jsmith@gmail.com"
                className=" py-4 px-6 "
              />
            </label>

            <div className="check flex gap-4">
              <input type="checkbox" id="yes" name="yes" value="permittion" />
              <label for="yes" className="text-white">
                Join our mailing list for early access to product announcements,
                special events in your area, promotions, and more.
              </label>
            </div>

            <button
              type="submit"
              className="py-3 px-8 outline-none w-fit text-white font-bold border">
              Subscribe
            </button>
            <span className="text-white pb-[30px] md:pb-[70px] text-[14px] font-[#dbd4c5]">
              By submitting this form, you agree to our{" "}
              <a
                href="http://www.fluxtechnologiesFLUX TECHNOLOGIES.com/privacy"
                className="underline">
                Privacy Policy.
              </a>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
