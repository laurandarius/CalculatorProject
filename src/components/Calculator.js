import { useState } from "react";

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

  return "Hello World";
};

export default Calculator;
