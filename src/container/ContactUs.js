import React from "react";

// internal deps
import ContactUsComponent from "../components/ContactUs/ContactUs";

function ContactUs() {
  return (
    <div className="mx-[auto] w-[1184px] mt-[70px] mb-[70px] mobile:w-auto mobile:mx-0 largeMobile:mt-[40px] largeMobile:pr-[0] largeMobile:pl-[0] smallLaptop:w-[1050px]">
      <ContactUsComponent />
    </div>
  );
}

export default ContactUs;
