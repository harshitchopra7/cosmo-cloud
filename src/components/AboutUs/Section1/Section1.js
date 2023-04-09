import React from "react";

function Section1() {
  return (
    <div className="mx-[auto] w-[1184px] mobile:w-[330px] smallLaptop:w-[1050px] tablet:w-[850px] smallTablet:w-[700px]">
      <p className="font-medium text-[48px] largeMobile:text-[28px]">
        Why Cosmocloud?
      </p>

      <p className="text-[20px] mt-4 text-[#BFB8B8] largeMobile:text-[16px] mobile:leading-7">
        Our solution simplifies backend development with database management,
        API management, one-click deployment, and authentication. Easily manage
        your infrastructure with an intuitive interface, saving you time and
        resources.{" "}
      </p>

      <p className="text-[20px] mt-4 text-[#BFB8B8] largeMobile:text-[16px] mobile:leading-7">
        Whether you're building a simple web app or a complex mobile app, our
        platform makes the backend development process easy.
      </p>
    </div>
  );
}

export default Section1;
