import React from "react";

function Section1() {
  return (
    <div className="mx-[auto] w-[1184px] mobile:w-[330px] smallLaptop:w-[1050px] tablet:w-[850px] smallTablet:w-[700px] largeMobile:w-[576px]">
      <p className="font-medium text-[48px] largeMobile:text-[28px]">
        What is Cosmocloud?
      </p>

      <p className="text-[20px] mt-6 text-[#BFB8B8] largeMobile:text-[16px] mobile:leading-7">
        Cosmocloud is the only full featured, no-code, Backend-as-a-Service platform which aim to simplify the application
        development with building complex APIs, easy database management, one-click deployments, and authentication.
      </p>

      <p className="text-[20px] mt-6 text-[#BFB8B8] largeMobile:text-[16px] mobile:leading-7">
        A fully production battle-ready, secure and performant platform which aims not to just build your MVP and POC apps but to run
        your backend layer with Billions of API calls every month! Cosmocloud uses proven tech stacks to build your backend
        layer, with no compromise to scalability, customisability and security!
      </p>

      <p className="text-[20px] mt-6 text-[#BFB8B8] largeMobile:text-[16px] mobile:leading-7">
        Without the hassle of spending long dev hours writing code, maintaing huge teams to manage infrastructure and deployments,
        Cosmocloud abstracts everything from code to deployments to infrastructure in a single Black-box.
      </p>
    </div>
  );
}

export default Section1;
