import React from "react";

// internal deps
import Section1 from "../components/AboutUs/Section1/Section1";
import Section2 from "../components/AboutUs/Section2/Section2";

function AboutUs() {
  return (
    <div className="pl-[9%] pr-[9%] pt-[70px] pb-[70px]">
      <Section1 />

      <Section2 />
    </div>
  );
}

export default AboutUs;
