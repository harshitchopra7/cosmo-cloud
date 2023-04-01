import React from "react";
import logo from "../../../assets/logo.png";
import WaitlistInput from "../WaitlistInput/WaitlistInput";

function Section4() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <img src={logo} />
        <p className="mt-2 text-2xl">Cosmocloud</p>
      </div>

      <div className="bg-[#1D1B2D] pl-8 pr-8 pt-6 pb-6 rounded-2xl mt-8 mb-8">
        <p className="text-2xl font-medium">Join the waitlist</p>
        <p className="text-[#BFB8B8] text-lg">
          Sign up to be one of the first to use future of no-code platform
        </p>

        <div className="mt-5 mb-5 flex items-center justify-center">
          <WaitlistInput />
        </div>

        <p className="text-center text-[#BFB8B8]">Current waitlist: 5,298</p>
      </div>
    </div>
  );
}

export default Section4;
