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

const Calculator = ({ result, buttonProps, onClick }) => {
  const renderKeyboard = () => (
    <>
      {buttonProps.map(btn => (
        <Button
          key={btn.value}
          backgroundColor={btn.backgroundColor}
          size={btn.size}
          color={btn.color}
          onClick={() => onClick(btn.value)}
        >
          {btn.value}
        </Button>
      ))}
    </>
  );

  return (
    <CalculatorLayout>
      <Display result={result} />
      {renderKeyboard()}
    </CalculatorLayout>
  );
};

export default Calculator;
