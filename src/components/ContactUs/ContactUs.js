import React, { useState } from "react";

// internal deps
import Input from "../../common/Input";
import Button from "../../common/Button";

// images
import email from "../../assets/contact/email.png";
import location from "../../assets/contact/location.png";
import phone from "../../assets/contact/phone.png";
import ContactUsCards from "./ContactUsCards";

const contactData = [
  {
    image: email,
    title: "Mail us",
    description: "Our team is here to help.",
    contactDetails: "support@cosmocloud.io",
  },
  {
    image: phone,
    title: "Call us",
    description: "Mon-Fri from 8am to 5pm. ",
    contactDetails: "+91 9876543210",
  },
  {
    image: location,
    title: "Visit us",
    description: "Come say hello at our office HQ.",
    contactDetails: "100 Qutab Minar, Delhi 100006",
  },
];

function ContactUsComponent() {
  const [formData, setFormData] = useState({});

  return (
    <div className="flex justify-between">
      <div className="flex-[0.4]">
        <p className="text-5xl font-medium mb-8">Contact us</p>

        <div>
          {contactData.map((val) => (
            <ContactUsCards
              image={val.image}
              title={val.title}
              description={val.description}
              contactDetails={val.contactDetails}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#1D1B2D] flex-[0.6] p-10 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="mr-4">
            <p className="mb-3 font-medium">Your name</p>
            <Input
              placeholder="What should we call you?"
              value={formData.name}
              onChange={(e) => setFormData({ name: e.target.value })}
            />
          </div>
          <div>
            <p className="mb-3 font-medium">Your email</p>
            <Input
              placeholder="john.doe@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ email: e.target.value })}
            />
          </div>
        </div>

        <div className="mt-5">
          <p className="mb-3 font-medium">Subject line</p>
          <Input
            placeholder="What are you looking for?"
            value={formData.subject}
            onChange={(e) => setFormData({ subject: e.target.value })}
            width="100%"
          />
        </div>

        <div className="mt-5 mb-5">
          <p className="mb-3 font-medium">Message</p>
          <textarea
            className="text-[#95949E] w-full h-[120px] p-4 bg-[#211E33] !outline-none rounded-lg"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={(e) => setFormData({ message: e.target.value })}
          />
        </div>

        <Button text="Send" />
      </div>
    </div>
  );
}

export default ContactUsComponent;
