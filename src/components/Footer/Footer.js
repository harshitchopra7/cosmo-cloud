import React from "react";

// assets
import instagram from "../../assets/footer/instagram.png";
import linkedin from "../../assets/footer/linkedin.png";
import twitter from "../../assets/footer/twitter.png";
import logoMain from "../../assets/logoMain.png";

function Footer() {
  return (
    <div className="bg-[#1D1B2D]">
      <div className="flex items-center justify-between h-[50px] pt-8 pb-8 pl-[2%] pr-[2%]">
        <p className="text-[#BFB8B8] font-semibold largeMobile:hidden">
          Cosmocloud Pvt. Ltd.{" "}
        </p>

        <img
          className="hidden largeMobile:block h-[25px]"
          src={logoMain}
          alt=""
        />

        <div className="flex items-center justify-center">
          <img className="mr-3 cursor-pointer" src={linkedin} alt="linkedin" />
          <img className="mr-3 cursor-pointer" src={twitter} alt="twitter" />
          <img
            className="mr-3 cursor-pointer"
            src={instagram}
            alt="instagram"
          />
        </div>
        <div className="flex items-center font-semibold text-[#BFB8B8] largeMobile:hidden">
          <p className="ml-3 cursor-pointer">Terms</p>
          <p className="ml-3 cursor-pointer">Privacy</p>
          <p className="ml-3 cursor-pointer">Careers</p>
        </div>
      </div>
      <div className="font-semibold text-[#BFB8B8] hidden largeMobile:block ml-4 mb-4">
        <p className="mt-2 cursor-pointer text-sm">Terms</p>
        <p className="mt-2 cursor-pointer text-sm">Privacy</p>
        <p className="mt-2 cursor-pointer text-sm">Careers</p>
        <p className="mt-4 text-sm">© 2023 Cosmocloud Pvt. Ltd. </p>
      </div>
    </div>
  );
}

export default Footer;
