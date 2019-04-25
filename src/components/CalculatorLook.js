import React from "react";
import Button from "./Button";
import Display from "./Display";
import styled from "styled-components";

const CalculatorLayout = styled.div`
  width: 233px;
  height: 319px;
  margin: 40px 0px 0px 40px;
  border-radius: 9px 9px 9px 9px;
  box-shadow: 5px 20px 40px 1px #888888;
`;

const CalculatorLook = ({
  reset,
  result,
  onResetClick,
  onUnaryOperatorClick,
  onArithOperatorClick,
  onNumberClick
}) => {
  const buttonProps = [
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: reset,
      onClick: () => onResetClick(reset)
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: "±",
      onClick: () => onUnaryOperatorClick("±")
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: "%",
      onClick: () => onUnaryOperatorClick("%")
    },
    {
      backgroundColor: "orange",
      color: "white",
      children: "÷",
      onClick: () => onArithOperatorClick("÷")
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: "7",
      onClick: () => onNumberClick("7")
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: "8",
      onClick: () => onNumberClick("8")
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: "9",
      onClick: () => onNumberClick("9")
    },
    {
      backgroundColor: "orange",
      color: "white",
      children: "×",
      onClick: () => onArithOperatorClick("×")
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: "4",
      onClick: () => onNumberClick("4")
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: "5",
      onClick: () => onNumberClick("5")
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: "6",
      onClick: () => onNumberClick("6")
    },
    {
      backgroundColor: "orange",
      color: "white",
      children: "-",
      onClick: () => onArithOperatorClick("-")
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: "1",
      onClick: () => onNumberClick("1")
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: "2",
      onClick: () => onNumberClick("2")
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: "3",
      onClick: () => onNumberClick("3")
    },
    {
      backgroundColor: "orange",
      color: "white",
      children: "+",
      onClick: () => onArithOperatorClick("+")
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: "0",
      onClick: () => onNumberClick("0"),
      size: "large"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      children: ",",
      onClick: () => onNumberClick(",")
    },
    {
      backgroundColor: "orange",
      color: "white",
      children: "=",
      onClick: () => onArithOperatorClick("=")
    }
  ];

  return (
    <CalculatorLayout>
      <Display result={result} />
      {Array.from({ length: 19 }, (_, i) => (
        <Button
          key={i}
          backgroundColor={buttonProps[i]["backgroundColor"]}
          size={buttonProps[i]["size"]}
          color={buttonProps[i]["color"]}
          onClick={buttonProps[i]["onClick"]}
        >
          {buttonProps[i]["children"]}
        </Button>
      ))}
    </CalculatorLayout>
  );
};

export default CalculatorLook;
