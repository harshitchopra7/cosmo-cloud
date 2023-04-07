import React from "react";
import WaitlistInput from "./WaitlistInput/WaitlistInput";

function Banner() {
  return (
    <div className="text-center flex items-center justify-center flex-col mt-12 largeMobile:pl-[2%] largeMobile:pr-[2%]">
      <p className="font-bold text-[32px] mt-5 tablet:text-lg tablet:font-medium">
        Full featured, no-code
      </p>
      <p className="font-light text-[72px] mt-3 tablet:text-4xl tablet:font-medium">
        Backend-as-a-Service
      </p>
      <p className="mt-6 text-[22px] tablet:text-base text-[#BFB8B8]">
        Build your application's backend in minutes
      </p>

      <div className="mt-12 ">
        <WaitlistInput />
      </div>

      <p className="mt-5 text-[#BFB8B8] text-[14px] font-medium">
        We are in a private beta and accepting new users on a rolling basis
      </p>
    </div>
  );
}

export default Banner;
