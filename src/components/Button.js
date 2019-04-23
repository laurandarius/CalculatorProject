import styled from "styled-components";

const ButtonLayout = styled.button`
  width: 58.2px;
  height: 47.5px;
  background-color: gainsboro;
  font-size: 22px;
  color: black;
`;

const Button = props => <ButtonLayout>{props.value}</ButtonLayout>;

export default Button;
