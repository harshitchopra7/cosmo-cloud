import React from "react";

function Section2Cards({ image, name, designation }) {
  return (
    <div className="w-[25%] mb-[40px]">
      <img src={image} />
      <div className="mt-4">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-[#BFB8B8]">{designation}</p>
      </div>
    </div>
  );
}

export default Section2Cards;
