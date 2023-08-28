import "./Contact.scss";

const Contactform = () => {
  return (
    <div className="contactform w-full">
      <div className="flex gap-10">
        <form className="flex flex-col gap-8 w-full mx-4 md:w-[500px] md:mx-0">
          <label className="flex flex-col mb-3">
            <p className="text-white">First name</p>
            <input type="text" placeholder="John" className=" py-4 px-6" />
          </label>

          <label className="flex flex-col mb-3">
            <p className="text-white"> last name</p>
            <input type="text" placeholder="Smith" className=" py-4 px-6" />
          </label>

          <label className="flex flex-col mb-3">
            <p className="text-white">email</p>
            <input
              type="email"
              placeholder="jsmith@gmail.com"
              className=" py-4 px-6 "
            />
          </label>
          <label className="flex flex-col ">
            <textarea
              rows="7"
              placeholder="Type your message here..."
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
            className="py-3 px-8 outline-none w-fit text-white font-bold border"
          >
            Send Now
          </button>
          <span className="text-white pt-[30px]  md:pb-[70px] text-[14px] font-[#dbd4c5]">By submitting this form, you agree to our <a href="http://www.fluxtechnologiesafrica.com/privacy" className="underline">Privacy Policy.</a></span>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
