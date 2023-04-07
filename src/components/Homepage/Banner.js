import React from "react";
import WaitlistInput from "./WaitlistInput/WaitlistInput";
import backgroundImage from '../../assets/headerSection/headerBackground.svg'
import './Banner.css'

function Banner() {
  return (
    <div className="text-center flex items-center justify-center flex-col mt-12 largeMobile:pl-[2%] largeMobile:pr-[2%]">
      <img className="backgroundIcon mobile:hidden" src={backgroundImage} alt="" />
      <div className="font-semibold text-[32px] leading-[64px] text-white">
        Full featured, no-code
      </div>
      <div className="font-light text-[72px] leading-[72px] text-white">
        Backend-as-a-Service
      </div>
      <div className="font-normal text-[22px] leading-[48px] text-[#BFB8B8] mt-3 mb-10">
        Build your application's backend in minutes
      </div>

      <WaitlistInput autoFocus />

      <div className="font-semibold text-[14px] leading-[24px] text-[#BFB8B8] mt-5">
        We are in a private beta and accepting new users on a rolling basis
      </div>
    </div>
  );
}

export default Banner;
