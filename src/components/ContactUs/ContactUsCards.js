import React from "react";

function ContactUsCards({ image, title, description, contactDetails }) {
  return (
    <div className="flex mb-6 tablet:justify-evenly">
      <div className="tablet:flex-[0.2] tablet:flex tablet:justify-center">
        <img className="tablet:h-[45px]" src={image} alt="" />
      </div>
      <div className="ml-4 tablet:flex-[0.8] tablet:justify-center">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-[#BFB8B8] mt-2 mb-2">{description}</p>
        <p className="font-medium">{contactDetails}</p>
      </div>
    </div>
  );
}

export default ContactUsCards;
