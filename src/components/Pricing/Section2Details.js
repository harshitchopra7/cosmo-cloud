import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineInfo } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const Divider = () => {
  return <hr style={{ border: "1px solid #272531", marginTop: "10px" }} />;
};

const InfoDetails = ({ text, showDetails }) => {
  return (
    <div className="mt-2 flex items-center h-[25px] text-[16px] font-medium tablet:h-[44px] smallTablet:h-[60px]">
      <p> {text}</p>
      {showDetails && (
        <span className="ml-2">
          <Tooltip title="Know more" placement="top">
            <IconButton style={{ color: "#BFB8B8" }}>
              <MdOutlineInfo size={20} />
            </IconButton>
          </Tooltip>
        </span>
      )}
    </div>
  );
};

function Section2Details({ details, showDetails }) {
  const navigate = useNavigate();

  return (
    <div
      className={`w-[16%] flex flex-col justify-end ${
        showDetails && "text-[#BFB8B8]"
      }`}
    >
      <p className="text-[20px] font-medium">{details.title}</p>
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
          text={details.apiReq}
          showDetails={showDetails}
        />
        <Divider />
        <InfoDetails
          text={details.requestsPerSecond}
          showDetails={showDetails}
        />
        <Divider />
        <InfoDetails
          text={details.usersPerOrg}
          showDetails={showDetails}
        />
        <Divider />
        <InfoDetails
          text={details.numberOfAPis}
          showDetails={showDetails}
        />
        <Divider />
        <InfoDetails
          text={details.numberOfModels}
          showDetails={showDetails}
        />
        <Divider />
        <InfoDetails
          text={details.dataBandwidth}
          showDetails={showDetails}
        />
        <Divider />
        <InfoDetails
          text={details.loadBalancing}
          showDetails={showDetails}
        />
        <Divider />
        <InfoDetails
          text={details.resources}
          showDetails={showDetails}
        />
        <Divider />
        <InfoDetails
          text={details.slaSupport}
          showDetails={showDetails}
        />
        <Divider />
        {/* <InfoDetails
          text={details.uptimeGuarantee}
          showDetails={showDetails}
        />
        <Divider /> */}
      </div>
    </div>
  );
}

export default Section2Details;
