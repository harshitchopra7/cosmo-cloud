import React, { useMemo, useState } from "react";
import Button from "../../../common/Button";

const emailRegistrationStatusValues = {
  UN_REGISTERED: "UN_REGISTERED",
  REGISTERED: "REGISTERED",
  ALREADY_REGISTERED: "ALREADY_REGISTERED",
  INVALID: "INVALID",
};

function WaitlistInput() {
  const [email, setEmail] = useState("");
  const [emailRegistrationStatus, setEmailRegistrationStatus] = useState(
    emailRegistrationStatusValues.UN_REGISTERED
  );
  const [hintMessage, setHintMessage] = useState("");

  const onClick = () => {
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

  const onFocus = () => {
    setEmailRegistrationStatus(emailRegistrationStatusValues.UN_REGISTERED);
    setHintMessage("");
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
        <input
          placeholder="Enter your email..."
          className="h-[45px] w-[300px] text-[#95949E] pl-4 pr-4 bg-[#211E33] !outline-none rounded-lg tablet:mb-2"
          value={email}
          onFocus={onFocus}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isDisabled}
        />
        <Button text={buttonText} onClick={onClick} width="100px" />
      </div>

      {hintMessage && (
        <p className="text-left ml-4 text-xs text-[#EA4882] font-medium mt-1">
          {hintMessage}
        </p>
      )}
    </>
  );
}

export default WaitlistInput;
