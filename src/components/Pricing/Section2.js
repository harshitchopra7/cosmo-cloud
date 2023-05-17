import React, { useState } from "react";
import Section2Cards from "./Section2Cards";

import {
  MdOutlineCheck,
  MdOutlineClose,
  MdOutlineArrowForward,
  MdOutlineInfo,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useGetPlanData } from "../../container/Pricing/Pricing.service";
import Section2Details from "./Section2Details";

const pricingDetails = [
  {
    description: "free for",
    price: "First 7 days",
    buttonText: "Try Free",
    loadBalancing: <MdOutlineClose />,
    resources: "Shared",
    slaSupport: <MdOutlineClose />,
    uptimeGuarantee: <MdOutlineClose />,
    type: "FREE",
  },
  {
    description: "starts at",
    price: "0.68/hour",
    buttonText: "Upgrade",
    loadBalancing: <MdOutlineCheck />,
    resources: "Dedicated",
    slaSupport: <MdOutlineCheck />,
    uptimeGuarantee: <MdOutlineCheck />,
    type: "PERSONAL",
  },
  {
    description: "starts at",
    price: "₹11.00/hour",
    buttonText: "Upgrade",
    loadBalancing: <MdOutlineCheck />,
    resources: "Dedicated",
    slaSupport: <MdOutlineCheck />,
    uptimeGuarantee: <MdOutlineCheck />,
    type: "STARTER",
  },
  {
    description: "starts at",
    price: "₹35.00/hour",
    buttonText: "Upgrade",
    loadBalancing: <MdOutlineCheck />,
    resources: "Dedicated",
    slaSupport: <MdOutlineCheck />,
    uptimeGuarantee: <MdOutlineCheck />,
    link: "/contact-us",
    type: "STANDARD",
  },
  {
    name: "Enterprise",
    description: "Customised pricing",
    price: "Let’s talk?",
    buttonText: "Contact us",
    buttonType: "secondary",
    numUsers: "No limit",
    numApis: "Unlimited",
    numModels: "Unlimited",
    loadBalancing: <MdOutlineCheck />,
    resources: "Dedicated",
    slaSupport: <MdOutlineCheck />,
    uptimeGuarantee: <MdOutlineCheck />,
    link: "/contact-us",
    type: "CUSTOM",
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
  const { data, isLoading, error } = useGetPlanData();

  const featureDetails = {
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
  };

  const [showPlansInMobile, setShowPlansInMobile] = useState(false);
  const [selectedPlanInMobileScreen, setSelectedPlanInMobileScreen] = useState(
    pricingDetails[1]
  );
  const [dropdownOpened, setDropdownOpened] = useState(false);

  if (!data || isLoading || error) {
    return null;
  }

  const planData = Object.values(data ?? {});
  const updatedPricingDetails = pricingDetails.map((detail, index) => {
    const { resources, pricing, maxDataBandwidth, maxProjects, name } =
      planData[index] || {};
    const updatedPlanData = {
      ...resources,
      pricing,
      maxDataBandwidth,
      maxProjects,
      name,
    };
    return { ...detail, ...updatedPlanData };
  });

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

  function getPlanNames() {
    return pricingDetails.map((item, ind) => {
      if (!ind) return <></>;

      return (
        <div
          className="underline text-base cursor-pointer leading-7"
          onClick={() => {
            setSelectedPlanInMobileScreen(pricingDetails[ind]);
            setDropdownOpened(false);
          }}
        >
          {item.title}
        </div>
      );
    });
  }

  return (
    <div className="bg-[#1D1B2D] largeMobile:bg-transparent">
      {/* desktop version  */}
      <div className="mx-[auto] w-[1184px] pt-[60px] pb-[60px] largeMobile:hidden smallLaptop:w-[1050px] tablet:w-[850px] smallTablet:w-[700px] largeMobile:w-[576px]">
        <p className="text-[28px] text-center">Compare features across plans</p>

        <div className="flex flex-wrap justify-between mt-10">
          <Section2Details details={featureDetails} showDetails={true} />
          {updatedPricingDetails.map((value, index) => {
            return <Section2Cards details={value} data={data} key={crypto.randomUUID()}/>;
          })}
        </div>
      </div>

      {/* mobile version  */}
      <div className="hidden largeMobile:block w-[330px] mx-[auto]">
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

          <div
            className="py-2 px-3 mt-7 bg-[#312D52] rounded-md w-[150px] flex justify-between items-center"
            onClick={() => setDropdownOpened(true)}
          >
            <div>{selectedPlanInMobileScreen.title}</div>
            <div>
              {dropdownOpened ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </div>

          {dropdownOpened && <div className="mt-4">{getPlanNames()}</div>}

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
