import React from "react";
import Section2Cards from "./Section2Cards";

const personImage =
  "https://img.freepik.com/free-icon/important-person_318-10744.jpg";

const teamMembers = [
  {
    image: personImage,
    name: "Shrey Batra",
    role: "Engineering",
    pastExp: "Senior Engineer at LinkedIn and Innovaccer",
    linkedin: "",
  },
  {
    image: personImage,
    name: "Sarthak Kamra",
    role: "Product Design",
    pastExp: "Senior Designer at Salesforce and Innovaccer",
    linkedin: "",
  },
  {
    image: personImage,
    name: "Mukul Jain",
    role: "Engineering",
    pastExp: "Senior Engineer at Atlassian and Rubrik",
    linkedin: "",
  },
  {
    image: personImage,
    name: "Mukul Jain",
    role: "Engineering",
    pastExp: "Senior Engineer at Atlassian and Rubrik",
    linkedin: "",
  },
  {
    image: personImage,
    name: "Mukul Jain",
    role: "Engineering",
    pastExp: "Senior Engineer at Atlassian and Rubrik",
    linkedin: "",
  },
];

function Section2() {
  return (
    <div className="mt-[70px]">
      <p className="font-medium text-4xl mobile:text-2xl">Team</p>
      <p className="mt-4 text-[#BFB8B8] text-lg mobile:text-base">
        Our team has led and delivered large-scale software and design projects
        in multiple startups and high-growth environments like{" "}
        <span className="text-white">Innovaccer</span>,{" "}
        <span className="text-white">LinkedIn</span>,{" "}
        <span className="text-white">Atlassian</span> and{" "}
        <span className="text-white">Salesforce</span> .
      </p>

      <div className="flex flex-wrap mt-12 mb-12">
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
  );
}

export default Section2;
