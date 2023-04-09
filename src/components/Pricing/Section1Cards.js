import React from "react";
import { useNavigate } from "react-router-dom";

function Section1Cards({
  title,
  description,
  icon1,
  icon2,
  icon3,
  detailedDescription1,
  detailedDescription2,
  detailedDescription3,
  pricingTitle,
  strikePrice,
  pricingDescription,
  buttonText,
  buttonType = "primary",
  link,
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1D1B2D] w-[392px] min-h-[445px] px-6 py-7 rounded-xl flex flex-col justify-between largeMobile:w-[100%] largeMobile:ml-0 smallLaptop:w-[330px] tablet:w-[270px]">
      <div>
        <p className="text-[22px] font-semibold largeMobile:text-[20px]">
          {title}
        </p>
        <p className="text-[#BFB8B8] text-[16px] mt-2">{description}</p>

        <div className="mt-7 flex flex-col gap-6">
          <div className="flex items-center">
            {icon1}
            <p className="ml-2 text-[16px]">{detailedDescription1}</p>
          </div>
          <div className="flex items-center">
            {icon2}
            <p className="ml-2 text-[16px]">{detailedDescription2}</p>
          </div>
          <div className="flex items-center">
            {icon3}
            <p className="ml-2 text-[16px]">{detailedDescription3}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-8 mt-12">
          <p className="text-[14px] font-medium text-[#BFB8B8]">
            {pricingTitle}
          </p>
          <p className="text-[20px] font-medium largeMobile:text-[18px]">
            {strikePrice && (
              <span>
                <s className="mr-2">{strikePrice}</s>
              </span>
            )}

            {pricingDescription}
          </p>
        </div>

        <button
          className={`text-[16px] ${
            buttonType === "primary" ? "bg-[#312D52]" : "bg-transparent"
          } font-medium w-full rounded-md h-[45px] ${
            buttonType !== "primary" && "border-[#312D52] border-2"
          }`}
          onClick={() => navigate(link)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Section1Cards;
