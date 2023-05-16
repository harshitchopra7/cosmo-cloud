import React from "react";

// internal deps
import Banner from "../components/Homepage/Banner";
import Divider from "../components/Homepage/Divider/Divider";
import Section1 from "../components/Homepage/Section1/Section1";
import Section4 from "../components/Homepage/Section4/Section4";
import Features from "../components/Homepage/Features";
import Partners from "../components/Homepage/Partners";

function HomePage() {
  return (
    <div className="w-full">
      <Banner />

      <Partners />

      <Divider />

      <Section1 />

      {/* <Section2 /> */}

      {/* <Section3 /> */}
      <Features />

      <Divider />

      <Section4 />

      {/* <Divider /> */}

      {/* <Section5 /> */}
    </div>
  );
}

export default HomePage;
