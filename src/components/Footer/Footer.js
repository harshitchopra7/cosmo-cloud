import React from "react";
import instagram from "../../assets/footer/instagram.png";
import linkedin from "../../assets/footer/linkedin.png";
import twitter from "../../assets/footer/twitter.png";

function Footer() {
  return (
    <div className="bg-[#1D1B2D] flex items-center justify-between h-[50px] pt-8 pb-8 pl-[2%] pr-[2%]">
      <p className="text-[#BFB8B8] font-semibold" style={{ flex: "0.2" }}>
        Cosmocloud Pvt. Ltd.{" "}
      </p>
      <div className="flex items-center justify-center" style={{ flex: "0.9" }}>
        <img className="mr-3 cursor-pointer" src={linkedin} alt="linkedin" />
        <img className="mr-3 cursor-pointer" src={twitter} alt="twitter" />
        <img className="mr-3 cursor-pointer" src={instagram} alt="instagram" />
      </div>
      <div
        className="flex items-center font-semibold text-[#BFB8B8]"
        style={{ flex: "0.1" }}
      >
        <p className="ml-3 cursor-pointer">Terms</p>
        <p className="ml-3 cursor-pointer">Privacy</p>
        <p className="ml-3 cursor-pointer">Careers</p>
      </div>
    </div>
  );
}

export default Footer;
