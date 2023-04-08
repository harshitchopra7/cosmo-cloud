import React, { useMemo, useState } from "react";
import Button from "../../../common/Button";

const emailRegistrationStatusValues = {
  UN_REGISTERED: "UN_REGISTERED",
  REGISTERED: "REGISTERED",
  ALREADY_REGISTERED: "ALREADY_REGISTERED",
  INVALID: "INVALID",
};

function WaitlistInput({autoFocus}) {
  const [email, setEmail] = useState("");
  const [emailRegistrationStatus, setEmailRegistrationStatus] = useState(
    emailRegistrationStatusValues.UN_REGISTERED
  );
  const [hintMessage, setHintMessage] = useState("");

  const onClick = () => {
    if(!email) return;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    };

    fetch(`${process.env.REACT_APP_BASE_URL}/waitlist`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data?.status_code === 400) {
          setEmailRegistrationStatus(emailRegistrationStatusValues.INVALID);
          setHintMessage("Invalid email address");
          return;
        } else if (data?.status_code === 409) {
          setEmailRegistrationStatus(
            emailRegistrationStatusValues.ALREADY_REGISTERED
          );
          setHintMessage("Email already registered!");
          return;
        }
        setEmailRegistrationStatus(emailRegistrationStatusValues.REGISTERED);
      });
  };

  const buttonText = useMemo(() => {
    if (emailRegistrationStatus === emailRegistrationStatusValues.REGISTERED) {
      return "Email registered!";
    }

    return "Join the waitlist";
  }, [emailRegistrationStatus]);

  const isDisabled = () => {
    return emailRegistrationStatus === emailRegistrationStatusValues.REGISTERED;
  };

  return (
    <>
      <div
        className="flex items-center justify-center bg-[#211E33] rounded-lg tablet:flex-col tablet:bg-transparent"
        style={{ width: "fit-content" }}
      >
        {emailRegistrationStatus !== emailRegistrationStatusValues.REGISTERED && (
          <input
            placeholder="Enter your email..."
            className="h-[45px] w-[300px] text-[#FFFFFF] pl-4 pr-4 bg-[#211E33] !outline-none rounded-lg tablet:mb-3"
            value={email}
            autoFocus={autoFocus}
            onChange={(e) => {
              setEmailRegistrationStatus(emailRegistrationStatusValues.UN_REGISTERED);
              setHintMessage("");
              setEmail(e.target.value)
            }}
            disabled={isDisabled}
          />
        )}
        
        <Button 
          text={buttonText} 
          onClick={onClick} 
          width="100px" 
          expand={emailRegistrationStatus === emailRegistrationStatusValues.REGISTERED}
          disabled={emailRegistrationStatus === emailRegistrationStatusValues.REGISTERED}
        />
      </div>

      {hintMessage && (
        <p className="text-left text-xs text-[#EA4882] font-medium mt-1">
          {hintMessage}
        </p>
      )}
    </>
  );
}

export default WaitlistInput;
