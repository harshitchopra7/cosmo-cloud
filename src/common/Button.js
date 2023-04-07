import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  ${({expand}) => expand && `
    width: 400px;
    transition: width 1s ease-in-out;
    background: none;
    background-color: #312D52;
  `}

  ${({disabled}) => disabled && `
    pointer-events: none;
  `}
`;

function Button({ text, expand, disabled, onClick, ...classes }) {
  return (
    <Container
      className={`p-2 pl-4 pr-4 bg-gradient-to-r from-[#8E2DE2] to-[#3E4EB4] rounded-lg cursor-pointer text-center text-[16px] font-medium ${classes.width && `w-[${classes.width}] mobile:w-full`
        } `}
      onClick={onClick}
      expand={expand}
      disabled={disabled}
    >
      {text}
    </Container>
  );
}

export default Button;
