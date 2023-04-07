import React from "react";
import Slider from "@mui/material/Slider";

const SliderComponent = ({
  defaultValue,
  value,
  setterValue,
  min,
  max,
  disabled = false,
  color,
  step,
  marks,
}) => {
  return (
    <div>
      <Slider
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => setterValue(e.target.value)}
        valueLabelDisplay={disabled ? "auto" : "on"}
        aria-label="Small"
        color="primary"
        disabled={disabled}
        min={min}
        max={max}
        style={{ color: color }}
        step={step}
        marks={marks}
      />
      <div className="flex items-center justify-between text-sm">
        <p>{min}</p>
        <p>{max}</p>
      </div>
    </div>
  );
};

export default SliderComponent;
