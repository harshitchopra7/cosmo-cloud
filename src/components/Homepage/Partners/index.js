import React from "react";
import { ReactComponent as Partner1 } from "../../../assets/partners/partner1.svg";
import { ReactComponent as Partner2 } from "../../../assets/partners/partner2.svg";

const Partners = () => {
  return (
    <div className="mt-[100px] mb-[70px] mx-[auto] w-[1180px] mobile:w-[330px] smallLaptop:w-[1050px] tablet:w-[850px] tablet:w-[700px] largeMobile:w-[576px]">
      <div className="flex flex-col gap-[20px] items-center">
        <h4 className="font-normal text-[22px] leading-[48px] text-[#BFB8B8] mobile:text-[15px] mobile:leading-[20px] ">
          Backed by
        </h4>
        <div className="flex flex-wrap justify-center gap-[10px] items-center">
          <Partner1 className="h-40" />
          <Partner2 className="h-32" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
