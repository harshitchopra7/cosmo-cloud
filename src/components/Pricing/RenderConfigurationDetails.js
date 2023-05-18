import React from "react";

const RenderConfigurationDetails = ({
  title,
  description,
  type,
  currencyType,
}) => {
  return (
    <div className="flex items-center justify-between text-sm font-medium mb-4">
      <p className="text-[#BFB8B8] text-[16px] font-medium">{title}</p>
      <p className="text-[16px] font-medium">
        {type === "priceBreakdown" && <span>{currencyType}</span>}
        {description}
        {type === "priceBreakdown" && <span>/month</span>}
      </p>
    </div>
  );
};

export default RenderConfigurationDetails;
