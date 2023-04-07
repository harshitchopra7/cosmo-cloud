import React from "react";

function Section3Cards({ id, title, description, selectedId, onClick }) {
  return (
    <div
      className={`mt-8 rounded-lg p-4 cursor-pointer ${selectedId === id && `bg-[#1D1B2D]`
        }`}
      onClick={() => onClick(id)}
    >


      <div className="ml-3">
        <div className="flex gap-2 items-center">
          <p className="bg-white rounded-[50%] flex items-center justify-center w-[16px] h-[16px] text-[#161426]">
            {id}
          </p>
          <p className="text-[20px] font-medium">{title}</p>
        </div>
        <p className="text-[18px] text-[#BFB8B8]">{description}</p>
      </div>

    </div>
  );
}

export default Section3Cards;
