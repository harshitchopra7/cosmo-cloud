import React from "react";
import Section3Cards from "./Section3Cards";

const data = [
  {
    id: 1,
    title: "API designer",
    description: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 2,
    title: "Templatised flows",
    description: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 3,
    title: "One-click deploy",
    description: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 4,
    title: "Workflow builder",
    description: "Lorem Ipsum Dolor Sit Amet",
  },
];

function Section3() {
  return (
    <div className="mt-[70px] mb-[70px] pl-[7%] pr-[7%]">
      <p className="font-medium text-3xl">Consectetur adipiscing elit</p>
      <div className="flex">
        <div style={{ flex: "0.3" }} className="mr-8">
          {data.map((val) => (
            <Section3Cards
              id={val.id}
              title={val.title}
              description={val.description}
            />
          ))}
        </div>
        <div
          className="w-[500px] f-full bg-[#1D1B2D] mt-7 rounded-lg"
          style={{
            flex: "0.7",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Section3;
