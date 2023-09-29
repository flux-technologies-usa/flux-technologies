import "./Contact.scss";
import Contactform from "./Contactform";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-header w-full h-[320px] bg-[#1b1b1b] ">
          <div className="text-3xl text-[#ddc861] ml-[5%] pt-[170px]">
            Contact
          </div>
        </div>
        <div className="contact-body  bg-[#141414]">
          <div className="normaldiv  flex flex-col gap-[30px]  md:gap-[350px] mx-auto md:max-w-6xl md:flex-row ">
            <div className="contact-admin-address mt-[100px] mx-3 md:mx-0">
              <div className="office-address md:pb-[25px]">
                <h1>Address : </h1>
                <p>380 SW 12th Ave <br /> Pompano Beach, FL 33069</p>
              </div>
              <div className="call py-[25px]">
                <h1>Call Now</h1>
                <h5>800-313-1960</h5>
              </div>
              <div className="email py-[25px]">
                <h1>E-mail :</h1>
                <h5>fluxtechnologies.usa@gmail.com</h5>
              </div>
              <div className="hours py-[25px]">
                <h1>Operating Hours :</h1>
                <div className="hours-details-one pb-[30px]">
                  <h4>Sales Department</h4>
                  <h3>Monday - Saturday</h3>
                  <h3>8:00 am – 5:00 pm</h3>
                </div>
                <div className="hours-details-two">
                  <h4>Service Department</h4>
                  <h3>Monday - Friday</h3>
                  <h3>8:00 am – 5:00 pm</h3>
                </div>
              </div>
            </div>

            <div className="user-form mt-[20px]  md:mt-[100px] ">
              <Contactform />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
