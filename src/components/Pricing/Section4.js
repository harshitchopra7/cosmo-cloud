import React, { useState, useEffect, useMemo } from "react";
import Divider from "../Homepage/Divider/Divider";

import radio_button_unchecked from "../../assets/pricing/radio_button_unchecked.png";
import radio_button_checked from "../../assets/pricing/radio_button_checked.png";

import SliderComponent from "./SliderComponent";
import RenderConfigurationDetails from "./RenderConfigurationDetails";
import InfoDetails from "./InfoDetails";
import { useGetPlanData } from "../../container/Pricing/Pricing.service";
import { BiChevronDown } from "react-icons/bi";

const totalHoursInMonth = 730;

function Section4() {
  const { data } = useGetPlanData();

  const plans = ["PERSONAL", "STARTER", "STANDARD"];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const [rpsSelected, setRpsSelected] = useState(1);
  const [projectsSelected, setProjectsSelected] = useState(1);
  const [dataSelected, setDataSelected] = useState(1);

  const [totalMonthCost, setTotalMonthCost] = useState(0);
  const [perHourCost, setPerHourCost] = useState(0);
  const [dataMonthCost, setDataMonthCost] = useState(0);
  const [currency, setCurrency] = useState("INR");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((show) => !show);
  };

  const limitRps = useMemo(
    () => (data ? data[selectedPlan].pricing.map((data) => data.rps) : []),
    [data, selectedPlan]
  );
  const [selectedRpsIndex, setSelectedRpsIndex] = useState(0);

  const limitProjects = data ? data[selectedPlan].maxProjects : 1;
  const limitDataBandwidth = data ? data[selectedPlan].maxDataBandwidth : 1;
  const startDataBandwidth = data
    ? data[selectedPlan].resources.dataBandwidth
    : 1;
  const price = useMemo(
    () => (data ? data[selectedPlan].pricing.map((data) => data.price) : []),
    [data, selectedPlan]
  );

  useEffect(() => {
    if (data) {
      setRpsSelected(limitRps[limitRps.length - 1]);
      setProjectsSelected(limitProjects);
      setDataSelected(limitDataBandwidth);
    }
  }, [data, limitDataBandwidth, limitProjects, limitRps, selectedPlan]);

  useEffect(() => {
    if (data) {
      const includedDataInSelectedPlan = startDataBandwidth;
      const dataPrice = {
        INR: 9,
        USD: 0.11,
      };
      const dataCost =
        (dataSelected - includedDataInSelectedPlan) * dataPrice[currency];

      const planCost = price[selectedRpsIndex][currency.toLowerCase()] * 730;

      const totalCost = dataCost + planCost;

      const perHourCost = (totalCost / 730).toFixed(2);

      setTotalMonthCost(totalCost.toFixed(2));
      setPerHourCost(perHourCost);
      setDataMonthCost(dataCost);
    }
  }, [
    rpsSelected,
    dataSelected,
    projectsSelected,
    data,
    selectedPlan,
    startDataBandwidth,
    selectedRpsIndex,
    currency,
    price,
  ]);

  if (!data) {
    return null;
  }

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div
      className="items-center mx-[auto] w-[1184px] smallLaptop:w-[1050px] tablet:w-[850px] mobile:w-[330px] smallTablet:w-[700px] largeMobile:w-[576px]"
      id="calculator"
    >
      <p className="text-[28px] text-center largeMobile:text-[22px]">
        Cost Calculator
      </p>
      <p className="text-[20px] text-center text-[#BFB8B8] largeMobile:text-[16px]">
        Calculate your custom cost tailored to your needs
      </p>

      <div className="flex justify-evenly mt-10  smallTablet:flex-col">
        {/* left  */}
        <div className="w-[58%] smallTablet:w-[100%]">
          <div>
            <div className="flex gap-[10px] items-center">
              <p className="font-medium mt-6 mb-4 text-[20px] largeMobile:text-[18px]">
                Select a plan
              </p>
              <div class="relative inline-block w-22 bg-[#1D1B2D] rounded-lg relative">
                <div
                  className="flex gap-[10px] p-2 items-center cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <img
                    class="h-4 w-4"
                    src={`https://flagicons.lipis.dev/flags/4x3/${currency
                      .substring(0, 2)
                      .toLowerCase()}.svg`}
                    alt="India Flag"
                  />
                  {currency}
                  <div>
                    <BiChevronDown
                      style={{
                        width: 20,
                        height: 20,
                        color: "white",
                        fontSize: 16,
                      }}
                      stroke="white"
                      fill="white"
                    />
                  </div>
                </div>
                <div
                  className="absolute bg-[#1D1B2D] border border-[#BFB8B8] rounded-lg cursor-pointer  top-[112%] w-full"
                  onClick={toggleDropdown}
                  hidden={!showDropdown}
                >
                  <div
                    className="flex items-center gap-[5px] w-22 justify-center p-1"
                    onClick={() => setCurrency("INR")}
                  >
                    <img
                      class="h-4 w-4"
                      src="https://flagicons.lipis.dev/flags/4x3/in.svg"
                      alt="India Flag"
                    />{" "}
                    INR
                  </div>
                  <div
                    className="flex items-center gap-[5px] w-22 justify-center p-1"
                    onClick={() => setCurrency("USD")}
                  >
                    <img
                      class="h-4 w-4"
                      src="https://flagicons.lipis.dev/flags/4x3/us.svg"
                      alt="USA Flag"
                    />{" "}
                    USD
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between smallTablet:flex-col">
              {plans.map((plan) => {
                const price =
                  plan === selectedPlan
                    ? data[plan]?.pricing[selectedRpsIndex]?.price[
                        currency.toLowerCase()
                      ].toFixed(2)
                    : data[plan]?.pricing[0]?.price[
                        currency.toLowerCase()
                      ].toFixed(2);

                return (
                  <div
                    className="bg-[#1D1B2D] rounded-lg p-2 pl-4 pr-4 flex justify-between w-[32%] cursor-pointer smallTablet:w-[100%] smallTablet:mb-[12px]"
                    onClick={() => handlePlanClick(plan)}
                  >
                    <div>
                      <p className="text-[20px] font-medium largeMobile:text-[16px]">
                        {data[plan].name}
                      </p>
                      <p className="font-medium text-[#BFB8B8] text-[16px] largeMobile:text-[14px]">
                        {currency === "USD" ? "$" : "₹"}
                        {price}
                        /hour
                      </p>
                    </div>
                    <div>
                      <img
                        src={
                          selectedPlan === plan
                            ? radio_button_checked
                            : radio_button_unchecked
                        }
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
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
                  Upto {data[selectedPlan].resources.apiRequests} per month
                </p>
              </div>
              <div className="w-[33%] mb-5 largeMobile:w-[100%]">
                <InfoDetails text="Requests per second" />
                <p className="text-[16px]">
                  {data[selectedPlan].resources.maxRPS}
                </p>
              </div>
              <div className="w-[33%] mb-5 largeMobile:w-[100%]">
                <InfoDetails text="Data bandwidth" />
                <p className="text-[16px]">
                  Upto {data[selectedPlan].maxDataBandwidth} GB(s)
                </p>
              </div>
              <div className="w-[33%] mb-5 largeMobile:w-[100%]">
                <InfoDetails text="Number of models" />
                <p className="text-[16px]">
                  Upto {data[selectedPlan].resources.numModels}
                </p>
              </div>
              <div className="w-[33%] mb-5 largeMobile:w-[100%]">
                <InfoDetails text="Number of APIs" />
                <p className="text-[16px]">
                  Upto {data[selectedPlan].resources.numApis}
                </p>
              </div>
              <div className="w-[33%] mb-5 largeMobile:w-[100%]">
                <InfoDetails text="Number of Users" />
                <p className="text-[16px]">
                  Upto {data[selectedPlan].resources.numUsers}
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
                  <SliderComponent
                    defaultValue={limitRps[0]}
                    value={rpsSelected}
                    onChange={(value) => {
                      setRpsSelected(value);
                      const index = value / limitRps[0] - 1;
                      setSelectedRpsIndex(index);
                    }}
                    min={limitRps[0]}
                    max={limitRps[limitRps.length - 1]}
                    disabled={limitRps.length === 1}
                    color={limitRps.length === 1 ? "#8F8F8F" : "#8980D4"}
                    marks={limitRps}
                    step={
                      limitRps.length === 1 ? null : limitRps[1] - limitRps[0]
                    }
                  />
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
                      defaultValue={1}
                      value={projectsSelected}
                      onChange={setProjectsSelected}
                      min={1}
                      max={limitProjects}
                      disabled={limitProjects === 1}
                      color={limitProjects === 1 ? "#8F8F8F" : "#8980D4"}
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
                      defaultValue={startDataBandwidth}
                      value={dataSelected}
                      onChange={setDataSelected}
                      min={startDataBandwidth}
                      max={limitDataBandwidth}
                      disabled={limitDataBandwidth === 1}
                      color={limitDataBandwidth === 1 ? "#8F8F8F" : "#8980D4"}
                      step={1}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className="w-[34%] largeMobile:w-[100%] smallTablet:w-[80%] smallTablet:mx-[auto]">
          <p className="font-medium mt-6 mb-4 text-[20px] largeMobile:text-[18px] p-[10px]">
            Estimate
          </p>
          <div className="bg-[#1D1B2D] p-4 rounded-lg">
            <div className="text-center mt-8 mb-8">
              <p className="text-[36px] font-medium">
                {currency === "USD" ? "$" : "₹"}
                {perHourCost}/hour
              </p>
              <p className="text-[#BFB8B8] text-[18px] font-medium">
                charged monthly
              </p>
            </div>
            <div>
              <p className="text-[16px] mb-6 font-medium">Your Configuration</p>

              <RenderConfigurationDetails
                title="Requests per second"
                description={rpsSelected}
              />

              <RenderConfigurationDetails
                title="Data bandwidth"
                description={`${dataSelected} GB`}
              />

              <RenderConfigurationDetails
                title="Number of models"
                description={data[selectedPlan]?.resources.numModels}
              />

              <RenderConfigurationDetails
                title="Number of APIs"
                description={data[selectedPlan]?.resources.numApis}
              />
            </div>
            <div>
              <p className="text-[16px] mb-6 font-medium mt-10">
                Price breakdown
              </p>

              <RenderConfigurationDetails
                title={`${data[selectedPlan]?.name} plan`}
                description={
                  price[selectedRpsIndex]
                    ? (
                        price[selectedRpsIndex][currency.toLowerCase()] *
                        totalHoursInMonth
                      ).toFixed(2)
                    : 0
                }
                currencyType={currency === "USD" ? "$" : "₹"}
                type="priceBreakdown"
              />

              <RenderConfigurationDetails
                title="Data bandwidth increase"
                description={dataMonthCost.toFixed(2)}
                currencyType={currency === "USD" ? "$" : "₹"}
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
              <p>
                {currency === "USD" ? "$" : "₹"}
                {totalMonthCost}/month
              </p>
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
