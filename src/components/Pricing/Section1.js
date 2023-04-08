import React from "react";
import Section1Cards from "./Section1Cards";

import Bolt from "./assets/Bolt";
import CloudDownload from "./assets/CloudDownload";
import Group from "./assets/Group";
import Webhook from "./assets/Webhook";
import { MdArrowDownward } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    title: "Free Plan",
    description: "For experimentation, and early development",
    icon1: <Webhook />,
    icon2: <CloudDownload />,
    icon3: <Bolt />,
    detailedDescription1: "1 million API requests/month",
    detailedDescription2: "Up to 1 GB data bandwidth",
    detailedDescription3: "Up to 5 requests per second",
    pricingTitle: "free for",
    pricingDescription: "First 7 days",
    buttonText: "Try free",
    link: "",
  },
  {
    title: "Personal",
    description: "For low-scale production APIs",
    icon1: <Group />,
    icon2: <Webhook />,
    icon3: <CloudDownload />,
    detailedDescription1: "Best for small and medium sized orgs",
    detailedDescription2: "Up to 200 million API requests/month",
    detailedDescription3: "Up to 10 GB data bandwidth",
    pricingTitle: "starts at",
    pricingDescription: "0.59/hour",
    buttonText: "Get started",
    link: "",
    strikePrice: "₹0.69",
  },
  {
    title: "Starter",
    description: "For low-scale production APIs",
    icon1: <Group />,
    icon2: <Webhook />,
    icon3: <CloudDownload />,
    detailedDescription1: "Best for small and medium sized orgs",
    detailedDescription2: "Up to 200 million API requests/month",
    detailedDescription3: "Up to 10 GB data bandwidth",
    pricingTitle: "starts at",
    pricingDescription: "₹0.69/hour",
    buttonText: "Get started",
    link: "",
  },
  {
    title: "Standard",
    description: "For low-scale production APIs",
    icon1: <Group />,
    icon2: <Webhook />,
    icon3: <CloudDownload />,
    detailedDescription1: "Best for small and medium sized orgs",
    detailedDescription2: "Up to 200 million API requests/month",
    detailedDescription3: "Up to 10 GB data bandwidth",
    pricingTitle: "starts at",
    pricingDescription: "₹0.69/hour",
    buttonText: "Get started",
    link: "",
  },
  {
    title: "Enterprise",
    description: "High-performance for your workload needs.",
    icon1: <Webhook />,
    icon2: <CloudDownload />,
    icon3: <Bolt />,
    detailedDescription1: "Unlimited API requests/month",
    detailedDescription2: "100 GB data bandwidth",
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
    <div className="px-[auto] pb-[72px] mx-[auto] w-[1184px] mobile:w-[330px]">
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
          <div className="mt-8 grid grid-cols-3 items-center gap-9 mobile:flex mobile:flex-col mobile:gap-6">
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
