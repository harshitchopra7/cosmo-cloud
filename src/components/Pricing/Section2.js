import React, { useState } from "react";
import Section2Cards from "./Section2Cards";

import {
  MdOutlineCheck,
  MdOutlineClose,
  MdOutlineArrowForward,
  MdOutlineInfo,
} from "react-icons/md";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const pricingDetails = [
  {
    title: "",
    description: "",
    price: "",
    buttonText: "",
    apiReq: "API requests",
    requestsPerSecond: "Requests per second",
    usersPerOrg: "Users per org",
    numberOfAPis: "Number of APIs",
    numberOfModels: "Number of models",
    dataBandwidth: "Data bandwidth",
    loadBalancing: "Load balancing",
    resources: "Resources",
    slaSupport: "SLA support",
    uptimeGuarantee: "Uptime guarantee",
    detailsColumn: true,
  },
  {
    title: "Free",
    description: "free for",
    price: "First 7 days",
    buttonText: "Try Free",
    apiReq: "Upto 1M per month",
    requestsPerSecond: "Upto 5",
    usersPerOrg: "1",
    numberOfAPis: "5",
    numberOfModels: "5",
    dataBandwidth: "1 GB per project",
    loadBalancing: <MdOutlineClose />,
    resources: "Shared",
    slaSupport: <MdOutlineClose />,
    uptimeGuarantee: <MdOutlineClose />,
  },
  {
    title: "Professional",
    description: "starts at",
    strikePrice: "₹0.69",
    price: "0.59/hour",
    buttonText: "Try free",
    apiReq: "Upto 1M per month",
    requestsPerSecond: "Upto 900",
    usersPerOrg: "3",
    numberOfAPis: "50",
    numberOfModels: "50",
    dataBandwidth: "10 GB",
    loadBalancing: <MdOutlineCheck />,
    resources: "Dedicated",
    slaSupport: <MdOutlineCheck />,
    uptimeGuarantee: <MdOutlineCheck />,
  },
  {
    title: "Standard",
    description: "starts at",
    price: "₹0.69/hour",
    buttonText: "Try free",
    apiReq: "Upto 1B per month",
    requestsPerSecond: "Upto 1800",
    usersPerOrg: "100",
    numberOfAPis: "Unlimited",
    numberOfModels: "Unlimited",
    dataBandwidth: "50 - 100 GB",
    loadBalancing: <MdOutlineCheck />,
    resources: "Dedicated",
    slaSupport: <MdOutlineCheck />,
    uptimeGuarantee: <MdOutlineCheck />,
  },
  {
    title: "Enterprise",
    description: "Customised pricing",
    price: "Let’s talk?",
    buttonText: "Contact us",
    buttonType: "secondary",
    apiReq: "Unlimited",
    requestsPerSecond: "No limit",
    usersPerOrg: "No limit",
    numberOfAPis: "Unlimited",
    numberOfModels: "Unlimited",
    dataBandwidth: "100 GB",
    loadBalancing: <MdOutlineCheck />,
    resources: "Dedicated",
    slaSupport: <MdOutlineCheck />,
    uptimeGuarantee: <MdOutlineCheck />,
    link: "/contact-us",
  },
];

const Divider = () => {
  return <hr style={{ border: "1px solid #272531", marginTop: "10px" }} />;
};

const ShowPlanDetailsInMobileScreen = ({ description, value }) => {
  return (
    <>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <p className="font-medium text-[16px] text-[#BFB8B8] mr-2">
            {description}
          </p>
          <Tooltip title="Know more" placement="top">
            <IconButton style={{ color: "#BFB8B8" }}>
              <MdOutlineInfo size={20} />
            </IconButton>
          </Tooltip>
        </div>

        <p>{value}</p>
      </div>

      <Divider />
    </>
  );
};

function Section2() {
  const [showPlansInMobile, setShowPlansInMobile] = useState(false);
  const [selectedPlanInMobileScreen, setSelectedPlanInMobileScreen] = useState(
    pricingDetails[1]
  );

  function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  return (
    <div className="pl-[11%] pr-[11%] bg-[#1D1B2D] largeMobile:bg-transparent">
      {/* desktop version  */}
      <div className="pt-[60px] pb-[60px] largeMobile:hidden">
        <p className="text-2xl text-center">Compare features across plans</p>

        <div className="flex flex-wrap justify-between mt-10">
          {pricingDetails.map((val) => (
            <Section2Cards details={val} />
          ))}
        </div>
      </div>

      {/* mobile version  */}
      <div className="hidden largeMobile:block">
        <button
          className="bg-[#312D52] font-medium w-full cursor-pointer rounded-md h-[45px] flex items-center justify-center"
          onClick={() => {
            setShowPlansInMobile(true);
            disableScroll();
          }}
        >
          <p>Compare all plans</p>
          <span className="ml-2">
            <MdOutlineArrowForward />
          </span>
        </button>
      </div>

      {showPlansInMobile && (
        <div className="fixed top-0 left-0 right-0 h-[100vh] bg-[#161426] p-4">
          <div className="flex justify-between">
            <p className="text-[16px] font-semibold">Compare Plans</p>
            <MdOutlineClose
              size={25}
              onClick={() => {
                setShowPlansInMobile(false);
                enableScroll();
              }}
            />
          </div>

          <div className="mt-4 mb-4">
            <ShowPlanDetailsInMobileScreen
              description={pricingDetails[0].apiReq}
              value={selectedPlanInMobileScreen.apiReq}
            />
            <ShowPlanDetailsInMobileScreen
              description={pricingDetails[0].requestsPerSecond}
              value={selectedPlanInMobileScreen.requestsPerSecond}
            />
            <ShowPlanDetailsInMobileScreen
              description={pricingDetails[0].usersPerOrg}
              value={selectedPlanInMobileScreen.usersPerOrg}
            />
            <ShowPlanDetailsInMobileScreen
              description={pricingDetails[0].numberOfAPis}
              value={selectedPlanInMobileScreen.numberOfAPis}
            />
            <ShowPlanDetailsInMobileScreen
              description={pricingDetails[0].dataBandwidth}
              value={selectedPlanInMobileScreen.dataBandwidth}
            />
            <ShowPlanDetailsInMobileScreen
              description={pricingDetails[0].loadBalancing}
              value={selectedPlanInMobileScreen.loadBalancing}
            />
            <ShowPlanDetailsInMobileScreen
              description={pricingDetails[0].resources}
              value={selectedPlanInMobileScreen.resources}
            />
            <ShowPlanDetailsInMobileScreen
              description={pricingDetails[0].slaSupport}
              value={selectedPlanInMobileScreen.slaSupport}
            />
            <ShowPlanDetailsInMobileScreen
              description={pricingDetails[0].uptimeGuarantee}
              value={selectedPlanInMobileScreen.uptimeGuarantee}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Section2;
