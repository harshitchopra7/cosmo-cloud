import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineInfo } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const Divider = () => {
  return <hr style={{ border: "1px solid #272531", marginTop: "10px" }} />;
};

const InfoDetails = ({ text, isDetailsColumn }) => {
  return (
    <div className="mt-2 flex items-center h-[25px]">
      <p> {text}</p>
      {isDetailsColumn && (
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

function Section2Cards({ details }) {
  const navigate = useNavigate();

  return (
    <div
      className={`w-[16%] flex flex-col justify-end ${
        details.detailsColumn && "text-[#BFB8B8]"
      }`}
    >
      <p className="text-lg font-medium">{details.title}</p>
      <div className="mt-3 mb-3">
        <p className="text-sm text-[#BFB8B8] font-medium">
          {details.description}
        </p>

        <p>
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
          className={`${
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
        {/* <div className="mt-2 flex items-center">
          <p> {details.apiReq}</p>
          {details.detailsColumn && (
            <span className="ml-2">{<MdOutlineInfo />}</span>
          )}
        </div> */}
        <InfoDetails
          text={details.apiReq}
          isDetailsColumn={details.detailsColumn}
        />
        <Divider />
        <InfoDetails
          text={details.requestsPerSecond}
          isDetailsColumn={details.detailsColumn}
        />
        <Divider />
        <InfoDetails
          text={details.usersPerOrg}
          isDetailsColumn={details.detailsColumn}
        />
        <Divider />
        <InfoDetails
          text={details.numberOfAPis}
          isDetailsColumn={details.detailsColumn}
        />
        <Divider />
        <InfoDetails
          text={details.numberOfModels}
          isDetailsColumn={details.detailsColumn}
        />
        <Divider />
        <InfoDetails
          text={details.dataBandwidth}
          isDetailsColumn={details.detailsColumn}
        />
        <Divider />
        <InfoDetails
          text={details.loadBalancing}
          isDetailsColumn={details.detailsColumn}
        />
        <Divider />
        <InfoDetails
          text={details.resources}
          isDetailsColumn={details.detailsColumn}
        />
        <Divider />
        <InfoDetails
          text={details.slaSupport}
          isDetailsColumn={details.detailsColumn}
        />
        <Divider />
        <InfoDetails
          text={details.uptimeGuarantee}
          isDetailsColumn={details.detailsColumn}
        />
        <Divider />
      </div>
    </div>
  );
}

export default Section2Cards;
