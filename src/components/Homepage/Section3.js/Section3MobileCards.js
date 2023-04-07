import React from "react";

function Section3MobileCards({ id, title, description, illustration }) {
  return (
    <div className={"mt-8 rounded-lg p-4 cursor-pointer"}>
      <div className="flex">
        <p className="bg-white rounded-[50%] flex items-center justify-center w-[25px] h-[25px] text-[#161426]">
          {id}
        </p>
        <div className="ml-3">
          <p className="text-[16px] font-medium">{title}</p>
          <p className="text-[16px] text-[#BFB8B8]">{description}</p>
        </div>
      </div>
      <div
        className="f-full bg-[#1D1B2D] mt-7 rounded-lg"
        style={{
          flex: "0.7",
        }}
      >
        <img src={illustration} alt="" />
        {/* {illustration} */}
      </div>
    </div>
  );
}

export default Section3MobileCards;
