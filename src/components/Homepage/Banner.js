import React from "react";
import WaitlistInput from "./WaitlistInput/WaitlistInput";
import backgroundImage from '../../assets/headerSection/headerBackground.svg'
import './Banner.css'

function Banner() {
  return (
    <div className="text-center flex items-center justify-center flex-col mt-12 mobile:w-[330px] mobile:mx-[auto] mobile:mb-1 tablet:w-[850px] mx-[auto] smallTablet:w-[700px] largeMobile:w-[576px]">
      <img className="absolute w-[330px] h-[270px] left-[700px] top-[88px] opacity-80 largeMobile:hidden tablet:left-[400px]" src={backgroundImage} alt="" />
      <div className="font-semibold text-[32px] leading-[64px] text-white smallTablet:text-2xl mobile:text-[18px] mobile:leading-[24px]">
        Full featured, no-code
      </div>
      <div className="font-light text-[72px] leading-[72px] smallTablet:text-6xl largeMobile:text-5xl text-white mobile:text-[32px] mobile:leading-[40px]">
        Backend-as-a-Service
      </div>
      <div className="font-normal text-[22px] leading-[48px] text-[#BFB8B8] mt-3 mb-10 mobile:text-[15px] mobile:leading-[20px] mobile:mt-2 mobile:mb-8">
        Build your application's backend in minutes
      </div>

      <WaitlistInput autoFocus />

      <div className="font-semibold text-[14px] leading-[24px] text-[#BFB8B8] mt-5 mobile:mt-8 mobile:w-[240px] mobile:font-normal">
        We are in a private beta and accepting new users on a rolling basis
      </div>
    </div>
  );
}

export default Banner;
