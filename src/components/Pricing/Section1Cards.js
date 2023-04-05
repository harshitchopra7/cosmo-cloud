import React from "react";
import { useNavigate } from "react-router-dom";

// assets
import icon1 from "../../assets/pricing/icon1.png";
import icon2 from "../../assets/pricing/icon2.png";
import icon3 from "../../assets/pricing/icon3.png";

function Section1Cards({
  title,
  description,
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
    <div className="bg-[#1D1B2D] w-[30%] mr-4 p-5 rounded-lg mt-4 h-[380px] flex flex-col justify-between">
      <div>
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-[#BFB8B8]">{description}</p>

        <div className="mt-5">
          <div className="flex items-center">
            <img src={icon1} alt="" />
            <p className="ml-2">{detailedDescription1}</p>
          </div>
          <div className="flex items-center">
            <img src={icon2} alt="" />
            <p className="ml-2">{detailedDescription2}</p>
          </div>
          <div className="flex items-center">
            <img src={icon3} alt="" />
            <p className="ml-2">{detailedDescription3}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-5 mt-5">
          <p className="text-sm text-[#BFB8B8]">{pricingTitle}</p>
          <p className="text-xl font-medium">
            {strikePrice && (
              <span>
                <s className="mr-2">{strikePrice}</s>
              </span>
            )}

            {pricingDescription}
          </p>
        </div>

        <button
          className={`${
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
