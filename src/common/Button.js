import React from "react";

function Button({ text, ...classes }) {
  return (
    <div
      className={`p-2 pl-3 pr-3 cursor-default bg-gradient-to-r from-[#8E2DE2] to-[#3E4EB4] rounded-lg cursor-pointer text-center ${classes}`}
    >
      {text}
    </div>
  );
}

export default Button;
