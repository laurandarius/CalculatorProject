import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import styled from "styled-components";

const CalculatorLayout = styled.div`
  width: 233px;
  height: 319px;
  margin: 40px 0px 0px 40px;
  border-radius: 9px 9px 9px 9px;
  box-shadow: 5px 20px 40px 1px #888888;
`;

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [operation, setOperation] = useState("noOp");
  const [firstOperand, setFirstOperand] = useState(0);
  const [secondOperand, setSecondOperand] = useState(0);
  const [isReset, setResetStatus] = useState(true);

  const onResetClick = value => {
    if (result !== "0") setResult("0");
    if (firstOperand !== 0) setFirstOperand(0);
    if (secondOperand !== 0) setSecondOperand(0);
    if (operation !== "noOp") setOperation("noOp");
    if (isReset === false) setResetStatus(true);
  };

  const onNumberClick = value => {
    setResetStatus(false);
    if (value === ",") setResult(!result.includes(".") ? result + "." : result);
    else {
      if (firstOperand !== 0 || result === "0.") {
        setResult(result + value);
        setFirstOperand(Number(result + value));
      } else {
        setResult(value);
        setFirstOperand(Number(value));
      }
    }
  };

  const onUnaryOperatorClick = value => {
    switch (value) {
      case "%":
        setSecondOperand(Number(result) / 100);
        setResult((Number(result) / 100).toString());
        break;
      case "±":
        setSecondOperand(-Number(result));
        setResult((-Number(result)).toString());
        break;
      default:
    }
    setFirstOperand(0);
    setOperation(value);
  };

  const onArithOperatorClick = value => {
    switch (operation) {
      case "+":
        setSecondOperand(secondOperand + firstOperand);
        setResult(secondOperand + firstOperand);
        break;
      case "-":
        setSecondOperand(secondOperand - firstOperand);
        setResult(secondOperand - firstOperand);
        break;
      case "×":
        setSecondOperand(secondOperand * firstOperand);
        setResult(secondOperand * firstOperand);
        break;
      case "÷":
        setSecondOperand(secondOperand / firstOperand);
        setResult(secondOperand / firstOperand);
        break;
      case "noOp":
        setSecondOperand(firstOperand);
        break;
      default:
    }
    setFirstOperand(0);
    setOperation(value);
  };

  return (
    <CalculatorLayout>
      <Display result={result} />
      <Button
        value={isReset ? "AC" : "C"}
        position={"left"}
        onClick={onResetClick}
      />
      <Button value={"±"} position={"left"} onClick={onUnaryOperatorClick} />
      <Button value={"%"} position={"left"} onClick={onUnaryOperatorClick} />
      <Button value={"÷"} position={"right"} onClick={onArithOperatorClick} />
      <Button value={"7"} position={"left"} onClick={onNumberClick} />
      <Button value={"8"} position={"left"} onClick={onNumberClick} />
      <Button value={"9"} position={"left"} onClick={onNumberClick} />
      <Button value={"×"} position={"right"} onClick={onArithOperatorClick} />
      <Button value={"4"} position={"left"} onClick={onNumberClick} />
      <Button value={"5"} position={"left"} onClick={onNumberClick} />
      <Button value={"6"} position={"left"} onClick={onNumberClick} />
      <Button value={"-"} position={"right"} onClick={onArithOperatorClick} />
      <Button value={"1"} position={"left"} onClick={onNumberClick} />
      <Button value={"2"} position={"left"} onClick={onNumberClick} />
      <Button value={"3"} position={"left"} onClick={onNumberClick} />
      <Button value={"+"} position={"right"} onClick={onArithOperatorClick} />
      <Button
        value={"0"}
        cellSize={"2"}
        position={"left"}
        onClick={onNumberClick}
      />
      <Button value={","} position={"left"} onClick={onNumberClick} />
      <Button value={"="} position={"right"} onClick={onArithOperatorClick} />
    </CalculatorLayout>
  );
};

export default Calculator;
