import { useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o3tqw2e",
        "template_oa5y50a",
        form.current,
        "MNjhKguP4HmGKbBjx"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  return (
    <div className="contactform w-full">
      <div className="flex gap-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-8 w-full mx-4 md:w-[500px] md:mx-0">
          <label className="flex flex-col mb-3">
            <p className="text-white">Your name</p>
            <input
              type="text"
              name="user_name"
              placeholder="John"
              className=" py-4 px-6"
            />
          </label>

          <label className="flex flex-col mb-3">
            <p className="text-white">email</p>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className=" py-4 px-6 "
              name="user_email"
            />
          </label>
          <label className="flex flex-col ">
            <h1>Message</h1>
            <textarea
              rows="7"
              placeholder="Type your message here..."
              className=" py-4 px-6 "
              name="message"
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
            Send Now
          </button>
          <span className="text-white pt-[30px]  md:pb-[70px] text-[14px] font-[#dbd4c5]">
            By submitting this form, you agree to our{" "}
            <a
              href="http://www.fluxtechnologiesPompano Beach, FL.com/privacy"
              className="underline">
              Privacy Policy.
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Contactform;

<div className="contactform w-full">
  <div className="flex gap-10">
    <form className="flex flex-col gap-8 w-full mx-4 md:w-[500px] md:mx-0">
      <label className="flex flex-col mb-3">
        <p className="text-white">First name</p>
        <input type="text" placeholder="John" className=" py-4 px-6" />
      </label>

      <label className="flex flex-col mb-3">
        <p className="text-white"> last name</p>
        <input type="text" placeholder="doe" className=" py-4 px-6" />
      </label>

      <label className="flex flex-col mb-3">
        <p className="text-white">email</p>
        <input
          type="email"
          placeholder="johndoe@gmail.com"
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
        className="py-3 px-8 outline-none w-fit text-white font-bold border">
        Send Now
      </button>
      <span className="text-white pt-[30px]  md:pb-[70px] text-[14px] font-[#dbd4c5]">
        By submitting this form, you agree to our{" "}
        <a
          href="http://www.fluxtechnologiesPompano Beach, FL.com/privacy"
          className="underline">
          Privacy Policy.
        </a>
      </span>
    </form>
  </div>
</div>;
