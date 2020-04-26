import styled, { css } from "styled-components";

const StyledButton = styled.button`
  appearance: none;
  font-family: "Press Start 2P";
  font-size: 20px;
  padding: 12px;
  border-radius: 8px;
  background: #28242c;
  border: none;
  color: white;
  outline: none;

  ${(props) =>
    props.disabled
      ? css`
          opacity: 0.7;
        `
      : css`
          opacity: 0.9;
          cursor: pointer;

          &:hover {
            opacity: 0.95;
          }
        `
  }
`;

export default StyledButton;
