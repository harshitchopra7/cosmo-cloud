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
    contactDetails: "Noida, Uttar Pradesh, India - 201301",
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
    <div className="flex justify-center gap-20 tablet:flex-col-reverse mobile:gap-6 tablet:gap-6">
      <div className="flex-[0.4] tablet:flex-[1]">
        <p className="text-[48px] font-medium mb-8 tablet:hidden">Contact us</p>

        <div className="tablet:mt-10 mobile:w-[330px] mobile:mx-[auto] tablet:w-[850px] tablet:mx-[auto] smallTablet:w-[700px]">
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
      <div className="bg-[#1D1B2D] w-[680px] p-10 rounded-lg mobile:rounded-none mobile:py-6 tablet:flex-[1] tablet:px-7 largeMobile:w-[100%] tablet:w-[100%]">
        <div className="mobile:w-[330px] tablet:mx-[auto] tablet:w-[850px] smallTablet:w-[700px]">
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
        <div className="mt-8">
          <p className="mb-3 font-medium text-[18px]">Subject line</p>
          <input
            className={`h-[45px] w-[100%] text-[#95949E] pl-4 pr-4 bg-[#312E45] !outline-none rounded-lg mobile:w-[100%]`}
            placeholder="What are you looking for?"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>
        <div className="mt-8 mb-10 mobile:mb-6">
          <p className="mb-3 font-medium text-[18px]">Message</p>
          <textarea
            className="text-[#95949E] w-full h-[120px] p-4 bg-[#312E45] !outline-none rounded-lg"
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
      </div>
      <p className="tablet:block hidden font-medium mobile:w-[330px] mx-auto tablet:text-[28px] tablet:w-[850px] smallTablet:w-[700px]">
        Contact us
      </p>
    </div>
  );
}

export default ContactUsComponent;
