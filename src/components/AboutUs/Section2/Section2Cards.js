import React from "react";
import linkedin from "../../../assets/footer/linkedin.png";

function Section2Cards({ image, name, role, pastExp }) {
  return (
    <div className="flex flex-col mr-6 w-[31%] mt-10 mobile:w-[42%] mobile:mr-[1]">
      <img
        className="h-[100px] rounded-lg"
        style={{ width: "fit-content" }}
        src={image}
        alt="person"
      />
      <p className="mt-4 font-semibold text-lg">{name}</p>

      <div className="mt-4">
        <p className="font-medium">{role}</p>
        <p className="mt-1 text-[#BFB8B8]">Past: {pastExp}</p>
      </div>

      <a href={ValidityState.linkedin} className="mt-4 cursor-pointer">
        <img src={linkedin} target="_blank" alt="linkedin" />
      </a>
    </div>
  );
}

export default Section2Cards;
