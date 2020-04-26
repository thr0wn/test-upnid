import React from "react";
import StyledInput from "./Input.styles";

const Input: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => (
  <StyledInput {...(props as any)} />
);

export default Input;
