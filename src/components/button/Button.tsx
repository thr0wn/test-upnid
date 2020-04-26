import React from "react";
import StyledButton from "./Button.styles";

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = (props) => (
  <StyledButton {...(props as any)} />
);

export default Button;
