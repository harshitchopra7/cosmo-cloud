import React from "react";

function Section3MobileCards({ id, title, description, illustration }) {
  return (
    <div className={"mt-8 rounded-lg p-4 cursor-pointer"}>
      <div className="flex">
        <p className="bg-white rounded-[50%] font-extrabold flex items-center justify-center min-w-[24px] h-[24px] text-[#161426] smallTablet:mt-1">
          {id}
        </p>
        <div className="ml-4">
          <p className="text-[16px] font-medium smallTablet:text-xl">{title}</p>
          <p className="text-[16px] text-[#BFB8B8] smallTablet:text-xl">{description}</p>
        </div>
      </div>
      <div
        className="bg-[#1D1B2D] mt-6 rounded-lg smallTablet:w-[80%] smallTablet:mx-[auto]"
        style={{
          flex: "0.7",
        }}
      >
        <img className="rounded-lg" src={illustration} alt="" />
      </div>
    </div>
  );
}

export default Section3MobileCards;
