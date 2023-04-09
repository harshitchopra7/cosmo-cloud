import React from "react";

import { FaLinkedinIn } from "react-icons/fa";

function Section2Cards({ image, name, role, pastExp }) {
  return (
    <div className="flex flex-col w-[31%] mb-[72px] tablet:w-[50%] smallTablet:w-[50%] mobile:w-[100%] mobile:mr-[1] mobile:mb-12 text-center">
      <img
        className="h-[240px] w-[240px] rounded-lg mx-auto"
        src={image}
        alt="person"
      />
      <p className="mt-5 font-semibold text-[20px] largeMobile:text-[18px] mx-auto">
        {name}
      </p>

      <div className="mt-3 mx-auto">
        <p className="font-medium text-[16px] mx-auto">{role}</p>
        <p className="mt-1 text-[#BFB8B8] text-[16px] mx-auto">Past: {pastExp}</p>
      </div>

      <a
        href={ValidityState.linkedin}
        target="_blank"
        rel="noreferrer"
        className="mt-4 cursor-pointer mx-auto"
      >
        <FaLinkedinIn className="text-[#5869D6]" />
      </a>
    </div>
  );
}

export default Section2Cards;
