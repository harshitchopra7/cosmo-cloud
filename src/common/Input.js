import React from "react";

function Input({ placeholder, value, onChange, width = "300px" }) {
  return (
    <input
      className={`h-[45px] w-[${width}] text-[#95949E] pl-4 pr-4 bg-[#211E33] !outline-none rounded-lg`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
