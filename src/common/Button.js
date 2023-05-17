import React from "react";
import styled from "styled-components";

const Container = styled.button`
  /* transition: width 4s ease-in-out !important; */
  ${({ expand }) =>
    expand &&
    `
    background: none;
    background-color: #312D52;
  `}
  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
  `};
`;

function Button({ text, expand, disabled, onClick, className, borderBackground=false, ...props }) {
  return (
    <Container
      className={`p-2 pl-4 pr-4 bg-gradient-to-r from-[#8E2DE2] to-[#3E4EB4] rounded-lg cursor-pointer text-center text-[16px] font-medium ${className}`}
      onClick={onClick}
      expand={expand}
      disabled={disabled}
      {...props}
    >
      {text}
    </Container>
  );
}

export default Button;
