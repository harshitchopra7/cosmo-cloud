import React from "react";
import { useNavigate } from "react-router-dom";

const Divider = () => {
  return <hr style={{ border: "1px solid #272531", marginTop: "10px" }} />;
};

const InfoDetails = ({ text }) => {
  return (
    <div className="mt-2 flex items-center h-[25px] text-[16px] font-medium tablet:h-[44px] smallTablet:h-[60px]">
      <p> {text}</p>
    </div>
  );
};

function Section2Cards({ details }) {
  const navigate = useNavigate();
  return (
    <div className={`w-[16%] flex flex-col justify-end`}>
      <p className="text-[20px] font-medium">{details.name || "Enterprise"}</p>
      <div className="mt-3 mb-3">
        <p className="text-[14px] text-[#BFB8B8] font-medium">
          {details.description}
        </p>

        <p className="text-[18px]">
          {" "}
          {details.strikePrice && (
            <span>
              <s className="mr-2">{details.strikePrice}</s>
            </span>
          )}
          {details.price}
        </p>
      </div>

      {details.buttonText && (
        <button
          className={`text-[16px] font-medium ${
            details.buttonType !== "secondary"
              ? "bg-[#312D52]"
              : "bg-transparent"
          } font-medium w-full rounded-md h-[45px] ${
            details.buttonType === "secondary" && "border-[#312D52] border-2"
          }`}
          onClick={() => navigate(details.link)}
        >
          {details.buttonText}
        </button>
      )}

      <div className="mt-3 mb-3">
        <InfoDetails
          text={
            details.apiRequests
              ? `Upto ${details.apiRequests} per month`
              : "Unlimited"
          }
        />
        <Divider />
        <InfoDetails
          text={details.maxRPS ? `Upto ${details.maxRPS}` : "No Limit"}
        />
        <Divider />
        <InfoDetails text={details.numUsers} />
        <Divider />
        <InfoDetails text={details.numApis} />
        <Divider />
        <InfoDetails text={details.numModels} />
        <Divider />
        <InfoDetails
          text={
            details.maxDataBandwidth
              ? `${details.maxDataBandwidth} GB`
              : "No Limit"
          }
        />
        <Divider />
        <InfoDetails text={details.loadBalancing} />
        <Divider />
        <InfoDetails text={details.resources} />
        <Divider />
        <InfoDetails text={details.slaSupport} />
        <Divider />
        <InfoDetails text={details.uptimeGuarantee} />
        <Divider />
      </div>
    </div>
  );
}

export default Section2Cards;
