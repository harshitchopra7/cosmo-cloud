import React, { useState } from "react";
import Divider from "../Homepage/Divider/Divider";

import radio_button_unchecked from "../../assets/pricing/radio_button_unchecked.png";
import radio_button_checked from "../../assets/pricing/radio_button_checked.png";

import Slider from "@mui/material/Slider";

const plans = [
  {
    name: "Personal",
    price: "$40/hour",
  },
  {
    name: "Starter",
    price: "$60/hour",
  },
  {
    name: "Standard",
    price: "$80/hour",
  },
];

const planDetails = {
  personal: {
    apiReq: "Upto 1M per month",
    requestsPerSecond: "Upto 5",
    numberOfAPis: "5",
    numberOfModels: "5",
    dataBandwidth: "1 GB per project",
  },
  starter: {
    apiReq: "Upto 1B per month",
    requestsPerSecond: "Upto 1800",
    numberOfAPis: "Unlimited",
    numberOfModels: "Unlimited",
    dataBandwidth: "50 - 100 GB",
  },
  standard: {
    apiReq: "Upto 1B per month",
    requestsPerSecond: "Upto 1800",
    numberOfAPis: "Unlimited",
    numberOfModels: "Unlimited",
    dataBandwidth: "50 - 100 GB",
  },
};

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
    price: "₹0.69 0.59/hour",
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

const renderConfigurationDetails = (title, description) => {
  return (
    <div className="flex items-center justify-between text-sm font-medium mb-2">
      <p className="text-[#BFB8B8]">{title}</p>
      <p>{description}</p>
    </div>
  );
};

const SliderComponent = ({ defaultValue, min, max, disabled = false }) => {
  return (
    <div>
      {" "}
      <Slider
        defaultValue={defaultValue}
        valueLabelDisplay={disabled ? "auto" : "on"}
        aria-label="Small"
        color="primary"
        disabled={disabled}
        min={min}
        max={max}
        style={{ color: "#8980D4" }}
      />
      <div className="flex items-center justify-between text-sm">
        <p>{min}</p>
        <p>{max}</p>
      </div>
    </div>
  );
};

function Section4() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0].name.toLowerCase());

  return (
    <div className="items-center pr-[11%] pl-[11%]">
      <p className="text-3xl text-center">Cost Calculator</p>

      <div className="flex justify-between mt-10">
        {/* left  */}
        <div className="w-[65%]">
          <div>
            <p className="font-medium mt-6 mb-4 text-xl">Select a plan</p>
            <div className="flex">
              {plans.map((val) => (
                <div
                  className="bg-[#1D1B2D] rounded-lg p-4 flex justify-between w-[150px] mr-4"
                  onClick={() => setSelectedPlan(val.name.toLowerCase())}
                >
                  <div>
                    <p className="text-lg font-medium">{val.name}</p>
                    <p className="font-medium text-[#BFB8B8] text-sm">
                      {val.price}
                    </p>
                  </div>
                  <div>
                    <img
                      src={
                        selectedPlan === val.name.toLowerCase()
                          ? radio_button_checked
                          : radio_button_unchecked
                      }
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium mt-6 mb-4 text-xl">Out of box</p>

            <div className="flex items-center flex-wrap bg-[#1D1B2D] p-4 pl-5 pr-5">
              <div className="w-[33%] mb-5">
                <p className="text-sm text-[#BFB8B8] mb-1">API requests</p>
                <p>{planDetails[selectedPlan].apiReq}</p>
              </div>
              <div className="w-[33%] mb-5">
                <p className="text-sm text-[#BFB8B8] mb-1">
                  Requests per second
                </p>
                <p>{planDetails[selectedPlan].requestsPerSecond}</p>
              </div>
              <div className="w-[33%] mb-5">
                <p className="text-sm text-[#BFB8B8] mb-1">Data bandwidth</p>
                <p>{planDetails[selectedPlan].dataBandwidth}</p>
              </div>
              <div className="w-[33%] mb-5">
                <p className="text-sm text-[#BFB8B8] mb-1">Number of models</p>
                <p>{planDetails[selectedPlan].numberOfModels}</p>
              </div>
              <div className="w-[33%] mb-5">
                <p className="text-sm text-[#BFB8B8] mb-1">Number of APIs</p>
                <p>{planDetails[selectedPlan].numberOfAPis}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium mt-6 mb-4 text-xl">Configure</p>

            <div>
              <div className="mt-8">
                <div className="mt-3 mb-3">
                  <p>Requests per second (RPS)</p>
                  <p className="text-[#BFB8B8]">
                    Current plan doesn’t support RPS control.
                  </p>
                </div>
                <div>
                  {
                    <SliderComponent
                      defaultValue={10}
                      min={10}
                      max={100}
                      disabled={true}
                    />
                  }
                </div>
              </div>

              <div className="mt-8">
                <div className="mt-3 mb-3">
                  <p>Number of projects</p>
                  <p className="text-[#BFB8B8]">
                    10 GB is included in the base price.
                  </p>
                </div>
                <div>
                  {<SliderComponent defaultValue={10} min={1} max={100} />}
                </div>
              </div>

              <div className="mt-8">
                <div className="mt-3 mb-3">
                  <p>Data bandwidth</p>
                  <p className="text-[#BFB8B8]">
                    10 GB is included in the base price.
                  </p>
                </div>
                <div>
                  {<SliderComponent defaultValue={20} min={10} max={100} />}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className="w-[30%]">
          <p className="font-medium mt-6 mb-4 text-xl">Estimate</p>
          <div className="bg-[#1D1B2D] p-4">
            <div className="text-center mt-6 mb-6">
              <p className="text-3xl font-medium">₹6.5/hour</p>
              <p className="text-[#BFB8B8]">charged monthly</p>
            </div>
            <div>
              <p className="text-sm mb-4 font-medium">Your Configuration</p>

              {renderConfigurationDetails(
                "Requests per second",
                planDetails[selectedPlan].requestsPerSecond
              )}
              {renderConfigurationDetails(
                "Data bandwidth",
                planDetails[selectedPlan].dataBandwidth
              )}
              {renderConfigurationDetails(
                "Number of models",
                planDetails[selectedPlan].numberOfModels
              )}
              {renderConfigurationDetails(
                "Number of APIs",
                planDetails[selectedPlan].numberOfAPis
              )}
            </div>
            <div>
              <p className="text-sm mb-4 font-medium mt-8">Price breakdown</p>

              {renderConfigurationDetails("Personal Plan", "₹500/month")}

              {renderConfigurationDetails("Customisation", "₹1,200/month")}

              {renderConfigurationDetails(
                "Data bandwidth increase",
                "₹200/month"
              )}
            </div>
            <div className="mt-[-45px] mb-[-45px]">
              <Divider />
            </div>

            <div className="flex items-center justify-between text-sm font-medium mb-2">
              <p>
                Total <span className="text-[#BFB8B8]">(monthly)</span>
              </p>
              <p>₹1,900/month</p>
            </div>
            <p className="text-right text-[#BFB8B8] text-xs">
              *Any applicable taxes are not included
            </p>

            <button className="bg-[#312D52] font-medium w-full rounded-md h-[45px] font-medium mt-[35px] mb-[10px]">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
