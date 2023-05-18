import React from "react";
import Section1Cards from "./Section1Cards";

import Bolt from "./assets/Bolt";
import CloudDownload from "./assets/CloudDownload";
import Group from "./assets/Group";
import Webhook from "./assets/Webhook";
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    title: "Free Plan",
    description: "For experimentation and early development",
    icon1: <Webhook />,
    icon2: <CloudDownload />,
    icon3: <Bolt />,
    detailedDescription1: "Upto 100 API requests / day",
    detailedDescription2: "Up to 1 GB data bandwidth / month",
    detailedDescription3: "Up to 10 requests per second (RPS)",
    pricingTitle: "free for",
    pricingDescription: "First 7 days",
    buttonText: "Try free",
    link: "https://dashboard.cosmocloud.io",
  },
  {
    title: "Personal",
    description: "For individual and freelance projects",
    icon1: <Group />,
    icon2: <Webhook />,
    icon3: <CloudDownload />,
    detailedDescription1: "Best for new / passion projects",
    detailedDescription2: "Up to 1 million API requests / month",
    detailedDescription3: "Max 1 user per organisation",
    pricingTitle: "starts at",
    pricingDescription: "₹0.68/hour",
    buttonText: "Get started",
    link: "https://dashboard.cosmocloud.io",
    // strikePrice: "₹0.69",
  },
  {
    title: "Starter",
    description: "For low-scale production APIs",
    icon1: <Group />,
    icon2: <Webhook />,
    icon3: <CloudDownload />,
    detailedDescription1: "Up to 100 million API requests / month",
    detailedDescription2: "Upto 900 requests per second (RPS)",
    detailedDescription3: "10 GB data bandwidth included",
    pricingTitle: "starts at",
    pricingDescription: "₹11.0/hour",
    buttonText: "Get started",
    link: "https://dashboard.cosmocloud.io",
  },
  {
    title: "Standard",
    description: "For low-scale production APIs",
    icon1: <Group />,
    icon2: <Webhook />,
    icon3: <CloudDownload />,
    detailedDescription1: "Up to 1 billion API requests / month",
    detailedDescription2: "Upto 1800 request per seconds (RPS)",
    detailedDescription3: "Upto 100 users per organisation",
    pricingTitle: "starts at",
    pricingDescription: "₹35.0/hour",
    buttonText: "Get started",
    link: "https://dashboard.cosmocloud.io",
  },
  {
    title: "Enterprise",
    description: "High-performance for your workload needs.",
    icon1: <Webhook />,
    icon2: <CloudDownload />,
    icon3: <Bolt />,
    detailedDescription1: "Unlimited API requests / month",
    detailedDescription2: "No limits on users per organisation",
    detailedDescription3: "No limit on requests per second",
    pricingTitle: "",
    pricingDescription: "",
    buttonText: "Contact Us",
    buttonType: "secondary",
    link: "/contact-us",
  },
];

function Section1() {
  const navigate = useNavigate();

  return (
    <div className="px-[auto] pb-[72px] mx-[auto] w-[1184px] mobile:w-[330px] smallLaptop:w-[1050px] tablet:w-[850px] smallTablet:w-[700px] largeMobile:w-[576px]">
      <div className="text-center">
        <p className="text-[48px] font-medium largeMobile:text-[28px]">
          Pricing
        </p>
        <p className="text-[#BFB8B8] mt-2 text-[20px] largeMobile:text-[16px] mobile:mt-3">
          Flexible usage-based pricing that scale with your needs – from early
          exploration to enterprise scale.{" "}
          <span className="text-[#fff] underline cursor-pointer" onClick={() => navigate('#calculator')}>Calculate your price</span>
        </p>
      </div>

      <div className="flex justify-center">
          <div className="mt-8 grid grid-cols-3 gap-9 mobile:flex mobile:flex-col mobile:gap-6 tablet:gap-5 smallTablet:grid-cols-2">
            {plans.map((val) => (
              <Section1Cards
                title={val.title}
                description={val.description}
                icon1={val.icon1}
                icon2={val.icon2}
                icon3={val.icon3}
                detailedDescription1={val.detailedDescription1}
                detailedDescription2={val.detailedDescription2}
                detailedDescription3={val.detailedDescription3}
                pricingTitle={val.pricingTitle}
                strikePrice={val.strikePrice}
                pricingDescription={val.pricingDescription}
                buttonText={val.buttonText}
                buttonType={val.buttonType}
                link={val.link}
              />
              ))}
          </div>
        </div>
    </div>
  );
}

export default Section1;
