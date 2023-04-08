import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";

function Section3() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-between w-[800px] bg-[#292640] pt-[3%] pb-[3%] p-[4%] pr-[4%] rounded-lg mt-[70px] mb-[70px] mobile:mb-2 mobile:rounded-none largeMobile:w-[100%] largeMobile:rounded-0 largeMobile:p-9 largeMobile:flex-col largeMobile:text-center largeMobile:text-[22px]">
        <div className="flex-[0.6]">
          {" "}
          <p className="text-[26px] font-medium largeMobile:text-[22px]">
            Cosmocloud for{" "}
            <span className="text-[#AC31EF] font-semibold">Enterprise</span>
          </p>
          <p className="text-[#CCCCCC] mt-4 text-[18px] largeMobile:text-[16px] largeMobile:mt-6">
            Cosmocloud Enterprise is tailored to support enterprise scaling with
            confidence, through its robust security, powerful admin controls,
            and other features.
          </p>
        </div>
        <div className="largeMobile:mt-6 flex-[0.3]">
          <Button
            text="Contact Sales"
            onClick={() => navigate("/contact-us")}
          />
        </div>
      </div>
    </div>
  );
}

export default Section3;
