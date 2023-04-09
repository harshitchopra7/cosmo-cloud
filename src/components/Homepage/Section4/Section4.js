import React, { useEffect, useState } from "react";
import Logo from "../../../assets/brandResources/FullLogoDark.svg";
import WaitlistInput from "../WaitlistInput/WaitlistInput";

function Section4() {
  const [waitlistCount, setWaitlistCount] = useState(null);

  const getWaitlistCount = async () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/waitlist`)
      .then((res) => res.json())
      .then((data) => setWaitlistCount(data.count));
  };

  useEffect(() => {
    getWaitlistCount();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col mobile:w-[330px] mobile:mx-[auto] mb-[70px] mobile:mb-[48px]">
      <div className="flex items-center justify-center flex-col">
        <img className="w-72 largeMobile:w-52" src={Logo} alt="" />
      </div>

      <div className="bg-[#1D1B2D] px-8 py-6 rounded-2xl my-8 mobile:py-4 mobile:px-5 mobile:rounded-lg mobile:mt-[36px]">
        <p className="text-[26px] font-medium largeMobile:text-[18px]">
          Join the waitlist
        </p>
        <p className="text-[#BFB8B8] text-[20px] mobile:mt-2 largeMobile:text-[14px]">
          Sign up to be one of the first to use the next-gen no-code platform
        </p>

        <div className="mt-5 mb-5 flex flex-col items-center justify-center">
          <WaitlistInput />
        </div>

        <p className="text-center text-[#BFB8B8] text-[18px] largeMobile:text-[12px]">
          Current waitlist: {waitlistCount}
        </p>
      </div>
    </div>
  );
}

export default Section4;
