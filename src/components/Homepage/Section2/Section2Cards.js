import React from "react";

function Section2Cards({ image, name, designation }) {
  return (
    <div className="w-[25%] mb-[40px] largeMobile:w-[90%] largeMobile:flex">
      <img src={image} alt="" />
      <div className="mt-4 largeMobile:ml-4">
        <p className="text-[22px] font-semibold font-semibold largeMobile:text-[18px]">
          {name}
        </p>
        <p className="text-[#BFB8B8] text-[16px] font-medium largeMobile:text-[15px]">
          {designation}
        </p>
      </div>
    </div>
  );
}

export default Section2Cards;
