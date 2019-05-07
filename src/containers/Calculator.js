import React from "react";
import CalculatorRenderer from "../components/Calculator";

class Calculator extends React.Component {
  state = {
    result: "0",
    operation: "noOp",
    firstOperand: 0,
    secondOperand: 0
  };

  onClick = value => {
    switch (value) {
      case "0":
        this.onNumberClick(value);
        break;
      case "1":
        this.onNumberClick(value);
        break;
      case "2":
        this.onNumberClick(value);
        break;
      case "3":
        this.onNumberClick(value);
        break;
      case "4":
        this.onNumberClick(value);
        break;
      case "5":
        this.onNumberClick(value);
        break;
      case "6":
        this.onNumberClick(value);
        break;
      case "7":
        this.onNumberClick(value);
        break;
      case "8":
        this.onNumberClick(value);
        break;
      case "9":
        this.onNumberClick(value);
        break;
      case ",":
        this.onNumberClick(value);
        break;
      case "+":
        this.onArithOperatorClick(value);
        break;
      case "-":
        this.onArithOperatorClick(value);
        break;
      case "*":
        this.onArithOperatorClick(value);
        break;
      case "/":
        this.onArithOperatorClick(value);
        break;
      case "=":
        this.onArithOperatorClick(value);
        break;
      case "AC":
      case "C":
        this.onResetClick(value);
        break;
      case "±":
        this.onUnaryOperatorClick(value);
        break;
      case "%":
        this.onUnaryOperatorClick(value);
        break;
      default:
    }
  };

  buttonProps = [
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "AC"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "±"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "%"
    },
    {
      backgroundColor: "orange",
      color: "white",
      value: "÷"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "7"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "8"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "9"
    },
    {
      backgroundColor: "orange",
      color: "white",
      value: "×"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "4"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "5"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "6"
    },
    {
      backgroundColor: "orange",
      color: "white",
      value: "-"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "1"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "2"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "3"
    },
    {
      backgroundColor: "orange",
      color: "white",
      value: "+"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: "0",
      size: "large"
    },
    {
      backgroundColor: "gainsboro",
      color: "black",
      value: ","
    },
    {
      backgroundColor: "orange",
      color: "white",
      value: "="
    }
  ];

  onResetClick = value => {
    this.setState({
      result: "0",
      operation: "noOp",
      firstOperand: 0,
      secondOperand: 0
    });
    this.buttonProps[0].value = "AC";
  };

  onNumberClick = value => {
    this.buttonProps[0].value = "C";
    if (value === ",") {
      if (!this.state.result.includes("."))
        this.setState(
          Object.assign(this.state, {
            result: this.state.result + "."
          })
        );
    } else {
      if (this.state.firstOperand !== 0 || this.state.result === "0.") {
        this.setState(
          Object.assign(this.state, {
            result: this.state.result + value,
            firstOperand: Number(this.state.result + value)
          })
        );
      } else {
        this.setState(
          Object.assign(this.state, {
            result: value,
            firstOperand: Number(value)
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
      <CalculatorRenderer
        result={this.state.result}
        buttonProps={this.buttonProps}
        onClick={this.onClick}
      />
    );
  }
}

export default Calculator;
