import React from "react";

// internal deps
import Divider from "../../components/Homepage/Divider/Divider";
import Section1 from "../../components/Pricing/Section1";
import Section2 from "../../components/Pricing/Section2";
import Section3 from "../../components/Pricing/Section3";
import Section4 from "../../components/Pricing/Section4";

function Pricing() {
  return (
    <div className="mt-[70px] mb-[70px] mobile:mt-[56px]">
      <Section1 />

      <Section2 />

      <Section3 />

      <Divider />

      <Section4 />
    </div>
  );
}

export default Pricing;
