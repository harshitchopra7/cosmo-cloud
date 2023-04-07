import React from "react";

function Button({ text, onClick, ...classes }) {
  return (
    <div
      className={`p-2 pl-3 pr-3 bg-gradient-to-r from-[#8E2DE2] to-[#3E4EB4] rounded-lg cursor-pointer text-center text-[16px] font-medium ${classes.width && `w-[${classes.width}] mobile:w-full`
        } `}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default Button;
