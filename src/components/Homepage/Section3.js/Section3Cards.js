import React from "react";

function Section3Cards({ id, title, description }) {
  return (
    <div className="mt-8 bg-[#1D1B2D] rounded-lg p-4">
      <div className="flex">
        <p className="bg-white rounded-[50%] flex items-center justify-center w-[25px] h-[25px] text-[#161426]">
          {id}
        </p>
        <div className="ml-3">
          <p className="text-xl font-medium">{title}</p>
          <p className="text-lg text-[#BFB8B8]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Section3Cards;
