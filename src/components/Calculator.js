import React from "react";
import Button from "./Button";
import styled from "styled-components";

const CalculatorLayout = styled.div`
  width: 233px;
  height: 319px;
  margin: 40px 0px 0px 40px;
  border-radius: 9px 9px 9px 9px;
  box-shadow: 5px 20px 40px 1px #888888;
`;

const Calculator = () => (
  <CalculatorLayout>
    <Button backgroundColor="gainsboro" color="black">
      C
    </Button>
    <Button backgroundColor="gainsboro" color="black">
      ±
    </Button>
    <Button backgroundColor="gainsboro" color="black">
      %
    </Button>
    <Button backgroundColor="orange" color="white">
      ÷
    </Button>
    <Button backgroundColor="gainsboro" color="black">
      7
    </Button>
    <Button backgroundColor="gainsboro" color="black">
      8
    </Button>
    <Button backgroundColor="gainsboro" color="black">
      9
    </Button>
    <Button backgroundColor="orange" color="white">
      ×
    </Button>
    <Button backgroundColor="gainsboro" color="black">
      4
    </Button>
    <Button backgroundColor="gainsboro" color="black">
      5
    </Button>
    <Button backgroundColor="gainsboro" color="black">
      6
    </Button>
    <Button backgroundColor="orange" color="white">
      -
    </Button>
    <Button backgroundColor="gainsboro" color="black">
      1
    </Button>
    <Button backgroundColor="gainsboro" color="black">
      2
    </Button>
    <Button backgroundColor="gainsboro" color="black">
      3
    </Button>
    <Button backgroundColor="orange" color="white">
      +
    </Button>
    <Button backgroundColor="gainsboro" size="large" color="black">
      0
    </Button>
    <Button backgroundColor="gainsboro" color="black">
      ,
    </Button>
    <Button backgroundColor="orange" color="white">
      =
    </Button>
  </CalculatorLayout>
);

export default Calculator;
