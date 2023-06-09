import React from "react";
import Section2Cards from "./Section2Cards";
import shreyPic from '../../../assets/aboutUs/shrey.jpeg'


const teamMembers = [
  {
    image: shreyPic,
    name: "Shrey Batra",
    role: "Founder, CEO",
    pastExp: "Sr. SWE @ LinkedIn, Innovaccer",
    linkedin: "https://www.linkedin.com/in/shreybatra/",
  },
];

function Section2() {
  return (
    <div className="mt-[70px] pb-[70px] bg-[#1D1B2D] mobile:pb-3">
      <div className="mx-[auto] w-[1184px] mobile:w-[330px] smallLaptop:w-[1050px] tablet:w-[850px] smallTablet:w-[700px] largeMobile:w-[576px]">
        {/* <div className="absolute w-full bg-[#1D1B2D] h-[120%] left-0 -z-10" /> */}
        <p className="pt-[72px] font-medium text-[48px] largeMobile:text-[28px]">Team</p>
        <p className="mt-4 text-[#BFB8B8] text-[20px] largeMobile:text-[16px]">
          Our team has led and delivered large-scale software and design projects
          in multiple startups and high-growth environments like{" "}
          <span className="text-white">Innovaccer</span>,{" "}
          <span className="text-white">LinkedIn</span>,{" "}
          <span className="text-white">Atlassian</span> and{" "}
          <span className="text-white">Salesforce</span>.
        </p>

        <div className="flex flex-wrap mt-[72px] justify-center">
          {teamMembers.map((val) => (
            <Section2Cards
              image={val.image}
              name={val.name}
              role={val.role}
              pastExp={val.pastExp}
              linkedin={val.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;
