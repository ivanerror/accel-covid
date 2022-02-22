import styled from "@emotion/styled";
import Color from "../Color";

export default styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  color: ${Color.White};
  margin: 0 auto;
  padding: 0 1rem;
  overflow: auto;
  padding-top: 1rem;
  min-height: 100%;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
