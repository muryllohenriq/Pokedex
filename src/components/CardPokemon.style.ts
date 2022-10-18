import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  min-height: 115px;
  background-color: #b9b8d3;
  border-radius: 10px;
  padding: 20px;

  position: relative;

  &.type--bug {
    background-color: #8bd674;
  }
  &.type--dark {
    background-color: #6f6e78;
  }
  &.type--dragon {
    background-color: #7383b9;
  }
  &.type--electric {
    background-color: #f2cb55;
  }
  &.type--fairy {
    background-color: #eba8c3;
  }
  &.type--fighting {
    background-color: #eb4971;
  }
  &.type--fire {
    background-color: #ffa756;
  }
  &.type--flying {
    background-color: #83a2e3;
  }
  &.type--ghost {
    background-color: #8571be;
  }
  &.type--grass {
    background-color: #8bbe8a;
  }
  &.type--ground {
    background-color: #f78551;
  }
  &.type--ice {
    background-color: #91d8df;
  }
  &.type--noemal {
    background-color: #b5b9c4;
  }
  &.type--poison {
    background-color: #9f6e97;
  }
  &.type--psychic {
    background-color: #ff6568;
  }
  &.type--rock {
    background-color: #d4c294;
  }
  &.type--steel {
    background-color: #4c91b2;
  }
  &.type--water {
    background-color: #58abf6;
  }
`;

export const Number = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: rgba(23, 23, 27, 0.6);
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;
  color: #ffffff;
  margin-bottom: 2px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 130px;
  position: absolute;
  top: -30px;
  right: 10px;

  @media only screen and (max-width: 400px) {
    max-height: 110px;
    top: -20px;
    right: -5px;
  }
`;
