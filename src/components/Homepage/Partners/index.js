import React from "react";
import  Partner3 from "../../../assets/partners/partner1.png";
import { ReactComponent as Partner2 } from "../../../assets/partners/partner2.svg";

const Partners = () => {
  return (
    <div className="mt-[100px] mb-[70px] mx-[auto] w-[1180px] mobile:w-[330px] smallLaptop:w-[1050px]  tablet:w-[700px] largeMobile:w-[576px]">
      <div className="flex flex-col gap-[20px] items-center">
        <h4 className="font-normal text-[22px] leading-[48px] text-[#BFB8B8] mobile:text-[15px] mobile:leading-[20px] mb-10">
          Backed by
        </h4>
        <div className="flex flex-wrap justify-center gap-[80px] largeMobile:gap-[20px] items-center">
          <img className="h-20 w-fit" src={Partner3}/>
          {/* <Partner3 className="h-20 w-fit" /> */}
          <Partner2 className="h-20 w-fit" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
