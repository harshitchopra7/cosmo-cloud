import React from "react";
import backgroundImage from "../../assets/headerSection/headerBackground.svg";
import { ReactComponent as BannerImage } from "../../assets/features/flowEngine1.svg";
import "./Banner.css";
import Button from "../../common/Button";

function Banner() {
  return (
    <div className="text-center flex items-center justify-center flex-col mt-12 mobile:w-[330px] mobile:mx-[auto] mobile:mb-1 tablet:w-[850px] mx-[auto] smallTablet:w-[700px] largeMobile:w-[576px]">
      <img
        className="absolute w-[330px] h-[270px] left-[700px] top-[88px] opacity-80 largeMobile:hidden tablet:left-[400px]"
        src={backgroundImage}
        alt=""
      />
      <div className="font-semibold text-[32px] leading-[64px] text-white smallTablet:text-2xl mobile:text-[18px] mobile:leading-[24px]">
        Full featured, no-code
      </div>
      <div className="font-light text-[72px] leading-[72px] smallTablet:text-6xl largeMobile:text-5xl text-white mobile:text-[32px] mobile:leading-[40px]">
        Backend-as-a-Service
      </div>
      <div className="font-normal text-[22px] leading-[48px] text-[#BFB8B8] mt-3 mb-10 mobile:text-[15px] mobile:leading-[20px] mobile:mt-2 mobile:mb-8">
        Build your application's backend in minutes
      </div>
      <Button
        text="Get started"
        onClick={() =>
          window.open("https://dashboard.cosmocloud.io/", "_blank")
        }
      />
      <div className="mt-[72px]">
        <BannerImage className="w-[900px] h-[600px] tablet:w-[600px] tablet:h-[400px] largeMobile:w-[350px] largeMobile:h-[230px]" />
      </div>
    </div>
  );
}

export default Banner;
