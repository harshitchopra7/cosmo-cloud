import React from "react";

function Section3Cards({ id, title, description, selectedId, onClick }) {
  return (
    <div
      className={`mt-8 rounded-lg p-4 cursor-pointer ${
        selectedId === id && `bg-[#1D1B2D]`
      }`}
      onClick={() => onClick(id)}
    >
      <div className="flex gap-3">
        <div className="h-[24px] min-w-[24px] text-center font-extrabold text-[#161426] bg-white rounded-full mt-[6px]">
          {id}
        </div>
        <div>
          <div className="text-[20px] font-medium leading-[32px]">{title}</div>
          <p className="text-[18px] text-[#BFB8B8]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Section3Cards;
