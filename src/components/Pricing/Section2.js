import React from "react";
import Section2Cards from "./Section2Cards";

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
    loadBalancing: "X",
    resources: "Shared",
    slaSupport: "X",
    uptimeGuarantee: "X",
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
    loadBalancing: "Tick",
    resources: "Dedicated",
    slaSupport: "Tick",
    uptimeGuarantee: "Tick",
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
    loadBalancing: "Tick",
    resources: "Dedicated",
    slaSupport: "Tick",
    uptimeGuarantee: "Tick",
  },
  {
    title: "Enterprise",
    description: "Customised pricing",
    price: "Let’s talk?",
    buttonText: "Contact us",
    apiReq: "Unlimited",
    requestsPerSecond: "No limit",
    usersPerOrg: "No limit",
    numberOfAPis: "Unlimited",
    numberOfModels: "Unlimited",
    dataBandwidth: "100 GB",
    loadBalancing: "Tick",
    resources: "Dedicated",
    slaSupport: "Tick",
    uptimeGuarantee: "Tick",
  },
];

function Section2() {
  return (
    <div className="bg-[#1D1B2D] pl-[11%] pr-[11%] pt-[60px] pb-[60px]">
      <p className="text-2xl text-center">Compare features across plans</p>

      <div className="flex flex-wrap justify-between mt-10">
        {pricingDetails.map((val) => (
          <Section2Cards details={val} />
        ))}
      </div>
    </div>
  );
}

export default Section2;
