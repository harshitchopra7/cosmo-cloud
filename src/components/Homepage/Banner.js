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
      <div className="flex flex-wrap justify-center gap-[10px] items-center">
      <Button
        text="Get started"
        className="w-[150px] largeMobile:w-[100px] largeMobile:text-[12px]"
        onClick={() =>
          window.open("https://dashboard.cosmocloud.io/sign-up", "_blank")
        }
      />
      <Button
        text="Login"
        className="w-[150px] largeMobile:w-[100px] largeMobile:text-[12px]"
        borderBackground
        onClick={() =>
          window.open("https://dashboard.cosmocloud.io/sign-up", "_blank")
        }
      />
      </div>
      <div className="mt-[72px]">
        <BannerImage className="w-[900px] h-[600px] tablet:w-[600px] tablet:h-[400px] largeMobile:w-[300px] largeMobile:h-[200px]" />
      </div>
    </div>
  );
}

export default Banner;
