import React from "react";

function ContactUsCards({ image, title, description, contactDetails }) {
  return (
    <div className="flex mb-6 tablet:justify-evenly">
      <div className="tablet:flex-[0.2] tablet:flex tablet:justify-center">
        <img className="min-w-[40px] min-h-[40px] tablet:h-[45px]" src={image} alt="" />
      </div>
      <div className="ml-7 tablet:flex-[0.8] tablet:justify-center">
        <p className="text-[20px] font-medium">{title}</p>
        <p className="text-[#BFB8B8] mb-4 text-[16px]">{description}</p>
        <p className="font-medium text-[18px]">{contactDetails}</p>
      </div>
    </div>
  );
}

export default ContactUsCards;
