import React from "react";
import styled from "styled-components";

const styles = {
  right: {
    backgroundColor: "orange",
    color: "white"
  },
  left: {
    backgroundColor: "gainsboro",
    color: "black"
  }
};

const sizes = ["58.2px", "116.6px"];

const ButtonLayout = styled.button`
  width: ${props => props.cellSize};
  height: 47.5px;
  background-color: ${props => props.backgroundColor};
  font-size: 22px;
  color: ${props => props.color};
`;

const Button = props => (
  <ButtonLayout
    backgroundColor={styles[props.position]["backgroundColor"]}
    cellSize={sizes[Number(props.cellSize) - 1 || 0]}
    color={styles[props.position]["color"]}
    onClick={() => props.onClick(props.value)}
  >
    {props.value}
  </ButtonLayout>
);

export default Button;
