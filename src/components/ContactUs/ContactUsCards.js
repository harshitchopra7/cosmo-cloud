import React from "react";

function ContactUsCards({ image, title, description, contactDetails }) {
  return (
    <div className="flex mb-6">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="ml-4">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-[#BFB8B8] mt-2 mb-2">{description}</p>
        <p className="font-medium">{contactDetails}</p>
      </div>
    </div>
  );
}

export default ContactUsCards;
