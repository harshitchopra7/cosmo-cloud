import React from "react";

function Section1Cards({ icon, title, description }) {
  return (
    <div className="rounded-2xl mt-4 ml-4 mr-4 w-[28%] h-[280px] pt-6 pb-6 pl-8 pr-8 bg-[#1D1B2D] tablet:flex tablet:flex-col tablet:justify-center tablet:items-center tablet:text-center tablet:h-fit tablet:w-[90%]">
      <img src={icon} />
      <div className="mt-6">
        <p className="font-semibold text-xl tablet:text-lg">{title}</p>
        <p className="text-lg text-[#BFB8B8] mt-2 tablet:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Section1Cards;
