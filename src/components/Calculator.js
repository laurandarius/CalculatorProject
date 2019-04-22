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
  const [result, setResult] = useState(0);

  const onClick = value => {
    if (Array.from(Array(10), (x, i) => i).includes(Number(value)))
      setResult(value);
  };

  return (
    <CalculatorLayout>
      <Display result={result} />
      <Button value={"C"} position={"left"} onClick={onClick} />
      <Button value={"±"} position={"left"} onClick={onClick} />
      <Button value={"%"} position={"left"} onClick={onClick} />
      <Button value={"÷"} position={"right"} onClick={onClick} />
      <Button value={"7"} position={"left"} onClick={onClick} />
      <Button value={"8"} position={"left"} onClick={onClick} />
      <Button value={"9"} position={"left"} onClick={onClick} />
      <Button value={"×"} position={"right"} onClick={onClick} />
      <Button value={"4"} position={"left"} onClick={onClick} />
      <Button value={"5"} position={"left"} onClick={onClick} />
      <Button value={"6"} position={"left"} onClick={onClick} />
      <Button value={"-"} position={"right"} onClick={onClick} />
      <Button value={"1"} position={"left"} onClick={onClick} />
      <Button value={"2"} position={"left"} onClick={onClick} />
      <Button value={"3"} position={"left"} onClick={onClick} />
      <Button value={"+"} position={"right"} onClick={onClick} />
      <Button value={"0"} cellSize={"2"} position={"left"} onClick={onClick} />
      <Button value={","} position={"left"} onClick={onClick} />
      <Button value={"="} position={"right"} onClick={onClick} />
    </CalculatorLayout>
  );
};

export default Calculator;
