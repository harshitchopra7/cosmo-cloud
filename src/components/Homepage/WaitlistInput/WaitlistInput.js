import React from "react";
import Button from "../../../common/Button";

function WaitlistInput() {
  return (
    <div
      className="flex items-center bg-[#211E33] rounded-lg"
      style={{ width: "fit-content" }}
    >
      <input
        placeholder="Enter your email..."
        className="h-[45px] w-[300px] text-[#95949E] pl-4 pr-4 bg-[#211E33] !outline-none rounded-lg"
      />
      <Button text="Join the waitlist" />
    </div>
  );
}

export default WaitlistInput;
