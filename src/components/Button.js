import React from "react";
import styled from "styled-components";

const sizes = {
  small: "58.2px",
  large: "116.6px"
};

const ButtonLayout = styled.button`
  width: ${props => props.size};
  height: 47.5px;
  background-color: ${props => props.backgroundColor};
  font-size: 22px;
  color: ${props => props.color};
`;

const Button = props => (
  <ButtonLayout
    backgroundColor={props.backgroundColor}
    size={sizes[props.size ? "large" : "small"]}
    color={props.color}
    onClick={props.onClick}
  >
    {props.children}
  </ButtonLayout>
);

export default Button;
