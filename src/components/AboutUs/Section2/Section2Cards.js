import React from "react";

import { FaLinkedinIn } from "react-icons/fa";

function Section2Cards({ image, name, role, pastExp }) {
  return (
    <div className="flex flex-col mr-6 w-[31%] mt-10 mobile:w-[42%] mobile:mr-[1]">
      <img
        className="h-[100px] rounded-lg"
        style={{ width: "fit-content" }}
        src={image}
        alt="person"
      />
      <p className="mt-4 font-semibold text-[20px] largeMobile:text-[18px]">
        {name}
      </p>

      <div className="mt-4">
        <p className="font-medium text-[16px]">{role}</p>
        <p className="mt-1 text-[#BFB8B8] text-[16px]">Past: {pastExp}</p>
      </div>

      <a
        href={ValidityState.linkedin}
        target="_blank"
        rel="noreferrer"
        className="mt-4 cursor-pointer"
      >
        <FaLinkedinIn className="text-[#5869D6]" />
      </a>
    </div>
  );
}

export default Section2Cards;
