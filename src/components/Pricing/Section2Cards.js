import React from "react";

const Divider = () => {
  return <hr style={{ border: "1px solid #272531", marginTop: "10px" }} />;
};

function Section2Cards({ details }) {
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
        <button className="bg-[#312D52] font-medium w-full rounded-md h-[45px] font-medium">
          {details.buttonText}
        </button>
      )}

      <div className="mt-3 mb-3">
        <p className="mt-2">{details.apiReq}</p>
        <Divider />
        <p className="mt-2">{details.requestsPerSecond}</p>
        <Divider />
        <p className="mt-2">{details.usersPerOrg}</p>
        <Divider />
        <p className="mt-2">{details.numberOfAPis}</p>
        <Divider />
        <p className="mt-2">{details.numberOfModels}</p>
        <Divider />
        <p className="mt-2">{details.dataBandwidth}</p>
        <Divider />
        <p className="mt-2">{details.loadBalancing}</p>
        <Divider />
        <p className="mt-2">{details.resources}</p>
        <Divider />
        <p className="mt-2">{details.slaSupport}</p>
        <Divider />
        <p className="mt-2">{details.uptimeGuarantee}</p>
        <Divider />
      </div>
    </div>
  );
}

export default Section2Cards;
