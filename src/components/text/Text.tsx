import React from "react";
import StyledText from "./Text.styles";

const Text: React.FC<React.HTMLProps<HTMLParagraphElement>> = (props) => (
  <StyledText {...(props as any)} />
);

export default Text;
