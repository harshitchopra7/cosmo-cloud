import React from "react";

function ContactUsCards({ image, title, description, contactDetails }) {
  return (
    <div className="flex mb-6">
      <div className="tablet:flex tablet:justify-center">
        <img
          className="min-w-[40px] min-h-[40px] h-[40px]"
          src={image}
          alt=""
        />
      </div>
      <div className="ml-7 tablet:justify-center">
        <p className="text-[20px] font-medium mobile:text-base">{title}</p>
        <p className="text-[#BFB8B8] mb-4 text-[16px] mobile:mb-3">
          {description}
        </p>
        <p className="font-medium text-[16px] mobile:text-[14px]">
          {contactDetails}
        </p>
      </div>
    </div>
  );
}

export default ContactUsCards;
