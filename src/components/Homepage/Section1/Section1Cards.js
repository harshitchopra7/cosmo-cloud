import React from "react";

function Section1Cards({ icon, title, description }) {
  return (
    <div className="rounded-2xl mt-4 ml-4 mr-4 w-[28%] h-[280px] pt-6 pb-6 pl-8 pr-8 bg-[#1D1B2D]">
      <img src={icon} />
      <div className="mt-6">
        <p className="font-semibold text-xl">{title}</p>
        <p className="text-lg text-[#BFB8B8] mt-2">{description}</p>
      </div>
    </div>
  );
}

export default Section1Cards;
