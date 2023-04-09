import React from "react";
import Section2Cards from "./Section2Cards";
import leader1 from "../../../assets/Leaders/leader1.png";

const leadersData = [
  {
    image: leader1,
    name: "Sarthak Kamra",
    designation: "siriuslabs.",
  },
  {
    image: leader1,
    name: "Shubham Kothari",
    designation: "u fundall",
  },
  {
    image: leader1,
    name: "Mrunmai A.",
    designation: "CEO, Z Ventures",
  },
  {
    image: leader1,
    name: "Shrey Batra",
    designation: "COO, Coinbase",
  },
  {
    image: leader1,
    name: "Mukul Jain",
    designation: "Angel investor",
  },
  {
    image: leader1,
    name: "Aksh Mehta",
    designation: "Angel investor",
  },
];

function Section2() {
  return (
    <div className="my-[70px] bg-[#1D1B2D] w-full py-[50px] mobile:pt-7 mobile:pb-7">
      <div className="mx-[auto] w-[1184px] mobile:w-[330px] smallLaptop:w-[1050px]">
        <p className="text-[32px] font-medium mb-[50px] mobile:mb-10 mobile:text-[20px]">
          Industry leaders backing us
        </p>
        <div className="flex flex-wrap items-center mobile:items-start mobile:flex-col">
          {leadersData.map((val) => (
            <Section2Cards
              image={val.image}
              name={val.name}
              designation={val.designation}
            />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;
