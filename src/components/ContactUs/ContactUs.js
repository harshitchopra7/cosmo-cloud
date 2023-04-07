import React, { useState, useMemo } from "react";

// internal deps
import Input from "../../common/Input";
import Button from "../../common/Button";

// images
import email from "../../assets/contact/email.png";
import location from "../../assets/contact/location.png";
import ContactUsCards from "./ContactUsCards";

const contactData = [
  {
    image: email,
    title: "Mail us",
    description: "Our team is here to help.",
    contactDetails: "contact@cosmocloud.io",
  },
  {
    image: location,
    title: "Visit us",
    description: "Come say hello at our office HQ.",
    contactDetails: "Noida, U.P, India - 201301",
  },
];

const messageSentStatusValues = {
  UN_SENT: "UN_SENT",
  SUCCESS: "SUCCESS",
  INVALID_EMAIL: "INVALID_EMAIL",
};

function ContactUsComponent() {
  const [formData, setFormData] = useState({});
  const [messageSentStatus, setMessageSentStatus] = useState(
    messageSentStatusValues.UN_SENT
  );

  const onSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    };
    fetch(`${process.env.REACT_APP_BASE_URL}/contact-us`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 400) {
          setMessageSentStatus(messageSentStatusValues.INVALID_EMAIL);
          return;
        }
        setMessageSentStatus(messageSentStatusValues.SUCCESS);
      });
  };

  const messageSentText = useMemo(() => {
    switch (messageSentStatus) {
      case messageSentStatusValues.SUCCESS:
        return "Message succesfully sent!";
      case messageSentStatusValues.INVALID_EMAIL:
        return "Invalid email, please enter correct email address";
      default:
        break;
    }
  }, [messageSentStatus]);

  return (
    <div className="flex justify-between tablet:flex-col-reverse">
      <div className="flex-[0.4] tablet:flex-[1]">
        <p className="text-[48px] font-medium mb-8 tablet:hidden">Contact us</p>

        <div className="tablet:mt-10 tablet:pl-[2%] tablet:pr-[2%]">
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
      <div className="bg-[#1D1B2D] flex-[0.6] p-10 rounded-lg tablet:flex-[1] tablet:p-4 largeMobile:w-[100%]  largeMobile:pl-[6%]  largeMobile:pr-[6%]">
        <div className="flex items-center justify-between tablet:flex-col">
          <div className="mr-4 tablet:mr-0 tablet:mb-3 tablet:w-[100%]">
            <p className="mb-3 font-medium text-[18px]">Your name</p>
            <Input
              placeholder="What should we call you?"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="tablet:w-[100%]">
            <p className="mb-3 font-medium text-[18px]">Your email</p>
            <Input
              placeholder="john.doe@gmail.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mt-5">
          <p className="mb-3 font-medium text-[18px]">Subject line</p>
          <input
            className={`h-[45px] w-[100%] text-[#95949E] pl-4 pr-4 bg-[#211E33] !outline-none rounded-lg mobile:w-[100%]`}
            placeholder="What are you looking for?"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>
        <div className="mt-5 mb-5">
          <p className="mb-3 font-medium text-[18px]">Message</p>
          <textarea
            className="text-[#95949E] w-full h-[120px] p-4 bg-[#211E33] !outline-none rounded-lg"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>
        <Button text="Send" onClick={onSubmit} />

        {messageSentText && (
          <p
            className={`text-left ml-4 text-xs font-medium mt-2 ${messageSentStatus === messageSentStatusValues.SUCCESS
                ? "text-[#17B169]"
                : "text-[#EA4882]"
              }`}
          >
            {messageSentText}
          </p>
        )}
      </div>
      <p className="tablet:block hidden font-medium mb-8 tablet:text-[28px]  largeMobile:pl-[4%]">
        Contact us
      </p>
    </div>
  );
}

export default ContactUsComponent;
