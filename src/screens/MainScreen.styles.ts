import styled from "styled-components";

const StyledMainScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

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

export default StyledMainScreen;
