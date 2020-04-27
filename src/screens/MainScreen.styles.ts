import styled from "styled-components";

export const StyledCenteredDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  max-width: calc(100vw - 12px);

  & > :nth-child(n + 2) {
      margin-top: 12px;
  }
`;

export const StyledTopLeftDiv = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;
  display: flex;
  flex-direction: column;
  max-width: calc(100vw - 24px);

  & > :nth-child(n + 2) {
      margin-top: 12px;
  }
`;
