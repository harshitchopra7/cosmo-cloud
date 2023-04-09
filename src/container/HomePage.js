import React from "react";

// internal deps
import Banner from "../components/Homepage/Banner";
import Divider from "../components/Homepage/Divider/Divider";
import Section1 from "../components/Homepage/Section1/Section1";
import Section2 from "../components/Homepage/Section2/Section2";
import Section3 from "../components/Homepage/Section3.js/Section3";
import Section4 from "../components/Homepage/Section4/Section4";
import Section5 from "../components/Homepage/Section5/Section5";

function HomePage() {
  return (
    <div>
      <Banner />

      <Divider />

      <Section1 />

      {/* <Section2 /> */}

      <Section3 />

      <Divider />

      <Section4 />

      {/* <Divider /> */}

      {/* <Section5 /> */}
    </div>
  );
}

export default HomePage;
