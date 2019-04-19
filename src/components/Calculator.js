import React, { Component } from "react";
import Display from "./Display";
import Button from "./Button";
import styled from "styled-components";

const CalculatorLayout = styled.div`
  width: 233px;
  height: 319px;
  margin: 40px 0px 0px 40px;
  border-radius: 9px 9px 9px 9px;
`;

const Calculator = () => (
  <CalculatorLayout>
    <Display result={0} />
    <Button value={"C"} position={"left"} />
    <Button value={"±"} position={"left"} />
    <Button value={"%"} position={"left"} />
    <Button value={"÷"} position={"right"} />
    <Button value={"7"} position={"left"} />
    <Button value={"8"} position={"left"} />
    <Button value={"9"} position={"left"} />
    <Button value={"×"} position={"right"} />
    <Button value={"4"} position={"left"} />
    <Button value={"5"} position={"left"} />
    <Button value={"6"} position={"left"} />
    <Button value={"-"} position={"right"} />
    <Button value={"1"} position={"left"} />
    <Button value={"2"} position={"left"} />
    <Button value={"3"} position={"left"} />
    <Button value={"+"} position={"right"} />
    <Button value={"0"} cellSize={"2"} position={"left"} />
    <Button value={","} position={"left"} />
    <Button value={"="} position={"right"} />
  </CalculatorLayout>
);

export default Calculator;
