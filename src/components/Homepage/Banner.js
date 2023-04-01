import React from "react";
import Button from "../../common/Button";
import WaitlistInput from "./WaitlistInput/WaitlistInput";

function Banner() {
  return (
    <div className="text-center flex items-center justify-center flex-col mt-12">
      <p className="font-bold text-3xl mt-5">Full featured, no-code</p>
      <p className="font-semibold text-6xl mt-3">Backend-as-a-Service</p>
      <p className="mt-6 text-lg">
        Build your application's backend in minutes
      </p>

      <div className="mt-12 ">
        <WaitlistInput />
      </div>

      <p className="mt-5">
        We are in a private beta and accepting new users on a rolling basis
      </p>
    </div>
  );
}

export default Banner;
