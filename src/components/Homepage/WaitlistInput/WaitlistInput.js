import React, { useMemo, useState } from "react";
import Button from "../../../common/Button";

const emailRegistrationStatusValues = {
  UN_REGISTERED: "UN_REGISTERED",
  REGISTERED: "REGISTERED",
  ALREADY_REGISTERED: "ALREADY_REGISTERED",
  INVALID: "INVALID",
};

function WaitlistInput({ autoFocus }) {
  const [email, setEmail] = useState("");
  const [emailRegistrationStatus, setEmailRegistrationStatus] = useState(
    emailRegistrationStatusValues.UN_REGISTERED,
  );
  const [hintMessage, setHintMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailRegistrationStatus(emailRegistrationStatusValues.INVALID);

    if (!email) {
      setHintMessage("Please Enter your email address");
      return;
    }

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
            emailRegistrationStatusValues.ALREADY_REGISTERED,
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

  const isDisabled =
    emailRegistrationStatus === emailRegistrationStatusValues.REGISTERED;

  console.log({ emailRegistrationStatus });

  return (
    <>
      <div className="flex flex-col items-center relative mobile:hidden">
        <form
          onSubmit={handleSubmit}
          className="bg-[#211E33] rounded-lg margin-bottom-[20px] flex justify-between items-center"
          style={{ padding: 4, width: 500 }}
        >
          <div
            style={{
              transition: "width .5s ease-in-out",
              width:
                emailRegistrationStatusValues.REGISTERED ===
                emailRegistrationStatus
                  ? 0
                  : 348,
            }}
          >
            <input
              placeholder="Enter your email..."
              className="h-[45px] text-[#FFFFFF] !outline-none rounded-lg"
              style={{
                backgroundColor: "transparent",
                height: 44,
                width: "100%",
                padding: "0 8px",
              }}
              value={email}
              autoFocus={autoFocus}
              onChange={(e) => {
                setEmailRegistrationStatus(
                  emailRegistrationStatusValues.UN_REGISTERED,
                );
                setHintMessage("");
                setEmail(e.target.value);
              }}
              disabled={isDisabled}
            />
          </div>

          <Button
            text={buttonText}
            type="submit"
            style={{
              height: 44,
              flexGrow: 2,
              flexShrink: 0,
              minWidth: 159,
              transition:
                "width .5s ease-in-out, background-color 1s, background 1s",
            }}
            expand={
              emailRegistrationStatus ===
              emailRegistrationStatusValues.REGISTERED
            }
            disabled={
              emailRegistrationStatus ===
              emailRegistrationStatusValues.REGISTERED
            }
          />
        </form>
      </div>
      <div
        className="hidden flex flex-col items-center relative mobile:block"
        style={{ width: "100%" }}
      >
        <form
          onSubmit={handleSubmit}
          className="rounded-lg margin-bottom-[20px] flex justify-between items-center flex-col"
        >
          <input
            placeholder="Enter your email..."
            className="h-[45px] text-[#FFFFFF] !outline-none rounded-lg bg-[#211E33] mb-2"
            style={{
              height: 44,
              width: "100%",
              padding: "0 12px",
            }}
            value={email}
            autoFocus={autoFocus}
            onChange={(e) => {
              setEmailRegistrationStatus(
                emailRegistrationStatusValues.UN_REGISTERED,
              );
              setHintMessage("");
              setEmail(e.target.value);
            }}
            disabled={isDisabled}
          />

          <Button
            text={buttonText}
            type="submit"
            style={{
              height: 44,
              width: "100%",
              transition:
                "width .5s ease-in-out, background-color 1s, background 1s",
            }}
            expand={
              emailRegistrationStatus ===
              emailRegistrationStatusValues.REGISTERED
            }
            disabled={
              emailRegistrationStatus ===
              emailRegistrationStatusValues.REGISTERED
            }
          />
        </form>

        {hintMessage && (
          <p
            className="text-left text-xs text-[#EA4882] font-medium mt-1 absolute bottom-[-18px] duration-2000 
        ease-out transition transform origin-top-right"
          >
            {hintMessage}
          </p>
        )}
      </div>
    </>
  );
}

export default WaitlistInput;
