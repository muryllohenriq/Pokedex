import styled from "styled-components";

export const Text = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 62px;
  color: #17171b;

  max-width: 700px;
  margin: 160px 0px 80px;

  @media only screen and (max-width: 400px) {
    font-size: 32px;
    line-height: 40px;
    margin: 80px 0 60px;
  }
`;