import React, { useState, useCallback } from "react";
import Divider from "../Homepage/Divider/Divider";

import radio_button_unchecked from "../../assets/pricing/radio_button_unchecked.png";
import radio_button_checked from "../../assets/pricing/radio_button_checked.png";

import { dataPrice, pricing } from "../../pricing";

import SliderComponent from "./SliderComponent";
import RenderConfigurationDetails from "./RenderConfigurationDetails";
import InfoDetails from "./InfoDetails";

const totalHoursInMonth = 730;

const plans = [
  {
    name: "Personal",
    price: "$40/hour",
    rps: "disabled",
    numberOfProjects: "disabled",
    dataBandwidth: "1",
  },
  {
    name: "Starter",
    price: "$60/hour",
    rps: "300",
    numberOfProjects: "disabled",
    dataBandwidth: "1",
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

function Section4() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [selectedPlanName, setselectedPlanName] = useState(
    plans[0].name.toLowerCase()
  );

  const [rpsSelected, setRpsSelected] = useState(0);
  const [projectsSelected, setProjectsSelected] = useState(0);
  const [dataSelected, setDataSelected] = useState(
    pricing[selectedPlanName].pricing.data.limits[0].value
  );

  const handlePlanClick = (val) => {
    setRpsSelected(0);
    setProjectsSelected(0);
    setDataSelected(0);

    setSelectedPlan(val);
    setselectedPlanName(val.name.toLowerCase());
  };

  const calculateRpsCost = useCallback(() => {
    const findIndex = pricing[selectedPlanName].pricing.rps.limits.findIndex(
      (val) => val.value === rpsSelected
    );

    if (findIndex === -1 || findIndex === 0) {
      // return 0 since the first value will always be included in the pack
      return 0;
    }

    return pricing[selectedPlanName].pricing.rps.limits[findIndex]?.price.inr;
  }, [rpsSelected, selectedPlanName]);

  const calculateProjectCost = useCallback(() => {
    const perProjectTotalCost =
      pricing[selectedPlanName].pricing.base.inr + calculateRpsCost();

    const totalProjectCost =
      perProjectTotalCost *
      (1 +
        (projectsSelected - 1) *
          pricing[selectedPlanName].pricing.projects.limits[0]?.multiplier
            ?.inr || 1);

    return Math.round(totalProjectCost);
  }, [selectedPlanName, projectsSelected, calculateRpsCost]);

  const calculateDataCost = useCallback(() => {
    const includedDataInSelectedPlan =
      pricing[selectedPlanName].pricing.data.limits[0].value;
    const finalAmount =
      (dataSelected - includedDataInSelectedPlan) * dataPrice.data.inr;
    return finalAmount < 0 ? 0 : finalAmount * 730;
  }, [dataSelected, selectedPlanName]);

  const calculateTotalCost = useCallback(() => {
    return calculateProjectCost() * 730 + calculateDataCost();
  }, [calculateDataCost, calculateProjectCost]);

  const calculateCustomisationCost = () => {
    const totalCost = calculateTotalCost();
    const dataCost = calculateDataCost();
    const basePrice = pricing[selectedPlanName].pricing.base.inr;

    return totalCost - dataCost - basePrice;
  };

  const getMarks = () => {
    const arr = [];
    const limits = pricing[selectedPlanName]?.pricing?.rps.limits;
    limits.map((val) => arr.push({ value: val.value }));
    return arr;
  };

  const getCost = () => {
    const basePrice = pricing[selectedPlanName].pricing.base.inr;

    const findIndex = pricing[selectedPlanName].pricing.rps.limits.findIndex(
      (val) => val.value === rpsSelected
    );

    var rpsPrice;

    if (findIndex === -1 || findIndex === 0) {
      // return 0 since the first value will always be included in the pack
      rpsPrice = 0;
    } else {
      rpsPrice =
        pricing[selectedPlanName].pricing.rps.limits[findIndex]?.price.inr;
    }

    const x = basePrice + rpsPrice;
    const y = x * (1 + (projectsSelected - 1) * 0.8);

    const totalCost = y * 730 + calculateDataCost();

    const perHourCost = totalCost / 730; // upto 3 decimals

    const monthlyBasePrice = basePrice * 730;

    const customisedCost = totalCost - calculateDataCost() - monthlyBasePrice;

    return totalCost.toFixed(2);
  };

  return (
    <div className="items-center mx-[auto] w-[1184px] smallLaptop:w-[1050px] tablet:w-[850px] mobile:w-[330px]" id="calculator">
      <p className="text-[28px] text-center largeMobile:text-[22px]">
        Cost Calculator
      </p>
      <p className="text-[20px] text-center text-[#BFB8B8] largeMobile:text-[16px]">
        Calculate your custom cost tailored to your needs
      </p>

      <div className="flex justify-evenly mt-10  largeMobile:flex-col">
        {/* left  */}
        <div className="w-[58%] largeMobile:w-[100%]">
          <div>
            <p className="font-medium mt-6 mb-4 text-[20px] largeMobile:text-[18px]">
              Select a plan
            </p>
            <div className="flex justify-between largeMobile:flex-col">
              {plans.map((val) => (
                <div
                  className="bg-[#1D1B2D] rounded-lg p-2 pl-4 pr-4 flex justify-between w-[32%] cursor-pointer largeMobile:w-[100%] largeMobile:mb-[12px]"
                  onClick={() => handlePlanClick(val)}
                >
                  <div>
                    <p className="text-[20px] font-medium largeMobile:text-[16px]">
                      {val.name}
                    </p>
                    <p className="font-medium text-[#BFB8B8] text-[16px] largeMobile:text-[14px]">
                      {val.price}
                    </p>
                  </div>
                  <div>
                    <img
                      src={
                        selectedPlanName === val.name.toLowerCase()
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
            <p className="font-medium mt-6 mb-4 text-[20px] largeMobile:text-[18px]">
              Out of box
            </p>

            <div className="flex items-center flex-wrap bg-[#1D1B2D] p-2 pl-4 pr-4 rounded-lg largeMobile:flex-col">
              <div className="w-[33%] mb-5 largeMobile:w-[100%]">
                <InfoDetails text="API requests" />
                <p className="text-[16px]">
                  {planDetails[selectedPlanName].apiReq}
                </p>
              </div>
              <div className="w-[33%] mb-5 largeMobile:w-[100%]">
                <InfoDetails text="Requests per second" />
                <p className="text-[16px]">
                  {planDetails[selectedPlanName].requestsPerSecond}
                </p>
              </div>
              <div className="w-[33%] mb-5 largeMobile:w-[100%]">
                <InfoDetails text="Data bandwidth" />
                <p className="text-[16px]">
                  {planDetails[selectedPlanName].dataBandwidth}
                </p>
              </div>
              <div className="w-[33%] mb-5 largeMobile:w-[100%]">
                <InfoDetails text="Number of models" />
                <p className="text-[16px]">
                  {planDetails[selectedPlanName].numberOfModels}
                </p>
              </div>
              <div className="w-[33%] mb-5 largeMobile:w-[100%]">
                <InfoDetails text="Number of APIs" />
                <p className="text-[16px]">
                  {planDetails[selectedPlanName].numberOfAPis}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium mt-6 mb-4 text-[20px] largeMobile:text-[18px]">
              Configure
            </p>

            <div className="bg-[#1D1B2D] rounded-lg p-4">
              <div>
                <div className="mt-1 mb-1 text-[16px]">
                  <p>Requests per second (RPS)</p>
                  <p className="text-[#BFB8B8] text-[16px] font-medium">
                    Current plan doesn’t support RPS control.
                  </p>
                </div>
                <div>
                  {
                    <SliderComponent
                      defaultValue={
                        pricing[selectedPlanName].pricing.rps.limits[0].value
                      }
                      value={rpsSelected}
                      setterValue={setRpsSelected}
                      min={
                        pricing[selectedPlanName]?.pricing?.rps.limits[0]?.value
                      }
                      max={
                        pricing[selectedPlanName]?.pricing?.rps.limits[
                          pricing[selectedPlanName]?.pricing?.rps.limits
                            .length - 1
                        ]?.value
                      }
                      disabled={
                        pricing[selectedPlanName].pricing.rps.enabled ===
                          false && true
                      }
                      color={
                        pricing[selectedPlanName].pricing.rps.enabled === false
                          ? "#8F8F8F"
                          : "#8980D4"
                      }
                      marks={
                        pricing[selectedPlanName]?.pricing?.rps.enabled !==
                          false && getMarks()
                      }
                      step={null}
                    />
                  }
                </div>
              </div>

              <div className="mt-4 largeMobile:text-[16px]">
                <div className="mt-1 mb-1 text-[16px]">
                  <p className="">Number of projects</p>
                  <p className="text-[#BFB8B8] text-[16px] font-medium">
                    1 project is included in the base price.
                  </p>
                </div>
                <div>
                  {
                    <SliderComponent
                      defaultValue={
                        pricing[selectedPlanName].pricing.projects.limits[0]
                          .value
                      }
                      value={projectsSelected}
                      setterValue={setProjectsSelected}
                      min={
                        pricing[selectedPlanName].pricing.projects.limits[0]
                          .value
                      }
                      max={
                        pricing[selectedPlanName].pricing.projects.limits[1]
                          .value
                      }
                      disabled={
                        pricing[selectedPlanName].pricing.projects.enabled ===
                          false && true
                      }
                      color={
                        pricing[selectedPlanName].pricing.projects.enabled ===
                        false
                          ? "#8F8F8F"
                          : "#8980D4"
                      }
                      step={1}
                    />
                  }
                </div>
              </div>

              <div className="mt-4 largeMobile:text-[16px]">
                <div className="mt-1 mb-1 text-[16px]">
                  <p>Data bandwidth</p>
                  <p className="text-[#BFB8B8] text-[16px] font-medium">
                    10 GB is included in the base price.
                  </p>
                </div>
                <div>
                  {
                    <SliderComponent
                      defaultValue={
                        pricing[selectedPlanName].pricing.data.limits[0].value
                      }
                      value={dataSelected}
                      setterValue={setDataSelected}
                      min={
                        pricing[selectedPlanName].pricing.data.limits[0].value
                      }
                      max={
                        pricing[selectedPlanName].pricing.data.limits[1].value
                      }
                      disabled={
                        pricing[selectedPlanName].pricing.data.enabled ===
                          false && true
                      }
                      color={
                        pricing[selectedPlanName].pricing.data.enabled === false
                          ? "#8F8F8F"
                          : "#8980D4"
                      }
                      step={10}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className="w-[34%] largeMobile:w-[100%]">
          <p className="font-medium mt-6 mb-4 text-[20px] largeMobile:text-[18px]">
            Estimate
          </p>
          <div className="bg-[#1D1B2D] p-4 rounded-lg">
            <div className="text-center mt-8 mb-8">
              <p className="text-[36px] font-medium">
                ₹{(calculateTotalCost() / 730).toFixed(2)}/hour
              </p>
              <p className="text-[#BFB8B8] text-[18px] font-medium">
                charged monthly
              </p>
            </div>
            <div>
              <p className="text-[16px] mb-6 font-medium">Your Configuration</p>

              <RenderConfigurationDetails
                title="Requests per second"
                description={planDetails[selectedPlanName].requestsPerSecond}
              />

              <RenderConfigurationDetails
                title="Data bandwidth"
                description={planDetails[selectedPlanName].dataBandwidth}
              />

              <RenderConfigurationDetails
                title="Number of models"
                description={planDetails[selectedPlanName].numberOfModels}
              />

              <RenderConfigurationDetails
                title="Number of APIs"
                description={planDetails[selectedPlanName].numberOfAPis}
              />
            </div>
            <div>
              <p className="text-[16px] mb-6 font-medium mt-10">
                Price breakdown
              </p>

              <RenderConfigurationDetails
                title={selectedPlan.name}
                description={
                  pricing[selectedPlanName].pricing.base.inr * totalHoursInMonth
                }
                type="priceBreakdown"
              />

              <RenderConfigurationDetails
                title="Customisation"
                description={calculateCustomisationCost()}
                type="priceBreakdown"
              />

              <RenderConfigurationDetails
                title="Data bandwidth increase"
                description={calculateDataCost()}
                type="priceBreakdown"
              />
            </div>
            <div className="mt-[-45px] mb-[-45px]">
              <Divider />
            </div>

            <div className="flex items-center justify-between text-[16px] font-medium mb-2">
              <p>
                Total <span className="text-[#BFB8B8]">(monthly)</span>
              </p>
              <p>₹{getCost()}/month</p>
            </div>
            <p className="text-right text-[#BFB8B8] text-[14px]">
              *Any applicable taxes are not included
            </p>

            <button className="bg-[#312D52] font-medium w-full rounded-md h-[45px] font-medium mt-[80px] mb-[10px] text-[16px] largeMobile:mt-[50px]">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
