import React from "react";

function Section1Cards({ icon, title, description }) {
  return (
    <div 
    className="rounded-2xl bg-[#1D1B2D] w-[333px] min-h-[280px] py-7 px-8 tablet:flex tablet:flex-col tablet:justify-center tablet:items-center tablet:text-center tablet:w-[270px] mobile:min-h-0"
    >
      <div className="mobile:w-9 mobile:h-9">{icon}</div>
      <div className="mt-6 mobile:mt-3">
        <p className="font-semibold text-[22px] mobile:text-[16px] tablet:text-lg">
          {title}
        </p>
        <p className="text-[18px] text-[#BFB8B8] mt-2 mobile:text-[14px] tablet:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Section1Cards;
