import React from "react";
import CalculatorLook from "./CalculatorLook";

class Calculator extends React.Component {
  state = {
    result: "0",
    operation: "noOp",
    firstOperand: 0,
    secondOperand: 0,
    isReset: true
  };

  onResetClick = value => {
    this.setState({
      result: "0",
      operation: "noOp",
      firstOperand: 0,
      secondOperand: 0,
      isReset: true
    });
  };

  onNumberClick = value => {
    if (value === ",") {
      console.log(this.state.result);
      if (!this.state.result.includes("."))
        this.setState(
          Object.assign(this.state, {
            result: this.state.result + ".",
            isReset: false
          })
        );
    } else {
      if (this.state.firstOperand !== 0 || this.state.result === "0.") {
        this.setState(
          Object.assign(this.state, {
            result: this.state.result + value,
            firstOperand: Number(this.state.result + value),
            isReset: false
          })
        );
      } else {
        this.setState(
          Object.assign(this.state, {
            result: value,
            firstOperand: Number(value),
            isReset: false
          })
        );
      }
    }
  };

  onUnaryOperatorClick = value => {
    switch (value) {
      case "%":
        this.setState(
          Object.assign(this.state, {
            secondOperand: Number(this.state.result) / 100,
            result: (Number(this.state.result) / 100).toString()
          })
        );
        break;
      case "±":
        this.setState(
          Object.assign(this.state, {
            secondOperand: -Number(this.state.result),
            result: (-Number(this.state.result)).toString()
          })
        );
        break;
      default:
    }

    this.setState(
      Object.assign(this.state, {
        firstOperand: 0,
        operation: value
      })
    );
  };

  onArithOperatorClick = value => {
    switch (this.state.operation) {
      case "+":
        this.setState(
          Object.assign(this.state, {
            secondOperand: this.state.secondOperand + this.state.firstOperand,
            result: (
              this.state.secondOperand + this.state.firstOperand
            ).toString()
          })
        );
        break;
      case "-":
        this.setState(
          Object.assign(this.state, {
            secondOperand: this.state.secondOperand - this.state.firstOperand,
            result: (
              this.state.secondOperand - this.state.firstOperand
            ).toString()
          })
        );
        break;
      case "×":
        this.setState(
          Object.assign(this.state, {
            secondOperand: this.state.secondOperand * this.state.firstOperand,
            result: (
              this.state.secondOperand * this.state.firstOperand
            ).toString()
          })
        );
        break;
      case "÷":
        this.setState(
          Object.assign(this.state, {
            secondOperand: this.state.secondOperand / this.state.firstOperand,
            result: (
              this.state.secondOperand / this.state.firstOperand
            ).toString()
          })
        );
        break;
      case "noOp":
        this.setState(
          Object.assign(this.state, {
            secondOperand: this.state.firstOperand
          })
        );
        break;
      default:
    }

    this.setState(
      Object.assign(this.state, {
        firstOperand: 0,
        operation: value
      })
    );
  };

  render() {
    return (
      <CalculatorLook
        reset={this.state.isReset === true ? "AC" : "C"}
        result={this.state.result}
        onResetClick={this.onResetClick}
        onUnaryOperatorClick={this.onUnaryOperatorClick}
        onArithOperatorClick={this.onArithOperatorClick}
        onNumberClick={this.onNumberClick}
      />
    );
  }
}

export default Calculator;
